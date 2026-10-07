# Technical Design

**Estado:** desenho conceptual proposto · Sprint 1, entregável 7 · stack e contratos finais pendentes

## 1. Contexto e fronteiras

Morador, administrador e prestador usam um cliente proposto web responsivo. O backend coordena ocorrências e intervenções, consulta um fornecedor de IA e integra calendário externo ou simulador. A escolha do cliente/stack integra DEC-04; não está implementada.

| Unidade proposta | Responsabilidade / dados que controla | Comunicação |
|---|---|---|
| Cliente | Formulários, filas, estados e correções; sem autoridade sobre permissões | API autenticada |
| Issue Service | Edifícios/pertenças para autorização, relatos, ocorrências, triagem, resumos e confirmações | API; publica eventos; recebe resultados autorizados |
| Dispatch Service | Catálogo, propostas, respostas, marcações e custos | API; eventos; adaptador calendário |
| Worker de triagem | Processa eventos, chama IA/regras, entrega sugestões com versão | Fila e interface interna do Issue Service; não escreve tabelas alheias |
| Worker de notificações | Entrega notificações idempotentes; localização final por decidir | Eventos de estado; canal in-app proposto |
| Broker | Transporte e reentrega | Publicação/consumo autenticados |
| Armazenamento | Persistência; uma tecnologia proposta para limitar complexidade | Esquemas e credenciais por responsabilidade |
| Calendário/simulador | Respostas de criação/consulta de marcação e falhas simuláveis | Contrato externo com referência e chave idempotente |

Issue e Dispatch são os **dois componentes backend independentemente implantáveis propostos**. Workers podem ter processos próprios; agrupamento final depende de ADR/DEC-04. Não usar simulador como substituto artificial de componente de negócio.

Uma instância de base de dados pode alojar esquemas separados no ambiente académico; não autoriza escrita cruzada. Explicitar dependência operacional partilhada e migrações compatíveis. Tecnologia, fila e mecanismo de autenticação entre serviços por decidir.

## 2. Modelo de domínio

| Entidade | Relações e campos conceptuais |
|---|---|
| Organização | Gere vários edifícios; permite representar empresa administradora |
| Edifício | Pertence a organização; zonas/localizações; identificador de autorização |
| Utilizador / Pertença | Utilizador pode ter papel em vários edifícios; papel global não concede acesso universal |
| Relato | Autor, edifício, zona, texto privado, instante e origem; ligado a ocorrência |
| Ocorrência | Agrega um ou mais relatos; categoria/urgência, estado, versão, resumo publicado opcional |
| Sugestão de triagem | Ocorrência, versão de origem, resultado, regras/modelo/prompt e instante |
| Confirmação de impacto | Utilizador + ocorrência únicos; retirada possível |
| Prestador | Especialidade/cobertura; dados sintéticos no MVP |
| Intervenção | Ocorrência referenciada, prestador, proposta e versão, aprovação e resposta |
| Marcação | Intervenção, intervalo, estado, referência externa ou origem manual |
| Registo de custo | Intervenção, valor opcional, moeda, origem e confirmação |
| Evento de auditoria | Ator, ação, referência, versão e instante; evitar texto privado desnecessário |
| Notificação | Evento/destinatário/canal únicos, estado de entrega |

Cardinalidades: organização 1:N edifícios; utilizadores N:M edifícios por pertenças; ocorrência 1:N relatos e 0:N intervenções; intervenção 0:N versões de marcação, com no máximo uma ativa. Contratos usam IDs; nenhum serviço altera diretamente os dados do outro.

## 3. Estados e regras de negócio

| Percurso de ocorrência | Regra proposta |
|---|---|
| Recebida → em triagem → triada | Registo independente de IA; administrador confirma triagem |
| Triada → em coordenação | Pedido de intervenção em preparação/envio |
| Em coordenação → agendada | Projeção de uma marcação efetivamente confirmada |
| Agendada → em execução → aguarda validação | Prestador atribuído comunica progresso/conclusão |
| Aguarda validação → resolvida | Administrador valida; devolução à execução exige motivo |
| Resolvida → em triagem | Reabertura com motivo |
| Aberta → resolvida/cancelada manualmente | Administrador justifica; coordenar cancelamento de intervenção ativa |

Intervenção tem estado próprio: proposta → aprovada/enviada → aceite ou recusada/contraproposta → agendamento pendente → confirmado externo/manual → em execução → concluída. Contraproposta altera versão e exige nova aprovação. Cancelamentos propagam-se com pendência visível até reconciliação.

O histórico da ocorrência pode refletir eventos do Dispatch com atraso; mostrar instante de atualização. Não confundir consistência eventual com confirmação de uma ação que não aconteceu. DEC-10 valida estas regras antes da implementação.

## 4. API inicial (sem contrato executável ainda)

| Operação proposta | Autorização / resultado |
|---|---|
| POST /reports | Morador do edifício; devolve ID após persistência; chave idempotente |
| GET /issues e GET /issues/{id} | Filtro por pertença e projeção por papel |
| POST /issues/{id}/triage | Administrador do edifício; versão e motivo |
| POST /issues/{id}/publication | Administrador publica resumo sanitizado |
| PUT/DELETE /issues/{id}/impact | Morador do edifício; contribuição única |
| POST /issues/{id}/associations | Administrador; associação/reversão auditadas |
| GET /contractors | Administrador; filtros explícitos |
| POST /interventions | Administrador; proposta com ocorrência autorizada |
| POST /interventions/{id}/approval | Administrador; versão e idempotência |
| POST /interventions/{id}/response | Prestador atribuído; aceitar/recusar/contrapropor |
| POST /interventions/{id}/manual-confirmation | Administrador; origem, intervalo e motivo |
| POST /interventions/{id}/completion | Prestador atribuído ou administrador com motivo |
| POST /issues/{id}/closure ou /reopening | Administrador; validação de estado e versão |

Definir contratos OpenAPI/schemas após stack: erros 400/401/403 ou 404 sem enumeração, 409 para versão/conflito, 503 para indisponibilidade material. Não retornar sucesso de persistência se a base de dados falhar.

## 5. Workflow assíncrono e consistência

1. Issue persiste relato/ocorrência e registo de evento na mesma transação (outbox proposta).
2. Publicador envia ReportSubmitted; falha de broker preserva evento para repetição.
3. Worker valida schema, ID e versão, aplica regras e tenta IA com timeout.
4. Resultado chega à interface interna autorizada do Issue; resultado antigo não substitui correção humana.
5. Eventos de mudança alimentam projeções/notificações; consumidores deduplicam pelo eventId.
6. Dispatch gere aprovação/aceitação e emite pedido de calendário só quando elegível.

Envelope proposto: eventId, eventType, schemaVersion, aggregateId, aggregateVersion, buildingId, occurredAt, correlationId e payload mínimo. Identificadores de edifício recebidos também são validados; não bastam como autorização.

Retries com atraso crescente e limite configurado; esgotamento para registo/fila de falhas com replay controlado. Testar crash após persistir e antes de publicar, entrega repetida e eventos fora de ordem. Não prometer entrega «exactly once»; construir efeitos idempotentes.

## 6. Integração externa e modo degradado

Calendário/simulador deve suportar pedido com ID estável, consulta/reconciliação e cenários: sucesso, timeout, indisponibilidade, atraso, resposta incompleta/inválida e conflito de horário.

Timeout pode ocorrer depois de o evento externo ser criado; consultar/reconciliar antes de repetir. Confirmação manual fica distinta de sincronização externa e suspende criação automática duplicada até reconciliação. Slot em calendário não prova por si só disponibilidade do prestador.

IA indisponível: regras + revisão manual. Broker/worker indisponível: relato persistido e triagem pendente/manual. Calendário indisponível: pendente/manual. Notificação falha: estado continua consultável. Base indisponível: erro explícito sem recibo falso.

## 7. Deployment e operação propostos

- Contentores: cliente, Issue, Dispatch, workers, broker, base de dados e simulador conforme perfil.
- Apenas endpoints necessários expostos; base/broker em rede interna.
- Configuração por ambiente; segredos injetados fora do Git; identidades de serviço de menor privilégio.
- CI constrói/testa/imagens; ambiente de demonstração por escolher (DEC-04); sem compromisso com Kubernetes.
- Migrações por dono do esquema, health/readiness e versões compatíveis para deploy independente.
- Logs estruturados com correlation ID; métricas de erros, latência, fila, retries, fallback, marcações pendentes e notificações falhadas.
- Dashboard inicial na S2; backup/restore e rollback documentados/exercitados antes de release.

## 8. Lacunas e validação

Por decidir: stack, broker, base, alojamento, identidade, mecanismo de publicação, schemas finais e tratamento detalhado de remarcação/cancelamento. Registar alternativas e consequências em [ADRs](adr/README.md). Modelo de dados físico e contratos executáveis ainda não existem.

Ver [requisitos](requirements.md), [segurança](09-security-privacy.md) e [walking skeleton](10-walking-skeleton.md).

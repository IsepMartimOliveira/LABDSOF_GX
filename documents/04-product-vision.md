# 4. Product Vision

**Estado:** proposta v0.3 · **Sprint:** 1 · **Revisão:** 2026-10-09

Personas, prioridades e metas são hipóteses. Esta é a **fonte do âmbito funcional proposto**; alterações devem refletir-se no [backlog](06-product-backlog.md), [requisitos](requirements.md) e [decisões](planning/decisions-and-feedback.md).

## 1. Visão e proposta de valor

> Ajudar comunidades residenciais a recuperar de avarias do quotidiano, com coordenação rastreável, menos esforço administrativo e informação adequada a cada interveniente.

Para administradores que recebem avisos dispersos, o BMC organiza o percurso do relato à resolução, sugere triagem e apoia intervenções. O ganho esperado é menor esforço de coordenação; a diferenciação face às alternativas continua por validar.

## 2. Personas provisórias

| Persona | Contexto [Hipótese] | Ganho esperado | Dificuldade / condição de confiança a investigar |
|---|---|---|---|
| Marta, administradora profissional | Gere vários edifícios | Menos esforço por ocorrência e controlo das decisões/custos | Contactos dispersos; precisa de compreender sugestões e aprovar antes de comprometer recursos |
| Rui, morador | Usa telemóvel e reporta ocasionalmente | Reportar facilmente e conhecer estado/data confirmada | Falta de feedback; receio de exposição da localização e de detalhes privados |
| Carlos, prestador | Pequena empresa de manutenção | Pedidos completos e agenda organizada, evitando deslocações em vão | Descrições vagas, alterações tardias e dúvidas sobre condições de pagamento |

Pagamento atempado é uma necessidade a investigar, não uma promessa de funcionalidade de pagamentos. As metas de usabilidade pertencem aos [NFRs](requirements.md#requisitos-não-funcionais--restrições).

Voluntários são participantes relevantes, mas não validam por si só a adoção pelas empresas.

## 3. Jornadas e responsabilidades

### J1 — Reportar e acompanhar

1. Morador autenticado seleciona edifício a que pertence, zona e descrição por texto.
2. Sistema persiste o relato e confirma receção sem esperar pela IA.
3. Quando implementadas, sugestões de ocorrências semelhantes mostram apenas informação autorizada; associação não é automática e não apaga o relato.
4. Morador acompanha o estado e, nas ocorrências comuns publicadas, pode confirmar «isto também me afeta».
5. Recebe atualizações pelo canal definido e gere a subscrição.

### J2 — Triar e coordenar (jornada principal)

1. Administrador vê a fila dos edifícios que gere, incluindo itens sem classificação ou em fallback.
2. Revê categoria, urgência e motivo sugeridos; pode corrigir e registar a decisão.
3. Revê sugestões de duplicados, se disponíveis, e publica, quando apropriado, um resumo sem dados privados.
4. Seleciona prestador elegível de catálogo pequeno; ranking por regras explica os critérios disponíveis.
5. Aprova proposta e envia pedido. Sem prestador elegível, ocorrência fica visivelmente pendente de ação manual.
6. Após aceitação do prestador, acompanha sincronização do calendário. Sem confirmação externa, fica «agendamento pendente»; pode confirmar manualmente e registar a origem.
7. Revê conclusão, regista custo quando conhecido e encerra. Pode reabrir com motivo.

### J3 — Responder e executar

1. Prestador consulta apenas pedidos atribuídos e dados necessários.
2. Aceita, recusa ou propõe outra data. Alteração de condições volta à aprovação do administrador.
3. Comunica conclusão e custo, se conhecido. Não encerra automaticamente a ocorrência.

### J4 — Analisar custos (pós-MVP)

Administrador consulta agregações e tendências; números calculados a partir dos registos. Resumos por IA dependem de necessidade demonstrada e avaliação própria.

## 4. Fronteira do MVP proposto

| Base proposta | Candidatos condicionados | Fora da base / pós-MVP |
|---|---|---|
| Relato por texto, estados e histórico | Duplicados avançados por embeddings | Upload/análise de fotografias |
| Classificação assistida, revisão, regras e fallback | Ranking por preço/distância se houver dados fiáveis | Gráficos e resumos de custos |
| Confirmação de impacto em ocorrências comuns | Calendário real em vez de simulador | Marketplace, pagamentos, quotas e assembleias |
| Catálogo, seleção por regras e aprovação | IoT limitado, só após DEC-01 e revisão do âmbito | Monitorização abrangente e previsão de avarias |
| Resposta do prestador e integração de calendário | Canal adicional de notificação | Autoaprovação de despesas |
| Notificação num canal, encerramento e autorização efetiva | | Apps nativas e gestão de subscrições |

Custo básico pode ficar «não informado» e não bloqueia encerramento. O [backlog](06-product-backlog.md) distingue Must/Should/Could/Won't; prioridades aguardam discussão com cliente/docentes.

## 5. Métricas e sucesso

| Métrica | Como medir | Critério proposto / limitação |
|---|---|---|
| Esforço ativo administrativo — principal | Tempo de triagem e preparação em tarefas equivalentes, processo atual vs BMC | Redução pretendida; limiar pendente de baseline (DEC-08) |
| Tempo até pedido enviado | Receção até envio ao prestador | Separar espera de tempo ativo |
| Tempo até aceitação | Envio até resposta do prestador | Não confundir envio com confirmação |
| Tempo até resolução | Receção até encerramento | Exploratória; simulação não prova impacto real |
| Qualidade da triagem | Modelo, regras e sistema combinado | Protocolo e metas no [AI Assessment](07-responsible-ai-assessment.md) |
| Qualidade dos duplicados | Precisão e recall em pares rotulados, se implementado | Critérios centralizados no [AI Assessment](07-responsible-ai-assessment.md#4-critérios-provisórios) |
| Aceitação sem edição | Percentagem e auditoria de correção | Não equivale isoladamente a confiança |
| Continuidade | IA desligada e calendário indisponível | Relato e triagem continuam; agendamento pendente/manual explícito |

Entrevistas dão estimativas, não medições instrumentadas. Nos testes, variar ordem dos métodos quando possível e declarar amostra e limitações.

## 6. Participação ética e visibilidade

**Mecanismo:** «isto também me afeta», em resumos de ocorrências comuns publicados pelo administrador para o mesmo edifício.

1. Incentiva confirmar impacto em vez de repetir relatos.
2. Ajuda a compreender alcance; contador não determina urgência.
3. Uma confirmação por utilizador/ocorrência, limites de frequência e autorização por edifício.
4. Identidades não são expostas a outros moradores; sem rankings nem penalização de não participantes.
5. Utilizador pode retirar confirmação e desligar atualizações opcionais; pode sempre criar relato distinto.

O mecanismo deve respeitar a [matriz de acesso](09-security-privacy.md#2-matriz-de-acesso-proposta), incluindo a separação entre relato privado e resumo publicado. Proposta por validar em DEC-07.

## 7. Riscos

| Risco | Resposta proposta |
|---|---|
| Segmento sem interesse | Investigar episódios, ferramentas atuais e disponibilidade para testar |
| IA sem valor adicional | Comparar baseline e rever tarefa; manter workflow significativo exigido |
| Urgência crítica não reconhecida | Regras independentes e revisão; sem garantia de deteção perfeita |
| Âmbito excessivo | Ciclo completo primeiro; extras dependem de capacidade |
| Concorrente cobre fluxo | Rever valor com evidência; sem reposicionamento automático para custos |
| Falha externa | Pendência visível, retries limitados, idempotência e ação manual auditada |

DEC-01 a DEC-10 no [registo](planning/decisions-and-feedback.md). Estas propostas ainda não são decisões aprovadas por stakeholders.

## 8. Modelo de negócio

**[Hipótese]** SaaS por edifício ou fração, com condições adequadas a empresas de administração. Comprador, disposição para pagar e custos de adoção por validar em DEC-02 e no [guião de administradores](03-user-research.md#41-administrador-profissional-ou-voluntário). Comissão/parceria com prestadores é apenas uma hipótese futura, sem ampliar o MVP.

## 9. Benefício esperado para a comunidade

Pretende-se facilitar resposta a avarias de água, luz e elevadores, reduzir esforço de coordenação e dar visibilidade ao progresso. Menos demora pode reduzir impacto e danos, mas esse benefício ainda precisa de evidência. Transparência respeita as permissões; não implica publicar custos ou detalhes privados para todo o edifício.

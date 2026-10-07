# Requisitos iniciais e atributos de qualidade

**Estado:** proposta v0.1 · Sprint 1, Phase 2–3 · validação pendente

Origem: [enunciado](../LABDSOF-26-27-Assignment.md), [hipóteses P1–P7](01-problem-and-opportunity-report.md) e [visão J1–J3](04-product-vision.md). Não há ainda requisitos confirmados por entrevistas. «Must» no backlog é prioridade proposta para a release académica, não aprovação do cliente.

## Requisitos funcionais

Consultar a [tabela de épicos no Product Backlog](06-product-backlog.md#2-épicos) para o âmbito e os itens associados a cada épico.

| ID | Requisito proposto | Origem | Backlog / épico |
|---|---|---|---|
| RF-01 | Registar relato por texto em edifício autorizado e devolver ID persistente | P1, P5 / J1 | US-01 / EP-01 |
| RF-02 | Consultar estado e histórico, triar manualmente e controlar transições | P1 / J1–J2 | US-02 / EP-01 |
| RF-03 | Sugerir categoria/urgência por IA com proveniência, correção e fallback | P3, P7 / §5.6 | US-03 / EP-02 |
| RF-04 | Publicar resumo comum e permitir confirmar/retirar impacto sem expor identidade | P2, P5 / §5.5 | US-04 / EP-01 |
| RF-05 | Sugerir e rever associação de relatos semelhantes preservando originais | P2 / J2 | US-05 / EP-02 |
| RF-06 | Consultar catálogo, filtrar elegibilidade e selecionar prestador | P1, P6 / J2 | US-06 / EP-03 |
| RF-07 | Aprovar pedido, receber aceitação/recusa/contraproposta e registar revisão | P6 / J2–J3 | US-07 / EP-03 |
| RF-08 | Sincronizar calendário externo/simulador e registar pendência ou confirmação manual | P6 / §6.5 | US-08 / EP-03 |
| RF-09 | Receber conclusão, encerrar/reabrir pelo administrador com histórico | P1 / J2–J3 | US-09 / EP-03 |
| RF-10 | Notificar estados num canal e respeitar preferências opcionais | P5 / J1–J3 | US-10 / EP-01 |
| RF-11 | Registar custo básico opcional com origem, moeda e correção auditada | P1 / J2–J3 | US-11 / EP-03 |

Seleção por preço/distância e embeddings são refinamentos condicionados, não dados garantidamente disponíveis. IoT e previsão não entram nesta lista enquanto DEC-01 estiver aberta.

## Requisitos não funcionais / restrições

Os alvos numéricos abaixo são propostas para discussão (DEC-08), não resultados ou SLAs de produção. Congelar cenário, ambiente e limiares antes de medir.

| ID | Qualidade / cenário | Critério de verificação proposto | Itens |
|---|---|---|---|
| NFR-01 | Autorização e isolamento | Todos os testes da matriz autor/admin/prestador/outro edifício negam acessos indevidos no backend; identidade mock não elimina autorização | US-01–US-11, EN-03 |
| NFR-02 | Privacidade | Dados sintéticos na demo; payloads/logs sem campos pessoais desnecessários; retenção e eliminação definidas antes de recolha real | DISC-01, EN-01/03 |
| NFR-03 | Resiliência de IA | Registo funciona com IA desligada; timeout proposto de 10 s por tentativa; fallback/pending visível e correção manual disponível | US-03, EN-03 |
| NFR-04 | Entrega assíncrona | Reentrega do mesmo evento não duplica efeitos; retries limitados e falha final observável; testar crash entre persistência e publicação | US-03/08/10, EN-03 |
| NFR-05 | Desempenho | Proposta: p95 ≤ 2 s no registo/consulta, 10 utilizadores concorrentes e 1 000 ocorrências sintéticas; excluir tempo externo de IA e documentar hardware | EN-03/04 |
| NFR-06 | Observabilidade | Logs estruturados, health checks, métricas, correlation ID e erro rastreável num dashboard; demonstrar um percurso completo | EN-02/03 |
| NFR-07 | Usabilidade/acessibilidade | Jornadas por teclado, foco visível, labels e erros compreensíveis, estado sem depender só de cor; teste de reporte em ≤ 2 min como alvo a validar | US-01/02, EN-04 |
| NFR-08 | Entrega e manutenção | Builds reproduzíveis, contentores, testes/CI, configuração sem segredos no Git, instruções e recuperação exercitada | EN-02/03 |
| NFR-09 | Persistência/recuperação | Ocorrências sobrevivem a reinício; ensaio backup/restore com contagens e integridade; RPO/RTO propostos após conhecer ambiente | EN-02/03 |
| NFR-10 | Qualidade/custo de IA | Dataset e versões rastreáveis; métricas por classe, latência e custo; budget e limites antes de Ready | US-03, EN-04 |
| NFR-11 | Integração | Falha/atraso/dados incompletos ou inválidos não produzem confirmação falsa; repetição não duplica marcação | US-08, EN-03 |

## Prioridades, aceitação e rastreabilidade

[Backlog](06-product-backlog.md) contém MoSCoW proposto e critérios por item. Uma necessidade identificada por investigação deve referir E/F do registo de evidências e atualizar esta tabela. Alteração técnica significativa gera ADR.

Modelo e estados: [desenho técnico](08-technical-design.md). Políticas de acesso/dados: [segurança](09-security-privacy.md).

## Por decidir

- Metas quantitativas e ambiente (DEC-08).
- Dados visíveis, retenção e meios de exercício da eliminação (DEC-07).
- Regras de negócio de agendamento e encerramento (DEC-10).
- Suporte a relatos privados de frações no piloto; base mantém relato bruto restrito.
- Alternativa assistida para moradores sem acesso digital, a investigar antes de ampliar o MVP.

Referência: [Nonfunctional Requirements — Scaled Agile](https://framework.scaledagile.com/nonfunctional-requirements/), consultada em 2026-10-07. Os cenários e valores acima são propostas próprias para este projeto.

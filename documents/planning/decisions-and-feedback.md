# Decisões pendentes e feedback

**Estado:** registo inicial · **Revisão:** 2026-10-07

Base provisória permite elaborar documentos coerentes; não significa aprovação. Nomes e datas-limite são atribuídos pela equipa. Ao decidir, registar evidência, autor, data e documentos afetados.

## 1. Decisões abertas

| ID | Questão | Base provisória / alternativas | Participantes (nomes por atribuir) | Momento | Estado |
|---|---|---|---|---|---|
| DEC-01 | Coordenação ou IoT? | Coordenação; um cenário IoT possível; monitorização ampla exige novo âmbito | Equipa, BA/PO, docentes | Antes de fechar MVP | Por decidir |
| DEC-02 | Segmento e modelo comercial | Empresas de administração; voluntários secundários; SaaS é hipótese | BA/PO, administradores | Após investigação inicial | Por validar |
| DEC-03 | Equipa, calendário, capacidade e Sprint B | Três sprints oficiais; fases 1–3 dentro da Sprint 1; não assumir B = Sprint 2 | PM, equipa, docentes | Antes de comprometer Sprint B | Por decidir |
| DEC-04 | Stack, fronteiras e infraestrutura | Issue + Dispatch independentes; worker/fila; alternativa modular sujeita a aceitação | Tech Lead, DevOps, equipa | Antes do skeleton | Proposta ADR-001 |
| DEC-05 | Workflow, fornecedor e avaliação de IA | Classificação textual, baseline/fallback, um fornecedor; embeddings opcionais | AI, QA, BA/PO | Antes da história IA cumprir DoR | Por decidir |
| DEC-06 | Integração e notificações | Calendário simulado realista; real opcional; um canal in-app proposto | Tech Lead, BA/PO | Antes da integração | Por decidir |
| DEC-07 | Visibilidade e ciclo de vida dos dados | Relatos privados, resumo comum publicado, extrato ao prestador, dados sintéticos | QA/Segurança, BA/PO | Antes de implementar permissões | Por validar |
| DEC-08 | Baselines e alvos | Esforço administrativo principal; metas técnicas provisórias | QA, BA/PO, AI | Antes da avaliação formal | Por calibrar |
| DEC-09 | Metodologia, board e Git | Scrum adaptado, GitHub Projects ou Jira, branches curtas e PR revisto | Equipa | Phase 1 | Por ratificar/configurar |
| DEC-10 | Aprovação e confirmação | Administrador aprova pedido; prestador aceita; calendário/manual confirma; administrador encerra | BA/PO, administradores e prestadores | Antes de US-07–US-09 | Por validar |

## 2. Harmonizações editoriais

Não são feedback de investidores nem escolhas validadas por utilizadores.

| Conflito | Tratamento em 2026-10-07 |
|---|---|
| 05 tratado como backlog | Preservado roadmap; criado 06-product-backlog |
| MVP terminava na notificação | Explicitados conclusão, encerramento e histórico |
| Aprovação confundida com agendamento | Separadas aprovação, aceitação e confirmação |
| Fotos/custos/resumos na Sprint 3 e pós-curso | Pós-MVP, sem compromisso Sprint 3 |
| Autoaprovação vs aprovação humana | Autoaprovação fora da base |
| 100% de críticos como garantia | Critério restrito ao conjunto de testes |
| Não encontrado = inexistente | Comparação marcada como preliminar/não confirmada |
| IoT nas notas vs âmbito da visão | Preservado para DEC-01 |
| Proteções Git e board como factos | Configurações propostas sem evidência remota |

## 3. Feedback de stakeholders/investidores

**Nenhuma sessão ou decisão revista por feedback está registada.**

| ID | Data/participantes | Feedback e evidência | Decisão anterior → revista | Motivo | Documentos/issues | Responsável/estado |
|---|---|---|---|---|---|---|
| A preencher após sessão | — | — | — | — | — | — |

Usar [template](../templates/investor-review.md). Pelo menos uma decisão deve ser efetivamente revista em resposta aos docentes (§5.7). Ata sem mudança não satisfaz esse requisito.

## 4. Limitações e dívida técnica

| ID | Limitação | Impacto | Próxima ação | Responsável |
|---|---|---|---|---|
| LIM-01 | Sem pesquisa primária registada | Valor e adoção por validar | DISC-01 | Por atribuir |
| LIM-02 | Fontes concorrenciais incompletas | Diferenciação não demonstrada | DISC-02 | Por atribuir |
| LIM-03 | Sem código, CI ou deploy nesta base | Requisitos técnicos não demonstrados | EN-01, EN-02 | Por atribuir |

Adicionar dívida de implementação quando existir; funcionalidades futuras não são automaticamente dívida técnica.

# Backlog, labels e milestones

**Estado:** convenção proposta v0.1 · board, issues, labels e milestones remotos não criados/verificados

## Fonte e sincronização

Enquanto não existir board confirmado, o [backlog Markdown](../06-product-backlog.md) é a fonte dos itens. Após escolher GitHub Projects/Jira (DEC-09), conservar IDs locais, adicionar URLs e usar o board para estado operacional. Atualizar o snapshot documental nas reviews; não manter duas listas com prioridades incompatíveis.

Épico agrupa um resultado amplo; história entrega valor observável; tarefa trata trabalho técnico/pesquisa/documentação; bug regista desvio ao esperado. Não forçar tarefas técnicas a personas fictícias.

## Workflow

Backlog → Refinement → Ready → In progress → In review → Done.

«Blocked» pode ser um sinal separado, com motivo, dependência e próxima ação. DoR controla Ready; DoD controla Done. No estado atual, os itens são propostas em Backlog, sem estimativas ou responsáveis.

## Labels propostas

| Família | Valores | Utilização |
|---|---|---|
| Tipo | type:epic, type:story, type:task, type:bug, type:spike | Um por item |
| Área | area:product, area:frontend, area:backend, area:ai, area:devops, area:security, area:docs | Uma ou mais |
| Prioridade | priority:must, priority:should, priority:could, priority:wont | MoSCoW do horizonte escolhido |
| Fase | phase:1, phase:2, phase:3 | Organização da Sprint 1, quando aplicável |
| Sinal | needs:decision, needs:research, blocked | Explicar no corpo e retirar quando resolvido |

Não duplicar estado em labels se o board já tiver campo Status. Prioridade não mede urgência operacional de uma ocorrência do produto.

## Milestones propostas

| Nome | Saída | Data | Estado remoto |
|---|---|---|---|
| S1 — Discover, Validate and Design | Entregáveis §7.1.2, incluindo skeleton | Por confirmar | Não verificado |
| S2 — Build and Operate | Fatia operacional §7.2.2 | Por confirmar | Não verificado |
| S3 — Evaluate and Present | Avaliação e entrega §7.3.2 | Por confirmar | Não verificado |

Não criar uma milestone Sprint B até esclarecer DEC-03. Fases 1–3 podem ser campo/label, não três milestones adicionais.

## Campos mínimos

ID, tipo, épico, objetivo, prioridade e justificação, critérios de aceitação, dependências, requisitos/NFRs, responsável, estimativa, sprint/milestone, verificação DoR, evidência DoD e URL da issue.

## Templates locais

- [História](../../.github/ISSUE_TEMPLATE/user-story.md)
- [Épico](../../.github/ISSUE_TEMPLATE/epic.md)
- [Tarefa / spike](../../.github/ISSUE_TEMPLATE/task.md)
- [Bug](../../.github/ISSUE_TEMPLATE/bug.md)
- [PR](../../.github/pull_request_template.md)
- [ADR](../templates/adr.md)
- [Investigação](../templates/research-record.md)
- [Review com investidores](../templates/investor-review.md)

Os templates GitHub não preatribuem labels ou milestones inexistentes. Selecioná-las depois de configurar o repositório; também podem ser adaptados a Jira.

Referências: [épicos e histórias](https://www.atlassian.com/agile/project-management/epics-stories-themes), [product backlog](https://www.atlassian.com/agile/scrum/backlogs) e [templates GitHub](https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/about-issue-and-pull-request-templates), consultados em 2026-10-07.

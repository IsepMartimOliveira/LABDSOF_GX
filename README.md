# Building Maintenance Coordinator · LABDSOF 26/27

O **BMC** é uma proposta de plataforma para ajudar administradores e moradores de condomínios a coordenar avarias: do primeiro relato à intervenção e ao encerramento, com informação rastreável e apoio de IA à triagem.

**Fase atual: Sprint 1 — descoberta, validação e desenho.** O repositório contém documentação de planeamento e templates. **Ainda não contém aplicação, testes de software, CI/CD ou deployment executável.**

## Começar aqui

1. Ler o [enunciado](LABDSOF-26-27-Assignment.md).
2. Conhecer a [estratégia](documents/building-maintenance-coordinator-strategy.md) e a [visão/âmbito](documents/04-product-vision.md).
3. Consultar o [plano da Sprint 1](documents/planning/sprint-1-plan.md), o [backlog](documents/06-product-backlog.md) e as [decisões pendentes](documents/planning/decisions-and-feedback.md).
4. Para contribuir, usar o [acordo de equipa](documents/governance/team-working-agreement.md), [DoR](documents/governance/definition-of-ready.md), [DoD](documents/governance/definition-of-done.md) e [protocolo Git](documents/governance/git-workflow.md).

## Produto proposto

**Reportar → rever triagem → selecionar prestador → aprovar pedido → obter aceitação → confirmar marcação → executar → encerrar.**

- Comunidade: condomínios residenciais em Portugal.
- Utilizador principal proposto: administrador profissional; moradores e prestadores participam no fluxo.
- Resultado a investigar: reduzir tempo ativo de coordenação do administrador.
- IA: sugestões corrigíveis, com baseline e fallback não-IA; aprovação de ações pelo utilizador autorizado.
- MVP proposto: texto, catálogo pequeno, um canal de notificações, calendário/simulador, estados e histórico.
- Pós-MVP: fotos, análises de custos e resumos narrativos.
- **IoT continua por decidir**; não está incluído automaticamente na base do MVP.

## Como interpretar os estados

**Rascunho/proposta** = escrito, mas não validado. **Plano/template** = forma de executar/registar trabalho, não prova da sua execução. **Concluído/verificado** exige evidência (PR, resultado, configuração ou sessão). Caixas assinaladas abaixo referem-se apenas ao que explicitamente descrevem.

**Última revisão documental:** 2026-10-07. Revisão e ratificação pela equipa pendentes. Documentação preparada com apoio de IA; afirmações, escolhas e resultados exigem revisão humana e evidência.

## Documentos de produto e entregáveis da Sprint 1

A numeração dos ficheiros não coincide sempre com a numeração do enunciado: **05 é roadmap; 06 é Product Backlog**.

| Documento | §7.1.2 | Estado documental | O que falta para concluir/validar |
|---|---|---|---|
| [Estratégia](documents/building-maintenance-coordinator-strategy.md) | Síntese | Proposta harmonizada | Decisões de âmbito e segmento |
| [01 — Problema e oportunidade](documents/01-problem-and-opportunity-report.md) | 1 | Rascunho | Evidência do problema |
| [02 — Mercado e concorrência](documents/02-market-and-competitor-analysis.md) | 2 | Levantamento preliminar | Fontes verificadas e comparação |
| [03 — Investigação](documents/03-user-research.md) | 3 | Plano e guiões | Recolha, achados, limitações e decisões |
| [04 — Visão](documents/04-product-vision.md) | 4 | Proposta | Validação de personas, âmbito e métricas |
| [05 — Roadmap](documents/05-product-roadmap.md) | Apoio; roadmap final em S3 | Proposta | Calendário/capacidade e revisão por evidência |
| [06 — Product Backlog](documents/06-product-backlog.md) | 5 | Épicos, critérios e MoSCoW propostos | Priorizar com stakeholders, estimar e atribuir |
| [Requisitos funcionais e NFRs](documents/requirements.md) | Apoio a 4/5/7 | Lista inicial | Validar necessidades e metas |
| [07 — Responsible AI Assessment](documents/07-responsible-ai-assessment.md) | 6 | Proposta de workflow e avaliação | Necessidade validada, fornecedor, dataset e critérios |
| [08 — Technical Design](documents/08-technical-design.md) | 7 | Modelo conceptual e contratos iniciais | Stack, detalhes e decisões técnicas |
| [ADRs](documents/adr/README.md) / [ADR-001](documents/adr/ADR-001-backend-boundaries.md) | 8 | Uma ADR proposta | Escolhas e consequências aceites com evidência |
| [09 — Segurança e privacidade](documents/09-security-privacy.md) | 9 | Avaliação inicial | Políticas/revisão; controlos na implementação |
| [10 — Walking Skeleton](documents/10-walking-skeleton.md) | 10 | Plano | Código, build, teste, contentores e demonstração |
| [Notas originais](NOTAS.md) | Exploração | Ideias preservadas e contextualizadas | Validar sugestões e informação de fornecedores |

## Organização, planeamento e templates

| Documento | Estado |
|---|---|
| [Acordo de equipa e papéis](documents/governance/team-working-agreement.md) | Proposta; nomes e ratificação pendentes |
| [Definition of Ready](documents/governance/definition-of-ready.md) | Proposta de checklist |
| [Definition of Done](documents/governance/definition-of-done.md) | Proposta por tipo de entrega |
| [Protocolo Git](documents/governance/git-workflow.md) | Proposta; proteções remotas não verificadas |
| [Issues, labels e milestones](documents/governance/issue-management.md) | Convenções locais; configuração remota pendente |
| [Plano Sprint 1](documents/planning/sprint-1-plan.md) | Fases, dependências e critérios de saída |
| [Backlog Sprint B](documents/planning/sprint-b-backlog.md) | Candidatos; nenhum compromisso Ready |
| [Decisões e feedback](documents/planning/decisions-and-feedback.md) | Questões abertas; sem feedback real registado |
| [História](.github/ISSUE_TEMPLATE/user-story.md), [épico](.github/ISSUE_TEMPLATE/epic.md), [tarefa/spike](.github/ISSUE_TEMPLATE/task.md), [bug](.github/ISSUE_TEMPLATE/bug.md) | Templates GitHub locais; labels/milestones por selecionar após setup |
| [Pull request](.github/pull_request_template.md) | Template local |
| [ADR](documents/templates/adr.md), [investigação](documents/templates/research-record.md), [review](documents/templates/investor-review.md) | Modelos para copiar e preencher com dados reais |

## Progresso das fases da Sprint 1

### Phase 1 — organização · parcial

- [x] Repositório Git local disponível.
- [x] Propostas documentadas de metodologia, DoR/DoD, Git e tracking.
- [x] Templates locais de colaboração preparados.
- [ ] Verificar remoto, acessos, branch principal e proteções.
- [ ] Escolher/configurar board, labels, milestones e issues.
- [ ] Ratificar metodologia/DoR/DoD e atribuir papéis.
- [ ] Confirmar datas, capacidade e significado de Sprint B.

### Phase 2 — descoberta · preparação documental

- [x] Problema, hipóteses e guiões de investigação escritos.
- [x] Lista inicial proposta de funcionalidades e NFRs.
- [ ] Completar investigação do domínio e fontes de concorrentes.
- [ ] Realizar elicitação e registar evidência/limitações.
- [ ] Atualizar requisitos e decisões a partir dos achados.

### Phase 3 — âmbito e backlog · proposta

- [x] Visão, personas provisórias, jornadas, épicos e modelo conceptual.
- [x] Backlog com critérios e prioridades MoSCoW propostas.
- [x] Candidatos e gate DoR para Sprint B.
- [ ] Discutir prioridades com cliente/docentes e registar alterações.
- [ ] Estimar, atribuir responsáveis e selecionar apenas itens Ready.
- [ ] Consolidar arquitetura, IA, segurança e ADRs.
- [ ] Implementar e demonstrar walking skeleton com build/teste/contentores.
- [ ] Registar feedback real e acompanhar revisão de decisão exigida pelo §5.7.

## Decisões prioritárias

DEC-01: âmbito e IoT; DEC-03: equipa/calendário/Sprint B; DEC-04: stack e arquitetura; DEC-07: acesso e dados; DEC-09: processo/board; DEC-10: regras de intervenção. Restantes questões e participantes no [registo](documents/planning/decisions-and-feedback.md).

**Próxima sessão de equipa:** ratificar organização, atribuir responsáveis e preparar pesquisa/decisões para o planning. As fases podem decorrer em paralelo sem declarar concluída investigação que ainda não ocorreu.

## Executar o projeto

Ainda não há aplicação para executar. O [plano do walking skeleton](documents/10-walking-skeleton.md) define a primeira demonstração e os campos onde serão acrescentados comandos reais, ambiente e evidências após implementação.

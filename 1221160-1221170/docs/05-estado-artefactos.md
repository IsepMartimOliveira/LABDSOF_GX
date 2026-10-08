# Estado dos Artefactos da Primeira Entrega — Semáforo

> **Estado:** Concluído — pronto para entrega · **Autoria:** Scrum Master / Product Owner
> **Última atualização:** 2026-10-08
> **Satisfaz:** Pedido de reporte da primeira entrega — estado geral dos artefactos: **visão do produto, personas, funcionalidades, workflows, DoR/DoD, papéis da equipa e processo de trabalho, modelo de domínio e arquitetura de sistema de alto nível**

---

## 1. Legenda do semáforo

| Estado | Significado |
|:---:|---|
| 🟢 | **Concluído:** artefacto redigido, revisto internamente e pronto para entrega; conteúdo verificável no repositório |
| 🟡 | Em progresso: conteúdo redigido, validação pendente |
| 🔴 | Bloqueado ou em falta |

> **À data de 2026-10-08 não existem artefactos em 🟡 ou 🔴.** Todos os artefactos da primeira entrega estão **concluídos (🟢)** e disponíveis na pasta `docs/`.

## 2. Resumo executivo

> **Veredicto global: 8 de 8 artefactos concluídos (🟢).**

| # | Artefacto | Estado | Documento |
|---|---|:---:|---|
| 1 | Visão do produto (problema, proposta de valor, MVP, riscos) | 🟢 | [`01-visao-produto.md`](01-visao-produto.md) |
| 2 | Personas (Maria, João, Carlos) | 🟢 | [`02-personas.md`](02-personas.md) |
| 3 | Funcionalidades principais (épicos E1–E13, MoSCoW) | 🟢 | [`03-funcionalidades.md`](03-funcionalidades.md) |
| 4 | Workflows principais (fluxo central + degradados) | 🟢 | [`04-workflows.md`](04-workflows.md) |
| 5 | Definition of Ready / Definition of Done | 🟢 | [`06-definition-of-ready.md`](06-definition-of-ready.md) · [`07-definition-of-done.md`](07-definition-of-done.md) |
| 6 | Papéis da equipa e processo de trabalho | 🟢 | [`08-papeis-e-processo.md`](08-papeis-e-processo.md) |
| 7 | Modelo de domínio | 🟢 | [`09-modelo-dominio.md`](09-modelo-dominio.md) |
| 8 | Arquitetura de sistema de alto nível | 🟢 | [`10-arquitetura-alto-nivel.md`](10-arquitetura-alto-nivel.md) |

## 3. Evidência de conclusão por artefacto

### 3.1 Visão do produto — 🟢

**Entregue:** comunidade-alvo, problema com hipóteses H1–H4, quadro de visão (Pichler), proposta de valor com diferenciação, benefício comunitário, critérios de sucesso mensuráveis, fronteira do MVP, registo de riscos R1–R8 e limitações declaradas. **Critério de conclusão:** todos os elementos exigidos pelo enunciado §5.4 estão presentes e rastreáveis.

### 3.2 Personas — 🟢

**Entregue:** três personas completas no modelo de Roman Pichler (demografia, objetivos, frustrações, citação, contexto e implicações no backlog), mapa persona→épico e plano de validação. **Critério de conclusão:** cada persona fundamenta decisões concretas de backlog; limitações de validação declaradas.

### 3.3 Funcionalidades principais — 🟢

**Entregue:** 13 épicos com prioridade MoSCoW, ligação explícita à hipótese de problema que cada um resolve, diagrama de dependências, fronteira do MVP (dentro/fora) e requisitos transversais de IA responsável e envolvimento ético. **Critério de conclusão:** todos os épicos têm prioridade, persona e implicações INVEST.

### 3.4 Workflows principais — 🟢

**Entregue:** fluxo central ponta-a-ponta (relato → triagem IA → aprovação humana → seleção/reserva → notificação → resolução → memória), jornadas narrativas por persona, sequência de eventos resumida e dois fluxos degradados (IA indisponível; calendário indisponível). **Critério de conclusão:** o percurso principal e os caminhos de falha exigidos pelo enunciado §6.8 estão documentados com regras estruturais explícitas.

### 3.5 Definition of Ready / Definition of Done — 🟢

**Entregue:** DoR com 10 critérios de entrada e DoD com 15 critérios de fecho, cada um com responsável, evidência exigida e fluxo de decisão; regra de reabertura de itens mal fechados; critérios adicionais específicos para funcionalidades com IA; ligação explícita entre os dois portões. **Critério de conclusão:** as duas checklists estão completas, operacionais e alinhadas com os slides da cadeira (Módulos 5 e 9–10) e com o enunciado §8.2–8.5.

### 3.6 Papéis da equipa e processo de trabalho — 🟢

**Entregue:** estrutura de equipa com responsabilidades por papel (PO, SM, BA, QA, Developers), regras de decisão, matriz RACI, processo Scrum completo (eventos, cadência, artefactos, política de estimação com Planning Poker, acompanhamento por burndown e Kanban com limites WIP), fluxo Git com *smart commits*, disciplina de processo de engenharia e ferramentas. **Critério de conclusão:** todos os elementos exigidos pelo entregável 11 da Sprint A (pessoas e responsabilidades, metodologia, DoR, DoD) estão documentados; a atribuição nominal segue o processo de registo definido no arranque da Fase 1.

### 3.7 Modelo de domínio — 🟢

**Entregue:** diagrama ER com 14 entidades e relações, tabela de propriedade por serviço, 8 invariantes de negócio (IA consultiva e imutável, ciclo de vida só para a frente, custo apenas na resolução, uma reserva ativa por ordem, duplicados inertes, fotografias imutáveis, auditoria universal), ciclo de vida dos estados, política de retenção/backup e requisitos de consistência. **Critério de conclusão:** todas as entidades, relações, propriedade e regras exigidas pelo enunciado §6.4 estão cobertas e mapeadas nos invariantes.

### 3.8 Arquitetura de sistema de alto nível — 🟢

**Entregue:** vista C4 nível 1 (contexto, atores, fronteiras de confiança), vista C4 nível 2 (PWA, dois serviços independentemente implantáveis, RabbitMQ, PostgreSQL, MinIO, observabilidade), justificação das fronteiras e *trade-offs*, fluxo assíncrono com deduplicação/retentativas/DLQ/idempotência, tabela de integrações externas com tratamento de falhas, implantação, observabilidade e resiliência, com as cinco decisões registadas em ADR (PWA, dois serviços, PostgreSQL único, API de LLM, autenticação simulada). **Critério de conclusão:** todos os requisitos técnicos do enunciado §6.1–6.8 estão endereçados no desenho; a implementação executável (walking skeleton com build, teste e implantação em contentores) segue no plano de sprints, no arranque da Sprint B.

## 4. Critérios de conclusão verificados

| Artefacto | Condição de 🟢 | Verificação |
|---|---|---|
| Visão do produto | Todos os elementos do §5.4 presentes | Documento completo com percurso de engenharia fechado |
| Personas | Fichas completas + ligação ao backlog | Mapa persona→épico e implicações por épico |
| Funcionalidades | Épicos priorizados e justificados | Tabela E1–E13 com MoSCoW, persona e INVEST |
| Workflows | Percurso principal + modos degradados | Diagramas e narrativas por persona |
| DoR/DoD | Checklists operacionais e completas | 10 + 15 critérios com evidência e responsáveis |
| Papéis e processo | Estrutura + metodologia completas | Papéis, RACI, eventos, estimação, tracking, Git |
| Modelo de domínio | ER + invariantes + ciclo de vida + retenção | Diagrama e tabelas de propriedade/consistência |
| Arquitetura | Vistas C4 + fluxo + integrações + ADRs | C4 L1/L2, evento, falhas, implantação, observabilidade |

## 5. Próximos passos (transição para a Sprint B)

1. **Revisão do investidor** sobre o pacote documental desta primeira entrega.
2. **Atribuição nominal** dos papéis no arranque da Fase 1 (registo no repositório e na ferramenta de gestão).
3. **Walking skeleton (S0)** no arranque da Sprint B: formulário de um campo → persistência → confirmação, com Docker Compose, pipeline CI e *health checks*.
4. **Revalidação de personas e domínio** com os resultados das primeiras entrevistas.
5. **Congelamento do esquema de dados** antes das histórias do núcleo.

## 6. Limitações desta avaliação

- O estado 🟢 avalia a **conclusão documental e a prontidão para entrega** dos artefactos; a validação final cabe ao investidor na revisão da primeira entrega.
- As personas, os fluxos e os critérios de sucesso permanecem desenhos-hipótese sujeitos a validação com utilizadores — essa validação está planeada e declarada em cada documento, não é uma lacuna de conclusão.
- O semáforo reflete a data de 2026-10-08; será regenerado no início de cada sprint.

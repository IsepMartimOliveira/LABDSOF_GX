# Coordenador de Manutenção de Edifícios (CME)

> **Cadeira:** Laboratório de Desenvolvimento de Software (LABDSOF 2026/27) — ISEP, Instituto Superior de Engenharia do Porto
> **Desafio do enunciado:** *Community Resilience and Everyday Services Platform* — criar um produto digital que ajude uma comunidade real a antecipar, gerir ou recuperar de perturbações do quotidiano
> **Versão:** primeira entrega (Sprint A / Sprint 1) — documentação em português europeu
> **Última atualização:** 2026-10-08

**Estado geral:** documentação da primeira entrega concluída e pronta para entrega — todos os artefactos verificados em [`docs/05-estado-artefactos.md`](docs/05-estado-artefactos.md). A implementação executável (incluindo o *walking skeleton*) arranca na Sprint B, conforme o plano de sprints.

---

## 1. O que é o produto

Uma plataforma (PWA *mobile-first*) para a gestão colaborativa de manutenção em **condomínios residenciais autogeridos**. Um morador reporta um problema (descrição + fotografia opcional); a IA sugere classificação, severidade e deteção de duplicados; o administrador do condomínio aprova ou corrige; o sistema propõe e agenda a intervenção de um prestador; todos os intervenientes são notificados; e o edifício fica com um **histórico permanente de problemas e custos** que pode ser analisado.

A regra estruturante do produto é simples: **a IA prepara a decisão, o humano decide**. Nenhuma ação com consequências (agendamento, despesa) é executada sem aprovação humana.

## 2. Âmbito desta versão

Esta versão em pt-PT responde **apenas** aos cinco pontos pedidos para a primeira entrega, mantendo o mesmo rigor académico da documentação original (rastreabilidade, hipóteses explicitamente rotuladas, limitações declaradas, diagramas e questões abertas para o investidor):

| # | Ponto pedido | Documento |
|---|---|---|
| 1 | **Visão do produto** — que problema resolvemos? | [`docs/01-visao-produto.md`](docs/01-visao-produto.md) |
| 2 | **Personas** — para quem? | [`docs/02-personas.md`](docs/02-personas.md) |
| 3 | **Funcionalidades principais** — como resolvemos? | [`docs/03-funcionalidades.md`](docs/03-funcionalidades.md) |
| 4 | **Workflows principais dos clientes/utilizadores** | [`docs/04-workflows.md`](docs/04-workflows.md) |
| 5 | **Estado (verde/amarelo/vermelho) dos artefactos** | [`docs/05-estado-artefactos.md`](docs/05-estado-artefactos.md) |
| 6 | **Definition of Ready / Definition of Done** | [`docs/06-definition-of-ready.md`](docs/06-definition-of-ready.md) · [`docs/07-definition-of-done.md`](docs/07-definition-of-done.md) |
| 7 | **Papéis da equipa e processo de trabalho** | [`docs/08-papeis-e-processo.md`](docs/08-papeis-e-processo.md) |
| 8 | **Modelo de domínio** | [`docs/09-modelo-dominio.md`](docs/09-modelo-dominio.md) |
| 9 | **Arquitetura de sistema de alto nível** | [`docs/10-arquitetura-alto-nivel.md`](docs/10-arquitetura-alto-nivel.md) |

Apresentação de suporte (5–7 minutos): [`apresentacao/guiao-apresentacao.md`](apresentacao/guiao-apresentacao.md), [`apresentacao/apresentacao.pptx`](apresentacao/apresentacao.pptx) e [`apresentacao/apresentacao.pdf`](apresentacao/apresentacao.pdf).

## 3. Resumo do estado dos artefactos (semáforo)

**8 de 8 artefactos concluídos (🟢).**

| Artefacto | Estado | Documento |
|---|:---:|---|
| Visão do produto | 🟢 | `docs/01-visao-produto.md` |
| Personas | 🟢 | `docs/02-personas.md` |
| Funcionalidades principais | 🟢 | `docs/03-funcionalidades.md` |
| Workflows principais | 🟢 | `docs/04-workflows.md` |
| Definition of Ready / Definition of Done | 🟢 | `docs/06-definition-of-ready.md` · `docs/07-definition-of-done.md` |
| Papéis da equipa e processo de trabalho | 🟢 | `docs/08-papeis-e-processo.md` |
| Modelo de domínio | 🟢 | `docs/09-modelo-dominio.md` |
| Arquitetura de sistema de alto nível | 🟢 | `docs/10-arquitetura-alto-nivel.md` |

Legenda: 🟢 concluído — artefacto redigido, revisto internamente e pronto para entrega · 🟡 em progresso · 🔴 bloqueado/em falta. A avaliação detalhada, com evidência por artefacto, está em [`docs/05-estado-artefactos.md`](docs/05-estado-artefactos.md).

## 4. Princípios de honestidade

- Todo o conteúdo marcado como *hipótese* ou *pressuposto* ainda **não foi validado** com entrevistas ou dados reais. Não foi fabricada nenhuma evidência de investigação de utilizadores, resultado de avaliação de IA ou feedback de investidor.
- As personas, os fluxos e os critérios de sucesso são **desenhos-hipótese**, derivados do enunciado e da discussão da equipa; serão revistos após investigação.
- Os estados do semáforo avaliam **prontidão documental e evidência disponível** à data; não substituem a validação do docente/investidor.

## 5. Relação com a documentação original

A versão completa em inglês, com todos os artefactos da Sprint A (análise de concorrência, investigação de utilizadores, avaliação de IA, segurança e privacidade, operações, negócio, ADRs, backlog detalhado, *walking skeleton*), encontra-se em [`../building-maintenance-coordinator/`](../building-maintenance-coordinator/). Esta versão em pt-PT é derivada dessa base e não a substitui; em caso de divergência, prevalece o enunciado oficial da cadeira.

## 6. Métodos e referências

- 2020 Scrum Guide (papéis, eventos, artefactos); PM slides da cadeira (Product Vision Board e Persona Template de Roman Pichler, GO Product Roadmap, INVEST, MoSCoW, Planning Poker, *Walking Skeleton* de Alistair Cockburn).
- Enunciado oficial *Community Resilience and Everyday Services Platform* (v.2026.09.08).

## 7. Nota de uso de IA

Esta versão foi produzida com apoio de IA a partir da documentação original do projeto, com revisão humana dos conteúdos. Todo o conteúdo gerado deve ser tratado como rascunho académico sujeito a validação; nos termos do enunciado (§11), nenhuma evidência foi inventada e as limitações estão declaradas em cada documento.

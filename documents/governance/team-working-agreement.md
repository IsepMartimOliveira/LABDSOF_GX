# Acordo de equipa

**Estado:** proposta v0.2, por ratificar · **Sprint:** 1 · **Equipa:** 5 pessoas

## 1. Metodologia proposta

Scrum adaptado às três sprints do enunciado, com backlog visível, incrementos demonstráveis e revisão frequente. As fases 1–3 são atividades da Sprint 1. A dimensão da equipa está confirmada em cinco pessoas; calendário, disponibilidade individual e relação com Sprint B continuam por esclarecer em DEC-03.

| Prática | Proposta | Evidência |
|---|---|---|
| Planning | Objetivo, capacidade, dependências, DoR e seleção | Sprint backlog e ata curta |
| Atualização diária | Assíncrona: progresso, próximo passo e bloqueios | Board/canal acordado |
| Refinamento | Pelo menos semanal enquanto houver trabalho | Itens com critérios e estimativas |
| Review | Demonstração por objetivo; feedback dos docentes/stakeholders | Registo de feedback e decisões |
| Retrospetiva | Rever colaboração e escolher melhoria concreta | Ação, responsável e seguimento |
| Revisão entre pares | PR por alteração; revisão proporcionada ao risco | PR e comentários resolvidos |

Cadência e canal definitivo por acordar em DEC-09. Proposta de limite: uma tarefa principal em execução por pessoa; rever se bloquear colaboração.

## 2. Papéis e atribuição

Cada pessoa tem uma área técnica principal e uma responsabilidade transversal. **P1–P5 são posições provisórias, não atribuições nominais aprovadas.** Escolher os nomes considerando experiência, interesse e disponibilidade; rever a distribuição no fim da Sprint 1.

Ser responsável por uma área significa acompanhar o seu progresso, decisões e integração. Não significa executar sozinho todo o trabalho dessa área nem ter autoridade exclusiva sobre as decisões.

| Pessoa | Nome | Área técnica principal | Responsabilidade transversal | Entregas principais | Suplente / segundo elemento |
|---|---|---|---|---|---|
| P1 | Por atribuir | Frontend e experiência de utilização | BA / Product Owner | Jornadas, protótipo, interfaces, síntese da investigação e refinamento de requisitos/backlog | Por atribuir |
| P2 | Por atribuir | Backend de ocorrências | Referência de arquitetura / Tech Lead | Relatos, estados, histórico, pertença aos edifícios, autorização e modelo de domínio | Por atribuir |
| P3 | Por atribuir | Backend de intervenções e integrações | Coordenação do projeto / PM | Prestadores, propostas, aprovação, resposta, calendário; acompanhamento de dependências e contacto com docentes | Por atribuir |
| P4 | Por atribuir | IA e processamento assíncrono | Avaliação de IA e qualidade dos dados | Baseline, classificação, worker, fallback, dataset e resultados de avaliação | Por atribuir |
| P5 | Por atribuir | Infraestrutura e qualidade operacional | DevOps / QA e coordenação de segurança | Contentores, CI/CD, observabilidade, testes transversais e recuperação | Por atribuir |

### 2.1. Responsabilidades partilhadas

- **Implementação e testes:** cada pessoa implementa, testa e documenta as suas alterações. P5 prepara práticas e infraestrutura de qualidade; não fica responsável por testar ou corrigir todo o sistema.
- **Investigação:** P1 coordena guiões e síntese, mas todos participam na recolha e discussão de evidência. Sempre que possível, entrevistar a pares: uma pessoa conduz e outra toma notas.
- **Documentação:** cada responsável mantém os contratos, decisões e instruções da sua área. P1 não concentra toda a documentação do projeto.
- **Segurança:** P5 coordena a revisão de riscos; cada responsável implementa e verifica os controlos nos seus componentes. P2 articula o modelo de autorização com os restantes serviços.
- **Arquitetura e prioridades:** P2 facilita decisões técnicas e P1 prepara prioridades; a equipa discute os trade-offs e regista feedback dos stakeholders.
- **Revisões:** pelo menos outro elemento revê cada PR. O suplente acompanha decisões e alterações relevantes para conseguir dar continuidade à área.
- **Conhecimento global:** todos devem conseguir explicar visão, jornadas, arquitetura, IA, riscos e operação (§10 do enunciado).

### 2.2. Colaboração por fatias funcionais

A distribuição por área não cria cinco desenvolvimentos isolados. Integrar percursos completos desde cedo:

| Fatia | Colaboração principal proposta | Apoio |
|---|---|---|
| Reportar e acompanhar | P1 + P2 | P5 em ambiente, testes e observabilidade |
| Triagem assistida | P4 + P2 | P1 na apresentação/correção das sugestões; P5 nos cenários de falha |
| Intervenção e agendamento | P3 + P1 | P2 nos contratos e estados; P5 na integração e recuperação |
| Resiliência e operação | P5 coordena | Cada responsável trata falhas e métricas do seu componente |

No walking skeleton, P1 prepara formulário/consulta, P2 API/persistência, P3 apoia contratos e integração, P4 prepara fixtures sintéticas e uma baseline simples, e P5 integra contentores, CI e teste ponta a ponta. A baseline pode ser preparada em paralelo e não bloqueia a primeira demonstração de registo/consulta.

### 2.3. Capacidade e revisão da divisão

As responsabilidades técnicas e transversais contam para a capacidade individual. Rever carga no planning e redistribuir trabalho quando necessário, sobretudo investigação/frontend em P1 e infraestrutura/qualidade em P5.

A função PM pode rodar entre sprints, com passagem de contexto e manutenção do registo de decisões. A distribuição por fase e as evidências de execução pertencem ao [plano da Sprint 1](../planning/sprint-1-plan.md); responsáveis por tarefas concretas ficam nas issues e no [backlog da sprint](../planning/sprint-b-backlog.md).

## 3. Gestão e decisões

- Ferramenta por escolher: GitHub Projects ou Jira; [convenções](issue-management.md).
- [DoR](definition-of-ready.md) antes de selecionar implementação; [DoD](definition-of-done.md) para fechar.
- [Protocolo Git](git-workflow.md) para alterações e revisões.
- Decisões de produto/processo no [registo](../planning/decisions-and-feedback.md); técnicas significativas em ADR.
- Mudanças de prioridade com stakeholders registam participantes, motivo e efeito no plano.
- Dúvidas de arquitetura não resolvidas originam spike com pergunta, limite de esforço e resultado esperado.

## 4. Evidência individual

Manter referências a issues, PRs, reviews, investigação, testes, decisões e demonstrações. Contagem de commits não mede contribuição.

| Pessoa | Sprint | Contribuição e impacto | Evidência | Aprendizagem / reflexão |
|---|---|---|---|---|
| A preencher pela equipa | — | — | — | — |

## 5. Ratificação e setup

- [x] Dimensão da equipa confirmada: cinco pessoas.
- [ ] Nomes atribuídos a P1–P5 e responsabilidades revistas pela equipa.
- [ ] Suplente / segundo elemento definido para cada área.
- [ ] Disponibilidade e capacidade individual registadas no planning.
- [ ] Metodologia e cadência revistas pela equipa.
- [ ] Board acessível e workflow configurado.
- [ ] DoR, DoD e protocolo Git revistos.
- [ ] Calendário e Sprint B esclarecidos.
- [ ] Link/data da reunião de acordo registados aqui.

**Aprovação da equipa:** pendente. **URL do board:** por preencher. **Canal:** por decidir.

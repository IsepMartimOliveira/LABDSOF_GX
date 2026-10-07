# Sprint B — proposta de backlog

**Estado:** rascunho para planning; **nenhum item comprometido**.

A expressão Sprint B foi indicada nas fases da Sprint 1, mas a correspondência com Sprint 1/2/3, duração e datas não está documentada. DEC-03 tem de esclarecer isso. Este plano assume apenas um próximo ciclo de trabalho que prepara/demonstra uma fatia mínima; não renomeia a Sprint 2.

## Objetivo candidato

Demonstrar relato por texto persistido e consulta de estado com autorização, enquanto se fecham decisões e se recolhe evidência que sustente o MVP.

## Candidatos por ordem de dependência

IDs e critérios completos no [product backlog](../06-product-backlog.md).

| Ordem | Item | Resultado candidato | Dependências/DoR em falta | Estimativa | Responsável | Selecionado |
|---|---|---|---|---|---|---|
| 1 | DISC-03 | Âmbito, calendário e prioridades discutidos | Participantes/data, pergunta e tempo de sessão | Por estimar | Por atribuir | Não |
| 2 | DISC-01 | Primeira evidência de utilizadores | Recrutamento, responsável e retenção | Por estimar | Por atribuir | Não |
| 3 | EN-01 | Desenho/stack/segurança suficientes para skeleton | DEC-04/07, revisão técnica | Por estimar | Por atribuir | Não |
| 4 | EN-02 | Build, teste e contentores executáveis | EN-01, ambiente e checks | Por estimar | Por atribuir | Não |
| 5 | US-01 | Relatar/consultar com pertença ao edifício | DEC-07, EN-01/02, critérios revistos | Por estimar | Por atribuir | Não |
| 6 | US-02 | Estados básicos e correção manual | US-01, regras de transição | Por estimar | Por atribuir | Não |

DISC-02 (concorrência) pode substituir um candidato se tiver maior valor para as decisões. Isto não é autorização para comprometer todos os itens sem capacidade.

## Registo de planning

| Campo | Valor |
|---|---|
| Correspondência com sprint oficial | Por confirmar em DEC-03 |
| Datas e duração | Por confirmar |
| Disponibilidade individual / ausências | Por preencher |
| Estimativa total e margem para imprevistos | Por calcular pela equipa |
| Itens efetivamente selecionados | Nenhum |
| Objetivo final acordado | Pendente |
| Data/participantes do planning | Pendente |

## Gate DoR

- [ ] Acordo de equipa e capacidade conhecidos.
- [ ] Critérios e dependências de cada candidato revistos.
- [ ] Responsáveis, revisores e estimativas atribuídos.
- [ ] [DoR](../governance/definition-of-ready.md) verificada por item, com data.
- [ ] Seleção cabe na capacidade e apoia o objetivo.

Itens sem DoR permanecem no product backlog. Um spike pode ser selecionado para resolver incerteza se tiver pergunta, limite de esforço e saída verificável.

## Demonstração proposta e acompanhamento

Utilizador de teste autorizado regista ocorrência; após reiniciar o serviço, consulta o mesmo ID. Outro edifício não consegue ler/alterar a ocorrência. Mostrar build, teste automatizado e contentores; sem dependência da IA para registar.

Atualizar progresso no board e refletir decisões na review. Ver [walking skeleton](../10-walking-skeleton.md).

Referência: [Sprint Backlog — Mountain Goat Software](https://www.mountaingoatsoftware.com/agile/scrum/artifacts/sprint-backlog), consultada em 2026-10-07. Este documento é uma preparação para seleção pela equipa, não um compromisso já aprovado.

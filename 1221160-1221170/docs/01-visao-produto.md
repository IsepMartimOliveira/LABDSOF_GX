# Visão do Produto — Coordenador de Manutenção de Edifícios (CME)

> **Estado:** Concluído — pronto para entrega (pressupostos assinalados para validação) · **Autoria:** Product Owner / Analista de Negócio
> **Última atualização:** 2026-10-08
> **Satisfaz:** Enunciado oficial §5.1 e §5.4; entregável 1 (Relatório de Problema e Oportunidade) e entregável 4 (Visão do Produto) da Sprint A
> **Base:** documentação da Sprint A do projeto original (`building-maintenance-coordinator/`), enunciado oficial v.2026.09.08 e slides de Product Management da cadeira

---

## 1. Comunidade-alvo

**Condomínios residenciais autogeridos** — edifícios em que os proprietários elegem uma administração voluntária (*administração de condomínio*) e contratam diretamente os prestadores de serviços, em vez de recorrerem a uma empresa profissional de gestão de propriedades.

Perfil do piloto: 8–60 frações, um administrador voluntário (acumula com o seu emprego), mistura de proprietários residentes e arrendatários.

Em torno de cada problema interagem três grupos de partes interessadas:

| Grupo | Papel na comunidade |
|---|---|
| **Moradores / proprietários** | Reportam problemas e acompanham a resolução |
| **Administração (voluntária)** | Aprova, decide e paga as intervenções |
| **Prestadores (canalizadores, eletricistas, ascensoristas…)** | Executam as intervenções; são fornecedores externos à comunidade, não membros |

*(Fonte: briefing mestre do projeto; tipo de comunidade escolhido ao abrigo do §3 do enunciado. Portefólios multi-edifício estão explicitamente fora do âmbito atual.)*

## 2. Problema — o que estamos a resolver

**A gestão de manutenção em edifícios autogeridos é lenta, informal e sem registo.** Os pedidos chegam por grupos de WhatsApp, chamadas telefónicas ou em pessoa; as decisões dependem da memória do administrador e dos seus contactos pessoais; o histórico de intervenções e custos está disperso por conversas e faturas em papel.

O problema decompõe-se em quatro hipóteses de trabalho, formuladas a partir do enunciado e da discussão da equipa:

| # | Hipótese | Quem sofre |
|---|---|---|
| **H1** | Os moradores não sabem se o seu pedido foi recebido, quem o está a tratar, nem quando virá alguém | Morador |
| **H2** | O administrador voluntário perde noites a coordenar reparações e não tem apoio estruturado à decisão | Administração |
| **H3** | Os prestadores recebem informação incompleta (sem fotografia, sem identificação da fração, descrição vaga) e perdem tempo antes e durante a visita | Prestador |
| **H4** | O edifício não tem histórico fiável de problemas recorrentes nem do dinheiro gasto, o que enfraquece o planeamento e a prestação de contas na assembleia anual | Administração / comunidade |

> **Nota de rigor:** à data (**2026-10-08**) **não foi conduzida nenhuma entrevista, inquérito ou observação**. H1–H4 são pressupostos, não resultados. Não foi fabricada nenhuma evidência. O plano de validação (8–12 entrevistas, inquérito com ≥30 respostas, testes de protótipo) está definido na documentação original e decorrerá na Sprint A/B.

**Consequências de não resolver o problema** (raciocínio, ainda sem dados observados):

- Reparações demoram mais e pequenos defeitos escalam para emergências dispendiosas.
- Problemas recorrentes permanecem invisíveis; a administração não consegue negociar contratos de manutenção com evidência.
- conflitos e perda de confiança entre moradores e administração; o papel voluntário torna-se menos atrativo, ameaçando a continuidade da autogestão.
- Ausência de registo auditável das decisões e das despesas — risco de governação para a administração.

## 3. Visão do produto

> **Declaração de visão:**
> *"De um elevador avariado a uma reparação agendada em minutos, não em dias — com triagem por IA, aprovação humana e uma memória do edifício que mostra para onde vai o dinheiro."*

Em complemento, o produto responde às seis perguntas de visão clássicas (PM slides, Módulo 2):

| Pergunta | Resposta |
|---|---|
| **1. Quem** é o cliente-alvo e o utilizador? | O comprador é a administração do condomínio (voluntária); usam diariamente os moradores (reportam e acompanham) e os prestadores (executam) |
| **2. Que necessidade** resolve? | Coordenação de manutenção lenta, invisível e sem registo; ausência de apoio à decisão; ausência de memória de custos |
| **3. Que produto** satisfaz a necessidade? | Plataforma leve de coordenação cujo atributo distintivo é a **decisão preparada por IA e aprovada por humano**, com histórico auditável do edifício |
| **4. Face às alternativas**? | A prática informal (WhatsApp/telefone) não deixa rasto; as suítes profissionais pressupõem um gestor profissional. O nicho é o **pequeno edifício autogerido a baixo custo** |
| **5. Modelo de negócio?** | Subscrição recorrente por edifício (49–99 €/mês, rascunho) e taxa opcional por intervenção para prestadores; sem pagamentos de rendas nem gestão financeira condominial (fora de âmbito) |
| **6. Viabilidade?** | PWA + dois serviços backend, fila de mensagens, PostgreSQL, armazenamento de objetos, uma API de LLM e integrações externas simuladas — realista para três sprints, com autenticação simulada no MVP (ADR-005). Principal risco de viabilidade: precisão da IA em relatos curtos e informais em português |

### Quadro de visão (adaptação do Product Vision Board de Roman Pichler)

| Elemento | Conteúdo |
|---|---|
| **Visão** | Da avaria à reparação agendada, com triagem por IA e aprovação humana |
| **Grupo-alvo** | Moradores e proprietários (reportam), administração voluntária (aprova e paga), prestadores (executam). Comprador: a administração |
| **Necessidades** | Moradores: reportar uma vez e saber quem vem e quando. Administração: decidir depressa com informação preparada, justificar despesa, manter histórico. Prestadores: contexto completo antes de chegar. Comunidade: menos tempo de indisponibilidade, manutenção mais transparente |
| **Produto** | PWA *mobile-first*: reporte com fotografia; sugestão de triagem por IA com aprovação humana; ordens de trabalho e acompanhamento de estado; seleção e agendamento de prestador; notificações; registo de custos; análises. Classificador de regras como *baseline* e *fallback* |
| **Objetivos de negócio** | SaaS a 49–99 €/mês por edifício + taxa opcional por intervenção; custo operacional alvo 30–140 €/mês por edifício-piloto; 3–5 edifícios-piloto em 12 meses; provar ≥80% de aceitação da triagem por IA e mediana relato→agendamento <24 h |

## 4. Proposta de valor e diferenciação

**Proposta de valor (rascunho):**
*Para a administração de um edifício autogerido que coordena reparações por WhatsApp e memória, o CME é um SaaS de baixo custo que transforma um relato de morador numa reparação triada por IA, aprovada por humano e agendada, mantendo um histórico permanente de custos — ao contrário das suítes de gestão profissional, que pressupõem um gestor dedicado, e dos canais informais, que não deixam rasto.*

| Dimensão | Prática atual (WhatsApp, telefone, avisos) | Suítes profissionais | **CME** |
|---|---|---|---|
| Custo para o edifício | "Grátis", mas pago em tempo e conflitos | Elevado, por unidade/empresa | 49–99 €/mês (rascunho) |
| Registo e histórico | Nenhum ou disperso | Sim | Sim, permanente e auditável |
| Apoio à decisão | Memória do administrador | Sim, orientado a gestor profissional | IA prepara, humano decide |
| Adoção pelos prestadores | Telefone | Portal dedicado | Sem conta obrigatória (confirmação por *link*) |
| Privacidade e confiança | Informal mas opaco | Variável | Minimização de dados, rótulos "sugestão de IA", aprovação humana obrigatória |

*(Nota: a análise de concorrentes da versão original está marcada como "por verificar" — nenhum sítio de fornecedor foi inspecionado. As afirmações sobre as suítes profissionais são hipóteses a confirmar.)*

## 5. Benefício esperado para a comunidade

1. **Menos tempo de indisponibilidade** de equipamentos e zonas comuns (avarias, fechos, faltas temporárias).
2. **Despesa transparente e fundamentada**, com histórico que alimenta o orçamento anual e a assembleia de proprietários.
3. **Menor carga administrativa** para o administrador voluntário, mantendo viável a autogestão.
4. **Resiliência comunitária**: perturbações do quotidiano (falha de equipamento, fecho de instalação, pedido de assistência local) passam a ter um processo conhecido, rastreável e mais rápido.

## 6. Critérios de sucesso mensuráveis

| Critério | Meta | Onde é medido | Estado |
|---|---|---|---|
| Triagem por IA aceite sem edição pela administração | ≥80% | Telemetria do piloto | Meta-hipótese, por confirmar |
| Mediana relato→agendamento | <24 h | Registos temporais das ordens de trabalho | Meta-hipótese, sem linha de base atual |
| Adoção | ≥5 relatos/edifício/semana | Telemetria do piloto | Meta-hipótese |
| Precisão de agrupamento de duplicados | ≥80% | Conjunto de teste construído pela equipa (Sprint B/C) | Por medir |
| Ações com consequências com aprovação humana | 100% | Registo de auditoria (agendamento, despesa) | Regra de produto não negociável |

## 7. Fronteira do MVP

O MVP é o **menor produto ponta-a-ponta que prova o ciclo de valor central num edifício-piloto**: *um relato de morador torna-se uma ordem de trabalho triada por IA e aprovada por humano, com próximo passo conhecido, e o edifício fica com registo.*

**Dentro do MVP:** reporte com descrição/fração/fotografia (E1); triagem por IA com aprovação humana obrigatória e *fallback* de regras (E2); ordens de trabalho e ciclo de estados (E3); notificações (E5); papéis e acessos com autenticação simulada (E6); atribuição manual simplificada de prestador e confirmação de reserva (passo fino de E4); registo de custo opcional na resolução.

**Fora do MVP:** matching e agendamento automáticos (E4 completo, v1.1); deteção de duplicados refinada (E7, v1.2); livro de custos e *dashboard* analítico (E8/E9, v1.2); mecanismo de envolvimento ético implementado (E11, desenhado mas depois do MVP); auto-agendamento de baixa severidade (E12, reservado como possível revisão por feedback do investidor); multilingue PT/EN (E13).

## 8. Riscos do produto

| # | Risco | Prob. | Impacto | Mitigação |
|---|---|---|---|---|
| R1 | Baixa adoção no edifício-piloto | Média | Alto | Recrutar pelos edifícios da própria equipa; reporte em menos de um minuto; *fallback* tipo WhatsApp |
| R2 | Precisão da triagem por IA abaixo de 80% em relatos informais | Média | Alto | Conjunto de avaliação próprio, *fallback* de regras, indicadores de confiança, aprovação humana sempre exigida |
| R3 | Desconfiança na IA ou na privacidade (fotografias/localização) | Média | Médio | Minimização de dados, rótulos "sugestão de IA", *opt-out* de dados não essenciais, sem perfilagem de moradores |
| R4 | Não garantir edifício-piloto | Média | Alto | Abordar vários candidatos em paralelo; degradar demonstração para edifício simulado |
| R5 | Âmbito demasiado grande para três sprints | Alta | Médio | MoSCoW, lista explícita de exclusões, *walking skeleton* primeiro, portão DoR |
| R6 | Prestadores recusam participar | Média | Médio | Sem conta obrigatória; confirmação por *link*; entrevistas antes de congelar o desenho |
| R7 | Instabilidade do calendário/notificações externos | Média | Baixo | Reserva provisória local + retry; simulador com injeção de falhas |
| R8 | Custo do LLM acima do orçamento por edifício | Baixa | Médio | Teto de custo por relato, modelo mais barato, *fallback* de regras, monitorização do custo por triagem |

## 9. Limitações

- Visão, metas e preços são **rascunhos derivados do enunciado**, não de evidência validada com clientes. Não há edifício-piloto nem cliente pagante confirmado.
- A viabilidade assume que a arquitetura de referência se mantém exequível na implementação das Sprints B/C.
- As personas que sustentam esta visão ainda não foram validadas (ver `02-personas.md`).

## 10. Percurso de engenharia (Análise → Desenho → Revisão)

| Fase | Atividade / evidência | Estado |
|---|---|---|
| Análise | Extração da comunidade, problema, hipóteses e objetivos a partir do enunciado e do briefing mestre; todas as afirmações rotuladas como pressupostos | Concluída |
| Desenho | Quadro de visão, seis perguntas, proposta de valor, critérios de sucesso, fronteira do MVP e registo de riscos | Concluída |
| Revisão | Revisão do investidor na Sprint A | **Pendente** |

## 11. Questões abertas para o investidor/cliente

1. O investidor endossa a declaração de visão, ou "minutos, não dias" deve ser suavizado até a métrica de aceitação da IA estar provada?
2. A banda de 49–99 €/mês é a âncora certa, ou o preço deve ficar para uma iteração posterior?
3. Qual deve ser o critério de sucesso de destaque: taxa de aceitação da IA ou tempo relato→agendamento?
4. O nome do produto deve manter-se "Coordenador de Manutenção de Edifícios" ou espera-se um nome comercial até à Sprint C?
5. Qual é a evidência mínima (n.º de entrevistas, respostas ao inquérito) que o investidor exige antes da Sprint B?

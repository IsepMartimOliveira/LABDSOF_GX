# 5. Product Roadmap

**Estado:** proposta v0.3 · **Fase atual:** Sprint 1 · **Revisão:** 2026-10-09

Preserva-se o nome deste ficheiro, mas **não é o entregável Product Backlog**: esse está em [06-product-backlog.md](06-product-backlog.md). A numeração dos ficheiros não corresponde necessariamente à dos entregáveis.

## 1. Horizontes

| Marco do enunciado | Objetivo | Evidência pretendida |
|---|---|---|
| Sprint 1 | Descobrir, validar e desenhar | Pesquisa, visão, backlog, AI Assessment, desenho, ADRs, segurança e walking skeleton |
| Sprint 2 | Construir e operar primeira versão do ciclo completo | Aplicação, persistência, permissões, IA/fallback, integração, testes, CI/CD e falha demonstrada |
| Sprint 3 | Completar, avaliar e robustecer | Resultados de IA, usabilidade, acessibilidade, segurança, desempenho, resiliência e apresentação |
| Pós-MVP | Explorar extensões com procura comprovada | Novo planeamento, sem compromisso para o semestre |

Datas, duração e capacidade por confirmar (DEC-03). **Phase 1–3 são atividades da Sprint 1**, não as três sprints oficiais. A relação de «Sprint B» com o calendário oficial também está por confirmar; ver [proposta Sprint B](planning/sprint-b-backlog.md).

## 2. Sprint 1

As fases podem sobrepor-se; o walking skeleton pode começar enquanto decorre investigação.

| Fase | Trabalho | Saída |
|---|---|---|
| Phase 1 | Git, board, metodologia, DoR/DoD e papéis | Acordo revisto e configurações verificadas |
| Phase 2 | Domínio, alternativas, perguntas, entrevistas, requisitos | Evidência ou limitações, achados e decisões |
| Phase 3 | Visão, personas, fluxo, domínio, backlog, MoSCoW com stakeholders, Sprint B | Âmbito revisto e seleção que cumpra DoR |
| Transversal | IA, arquitetura, ADRs, segurança e walking skeleton | Desenho justificável e implementação mínima executável |

Checklist: [plano Sprint 1](planning/sprint-1-plan.md). Na review, verificar valor do problema e dimensão do MVP. Limitações documentadas não contam como validação positiva. Registar feedback real e pelo menos uma decisão revista durante o projeto (§5.7).

## 3. Sprint 2 — sequência proposta

Os marcos abaixo concretizam os [épicos EP-01–EP-04](06-product-backlog.md#2-épicos); não definem uma segunda lista de épicos. São objetivos propostos, não entregas concluídas.

| Marco | Incremento demonstrável | Itens principais |
|---|---|---|
| M2.1 | Relato persistido, consulta autorizada e triagem manual | US-01/02 |
| M2.2 | Classificação assíncrona com IA, regras, fallback e idempotência | US-03 |
| M2.3 | Resumo comum, confirmação de impacto e seleção de prestador | US-04/06; US-05 condicionada |
| M2.4 | Pedido aprovado, resposta do prestador e marcação confirmada ou pendente/manual explícita | US-07/08 |
| M2.5 | Atualizações, conclusão, encerramento e histórico | US-09/10; US-11 condicionada |

Testes, contratos, logs, métricas e CI/CD acompanham cada fatia. Deploy e observabilidade começam cedo.

**Saída pretendida:** ciclo completo com permissões, sem intervenção técnica da equipa. Demonstrar IA indisponível e falha externa sem falsa confirmação nem efeitos duplicados. Critérios no [backlog](06-product-backlog.md).

## 4. Sprint 3

- Completar J1–J3 e incorporar feedback.
- Executar avaliação de IA contra baseline, com custo, latência, erros e limitações.
- Avaliar usabilidade/acessibilidade, autorização, desempenho e recuperação.
- Demonstrar dashboard operacional e continuidade.
- Atualizar arquitetura, ADRs, dívida técnica, operação, roadmap e evidências individuais.
- Preparar pitch, demonstração e release reproduzível.

Fotos, gráficos de custos e resumos narrativos **não são compromissos da Sprint 3**.

## 5. Cortes e extensões

| Opção | Tratamento |
|---|---|
| Segundo canal de notificações | Could; cortar antes do canal principal |
| Ranking avançado e embeddings | Should; simplificar mantendo seleção e confirmação manual |
| Calendário real | Could; manter simulador realista |
| Fotos, análises e resumos | Pós-MVP, dependentes de investigação |
| IoT num cenário | DEC-01; rever âmbito e integração antes de adicionar |
| Monitorização abrangente, previsão, pagamentos, subscrições | Fora da base |

Não remover requisitos obrigatórios para acomodar extras. Atualizar visão, requisitos, backlog e decisões em conjunto.

### Extensões pós-MVP, condicionadas a evidência

| Candidato | Condição para novo planeamento |
|---|---|
| Piloto com um edifício | Parceiro, responsabilidades e tratamento de dados definidos; MVP avaliado |
| Análises de custos e resumos | Dados suficientes e decisões que beneficiem da análise; números calculados a partir dos registos |
| Upload de fotos | Necessidade confirmada e política de acesso/retenção definida |
| Análise visual por IA | Avaliação própria de qualidade, custo, latência e privacidade |
| Relatórios para assembleia | Procura confirmada e informação autorizada |
| App nativa, push ou multilingue | Evidência de utilização que justifique investimento |
| Comissão/parceria com prestadores | Validação comercial; sem pressupor marketplace |
| Manutenção preventiva | Procura e oportunidade demonstradas; revisão do foco |

Estes candidatos preservam ideias de evolução sem prometer datas nem alterar o MVP.

## 6. Métricas e dependências

| Avaliação | Sprint 1 | Sprint 2 | Sprint 3 |
|---|---|---|---|
| Valor e esforço administrativo | Recolher estimativas e definir comparação | Medir tarefas e registar aceitação/correções | Comparar resultados e explicar limitações |
| Qualidade de IA/duplicados, quando aplicável | Definir dataset e critérios | Primeira avaliação | Resultados contra baseline, custo e latência |
| Continuidade e operação | Definir cenários e instrumentação | Demonstrar falhas e dashboard inicial | Repetir cenários relevantes e apresentar evidências |

Definições de produto na [visão](04-product-vision.md#5-métricas-e-sucesso); protocolo/limiares de IA no [AI Assessment](07-responsible-ai-assessment.md#4-critérios-provisórios); metas operacionais nos [NFRs](requirements.md#requisitos-não-funcionais--restrições). Não copiar esses limiares aqui nem apresentar simulação como impacto real.

Dependências: acesso a profissionais, capacidade, âmbito, stack, visibilidade e ambiente de avaliação. Ver [decisões](planning/decisions-and-feedback.md) e [visão](04-product-vision.md).

## 7. Revisão do roadmap

Rever após cada sprint e feedback de stakeholders. Registar mudanças de âmbito, prioridade e motivo no [registo de decisões](planning/decisions-and-feedback.md), atualizando visão e backlog afetados. Detalhes de capacidade e tarefas pertencem ao backlog da sprint; a checklist da Sprint 1 permanece no respetivo plano.

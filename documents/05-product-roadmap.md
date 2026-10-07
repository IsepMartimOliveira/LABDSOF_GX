# 5. Product Roadmap

**Estado:** proposta v0.2 · **Fase atual:** Sprint 1 · **Revisão:** 2026-10-07

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

1. Identidade de teste, autorização por edifício, persistência, relato e consulta ponta a ponta.
2. Regras, fila e worker; IA com validação, timeout, fallback e correção humana.
3. Resumo comum e confirmações; sugestões simples de duplicados se couberem.
4. Catálogo, seleção, proposta e aprovação auditada.
5. Resposta do prestador, calendário/simulador e confirmação manual em falha.
6. Notificações, conclusão, encerramento e histórico; custo opcional.

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

## 6. Métricas e dependências

Sprint 1: baseline, dataset e critérios. Sprint 2: primeiras medições. Sprint 3: resultados, incluindo negativos. Não apresentar simulação como impacto real.

Dependências: acesso a profissionais, capacidade, âmbito, stack, visibilidade e ambiente de avaliação. Ver [decisões](planning/decisions-and-feedback.md) e [visão](04-product-vision.md).


---

# Product Roadmap

**Projeto:** Building Maintenance Coordinator (BMC)
**Estado:** rascunho v0.1 · alinhado com os documentos 01 a 04 e com o enunciado (§7, §13)

> Convenção: as datas são **relativas** (semanas de cada sprint) porque o calendário do semestre ainda não está fixado no repositório. Preencher com datas reais quando a equipa as confirmar. Tudo o que depende de resultados de investigação está marcado como **[Condicionado]** e pode mudar.

---

## 1. Resumo visual

```
 SPRINT 1 (Sprint A/B)          SPRINT 2                    SPRINT 3                 PÓS-CURSO
 Descobrir, validar, desenhar   Construir a vertical slice  Avaliar, endurecer,      Visão de produto
                                                            apresentar
 ────────────────────────────   ─────────────────────────   ──────────────────────   ─────────────────
 Problema + concorrentes        Report → classificar →      Journey completa J1-J3   Análise de fotos
 Pesquisa de utilizadores       duplicados → contractor →   Avaliação de AI          Custos e gráficos
 Visão, backlog, AI, design     aprovar → calendário →      Resiliência, segurança   Resumos narrativos
 Walking skeleton               notificar                   Pitch e demo final       Pagamentos/quotas?
                                                                                      Piloto real
 Gate: "problema com valor?     Gate: "valor observável,    Gate: "produto credível
 MVP é a menor experiência?"    deploy e operação?"         e sustentável?"
```

## 2. Princípios do roadmap

1. **Fluxo ponta a ponta primeiro.** Uma journey completa e simples vale mais do que muitas funcionalidades parciais (J2 é a journey principal).
2. **Urgência como eixo.** Tudo o que reduz o tempo até à resolução de avarias críticas tem prioridade.
3. **AI com rede de segurança.** Nenhuma funcionalidade de AI entra sem fallback por regras e aprovação humana (§5.6.2 e §5.6.3).
4. **Evidência antes de investimento.** Itens que dependem de hipóteses não validadas ficam marcados e só avançam após o gate respetivo.
5. **Modo degradado desde o início.** Falha de AI e do calendário são cenários de desenho, não extras de última hora (§6.8).

---

## 3. Sprint 1 · Descobrir, validar e desenhar

**Objetivo:** estabelecer que o problema tem valor e que o MVP é a menor experiência credível.

| Semana | Foco | Entregáveis (enunciado §7.1.2) |
|---|---|---|
| 1 | Setup da equipa, DoR/DoD, papéis, repositório e board; contactar participantes | Repositório, board, DoR/DoD |
| 1–2 | Entrevistas a administradores e contractors; desk research para preencher E1…En | 01 Problem Report (evidência), 03 User Research |
| 2 | Inquérito a condóminos; demos de SolidSoft GC e Unitify | 02 Competitor Analysis atualizada |
| 2–3 | Backlog priorizado (MoSCoW), avaliação de AI proposta, desenho técnico, ADRs, ameaças | 04 Visão, 05 Backlog, 06 AI Assessment, 07 Technical Design, 08 ADRs, 09 Security & Privacy |
| 3 | Walking skeleton em contentores com CI e um teste | 10 Walking Skeleton |
| Fim | Investor review + decisão revista e documentada | Registo de feedback e mudança (§5.7) |

**Gate 1 (investor review):** *é um problema valioso, e o MVP é a menor experiência credível?*

**Critérios para avançar:**
- P1 a P3 com algum suporte de evidência real (nº de participantes indicado) ou limitação documentada.
- Pelo menos uma decisão de produto ou técnica revista após feedback.
- Walking skeleton a correr em contentor com build automático.

**Ponto de decisão [Condicionado]:** se as demos mostrarem que já existe triagem ou despacho assistido, reposicionar o diferencial para explicabilidade e aprovação humana, ou para análise de custos (ver 02 §6).

---

## 4. Sprint 2 · Construir e operar a vertical slice

**Objetivo:** entregar o fluxo principal **reportar → classificar (com fallback) → detetar duplicado → propor contractor → aprovar → evento no calendário → notificação**, com deploy e monitorização.

### 4.1 Épicos e ordem de construção

| Ordem | Épico | O que entrega | Journey |
|---|---|---|---|
| 1 | Report e estado | Formulário de report por texto, estados da ocorrência, lista de ocorrências | J1 |
| 2 | Triagem de urgência | Regras determinísticas para críticos + classificação por AI com fallback, UI "sugestão, não verificada" | J2 |
| 3 | Fluxo assíncrono | Fila (RabbitMQ ou Redis), worker de classificação, retries e idempotência | J2 |
| 4 | Duplicados | Embeddings + contexto (edifício, zona, janela temporal); agrupamento; "isto também me afeta" | J1, J2 |
| 5 | Despacho | Catálogo sintético de contractors, ranking por regras, explicação | J2 |
| 6 | Aprovação e calendário | Aprovação do administrador, evento em Google Calendar ou simulador, marcação manual como fallback | J2, J3 |
| 7 | Notificações | Notificações de estado a condóminos e contractors | J1, J3 |
| 8 | Autenticação mockada com papéis | Condómino, administrador, contractor, com autorização por papel | Transversal |

### 4.2 Fundações técnicas (em paralelo)

- Pelo menos dois componentes implantáveis (Issue Service e Dispatch Service) ou modular monolith justificado em ADR.
- Persistência e contratos de API documentados.
- CI/CD: build, testes, análise estática, verificação de dependências, imagem de contentor.
- Observabilidade: logs estruturados, health checks, métricas iniciais, correlation IDs.
- Demonstração de **pelo menos uma falha** (AI em baixo → classificação por regras).

### 4.3 Marcos intermédios

| Marco | Descrição |
|---|---|
| M2.1 | Report → ocorrência persistida → classificada por regras (sem AI), ponta a ponta |
| M2.2 | Worker de AI integrado com fallback e idempotência demonstrados |
| M2.3 | Deteção de duplicados + ranking de contractors visíveis para o administrador |
| M2.4 | Aprovação cria evento no calendário e envia notificação; fallback manual funcional |
| M2.5 | Deploy automatizado e dashboard mínimo; demonstração de falha |

**Gate 2 (investor review):** *o produto já entrega valor observável, e a equipa consegue implantá-lo, monitorizá-lo e operá-lo?*

**Critério de saída:** um utilizador de teste consegue percorrer J2 do report à notificação sem intervenção da equipa, com AI ligada e desligada.

---

## 5. Sprint 3 · Avaliar, endurecer e apresentar

**Objetivo:** refinar o MVP, medir as suas qualidades principais e demonstrar que é credível e mantível.

| Área | Entregáveis |
|---|---|
| Produto | Journeys J1 a J3 completas; mudanças após feedback do Gate 2; usabilidade e acessibilidade revistas |
| AI | Resultados de avaliação: precisão por classe de urgência, recall de críticos, precisão e recall de duplicados, latência e custo; limitações comunicadas na UI |
| Resiliência | Demonstração de modo degradado (AI e calendário); teste de falha de componente |
| Segurança | Threat model atualizado, testes de prompt injection, revisão de autorização |
| Operação | Dashboard operacional com SLIs definidos; evidência de performance e escalabilidade |
| Documentação | Views de arquitetura e ADRs atualizados, narrativa de evolução, registo de limitações e dívida técnica, roadmap final |
| Apresentação | Pitch final, demonstração técnica, evidência de contribuição individual |

**Gate 3 (investor review final):** *é um produto credível e um sistema mantível que merece mais investimento?*

### Candidatos a corte se o tempo apertar (por esta ordem)

1. Resumos narrativos e gráficos de custos (já estão fora do MVP).
2. Notificações por canais adicionais (manter um canal).
3. Auto-aprovação por limite de custo (se for adotada).
4. Integração real com Google Calendar (manter simulador + fallback manual).

**Nunca cortar:** regras para urgências críticas, aprovação humana, fallback de AI, modo degradado, avaliação de AI.

---

## 6. Roadmap pós-curso (Now / Next / Later)

Nível de confiança baixo. Depende da validação e de um piloto real.

| Horizonte | Item | Condição para avançar |
|---|---|---|
| **Next** (após MVP) | Piloto com 1 edifício real | Consentimento, dados anonimizados, parceiro administrador |
| **Next** | Histórico e análise de custos (J4): queries SQL + resumo AI | Dados reais suficientes; evidência de que decisões de obras usam esses dados |
| **Next** | Upload de fotografias com consentimento | Política de retenção e minimização aprovadas (RGPD) |
| **Later** | Análise de fotografias por AI | Avaliação de custo, latência e privacidade favorável |
| **Later** | Relatórios de manutenção para assembleia | Procura confirmada por administradores |
| **Later** | Aplicação nativa, notificações push, multilingue | Dados de utilização que justifiquem |
| **Later** | Comissão ou parceria com contractors | Validação do modelo de negócio nas entrevistas (pergunta 12) |
| **Explorar** | Manutenção preventiva (concorrência com Manu) | Só se a investigação mostrar procura; hoje está fora do foco |
| **Fora de âmbito** | Pagamentos, quotas, assembleias, hardware do edifício | Território das suites de gestão; reavaliar só por parceria |

---

## 7. Métricas por fase

| Métrica (04 §8) | Sprint 1 | Sprint 2 | Sprint 3 |
|---|---|---|---|
| Linha de base: tempo atual por ocorrência (estimado) | Recolher nas entrevistas | Refinar no teste de protótipo | Comparar BMC vs processo atual |
| Precisão de urgência | Definir dataset e critérios | Primeira medição | ≥ 85% geral e recall de críticos sobre dataset *(provisório)* |
| Duplicados agrupados | Definir dataset | Primeira medição | ≥ 80% de precisão e recall *(provisório)* |
| Aprovação sem alteração | n/a | Registar | Analisar e interpretar |
| Modo degradado | Desenho | Uma falha demonstrada | Todos os cenários demonstrados |
| Esforço do administrador por ocorrência | Estimativa | Medir em teste | Reportar com limitações |

---

## 8. Dependências e riscos do roadmap

| Risco | Impacto no roadmap | Mitigação |
|---|---|---|
| Entrevistas atrasadas ou poucos participantes | Gate 1 sem evidência primária | Desk research em paralelo; documentar limitações; não fabricar |
| Acesso a administradores profissionais | Enviesamento para voluntários | Persona ou proxy explícito; recrutar via contactos da faculdade |
| Concorrente já cobre a lacuna | Reposicionamento no Sprint 1 | Demos cedo; ponto de decisão no Gate 1 |
| Complexidade da arquitetura distribuída | Atraso no Sprint 2 | Walking skeleton cedo; modular monolith justificado como alternativa |
| Dependência do calendário externo | Agendamento falha | Simulador e marcação manual desde o M2.4 |
| Custo ou latência de AI | Experiência degradada | Fallback por regras; limitar chamadas; medir cedo |
| Âmbito crescente (marketplace) | MVP não entregue | Fronteira do MVP rígida; catálogo sintético |
| Privacidade (fotos, moradas) | Risco legal | Dados sintéticos, sem fotos no MVP, retenção definida |

---

## 9. Como usar este roadmap

- Rever no fim de cada sprint (retrospetiva) e após cada investor review.
- Qualquer alteração de âmbito dos gates 2 e 3 deve ficar registada com motivo (ADR ou nota de decisão).
- Quando houver resultados de investigação, atualizar os itens marcados **[Condicionado]** e a secção 6.

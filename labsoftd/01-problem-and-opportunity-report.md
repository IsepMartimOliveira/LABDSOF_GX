# 1. Problem and Opportunity Report

**Projeto:** Building Maintenance Coordinator
**Sprint:** 1 · **Estado:** rascunho v0.1 (a rever após entrevistas)

> Convenção deste documento: tudo o que ainda não foi validado com utilizadores reais está marcado como **[Hipótese]**. A evidência só passa a "validada" depois de documentada na secção de User Research (entregável 3).

---

## 1. Comunidade-alvo

Condomínios de edifícios residenciais em Portugal, geridos por:

- **Empresas de administração de condomínios** (segmento principal: gerem vários edifícios), ou
- **Administradores condóminos** (voluntários ou eleitos, gerem um único edifício).

A comunidade inclui os condóminos (moradores e proprietários) e os prestadores de serviços de manutenção (contractors) que intervêm no edifício.

## 2. Problema

> Os administradores de condomínio gerem avarias através de chamadas, WhatsApp e emails dispersos. Não há triagem por urgência, os reports duplicados multiplicam o trabalho, a contratação de prestadores é manual e não existe histórico estruturado de ocorrências e custos.

### Ligação ao tema do projeto (resiliência comunitária)

Avarias como fugas de água, falhas elétricas, elevadores parados ou problemas de canalização são **disrupções da vida diária** de uma comunidade. O tempo entre o primeiro aviso e a resolução determina o impacto nos moradores (e nos custos de danos).

### Resultado que o produto pretende melhorar

Reduzir o tempo entre o report de uma avaria e a sua resolução, e reduzir o esforço de coordenação do administrador por ocorrência. Métricas detalhadas no entregável 4.

## 3. Práticas atuais (alternativas existentes)

| Prática | Como funciona hoje [Hipótese] | Limitação provável |
|---|---|---|
| Chamadas, SMS, WhatsApp, email | O condómino contacta o administrador ou o porteiro/vizinho; o administrador contacta o prestador | Informação dispersa, sem estado nem histórico, sem triagem |
| Grupos de vizinhos | Problemas são discutidos informalmente | Duplicação, ruído, sem responsável |
| Folhas de cálculo / papel | O administrador regista ocorrências e custos | Manual, difícil de analisar, propenso a perdas |
| Software de gestão de condomínios | Módulos de ocorrências, documentos, quotas (ver entregável 2) | Foco administrativo/financeiro; a profundidade da triagem e do despacho está por confirmar |
| Pesquisa direta de prestadores | O administrador pede orçamentos a contactos conhecidos | Dependente de relações pessoais, sem comparação sistemática |

## 4. Stakeholders

| Stakeholder | Interesse | Poder / influência | Dor principal [Hipótese] |
|---|---|---|---|
| Administrador (empresa de gestão) | Resolver depressa, controlar custos, evitar queixas | Alto (decide e paga) | Volume de contactos, coordenação manual, falta de rastreabilidade |
| Administrador condómino (voluntário) | Resolver sem perder muito tempo | Médio | Falta de tempo e de conhecimento técnico |
| Condómino | Saber que o problema foi recebido e o estado atual | Médio (pressiona o administrador) | Falta de feedback, múltiplos canais |
| Contractor / prestador | Pedidos claros, agenda sem conflitos, pagamento atempado | Médio | Informação incompleta, deslocações em vão |
| Porteiro / zelador (quando existe) | Reportar e acompanhar | Baixo | Sobrecarga como intermediário |
| Assembleia de condóminos | Aprovar despesas, ver contas | Alto em despesas elevadas | Falta de transparência nos custos |
| Seguradoras | Ocorrências documentadas | Baixo (indireto) | Falta de registo de danos |

```
            Poder alto
                │
   Assembleia   │   Administrador (empresa)
                │
────────────────┼────────────────  Interesse
                │
   Seguradoras  │   Condómino · Contractor · Zelador
            Poder baixo
```

## 5. Evidência do problema

**Estado atual: sem evidência primária recolhida.** Esta secção deve ser preenchida só com fontes reais e citadas.

### Fontes a consultar

- Entrevistas com administradores e condóminos (plano no entregável 3).
- Relatórios públicos ou artigos sobre problemas de manutenção e gestão de condomínios em Portugal (associações de consumidores, associações do setor, imprensa). *A pesquisar; registar fonte e data de cada referência.*
- Documentação pública dos produtos concorrentes (entregável 2).
- Enquadramento legal da administração de condomínios em Portugal. *A confirmar com fonte oficial antes de citar artigos.*

### Registo de evidência (preencher)

| ID | Tipo (entrevista, relatório, observação) | Fonte e data | Achado | Suporta qual pressuposto? |
|---|---|---|---|---|
| E1 | | | | |

## 6. Consequências de não resolver o problema

- Avarias urgentes (fuga, falha elétrica) agravam-se por demora na triagem. **[Hipótese]**
- Custos mais altos por intervenções em emergência e danos evitáveis. **[Hipótese]**
- Conflitos entre condóminos e administrador por falta de transparência. **[Hipótese]**
- Sobrecarga do administrador e decisões sem dados (sem histórico de custos). **[Hipótese]**

## 7. Pressupostos e riscos

| # | Pressuposto | Como validar | Risco se for falso |
|---|---|---|---|
| P1 | Os administradores perdem tempo significativo na coordenação de avarias | Entrevistas, estimativa de tempo por ocorrência | Sem dor, sem produto |
| P2 | Existem reports duplicados em volume relevante | Perguntar a administradores; analisar registos anonimizados, se disponíveis | A deteção de duplicados perde valor |
| P3 | A urgência é mal triada hoje | Entrevistas, casos concretos | A classificação por AI perde valor |
| P4 | Administradores aceitam adotar uma plataforma nova | Entrevistas, teste de protótipo | Adoção baixa |
| P5 | Os condóminos reportam por uma app/web se for simples | Entrevistas, teste de protótipo | Dados insuficientes |
| P6 | Os contractors aceitam receber pedidos e agenda pela plataforma | Entrevistas com prestadores | O despacho fica manual |
| P7 | O administrador confia numa recomendação assistida por AI se for explicável e aprovável | Teste de protótipo | AI subutilizada ou rejeitada |

| Risco | Probabilidade | Impacto | Mitigação |
|---|---|---|---|
| Acesso limitado a administradores profissionais | Alta | Alto | Validar também com voluntários; documentar a limitação |
| Âmbito demasiado grande (marketplace de contractors) | Alta | Alto | Catálogo sintético pequeno, ranking por regras |
| Dados pessoais e fotografias de interiores (RGPD) | Média | Alto | Dados sintéticos, minimização, retenção definida |
| Erro de AI numa urgência crítica | Média | Alto | Regras determinísticas para palavras críticas, aprovação humana |
| Concorrentes existentes cobrem o essencial | Média | Médio | Foco na triagem + despacho + análise, ver entregável 2 |

## 8. Oportunidade

Transformar um fluxo informal e fragmentado numa cadeia rastreável **report → triagem → despacho → resolução → histórico**, com urgência como eixo central e AI como apoio (nunca como decisor final). A oportunidade confirma-se se P1 a P3 forem validados e se a análise competitiva mostrar lacuna na triagem e no despacho assistidos.

## 9. Pergunta para o investidor (Sprint 1)

*É este um problema de valor, e é o fluxo "reportar, classificar, detetar duplicado, propor contractor, aprovar, agendar, notificar" o menor MVP credível?*

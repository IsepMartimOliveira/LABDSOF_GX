# 1. Problem and Opportunity Report

**Projeto:** Building Maintenance Coordinator
**Sprint:** 1 · **Estado:** rascunho v0.3 (a rever após entrevistas) · **Revisão:** 2026-10-09

> Pressupostos e benefícios ainda não demonstrados são hipóteses. Evidência primária fica no [User Research](03-user-research.md); fontes concorrenciais no [documento 02](02-market-and-competitor-analysis.md). Este relatório liga essas evidências ao problema, sem duplicar os resultados.

---

## 1. Comunidade-alvo

Condomínios de edifícios residenciais em Portugal, geridos por:

- **Empresas de administração de condomínios** (segmento principal: gerem vários edifícios), ou
- **Administradores condóminos** (voluntários ou eleitos, gerem um único edifício).

A comunidade inclui os condóminos (moradores e proprietários) e os prestadores de serviços de manutenção (contractors) que intervêm no edifício.

## 2. Problema

> **[Hipótese]** Em alguns condomínios, a dispersão de avisos por chamadas, mensagens e emails aumenta o esforço de triagem, contacto com prestadores e acompanhamento. A frequência de duplicados, a qualidade da triagem e as limitações dos registos atuais ainda precisam de evidência.

### Ligação ao tema do projeto (resiliência comunitária)

Avarias como fugas de água, falhas elétricas, elevadores parados ou problemas de canalização são **disrupções da vida diária** de uma comunidade. O tempo entre o primeiro aviso e a resolução determina o impacto nos moradores (e nos custos de danos).

### Resultado que o produto pretende melhorar

Reduzir o esforço ativo do administrador para triar e preparar uma intervenção. Medir também tempos até envio, aceitação e resolução, distinguindo fatores externos. Métricas na [visão](04-product-vision.md); alvos dependem da baseline (DEC-08).

## 3. Práticas atuais (alternativas existentes)

**[Hipótese]** Os avisos podem chegar por chamadas, mensagens ou grupos de vizinhos; administração e prestadores coordenam-se por contactos habituais e registos em software, folhas de cálculo ou papel. Importa observar onde esse processo ajuda e onde exige esforço adicional. A comparação de vantagens, limitações e produtos está na [análise de alternativas](02-market-and-competitor-analysis.md#2-alternativas-identificadas).

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

## 5. Evidência do problema

**Estado atual: sem evidência primária recolhida.** Esta secção deve ser preenchida só com fontes reais e citadas.

### Fontes a consultar

- Entrevistas com administradores e condóminos (plano no entregável 3).
- Relatórios públicos ou artigos sobre problemas de manutenção e gestão de condomínios em Portugal (associações de consumidores, associações do setor, imprensa). *A pesquisar; registar fonte e data de cada referência.*
- Documentação pública dos produtos concorrentes (entregável 2).
- Enquadramento legal da administração de condomínios em Portugal. *A confirmar com fonte oficial antes de citar artigos.*

### Registo de evidência (preencher)

Referenciar IDs de achados do 03 e fontes do 02; manter aqui apenas a implicação para o problema. Fontes de domínio não registadas nesses documentos devem incluir URL exato e data.

| ID | Tipo | Referência ao achado/fonte e data | Implicação para o problema | Pressuposto afetado |
|---|---|---|---|---|
| E1 (por preencher) | — | — | — | — |

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
| Erro de AI numa urgência crítica | Média | Alto | Regras independentes, revisão humana e avaliação de falsos negativos; sem garantia de deteção perfeita |
| Concorrentes existentes cobrem o essencial | Média | Médio | Investigar valor específico do fluxo e rever âmbito com evidência, ver entregável 2 |

## 8. Oportunidade

Transformar um fluxo informal e fragmentado numa cadeia rastreável **report → triagem → despacho → resolução → histórico**, com urgência como eixo central e AI como apoio (nunca como decisor final). P1 é central para a oportunidade. P2 e P3 determinam o valor de duplicados e triagem assistida; resultados negativos devem alterar essas funcionalidades. Adoção (P4–P6), utilidade da IA (P7) e diferenciação precisam de avaliação própria.

## 9. Pergunta para o investidor (Sprint 1)

*É este um problema de valor, e é o ciclo "reportar, rever triagem, aprovar pedido, obter resposta, agendar e encerrar" a menor experiência credível?*

## 10. Rastreabilidade e investigação do domínio

- Guiões e resultados: [03 User Research](03-user-research.md).
- Requisitos derivados: [requisitos](requirements.md), ainda sujeitos a validação.
- IoT e segmento: DEC-01 e DEC-02 no [registo](planning/decisions-and-feedback.md).
- Investigar responsabilidade por áreas comuns/privadas, intervenções recorrentes, disponibilidade dos prestadores, aprovações e exclusão digital. A lista é de perguntas, não de conclusões jurídicas ou de mercado.
- Moradores podem ser arrendatários; pertença ao edifício e autorização para aprovar despesas são conceitos distintos. Confirmar o vocabulário nas entrevistas.

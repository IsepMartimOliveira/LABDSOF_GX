# 2. Market and Competitor Analysis

**Projeto:** Building Maintenance Coordinator
**Sprint:** 1 · **Estado:** rascunho v0.1

## Nota metodológica e limitações

- A análise baseia-se em **páginas públicas e material de marketing** consultados em outubro de 2026. Não foi feito trial nem demo de nenhum produto.
- "Não encontrado" significa que **não encontrámos referência nas fontes consultadas**, não que a funcionalidade não exista. Confirmar com demo ou contacto comercial antes de tomar decisões.
- Preços e funcionalidades mudam. Registar a data e o URL de cada fonte.
- Lista não exaustiva. Linhas marcadas **[a pesquisar]** são categorias a investigar na próxima iteração.

---

## 1. Alternativas identificadas

### 1.1 Alternativas não digitais ou informais (o concorrente real)

| Alternativa | Utilizadores | Pontos fortes | Pontos fracos [Hipótese] |
|---|---|---|---|
| Chamadas, SMS, WhatsApp, email | Todos | Zero custo, já usados por todos, sem curva de aprendizagem | Sem estado, sem histórico, sem triagem, duplicação |
| Grupos de vizinhos | Condóminos | Rápido, comunitário | Ruído, sem responsável, expõe discussões |
| Folha de cálculo / papel / livro de ocorrências | Administrador, porteiro | Flexível, simples | Manual, sem análise, difícil de partilhar |
| Contactos pessoais de prestadores | Administrador | Confiança, rapidez | Sem comparação de preços, dependente de pessoas |

### 1.2 Software de gestão de condomínios (digital)

| Produto | Mercado | Utilizadores-alvo | Funcionalidades relevantes (segundo a fonte) | Fonte |
|---|---|---|---|---|
| **SolidSoft GC** | Portugal | Administradores profissionais e não profissionais; condóminos | Reporte de avarias com foto e gravação offline; técnicos reportam presença por QR code; rotas de manutenção; documentos, assembleias, quotas; declara conformidade com RGPD | pplware.sapo.pt (artigo com mais de um ano) |
| **Unitify** | Portugal | Administração de condomínios e edifícios inteligentes | Controlo de acessos, intercomunicador vídeo, contadores inteligentes, app de residente, gestão de quotas por fração, referências Multibanco e MB WAY | unitify.com/smart-building/portugal |
| **CondoBOM** | Brasil | Síndicos, porteiros, moradores | Livro de ocorrências digital, manutenção periódica, reservas, visitantes, encomendas; ocorrências visíveis só para o autor e o administrador | App Store (CondoBOM) |
| **Manu** | Brasil | Síndicos | Rotinas de manutenção preventiva por equipamento; liga o condomínio a fornecedores e a empresas de engenharia; plano digital anunciado a R$ 59,90 por mês em 2022 | sindiconet.com.br (conteúdo publicitário, 2022) |
| Outras apps do género (ex.: Condomob, Sivirino, referidas em imprensa de 2017) | Brasil | Síndicos e moradores | Pedido de manutenção com foto, acompanhamento do estado pelos moradores | sindiconet.com.br (2017) |
| Software internacional de gestão de propriedades e de manutenção **[a pesquisar]** | Global | Gestores de propriedades | A investigar | |

### 1.3 Outras categorias

| Categoria | Exemplo | Relevância |
|---|---|---|
| Marketplaces de serviços e orçamentos **[a pesquisar]** | Plataformas portuguesas de profissionais | Concorrem na fase de contratação, não na triagem nem no histórico |
| Helpdesk / ticketing genérico **[a pesquisar]** | Ferramentas de suporte | Resolvem o fluxo de tickets, mas não conhecem edifícios, urgência doméstica nem prestadores |

---

## 2. Comparação por critérios (§5.2 do enunciado)

Legenda: ✔ referido na fonte · ✖ não encontrado nas fontes · ? por confirmar

| Critério | WhatsApp / email | SolidSoft GC | Unitify | CondoBOM | Manu | **BMC (proposta)** |
|---|---|---|---|---|---|---|
| Reporte de avaria com foto | ? | ✔ | ? | ✔ (ocorrências) | ? | ✔ |
| Estado visível de ponta a ponta | ✖ | ? | ? | ? | ? | ✔ |
| Triagem de urgência automática | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ (AI + regras) |
| Deteção de duplicados | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ |
| Seleção de contractor (preço, local, disponibilidade) | ✖ | ✖ | ✖ | ✖ | ✔ parcial (liga a fornecedores) | ✔ (ranking por regras) |
| Agendamento em calendário externo | ✖ | ✖ | ✖ | ✖ | ✖ | ✔ |
| Histórico e análise de custos | ✖ | ? | ✖ | ? | ? | ✔ (SQL + resumo AI) |
| Foco em manutenção/avarias | ✖ | Parcial | ✖ | Parcial | ✔ (preventiva) | ✔ |
| Pagamentos, quotas, assembleias | ✖ | ✔ | ✔ | ✔ | ✖ | ✖ (fora de âmbito) |
| Hardware / acessos / contadores | ✖ | ✖ | ✔ | ✖ | ✖ | ✖ (fora de âmbito) |

> As células de concorrentes com ✖ e ? são **hipóteses** a validar com demos. Se alguma for contrariada, a diferenciação tem de ser revista (e documentada como decisão).

---

## 3. Forças e fraquezas (resumo)

| Concorrente | Forças | Fraquezas / lacunas |
|---|---|---|
| WhatsApp / email | Universal, gratuito | Sem estrutura, sem histórico, sem triagem |
| SolidSoft GC | Produto português, suite ampla, offline, QR para técnicos, RGPD | Foco administrativo; triagem e despacho assistidos não encontrados |
| Unitify | Integra hardware do edifício; pagamentos locais | Foco em acessos e smart building, não em fluxo de avarias |
| CondoBOM | Livro de ocorrências digital, privacidade entre moradores | Mercado brasileiro; sem despacho nem análise encontrados |
| Manu | Manutenção preventiva e ligação a fornecedores | Mercado brasileiro; foco preventivo, não resposta a avarias urgentes |

## 4. Modelos de negócio observados

| Produto | Modelo |
|---|---|
| Manu | Subscrição mensal (valor anunciado em 2022) |
| SolidSoft GC, Unitify, CondoBOM | Não encontrado nas fontes (a confirmar) |

**Hipótese para o BMC:** SaaS por edifício ou por fração, com preço escalonado para empresas de administração. A validar em entrevistas.

## 5. Experiência de utilização, privacidade e confiança

- **UX:** os concorrentes parecem concentrar muitas funcionalidades (suite). **[Hipótese]** a simplicidade de um fluxo único de avarias pode ser vantagem para o condómino.
- **Privacidade:** o CondoBOM restringe a visibilidade das ocorrências ao autor e ao administrador, o que é um bom padrão a igualar. O SolidSoft GC declara conformidade com o RGPD. O BMC deve fazer da privacidade um argumento explícito (minimização, retenção, consentimento para fotos).
- **Confiança em AI:** nenhum dos concorrentes consultados menciona AI. O BMC deve diferenciar-se por **AI explicável, com fallback e aprovação humana**.

## 6. Oportunidade de diferenciação e proposta de valor

### Lacuna

Os produtos encontrados tratam sobretudo de **administração** (quotas, documentos, assembleias, acessos) ou de **manutenção preventiva**. Não encontrámos um fluxo que una **triagem por urgência, deteção de duplicados, proposta de contractor e agendamento** numa única cadeia rastreável.

### Proposta de valor

> Para administradores de condomínio que perdem tempo a coordenar avarias por canais dispersos, o Building Maintenance Coordinator é uma plataforma que classifica e prioriza cada avaria, agrupa duplicados, propõe o contractor adequado e agenda a intervenção após aprovação do administrador. Ao contrário de WhatsApp e das suites de gestão de condomínios, entrega rastreabilidade de ponta a ponta e histórico de custos analisável.

### Defensabilidade e riscos competitivos

- Uma suite estabelecida pode adicionar estas funcionalidades. **Mitigação:** velocidade e foco; dados de ocorrências como ativo.
- Se demos mostrarem que já existe triagem ou despacho assistido, reposicionar para **explicabilidade e aprovação humana** ou para **análise de custos**.

## 7. Próximos passos

1. Pedir demo/trial a SolidSoft GC e Unitify (e a mais 1 a 2 produtos).
2. Pesquisar marketplaces e software internacional de manutenção (preencher linhas **[a pesquisar]**).
3. Perguntar nas entrevistas que ferramentas os administradores usam hoje.
4. Atualizar a tabela de comparação e a proposta de valor com evidência.

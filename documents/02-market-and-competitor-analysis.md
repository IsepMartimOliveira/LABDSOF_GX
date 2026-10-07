# 2. Market and Competitor Analysis

**Estado:** levantamento preliminar v0.2 · **Sprint:** 1 · **Revisão:** 2026-10-07

## 1A. Qualidade da evidência

O rascunho anterior referia consultas em outubro de 2026, mas não continha URLs completos e datas por achado. As pistas abaixo são preservadas como **alegações do levantamento inicial a verificar**. Não se declara nesta revisão uma demo, trial ou auditoria funcional realizada.

- «Não confirmado» significa ausência de evidência suficiente, não ausência da funcionalidade.
- Material de marketing descreve alegações do fornecedor; não comprova qualidade de utilização ou conformidade.
- Registar fonte exata, data, versão/plano e excerto ou observação relevante.
- Não usar preços antigos ou limites gratuitos para decidir custos atuais.
- Sem análise completa de manutenção/helpdesk, não está demonstrada uma lacuna competitiva.

## 1B. Alternativas identificadas

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


## 2A. Alternativas e pistas de pesquisa

| Alternativa | O que investigar | Pista existente / estado |
|---|---|---|
| Chamadas, mensagens e email | Custo de coordenação, procura de informação, comunicação de estado | Hipótese de prática atual; confirmar nas entrevistas |
| Folhas de cálculo e papel | Registo de responsáveis, datas e custos; esforço de atualização | Hipótese de prática atual |
| Contactos habituais de prestadores | Confiança, disponibilidade e aprovações | Podem ser uma vantagem do processo atual; investigar |
| SolidSoft GC | Relato de avarias, fotos/offline, técnicos/QR e manutenção; triagem e despacho | Artigo Pplware referido no rascunho; URL/data por recuperar |
| Unitify | Administração, acessos, contadores, app de residente e fluxo de avarias | Pista: unitify.com/smart-building/portugal; funcionalidades por verificar |
| CondoBOM | Livro de ocorrências, manutenção e visibilidade por utilizador | Listagem App Store referida; URL/versão por recuperar |
| Manu | Manutenção preventiva e ligação a fornecedores | Conteúdo SíndicoNet de 2022 referido; URL por recuperar; preço antigo não utilizável |
| Condomob / Sivirino | Reporte, acompanhamento e manutenção | Imprensa de 2017 referida; verificar produto e relevância atual |
| Software de manutenção / gestão de propriedades | Ordens de trabalho, priorização, prestadores e histórico | Selecionar pelo menos um comparável após pesquisa |
| Helpdesk genérico | Estados, atribuição, automações, duplicados e permissões | Selecionar comparável e avaliar adaptação ao domínio |
| Marketplace de serviços | Contratação, resposta, orçamento e continuidade do acompanhamento | Selecionar comparável relevante para Portugal |

O alcance e a importância destas alternativas dependem das ferramentas que os participantes realmente usam.

## 2B. Comparação por critérios (§5.2 do enunciado)

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

## 3. Matriz de comparação a completar

Preencher por produto com «confirmado na fonte», «observado em teste», «não confirmado» ou «fora do âmbito», sempre com referência. Não usar cruzes como sinónimo de ausência.

| Critério | Evidência a recolher | BMC proposto (não implementado) |
|---|---|---|
| Utilizadores e mercado | Quem usa, quem decide e quem paga | Administração profissional e moradores; prestadores secundários |
| Relato e acompanhamento | Texto/fotos, estados, responsáveis e permissões | Texto e histórico no MVP; fotos pós-MVP |
| Triagem | Manual, regras, IA; explicação e correção | IA assistida + regras/fallback e revisão |
| Duplicados | Sugestão, associação e reversibilidade | Should; associação revista, preservando originais |
| Intervenção | Seleção, aprovação, aceitação e calendário | Catálogo pequeno e ciclo explícito |
| Custos | Registo básico vs análise financeira | Registo opcional no MVP; gráficos/resumos pós-MVP |
| UX | Conclusão de tarefas, erros, ajuda necessária | Por testar |
| Privacidade/confiança | Visibilidade, retenção e controlos; distinguir alegação de evidência | Proposta em [segurança](09-security-privacy.md) |
| Negócio | Plano, preço datado, custos de adoção/migração | SaaS por edifício/fração por validar |
| IoT | Sensores, tratamento de falhas e utilidade | DEC-01, fora da base provisória |

## 4. Registo de fontes e resultados

| ID | Produto e plano | URL exato / data de consulta | Capacidade ou limitação observada | Tipo de evidência | Consequência para BMC |
|---|---|---|---|---|---|
| A preencher após verificação | — | — | — | — | — |

Não preencher este registo com memória de páginas, inferências de IA ou referências que não tenham sido consultadas.

## 5. Hipótese de diferenciação e negócio

> O BMC pretende reduzir esforço administrativo através de um fluxo simples e rastreável entre relato, triagem, intervenção e encerramento.

Esta proposta não afirma exclusividade de IA, rastreabilidade ou calendário. É necessário demonstrar qual melhoria importa aos utilizadores e se justifica acrescentar uma ferramenta.

Hipóteses a testar:
- Simplicidade do percurso pode reduzir contactos e tempo ativo.
- Explicações e possibilidade de corrigir sugestões podem apoiar decisões.
- Empresas podem preferir integração com software existente a substituir ferramentas.
- Um catálogo conhecido pode ser mais útil que um marketplace aberto.
- Compra por edifício/fração depende de valor e processo de decisão reais.

Se concorrentes cobrirem o fluxo, rever posicionamento com evidência. Não mudar automaticamente para análise de custos sem investigar essa necessidade.

## 6. Próximas ações

1. Recuperar fontes do levantamento e selecionar comparáveis usados pelo segmento.
2. Completar critérios do §5.2: utilizadores, funcionalidades, forças/fraquezas, negócio, UX, privacidade/confiança e diferenciação.
3. Quando possível, realizar uma tarefa equivalente em demo/trial; documentar restrições de acesso.
4. Cruzar resultados com [investigação](03-user-research.md) e rever prioridades com stakeholders.
5. Registar decisões em [DEC-02](planning/decisions-and-feedback.md) e evidência em DISC-02 do [backlog](06-product-backlog.md).

---


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

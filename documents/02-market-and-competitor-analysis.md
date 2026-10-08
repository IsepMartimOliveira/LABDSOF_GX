# 2. Market and Competitor Analysis

**Estado:** levantamento preliminar v0.3 · **Sprint:** 1 · **Revisão:** 2026-10-09

## 1. Qualidade da evidência

O levantamento inicial contém pistas úteis, mas faltam URLs completos e datas por achado. Os detalhes abaixo são **alegações antigas por verificar**, não resultados de uma nova pesquisa. Não existe demo, trial ou auditoria funcional documentada.

- «Não confirmado» significa evidência insuficiente, não ausência da funcionalidade.
- Material comercial descreve alegações do fornecedor; não comprova qualidade, segurança ou conformidade.
- Registar fonte exata, data, versão/plano e observação relevante antes de confirmar uma capacidade.
- Preços históricos não são preços atuais. Não usar informação antiga para estimar custos sem verificação.
- A diferenciação só pode ser sustentada depois de comparar alternativas relevantes para os utilizadores.

## 2. Alternativas identificadas

### 2.1. Práticas informais [Hipóteses a validar]

| Alternativa | Utilizadores | Vantagem possível | Limitação a investigar |
|---|---|---|---|
| Chamadas, SMS, WhatsApp e email | Moradores, administração e prestadores | Familiaridade e baixo esforço inicial de adoção | Histórico de mensagens pode não estruturar estados, responsáveis e decisões |
| Grupos de vizinhos | Moradores | Comunicação rápida e conhecimento local | Ruído, repetição e exposição de informação |
| Folhas de cálculo, papel e livro de ocorrências | Administração e zeladores | Flexibilidade e registo simples | Esforço de atualização, consulta e partilha |
| Contactos habituais de prestadores | Administração | Confiança e conhecimento do edifício | Dependência de pessoas e disponibilidade; comparação pode ser manual |

Confirmar nas entrevistas a utilização efetiva, o custo e as dificuldades. Não assumir que todos usam os mesmos canais ou que o processo atual é sempre inferior.

### 2.2. Produtos e pistas do levantamento inicial

Todos os detalhes desta tabela permanecem por verificar; a coluna «Fonte a recuperar» não é uma referência confirmada.

| Produto | Mercado / utilizadores indicados | Capacidades mencionadas no levantamento | Potencial relevante e questão em aberto | Fonte a recuperar |
|---|---|---|---|---|
| SolidSoft GC | Portugal; administradores profissionais/voluntários e moradores | Relato com foto/offline, técnicos por QR, rotas de manutenção, documentos, assembleias e quotas; alegação de conformidade RGPD | Suite ampla e contexto português; verificar profundidade de triagem, despacho e controlos de acesso | Artigo Pplware; URL e data por recuperar |
| Unitify | Portugal; administração e edifícios inteligentes | Acessos, intercomunicador vídeo, contadores, app de residente, quotas e pagamentos locais | Integração com edifício; verificar o fluxo de avarias e dependência de hardware | Pista: unitify.com/smart-building/portugal; data/plano por verificar |
| CondoBOM | Brasil; síndicos, porteiros e moradores | Ocorrências, manutenção periódica, reservas, visitantes e encomendas; visibilidade restrita ao autor/admin mencionada | Comparável de acompanhamento e privacidade; verificar despacho e adequação ao contexto português | App Store; URL e versão por recuperar |
| Manu | Brasil; síndicos | Manutenção preventiva por equipamento e ligação a fornecedores/engenharia | Comparável de manutenção; verificar resposta a avarias não planeadas | SíndicoNet, conteúdo publicitário de 2022; URL por recuperar |
| Condomob / Sivirino | Brasil; síndicos e moradores | Pedidos com foto e acompanhamento de estado | Pistas adicionais; verificar produto, versão e relevância atual | Imprensa/SíndicoNet de 2017; URL por recuperar |

### 2.3. Categorias ainda por pesquisar

| Categoria | Comparação necessária |
|---|---|
| Software internacional de manutenção/gestão de propriedades | Ordens de trabalho, priorização, prestadores, custos e histórico |
| Helpdesk / ticketing genérico | Estados, atribuição, automações, duplicados, permissões e esforço de adaptação ao domínio |
| Marketplace de serviços em Portugal | Orçamentos, seleção, resposta e continuidade do acompanhamento |

Selecionar comparáveis a partir das ferramentas usadas pelo segmento. Não assumir que estas categorias não oferecem funcionalidades apenas porque ainda não foram pesquisadas.

## 3. Matriz comparativa

**NC** = não confirmado. **PI** = pista do levantamento inicial, ainda sem referência suficiente. Uma célula só passa a «confirmado na fonte» ou «observado em teste» com ID do registo da secção 5. PI não prova presença nem qualidade. A coluna BMC descreve planeamento, não funcionalidades implementadas; âmbito e prioridades em [04 Visão](04-product-vision.md) e [06 Backlog](06-product-backlog.md).

| Critério | SolidSoft GC | Unitify | CondoBOM | Manu | BMC proposto |
|---|---|---|---|---|---|
| Relato e acompanhamento | PI | NC | PI | NC | Texto, estados e histórico |
| Fotografias | PI | NC | PI | NC | Pós-MVP |
| Triagem automática de urgência | NC | NC | NC | NC | IA assistida, regras e revisão |
| Duplicados | NC | NC | NC | NC | Should; associação revista |
| Prestadores e despacho | PI: técnicos/rotas | NC | NC | PI: ligação a fornecedores | Catálogo pequeno; aprovação e resposta |
| Calendário externo | NC | NC | NC | NC | Simulador realista; fornecedor real opcional |
| Registo de custos | NC | NC | NC | NC | Básico, opcional |
| Análise financeira / resumos | NC | NC | NC | NC | Pós-MVP |
| Manutenção preventiva | PI: rotas | NC | PI | PI | Fora da base atual |
| Quotas, assembleias e pagamentos | PI | PI: quotas/pagamentos | PI: gestão administrativa, detalhe a confirmar | NC | Fora da base atual |
| Hardware / contadores | NC | PI | NC | NC | IoT por decidir em DEC-01 |

Avaliar também o processo informal da secção 2.1 com tarefas equivalentes; não lhe atribuir ausências absolutas por falta de estrutura especializada.

## 4. Negócio, utilização e confiança

| Dimensão | Informação preservada / estado | Verificação necessária |
|---|---|---|
| Modelo comercial dos concorrentes | Manu: pista de subscrição mensal anunciada em 2022 a R$ 59,90; restantes planos não confirmados | Fonte original, oferta atual, unidade de cobrança, custos de adoção/migração; preço histórico não orienta orçamento |
| UX | Hipótese: um percurso focado pode exigir menos esforço que uma suite ampla | Executar tarefa equivalente, observar tempo, erros e ajuda; não concluir a partir de marketing |
| Privacidade | Pistas específicas na tabela de produtos; nenhuma conformidade auditada | Visibilidade por papel, retenção e controlos demonstráveis |
| Confiança na IA | Não há evidência suficiente sobre adoção de IA pelos concorrentes | Verificar sugestões, explicações, correção e aprovação; não afirmar exclusividade do BMC |

O modelo comercial do BMC é uma [hipótese de produto](04-product-vision.md#8-modelo-de-negócio), a validar em DEC-02. A sua política de acesso é definida na [avaliação de segurança](09-security-privacy.md#2-matriz-de-acesso-proposta), não por imitação automática de um concorrente.

## 5. Registo de fontes e resultados

| ID | Produto e plano | URL exato / data de consulta | Capacidade ou limitação observada | Tipo de evidência | Consequência para BMC |
|---|---|---|---|---|---|
| A preencher após verificação | — | — | — | — | — |

Registar aqui a evidência e referenciar o ID na matriz. Não criar entradas a partir de memória de páginas ou conteúdo gerado sem verificação.

## 6. Hipótese de diferenciação

A [proposta de valor](04-product-vision.md#1-visão-e-proposta-de-valor) depende de demonstrar redução de esforço administrativo, sem pressupor exclusividade de IA, rastreabilidade ou calendário.

Hipóteses a testar:
- Simplicidade pode reduzir contactos e tempo ativo.
- Explicações e correção podem apoiar decisões.
- Empresas podem preferir integração com software existente a substituição.
- Um catálogo conhecido pode ser mais útil que um marketplace.
- Uma suite pode já cobrir o fluxo ou adicioná-lo; foco e rapidez, por si só, não demonstram vantagem defensável.

Se concorrentes cobrirem o essencial, rever posicionamento com evidência; não mudar automaticamente para análise de custos sem investigar essa necessidade.

## 7. Próximas ações

1. Recuperar fontes e escolher comparáveis de manutenção/helpdesk e marketplace.
2. Completar critérios do §5.2: utilizadores, funcionalidades, forças/fraquezas, negócio, UX, privacidade/confiança e diferenciação.
3. Procurar demo/trial dos produtos relevantes e documentar tarefas observadas e limitações de acesso.
4. Cruzar resultados com a [investigação](03-user-research.md).
5. Rever visão e prioridades; registar decisões em [DEC-02](planning/decisions-and-feedback.md) e trabalho em DISC-02 do [backlog](06-product-backlog.md).

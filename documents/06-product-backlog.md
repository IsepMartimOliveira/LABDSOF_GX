# Product Backlog

**Estado:** proposta v0.2 · **Sprint:** 1 · **Prioridade:** ainda não validada com cliente/docentes

Corresponde ao entregável 5 do §7.1.2. O [roadmap](05-product-roadmap.md) define horizontes; este documento define itens. Nenhuma issue remota, estimativa, atribuição ou implementação é presumida.

## 1. Convenções e priorização

MoSCoW refere-se à **release académica**: Must = essencial para ciclo/obrigações; Should = valioso mas simplificável; Could = opcional; Won't = fora desta release. Esta é uma proposta para a sessão de priorização, não o resultado dessa sessão.

Todos os itens estão em **Backlog**, com **estimativa, responsável, revisor e URL de issue por atribuir**; nenhum foi declarado Ready. Discussão de capacidade e DoR em [Sprint B](planning/sprint-b-backlog.md).

Ordem inicial: DISC/EN de descoberta e fundações → US-01/02 → US-03/04 → US-06/07/08/09/10 → Should/Could conforme evidência. EN-03 acompanha implementação e EN-04 a avaliação.

## 2. Épicos

| ID | Resultado / fronteira | Itens | Origem |
|---|---|---|---|
| EP-00 | Descoberta e planeamento justificáveis | DISC-01–03 | §5.1–5.4, §5.7 |
| EP-01 | Morador reporta e acompanha com visibilidade adequada | US-01/02/04/10 | J1, P1/P5 |
| EP-02 | Triagem assistida e associações revistas | US-03/05 | J2, P2/P3/P7 |
| EP-03 | Intervenção do pedido ao encerramento | US-06–09/11–13 | J2–J3, P6 |
| EP-04 | Sistema entregável, seguro, observável e avaliável | EN-01–04 | §6–§8 |

## 3. Descoberta e engenharia

| ID / prioridade | Resultado e critérios de aceitação | Dependências | Horizonte |
|---|---|---|---|
| DISC-01 / Must | Recolher evidência: método/participantes reais registados; achados ligados a P1–P7; limitações e decisões explícitas. Se acesso falhar, documentar tentativas e evidência alternativa, sem afirmar validação | Plano de pesquisa, acesso/retenção | S1 |
| DISC-02 / Must | Completar comparação: fontes exatas e datadas; critérios §5.2; incluir alternativa informal e comparável de manutenção/helpdesk; conclusão separa evidência de inferência | Seleção de comparáveis | S1 |
| DISC-03 / Must | Ratificar organização e rever âmbito/prioridades: papéis/board/DoR/DoD; DEC-01/03/09 e discussão DEC-10; feedback real registado. Documentar pelo menos uma revisão de decisão pelos docentes ao longo do projeto | Disponibilidade da equipa e stakeholders | S1, seguimento S2/S3 |
| EN-01 / Must | Consolidar desenho: contexto, componentes, modelo, API/eventos, propriedade de dados, deploy e ameaças; ADRs registam alternativas e decisões efetivas | DEC-04/07, visão | S1 |
| EN-02 / Must | Walking skeleton: cliente→backend→persistência→consulta após reinício; build automático, teste inicial e contentores com instruções reproduzíveis; evidência ligada | EN-01 | S1 |
| EN-03 / Must | Entrega/qualidade: componentes independentes ou exceção aceite; CI/CD, testes de autorização/contratos/jornadas, logs/health/metrics/correlação, falhas de fila/IA/calendário e backup/restore; evidência dos NFRs aplicáveis | EN-01/02; acompanha histórias | S2, reforço S3 |
| EN-04 / Must | Avaliação final: IA/baseline, usabilidade, acessibilidade, segurança, desempenho, dashboard, evolução de arquitetura, limitações, roadmap e contribuições; resultados e ambiente reproduzíveis | Incremento operacional, DEC-08 | S3 |

## 4. Histórias e critérios

Os critérios abaixo aplicam as necessidades a cada entrega. Definições detalhadas são mantidas na [avaliação de IA](07-responsible-ai-assessment.md#4-critérios-provisórios), nos [estados de domínio](08-technical-design.md#3-estados-e-regras-de-negócio), na [matriz de acesso](09-security-privacy.md#2-matriz-de-acesso-proposta) e nos [NFRs](requirements.md#requisitos-não-funcionais--restrições). Alterações nessas definições exigem rever as histórias afetadas.

### US-01 — Registar e consultar relato · Must · EP-01

Como morador, quero reportar uma avaria no meu edifício para que a administração possa acompanhá-la.

- Com pertença válida, texto e zona válidos, guardar relato/ocorrência e devolver ID e estado «recebida», sem esperar pela IA.
- Entrada inválida produz erro compreensível sem criar registo parcial.
- Outro edifício não lê nem altera o relato, mesmo chamando diretamente a API.
- Repetição do mesmo pedido com a mesma chave não cria duas ocorrências.
- Consulta após reinício mantém o registo.

**Origem:** RF-01; NFR-01/02/05/07/09. **Dependências:** EN-01/02, DEC-07. **Horizonte:** S2, fatia mínima no skeleton.

### US-02 — Triar manualmente e acompanhar estados · Must · EP-01

Como administrador, quero rever ocorrências e o seu histórico para decidir o próximo passo.

- Listar apenas edifícios geridos, com categoria/urgência pendentes explícitas.
- Alterar categoria/urgência manualmente regista ator, instante e motivo.
- Rejeitar transições inválidas e alterações concorrentes sobre versão desatualizada.
- Morador vê estado autorizado e histórico público, sem notas internas.

**Origem:** RF-02; NFR-01/06. **Dependências:** US-01, DEC-07/10. **Horizonte:** S2.

### US-03 — Classificar com IA e fallback · Must · EP-02

Como administrador, quero uma sugestão de categoria e urgência para reduzir esforço de triagem.

- Evento de relato é processado assincronamente; sugestão válida guarda origem/versão e motivo, visíveis como não verificados.
- Regras de sinais críticos executam independentemente da IA; resultado do modelo não remove um alerta nem sobrescreve decisão humana posterior.
- Falha, timeout ou resposta inválida deixam regras/triagem manual disponíveis e estado visível.
- Reentrega de evento não duplica sugestão nem efeitos; tentativas esgotadas ficam observáveis.
- Avaliação compara IA, baseline e resultado combinado no dataset versionado, segundo os [critérios de IA](07-responsible-ai-assessment.md#4-critérios-provisórios) acordados.

**Origem:** RF-03; NFR-03/04/10. **Dependências:** US-01/02, DEC-05/08. **Horizonte:** S2.

### US-04 — Publicar ocorrência comum e confirmar impacto · Must · EP-01

Como morador, quero confirmar que um problema comum me afeta para dar informação útil sem repetir o relato.

- Só resumo explicitamente publicado pelo administrador fica visível ao mesmo edifício.
- Confirmar duas vezes mantém uma contribuição; retirar remove a contribuição.
- Identidade e texto privado não aparecem a outros moradores; outro edifício não confirma.
- Contador não altera urgência automaticamente; subscrição opcional pode ser desligada.
- Criar relato separado continua possível.

**Origem:** RF-04 / §5.5; NFR-01/02/07. **Dependências:** US-01/02, DEC-07. **Horizonte:** S2.

### US-05 — Rever sugestões de duplicados · Should · EP-02

Como administrador, quero identificar relatos da mesma avaria para coordenar uma única resposta.

- Candidatos respeitam edifício, zona e janela temporal; explicam porque foram sugeridos.
- Associação exige confirmação, conserva originais e pode ser desfeita com auditoria.
- Não expor texto privado na pesquisa de moradores nem misturar edifícios.
- Medir precisão/recall em pares anotados; escolher regras ou embeddings após avaliação.

**Origem:** RF-05; NFR-01/10. **Dependências:** US-01/02, P2, DEC-05. **Horizonte:** S2/S3 se capacidade.

### US-06 — Selecionar prestador · Must · EP-03

Como administrador, quero selecionar um prestador elegível para preparar a intervenção.

- Catálogo sintético informa especialidade e cobertura; filtros eliminam candidatos incompatíveis.
- Ordenação simples e determinística explica critérios disponíveis; dados desconhecidos não são inventados.
- Administrador pode alterar seleção; sem elegíveis vê pendência e opção de coordenação manual.
- Seleção não envia pedido nem confirma disponibilidade real.

**Origem:** RF-06; NFR-01. **Dependências:** US-02, DEC-10. **Horizonte:** S2.

### US-07 — Aprovar pedido e obter resposta · Must · EP-03

Como administrador, quero autorizar um pedido e conhecer a resposta do prestador para coordenar a intervenção.

- Apenas administrador do edifício aprova; registar proposta, condições e versão.
- Aprovação repetida não envia dois pedidos.
- Apenas prestador atribuído aceita, recusa ou contrapropõe; contraproposta exige nova aprovação.
- Aprovação do pedido não apresenta a marcação como confirmada.
- Condições alteradas invalidam aprovação da versão anterior.

**Origem:** RF-07; NFR-01/04. **Dependências:** US-06, DEC-10. **Horizonte:** S2.

### US-08 — Confirmar calendário e tratar falhas · Must · EP-03

Como administrador, quero saber se a marcação foi efetivamente registada para evitar comunicar uma data falsa.

- Apenas pedido aprovado e aceite é enviado ao calendário/simulador.
- Resposta válida guarda referência externa e confirma; timeout/dados inválidos deixam pendência explícita.
- Retry/evento duplicado não cria segunda marcação; resultado externo incerto é reconciliado.
- Confirmação manual exige administrador, data e motivo/origem; não a apresentar como sincronizada.
- Repetir depois da ação manual não cria marcação duplicada.

**Origem:** RF-08; NFR-04/11. **Dependências:** US-07, DEC-06/10. **Horizonte:** S2.

### US-09 — Concluir, encerrar e reabrir · Must · EP-03

Como administrador, quero verificar a conclusão para encerrar a ocorrência com histórico.

- Prestador atribuído comunica conclusão; ocorrência fica «aguarda validação».
- Administrador encerra ou devolve para execução com motivo; pode também encerrar manualmente justificando.
- Reabertura regista motivo e preserva histórico; transições inválidas são rejeitadas.
- Custo desconhecido não impede encerramento; nenhuma conclusão financeira é inventada.

**Origem:** RF-09; NFR-01/09. **Dependências:** US-02/07/08, DEC-10. **Horizonte:** S2, refinamento S3.

### US-10 — Notificar alterações · Must · EP-01

Como interveniente, quero receber atualizações autorizadas para acompanhar a ocorrência.

- Um canal proposto in-app; eventos de estado originam notificações com ID único.
- Destinatários e conteúdo respeitam visibilidade e preferências opcionais.
- Retry não duplica notificação; falha fica observável sem desfazer estado da ocorrência.
- Consulta de estado funciona mesmo se a notificação falhar.

**Origem:** RF-10; NFR-01/04/06. **Dependências:** US-02/04/07, DEC-06. **Horizonte:** S2.

### US-11 — Registar custo básico · Should · EP-03

Como administrador, quero registar custo conhecido para manter histórico da intervenção.

- Valor não negativo, moeda e origem; campo pode estar vazio.
- Prestador pode propor custo do seu trabalho; confirmação/correção pelo administrador fica auditada.
- Moradores não recebem custos/dados privados por defeito.
- Não inclui pagamentos, agregações ou resumo de IA.

**Origem:** RF-11; NFR-01/02. **Dependências:** US-09, DEC-07/10. **Horizonte:** S2/S3 se capacidade.

### US-12 — Refinar ranking · Should · EP-03

Como administrador, quero comparar critérios adicionais para selecionar entre prestadores elegíveis.

- Pesos documentados; justificar origem/atualidade de preço, distância e disponibilidade.
- Dados ausentes não significam preço zero nem disponibilidade confirmada.
- Testes demonstram ordenação e desempate; aprovação continua humana.

**Origem:** P6 / RF-06. **Dependências:** US-06, evidência de utilidade e dados. **Horizonte:** S3 se capacidade.

### US-13 — Integrar calendário real · Could · EP-03

Como administrador, quero sincronizar com o calendário usado na operação.

- Adaptador respeita contrato e cenários já demonstrados pelo simulador.
- Credenciais ficam fora do Git; permissões e revogação documentadas.
- Testar disponibilidade e falha sem comprometer avaliação reproduzível.

**Origem:** RF-08. **Dependências:** US-08, DEC-06, acesso ao fornecedor. **Horizonte:** se capacidade.

## 5. Won't nesta base / alternativas

Fotografias e análise visual, gráficos/resumos de custos, pagamentos, marketplace, apps nativas, autoaprovação e subscrições. IoT é **alternativa por decidir em DEC-01**; não recebe compromisso de implementação enquanto não houver revisão de âmbito.

## 6. Validação com stakeholders e release

- Sessão de MoSCoW: **não realizada/registada**; data e participantes por preencher.
- Levar valor por item, custo/risco estimado e trade-offs; registar mudança e motivo em [feedback](planning/decisions-and-feedback.md).
- Objetivos e plano de release no [roadmap](05-product-roadmap.md#1-horizontes); datas por confirmar.
- [Sprint B](planning/sprint-b-backlog.md): seleção apenas após DoR/capacidade.
- Templates e campos: [gestão de issues](governance/issue-management.md).

Referência: [MoSCoW — ProductPlan](https://www.productplan.com/glossary/moscow-prioritization), consultada em 2026-10-07. A classificação acima é uma proposta de prioridades para o BMC.

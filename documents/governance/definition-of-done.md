# Definition of Done (DoD)

**Estado:** proposta v0.1 · ratificação pendente (DEC-09)

Aplica-se por tipo de entrega. Documentação concluída não significa funcionalidade implementada, pesquisa realizada ou configuração remota ativa. Itens não aplicáveis requerem motivo; requisitos obrigatórios do enunciado não são dispensados.

## Checklist comum

- [ ] Critérios de aceitação cumpridos com evidência ligada ao item.
- [ ] Revisão por outro elemento e comentários relevantes resolvidos.
- [ ] Alteração integrada por PR, com referência à issue/ID do backlog.
- [ ] Documentos, decisões e estado do board coerentes.
- [ ] Sem segredos, dados identificadores desnecessários ou resultados inventados.
- [ ] Limitações e trabalho restante explícitos.
- [ ] Validação funcional pelo papel BA/PO ou revisor acordado.

## Código e configuração executável

- [ ] Build e verificações automáticas aplicáveis passam.
- [ ] Testes proporcionais ao risco: unidade para regras, integração para persistência/contratos, E2E para jornadas críticas.
- [ ] Testes de autorização e falha quando a mudança afeta esses comportamentos.
- [ ] Análise estática e dependências verificadas; achados materiais tratados ou decisão justificada registada.
- [ ] Imagem de contentor construída para componentes alterados; execução demonstrável no ambiente de teste.
- [ ] Logs sem dados sensíveis, health checks, correlação e métricas atualizados quando aplicável.
- [ ] Configuração, migrações e recuperação/rollback documentados quando afetados.
- [ ] API/contratos e arquitetura atualizados se alterados.

Uma edição apenas documental não exige criar testes de código ou imagens. Deve ter revisão de conteúdo, coerência e links.

## IA

- [ ] Avaliação executada nos casos relevantes, comparada com baseline e resultados registados.
- [ ] Fallback testado; outputs inválidos não alteram decisões confirmadas.
- [ ] Modelo/prompt/dataset identificados; custo, latência e limitações registados.
- [ ] UI distingue sugestão e decisão humana; nenhum efeito consequente autorizado pelo modelo.

## Pesquisa e documentação

- [ ] Fontes e método rastreáveis; factos, hipóteses e interpretações separados.
- [ ] Resultados e limitações correspondem ao trabalho realmente realizado.
- [ ] Um plano de entrevistas pode estar documentado sem entrevistas concluídas; ambos têm estados separados.
- [ ] Se houver recolha: propósito explicado, autorização registada e dados tratados conforme plano.
- [ ] Achados ligados a decisões ou a justificação para não alterar o produto.

## Evidência e manutenção

Registar na issue/PR comandos/verificações, resultados e local da demonstração. Rever a DoD nas retrospetivas sem ocultar trabalho incompleto. A review com investidores pode originar novo trabalho mesmo depois de um item cumprir DoD.

Referência: [Scrum Inc — Definition of Done](https://www.scruminc.com/definition-of-done/), consultada em 2026-10-07. A DoD funciona como padrão partilhado de qualidade; os critérios concretos acima são proposta para este projeto.

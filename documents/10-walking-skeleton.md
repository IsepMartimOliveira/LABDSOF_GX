# Walking Skeleton

**Estado:** plano de execução · Sprint 1, entregável 10 · **Não implementado**

Um documento de plano não satisfaz o entregável executável. Nesta base documental não existem aplicação, Dockerfiles, pipeline ou testes.

## 1. Objetivo mínimo

Cliente de teste → backend → armazenamento persistente → consulta do mesmo ID após reinício. Incluir identidade de teste e uma verificação de acesso entre dois edifícios.

Este skeleton não precisa de implementar já todas as histórias, IA ou calendário. As fronteiras futuras devem estar claras; na Sprint 2 são exigidos dois componentes backend independentes ou alternativa modular aceite.

## 2. Sequência proposta

1. Resolver stack/ambiente e fronteiras mínimas em DEC-04 / EN-01.
2. Criar fixtures sintéticas de dois edifícios, morador e administrador.
3. Implementar uma fatia de US-01: registar relato e consultar estado.
4. Aplicar autorização no backend; não delegar segurança no cliente.
5. Containerizar cliente/backend/armazenamento e documentar configuração.
6. Criar build automático e pelo menos teste de integração da fatia.
7. Reiniciar serviço e demonstrar persistência; testar acesso negado de outro edifício.
8. Guardar links de commit/PR, execução do pipeline e instruções testadas.

## 3. Checklist de aceitação

- [ ] Código e configuração em Git, ligados a EN-02.
- [ ] Cliente regista e consulta um ID persistido.
- [ ] Dados sobrevivem ao reinício.
- [ ] Teste automatizado confirma o percurso.
- [ ] Teste de acesso indevido falha como esperado.
- [ ] Build automático executado com sucesso.
- [ ] Contentores arrancam com instruções reproduzíveis.
- [ ] Health check e log com correlation ID básicos.
- [ ] Configuração/segredos e limpeza de dados de teste documentados.
- [ ] Outro elemento reproduz a demonstração.

## 4. Registo de execução (por preencher com evidência)

| Campo | Estado |
|---|---|
| Stack / ADR aceite | Por decidir |
| Commit / PR | Não disponível |
| Pipeline / execução | Não disponível |
| Comandos de instalação/build/teste/deploy | A escrever após escolher stack; não inventar comandos |
| Ambiente e versões | Por definir |
| Resultado do teste | Não executado |
| Demonstração / revisor | Pendente |
| Limitações observadas | A registar após execução |

## 5. Evolução

Na Sprint 2 acrescentar Dispatch, processamento assíncrono, IA/fallback, calendário/simulador, notificações, ciclo de encerramento e observabilidade. Cada incremento atualiza [desenho](08-technical-design.md), contratos e [DoD](governance/definition-of-done.md).

Itens: EN-01/02/03 e US-01 no [backlog](06-product-backlog.md). Este documento será o ponto de entrada para instruções reais de execução quando existirem.

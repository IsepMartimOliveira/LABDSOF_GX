# ADR-001 — Fronteiras e deployment backend

**Estado:** Proposta · **Data da proposta:** 2026-10-07 · **Decisores:** por atribuir · **DEC:** DEC-04

## Contexto

O §6.2 exige pelo menos dois componentes backend implantáveis independentemente; alternativa modular depende de justificação e aceitação. O BMC distingue ocorrência/triagem de preparação e execução de intervenção.

## Alternativas

| Alternativa | Vantagens esperadas | Custos/riscos |
|---|---|---|
| Issue + Dispatch, com worker assíncrono | Fronteiras do domínio e falhas externas explícitas; deploy separado | Consistência eventual, contratos, testes e operação distribuída |
| Backend de domínio + worker independente | Menos fronteiras de dados; isolamento da IA | Justificar autonomia/responsabilidade do worker e adequação com docentes |
| Monólito modular | Menor custo inicial de operação e transações | Exceção requer evidência e aceitação; módulos devem ter limites verificáveis |
| Serviço por cada papel/subscrição | Separação extensa | Sem necessidade demonstrada; custo excessivo para o MVP |

## Direção proposta (não aceite)

Issue controla ocorrências/triagem; Dispatch controla intervenções/prestadores/calendário. Worker processa triagem e comunica resultados pela interface do dono dos dados. Uma tecnologia de persistência com esquemas/credenciais separados é candidata.

Comunicação síncrona para pedidos/consultas com resposta imediata; eventos para tarefas demoradas e propagação de estado. IDs e contratos versionados; sem escrita cruzada nas tabelas. Outbox e consumidores idempotentes são propostas a confirmar.

## Consequências e validação

- Dois serviços têm builds, configuração, migrações e health checks próprios.
- Base de dados/infraestrutura partilhadas continuam a ser dependências e pontos de falha.
- Testar indisponibilidade de worker, reentrega e atualização atrasada.
- Comparar esforço com capacidade real antes de fechar escolha.
- Se escolher alternativa modular, registar justificação e resposta dos docentes; não assumir aprovação.

## Por resolver

Stack, broker, autenticação entre serviços, deployment, cancelamento/reconciliação e propriedade final das notificações. Rever com [desenho técnico](../08-technical-design.md), EN-01 e DEC-04.

**Decisão final / data / evidência:** pendente.

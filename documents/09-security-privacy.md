# Security and Privacy Assessment

**Estado:** avaliação inicial proposta · Sprint 1, entregável 9 · controlos não implementados/verificados

## 1. Contexto e ativos

Ativos: identidade/pertença, texto privado, resumo publicado, localização, propostas, horários, custos, credenciais, eventos e histórico. Fronteiras: cliente→API, serviço→serviço, broker, base de dados, fornecedor IA/calendário e repositório de investigação.

O MVP usa dados sintéticos de demonstração. Entrevistas reais continuam a exigir propósito, autorização de participação e gestão de dados próprios. Esta proposta não declara conformidade jurídica; questões legais e políticas institucionais precisam de revisão adequada antes de piloto real.

## 2. Matriz de acesso proposta

| Operação/dados | Morador | Administrador | Prestador |
|---|---|---|---|
| Criar relato | Edifícios a que pertence | Edifícios geridos, com origem registada | Fora da base |
| Texto bruto do relato | Próprio | Edifícios geridos | Só extrato necessário no pedido atribuído |
| Resumo comum publicado | Mesmo edifício | Edifícios geridos | Contexto necessário ao pedido |
| Categoria/urgência confirmada | Consulta autorizada | Confirma/corrige | Consulta do pedido atribuído |
| Confirmar impacto | Mesmo edifício; própria contribuição | Consulta contador | Não |
| Proposta/aprovação | Não | Edifícios geridos | Responde só ao pedido atribuído |
| Marcação/conclusão | Estado público autorizado | Coordena/valida | Pedido atribuído |
| Custo | Sem acesso por defeito | Edifícios geridos | Propõe/consulta do seu trabalho |
| Encerrar/reabrir | Não | Com motivo conforme transição | Comunica conclusão, sem encerramento |
| Dados de outro edifício/pedido | Não | Só se explicitamente autorizado | Não |

Verificar no backend para cada operação; ocultar botões não basta. Mock de autenticação identifica utilizadores de teste predefinidos, mas não permite ao cliente escolher arbitrariamente privilégios. Serviço interno também é autenticado/autorizado.

## 3. Ameaças e verificações

| ID | Ameaça / impacto | Controlo proposto | Evidência necessária |
|---|---|---|---|
| T-01 | Alterar ID para ler outro edifício | Autorização por pertença/recurso e projeção de dados | Testes negativos em API/listagem/pesquisa |
| T-02 | Prestador aprovar despesas ou ler outro pedido | Permissões e atribuição verificadas no servidor | Testes da matriz |
| T-03 | Texto induz IA a agir/divulgar | Entrada não confiável, schema, sem ferramentas/credenciais de ação no modelo | Casos adversos no AI Assessment |
| T-04 | Retry duplica pedido/marcação | Idempotência, versionamento e reconciliação | Falhas após efeito externo e eventos repetidos |
| T-05 | Texto malicioso na UI | Renderização segura, validação de inputs | Testes de conteúdo não executável |
| T-06 | Logs/payloads expõem dados | Minimização, sanitização e acesso limitado | Inspeção de logs e payloads |
| T-07 | Tokens/segredos no Git | Injeção por ambiente, revisão/checks de segredos | Evidência CI e revisão |
| T-08 | Spam ou excesso de chamadas IA | Limites por utilizador/entrada, budget e retries limitados | Teste de limites e custos |
| T-09 | Perda de dados / falha de componente | Persistência, backup/restore, estados degradados | Ensaio de recuperação |
| T-10 | Alteração sem responsabilidade | Auditoria mínima com ator, versão e instante | Rastrear uma intervenção e correção |

Avaliar probabilidade e impacto com a equipa após definir deployment; não atribuir uma classificação de risco residual sem validar controlos.

## 4. Ciclo de vida e minimização

| Dados | Proposta de recolha/acesso | Retenção/eliminação |
|---|---|---|
| Fixtures de demo | Sintéticos, sem pessoas/moradas reais | Reset reproduzível; manter apenas fixtures necessárias |
| Relatos/intervenções | Texto mínimo e referência de zona; detalhes privados restritos | Prazo e regras por fechar em DEC-07 antes de piloto |
| Logs/auditoria | Metadados necessários, sem texto integral/segredos | Prazo, acesso e eliminação por definir com ambiente |
| Entrevistas | Notas mínimas com códigos; gravação opcional autorizada separadamente | Local, responsável e data de eliminação definidos antes da recolha |
| Identidade dos participantes | Ligação código→identidade separada, se necessária | Fora do Git; eliminar quando deixar de ser necessária |
| Dados enviados a fornecedor | Apenas necessário; sintéticos no desenvolvimento | Rever termos, configuração e retenção do fornecedor antes do uso |
| Backups | Acesso limitado e teste de restore | Definir rotação e efeito de pedidos de eliminação |

Código de participante não é anonimização se a pessoa continuar identificável. Não publicar notas brutas, contactos, gravações ou consentimentos no repositório.

## 5. Questões por fechar e plano de revisão

- DEC-07: fronteira áreas comuns/privadas, publicação de resumos, retenção, eliminação e acesso dos participantes.
- DEC-04/05/06: configuração de identidade, segredos e fornecedores.
- Antes de recolher dados: confirmar propósito, responsável e local seguro.
- Antes da S2: testes de isolamento e revisão do fluxo de aprovação.
- Na S3: rever ameaça/controlos implementados, dependências, resultados e risco residual; registar limitações.
- Antes de piloto real: rever obrigações e políticas aplicáveis; dados sintéticos não provam adequação para operação real.

Rastreabilidade: [NFR-01/02/04/09](requirements.md), [backlog](06-product-backlog.md), [pesquisa](03-user-research.md).

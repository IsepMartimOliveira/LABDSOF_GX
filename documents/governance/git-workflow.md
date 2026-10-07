# Protocolo essencial de Git

**Estado:** proposta v0.1 · configurações remotas não verificadas

Git, PRs, revisões e rastreabilidade fazem parte do §8.1 do enunciado. Ter um documento autónomo é uma escolha de organização; as práticas não são opcionais.

## Fluxo proposto

1. Criar/refinar um item de trabalho e manter ID estável (ex.: US-01).
2. Atualizar a branch principal e criar branch curta: feature/US-01-reportar, fix/BUG-12-estado ou docs/DISC-02-concorrencia.
3. Fazer commits pequenos e com propósito: «US-01: validar pertença ao edifício».
4. Abrir PR com objetivo, referência ao item, alterações, verificação e limitações.
5. Obter pelo menos uma revisão de outro elemento; autor não aprova a própria alteração.
6. Integrar apenas com verificações aplicáveis a passar e comentários relevantes resolvidos.
7. Preferir squash de commits de trabalho; preservar autoria/coautoria e referência ao item. Remover branch integrada quando seguro.

O nome main é a convenção proposta; confirmar a branch predefinida real antes de configurar proteções. Não fazer force-push em branches partilhadas nem reescrever histórico publicado sem coordenação.

## Configuração remota por executar/verificar

- [ ] Confirmar repositório remoto e acessos da equipa.
- [ ] Definir branch principal.
- [ ] Configurar regras de proteção disponíveis: PR, review, bloqueio de force-push e checks relevantes.
- [ ] Criar pipeline e só depois configurar os seus checks como obrigatórios.
- [ ] Verificar com PR real e registar link/evidência.
- [ ] Se uma proteção não estiver disponível no plano usado, registar limitação e processo compensatório.

Nenhuma destas configurações foi realizada por criar este documento.

## Convenções

- PR referencia ID local e URL da issue. «Closes #N» apenas quando existe issue GitHub real e o PR a conclui.
- Documentação acompanha mudanças de âmbito/contratos na mesma PR.
- Resolver conflitos revendo o comportamento de ambos os lados e repetindo verificações afetadas.
- Nunca versionar tokens, ficheiros de ambiente com segredos, gravações ou notas identificáveis de participantes.
- Não contornar controlos de segurança para uma demonstração.
- Release demonstrável tem tag e notas com conteúdo, limitações e instruções; nomes sugeridos: v0.1.0-skeleton e v0.2.0-mvp, só quando existirem.
- Recuperação preferida de alteração integrada: revert por PR; recuperação de dados é documentada separadamente.

Template disponível em [.github/pull_request_template.md](../../.github/pull_request_template.md). Ver [DoD](definition-of-done.md).

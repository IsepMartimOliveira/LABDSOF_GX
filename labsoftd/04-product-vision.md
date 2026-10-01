# 4. Product Vision

**Projeto:** Building Maintenance Coordinator (BMC)
**Sprint:** 1 · **Estado:** rascunho v0.1

> As personas e as metas abaixo são **hipóteses de trabalho**. Devem ser revistas com os resultados do entregável 3. Os valores-alvo das métricas são provisórios e só ganham sentido depois de medir uma linha de base (ver secção 8).

---

## 1. Visão

> Que cada avaria num edifício residencial seja detetada, priorizada e resolvida depressa, com o administrador no controlo e todos os moradores informados.

## 2. Utilizadores-alvo

| Utilizador | Papel |
|---|---|
| **Administrador de condomínio** (empresa de gestão; secundariamente voluntário) | Principal: aprova, controla custos |
| **Condómino** | Reporta e acompanha; confirma problemas existentes |
| **Contractor** | Recebe pedidos e agenda |

## 3. Proposta de valor

> Para administradores de condomínio que perdem tempo a coordenar avarias por canais dispersos, o BMC classifica e prioriza cada avaria, agrupa duplicados, propõe o contractor adequado e agenda a intervenção após aprovação. Ao contrário de WhatsApp e de suites de gestão, dá rastreabilidade de ponta a ponta e histórico de custos analisável.

| Para quem | Ganho | Alívio da dor |
|---|---|---|
| Administrador | Menos tempo por ocorrência, decisões com dados | Triagem manual, duplicados, contactos dispersos |
| Condómino | Estado e data prevista visíveis | Falta de feedback |
| Contractor | Pedidos claros e agenda sem conflitos | Informação em falta, deslocações em vão |

## 4. Personas (provisórias)

### Persona 1 · Marta, administradora profissional
- **Contexto:** gere cerca de 25 edifícios numa empresa de administração. **[Hipótese]**
- **Objetivos:** responder depressa, controlar custos, evitar queixas.
- **Frustrações:** mensagens por vários canais, duplicados, orçamentos manuais, falta de histórico.
- **Critério de confiança em AI:** quer ver o motivo da sugestão e aprovar antes de comprometer dinheiro.

### Persona 2 · Rui, condómino
- **Contexto:** mora num T2, reporta raramente, usa telemóvel. **[Hipótese]**
- **Objetivos:** reportar em menos de 2 minutos e saber o que está a acontecer.
- **Frustrações:** não sabe se foi lido, repete a mesma mensagem.
- **Preocupações:** privacidade das fotos e da morada.

### Persona 3 · Carlos, canalizador independente
- **Contexto:** pequena empresa, 1 a 2 técnicos. **[Hipótese]**
- **Objetivos:** pedidos com informação completa, agenda organizada, pagamento atempado.
- **Frustrações:** descrições vagas, mudanças de última hora.

> Marcador a remover quando houver evidência: *"Personas baseadas em hipóteses da equipa, ainda não em dados de entrevistas."*

## 5. Principais user journeys

### J1 · Reportar e acompanhar uma avaria (condómino)
1. Abre a app/web e descreve o problema (texto; fotos opcionais mais tarde).
2. O sistema mostra se já existe um problema semelhante e pergunta "isto também me afeta?".
3. Recebe confirmação com estado "recebido".
4. Recebe notificações de estado (classificado, contractor proposto, agendado, resolvido) e a data prevista.

### J2 · Triar, aprovar e agendar (administrador) · **Journey principal do MVP**
1. Vê a fila de ocorrências ordenada por urgência, com duplicados agrupados.
2. Abre uma ocorrência: tipo, urgência sugerida e motivo (explicação da AI), com indicação de "sugestão, não verificada".
3. Vê o ranking de contractors (preço, distância, disponibilidade, especialização) com explicação.
4. Aprova (ou altera) a proposta; o sistema cria o evento no calendário e notifica.
5. Marca como resolvida e regista o custo.

### J3 · Receber e executar um pedido (contractor)
1. Recebe pedido com descrição, urgência e localização no edifício.
2. Confirma ou propõe outra data (conflitos refletidos no calendário).
3. Marca a intervenção como concluída e indica o custo.

### J4 · Analisar o histórico (administrador) · Sprint 3 / roadmap
1. Vê tipos de problema mais frequentes, zonas com mais ocorrências e evolução de custos.
2. Lê um resumo gerado por AI com números calculados por consultas à base de dados.

## 6. Benefício esperado para a comunidade

- Respostas mais rápidas a avarias que afetam a vida diária (água, luz, elevador).
- Menor impacto e menos danos por demora.
- Transparência para condóminos e para a assembleia (estado e custos).
- Menos carga de coordenação no administrador.

## 7. Fronteira do MVP

| Dentro do MVP | Fora do MVP (roadmap) |
|---|---|
| Reportar avaria por texto | Análise de fotografias por AI |
| Classificação por AI com fallback por regras | Gráficos e análise de custos, resumos narrativos |
| Regras determinísticas para urgências críticas | Marketplace aberto de contractors |
| Deteção de duplicados | Pagamentos, quotas, assembleias |
| Ranking de contractors por regras (catálogo sintético) | Integração com hardware do edifício |
| Aprovação do administrador | Aplicação nativa dedicada, voz, multilingue |
| Evento no calendário externo (ou simulador) | |
| Notificações de estado | |
| Mecanismo de engagement ético (secção 9) | |
| Autenticação mockada com papéis | |

**Princípio:** o MVP é o menor fluxo completo que testa a hipótese central, ou seja, que triagem e despacho assistidos reduzem o tempo de resolução e o esforço do administrador.

## 8. Critérios de sucesso

| Métrica | Definição | Alvo inicial (a calibrar com linha de base) |
|---|---|---|
| Tempo até ao primeiro contacto com o contractor | Report até pedido enviado/confirmado | Reduzir face à linha de base |
| Tempo até à resolução | Report até "resolvida" | Reduzir face à linha de base |
| Esforço do administrador por ocorrência | Tempo médio medido em teste | Reduzir face à linha de base |
| Precisão da urgência | % de casos com urgência correta (dataset sintético de avaliação) | ≥ 85% geral e **100% nos casos críticos por regras** *(provisório)* |
| Duplicados agrupados corretamente | Precisão e recall no dataset de avaliação | ≥ 80% *(provisório)* |
| Aprovação sem alteração | % de propostas aceites sem edição | Acompanhar (indica confiança) |
| Disponibilidade em modo degradado | Fluxo principal continua com AI/calendário em baixo | Sim, demonstrável |

> **Linha de base:** obter nas entrevistas estimativas do tempo atual (honestamente identificadas como estimativas) e, no teste de protótipo, medir o tempo da tarefa com o processo atual versus BMC. Os alvos numéricos acima são **ponto de partida da equipa**, não factos.

## 9. Engagement ético (§5.5)

**Mecanismo:** botão **"isto também me afeta"** nas ocorrências abertas, com contador visível ao administrador.

1. **Comportamento incentivado:** confirmar problemas existentes em vez de criar reports duplicados.
2. **Porque beneficia:** reduz ruído, dá ao administrador um sinal de impacto e acelera a priorização.
3. **Prevenção de abuso:** um voto por utilizador e ocorrência; limites de frequência; só moradores do mesmo edifício; o contador **informa**, não determina automaticamente a urgência (que depende das regras e do administrador).
4. **Riscos de exclusão ou exposição:** votos não revelam identidade a outros condóminos; moradores que reportam menos não são penalizados; sem ranking de pessoas.
5. **Controlo e opt-out:** o utilizador pode retirar a confirmação, e escolher não receber notificações de atualização de ocorrências a que aderiu.

Sem pontos, medalhas nem rankings, a não ser que haja ligação clara aos resultados e evidência de que ajudam.

## 10. Riscos de produto

| Risco | Efeito | Mitigação |
|---|---|---|
| Baixa adoção pelos administradores | Produto sem utilizadores | Validar cedo, onboarding simples, piloto com 1 edifício |
| Pouca adesão dos condóminos | Poucos dados | Reporte em 2 min, feedback visível |
| Erro de AI em urgência crítica | Dano e perda de confiança | Regras determinísticas, aprovação humana, UI "sugestão" |
| Âmbito excessivo | MVP não entregue | Fronteira rígida do MVP |
| Privacidade (fotos, moradas) | Risco legal e de confiança | Dados sintéticos, minimização, retenção, consentimento |
| Concorrente cobre a lacuna | Perda de diferenciação | Foco em explicabilidade e aprovação, validar com demos |
| Dependência do calendário externo | Agendamento falha | Marcação manual como fallback |

## 11. Modelo de negócio (hipótese)

SaaS por edifício ou por fração, com preço escalonado para empresas de administração. Eventual extensão futura: comissão ou parceria com contractors. **A validar nas entrevistas** (pergunta 12 do guião de administradores).

## 12. Relação com o resto do Sprint 1

- Os pressupostos P1 a P7 (entregável 1) validam-se com o entregável 3.
- O backlog (entregável 5) deriva das journeys J1 a J3 e da fronteira do MVP.
- A avaliação de AI (entregável 6) usa as métricas de precisão e duplicados da secção 8.

# Guião da Apresentação — Coordenador de Manutenção de Edifícios (CME)

> **Duração-alvo:** 5–7 minutos (≈6 min 30 s) · **Formato:** 9 slides · **Público:** docentes no papel de investidores
> **Ficheiros:** `apresentacao.pptx` (slides) · `apresentacao.pdf` (versão de leitura)
> **Convenção:** texto normal = fala; *[entre parênteses]* = indicações de palco.

---

## Slide 1 — Capa · 0:00–0:15 (15 s)

> Bom dia. Somos a equipa do **Coordenador de Manutenção de Edifícios**, o nosso produto para o desafio da plataforma de resiliência comunitária do LABDSOF 2026/27. Em sete minutos vamos apresentar o problema, a visão, as personas, as funcionalidades, os workflows principais e o estado dos artefactos da primeira entrega.

## Slide 2 — O problema · 0:15–1:05 (50 s)

> A nossa comunidade são os **condomínios autogeridos** — edifícios de 8 a 60 frações com uma administração voluntária, sem gestor profissional.
>
> Hoje, a manutenção é **lenta, informal e sem registo**: pedidos por WhatsApp, decisões de memória, custos dispersos por conversas e faturas.
>
> Trabalhamos com quatro hipóteses: o morador não sabe se o pedido foi recebido nem quando vem alguém; o administrador perde noites a coordenar; o prestador chega sem contexto; e o edifício não tem memória de problemas nem de despesa.
>
> **Importante:** estas hipóteses ainda não estão validadas — temos um plano com entrevistas e inquéritos, mas não inventámos evidência nenhuma.

## Slide 3 — A visão · 1:05–1:45 (40 s)

> A nossa visão é simples: **da avaria à reparação agendada em minutos, não em dias** — com triagem por IA, aprovação humana e uma memória do edifício que mostra para onde vai o dinheiro.
>
> O produto é uma PWA *mobile-first* com subscrição de 49 a 99 euros por edifício. A regra estruturante é esta: **a IA sugere, o humano decide**. Cem por cento das ações com consequências — agendar ou gastar dinheiro — passam por aprovação humana.

## Slide 4 — Personas · 1:45–2:40 (55 s)

> Desenhámos três personas. A **Maria**, 34 anos, moradora: quer reportar uma vez e saber quem vem e quando — hoje os pedidos perdem-se no WhatsApp. O **João**, 58 anos, administrador voluntário: quer manter o edifício a funcionar sem perder as noites e justificar custos na assembleia; a frase dele é *"eu aprovo o dinheiro, quero que a IA prepare a decisão, não que a tome"*. E o **Carlos**, 42 anos, canalizador: quer trabalho local com contexto completo — *"mande-me a fotografia e a fração"*.
>
> Estas personas são rascunhos: zero entrevistas até à data; a validação está planeada.

## Slide 5 — Funcionalidades principais · 2:40–3:40 (60 s)

> Como resolvemos? Com um ciclo completo de coordenação. No MVP, seis funcionalidades **Must**: reporte com fotografia; triagem por IA com aprovação humana e *fallback* de regras; ordens de trabalho com acompanhamento; seleção e agendamento de prestador; notificações; e papéis com acessos controlados e auditoria — com autenticação simulada no MVP, como o enunciado permite.
>
> Nas fases seguintes entram a deteção de duplicados, os registos de custo, as análises e a disponibilidade dos prestadores.
>
> Transversal a tudo: IA responsável — sugestões rotuladas como sugestões, *baseline* não-IA e aprovação humana obrigatória.

## Slide 6 — Workflow principal · 3:40–4:40 (60 s)

> Este é o workflow principal, do relato à memória do edifício. A Maria submete o relato com fotografia e recebe logo confirmação de receção. O evento segue de forma assíncrona para o serviço de triagem, que classifica, extrai detalhes e procura duplicados. A sugestão fica anexada ao relato — **a sugestão nunca é o relato**. O João revê e aprova; só os valores aprovados por humano são autoritativos.
>
> A partir daí: seleção do prestador, reserva na agenda externa, notificações para todos, acompanhamento até à resolução, registo de custo e histórico.
>
> Tecnicamente, tudo assenta num fluxo de eventos com deduplicação, retentativas e fila de mensagens mortas — consistência eventual com estados pendentes visíveis.

## Slide 7 — Fluxos degradados · 4:40–5:15 (35 s)

> O produto foi desenhado para falhar em segurança. Se a IA falhar, entra o **classificador de regras** e uma fila de triagem manual — o processo continua e o resultado é rotulado como estimativa por regras. Se o calendário externo falhar, o slot fica **retido localmente como provisório** e sincroniza-se depois com retentativas; a reserva nunca se perde em silêncio. E nunca apresentamos saída incerta como facto verificado.

## Slide 8 — Estado dos artefactos · 5:15–6:20 (65 s)

> Passemos ao estado da primeira entrega. O veredicto é claro: **todos os artefactos pedidos estão concluídos, revistos internamente e prontos para entrega**.
>
> O **DoR e o DoD** estão operacionais: dez critérios de entrada e quinze de fecho, com fluxos de decisão, responsáveis, evidência exigida e regras de reabertura.
>
> Os **papéis e o processo de trabalho** estão definidos e documentados: responsabilidades por papel, matriz RACI, regras de decisão, cerimónias Scrum, política de estimação, acompanhamento por burndown e Kanban e regras Git com *smart commits*. A atribuição nominal dos nomes segue o processo de registo no arranque da Fase 1.
>
> O **modelo de domínio** está completo: catorze entidades, propriedade por serviço, oito invariantes de negócio, ciclo de vida dos estados, retenção e requisitos de consistência.
>
> E a **arquitetura de alto nível** está fechada: vistas C4 de contexto e contentores, fluxo assíncrono com deduplicação, retentativas e fila de mensagens mortas, integrações externas com tratamento de falhas, implantação, observabilidade, resiliência e cinco ADRs com alternativas e compromissos.
>
> Não há artefactos em falta: o pacote documental da primeira entrega está pronto. A implementação executável, incluindo o *walking skeleton*, arranca na Sprint B, conforme o plano.

## Slide 9 — Próximos passos e pedido · 6:20–6:50 (30 s)

> Os próximos passos são claros: registar a atribuição nominal dos papéis, obter a vossa revisão hoje, e arrancar a Sprint B com o *walking skeleton*, pipeline e implantação desde o primeiro dia.
>
> Fica a pergunta ao investidor: **este é um problema valioso, e o MVP proposto é o menor experimento credível?** Obrigado.

---

## Resumo de tempos

| Slide | Tema | Duração |
|---|---|---|
| 1 | Capa | 15 s |
| 2 | Problema | 50 s |
| 3 | Visão | 40 s |
| 4 | Personas | 55 s |
| 5 | Funcionalidades | 60 s |
| 6 | Workflow principal | 60 s |
| 7 | Fluxos degradados | 35 s |
| 8 | Estado dos artefactos | 65 s |
| 9 | Próximos passos e pedido | 30 s |
| **Total** | | **≈ 6 min 50 s** |

## Antecipação de perguntas prováveis

| Pergunta | Resposta curta |
|---|---|
| "Já validaram com utilizadores?" | Ainda não; plano pronto, nenhuma evidência inventada. É a prioridade da Sprint B. |
| "Porque confiam na IA?" | Não confiamos cegamente: sugestão, confiança visível, *fallback* de regras e aprovação humana em 100% das ações consequentes. |
| "Porque dois serviços e não um monolito?" | Fronteiras de coesão e isolamento de falhas; o enunciado exige ≥2 componentes implantáveis; a decisão está no ADR-002 com alternativas e trade-offs. |
| "E se ninguém adotar o WhatsApp?" | Reporte em menos de um minuto + recrutamento pelos edifícios da equipa + entrada compatível com WhatsApp como mitigação. |
| "Qual é o maior risco técnico?" | A precisão da triagem em relatos curtos e informais em português — mitigada por conjunto de avaliação próprio e *fallback* de regras. |

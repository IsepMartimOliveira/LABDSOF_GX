# 3. User Research

**Projeto:** Building Maintenance Coordinator
**Sprint:** 1 · **Estado:** plano de investigação (v0.1). **Ainda não existem resultados.**

> **Regra do enunciado:** não fabricar evidência de investigação. Este documento contém o plano, os guiões e os modelos de registo. As secções de resultados ficam **em branco até haver dados reais**. Se não for possível entrevistar utilizadores reais, isso deve ser escrito na secção de limitações.

---

## 1. Objetivos de investigação

| # | Pergunta | Pressuposto relacionado (entregável 1) |
|---|---|---|
| Q1 | Como são geridas hoje as avarias num condomínio, do primeiro aviso à resolução? | P1, P3 |
| Q2 | Quanto tempo e esforço custa ao administrador cada ocorrência? | P1 |
| Q3 | Com que frequência há reports duplicados ou contraditórios? | P2 |
| Q4 | Como é decidida a urgência e quem decide? | P3 |
| Q5 | Como são escolhidos os prestadores (critérios, fontes, aprovações, limites de custo)? | P6 |
| Q6 | Que ferramentas são usadas hoje e o que falta nelas? | Entregável 2 |
| Q7 | Os administradores aceitariam uma recomendação assistida por AI com aprovação? Em que condições? | P7 |
| Q8 | O que leva um condómino a reportar (ou a não reportar)? | P5 |
| Q9 | O que precisa um contractor de saber num pedido, e como gere a agenda? | P6 |

## 2. Métodos

| Método | Para quê | Participantes | Esforço |
|---|---|---|---|
| Entrevistas semiestruturadas (30 a 40 min) | Q1 a Q7, Q9 | Administradores, prestadores | Principal método |
| Inquérito curto online | Q8, validar frequência de problemas | Condóminos | Baixo |
| Revisão de experiências documentadas (artigos, fóruns, reviews de apps) | Q1, Q6 | Fontes públicas | Baixo |
| Análise de documentos públicos dos concorrentes / demos | Q6 | n/a | Baixo |
| Teste de protótipo (Sprint 1 final ou Sprint 2) | Q7, usabilidade | Administradores, condóminos | Médio |

### Amostra-alvo (mínimo realista)

| Grupo | Alvo | Nota |
|---|---|---|
| Administradores profissionais | 2 a 3 | Acesso difícil; recorrer a contactos pessoais ou da faculdade |
| Administradores condóminos / voluntários | 3 a 5 | Mais fácil (familiares, vizinhos, conhecidos) |
| Condóminos | 8 a 15 (inquérito) | Distribuir por redes pessoais |
| Contractors | 2 a 3 | Eletricistas, canalizadores, empresas de manutenção |

Estes números são **objetivos**, não resultados. Registar o número real obtido.

## 3. Recrutamento e ética

- Explicar o **propósito** do estudo antes de começar (requisito do enunciado, secção 11).
- Obter **consentimento** (verbal gravado ou escrito) para notas e, se aplicável, gravação áudio.
- **Não recolher dados pessoais desnecessários.** Anonimizar com códigos (A1, A2, C1, P1…).
- Não pedir a participantes que partilhem dados reais de moradores, fotos de casas ou documentos internos.
- Permitir desistir a qualquer momento. Guardar notas em local com acesso restrito à equipa.
- Se alguém partilhar registos reais para análise, anonimizar antes de os guardar no repositório.

### Texto de consentimento (modelo)

> Somos estudantes a desenvolver um projeto académico sobre gestão de avarias em condomínios. Gostaríamos de lhe fazer algumas perguntas sobre a sua experiência (cerca de 30 minutos). A participação é voluntária e pode parar a qualquer momento. As suas respostas serão anonimizadas e usadas apenas neste projeto. Podemos tomar notas? (Se aceitar, podemos também gravar o áudio, que será apagado após a análise.)

## 4. Guiões de entrevista

### 4.1 Administrador (profissional ou voluntário)

**Contexto**
1. Quantos edifícios/frações gere? Há quanto tempo? Esta é a sua atividade principal?
2. Existe porteiro ou zelador?

**Fluxo atual**
3. Conte-me a última avaria que teve de resolver. Como chegou até si e o que fez a seguir?
4. Que canais usa para receber avisos? E para contactar prestadores?
5. Como decide se algo é urgente? Dê-me um exemplo de um caso mal avaliado.
6. Recebe o mesmo problema reportado por várias pessoas? O que faz nesses casos?

**Prestadores e custos**
7. Como escolhe o prestador? Pede vários orçamentos? Quem aprova a despesa e a partir de que valor?
8. Como regista custos e histórico? Usa isso para decidir (por exemplo, obras ou substituições)?

**Ferramentas e AI**
9. Que software ou ferramentas usa? O que lhe falta?
10. Se um sistema sugerisse a urgência e o prestador, o que precisaria de ver para confiar? Aceitaria aprovar com um clique? Em que casos não aceitaria?

**Fecho**
11. Quanto tempo gasta, em média, por avaria? Qual é a parte mais frustrante?
12. Pagaria por uma solução? Como preferiria pagar (por edifício, por fração, por mês)?

### 4.2 Condómino

1. Quando foi a última vez que reportou um problema no prédio? O que aconteceu?
2. Como reportou (a quem, por que canal)? Teve resposta? Quanto tempo demorou?
3. Alguma vez viu um problema e não reportou? Porquê?
4. O que gostaria de saber depois de reportar?
5. Teria problema em enviar fotografias? Em que condições?
6. Aceitaria confirmar um problema já reportado por um vizinho ("isto também me afeta")? Preocupa-o ser identificado?

### 4.3 Contractor

1. Como recebe os pedidos hoje? Que informação costuma faltar?
2. Como gere a agenda? Já usou calendário digital?
3. Que informação precisa para estimar o preço e o tempo antes de ir ao local?
4. Como são feitos os pagamentos e as aprovações? Quais as maiores dificuldades?
5. Aceitaria receber pedidos e marcações por uma plataforma? O que o faria recusar?

## 5. Inquérito curto para condóminos (modelo)

1. Vive num edifício com administração de condomínio? (Sim/Não)
2. Nos últimos 12 meses reportou alguma avaria? (Sim/Não)
3. Se sim, por que canal? (chamada, WhatsApp, email, porteiro, outro)
4. Recebeu feedback sobre o estado? (Sempre / Às vezes / Nunca)
5. Quanto tempo demorou a resolução? (<1 dia / 1 a 3 dias / 4 a 7 dias / >1 semana / ainda por resolver)
6. Que dificuldade sentiu? (resposta aberta)
7. Usaria uma app ou página web para reportar? (Sim/Talvez/Não, porquê)
8. Que informação gostaria de ver? (estado, data prevista, prestador, outro)

## 6. Análise

- Transcrever ou resumir cada entrevista em **notas estruturadas** logo após a sessão.
- Codificar por tema (urgência, duplicados, custos, canais, confiança em AI…).
- Registar **citações** só com autorização e anonimizadas.
- Cada achado deve indicar **quantos participantes** o suportam (ex.: "4 de 6 administradores").
- Separar claramente **o que foi dito** do que a equipa **interpreta**.

## 7. Resultados

> **Por preencher.** Não escrever nada aqui sem dados reais.

### 7.1 Participantes (real)

| Código | Grupo | Data | Modo (presencial/online) | Duração | Notas guardadas em |
|---|---|---|---|---|---|
| | | | | | |

### 7.2 Achados

| ID | Achado | Nº de participantes que o suportam | Pressuposto confirmado, refutado ou ajustado | Evidência (códigos) |
|---|---|---|---|---|
| F1 | | | | |

### 7.3 Decisões de produto resultantes

| Achado | Decisão tomada | Onde ficou refletida (backlog, visão, ADR) |
|---|---|---|
| | | |

## 8. Limitações (rever após a recolha)

Limitações previstas, a confirmar ou ajustar:

- Amostra **pequena e por conveniência**, não representativa.
- Acesso limitado a **administradores profissionais**; provável enviesamento para voluntários.
- Risco de **enviesamento de confirmação**: entrevistadores conhecem a solução proposta. Mitigar com perguntas abertas sobre experiências passadas, antes de mostrar a ideia.
- Participantes podem ser conhecidos dos estudantes (cortesia, enviesamento social).
- Intenção de pagar e de adotar declarada nem sempre corresponde a comportamento real.
- Sem acesso a dados reais de ocorrências; a avaliação de AI usará dados sintéticos.

## 9. Calendário sugerido

| Quando | Atividade |
|---|---|
| Semana 1 | Finalizar guiões, identificar e contactar participantes |
| Semana 1 a 2 | Entrevistas a administradores e contractors |
| Semana 2 | Inquérito a condóminos |
| Semana 2 a 3 | Análise, atualização das personas, decisões de produto, teste rápido de protótipo |

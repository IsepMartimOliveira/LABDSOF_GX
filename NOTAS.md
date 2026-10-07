# Análise do enunciado

## 1. Uso de AI e alternativas

O uso de AI nesta ideia (building maintainance) está associado com o apoio à decisão e sugestão de relatórios. Porém deve se ter em conta uma alternativa e fazer as efetivas comparações de forma a verificar se o uso de ia é superior (podendo até usar a segunda como fallback) - _'Non-AI baseline or fallback'_ . Custos de uso/esforço devem ser considerados. 

**Ideias:** 
- Usar várias apis de ai até ao limite gratuito ou até orquestrar o uso de apis.
- Criar um documento com regras explicitas de execução das ia (leitura obrigatória e autónuma das mesmas antes de todas as ações)
- A baseline pose começar num simples filtro, prgredir para um algoritmo com diferentes metodos de busca, e numa versão mais avançada até usar solvers (ex: gurobi)


| API Provider | Free Core Models Offered | Core Constraints & Limitations |
|---|---|---|
| Google Gemini | • Gemini 1.5 Flash / 2.0 Flash-Lite • Gemini Nano (on-device) • Text, Audio, Video multimodal inputs | • Rate limits are capped at 15 Requests Per Minute (RPM) and 1,500 Requests Per Day (RPD). • Data privacy waiver: Prompts/responses are reviewed by humans and used for model training. |
| GroqCloud[](https://console.groq.com/docs/rate-limits) | • Llama 3.1 & Llama 4 Scout • Qwen3 32B • Whisper (Audio) | • Restricted to ~20–60 RPM depending on the specific model. • Daily token ceilings apply (e.g., 500K tokens/day on smaller models). • Strict per-organization limits. |
| OpenRouter | • Aggregates ~20+ rotating free open-source models | • Rate limits are restricted to 20 RPM and 50 RPD unless a prepaid balance is added. • Upstream data privacy terms vary by the provider hosting the model. |
| Cohere | • Command-R / Command-R+ • Best-in-class Embed & Rerank | • Trial keys are restricted to Non-Commercial Use Only (cannot be used for a paid app). • Capped at ~1,000 calls per month and 20 RPM. |
| Hugging Face[](https://huggingface.co/learn/cookbook/enterprise_hub_serverless_inference_api) | • Over 300 public open-source models (Text, Image, Speech) | • Serverless Inference API is limited to a few hundred requests per hour. • Uncached models suffer from 503 errors while loading into server memory. |
| Mistral AI | • Mistral Large • Codestral | • Grants a $10/month free tier credit rather than unlimited rate-bound tokens. • Variable data retention and privacy terms for the free tier. |

---

## 2. Uso de serviços externos

_'The product must integrate with at least one external system or a realistic simulator of an external
system.'_


No caso da nossa ideia, de forma a simular os apartamentos dos condomínios pode-se usar apis de simulação de dispositivos iot ou mesmo smart houses (que procurem incluir o máximo de dispositivos/sistemas domésticos).

O objetivo é simular um conjunto de casas como se fosse um condomínio e acompanhar os dados sobre os seus dispositivos e contadores (estudanto comportamentos e identificando anomalias)


| Plataforma / Ferramenta | Tipo de Solução | Facilidade para Criar "Condomínios" (Múltiplas Casas) | Como funciona a Simulação de Dados | Facilidade de Visualização (Dashboards) | Onde corre (Hospedagem) |
|---|---|---|---|---|---|
| ThingsBoard Community Edition[](https://thingsboard.io/) | Plataforma IoT Completa | Excelente. Permite criar perfis de entidades hierárquicas (Condomínio > Casas > Dispositivos). | Automática (via motor de regras interno ou geradores virtuais). | Excelente. Dashboards avançados nativos com gráficos de consumo. | Local (Docker/PC) ou Nuvem (Demo). |
| Node-RED[](https://nodered.org/) | Motor de Fluxos / Integração | Boa. Podes duplicar fluxos ou usar variáveis para simular várias casas em massa. | Totalmente personalizável (geras qualquer lógica de consumo/picos em JavaScript). | Média. Requer instalar o módulo node-red-dashboard. | Local (Node.js / Docker). |
| Home Assistant[](https://www.home-assistant.io/) | Plataforma de Smart Home | Média. Focada numa casa, mas podes criar "Zonas" ou "Áreas" para representar diferentes frações. | Requer integração com geradores externos (ex: Node-RED ou MQTT fictício). | Excelente. Focada na interface de uma smart house realista. | Local (Raspberry Pi, PC ou Máquina Virtual). |
| TagoIO[](https://tago.io/) / Ubidots[](https://ubidots.com/) | Plataforma IoT Cloud | Boa. Permite agrupar dispositivos por tags (ex: casa: 01, bloco: A). | Através de simuladores internos na nuvem ou scripts simples. | Boa. Dashboards fáceis de arrastar e largar (plano grátis limitado a poucos dispositivos). | Nuvem (Cloud). |
| MQTTX CLI[](https://mqttx.app/cli) | Simulador de Protocolo (CLI) | Excelente (para volume). Um único comando pode simular 100 contadores a enviar dados ao mesmo tempo. | Baseada em scripts de texto/comandos que enviam JSONs periódicos. | Não tem. Apenas envia os dados. Requer outra ferramenta para os ver. | Local (Linha de comandos). |

**Recomendação Direta do Gemini:**
'Se queres o cenário mais realista e profissional para gerir o condomínio, opta pelo ThingsBoard. A capacidade de criar uma "Relação" (dizer que o Contador X pertence à Casa Y, que por sua vez pertence ao Condomínio Z) é exatamente o que procuras.'

---

### 3. Separação de deploy

'The solution must contain at least two independently deployable backend components'

Dois agregados de domínios que pode fazer sentido separar são os dados gerados pelos dispositivos das casas, todo o domínio que envolva o condominio, e a gestão de processos de contratação, profissionais, etc.

Gestão de subscrições de todos os tipos de roles do sistema como um serviço separado também pode ser considerado.

---

### 4. User journey

Acho pertinente haver uma jornada que permita analisar o comportamento dos dispositivos live ou histórico por parte de um user com role adequado. Métricas e comportamentos devem ser estudados de forma a identificar/prever anomalias e ou anomalias e até categorizar as mesmas. Esta  funcionalidade pode também ser permitida a profissionais contratados de forma a estudar a razão da anómalia. O dono da casa também poderá ver os dados da própria casa. Resumindo estudar possibilidades da funcionalidade. 

---
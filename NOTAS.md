> **Author's exploratory notes — contextualised on 2026-10-07.** The original content below is preserved for discussion; it does not constitute approved scope or current verification of providers, prices, limits or capabilities.
>
> - IoT and the monitoring journey: **DEC-01**, an alternative to the baseline focused on fault coordination.
> - Multiple providers, solvers and AI instructions: **DEC-05**, hypotheses to compare with a simple baseline. Textual instructions do not replace controls in code.
> - Service separation: **DEC-04** and ADR-001; subscriptions are outside the MVP baseline.
> - The suggestion attributed to Gemini is an exploratory recommendation, not evidence of suitability or a team decision.
> - Table sources/values require dated confirmation before guiding implementation or budgeting.
>
> See [pending decisions](documents/planning/decisions-and-feedback.md), [harmonised vision](documents/04-product-vision.md) and [AI Assessment](documents/07-responsible-ai-assessment.md).

# Assignment analysis

## 1. AI use and alternatives

AI use in this idea (building maintenance) is associated with decision support and report suggestions. However, an alternative should be considered and actual comparisons made to check whether AI performs better (the alternative could also serve as a fallback) — _'Non-AI baseline or fallback'_. Usage costs and effort should be considered.

**Ideas:**

- Use several AI APIs up to their free limits, or even orchestrate API usage.
- Create a document with explicit AI execution rules (mandatory autonomous reading before every action).
- The baseline could start with a simple filter, progress to an algorithm with different search methods and, in a more advanced version, even use solvers (e.g. Gurobi).

| API Provider | Free Core Models Offered | Core Constraints & Limitations |
|---|---|---|
| Google Gemini | • Gemini 1.5 Flash / 2.0 Flash-Lite • Gemini Nano (on-device) • Text, Audio, Video multimodal inputs | • Rate limits are capped at 15 Requests Per Minute (RPM) and 1,500 Requests Per Day (RPD). • Data privacy waiver: Prompts/responses are reviewed by humans and used for model training. |
| GroqCloud[](https://console.groq.com/docs/rate-limits) | • Llama 3.1 & Llama 4 Scout • Qwen3 32B • Whisper (Audio) | • Restricted to ~20–60 RPM depending on the specific model. • Daily token ceilings apply (e.g., 500K tokens/day on smaller models). • Strict per-organization limits. |
| OpenRouter | • Aggregates ~20+ rotating free open-source models | • Rate limits are restricted to 20 RPM and 50 RPD unless a prepaid balance is added. • Upstream data privacy terms vary by the provider hosting the model. |
| Cohere | • Command-R / Command-R+ • Best-in-class Embed & Rerank | • Trial keys are restricted to Non-Commercial Use Only (cannot be used for a paid app). • Capped at ~1,000 calls per month and 20 RPM. |
| Hugging Face[](https://huggingface.co/learn/cookbook/enterprise_hub_serverless_inference_api) | • Over 300 public open-source models (Text, Image, Speech) | • Serverless Inference API is limited to a few hundred requests per hour. • Uncached models suffer from 503 errors while loading into server memory. |
| Mistral AI | • Mistral Large • Codestral | • Grants a $10/month free tier credit rather than unlimited rate-bound tokens. • Variable data retention and privacy terms for the free tier. |

---

## 2. Use of external services

_'The product must integrate with at least one external system or a realistic simulator of an external
system.'_

For our idea, APIs simulating IoT devices or smart homes could be used to simulate condominium apartments (aiming to include as many household devices/systems as possible).

The objective is to simulate a collection of homes as a condominium and monitor data from their devices and meters (studying behaviour and identifying anomalies).

| Platform / Tool | Solution Type | Ease of Creating “Condominiums” (Multiple Homes) | How Data Simulation Works | Ease of Visualisation (Dashboards) | Where It Runs (Hosting) |
|---|---|---|---|---|---|
| ThingsBoard Community Edition[](https://thingsboard.io/) | Complete IoT platform | Excellent. Allows hierarchical entity profiles (Condominium > Homes > Devices). | Automatic (through the internal rules engine or virtual generators). | Excellent. Advanced native dashboards with consumption charts. | Local (Docker/PC) or cloud (demo). |
| Node-RED[](https://nodered.org/) | Flow / integration engine | Good. Flows can be duplicated or variables used to simulate many homes at once. | Fully customisable (generate any consumption/spike logic in JavaScript). | Medium. Requires installing the node-red-dashboard module. | Local (Node.js / Docker). |
| Home Assistant[](https://www.home-assistant.io/) | Smart home platform | Medium. Focused on one home, but “Zones” or “Areas” can represent different units. | Requires integration with external generators (e.g. Node-RED or simulated MQTT). | Excellent. Focused on a realistic smart home interface. | Local (Raspberry Pi, PC or virtual machine). |
| TagoIO[](https://tago.io/) / Ubidots[](https://ubidots.com/) | Cloud IoT platform | Good. Allows grouping devices by tags (e.g. home: 01, block: A). | Through internal cloud simulators or simple scripts. | Good. Easy drag-and-drop dashboards (free plan limited to a few devices). | Cloud. |
| MQTTX CLI[](https://mqttx.app/cli) | Protocol simulator (CLI) | Excellent (for volume). A single command can simulate 100 meters sending data simultaneously. | Based on text scripts/commands sending periodic JSON. | None. Only sends data. Requires another tool to view it. | Local (command line). |

**Direct recommendation from Gemini:**

'If you want the most realistic and professional scenario for managing the condominium, choose ThingsBoard. The ability to create a “Relationship” (saying that Meter X belongs to Home Y, which in turn belongs to Condominium Z) is exactly what you are looking for.'

---

### 3. Deployment separation

'The solution must contain at least two independently deployable backend components'

Two domain aggregates that might make sense to separate are data generated by home devices and the entire condominium domain, and the management of contracting processes, professionals, etc.

Managing subscriptions for all types of system roles as a separate service could also be considered.

---

### 4. User journey

I think it would be useful to have a journey that allows a user with the appropriate role to analyse live or historical device behaviour. Metrics and behaviour should be studied to identify/predict anomalies and even categorise them. This functionality could also be made available to contracted professionals to investigate the cause of an anomaly. Homeowners could also view data for their own homes. In summary, explore the possibilities of this functionality.

---

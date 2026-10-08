# Technical Design

**Status:** proposed conceptual design · Sprint 1, deliverable 7 · final stack and contracts pending

## 1. Context and boundaries

Residents, administrators and contractors use a proposed responsive web client. The backend coordinates issues and interventions, calls an AI provider and integrates an external calendar or simulator. Client/stack selection is part of DEC-04; it is not implemented.

| Proposed unit | Responsibility / data it controls | Communication |
|---|---|---|
| Client | Forms, queues, states and corrections; no authority over permissions | Authenticated API |
| Issue Service | Buildings/memberships for authorisation, reports, issues, triage, summaries and confirmations | API; publishes events; receives authorised results |
| Dispatch Service | Catalogue, proposals, responses, bookings and costs | API; events; calendar adapter |
| Triage worker | Processes events, calls AI/rules, delivers versioned suggestions | Queue and internal Issue Service interface; does not write to other components' tables |
| Notification worker | Delivers idempotent notifications; final placement undecided | State events; proposed in-app channel |
| Broker | Transport and redelivery | Authenticated publishing/consumption |
| Storage | Persistence; one proposed technology to limit complexity | Schemas and credentials by responsibility |
| Calendar/simulator | Booking creation/query responses and simulatable failures | External contract with reference and idempotency key |

Issue and Dispatch are the **two proposed independently deployable backend components**. Workers may have their own processes; final grouping depends on ADR/DEC-04. Do not use a simulator as an artificial substitute for a business component.

One database instance may host separate schemas in the academic environment; this does not authorise cross-writing. Make the shared operational dependency and compatible migrations explicit. Technology, queue and service-to-service authentication are undecided.

## 2. Domain model

| Entity | Conceptual relationships and fields |
|---|---|
| Organisation | Manages several buildings; can represent a property management company |
| Building | Belongs to an organisation; areas/locations; authorisation identifier |
| User / Membership | A user may have a role in several buildings; a global role does not grant universal access |
| Report | Author, building, area, private text, timestamp and source; linked to an issue |
| Issue | Aggregates one or more reports; category/urgency, state, version, optional published summary |
| Triage suggestion | Issue, source version, result, rules/model/prompt and timestamp |
| Impact confirmation | Unique user + issue; withdrawal possible |
| Contractor | Specialisation/coverage; synthetic data in the MVP |
| Intervention | Referenced issue, contractor, proposal and version, approval and response |
| Booking | Intervention, interval, state, external reference or manual source |
| Cost record | Intervention, optional amount, currency, source and confirmation |
| Audit event | Actor, action, reference, version and timestamp; avoid unnecessary private text |
| Notification | Unique event/recipient/channel, delivery state |

Cardinalities: organisation 1:N buildings; users N:M buildings through memberships; issue 1:N reports and 0:N interventions; intervention 0:N booking versions, with at most one active. Contracts use IDs; neither service directly modifies the other's data.

## 3. States and business rules

| Issue progression | Proposed rule |
|---|---|
| Received → in triage → triaged | Reporting independent of AI; administrator confirms triage |
| Triaged → in coordination | Intervention request being prepared/sent |
| In coordination → scheduled | Projection of an actually confirmed booking |
| Scheduled → in progress → awaiting validation | Assigned contractor reports progress/completion |
| Awaiting validation → resolved | Administrator validates; returning to execution requires a reason |
| Resolved → in triage | Reopening with a reason |
| Open → manually resolved/cancelled | Administrator justifies; coordinate cancellation of any active intervention |

Interventions have their own state: proposed → approved/sent → accepted or declined/counterproposed → scheduling pending → externally/manually confirmed → in progress → completed. A counterproposal changes the version and requires new approval. Cancellations propagate with a visible pending state until reconciliation.

Issue history may reflect Dispatch events with a delay; show the update timestamp. Do not confuse eventual consistency with confirmation of an action that did not happen. DEC-10 validates these rules before implementation.

## 4. Initial API (no executable contract yet)

The [access matrix](09-security-privacy.md#2-proposed-access-matrix) defines policy; the table below shows its application to endpoints. Functional criteria remain in the [backlog](06-product-backlog.md#4-stories-and-criteria).

| Proposed operation | Authorisation / result |
|---|---|
| POST /reports | Building resident; returns ID after persistence; idempotency key |
| GET /issues and GET /issues/{id} | Membership filter and role-specific projection |
| POST /issues/{id}/triage | Building administrator; version and reason |
| POST /issues/{id}/publication | Administrator publishes a sanitised summary |
| PUT/DELETE /issues/{id}/impact | Building resident; unique contribution |
| POST /issues/{id}/associations | Administrator; audited linking/reversal |
| GET /contractors | Administrator; explicit filters |
| POST /interventions | Administrator; proposal with authorised issue |
| POST /interventions/{id}/approval | Administrator; version and idempotency |
| POST /interventions/{id}/response | Assigned contractor; accept/decline/counterpropose |
| POST /interventions/{id}/manual-confirmation | Administrator; source, interval and reason |
| POST /interventions/{id}/completion | Assigned contractor or administrator with a reason |
| POST /issues/{id}/closure or /reopening | Administrator; state and version validation |

Define OpenAPI contracts/schemas after stack selection: 400/401/403 errors or 404 without enumeration, 409 for version/conflict, 503 for material unavailability. Do not return persistence success if the database fails.

## 5. Asynchronous workflow and consistency

1. Issue persists the report/issue and event record in the same transaction (proposed outbox).
2. The publisher sends ReportSubmitted; broker failure preserves the event for retry.
3. The worker validates schema, ID and version and applies the [AI/baseline/fallback workflow](07-responsible-ai-assessment.md#2-baseline-and-fallback), with the timeout defined in NFR-03.
4. The result reaches Issue's authorised internal interface; an old result does not replace a human correction.
5. Change events feed projections/notifications; consumers deduplicate by eventId.
6. Dispatch manages approval/acceptance and issues a calendar request only when eligible.

Proposed envelope: eventId, eventType, schemaVersion, aggregateId, aggregateVersion, buildingId, occurredAt, correlationId and minimal payload. Received building identifiers are also validated; they do not suffice as authorisation.

Retries use increasing delays and a configured limit; exhausted attempts go to a failure record/queue with controlled replay. Test crashes after persistence and before publication, repeated delivery and out-of-order events. Do not promise “exactly once” delivery; build idempotent effects.

## 6. External integration and degraded mode

The calendar/simulator must support requests with stable IDs, query/reconciliation and scenarios: success, timeout, unavailability, delay, incomplete/invalid response and scheduling conflict.

Timeout may occur after the external event is created; query/reconcile before retrying. Manual confirmation remains distinct from external synchronisation and suspends duplicate automatic creation until reconciliation. A calendar slot alone does not prove contractor availability.

AI unavailable: rules + manual review. Broker/worker unavailable: persisted report and pending/manual triage. Calendar unavailable: pending/manual. Notification failure: status remains queryable. Database unavailable: explicit error without false acknowledgement.

## 7. Proposed deployment and operations

- Containers: client, Issue, Dispatch, workers, broker, database and simulator according to the profile.
- Expose only necessary endpoints; database/broker on an internal network.
- Configuration per environment; secrets injected outside Git; least-privilege service identities.
- CI builds/tests/images; demonstration environment to be chosen (DEC-04); no Kubernetes commitment.
- Migrations owned by each schema owner, health/readiness and compatible versions for independent deployment.
- Structured logs with correlation ID; metrics for errors, latency, queue, retries, fallback, pending bookings and failed notifications.
- Initial dashboard in S2; backup/restore and rollback documented/exercised before release.

## 8. Gaps and validation

Undecided: stack, broker, database, hosting, identity, publishing mechanism, final schemas and detailed rescheduling/cancellation handling. Record alternatives and consequences in [ADRs](adr/README.md). The physical data model and executable contracts do not yet exist.

See [requirements](requirements.md), [security](09-security-privacy.md) and [walking skeleton](10-walking-skeleton.md).

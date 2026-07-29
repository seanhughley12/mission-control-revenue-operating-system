# Governance & Gates

> The whole system is safe because of one idea: **read agents inspect; write agents ask.** A read agent becoming a write agent is an architectural promotion, not a casual change.

## The three gates

### Auto — execute and log
Low-stakes, reversible, read-only. Runs without asking, but always logs.
- Read-only source ingestion and signal scoring
- Internal board / action cards
- Public signal ingest (treated as untrusted until verified)

### Soft gate — approval card, timeout cancels
Medium-stakes or a first-time pattern. Shows a card; if you don't approve, it cancels.
- Low-risk internal informational replies
- First-time patterns before they are trusted
- Medium-stakes, reversible actions

### Hard gate — blocks until you approve
Customer-facing, financial, or system-changing. **Blocks. Nothing customer-facing ever auto-sends.**
- Any CRM / MSX write: stage, forecast, value, milestone
- Any customer-facing email, Teams message, recap, deck, or proposal
- Any calendar create, update, or decline
- Any internal escalation that names a person
- Anything involving confidential deal or financial content

## Progressive autonomy (rungs)

A pod climbs only when the prior rung is boringly reliable:

1. **Watch** — observe only; surface, never draft outbound.
2. **Medium assist** — draft moves and artifacts; everything outbound waits for you.
3. **High assist** — proactively prepare moves and recaps; still gated on send.
4. **High autonomy** — self-directed toward a dollar goal; **send is still gated.**

> Progressive trust, not fast trust. This applies to coordinators too, not just doers.

## Accountability rules

Every meaningful agent run produces at least one of: a structured signal, a recommendation, an artifact, an action, an approval request, an audit event, or a memory update. Never vibes.

Every recommendation carries: **evidence, confidence, owner, next action, approval status, source data, outcome tracking.**

## Event log doctrine

Logs are a product surface, not plumbing. Every action writes an event so you can always ask:
- Why did the system recommend this?
- What changed? What evidence was used?
- Who approved it? Did the action improve the deal?

## Privacy boundary

Pods are private and local by default. Sensitivity labels carry through: confidential content never leaves for an unprotected destination. Memory is scoped — each agent sees only what it needs, and memory writes are reviewed before they stick.

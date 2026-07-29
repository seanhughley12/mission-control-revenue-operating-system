# Governance & Gates (in Scout)

> The whole system is safe because of one idea: **read work runs free; write work asks.** In Scout, "asks" means **draft-only** — Scout prepares it, you press send.

## The three gates, mapped to Scout

### Auto — execute and log
Low-stakes, reversible, read-only. Runs without asking.
- Reading signals via the Scout M365 tools (email, calendar, Teams, files)
- Scoring / classifying signals
- Writing to Scout **memory** (`m_remember`) and internal notes / Teams cards

### Soft — draft first, you approve
Medium-stakes or a first-time pattern.
- Low-risk internal informational replies (draft, then you send)
- Anything the pod has not done before

### Hard — Scout drafts and stops
Customer-facing, financial, or system-changing. **Nothing customer-facing ever auto-sends.**
- Any customer-facing email, Teams message, recap, deck, or proposal → save to **Drafts** (`workiq_create_draft`, or reply with `saveAsDraft`)
- Any CRM / MSX write: stage, forecast, value, milestone → propose only
- Any calendar create, update, or decline → propose only
- Any internal escalation that names a person
- Anything with confidential deal or financial content

## Progressive autonomy (rungs)

A pod climbs only when the prior rung is boringly reliable:

1. **Watch** — observe only; surface, never draft outbound.
2. **Medium assist** — draft moves and artifacts; everything outbound waits for you.
3. **High assist** — proactively prepare the next move and recap; still gated on send.
4. **High autonomy** — self-directed toward a dollar goal; **send is still gated.**

> Progressive trust, not fast trust. This applies to coordinators too, not just doers.

## Scout-specific guardrails

- **One automation at a time.** Scout runs automations serially. While testing, keep the pod as your only new automation so schedules do not collide. If you add more pods later, stagger their times.
- **Draft, do not send.** Point every outbound step at Drafts. Review in Outlook / Teams before it goes.
- **Teams notifications, not Teams sends.** The pod's Teams card is a nudge to you. It is not a message to a customer.
- **Pause anytime.** Disable the automation to pause; delete it to stop. Your skills and memory stay.
- **Sensitivity labels carry through.** Confidential content stays in Scout; do not let the pod write it to an unprotected destination.

## Accountability rules

Every meaningful run produces at least one of: a structured signal, a recommendation, a draft artifact, an action, an approval request, an audit note, or a memory update. Never vibes.

Every recommendation carries: **evidence, confidence, owner, next action, gate.**

## The promotion test

Promote a signal only if it can finish: "This matters because it could change **[decision]** for **[this account]** by **[specific implication]**." Otherwise it is context, not signal.

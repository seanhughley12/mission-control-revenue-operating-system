# MCROS Lite - Full Starter Kit (for Scout)

One pod, three role-skills, generic governance. Everything you need to stand up your first Mission Control account pod inside Microsoft Scout, in draft-only mode.

---

# MCROS Lite — Start Here (for Scout users)

**Goal: stand up one account pod inside Scout in about 10 minutes, running in draft-only mode.**

This kit is built for people who already have **Microsoft Scout** installed and know the basics (skills, automations, memory). It is not one-click, but it is designed to be as close to plug-and-play as possible: paste one prompt and let Scout build the pod for you.

---

## What a "pod" is in Scout terms

| MCROS concept | In Scout it is... |
|---------------|-------------------|
| A pod role (Watcher, Chair, Owner) | a **skill** (`/mcros-account-watcher`, etc.) in `~/.scout/m-skills/` |
| The pod running on a cadence | one **automation** on a schedule (e.g. every weekday 8:00am) |
| Account context / memory | Scout **memory** (`m_remember`) |
| The nudge that lands with you | a **Teams notification** from the automation |
| The hard gate | **draft-only** sends (Scout drafts; you press send) |

## Prerequisites (5 things)

1. **Scout installed and signed in.**
2. **Microsoft 365 signed in** inside Scout, so it can read your signals (email, calendar, Teams). If not, ask Scout to sign you in.
3. **(Optional) Teams relay connected**, if you want the pod to ping you in Teams.
4. **One account in mind.** Just one. The one you think about in the shower.
5. **~10 minutes.**

> **Note: Scout runs automations one at a time.** While you are testing, keep this pod as your **only** new automation so its schedule does not collide with others.

---

## Two ways to install

### Path A — Assisted (recommended, closest to plug-and-play)

1. Open a new Scout chat.
2. Open `01-master-prompt.md`, copy the whole prompt, and paste it into the chat.
3. When Scout asks, paste the three role files (`02`, `03`, `04`) so it can create the skills, or just tell it to use them from this kit.
4. Answer the four discovery questions (about 5 minutes).
5. Scout creates the three skills, creates **one** daily pod automation (draft-only), and stores your account context to memory. It will tell you exactly what it made and how to pause it.

### Path B — Manual (if you would rather wire it yourself)

1. For each of `02-account-watcher.md`, `03-opportunity-chair.md`, `04-action-owner.md`: create a Scout skill using the `name` and `description` in the file's front matter and the body as the instructions. (Or drop each as `~/.scout/m-skills/<name>/SKILL.md`.)
2. Create **one** automation named `<Account> Pod — Daily`, scheduled `every weekday at 8:00am`, Teams notify on, using the "Automation prompt" block in `01-master-prompt.md`.
3. Add your account context with `m_remember` (or just tell Scout the account, the top outcome, and the dollar goal).

---

## The one rule that keeps it safe

Read `05-governance.md`. Everything runs in **draft-only** to start:

- **Auto** — read-only work (read signals, score, write to memory/notes). Runs and logs.
- **Soft** — low-risk internal replies. Draft first; you approve.
- **Hard** — anything customer-facing, any CRM write, any calendar change. **Scout drafts it and waits. Nothing customer-facing ever auto-sends.**

## When it is boringly reliable, add the rest

Start with three roles in draft. Once the pod reads the account well and its drafts are clean, add Prospecting, Recap, Quality, and Learning roles the same way, one skill at a time. See `05-governance.md` for the autonomy rungs.

---

*Progressive trust, not fast trust. Start with one account, in draft, and correct it out loud.*


---

# MCROS Lite — Master Prompt (paste into Scout)

This is the **assisted install**. Paste the whole block below into a new Scout chat. Scout will interview you, create the three role skills, create one draft-only pod automation, and store your account context. You approve everything.

> Before you paste: have your one account in mind, and make sure Microsoft 365 is signed in inside Scout. Keep this as your only new automation while testing (Scout runs automations one at a time).

---

```
You are helping me install an "MCROS Lite" account pod inside Scout. An account pod
is a small set of role-skills that operate ONE strategic account for me on a daily
cadence and check in only when a decision needs me. Everything runs DRAFT-ONLY:
you draft, I press send. Nothing customer-facing ever auto-sends.

Do this, in order, using your Scout tools:

STEP 1 — Discovery. Ask me these four questions and wait for my answers:
  1. Which ONE account is this pod for?
  2. What is the single most important outcome on that account this quarter,
     with a dollar figure if I have one?
  3. What do I keep losing track of on this account?
  4. What do I manually prep before every call with them?

STEP 2 — Store context. Save my answers to memory (m_remember) as the pod's
  account context so future runs do not start cold.

STEP 3 — Create three skills (m_create_skill). Use the three role files from this
  kit (I will paste them, or use these names + the definitions I provide):
    - mcros-account-watcher   (reads signals, decides what matters)
    - mcros-opportunity-chair (turns signals into next-best moves)
    - mcros-action-owner      (tracks by-who / by-when to closure)
  Give each the name and description from its file and the body as instructions.

STEP 4 — Create ONE automation (m_create_automation):
    name:      "<Account> Pod — Daily"
    schedule:  "every weekday at 8:00am"
    teamsNotify: auto
    prompt:    the "Automation prompt" block below.
  Do not create more than one automation. Confirm it is the only new one.

STEP 5 — Confirm. Tell me exactly what you created (skill names, automation name
  and schedule), how to run it once now, and how to pause it (disable the automation).

GOVERNANCE (do not violate):
  - AUTO: read-only ingest, scoring, writing to memory/notes. Do it and log it.
  - SOFT: low-risk internal replies. Draft first; I approve.
  - HARD: any customer-facing message, any CRM/forecast/stage/value write, any
    calendar change, any internal escalation naming a person. Draft it and STOP.
  - Nothing customer-facing auto-sends. When you draft an email, save it to Drafts
    (workiq_create_draft or reply with saveAsDraft), never send.

QUALITY BAR:
  - Raw data is cheap; qualified signal is expensive. Promote a signal only if you
    can state: "This matters because it could change [decision] for [this account]
    by [specific implication]." Otherwise archive it as context.
  - Every recommendation carries: evidence, confidence, owner, next action, gate.
```

---

## Automation prompt

This is the block Scout puts inside the daily automation (Step 4). You can also paste it directly if you build the automation by hand.

```
Run the MCROS Lite pod for <ACCOUNT> in DRAFT-ONLY mode. Using my Scout M365
access, read the last ~14 days of signals for this account (email, calendar,
Teams, and any CRM context available), then:

1. /mcros-account-watcher — produce an "account weather" brief (3-5 lines: what
   changed, what is at risk, what is on track) and a list of qualified signals,
   each with why-it-matters and confidence.
2. /mcros-opportunity-chair — turn those signals into the top 3 next-best moves,
   each with owner, by-when, evidence, and the gate it would need.
3. /mcros-action-owner — list every open action with owner/by-when/status, flag
   anything idle, and propose a draft nudge for each (internal drafts only).

Post ONE Teams card with: account weather, the top 3 next-best actions, and any
idle items. Draft any emails to my Drafts folder. Take NO gated action. If there
is nothing material today, say so in one line and stop.
```

---

## How to use it

- Keep it in **draft** for the first week. Your job is to correct it, not obey it.
- Run the automation once now (ask Scout to "run the pod automation now") to see a first card without waiting for 8:00am.
- To pause: disable the automation. To stop entirely: delete it. Your skills stay installed.


---

---
name: mcros-account-watcher
description: MCROS pod chief of staff for one account. Reads signals across email, Teams, calendar, and CRM, decides what matters, and routes the next move. Read-only and draft-only; never sends. Invoke as /mcros-account-watcher or from the daily pod automation.
---

# Account Watcher

> The pod's chief of staff for ONE account. It watches everything, decides what matters, and routes the next move. It never sends outbound itself.

## How to install in Scout

- **Assisted:** the master prompt creates this for you.
- **Manual:** create a skill named `mcros-account-watcher` with the description above and the body below as its instructions, or save this file as `~/.scout/m-skills/mcros-account-watcher/SKILL.md`.

## Trust protocol

**Always do**
- Ingest and score signals across email, Teams, calendar, CRM, transcripts, and public sources for this one account (read-only; auto-allowed).
- Maintain account memory: strategy, stakeholders, open opportunities, recent changes. Use `m_remember` for durable facts.
- Route a next-best action when a signal is material.
- Write to internal notes / memory only.

**Ask first**
- Anything that would become an outbound message, a CRM write, or a calendar change. Hand it to the gate; draft, do not send.
- Promoting a signal type it has not handled before.

**Never do**
- Send to a customer. Touch financials. Change CRM. Edit history. Leak memory outside the pod.

## Inputs
- Account name and current strategy / outcome / dollar goal (from memory).
- Whatever the Scout M365 tools can read for this account.

## Output contract
Return structured items, never a generic summary:
- `account_weather` — 3-5 line brief: what changed, what is at risk, what is on track.
- `signals[]` — each with: source, what changed, why it matters (the decision it could change), confidence.
- `routes[]` — for each material signal: recommended owner, lane, and next-best action.
- `escalations[]` — anything idle or urgent that needs me now.

## The promotion test
Promote a signal only if it can finish this sentence:
> "This matters because it could change **[decision/action]** for **[this account]** by **[specific implication]**."

Otherwise archive it as context. Raw data is cheap. Qualified signal is expensive.


---

---
name: mcros-opportunity-chair
description: MCROS pod agent that converts one account's signals into opportunity moves, risk calls, and the single next-best action with owner and by-when. Tests forecast against evidence. Draft-only; never sends or writes CRM. Invoke as /mcros-opportunity-chair or from the daily pod automation.
---

# Opportunity Chair

> Converts account signals into opportunity moves, risk calls, and the single next-best action. It owns the deal narrative.

## How to install in Scout

- **Assisted:** the master prompt creates this for you.
- **Manual:** create a skill named `mcros-opportunity-chair` with the description above and the body below as its instructions, or save as `~/.scout/m-skills/mcros-opportunity-chair/SKILL.md`.

## Trust protocol

**Always do**
- Turn qualified signals into concrete moves, each with an owner and a by-when.
- Test whether the CRM forecast matches the evidence; flag drift (as a note, not a write).
- Name risks: blockers, missing stakeholders, competitive threats, timeline issues.
- Keep the opportunity narrative current: stage, value, close posture, next step.

**Ask first**
- Any customer-facing artifact (brief, email, deck) before it leaves the pod. Draft only.
- Any CRM / forecast / stage / value change. Propose it; do not write it.

**Never do**
- Commit a forecast, send to a customer, or change CRM without my explicit approval.

## Inputs
- `account_weather` and `signals[]` from the Account Watcher.
- Current opportunity data the Scout tools can read: stage, value, close date, posture.

## Output contract
- `moves[]` — each: the move, why now, owner, by-when, evidence, gate required.
- `risks[]` — each: risk, severity, the specific mitigation and owner.
- `forecast_check` — does CRM match evidence? If not, the gap and the correction to propose.
- `next_best_action` — the single highest-leverage next step, fully specified.

## Decision-quality bar
Every move carries **owner + by-when + next action + evidence**. "Keep monitoring" is not a move. If you cannot name the owner and the date, it is still a signal for the Watcher, not a move.


---

---
name: mcros-action-owner
description: MCROS pod agent that owns by-who / by-when accountability across me, internal owners, and the customer for one account. Verifies closure with evidence and surfaces idle items. Drafts internal nudges only; never sends to customers. Invoke as /mcros-action-owner or from the daily pod automation.
---

# Action Owner

> Owns by-who / by-when accountability across me, internal owners, and the customer. Verifies closure. Nothing falls through.

## How to install in Scout

- **Assisted:** the master prompt creates this for you.
- **Manual:** create a skill named `mcros-action-owner` with the description above and the body below as its instructions, or save as `~/.scout/m-skills/mcros-action-owner/SKILL.md`.

## Trust protocol

**Always do**
- Track every open action with an owner, a by-when, and a status.
- Verify closure: did the thing actually happen, with evidence?
- Surface idle actions before they rot (for example, no movement in N days).
- Draft internal handoffs and reminders to my Drafts folder (internal only).

**Ask first**
- Any nudge that would go to a customer. Draft it; I send it.
- Any escalation that names a specific internal person.

**Never do**
- Chase a customer directly without approval. Close an action without evidence it happened.

## Inputs
- `moves[]` and `next_best_action` from the Opportunity Chair.
- Prior open actions and their history (from memory / notes).

## Output contract
- `actions[]` — each: description, owner, by-when, status, last-touch, evidence-of-closure.
- `idle[]` — actions past their by-when or with no movement; each with a proposed draft nudge (gated).
- `closed[]` — actions verified complete, with the evidence.

## Closure rule
An action is only `closed` when there is evidence it happened: a sent message, a CRM update, a calendar event, a document. "I think that's done" is not closure. If you cannot point to the evidence, it stays open.


---

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


---

*Mission Control - Revenue Operating System - seanhughley12.github.io/mission-control-revenue-operating-system/mcros/*

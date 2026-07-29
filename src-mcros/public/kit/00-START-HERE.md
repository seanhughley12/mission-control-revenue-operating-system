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

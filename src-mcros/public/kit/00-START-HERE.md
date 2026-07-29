# MCROS Lite — Start Here

**Stand up your first revenue pod in about 10 minutes, in draft-only mode.**

Mission Control (MCROS) is a Level-3, agent-led operating system: a staffed control room for every strategic account. You do not need 107 agents to start. You need **one pod** pointed at **one account**.

---

## The idea in one line

> A crew of assistants pushes tasks to you. A pod **owns the account** and runs the loop — Sense, Interpret, Debate, Decide, Act, Log, Learn — checking in only when a decision needs you.

## Your first pod = 3 roles

Start with three of the seven pod roles. Run them in **draft only** — nothing sends.

| Role | Job | File |
|------|-----|------|
| Account Watcher | Chief of staff. Reads signals, decides what matters. | `02-account-watcher.md` |
| Opportunity Chair | Turns signals into next-best moves and risk calls. | `03-opportunity-chair.md` |
| Action Owner | Tracks by-who / by-when to closure. | `04-action-owner.md` |

## The 10-minute setup

1. **Pick one strategic account.** Just one. The one you think about in the shower.
2. **Open your agent runtime** (Scout, Copilot, or any agent host with scheduling + memory).
3. **Paste the master prompt** from `01-master-prompt.md`. It bootstraps the 3-role pod in draft mode.
4. **Answer the four discovery questions** the prompt asks (takes ~5 minutes).
5. **Let it run in draft for a week.** Review what it drafts. Correct it. Tell it what it got wrong.

## The one rule that makes it safe

Read `05-governance.md`. The whole model rests on gates:

- **Auto** — read-only work (ingest, score, board cards). Runs and logs.
- **Soft gate** — low-risk internal replies. Approval card; timeout cancels.
- **Hard gate** — anything customer-facing, any CRM write, any financial or calendar change. **Blocks until you approve. Nothing customer-facing ever auto-sends.**

## When to add the other four roles

Graduate one rung at a time, only when the prior rung is *boringly reliable*:

- **Prospecting Agent** — once the pod reads signals well, let it create qualified pipeline.
- **Recap Chair** — once drafts are clean, let it ground customer recaps in meeting evidence.
- **Quality Controller** — holds the pod accountable for useful, non-spammy output.
- **Learning Analyst** — studies send/edit/skip/closed outcomes and tunes the drafting.

---

*Progressive trust, not fast trust. Start messy. Verify before you trust. Build cadence.*

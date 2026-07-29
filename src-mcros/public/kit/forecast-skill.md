---
name: forecast-hygiene
description: Draft executive-grade forecast comments (Confidence, Last Action, Next Action, Risk) for your open opportunities, grounded in your own M365 signals. Draft-only by default; with MSX-MCP it can write approved comments straight to Dynamics via Dataverse. Invoke as /forecast-hygiene.
---

# Forecast Hygiene (operations skill)

Turn your calendar, email, and Teams signal into clean, executive-grade forecast comments for every open deal. Runs **draft-only** by default: it drafts, you review, you paste. With MSX-MCP connected, it can write the approved comment straight into Dynamics through Dataverse.

This is an **operations skill** — it delivers value on day one and needs no pod, no collectors, and no stored data. It reads live signal each run.

## What it produces (the exact format)

For each opportunity:

```
Confidence: {Green | Yellow | Red}

Last Action: {1-3 sentences. Most recent customer interaction. Specific people, dates, decisions.}

Next Action: {1-2 sentences. The next concrete commitment, with a date. Lead with the verb.}

Risk: {1-2 sentences. The single most material blocker, what it threatens, and what clears it.}
```

No preamble, no sign-off, no date prefix. Just the four lines.

## Confidence rubric (BANT + momentum)

- **Green** — BANT fully qualified (Budget, Authority, Need, Timeline), forward motion in the last 14 days, no slipping dates.
- **Yellow** — BANT partial OR momentum stalled (last decision more than 14 days ago, dates moving, single-threaded, exec attention waning).
- **Red** — BANT broken (budget pulled, authority disengaged, need redefined, timeline slipped past quarter) OR an active competitive or internal threat to close.

## Tone rules

- Executive-grade and direct. Lead with verbs in Last Action and Next Action.
- Cite a specific person and a specific date in Last Action wherever the signal supports it.
- No hedging ("seems," "potentially," "we hope to"). No sales-speak ("partnering," "journey," "exciting").
- If signal is thin, write `Signal sparse - last touchpoint {date}` rather than inventing context.

## How it runs (level-aware)

Do the most your setup allows. The setup guide (`forecast-hygiene-setup.md`) explains what each level needs.

- **Level 0 — Scout + M365.** You name the accounts. It reads your calendar, email, and Teams for each and drafts the four-line comment. You paste into CRM.
- **Level 1 — plus MSX-MCP.** It pulls your actual open opportunities from Dynamics automatically, researches each, drafts, and after you approve it writes the comment straight into the Forecast Comments field through Dataverse. No web form, no browser automation.
- **Level 2 — plus a scheduled job.** The whole run fires unattended twice a week from a Windows Task; you just get the approval prompt and reply.

## The run, step by step

1. **Get the deal list.** Level 0: you name the accounts. Level 1+: it pulls your open opps (name, account, close date, value, stage, and the Dataverse record ID).
2. **Research each deal.** For each opp, summarize the last ~10 days from your Teams, transcripts, and email into Last Action, Next Action, and Risk. Cite people and dates.
3. **Draft the comment** in the exact four-line format; score Confidence with the rubric.
4. **Show you all drafts for approval** (Teams self-message or in chat). You reply "approve all," "approve 1,3," or give per-opp edits.
5. **Deliver.** Level 0: hand you the approved text to paste. Level 1+: PATCH the approved comment to the Forecast Comments field via Dataverse, then confirm which succeeded.

## How the write works (Level 1+)

- The write is a **Dataverse REST PATCH** to the opportunity's Forecast Comments field, using MSX-MCP's `dataverse_write` (which carries a preview and confirm). No CRM web form, no Playwright.
- Send the **new comment block only**. The Forecast Comments plugin appends history server-side; do not resend the whole thread.
- Needs `az login` and network reach to Dynamics (corporate network / Conditional Access). If the network blocks it, it falls back to draft-and-paste and nothing is lost.

## Hard rules

- Never fabricate signal. Thin signal means you say so.
- Never write to CRM without explicit approval ("approve all" or per-opp). Auto-write is off; CRM write is a hard gate.
- Write **only** the Forecast Comments field. Never touch Customer Need / Description or any other field.
- No decks, no sign-off line, no date prefix (the CRM thread timestamps each entry).
- Re-pull the opp list every run; do not cache it.


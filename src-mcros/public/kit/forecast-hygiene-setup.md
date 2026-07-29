# Forecast Hygiene — Setup & Levels Map

You don't need everything to get value. Find where you are on the map and do just that step. The payoff at Level 0 is already real: clean, executive-grade forecast comments you can paste today.

Each level *adds* automation on top of the one below it. Start where you are.

---

## Level 0 — Draft from your signals
**Everyone with Scout is already here.**

- **You're here if:** Scout is installed and Microsoft 365 is signed in.
- **You get:** Executive-grade forecast comments (Confidence, Last Action, Next Action, Risk) drafted from your calendar, email, and Teams, for any account you name. You copy them into CRM.
- **To set up:** Nothing. Install the `forecast-hygiene` skill and say: *"Draft forecast comments for {Account A} and {Account B}."*
- **Check you're ready:** Ask Scout to read your last week of email. If it can, you're set.

## Level 1 — Pull pipeline and write to CRM
**Add MSX-MCP.**

- **You're here if:** The MSX-MCP server is connected in Scout and you can `az login` to the Microsoft tenant.
- **You get:** It pulls your actual open opportunities from Dynamics, drafts a comment per deal, and after you approve it writes the comment straight into the Forecast Comments field through Dataverse. No naming accounts by hand, no web form, no browser automation.
- **To set up:**
  1. Add the MSX-MCP server in Scout (server name `MSX-MCP`, the Dataverse MCP URL).
  2. Run `az login` once so it has a token for `microsoftsales.crm.dynamics.com`.
  3. Confirm: ask Scout to "list my open opportunities from MSX." If they come back, you're set.
- **Still approval-gated.** It drafts and shows you; nothing writes until you say "approve."
- **Network note:** the write needs corporate-network / VPN reach to Dynamics (Conditional Access). Off-network, it falls back to draft-and-paste and nothing is lost.

## Level 2 — Run it unattended
**Add a scheduled job.**

- **You're here if:** You want it to fire on a cadence without you starting it.
- **You get:** The whole run (pull, research, draft) fires twice a week from a Windows Task. You just get the approval prompt in Teams and reply.
- **To set up:**
  1. Get Level 1 working by hand first.
  2. Create a scheduled task (or a Scout automation) that runs the skill on your cadence, for example Monday and Thursday mornings.
  3. Keep the approval step: it should still ping you and wait before any write.

---

## Which level should I start at?

| If you have... | Start at | Time to first value |
|----------------|----------|---------------------|
| Scout + M365 only | **Level 0** | ~5 minutes |
| ...and MSX-MCP + az login | **Level 1** | ~15 minutes |
| ...and want it hands-off | **Level 2** | ~20 minutes (one-time) |

Most people should start at **Level 0**, get comfortable with the drafts for a week, then climb. You get the same quality of comment at every level; the higher levels just remove more manual steps.

## The one rule at every level

Draft-only until you approve. Nothing writes to CRM, and nothing goes to a customer, without your explicit go-ahead. The write touches only the Forecast Comments field, nothing else.

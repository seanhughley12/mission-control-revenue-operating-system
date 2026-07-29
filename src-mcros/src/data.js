// All figures are live counts pulled from the MCROS control-plane database on 2026-07-28.
export const SNAPSHOT_DATE = "July 28, 2026";

export const receipts = [
  { value: 8942, label: "agent runs logged", tone: "signal" },
  { value: 6096, label: "orchestrator cycles", tone: "signal" },
  { value: 3721, label: "qualified signals", tone: "action" },
  { value: 1407, label: "accountable artifacts", tone: "action" },
  { value: 1052, label: "outcomes tracked", tone: "l3" },
  { value: 539, label: "account actions owned", tone: "l3" },
  { value: 1272, label: "learning events", tone: "violet" },
  { value: 583, label: "stakeholders mapped", tone: "violet" },
];

export const patterns = [
  {
    n: "1",
    title: "Humans with assistants",
    tag: "collaboration",
    body: "Every employee has an AI assistant that helps them work better and faster.",
    note: "AI as a search box.",
    tone: "violet",
    here: false,
  },
  {
    n: "2",
    title: "Human-led agents",
    tag: "delegation",
    body: "Agents join teams as digital colleagues, working at the direction of people.",
    note: "Most teams stop here.",
    tone: "action",
    here: false,
  },
  {
    n: "3",
    title: "Agent-led work",
    tag: "autonomous",
    body: "Agents run business processes and workflows, checking in only when needed.",
    note: "Mission Control lives here.",
    tone: "signal",
    here: true,
  },
];

export const loop = [
  { step: "Sense", phase: "HEAR", tone: "signal", body: "Collectors harvest Teams, email, calendar, CRM, transcripts, and public signals." },
  { step: "Interpret", phase: "HEAR", tone: "signal", body: "The Signal Steward scores raw observations and promotes only what matters." },
  { step: "Debate", phase: "THINK", tone: "action", body: "Councils weigh high-stakes calls: forecast, renewal, displacement, pricing." },
  { step: "Decide", phase: "THINK", tone: "action", body: "Account watchers pick the next best action and the owner." },
  { step: "Act", phase: "DO", tone: "l3", body: "Specialist agents draft the artifact, then the gate decides auto vs approve." },
  { step: "Log", phase: "DO", tone: "l3", body: "Every run writes an event: what ran, why, what evidence, who approved." },
  { step: "Learn", phase: "LEARN", tone: "violet", body: "The learning layer studies outcomes and tunes the next decision." },
];

export const architecture = [
  { name: "Source Layer", tone: "hair", body: "CRM/MSX, M365, transcripts, telemetry, public signals, seller context.", metric: "7,195 docs" },
  { name: "Global Event Router", tone: "signal", body: "Fast dispatch: normalize, resolve account, classify lane and risk, apply gate, route.", metric: "14 routes" },
  { name: "Signal Steward", tone: "signal", body: "Deep intelligence: score, promote, reconcile against strategy. A quality gate, not a sync.", metric: "quality gate" },
  { name: "Account Watchers", tone: "action", body: "Per-account chiefs of staff: ignore, log, open a mission, run an agent, or request approval.", metric: "9 pods" },
  { name: "Specialist Agents", tone: "l3", body: "Named workers with scoped tools and output contracts: prep, forecast, recap, artifact, execution.", metric: "107 agents" },
  { name: "Actions + Artifacts", tone: "l3", body: "Accountable outputs: evidence, owner, approval, outcome. Nothing is a vibe.", metric: "1,407 artifacts" },
  { name: "Learning Council", tone: "violet", body: "Studies whether it worked, then tunes patterns, scoring, and agent behavior.", metric: "1,272 events" },
];

export const pods = [
  { name: "MSC Cargo", posture: "hyper focus", rung: 2, mission: "Land E7. Build the story around Cowork, MACC decrement, and an Agent 365 landing." },
  { name: "Harley-Davidson", posture: "platform consolidation", rung: 1, mission: "Land the $4.45M EA renewal and drive the $2.52M E7 step-up." },
  { name: "C.H. Robinson", posture: "empower the builders", rung: 1, mission: "Empower the builders and land E7 with an all-in agentic team strategy." },
  { name: "Autoliv", posture: "frontier E7 land", rung: 1, mission: "Land the FY27 E7 step-up (10,200 seats, 50% IWs) as the frontier-manufacturing proof." },
  { name: "Total Quality Logistics", posture: "protect + execute", rung: 1, mission: "Protect execution and watch Cowork/MACC consumption." },
  { name: "Polaris", posture: "protect deployment", rung: 1, mission: "Protect the deployment and help the teams execute solidly." },
  { name: "Smiths", posture: "MACC to E7 step-up", rung: 1, mission: "Convert $6.9M Azure MACC and $1.2M DEXSuite momentum into the FY27 E7 step-up." },
  { name: "Sirva", posture: "autonomous pipeline", rung: 3, mission: "The autonomous proof pod. Create $1M+ in qualified pipeline in Sean's comp bucket." },
  { name: "Echo Global", posture: "protect + grow", rung: 0, mission: "Protect and grow the $191K EA TUP and expand into Snowflake / Fabric." },
];

export const podRoles = [
  { n: 1, name: "Account Watcher", tone: "action", body: "Chief of staff. Watches router events, signal health, and stakeholders; decides what happens next." },
  { n: 2, name: "Opportunity Chair", tone: "action", body: "Converts signals into opportunity moves, risk calls, and next-best actions." },
  { n: 3, name: "Prospecting Agent", tone: "signal", body: "Autonomously creates qualified pipeline toward the pod's revenue goal." },
  { n: 4, name: "Action Owner", tone: "l3", body: "Owns by-who / by-when accountability and closure verification across every action." },
  { n: 5, name: "Recap Chair", tone: "l3", body: "Grounds customer recaps in meeting evidence. No AI tells, exact evidence required." },
  { n: 6, name: "Quality Controller", tone: "violet", body: "Holds the pod accountable for qualified pipeline and useful, non-spammy actions." },
  { n: 7, name: "Learning Analyst", tone: "violet", body: "Studies send/edit/skip/closed outcomes and tunes the pod's drafting." },
];

export const funnel = [
  { value: 7658, label: "Raw observations harvested", tone: "hair", w: 100 },
  { value: 7657, label: "Scored as candidate signals", tone: "signal", w: 82 },
  { value: 3721, label: "Promoted to qualified signals", tone: "signal", w: 60 },
  { value: 539, label: "Turned into account actions", tone: "action", w: 38 },
  { value: 202, label: "Became tracked commitments", tone: "l3", w: 20 },
];

export const rungs = [
  { n: 1, name: "Watch", sub: "Observe only", body: "Monitors signals and account health; surfaces what matters, never drafts outbound.", who: "Where every new pod starts", tone: "hair" },
  { n: 2, name: "Medium assist", sub: "Draft under hard gate", body: "Drafts moves and artifacts once it reads the account well; everything outbound waits for you.", who: "Earned after Watch is boringly reliable", tone: "action" },
  { n: 3, name: "High assist", sub: "Proactive under hard gate", body: "Proactively prepares the next move and the recap before you ask; still gated on send.", who: "Earned after drafts are consistently clean", tone: "l3" },
  { n: 4, name: "High autonomy", sub: "Self-directed under hard gate", body: "Runs itself toward a dollar goal, creating qualified pipeline on its own; send is still gated.", who: "Earned only after everything below is trusted", tone: "signal", hero: true },
];

export const impactHeadline = { value: "$3M+", label: "influenced closed-won revenue in Q4 alone" };

export const impactStories = [
  {
    tag: "Total Quality Logistics",
    tone: "signal",
    metric: "$2.5M",
    metricLabel: "closed",
    body: "A large share of the work that moved this deal ran through the pods: the prep, the follow-through, and the follow-ups that kept it alive between conversations.",
  },
  {
    tag: "Sirva · autonomous pod",
    tone: "l3",
    metric: "Up, not down",
    metricLabel: "the signal that matters",
    body: "Autonomous outreach earned a reply and moved the conversation UP the chain, from a VP to the CISO, instead of getting pushed down. The pod manager monitors and reports on the pipeline goal on its own.",
  },
  {
    tag: "The pattern",
    tone: "action",
    metric: "Influence",
    metricLabel: "not activity",
    body: "The point was never hours saved. It is revenue moved: deals influenced, conversations escalated, and follow-through that no longer depends on me remembering.",
  },
];

export const gates = [
  {
    name: "Hard gate",
    tone: "action",
    sub: "Blocks until I approve",
    items: [
      "CRM / MSX writes: stage, forecast, value",
      "Customer-facing email, Teams, recap, deck, proposal",
      "Calendar creates, updates, declines",
      "Internal escalations that name a person",
    ],
  },
  {
    name: "Soft gate",
    tone: "violet",
    sub: "Approval card; timeout cancels",
    items: [
      "Low-risk internal informational replies",
      "First-time patterns before they are trusted",
      "Medium-stakes, reversible actions",
    ],
  },
  {
    name: "Auto",
    tone: "signal",
    sub: "Execute and log",
    items: [
      "Read-only source ingestion and signal scoring",
      "Mission Control board and action cards",
      "Public signal ingest (untrusted until verified)",
    ],
  },
];

export const cadence = [
  { name: "Collectors v3", when: "Teams · Email · Calendar", body: "Thin readers drop raw source signal all day.", tone: "signal" },
  { name: "Source Drop Ingestor", when: "continuous", body: "Converts drops into raw observations.", tone: "signal" },
  { name: "Orchestrator", when: "every 5 min", body: "Runs watchers, chairs, and specialists across every pod.", tone: "action" },
  { name: "Execution Bridge", when: ":20 / :50 hourly", body: "Executes only approved M365 actions, writes telemetry back.", tone: "l3" },
  { name: "Control Tower", when: "8am · 10:30 · 3pm", body: "Validates freshness and locks; pings me on RED.", tone: "violet" },
];

export const e7Specialists = [
  { name: "Economics / CFO", tone: "signal", body: "Owns the cost story and the economic buyer: the fixed-vs-variable and consumption math." },
  { name: "Forcing-Function", tone: "action", body: "Owns the dated compelling event. Every real E7 deal needs one; this agent finds it." },
  { name: "Mobilizer", tone: "l3", body: "Owns the both-and motion: altitude x mobilizer. Identifies and arms the internal champion." },
  { name: "Pilot-to-Transformation", tone: "violet", body: "Owns where the account sits on the pilot to transformation curve and the next step." },
];

export const e7Missions = [
  { name: "Harley-Davidson", body: "$4.45M EA renewal + $2.52M E7 step-up" },
  { name: "Autoliv", body: "FY27 E7 step-up: 10,200 seats, 50% IWs" },
  { name: "Smiths", body: "$6.9M MACC to $360K FY27 E7" },
  { name: "Sirva", body: "$1M+ qualified E7 pipeline, autonomously" },
];

export const learnLoop = [
  { step: "Act", body: "Pod drafts and I approve", tone: "l3" },
  { step: "Observe", body: "Outcome recorded: sent, edited, skipped, closed", tone: "signal" },
  { step: "Link", body: "Tie action to CRM movement and response", tone: "action" },
  { step: "Learn", body: "1,272 learning events update the patterns", tone: "violet" },
  { step: "Tune", body: "Scoring and drafting adjust for next time", tone: "signal" },
];

export const asks = [
  { who: "For sellers", tone: "action", body: "Pick one account. Stand up a 3-role pod in draft. Tell me what it got wrong." },
  { who: "For managers", tone: "l3", body: "Give one rep air cover for 2 hours a week to build a pod. Debrief at the 1:1." },
  { who: "For leaders", tone: "signal", body: "Let your top 5 run pods. No pilot, no committee. Permission, time, and a hard gate." },
];

// Downloadable starter-kit files (served from /kit/)
export const kitFiles = [
  { file: "00-START-HERE.md", title: "Start Here", desc: "The 10-minute setup: stand up your first pod in draft mode.", tone: "signal" },
  { file: "01-master-prompt.md", title: "Master Prompt", desc: "Paste into your agent runtime to bootstrap a 3-role pod.", tone: "action" },
  { file: "02-account-watcher.md", title: "Account Watcher", desc: "Role definition: the pod's chief of staff.", tone: "action" },
  { file: "03-opportunity-chair.md", title: "Opportunity Chair", desc: "Role definition: turns signals into next-best moves.", tone: "l3" },
  { file: "04-action-owner.md", title: "Action Owner", desc: "Role definition: by-who / by-when accountability.", tone: "l3" },
  { file: "05-governance.md", title: "Governance & Gates", desc: "The approval doctrine: hard, soft, and auto gates.", tone: "violet" },
];


import React, { useEffect, useRef, useState } from "react";
import {
  SNAPSHOT_DATE, receipts, patterns, loop, architecture, pods, podRoles,
  funnel, rungs, gates, cadence, e7Specialists, e7Missions, learnLoop, asks, kitFiles,
  impactHeadline, impactStories,
} from "./data.js";

const BASE = import.meta.env.BASE_URL;

/* ---------- hooks ---------- */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.15 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CountUp({ end, dur = 1600 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const done = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !done.current) {
          done.current = true;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [end, dur]);
  return <span ref={ref}>{val.toLocaleString()}</span>;
}

/* ---------- hero canvas: live signal flow ---------- */
function HeroCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current;
    const ctx = cv.getContext("2d");
    let raf, W, H, dpr;
    const COLS = ["#3dd7c4", "#f5a623", "#e85c8a", "#8b7be8"];
    let nodes = [], packets = [];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      build();
    }
    function build() {
      nodes = [];
      const cols = 5, rows = 4;
      for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
          const x = (W * 0.42) + (i / (cols - 1)) * (W * 0.55);
          const y = (H * 0.12) + (j / (rows - 1)) * (H * 0.72);
          nodes.push({
            x: x + (Math.random() - 0.5) * 60,
            y: y + (Math.random() - 0.5) * 50,
            r: 1.6 + Math.random() * 2.2,
            c: COLS[Math.floor(Math.random() * COLS.length)],
            ph: Math.random() * Math.PI * 2,
            col: i,
          });
        }
      }
    }
    function edges() {
      const es = [];
      nodes.forEach((n, i) => {
        nodes.forEach((m, k) => {
          if (k <= i) return;
          if (m.col === n.col + 1 && Math.abs(m.y - n.y) < H * 0.28) es.push([n, m]);
        });
      });
      return es;
    }
    let ES = [];
    function spawn() {
      if (reduce) return;
      if (ES.length && Math.random() < 0.5) {
        const e = ES[Math.floor(Math.random() * ES.length)];
        packets.push({ a: e[0], b: e[1], t: 0, sp: 0.008 + Math.random() * 0.012, c: e[0].c });
      }
    }
    let t = 0;
    function frame() {
      t += 0.016;
      ctx.clearRect(0, 0, W, H);
      // edges
      ctx.lineWidth = 1;
      ES.forEach(([a, b]) => {
        ctx.strokeStyle = "rgba(58,63,122,0.28)";
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      });
      // packets
      packets = packets.filter((p) => p.t <= 1);
      packets.forEach((p) => {
        p.t += p.sp;
        const x = p.a.x + (p.b.x - p.a.x) * p.t;
        const y = p.a.y + (p.b.y - p.a.y) * p.t;
        const g = ctx.createRadialGradient(x, y, 0, x, y, 8);
        g.addColorStop(0, p.c); g.addColorStop(1, "transparent");
        ctx.fillStyle = g;
        ctx.beginPath(); ctx.arc(x, y, 8, 0, Math.PI * 2); ctx.fill();
        ctx.fillStyle = p.c;
        ctx.beginPath(); ctx.arc(x, y, 2, 0, Math.PI * 2); ctx.fill();
      });
      // nodes
      nodes.forEach((n) => {
        const pulse = reduce ? 1 : 0.6 + 0.4 * Math.sin(t * 1.6 + n.ph);
        ctx.fillStyle = n.c;
        ctx.globalAlpha = 0.35 + 0.5 * pulse;
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r + pulse, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 0.12;
        ctx.beginPath(); ctx.arc(n.x, n.y, (n.r + pulse) * 3, 0, Math.PI * 2); ctx.fill();
        ctx.globalAlpha = 1;
      });
      if (Math.random() < 0.4) spawn();
      raf = requestAnimationFrame(frame);
    }
    resize();
    ES = edges();
    if (reduce) { frame(); cancelAnimationFrame(raf); frame(); }
    else raf = requestAnimationFrame(frame);
    const onR = () => { resize(); ES = edges(); };
    window.addEventListener("resize", onR);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", onR); };
  }, []);
  return <canvas ref={ref} />;
}

/* ---------- orbital loop ---------- */
function OrbitLoop() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % loop.length), 1500);
    return () => clearInterval(id);
  }, []);
  const R = 42; // percent radius
  return (
    <div className="loop-wrap">
      <div className="orbit">
        <div className="ring" />
        <div className="core">
          <div className="cn">7</div>
          <div className="cl">step loop</div>
        </div>
        {loop.map((s, i) => {
          const ang = (-90 + (i / loop.length) * 360) * (Math.PI / 180);
          const x = 50 + R * Math.cos(ang);
          const y = 50 + R * Math.sin(ang);
          return (
            <div key={s.step} className={`node c-${s.tone} ${active === i ? "on" : ""}`}
              style={{ left: `${x}%`, top: `${y}%` }}>
              <div className="lbl" style={{ transform: `translate(-50%, ${y > 50 ? "16px" : "-20px"})` }}>{s.step}</div>
            </div>
          );
        })}
      </div>
      <div className="loop-steps">
        {loop.map((s, i) => (
          <div key={s.step} className={`loop-step c-${s.tone} ${active === i ? "on" : ""}`}
            onMouseEnter={() => setActive(i)}>
            <div className="idx">{i + 1}</div>
            <div>
              <div className="phase">{s.phase}</div>
              <h4>{s.step}</h4>
              <p>{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- download helpers ---------- */
function useToast() {
  const [msg, setMsg] = useState(null);
  const show = (m) => { setMsg(m); setTimeout(() => setMsg(null), 2600); };
  const node = (
    <div className={`toast ${msg ? "show" : ""}`}>
      <span className="t-dot" />{msg}
    </div>
  );
  return [node, show];
}

function App() {
  useReveal();
  const [scrolled, setScrolled] = useState(false);
  const [activeDot, setActiveDot] = useState(0);
  const [toast, showToast] = useToast();

  const sections = ["hero", "idea", "wedge", "loop", "arch", "org", "pod", "gate", "ladder", "guardrails", "cadence", "impact", "receipts", "e7", "learn", "kit", "punch"];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = 0;
      sections.forEach((id, i) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.4) cur = i;
      });
      setActiveDot(cur);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  const download = (file, title) => {
    const a = document.createElement("a");
    a.href = `${BASE}kit/${file}`;
    a.download = file;
    document.body.appendChild(a); a.click(); a.remove();
    showToast(`Downloading ${title}`);
  };

  return (
    <>
      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <div className="brand"><span className="dot" /> Mission Control · MCROS</div>
        <a className="cta" onClick={() => go("kit")}>GET THE STARTER KIT</a>
      </nav>

      {/* side dots */}
      <div className="dots">
        {sections.map((id, i) => (
          <button key={id} className={activeDot === i ? "active" : ""} onClick={() => go(id)} title={id} />
        ))}
      </div>

      {/* HERO */}
      <header className="hero" id="hero">
        <HeroCanvas />
        <div className="veil" />
        <div className="wrap">
          <div className="tagline">
            MCROS PLAYBOOK
            <span className="live"><span className="blip" /> live control plane</span>
          </div>
          <h1>I don't prompt a chatbot.<br /><span className="grad">I run a revenue operating system.</span></h1>
          <div className="sub">107 agents. 9 account pods. One control plane. Progressive autonomy.</div>
          <div className="wedge-line">
            <span><b>Level 3: agent-led work.</b> The agents run the business process and check in only when a decision needs me.</span>
          </div>
        </div>
        <div className="scroll-hint"><span className="line" />SCROLL</div>
      </header>

      {/* IDEA */}
      <section className="section-dark" id="idea">
        <div className="wrap">
          <div className="reveal kicker">The idea</div>
          <h2 className="big reveal">AI isn't a tool I use. It's a system I operate.</h2>
          <div className="compare">
            <div className="col old reveal d1">
              <div className="tag">The old way</div>
              <h3>AI as a tool. It answers when asked.</h3>
              <ul>
                {[["I open a chat and type", "Nothing happens until I start it"],
                  ["It waits for me", "The work sits until I remember to do it"],
                  ["One question, one answer", "No memory of the account, no follow-through"],
                  ["I'm the bottleneck", "Every output depends on me being at the keyboard"]].map((r) => (
                  <li key={r[0]}><span className="marker">▪</span><span><span className="b">{r[0]}</span> <span className="d">· {r[1]}</span></span></li>
                ))}
              </ul>
            </div>
            <div className="col new reveal d2">
              <div className="tag">The new way</div>
              <h3>A revenue operating system. It runs the account.</h3>
              <ul>
                {[["A staffed control room per account", "Each strategic account gets a persistent agent team"],
                  ["The system operates; I decide", "It senses, interprets, debates, acts, then gates to me"],
                  ["Pods own outcomes", "A pod owns the deal: signal, move, artifact, result"],
                  ["Runs while I sleep", "Every 5 minutes, whether or not I'm at the keyboard"]].map((r) => (
                  <li key={r[0]}><span className="marker">◆</span><span><span className="b">{r[0]}</span> <span className="d">· {r[1]}</span></span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* WEDGE */}
      <section className="section-panel" id="wedge">
        <div className="wrap">
          <div className="reveal kicker">The wedge</div>
          <h2 className="big reveal">Three patterns of work. Most people stop at two.</h2>
          <p className="lead reveal">Microsoft's own framing for how agents show up. Using AI as an assistant is Pattern 2. A control plane running pods autonomously, under gates, is Pattern 3.</p>
          <div className="patterns">
            {patterns.map((p, i) => (
              <div key={p.n} className={`pattern c-${p.tone} ${p.here ? "here" : ""} reveal d${i + 1}`}>
                <div className="num">{p.n}</div>
                <h3>{p.title}</h3>
                <div className="tg">({p.tag})</div>
                <p>{p.body}</p>
                <div className="note">{p.here ? "◄ " : ""}{p.note}</div>
              </div>
            ))}
          </div>
          <p className="wedge-say reveal"><b>This is the story nobody else can tell yet.</b> Everyone is demoing assistants. Mission Control runs the account.</p>
        </div>
      </section>

      {/* LOOP */}
      <section className="section-dark" id="loop">
        <div className="wrap">
          <div className="reveal kicker">The operating loop</div>
          <h2 className="big reveal">Sense. Interpret. Debate. Decide. Act. Log. Learn.</h2>
          <p className="lead reveal">A dashboard shows state. Mission Control manages movement. The same seven-step loop runs on every signal, every account, every five minutes.</p>
          <div className="reveal d1"><OrbitLoop /></div>
        </div>
      </section>

      {/* ARCHITECTURE */}
      <section className="section-panel" id="arch">
        <div className="wrap">
          <div className="reveal kicker k-signal">The architecture</div>
          <h2 className="big reveal">The Router reacts. The Steward understands. The Council improves the system.</h2>
          <div className="stack">
            {architecture.map((l, i) => (
              <div key={l.name} className={`layer c-${l.tone} reveal`} style={{ transitionDelay: `${i * 0.05}s` }}>
                <div className="bar" />
                <div className="nm">{l.name}</div>
                <div className="bd">{l.body}</div>
                <div className="mt">{l.metric}</div>
              </div>
            ))}
          </div>
          <p className="arch-note reveal">Events can become signals, but not every event is a signal. Read agents inspect and summarize. A read agent becoming a write agent is an architectural promotion, not a code change.</p>
        </div>
      </section>

      {/* ORG */}
      <section className="section-dark" id="org">
        <div className="wrap">
          <div className="reveal kicker">The org</div>
          <h2 className="big reveal">107 agents. 25 roles. One org chart, not a to-do list.</h2>
          <div className="gcp reveal d1">
            <div className="lb">GLOBAL CONTROL PLANE</div>
            <div className="chips">
              {["Account Pod Router", "Signal Steward", "Control Tower", "Source Drop Ingestor", "Stakeholder Mapper", "3× Collectors", "3× Responders", "Execution Bridge", "Nerve Card Exporter"].map((c) => (
                <span key={c} className="chip sig">{c}</span>
              ))}
            </div>
          </div>
          <div className="pods-lb reveal">9 active account pods · each a self-contained team of 7 role-agents · hover to open</div>
          <div className="pod-grid">
            {pods.map((p, i) => (
              <div key={p.name} className="pod reveal" style={{ transitionDelay: `${(i % 3) * 0.06}s` }}>
                <div className={`badge ${p.rung === 3 ? "r3" : ""}`}>{p.rung === 3 ? "high autonomy" : p.rung === 0 ? "watch" : "assist"}</div>
                <div className="pn">{p.name}</div>
                <div className="pp">{p.posture}</div>
                <div className="pm">{p.mission}</div>
                <div className="roles7">7</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIDE ONE POD */}
      <section className="section-panel" id="pod">
        <div className="wrap">
          <div className="reveal kicker k-signal">Inside one pod</div>
          <h2 className="big reveal">Every pod is a 7-role team that owns the account.</h2>
          <p className="lead reveal">Not one bot with many hats. Seven scoped agents with distinct jobs, output contracts, and an audit trail, plus the human who decides.</p>
          <div className="roles">
            {podRoles.map((r, i) => (
              <div key={r.name} className={`role c-${r.tone} reveal`} style={{ transitionDelay: `${(i % 4) * 0.05}s` }}>
                <div className="top"><div className="rn">{r.n}</div><h4>{r.name}</h4></div>
                <p>{r.body}</p>
              </div>
            ))}
            <div className="role human reveal" style={{ transitionDelay: "0.15s" }}>
              <div className="top"><div className="rn">✦</div><h4>+ Sean</h4></div>
              <p>The decider. Hard gates on anything customer-facing, CRM, or financial land in my approval queue.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SIGNAL GATE */}
      <section className="section-dark" id="gate">
        <div className="wrap">
          <div className="reveal kicker">The quality gate</div>
          <h2 className="big reveal">Raw data is cheap. Qualified signal is expensive.</h2>
          <div className="gate-wrap">
            <div className="callout reveal d1">
              <div className="num">~49%</div>
              <div className="big">of everything the system sees is deliberately discarded before any agent acts on it.</div>
              <div className="fine">For every promoted signal, the Steward must state: this matters because it could change [decision] for [account] by [implication].</div>
            </div>
            <div className="funnel reveal d2">
              {funnel.map((f) => (
                <div key={f.label} className="frow-wrap">
                  <div className={`frow c-${f.tone}`} style={{ width: `${f.w}%` }}>
                    <div className="fv"><CountUp end={f.value} /></div>
                  </div>
                  <div className="fl">{f.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LADDER */}
      <section className="section-panel" id="ladder">
        <div className="wrap">
          <div className="reveal kicker">Progressive autonomy</div>
          <h2 className="big reveal">Each pod earns its autonomy. None of them can send without a gate.</h2>
          <p className="lead reveal">Progressive trust, not fast trust. A pod moves up a rung only when the prior rung is boringly reliable, and every rung keeps a hard gate on customer, CRM, and financial actions.</p>
          <div className="ladder">
            {rungs.map((r) => (
              <div key={r.n} className={`rung c-${r.tone} ${r.hero ? "toprung" : ""} reveal`}>
                <div className="rl">{r.n}</div>
                <div className="rmid">
                  <div className="rname">{r.name} <span className="rsub">· {r.sub}</span></div>
                  <div className="rbody">{r.body}</div>
                </div>
                <div className="rwho">{r.who}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GUARDRAILS */}
      <section className="section-dark" id="guardrails">
        <div className="wrap">
          <div className="reveal kicker k-signal">The guardrails</div>
          <h2 className="big reveal">Seven policy gates. Read agents inspect. Write agents ask.</h2>
          <div className="gates">
            {gates.map((g, i) => (
              <div key={g.name} className={`gatecol c-${g.tone} reveal d${i + 1}`}>
                <h3>{g.name}</h3>
                <div className="gs">{g.sub}</div>
                <ul>{g.items.map((it) => (<li key={it}><span className="dot" />{it}</li>))}</ul>
              </div>
            ))}
          </div>
          <div className="gate-doctrine reveal">
            <b>The doctrine:</b> a read agent becoming a write agent is an architectural promotion, not a casual code change. Nothing customer-facing ever auto-sends. Every run is logged and replayable, so I can always show my work.
          </div>
        </div>
      </section>

      {/* CADENCE */}
      <section className="section-panel" id="cadence">
        <div className="wrap">
          <div className="reveal kicker">The cadence</div>
          <h2 className="big reveal">It runs every 5 minutes, whether or not I'm at the keyboard.</h2>
          <div className="cad-wrap">
            <div className="pulse5 reveal d1">
              <span className="ripple" /><span className="ripple b" />
              <div className="five">5</div>
              <div className="fl">minutes</div>
              <div className="fd">The orchestrator wakes on a Windows schedule, checks the queue, and advances every pod.</div>
            </div>
            <div>
              <div className="cadlist">
                {cadence.map((c) => (
                  <div key={c.name} className={`cadrow c-${c.tone} reveal`}>
                    <div className="cbar" />
                    <div className="cn">{c.name}</div>
                    <div className="cw">{c.when}</div>
                    <div className="cb">{c.body}</div>
                  </div>
                ))}
              </div>
              <div className="cad-foot reveal">6,096 orchestrator runs · 8,942 agent runs and counting. An operating cadence, not an occasional prompt.</div>
            </div>
          </div>
        </div>
      </section>

      {/* IMPACT */}
      <section className="section-dark" id="impact">
        <div className="wrap">
          <div className="reveal kicker k-signal">The business impact</div>
          <h2 className="big reveal">Not hours saved. Influenced revenue.</h2>
          <p className="lead reveal">The point was never time saved. It is revenue moved. In Q4 alone, work run through Mission Control influenced more than $3M in closed-won revenue.</p>
          <div className="impact-hero reveal d1">
            <div className="ih-num">{impactHeadline.value}</div>
            <div className="ih-label">{impactHeadline.label}</div>
          </div>
          <div className="impact-grid">
            {impactStories.map((s, i) => (
              <div key={s.tag} className={`impact-card c-${s.tone} reveal d${i + 1}`}>
                <div className="ic-tag">{s.tag}</div>
                <div className="ic-metric">{s.metric}</div>
                <div className="ic-ml">{s.metricLabel}</div>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECEIPTS */}
      <section className="section-panel" id="receipts">
        <div className="wrap">
          <div className="reveal kicker">The receipts</div>
          <h2 className="big reveal">And a system that actually ran to get there.</h2>
          <p className="lead reveal">Every number is a live count from the Mission Control database, snapshot {SNAPSHOT_DATE}. Not a slideware estimate.</p>
          <div className="stats">
            {receipts.map((r, i) => (
              <div key={r.label} className={`stat c-${r.tone} reveal`} style={{ transitionDelay: `${(i % 4) * 0.06}s` }}>
                <div className="sv"><CountUp end={r.value} /></div>
                <div className="sl">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="receipt-say reveal">The proof isn't the framework. It's the ledger.</div>
        </div>
      </section>

      {/* E7 */}
      <section className="section-dark" id="e7">
        <div className="wrap">
          <div className="reveal kicker">The E7 wedge</div>
          <h2 className="big reveal">The same engine already sells the platform story: E7.</h2>
          <p className="lead reveal">E7 is a control-and-governance layer for enterprise agentic AI: a CIO-level, cross-stack story. Mission Control already carries four E7 specialists, and the pods run dollar-quantified E7 missions. This is the bridge to the Cost Hub.</p>
          <div className="specs">
            {e7Specialists.map((s, i) => (
              <div key={s.name} className={`spec c-${s.tone} reveal d${i + 1}`}>
                <h4>{s.name}</h4><p>{s.body}</p>
              </div>
            ))}
          </div>
          <div className="missions reveal">
            <div className="ml">E7 MISSIONS ALREADY LOADED IN THE PODS</div>
            <div className="mgrid">
              {e7Missions.map((m) => (
                <div key={m.name}><div className="mn">{m.name}</div><div className="mb">{m.body}</div></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LEARN */}
      <section className="section-dark" id="learn">
        <div className="wrap">
          <div className="reveal kicker k-signal">The learning loop</div>
          <h2 className="big reveal">It gets sharper every week. That's the compounding advantage.</h2>
          <p className="lead reveal">Every send, edit, skip, and closed outcome feeds the learning layer. The pods tune their own drafting and scoring, so the system I run a year from now is not the system I run today.</p>
          <div className="learn-orbit reveal d1">
            <div className="lc"><b>compounding<br />edge</b></div>
            {learnLoop.map((l, i) => {
              const ang = (-90 + (i / learnLoop.length) * 360) * (Math.PI / 180);
              const x = 50 + 40 * Math.cos(ang);
              const y = 50 + 40 * Math.sin(ang);
              return (
                <div key={l.step} className={`lnode c-${l.tone}`} style={{ left: `${x}%`, top: `${y}%` }}>
                  <div className="ls">{l.step}</div>
                  <div className="lb">{l.body}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* STARTER KIT */}
      <section className="section-panel" id="kit">
        <div className="wrap">
          <div className="reveal kicker k-signal">Translate this</div>
          <h2 className="big reveal">You don't need 107 agents. You need one pod.</h2>
          <p className="lead reveal">Mission Control is built to be adopted: pods are portable, roles are just skills, and the governance is generic. If you already run Microsoft Scout, download the kit and let Scout build your first pod for you.</p>
          <div className="kit-wrap">
            <div className="kit-left reveal d1">
              <h3>MCROS Lite: your first pod, in Scout</h3>
              <p>Built for Microsoft Scout users. Paste one master prompt and Scout creates the three role-skills, wires a draft-only daily automation, and stores your account context. You approve everything.</p>
              <div className="steps">
                {[["1", "Download the kit", "Grab the master prompt, three role skills, and the governance file below."],
                  ["2", "Paste the master prompt into Scout", "Scout interviews you, then builds the skills and one daily automation, draft-only."],
                  ["3", "Point it at one account", "Watcher reads signals, Chair proposes moves, Owner tracks closure to a Teams card."],
                  ["4", "Run in draft for a week", "Correct it out loud. Graduate a rung once it's boringly reliable."]].map((s) => (
                  <div key={s[0]} className="kstep">
                    <div className="kn">{s[0]}</div>
                    <div><b>{s[1]}</b><br /><span>{s[2]}</span></div>
                  </div>
                ))}
              </div>
              <div className="asks">
                {asks.map((a) => (
                  <div key={a.who} className={`ask c-${a.tone}`}>
                    <div className="aw">{a.who}</div>
                    <p>{a.body}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal d2">
              <div className="downloads">
                {kitFiles.map((k) => (
                  <button key={k.file} className={`dl c-${k.tone}`} onClick={() => download(k.file, k.title)}>
                    <div className="ic">MD</div>
                    <div className="dt"><b>{k.title}</b><span>{k.desc}</span></div>
                    <div className="arrow">↓</div>
                  </button>
                ))}
                <button className="dl c-signal dl-all" onClick={() => download("mcros-lite-starter-kit.md", "the full kit")}>
                  <div className="ic">ALL</div>
                  <div className="dt"><b>Download the full kit</b><span>Everything above in one combined markdown file.</span></div>
                  <div className="arrow">↓</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PUNCHLINE */}
      <section className="section-dark" id="punch">
        <div className="wrap punch">
          <div className="reveal kicker">The punchline</div>
          <h2 className="reveal">Stop prompting AI.<br /><span className="g">Start operating it.</span></h2>
          <div className="three">
            {[["Staff the account", "A persistent pod per strategic account, not a prompt.", "signal"],
              ["Gate the risk", "Read agents run free. Write agents ask. Nothing customer-facing auto-sends.", "action"],
              ["Compound the edge", "Every outcome tunes the next decision. The system out-learns the market.", "l3"]].map((t, i) => (
              <div key={t[0]} className={`p3 c-${t[2]} reveal d${i + 1}`}>
                <div className="pt"><span className="d" />{t[0]}</div>
                <p>{t[1]}</p>
              </div>
            ))}
          </div>
          <div className="footer-card reveal">
            <div className="fn">Sean Hughley · Solution Sales Professional · Microsoft</div>
            <div className="fr">MCROS: the operating memory and execution engine for strategic selling.</div>
          </div>
        </div>
        <div className="sitefoot">Mission Control · Revenue Operating System · data snapshot {SNAPSHOT_DATE}</div>
      </section>

      {toast}
    </>
  );
}

export default App;


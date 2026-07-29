# Mission Control · Revenue Operating System

A shareable, interactive walkthrough of **MCROS** — a Level-3 (agent-led) revenue operating system: a staffed control room for every strategic account.

## Live

- **Landing:** https://seanhughley12.github.io/mission-control-revenue-operating-system/
- **MCROS Lite:** https://seanhughley12.github.io/mission-control-revenue-operating-system/mcros/
- **E7 / Cost Hub:** _(in build)_ `/e7`

## What's here

| Path | What it is |
|------|-----------|
| `index.html` | Landing hub linking to each page. |
| `mcros/` | Built MCROS Lite site (React + Vite). Served by GitHub Pages. |
| `mcros/kit/` | Downloadable starter-kit markdown: master prompt + pod role files + governance. |
| `src-mcros/` | Source for the MCROS Lite React app. |

## Starter kit

The MCROS Lite page ends in a download center. Anyone can grab the markdown files and stand up their own account pod in draft-only mode:

- `00-START-HERE.md` — the 10-minute setup
- `01-master-prompt.md` — bootstrap a 3-role pod
- `02-account-watcher.md`, `03-opportunity-chair.md`, `04-action-owner.md` — role definitions
- `05-governance.md` — the approval gates
- `mcros-lite-starter-kit.md` — everything in one file

## Developing

```bash
cd src-mcros
npm install
npm run dev        # local dev
npm run build      # outputs static site to ../mcros
```

The build `base` is set to `/mission-control-revenue-operating-system/mcros/` so assets resolve on GitHub Pages. Commit the built `mcros/` directory; Pages serves it from `main`.
# 04 — Tasks (Index)

The build checklist is split into one file per phase (`05` through `10` below). This replaces having a single flat task list.

## Why split by phase

Handing Copilot the entire roadmap at once invites it to jump ahead, assume structure you haven't decided yet, or produce a sprawling change that's hard to review. Working phase-by-phase — one file open, one task at a time — keeps each Copilot interaction scoped to something you can actually review in a single sitting.

## Files

1. [`05-setup.md`](./05-setup.md) — project scaffolding, styling, animation lib, deploy config
2. [`06-content-layer.md`](./06-content-layer.md) — types + real data
3. [`07-shared-components.md`](./07-shared-components.md) — reusable components
4. [`08-pages.md`](./08-pages.md) — the actual routes
5. [`09-polish.md`](./09-polish.md) — SEO, a11y, mobile (Lighthouse optional quality audit)
6. [`10-deploy.md`](./10-deploy.md) — ship it

## How to work through a task file

1. Open one phase file. Don't open the next one yet.
2. Work top to bottom — later tasks in a phase often assume earlier ones are done.
3. For each task, use the **Copilot prompt** provided as your starting point, adjusted for whatever Copilot needs to see in context (open the relevant spec file in another tab, or paste its content in).
4. **Review the diff before accepting.** Check it against the task's "Done when" line — that line is your acceptance test, not Copilot's.
5. If Copilot's output drifts from the spec (wrong file location, missed a stated constraint like "no `next/image` optimization"), correct it in the same turn rather than accepting and fixing later — drift compounds across a phase.
6. Only move to the next phase file once every task in the current one is checked off and actually matches its "Done when" criteria — not just "looks plausible."

## Ground rules that apply across every phase

- Every task references `00-overview.md`'s constraints implicitly (static export, no backend, no CMS) — if Copilot ever proposes an API route, a database call, or `next/image` with optimization on, that's a spec violation, not a valid shortcut.
- File paths given in each task are the intended structure — if Copilot suggests a different structure, that's a conversation to have deliberately, not something to accept by default.
- Open decisions (final menu categories, gallery placement/style) are flagged where they matter — resolve them before the task that depends on them, not after.

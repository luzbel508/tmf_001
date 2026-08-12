# Lucy's Kitchen — Spec Set

Simplified spec-driven-development file set for building the Lucy's Kitchen website with GitHub Copilot.

This file lives at the repo root; the spec/task files themselves live in `docs/`.

## Read order

1. `00-overview.md` — stack, constraints, non-goals, pre-build decisions
2. `01-brand-content.md` — visual direction, tone, content inventory
3. `02-content-model.md` — data shapes for menu/hours/gallery
4. `03-frontend-spec.md` — pages, components, interaction/animation patterns
5. `04-tasks.md` — index into `05-setup.md` through `10-deploy.md`, the actual build checklist

## Working with Copilot against these specs

Work through the numbered phase files (`05`–`10`) one at a time, one task at a time. Each task has a target file path, a "Done when" acceptance line, and a ready-to-paste Copilot prompt. Review every diff against the "Done when" line before accepting — that line is the acceptance test, not Copilot's own judgment of "looks done."

Two decisions are flagged as needing to be locked *before* Phase 1 starts (see `00-overview.md`): gallery placement and the final menu category list. Both affect structure decided early (Navbar, content types), so resolving them late causes rework.

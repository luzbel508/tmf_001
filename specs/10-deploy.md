# Phase 6 — Deploy

Governing specs: `00-overview.md`

## 6.1 Verify clean static export

- **Done when:** `next build` completes with no errors or warnings related to server-only features (no accidental API routes, no `next/image` optimization left enabled, no server components fetching at request time).
- **Copilot prompt:**
  > Run a production build and static export of this project. If there are any errors or warnings related to server-only features incompatible with static export, fix them — this project must build to fully static output.

## 6.2 Deploy to GitHub Pages

- **Done when:** The GitHub Actions workflow from `05-setup.md` (task 1.5) runs successfully on push to `main` and the site is live at the GitHub Pages URL.

## 6.3 Live smoke test

- **Done when:** On the deployed URL (not localhost), you've manually verified:
  - All routes load (`/`, `/menu`, `/about`, `/contact`, and `/gallery` if separate)
  - Mobile nav drawer opens/closes correctly
  - `OpenClosedBadge` shows a plausible status
  - Google Map embed loads
  - Phone and WhatsApp links open the correct app/dial screen on a real mobile device
  - Hero and gallery animations run smoothly, not just "technically present"
- **Note:** This is a manual QA pass, not a Copilot task — treat it as the actual definition of "the project is done," not the build succeeding.

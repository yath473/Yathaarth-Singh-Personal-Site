# Yathaarth Singh: Personal Site

A React personal website with a **Word Palette** feature: type any word and get a deterministic five-colour palette. Click a swatch to copy its colour.

Live site: `https://yath473.github.io/Yathaarth-Singh-s-Personal-Site/`

## Setup
Requires Node.js 20+.
```bash
git clone https://github.com/yath473/Yathaarth-Singh-s-Personal-Site.git
cd Yathaarth-Singh-s-Personal-Site
npm install
npm run dev      # local dev server
```

## Tests
```bash
npm test
```
Vitest and React Testing Library. Covered: palette generation and determinism, edge cases (empty, whitespace-only, non-string, very long and emoji input), and the rendered page (typing updates the palette, whitespace falls back to the default word).

## Build
```bash
npm run build    # outputs dist/
```

## CI and deployment
- `.github/workflows/ci.yml` runs `npm ci`, `npm test` and `npm run build` on every pull request to `main`. The job is named `test` and is a required status check.
- `.github/workflows/deploy.yml` runs on every push to `main`: re-runs the tests, builds with the repo's Pages base path, and deploys `dist/` to GitHub Pages only if they pass.

### One-time repository settings
1. **Settings → Pages → Source: GitHub Actions.**
2. **Settings → Branches → Add rule** for `main`: require a pull request, require status check `test`, require branches to be up to date, and include administrators.

### Capturing evidence
1. `git switch -c break-test`, change an assertion in `test/palette.test.js` so it fails, push, open a PR. Screenshot the red check and the blocked merge button.
2. Fix the test, push to the same branch. Screenshot the green check.
3. Merge. Screenshot the Deploy run and the live site.
4. Record links in `docs/EVIDENCE.md`.

## AI use
Claude (Anthropic) generated the initial code, tests, workflows, and this README from my capstone requirements and resume, including converting the site to React. I reviewed and edited them. _Edit this paragraph to state what you changed and verified yourself._

## Limitations
- Palettes are hash-based, not designed: some may have weak contrast or look unbalanced.
- Swatch label contrast is not computed per colour.
- "Copy" depends on the browser Clipboard API (needs HTTPS or localhost).
- Tests run in a simulated browser (jsdom), not a real one.
- Site content is copied from my resume and must be updated by hand.

# Print Wave USA website — build docs for Claude Code

## How to use
1. Create an empty project folder and copy **everything in this package** into it (`CLAUDE.md` at the root, plus the `docs/` folder).
2. Open the folder with Claude Code. It reads `CLAUDE.md` automatically.
3. Prompt it one task at a time, following `docs/06-build-plan.md`, e.g.:
   - "Do task T0.1 from docs/06-build-plan.md."
   - "Do T2.1 — build the Home page. Compare against docs/design/home.png when done."
4. After each task run `npm run dev` and open http://localhost:3000 to check.

## What's inside
- `CLAUDE.md`: project rules, stack, folder structure, definition of done
- `docs/01-design-system.md` … `docs/07-open-questions.md`: the full spec
- `docs/design/`: Figma screenshots, renamed by page (the export's "Articles" screen is saved as `contact.png`, since that's what it shows)

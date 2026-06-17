# Services page rewrite

Goal: represent the four services better, order by client intent, cut clutter with collapsible cards.

Scope: `app/services/page.tsx` + `content/services.ts`. Homepage `Services.tsx` left as-is (follow-up).

## Decisions (with Casey)
- Order: AI → Apps → Growth → Strategy. Growth ahead of Strategy because clients actively shop for distribution/social; positioning is the advisory layer that attaches to the rest.
- Equal pillars: identical card treatment, no featured/hero card.
- Dropped the `01–04` number badges. Numbers assert a ranking; without them, "last in reading order" no longer reads as "rated fourth." Priority now lives only in sequence. Also less clutter.
- Visual: collapsible rows, no icons. First card open by default as a soft "start here."
- SMM: promoted inside Growth & Distribution (lead bullet "Social media management (done-for-you)" + "we run it, not just advise" framing). Not a separate card, not the lead — revisit a standalone card once it's a proven revenue line.

## Build
- [x] `content/services.ts`: tightened intro; reordered categories AI → Apps → Growth → Strategy; removed `num`; sharpened Growth desc + lead offering for done-for-you social.
- [x] `app/services/page.tsx`: each category is now a native `<details>/<summary>`. Collapsed shows title + one-line desc + chevron; expanded shows offerings + Book a call. First card `open`. Chevron rotates via `group-open:rotate-180`. Removed number badge.
- [x] Design-system cleanup: `rounded-[18px]` → `rounded-2xl`, `duration-[350ms]` → `300ms`, dropped the `translate-x-1` hover jiggle (felt wrong on a clickable row), kept border-green + open:border-green.

## Verify
- [x] Renders at 1440 / 375. Cards in correct order, first open, others collapsed.
- [x] Toggle works (expanded Growth → "Social media management (done-for-you)" leads). Native, no JS.
- [x] 0 console errors (2 pre-existing font-preload warnings, unrelated).
- Note: Turbopack panics on the worktree's symlinked `node_modules` ("symlink points out of filesystem root"). Verified with `next dev --webpack`. Not caused by these changes; flag if it bites the Vercel build.

## Review

### What changed
- The `/services` page went from four always-expanded cards with `01–04` badges to four equal, collapsible cards with no numbers. Default view is four scannable title + one-liner rows; readers expand only what's relevant.
- Heading changed to `Builders who take a few clients.` (was `Two people. Both sides covered.`) — leads with the product-first positioning.
- Homepage `Services.tsx` teaser mirrored: de-numbered, single-column cards, third item relabeled `Growth, Brand & Strategy` (Growth-first) with done-for-you framing.
- Env: this worktree was missing `.env.local` (the SessionStart hook only mirrored `.env`, which doesn't exist), so `CalPopupButton` rendered null and all booking buttons vanished. Restored via a `.env.local` symlink; the global hook now mirrors `.env.local` too.
- Worktree/Turbopack: the global hook now APFS-clones `node_modules` for Next repos instead of symlinking (Turbopack panics on a symlink escaping the project root). Both global fixes live in `~/.claude/settings.json` + global CLAUDE.md, outside this repo.
- Reordered to AI → Apps → Growth → Strategy. Priority is implied by sequence, not by visual weight or numbering.
- Growth & Distribution now leads with done-for-you social media management and a "we run it" description, surfacing Nick's agency-style offering without re-centering the studio on it.
- Tightened the intro paragraph.

### Teaching notes
- **Why native `<details>` instead of a client component with `useState`?** The collapse is pure show/hide with no shared state, no analytics on toggle, no need to coordinate cards. `<details>/<summary>` gives keyboard support, correct ARIA (expanded/collapsed announced), and works with zero JS — so the page stays a server component and ships nothing to the client for this. It's the smallest thing that does the job. If we later want true accordion behavior (only one open at a time) or to track which cards get opened, that's when a client component earns its place.
- **The chevron rotation** uses Tailwind's `group` + `group-open:` variant: `<details className="group">` and `group-open:rotate-180` on the SVG. The `open` state on the parent drives the child's transform, no JS. `[&_summary::-webkit-details-marker]:hidden` + `list-none` kill the default disclosure triangle.
- **Why drop the numbers, design-wise?** Numbering is the one element that asserts rank rather than implying it. For "equal pillars," it had to go. Reading order still front-loads the differentiators (AI, Apps); the intro copy carries the "AI is our edge" message that layout no longer does. That's a deliberate trade: less visual pop for AI, in exchange for none of the four looking like a runt.
- **Ordering rationale to defend later:** AI + Apps lead on both intent and differentiation. Between the rest, Growth beats Strategy because people actively go shopping for distribution/social and pay retainers for it, while positioning is rarely sought directly. So Growth third, Strategy fourth.
- **To extend:** if SMM becomes a real revenue line, split it into its own card (5 cards, or fold Strategy into Growth). If you want one-open-at-a-time, convert to a small client component tracking an open index. To match the homepage `Services.tsx` (still 3 merged items with numbers), apply the same order + de-numbering there.

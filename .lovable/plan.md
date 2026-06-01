## Plan: Keep only real articles in Writing section

**File:** `src/components/Writing.tsx`

Remove the 6 placeholder tiles (those with `href: "#"`) from the `tiles` array, keeping only the 4 real entries the user has actually written:

1. "AI can build an app in minutes, but can it solve a problem?" (Medium)
2. "Building a user-friendly self-service portal..." (Medium)
3. "Understanding SaaS Products" (LinkedIn)
4. "Prototyping using variable/modes and conditional statements" (LinkedIn)

**Removed:**
- Designing for cognitive load (Mar 2025)
- Why accessibility is the default (Feb 2025)
- Patterns that make enterprise UI feel calm (Jan 2025)
- A tiny note on consistency (Dec 2024)
- Forms are a conversation (Nov 2024)
- From Figma to ship: handoff that respects engineering (Oct 2024)

The existing bento grid layout (`md:grid-cols-4` with `md:col-span-2 md:row-span-2` on the first two image tiles, and `md:col-span-2` on the two LinkedIn tiles) already balances cleanly into a 2-row layout with the 4 remaining items. No layout changes needed.

**Out of scope:** No changes to styling, heading, or other sections.

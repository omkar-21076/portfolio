## Goal

Make the Research intro paragraph in all case studies render full-width (~`max-w-5xl`) and split the Compliance Companion intro into two cleaner paragraphs.

## Changes

**1. `src/components/CaseStudy.tsx`** — render intro as multiple paragraphs and widen the column.

Replace the single `<p>` at line 185 with a block that splits `p.research.intro` on blank lines (`\n\n`) and renders each chunk as its own `<p>`, inside a wider container:

```tsx
<div className="mt-6 max-w-5xl space-y-4 text-base leading-relaxed">
  {p.research.intro.split(/\n\n+/).map((para, i) => (
    <p key={i}>{para}</p>
  ))}
</div>
```

This keeps Legal DMS and EatSure working unchanged (their intros stay a single paragraph) while letting any case study author multi-paragraph intros by inserting a blank line.

**2. `src/routes/work.compliance-companion.tsx`** — split the Research intro into two paragraphs at the natural topic shift (recruiting/data collection → analysis/validation).

- **P1** ends after: *"…Observations, struggles, and suggestions were captured throughout the process."*
- **P2** begins with: *"The findings from surveys and usability testing were then prioritized…"* and continues through the follow-up validation sentence.

Done by inserting a blank line (`\n\n`) between those two sentences in the existing `research.intro` template string. No other copy changes.

## Out of scope

- Legal DMS and EatSure intro copy (untouched; they just inherit the wider container).
- Insight quote cards, other sections, and image assets.

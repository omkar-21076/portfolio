## Goal

Apply the same treatment as the Research intro to the Final solution section across all case studies: widen to `max-w-5xl` and render multi-paragraph text by splitting on blank lines.

## Change

**`src/components/CaseStudy.tsx`** (line 336) — replace the single `<p>` with:

```tsx
<div className="mt-6 max-w-5xl space-y-4 text-base leading-relaxed">
  {p.solution.text.split(/\n\n+/).map((para, i) => (
    <p key={i}>{para}</p>
  ))}
</div>
```

The Compliance Companion, Legal DMS, and EatSure `solution.text` strings already contain blank-line breaks, so each will automatically render as separate paragraphs at full width. No route file copy changes needed.

## Out of scope

Section image, headings, and surrounding sections.

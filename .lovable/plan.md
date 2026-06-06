## Issue

The URL in `src/components/Contact.tsx` (`https://www.linkedin.com/in/omkar-raut`) is already the URL you confirmed. The "blocked" / `ERR_BLOCKED_BY_RESPONSE` error happens because LinkedIn sends an `X-Frame-Options: DENY` header, which prevents it from loading inside the Lovable preview iframe when the link opens in the same tab.

On the published site (opened in a real browser tab) this isn't an issue, but in the preview it looks broken.

## Fix

Update the LinkedIn anchor in `src/components/Contact.tsx` so it always opens in a new tab, bypassing the iframe entirely:

- Add `target="_blank"` and `rel="noopener noreferrer"` to the LinkedIn `<a>` tag.
- Apply the same to the Email/GitHub/other external links for consistency if they're missing it.

No visual, layout, or content changes — link behavior only.

## Verification

After the change, click LinkedIn in the preview → it opens `linkedin.com/in/omkar-raut` in a new tab successfully instead of showing the blocked-frame error.
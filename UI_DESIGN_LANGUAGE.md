# UI design language

This document is the default design reference for all future timetable UI work. Preserve this language when adding features, fixing bugs, or refining usability. Do not silently replace or drift from the visual system; a deliberate change to the core design language must be explicitly requested and called out in the change. Usability, accessibility, and localization improvements are welcome when they remain consistent with these principles.

## Product character

- Calm, focused, and practical: help students answer “what is happening now?” and scan the week quickly.
- Mobile-first, compact, and readable. Use hierarchy and spacing rather than decoration to make information easy to scan.
- Soft, matte glass surfaces over a quiet background. Effects should remain subtle and must never reduce text contrast or obscure content.
- Keep the timetable itself central. Avoid introducing unrelated visual motifs, ornamental gradients, or competing accent colors.

## Color and themes

Use the existing CSS custom properties in `index.html` as the source of truth. Add or adjust tokens only for a real semantic need; do not introduce one-off colors where a token already applies.

| Role | Light theme | Dark theme |
| --- | --- | --- |
| Page background (`--bg`) | `#EBEEF4` | `#0A0B10` |
| Solid surface fallback (`--solid`) | `#F6F7FA` | `#171925` |
| Primary text (`--text`) | `#14172A` | `#ECEEF6` |
| Muted text (`--muted`) | `#566079` | `#8E94AA` |
| Lecture | `#2D6BDC` | `#7FB0FF` |
| Directed work | `#7448DD` | `#B9A2FF` |
| Lab work | `#087F5F` | `#5FD9AF` |

- Follow the operating-system color preference through the existing light/dark theme. Check both themes when changing surfaces, borders, or text.
- Use `--glass`, `--edge`, `--line`, `--hi`, and `--shadow` for translucent surfaces, borders, separators, highlights, and elevation.
- Use restrained opacity and `color-mix()` for active and soon states. Do not make color the only way to communicate status.
- Keep the solid-surface fallback usable when backdrop blur is unavailable. The texture/grain is decorative and must remain non-interactive.

## Type and information hierarchy

- Use Bricolage Grotesque for the Latin interface and Readex Pro for Arabic, with the existing system-font fallbacks.
- Headings are compact and confident; supporting labels and metadata are smaller and muted. Keep contrast and legibility ahead of stylistic weight.
- Use tabular numerals for times, countdowns, and other values that update.
- Avoid letter spacing in Arabic. Give Arabic headings and controls adequate line height, and keep Latin room codes and time values isolated left-to-right where needed.
- Keep interface copy concise and action-oriented. Add or update English and Arabic strings together in `I18N`; do not hard-code user-facing text in rendering code.

## Layout and spacing

- The default layout is a centered, single-column schedule (up to about 520px wide) with comfortable page gutters and consistent gaps.
- At 960px and wider, switch to the 12-column desktop composition: header and summary across the top, current status beside the week overview, and the selected day below. At 1200px, the overall content may expand to about 1280px.
- Keep the current status visually prominent, followed by the selected-day timeline and the week overview. Preserve this scan order when changing layout.
- Use a small, consistent spacing rhythm (roughly 4–20px). Prefer existing spacing and component patterns over arbitrary values.
- The week grid may need more width than a small screen can provide. Contain horizontal scrolling within the week panel; never let it create page-level horizontal overflow.
- Keep the editor as a bottom sheet on small screens, bounded in width on larger screens, and scrollable within the viewport. Respect safe-area insets.
- Long subject names, Arabic text, and translated labels must wrap or truncate within their own component instead of pushing the page wider.

## Surfaces and components

- **Current-status card:** rounded, softly elevated surface. Use a restrained subject tint for a live or soon class; keep status text, subject, room, countdown, and progress easy to distinguish.
- **Day timeline:** chronological rows with a stable time column, connecting rail, and session card. Use the existing card treatment and roughly 16px card corners. Past content is de-emphasized, not hidden.
- **Week overview:** compact day columns and rounded cells. Selected day, today, active class, soon class, free slot, and inactive slot must remain distinguishable. Retain labels and the legend.
- **Subject type encoding:** lecture is blue with a circular mark; directed work is purple with a rounded-square mark; lab work is green with a diamond mark. Preserve both the color and shape mapping anywhere these types appear.
- **Editor and forms:** reuse the existing field, chip, button, row, and sheet patterns. Keep labels visible or programmatically associated, group related actions, and make destructive actions explicit.
- **Actions:** use the dark/light inverse filled pill for the primary completion/action button, understated outlined or dashed treatments for secondary actions, and the danger token for destructive actions. Icon-only controls need an accessible name.
- Keep borders, corner radii, shadows, and blur subtle and coherent with neighboring components. Avoid adding another surface style for a component that can reuse an existing one.

## Interaction, accessibility, and motion

- Use native buttons and form controls where possible. Keep keyboard operation, visible focus, semantic headings/regions, and accessible names intact.
- Preserve the clear `:focus-visible` outline. Do not remove focus indication for visual polish.
- Keep selected and pressed states available to assistive technology (for example, `aria-pressed` on toggles and day selectors); do not rely on color alone.
- For modal sheets, retain the dialog semantics, background inertness, Escape/backdrop dismissal, and sensible focus placement and restoration. Keep focus within the modal while it is open.
- Feedback and validation should be visible, specific, and localized. Do not silently swallow errors or show success when an action failed.
- Motion should be short and functional: use it to confirm a state change, not to decorate. Honor `prefers-reduced-motion` for every new animation or transition.
- Maintain comfortable touch targets and do not shrink existing controls to make a layout fit. Reflow or contain overflow instead.

## Localization and direction

- English and Arabic are first-class layouts, not just translated strings. Verify both after any layout, typography, or component change.
- Set page `lang` and `dir` from the selected language. Use logical properties such as `margin-inline`, `padding-inline`, and `border-inline-start` so layouts adapt to RTL.
- Allow Arabic labels and longer translations to wrap. Do not force English ordering or alignment onto Arabic content.
- Isolate values that should retain LTR order, such as times, room codes, and file names. Mirror directional icons only when their meaning is directional.

## Review checklist for future UI changes

- Does the change reuse the existing tokens, typography, surface, and component patterns?
- Does it preserve the current mobile-first hierarchy and avoid viewport-level horizontal scrolling?
- Has it been checked at a narrow phone width (including around 320px), a typical phone width, and desktop widths on both sides of the 960px breakpoint?
- Does it work in light and dark themes, English and Arabic/RTL, and with longer text?
- Can the interaction be completed with a keyboard and assistive technology? Is focus visible?
- Does the change respect reduced motion and provide clear, localized feedback for errors and success?
- If the core visual language must change, is that an explicit product decision rather than an incidental side effect of a feature?

The implementation currently lives primarily in `index.html`. Treat its existing tokens and component rules as the visual source of truth; keep this guide aligned when an explicitly approved design-language change is made.

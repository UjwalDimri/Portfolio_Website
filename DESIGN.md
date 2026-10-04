# Ujwal Dimri Portfolio Design System

## Direction

Warm, editorial portfolio inspired by the supplied JCREA reference. The layout introduces Ujwal as a Full Stack Developer and aspiring DevSecOps Engineer, then moves through capabilities, work history, proof points, projects, recognition, education, and contact. Keep the content factual and use Ujwal's existing portfolio data as the source of truth.

## Palette

| Token | Value | Use |
| --- | --- | --- |
| Page | `#f8f5ef` | Main canvas |
| Surface | `#fffdfa` | Cards, panels, navigation |
| Soft accent surface | `#fff3e9` | Proof point band |
| Ink | `#27221e` | Headlines and primary text |
| Body | `#514941` | Paragraphs |
| Muted | `#71675e` | Metadata |
| Orange | `#fd853a` | CTAs, active states, links |
| Orange deep | `#bd581e` | Supporting emphasis |
| Border | `#eee8df` | Fine dividers |

Use orange as the one accent. Avoid blue, green, purple, and dark-tech treatments. The base is light and warm throughout.

## Type and layout

- Use Manrope for large display headings, Geist for interface and body copy, and Geist Mono for technical metadata.
- Use strong, close-set sans-serif display headlines with balanced wrapping.
- Keep body copy readable and bounded to about 65 characters per line.
- Use a centered `max-w-7xl` content frame with generous vertical spacing.
- The hero is a two-column introduction with a large headline and the existing portrait.
- Cards use warm white surfaces, restrained borders, and soft brown-tinted shadows.
- Vary the section compositions. Avoid turning the page into a uniform card grid.

## Motion

- Use Motion for staggered hero entry, scroll reveals, spring hover feedback, experience-panel transitions, project filter transitions, and the page progress line.
- The technology ribbon can move continuously and pauses on hover.
- Respect `prefers-reduced-motion`; remove continuous movement and keep content visible.
- Keep transitions short and tied to hierarchy or feedback. Avoid scroll hijacking.

## Content and accessibility

- Keep both **Full Stack Developer** and **Aspiring DevSecOps Engineer** prominent in the hero and page metadata.
- Use real projects, experience, awards, contact details, and education from `src/data/portfolioData.ts`.
- Do not add placeholder clients, testimonials, or fabricated outcomes.
- Preserve keyboard focus indicators, semantic sections, image alt text, and reduced-motion support.

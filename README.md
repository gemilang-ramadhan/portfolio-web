# Gemilang Ramadhan — Portfolio

A responsive, static portfolio centered on autonomous systems research, applied machine learning, and web development.

## Development

- `dist/index.html`: page content and semantic structure (the deployed HTML source).
- `src/input.css`: design tokens, component styles, and responsive layouts.
- `dist/script.js`: mobile navigation and active section tracking.
- `dist/assets/`: project images, optimized WebP photographs, and résumé.

Run `npm install`, then `npm run build` to regenerate `dist/output.css`. Use `npm run dev` to watch CSS changes. Serve `dist/` using any static HTTP server; for example, `python3 -m http.server 4173 --directory dist`.

## Design

The reading order prioritizes identity, selected projects, experience, expertise, background, outreach, and contact. A restrained blue accent, slate research showcase, system typography, and shared spacing and border tokens keep the presentation consistent. The layout adapts at 1050, 760, and 480 pixels, with dedicated mobile navigation and reduced-motion support.

Content and reported project metrics are grounded in the existing portfolio and `dist/assets/portfolio_gemilang.pdf`. Update both sources when professional details change. Original photographs are retained; the page loads optimized WebP copies.

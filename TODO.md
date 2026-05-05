# Monochrome Apple-Style Conversion TODO

## [x] 1. Update tailwind.config.ts
- Redefine theme.extend.colors → ONLY #ffffff (bg), #000000 (primary), #111111 (textMain), #666666 (textSecondary)
- Subtle shadows with rgba(0,0,0,0.1/0.2)
- Remove nebula-gradient, colored shadows

## [x] 2. Update src/app/globals.css
- :root vars → exact palette
- Body: white bg, #111111 text
- Buttons/hud/terminal: palette-only, no glows
- Remove scanlines, glitch, shimmer completely

## [ ] 3. Verify completeness
- search_files for remaining colors
- Test npm run dev

## [ ] 4. Final cleanup if needed

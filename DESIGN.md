# Design Direction

## Identity
Personal developer portfolio (devfolio). Primary audience: recruiters and hiring managers. Mood: sharp, credible, technical.

## Personality
Bold & energetic: confident, expressive, portfolio/agency feel. Says hello loudly, but stays credible for a hiring-manager audience (not a generic AI-slop version of "bold").

## Palette (existing, from `tailwind.config.js`)
- Core: `purple` `#8b31ff`, `indigo.light` `#9f55ff`, `indigo.dark` `#7000ff`
- Neutrals: `white` `#ffffff`, `black` `#000000`, `gray.light.1-4`, `gray.dark.1-5`
- Accent use only: `red` `#cf0000`, `green` `#00ac56`
- Base is dark (gray.dark scale); purple/indigo is the deliberate accent family, so don't introduce new hues without reason.

## Typography (existing)
- Sans: Calibre (`--font-calibre`)
- Mono: JetBrains Mono (`--font-jetbrains-mono`)

## Dials
- ENERGY: 3 (Bold), agency/portfolio energy
- RHYTHM: 3 (Varied/asymmetric), sections may each have their own composition logic
- MOTION: 1 (Calm), hover/focus states only, no scroll-reveal or parallax choreography

## Notes
Rhythm and Energy are bold/varied, but Motion is deliberately restrained: visual boldness comes from composition and typography, not animation. Keep this combination intentional; don't default to scroll animation just because Energy is high.

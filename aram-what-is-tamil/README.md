# Aram × Debatable: Tamil Identity Workshop carousel

8 slides, 1080×1350 (Instagram portrait 4:5), ready to post from `slides/`.

| # | Slide |
|---|-------|
| 01 | Hook: *Aren't you just as confused about being Tamil as we are?* |
| 02 | Is it the words we can understand? |
| 03 | …what we know of our past? |
| 04 | …where we come from? |
| 05 | …the values we've inherited? |
| 06 | …our tendency to worship actors? |
| 07 | We've spoken to Tamils across the world |
| 08 | CTA: Join us this Sunday… + Tamil Identity Workshop details (Sun 15 Nov, 1:00 PM, Sugar & Spice Lounge) |

- `slides/aram-01.png` … `aram-08.png`: the exported slides
- `preview.png`: contact sheet of all 8
- `caption.md`: draft caption (fill in time/place/link)
- `carousel.html`: source; edit copy here
- `render.js`: re-export with `node render.js` (needs Playwright)
- `aram-carousel.pdf` / `export-pdf.js`: all 8 slides as one PDF (re-export with `node export-pdf.js`)
- `story/aram-story-1.png` … `aram-story-3.png`: matching Instagram Story frames (1080×1920),
  `story-preview.png` shows all three; source `story.html`, re-export with `node render-story.js`.
  Frame 1 is the hook ("Quick test… say ழ properly. Go on… we'll wait."), frame 2 is a "You might be Tamil
  if…" tick list and leaves room for a Question sticker ("add yours below"), frame 3 ("Bring your identity
  crisis. We'll bring the debate.") has the workshop details and room for a Link sticker
  (sign-up link), both just above the bottom line. Content stays out of the top 250px and bottom 340px,
  where Instagram puts its own buttons.
- `story/aram-promo-day-1.png` … `-3.png`: 3-day countdown Stories (`promo-preview.png`; source
  `promo.html`, re-export with `node render-story.js promo`). Post Thu 12, Fri 13 and Sat 14 Nov:
  day 1 "3 days to go" (add a Countdown sticker to Sun 15 Nov, 1 PM), day 2 "Sri Lankan Tamil or Eelam
  Tamil?" (add a Poll sticker), day 3 "Tomorrow." (add the Link sticker).
- `brand/`: Aram Initiative logos (site version, cream version for dark slides, and the original file you sent);
  Debatable wordmark (`debatable-wordmark-cream.png` / `-night.png`, lifted from their ad `debatable-ad.jpg`.
  Swap in an official file for sharper output.)

**Brand:** colours follow aram.org.uk/members: night `#1B1230` for dark slides, warm cream `#FAF6EF`
for light slides, marigold gold `#F2B33D` as the main accent, plum `#5E3F8C` and soft lavender `#EFEAF7`.
Debatable's maroon `#580612` (from their poster) marks the collaboration: their wordmark sits on a maroon
sticker on every slide, slide 7 and the event card are maroon, and the Story's event frame is maroon.
The logo's dot colours (sky `#7DB3E1`, pink `#E43172`, green `#29B789`) appear only as small details.
The logo is the site's current version (`brand/aram-logo.png`, plus `aram-logo-cream.png` for dark slides).
Type is Baloo Thambi 2 for headlines and Tamil, Poppins for body text (as on the site), and Caveat for
handwritten notes. Shapes are drawn by hand rather than with a ruler: blobs, squiggle underlines, tilted
stickers, thought bubbles, the logo's three "sparkle" dashes, and the logo's arms-up figure. A wobbly
thread along the bottom runs continuously from one slide into the next as people swipe.

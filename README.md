# The Chandos Arms — website

A small, fast, dependency-free website for **The Chandos Arms**, 1 Main Street, Weston Turville, Buckinghamshire, HP22 5RR · ☎ 01296 613532.

Plain HTML, CSS and a little vanilla JavaScript — no build step, no frameworks. Just open the files or drop the folder onto any static host.

## Run it locally

From this folder:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Any static server works.)

## Files

| File / folder | What it is |
| --- | --- |
| `index.html` | Home |
| `menu.html` | Food &amp; Drink |
| `whats-on.html` | What's On / events |
| `our-story.html` | Our Story (history &amp; the village) |
| `find-us.html` | Find Us (hours, map, contact) |
| `css/styles.css` | All styling + the design system (colours, fonts) |
| `js/main.js` | Mobile menu, scroll animations, "today" hours highlight, footer year |
| `assets/logo.svg` | Crest logo (recreated) · `assets/favicon.svg` browser icon |
| `images/` | Photos used on the site |
| `images/_source/` | The raw saved Facebook export (kept for reference, **not** used by the site) |

## Editing common things

- **Text / wording:** open the relevant `.html` file and edit the text between the tags.
- **Phone number:** appears as `tel:+441296613532` (links) and `01296 613532` (display). Search/replace both if it ever changes.
- **Opening hours:** edit the two `<table class="hours">` blocks (in `index.html` and `find-us.html`). The current day is auto-highlighted via the `data-day` attribute (`0` = Sunday … `6` = Saturday).
- **Menu items:** edit the `<li class="menu-item">` blocks in `menu.html`.
- **Colours &amp; fonts:** the `:root { … }` block at the top of `css/styles.css` controls the whole palette and typography.

## Adding real photos (image slots)

Several spots show a dashed **"Photo slot"** placeholder. To swap one in:

1. Drop your photo into `images/` (e.g. `images/sunday-roast.jpg`).
2. In the page, replace the whole `<div class="slot …">…</div>` with:
   ```html
   <img src="images/sunday-roast.jpg" alt="A plated Sunday roast at The Chandos Arms" />
   ```
   (The surrounding `.frame` / `.split__media` keeps it nicely framed.)

Good photos to capture: the bar interior, a plated Sunday roast, food close-ups, a well-poured pint, and the garden in summer.

## Photos currently in use

All photos are the pub's own, taken from its Facebook page.

| Image | Used on | Note |
| --- | --- | --- |
| `logo-arms.png` | Header (all pages) + Our Story hero | Pub coat of arms / wordmark, grey background removed to transparent (from `arms.JPG`). |
| `exterior-hero.jpg` | Home hero, Our Story | ⚠️ Carries an **"EDK Photography"** watermark — see go-live checklist. |
| `burger.jpg` | Home (food) | Beef & bacon burger. |
| `events-group.jpg` | What's On (community feature) | Charity ride-out gathering. |
| `marquee-flags.jpg` | What's On | Heated marquee. |
| `garden-benches.jpg` | Home | Covered garden seating. |
| `interior-fireside.jpg` | Food & Drink | Cosy interior by the fire. |
| `yorkshire-puddings.jpg` | Food & Drink | Yorkshire puddings close-up. |

> The food/interior shots are ~414px square (Facebook-sized), so they're kept in modest frames. Higher-resolution originals from the pub would look crisper — drop them in over the same filenames.

## ✅ Before you go live

A few things are best confirmed by the pub before publishing — they were uncertain or varied between online sources:

- [ ] **Plated Sunday roast photo** — the Home page "Proper pub food" section has a placeholder waiting for a photo of a roast served on a plate. Save it as `images/sunday-roast.jpg` and swap the `.slot` div for an `<img>` (see "Adding real photos" above).
- [ ] **Opening &amp; kitchen hours** — the times shown are a reasonable guide; confirm the real bar and food-service hours.
- [ ] **Domain &amp; email** — the site uses `enquiries@thechandoswestonturville.co.uk`. Point the new domain `thechandoswestonturville.co.uk` at the host (DNS) and set up that mailbox so the email works.
- [ ] **Menu &amp; prices** — verified items: the Monday £10 specials, the pizzas and the Sunday roast. Other dishes are a representative sample; confirm the current menu and add prices if wanted.
- [ ] **Events** — confirm the quiz night day/time and any regular live-music schedule.
- [ ] **Image rights** — the exterior hero shot is watermarked "EDK Photography". Get permission/a licensed copy, or replace it with your own photo of the pub.
- [ ] **Higher-res photos** (optional) — the food/interior shots are Facebook-sized (~414px); swap in larger originals over the same filenames for extra sharpness.
- [ ] **Map marker** — the OpenStreetMap marker on Find Us is approximate; nudge the `marker=` / `bbox=` values in `find-us.html` if you want it spot-on.

## Hosting (free options)

This is a static site, so it's free and easy to host:

- **Netlify** — drag-and-drop this folder at app.netlify.com, or connect a Git repo.
- **GitHub Pages** — push to a repo and enable Pages.
- **Cloudflare Pages** — similar drag-and-drop / Git flow.

Point your domain (`thechandoswestonturville.co.uk`) at whichever you choose.

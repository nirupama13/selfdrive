# MalayaSelfDrive 🚗

A fast, lightweight, single-page self-drive car rental website for **Bangalore & Odisha**, built with plain **HTML, CSS and vanilla JavaScript** — no frameworks, no build step, no backend. All bookings happen over WhatsApp.

**Live site:** https://nirupama13.github.io/selfdrive/

## Features

- Mobile-first, fully responsive layout (navy `#0B1F3A` · orange `#FF6B1A` · off-white, Poppins font)
- Animated hero with moving road and bobbing car, scroll-reveal animations via `IntersectionObserver`
- Car catalogue rendered from a single data file (`js/cars.js`) with Bangalore/Odisha filter chips
- Zoomcar-style car cards with price, specs, and a prefilled **WhatsApp** enquiry button per car
- Animated 5-step "How It Works" lifecycle
- Terms & Conditions accordion
- Customer reviews with star ratings and auto-slide on mobile
- Floating pulsing WhatsApp button on every screen
- SEO + Open Graph meta tags, JSON-LD, SVG logo used as favicon

## File structure

```
selfdrive/
├── index.html          # the single page (all sections)
├── css/
│   └── style.css       # all styles, mobile-first
├── js/
│   ├── cars.js         # ← car catalogue data (edit this to add cars)
│   └── main.js         # rendering, menu, accordion, reveal & slider logic
├── assets/
│   ├── logo.svg        # brand logo (also used as favicon)
│   └── cars/           # car images (SVG placeholders — swap with real photos)
└── README.md
```

## Run locally

No build needed — just open `index.html` in a browser, or serve the folder:

```bash
# any static server works, e.g.
python -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push this repository to GitHub (branch `main`).
2. On GitHub, open the repo → **Settings** → **Pages** (left sidebar).
3. Under **Build and deployment**:
   - **Source:** "Deploy from a branch"
   - **Branch:** `main`, folder `/ (root)` → **Save**
4. Wait a minute or two. The site goes live at:
   `https://<your-username>.github.io/selfdrive/`
   (for this repo: https://nirupama13.github.io/selfdrive/)

Every later `git push` to `main` redeploys automatically.

## How to add a new car

1. Add the car's image to `assets/cars/` (e.g. `kia-seltos.webp`). Any format works (`.svg`, `.jpg`, `.png`, `.webp`); a 5:3 aspect ratio (e.g. 800×480) looks best.
2. Open **`js/cars.js`** and append a new object to the `CARS` array:

```js
{
  name: "Kia Seltos",
  year: 2026,
  pricePerDay: 2199,
  priceExclFees: 2199,
  transmission: "Automatic",   // or "Manual"
  fuel: "Petrol",              // "Diesel" | "Electric" | "CNG"
  seats: 5,
  image: "assets/cars/kia-seltos.webp",
  city: "Bangalore"            // "Bangalore" shows under the Bangalore filter;
                               // any Odisha city (Bhubaneswar, Cuttack, …) under Odisha
}
```

3. Commit and push — done. The card, its WhatsApp enquiry link, and the city filter all update automatically. **No other file needs editing.**

## Change the WhatsApp number

The number appears in two places:

- `js/main.js` → the `WHATSAPP_NUMBER` constant (used by all car-card buttons)
- `index.html` → the static `https://wa.me/...` links (header button, footer, floating button)

Search-and-replace `918904358117` across the project to update everywhere.

## License

See [LICENSE](LICENSE).

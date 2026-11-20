# ORO Regen Companies

Single-page landing site announcing the move to [www.ororegencompanies.com](http://www.ororegencompanies.com).

Built with React, Vite 5 and Tailwind CSS 3. Works on Node.js 18 or newer.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build for production

```bash
npm run build    # output in dist/
npm run preview  # serve the built site locally
```

Deploy the `dist/` folder to any static host (Vercel, Netlify, cPanel, etc.).

## Where things live

- `src/lib/site.js` – company name, website link, logo and banner paths
- `src/components/Header.jsx` – logo header
- `src/components/Banner.jsx` – clickable banner with animated "Visit" button
- `src/App.jsx` – page layout and "We have moved" section
- `tailwind.config.js` – colours, font and animations
- `src/index.css` – Tailwind entry and base styles
- `public/` – logo, favicon and banner images

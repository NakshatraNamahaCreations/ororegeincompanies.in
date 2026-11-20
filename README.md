# ORO Regen Companies

Single-page landing site announcing the move to [www.ororegencompanies.com](http://www.ororegencompanies.com).

Built with React, Vite and Tailwind CSS.

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
- `src/index.css` – colours and animations
- `public/` – logo, favicon and banner images

# Samly Website

The official website for Samly, built with Astro and published at [samly.tv](https://samly.tv).

## Run locally

Install dependencies with `npm install`, then start Astro’s background development server:

```sh
npx astro dev --background
```

Use `npx astro dev status`, `npx astro dev logs`, and `npx astro dev stop` to manage it.

Build the production site with:

```sh
npm run build
```

## Where things live

- Page content: `src/pages/`
- Shared page layouts: `src/layouts/`
- Reusable components: `src/components/`
- Shared site styles and design tokens: `src/styles/global.css`
- Game catalogue: `src/data/games.ts`
- External links: `src/data/links.ts`
- Images and other static files: `public/images/` (create subfolders as needed)

## Add a new game

1. Open `src/data/games.ts`.
2. Copy one complete game object in the `games` array. For a game jam entry, copy an object in the separate `gameJams` array instead.
3. Change `title`, `description`, `image`, `platform`, `priceLabel`, and `storeUrl`.
4. Put the cover image in `public/images/games/` and use a path such as `/images/games/my-game.webp`.
5. Keep cover artwork at a `630:500` aspect ratio. If `image` is blank, the CSS placeholder remains visible.
6. Pick an existing `artTheme` for the fallback artwork.

The new game will appear automatically on the Games page. The first three entries in `games` also appear on the home page. Entries in `gameJams` appear in their own section on the Games page.

## Deployment

Pushing to the `main` branch starts the existing GitHub Actions workflow in `.github/workflows/deploy.yml`. It installs dependencies, builds the static Astro site and publishes `dist/` to GitHub Pages. `astro.config.mjs` supplies the canonical site URL and `public/CNAME` keeps the custom `samly.tv` domain.

## Placeholders still to replace

- Hero, music, community and support illustrations (currently CSS artwork)
- Future game entries and their cover images
- Community resource links and final resource wording
- Final personal copy where the current wording is intentionally neutral
- Favicon, if the current placeholder is not final

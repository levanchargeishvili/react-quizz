# TV Series App

A React + TypeScript + Vite app for browsing TV series, searching by title, and saving bookmarks in local storage.

## Features

- Fetches media data from a hosted JSON endpoint
- Filters media to the `TV Series` category
- Search input for quick title filtering
- Bookmark toggle persisted in browser `localStorage`
- Loading and error states for data fetching

## Tech Stack

- React 19
- TypeScript
- Vite 8
- Axios
- ESLint 10 + `typescript-eslint`
- React Compiler via `@vitejs/plugin-react` + `@rolldown/plugin-babel`

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Run development server

```bash
npm run dev
```

### 3) Build for production

```bash
npm run build
```

### 4) Preview production build

```bash
npm run preview
```

## Available Scripts

- `npm run dev`: Start Vite dev server
- `npm run build`: Type-check and build (`tsc -b && vite build`)
- `npm run lint`: Run ESLint
- `npm run preview`: Preview built app locally

## Data Source

The app loads media data from:

- [movie-api/data.json](https://raw.githubusercontent.com/lomsadze123/movie-api/refs/heads/main/data.json)

Configured in `src/api/constants.ts` as `API_URL`.

## Notes

- Bookmarks are stored under the `bookmarked-movies` key in `localStorage`.
- Current page implementation focuses on TV series (`src/pages/TvSeriesPage.tsx`).

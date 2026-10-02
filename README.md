# cliffweng.com

Personal site for Cliff Weng. One stack: Vite and React, built to static files and published on GitHub Pages.

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is `dist/`. That folder includes `CNAME` (`cliffweng.com`) and `.nojekyll`.

## Deploy

GitHub Pages for this repository publishes the **`gh-pages` branch** at `/`, with custom domain **cliffweng.com**. Source stays on **`master`**.

`.github/workflows/pages.yml` builds on every pull request and uploads `dist` as an artifact. A push to `master` is what publishes: the workflow copies `dist/` onto `gh-pages` and writes the same CNAME. A pull request does not replace the live site.

Paths such as `/study-guides/` are other repositories’ project sites under the user domain. This app is a single page with in-page sections. It does not install a catch-all `404.html`, so those project sites keep their own URLs.

## Preview a pull request

Download the `site-dist` artifact from the Pages workflow, or run `npm run build && npm run preview`.

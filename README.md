# Waycross Labs

The portfolio site for [Waycross Labs LLC](https://waycrosslabs.com) — an independent software studio building useful products from the Carolina Piedmont.

Founder: JT Earl · `dev@waycrosslabs.com` / `support@waycrosslabs.com`

## Stack

- [Astro 5](https://astro.build) (static, zero JS by default)
- TypeScript (strict)
- Custom design tokens (light + dark, auto-detected, manual override)
- Built-in i18n: English (`/`) + Spanish (`/es/`)
- Deployed via [AWS Amplify Hosting](https://aws.amazon.com/amplify/hosting/)

## Develop

```sh
nvm use            # node 22
npm install
npm run dev        # http://localhost:4321
```

## Quality gates

```sh
npm run typecheck  # astro check
npm run lint       # eslint
npm run build      # static build to dist/
npm run preview    # preview built site
```

## Deploy

`main` branch auto-deploys via AWS Amplify Hosting. Custom domain: [waycrosslabs.com](https://waycrosslabs.com) (apex; www → apex 301).

## Adding a product

Append to [`src/content/products.ts`](./src/content/products.ts). The Products section maps over the array — no other code changes needed.

## Adding a locale

1. Copy `src/i18n/en.ts` → `src/i18n/<locale>.ts` and translate the strings (TypeScript will fail the build until every key is present).
2. Add the locale to `astro.config.mjs` under `i18n.locales` and the sitemap integration's `i18n.locales` map.
3. Create `src/pages/<locale>/index.astro` mirroring `src/pages/index.astro` with the new locale.

## License

© Waycross Labs LLC. All rights reserved.

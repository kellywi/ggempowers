# GG Empowers

A responsive Astro + TypeScript static website. No paid integrations, application server, UI framework, or UI dependencies. A small local script handles background-video playback and reduced-motion preferences. Fonts load from Google Fonts (free); the layout has local serif/sans-serif fallbacks if fonts are unavailable. No business copy or photography has been supplied, so bracketed content and image panels are explicitly marked placeholders.

## Run locally

Use Node.js 22.23.4 or newer (specified in `.nvmrc`; if you use nvm, run `nvm install` and `nvm use`). From this directory:

```sh
npm ci
npm run dev
```

Open `http://localhost:4321`. Stop the server with Ctrl+C.

```sh
npm run check
npm run build
npm run verify
npm run preview
```

`check` validates Astro templates and TypeScript. `build` generates the static website in `dist/`; `verify` checks draft output and section links; `preview` serves that output locally. Update the draft-specific assertions in `scripts/verify.mjs` when you replace the draft content and launch.

## Edit content

- `src/data/site.ts`: brand text, hero, about, offerings, CTA labels/destinations, email, social links, and image paths.
- `src/data/events.ts`: event title, display date/time/time zone, location, description, and optional registration URL. Set `events` to `[]` if you have no confirmed events.
- `src/data/testimonials.ts`: approved quotes and attribution. Empty by default; no invented endorsements.
- `src/pages/index.astro`: remaining bracketed section headings and introductions, page metadata, and page structure.
- `src/styles/global.css`: colors, typography, spacing, and responsive layouts.

Create `public/images/` and add your own optimized WebP/AVIF/JPEG photos. Set `heroImage.src` and `aboutImage.src` to `/images/your-file.webp` and write descriptive `alt` text. The existing frames reserve image space to avoid layout shift. Keep images sensibly sized (around 1200–1600 pixels wide); the about image loads lazily. The CSS backgrounds are decorative placeholders, not stock photography.

Media folders are ready:

- `public/images/`: optimized images for the website, served at `/images/filename.webp`.
- `public/videos/`: compressed website videos, served at `/videos/filename.mp4`. The hero uses `hero-background.mp4`, configured in `src/data/site.ts`.
- `source-media/images/` and `source-media/videos/`: original source files. These folders are ignored by Git and excluded from the static build; back them up separately.

Everything in `public/` is included in a deployment. Cloudflare Pages limits individual assets to 25 MiB; compress or split larger videos before using them here. Provide a poster image and captions for video with speech when adding a video player.

Add your real email to `contact.email` to show a working email button. Add `{ label, href }` entries to `socials` to show social links. Missing contact information is text, not a fake link or nonfunctional form. Existing navigation/CTA links scroll to real page sections. Registration links appear only when supplied. Use valid trusted `https://` links, `mailto:` links, or section anchors.

## Connect a personal GitHub repository

No repository was created or pushed by this implementation. Create an empty repository in your personal GitHub account (public or private). In your normal writable checkout, run the following, replacing the URL:

```sh
git init
git add .
git commit -m "Build GG Empowers static website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/ggempowers.git
git push -u origin main
```

If your checkout already has a working Git repository or remote, reuse it rather than initializing or adding a duplicate remote. Commit `package-lock.json`; do not commit `node_modules` or `dist`.

## Cloudflare Pages setup (when you choose to publish)

Connecting and deploying will publish the draft to a `pages.dev` address. These steps are instructions only; no Cloudflare resources, deployment, or DNS changes were made.

1. In Cloudflare, open **Workers & Pages** and choose **Create application** → **Pages** → **Connect to Git** (labels may vary).
2. Connect your personal GitHub account and grant access to only the repository you want to deploy.
3. Select the repository and use production branch `main`.
4. Choose the **Astro** preset. Set build command to `npm run build`, build output directory to `dist`, and root directory to the repository root (leave blank).
5. Set build environment variable `NODE_VERSION` to `22.23.4` or a supported newer Node release. No secrets, adapter, Wrangler configuration, or Pages Functions are required for this static build.
6. When you are ready to publish, select **Save and Deploy**. Cloudflare installs dependencies from the lockfile, builds, and provides a `pages.dev` URL. Later pushes to `main` trigger production builds; configure preview branches in Pages settings as desired.
7. Keep `ggempowers.com` unchanged for now. Adding a custom domain is a separate future action in Pages → **Custom domains**; do not add it or change DNS until you decide to launch.

Cloudflare's official guide: https://developers.cloudflare.com/pages/framework-guides/deploy-an-astro-site/
Build settings: https://developers.cloudflare.com/pages/configuration/build-configuration/
Free-plan limits: https://developers.cloudflare.com/pages/platform/limits/

Use the free Pages plan and GitHub's standard repository integration; this project needs no paid runtime or external service. Check current plan limits before launch.

## Before launch

Replace every bracketed placeholder, add your own images and verified contact links, and remove the draft banner. Obtain permission for testimonials before adding them. Replace the placeholder meta description and remove `noindex, nofollow` in `src/pages/index.astro` only when the content is ready for search engines. Add a canonical URL when your production domain is connected. Review keyboard navigation, text zoom, phone/tablet/desktop layouts, and your final image alt text. No analytics, cookies, tracking scripts, or form processing are included.

## Background video and photo gallery

The supplied 23-second video is compressed to an H.264 MP4 with no audio and fast-start playback. Its original MOV is preserved in `source-media/videos/`, outside deployment and Git. Do not move the large original back into `public/`: Pages has a 25 MiB per-file limit. The hero has a still-image poster, a play/pause button, and does not automatically load/play the video when reduced motion is preferred. If autoplay is blocked or JavaScript is unavailable, the poster remains visible.

Update `backgroundVideo` and `offeringImages` in `src/data/site.ts`, and the manually maintained gallery in `src/data/gallery.ts`. Gallery photos do not sync with Instagram; the profile link opens @ggempowers. Original supplied photos remain alongside optimized WebP copies.

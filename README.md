This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

1. Import the GitHub repo `infiyoura-website` in [Vercel](https://vercel.com/new).
2. **Root Directory** must be the repository root (where `package.json` and `vercel.json` live)—not the parent `golang practice` folder.
3. Framework preset: **Next.js** (auto-detected). Node.js **20+** is used via `engines` in `package.json`.
4. Add environment variable `NEXT_PUBLIC_FRAME_BASE_PATH` only if scroll frames are hosted on a CDN (see `public/frames/README.md`).
5. Deploy. Set primary domain to `infiyoura.com` in Vercel **Domains** (redirect `www` → apex if both are attached).

`vercel.json` sets the Mumbai region (`bom1`) and standard security headers.

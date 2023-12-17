# Proxima (NextJS) Frontend WebApp

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Technologies
- [TypeScript](https://www.typescriptlang.org/) as language
- [Next.js](https://nextjs.org/) as React Front Framework
- [TailwindCSS](https://tailwindcss.com/) for styling
- [DaisyUI](https://daisyui.com/) for TailwindCSS components
- [ESLint](https://eslint.org/) for linting
- [Prettier](https://prettier.io/) for code formatting
## Structure
The project is structured following "Screaming Architecture" approach. The structure is the following:
```
└── 📁src
    └── 📁app
        └── page.tsx
    └── 📁components
        └── banner.tsx
        └── dropdown.tsx
        └── nav.tsx
    └── 📁styles
        └── globals.css
    └── 📁utils
        └── formats.ts
```

The `components` folder contains the different UI shared components of the application.

The `app` folder contains the different pages (or Next.js routes) of the application

The `styles` folder contains the base styles using TailwindCSS.

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

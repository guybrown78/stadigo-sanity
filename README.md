
# Stadigo


Live site: [stadigo.com](https://stadigo.com/).


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

It connects to a sanity.io headles cms so you will need a sanity project id 'PROJECT_ID' set up in the env, along with a API_VERSION and DATASET token

The forms submit to Airtable. You'll need an ACCESS_TOKEN and AIRTABLE_BASE to post the form, or just comment out the airtable promise to recreate the flow

styling is Tailwindcss

## Getting Started

First, install the dependancies

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Node.js Server Deployment

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Static Deployment and Host Static Web Server

The website is deployed on AWS in a similar static fashion. Most bugs present in the static deployment will come through in production.  

```bash
npm run build
```

Project will be built in to a static site according to `next.config.mjs`. The output files will be in the `out` folder.  

Host with browser-sync or any other static web server of choice.

```bash
npm install -g browser-sync

cd out

npx browser-sync start --server
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

For reload, rebuild the project and refresh page.  

## Continuous Deployment
The secret variables are configured in the repo setting/secrets.  

The project is automatic to be built and deployed when a new version is committed to `main` branch, the actions are defined in `deploy.yml`.



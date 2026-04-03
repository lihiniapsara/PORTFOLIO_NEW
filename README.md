# Portfolio - Lihini Apsara

Personal portfolio built with Next.js.

## Project Identity

- Name: Lihini Apsara
- Program: GDSE - Graduate Diploma in Software Engineering
- Focus: Full-stack development, scalable architectures, cloud-ready applications

## Run Locally

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 in your browser.

## Deploy via GitHub Pages (Automatic)

This repository is configured with a GitHub Actions workflow that deploys to GitHub Pages on every push to main.

Expected live URL:

https://lihiniapsara.github.io/PORTFOLIO_NEW/

## Git Commands (Your Repository)

```bash
git init
git add .
git commit -m "Initial personal portfolio"
git branch -M main
git remote add origin https://github.com/lihiniapsara/PORTFOLIO_NEW.git
git push -u origin main
```

If origin already exists:

```bash
git remote set-url origin https://github.com/lihiniapsara/PORTFOLIO_NEW.git
git push -u origin main
```

## Build for Production

```bash
pnpm build
pnpm start
```

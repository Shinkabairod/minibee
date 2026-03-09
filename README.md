# MINIBEE LLC — Corporate Website

The official website for **MINIBEE LLC**, a Delaware-based software studio specializing in custom computer programming services.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Shinkabairod/minibee.git
cd minibee
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with SEO, structured data
│   ├── page.tsx            # Homepage (Hero, About, Services, Contact)
│   ├── privacy-policy/
│   │   └── page.tsx        # Privacy Policy
│   └── terms/
│       └── page.tsx        # Terms of Service
├── components/
│   ├── Navbar.tsx          # Fixed navigation with mobile menu
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid (3 cards)
│   ├── Contact.tsx         # Contact section with email
│   └── Footer.tsx          # Footer with nav, legal, and address
```

## Deployment

This project is configured for deployment on **Vercel**.

1. Push to your GitHub repository.
2. Connect the repository to [Vercel](https://vercel.com).
3. Vercel will automatically detect Next.js and deploy.

No environment variables are required for the base deployment.

## Environment Variables

Copy `.env.example` to `.env.local` for local configuration:

```bash
cp .env.example .env.local
```

## Company Information

- **Company:** MINIBEE LLC
- **Website:** minibee.pro
- **Email:** contact@minibee.pro
- **Address:** 254 Chapman Road, Ste 208 #23664, Newark, Delaware 19702, US
- **DUNS:** 14-493-4757
- **NAICS:** 541511 — Custom Computer Programming Services

## License

All rights reserved. © 2026 MINIBEE LLC.

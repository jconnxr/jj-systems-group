# J&J Systems Group — Website

Professional website for J&J Systems Group, a systems and operations consulting firm.

## Stack

- **Frontend:** React 18 + Vite
- **Styling:** Tailwind CSS
- **Routing:** React Router v6

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build

```bash
npm run build
npm run preview
```

## Structure

- `/src/components` — Reusable layout and UI components (Layout, Navbar, Footer, Hero, Section, CTA, FounderCard, CapabilityCard, IndustryCard)
- `/src/pages` — Page components assembled from components
- Routes follow the spec: Home, About (Our Story, Founders), What We Do (6 sub-pages), Industries (4 sub-pages), Process, Case Studies, Contact (Book a Meeting, General Inquiry)

## Future expansion

The site is built to support later additions such as case studies, diagrams, blog/insights, client portals, and CRM integrations without blocking growth.

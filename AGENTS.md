# Berlin Naija Foodie - Agent Guidelines

## Project Overview
Digital storefront for Nigerian restaurant in Berlin - transitioning from "DM for orders" to online takeout, shipping, and catering inquiries.

## Current State
- **Frontend**: Next.js 13+ (app router) with React, Tailwind CSS, Lucide React
- **Data**: Hardcoded restaurant data in `src/data/restaurants.ts`
- **UI**: Restaurant directory with client-side search and modal details
- **Missing**: Backend, payments, deployment

## Key Files
- `src/app/page.tsx` - Main restaurant directory (entrypoint)
- `src/data/restaurants.ts` - Restaurant interface and mock data
- `src/app/` - Next.js app directory (all pages)

## Development Setup
Since no package.json exists, assume standard Next.js:
- `npm install` - Install dependencies (will create package.json)
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build for production
- `npm start` - Start production server

## Tech Stack Roadmap (Per User Request)
- **Frontend**: Keep Next.js + Tailwind CSS (already working)
- **Backend/CMS**: Strapi + Postgres (Dockerized)
- **Payments**: Stripe (Berlin/EU focus)
- **Deployment**: Vercel

## Architecture Notes
- Uses Next.js 13+ app router (`src/app/page.tsx` is the root route)
- Tailwind CSS utility-first styling (observe existing classes for consistency)
- Lucide React for icons (import from 'lucide-react')
- Client-side filtering/search only (no API calls yet)
- Modal-based restaurant detail view (state managed with useState)

## Critical Conventions
1. **Component Pattern**: Follow existing patterns in `page.tsx` for new components
2. **Styling**: Maintain exact Tailwind class consistency (note the 4px borders, shadow patterns, hover effects)
3. **Data Structure**: Any new data must conform to `Restaurant` interface in `src/data/restaurants.ts`
4. **Search**: Current implementation filters by name, cuisine, and tags (client-only)
5. **Modals**: Use fixed positioning with backdrop blur (`bg-slate-900/60 backdrop-blur-sm`)

## Next Steps for Agent
1. **UI Features**: Follow existing patterns in `page.tsx` for consistency
2. **Styling**: Match the exact Tailwind classes used (borders, shadows, colors, hover effects)
3. **Data**: Keep any new data structures aligned with `Restaurant` interface
4. **Backend Prep**: Design components to eventually consume Strapi API endpoints
5. **Payments**: Plan Stripe integration points (menu/checkout flows)
6. **Deployment**: Ensure Vercel compatibility (Next.js already optimized)

## Verification Checklist
- [ ] Visual inspection matches existing UI style
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] Client-side search filters correctly by name/cuisine/tags
- [ ] Modal opens/closes correctly with backdrop
- [ ] New components follow existing code patterns exactly
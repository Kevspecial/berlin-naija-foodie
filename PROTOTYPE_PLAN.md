# Project: Berlin Naija Foodie - Prototype Plan

## 1. Goal
Build a high-fidelity prototype that demonstrates the transition from "Instagram DM ordering" to a "Professional Digital Storefront." The goal is to show the business owner how this reduces manual labor and increases conversion.

## 2. The "Sizzle" (What we show the client)
- **Visual Menu:** A clean, appetizing gallery of dishes.
- **Seamless Checkout:** A "Buy Now" flow that feels like a real business, not a chat thread.
- **Order Management:** A glimpse of how they get notified when a new order hits.
- **Professionalism:** A dedicated URL and brand identity that builds trust.

## 3. Technical Stack (Prototype Phase)
- **Frontend:** Next.js 14 (App Router) + Tailwind CSS + Lucide Icons.
- **CMS (Backend):** Strapi (Headless CMS) paired with Postgres.
- **Payments:** Stripe (Test Mode) for the demo.
- **Deployment:** Vercel (Frontend) + Railway/Render (Strapi + Postgres).

## 4. Feature Roadmap for Prototype
### Phase 1: The Storefront (MVP)
- [ ] **Home Page:** Hero section with high-res food imagery and a "Order Now" CTA.
- [ ] **Menu Page:** Categorized food items (Main, Sides, Drinks) with price and "Add to Cart."
- [ ] **Cart/Checkout:** Simple summary page and a Stripe checkout integration.
- [ ] **Order Confirmation:** A "Thank You" page that triggers a notification.

### Phase 2: The Backend (The "Efficiency" pitch)
- [ ] **Strapi Setup:** Define `Dish`, `Category`, and `Order` content types.
- [ ] **Admin Panel:** Show the client how they can change a price or mark a dish as "Sold Out" in 2 seconds without texting a dev.

## 5. Sales Pitch Strategy
- **The Pain:** "You're spending 4 hours a day answering 'Is this available?' on Instagram."
- **The Solution:** "Your customers browse, pay, and schedule delivery in 30 seconds. You just cook."
- **The Value:** Increased order volume, zero manual payment tracking, and a professional brand.

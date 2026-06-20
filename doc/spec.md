# Technical Specification
## AGENTS.md Creation for Berlin Naija Foodie Project

### Technical Context
- **Language/Framework**: Next.js 13+ (app router), React, TypeScript
- **Styling**: Tailwind CSS utility-first framework
- **Icons**: Lucide React
- **State Management**: React useState hooks
- **Data**: TypeScript interfaces with hardcoded mock data
- **Current Structure**: 
  - `src/app/page.tsx` - Main entry point using Next.js app router
  - `src/data/restaurants.ts` - Restaurant interface and mock data array

### Implementation Approach
Based on analysis of existing code patterns in `page.tsx` and `restaurants.ts`:

#### 1. Component Pattern Convention
Following the existing structure in `page.tsx`:
- Use functional components with React hooks (useState)
- Export components as default exports
- Import icons from 'lucide-react'
- Use Tailwind CSS utility classes for styling
- Implement client-side filtering with array.filter()
- Use state management for UI interactions (search, modal)

#### 2. Styling Convention
Observed Tailwind patterns in existing code:
- Border widths: border-4 (primary), border-2 (secondary)
- Shadow patterns: shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] (cards), shadow-[20px_20px_0px_0px_rgba(0,0,0,1)] (modals)
- Hover effects: hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all
- Color usage: bg-yellow-50, text-slate-900, text-orange-600, etc.
- Spacing: Consistent p-6, mb-12, gap-8 patterns
- Typography: Heading hierarchy (text-5xl, text-2xl, text-xl, etc.)
- Border radius: rounded-3xl (main), rounded-2xl (inner elements)
- Layout: Flexbox and Grid classes (flex, grid, gap-* utilities)

#### 3. Data Structure Convention
From `restaurants.ts` Restaurant interface:
- All new data structures must conform to the Restaurant interface
- Required fields: id, name, cuisine, rating, description, image, tags[], location, phone, hours, menu[], specialty
- Menu items follow { name: string; price: string } pattern
- Tags are string arrays for categorization
- Use consistent ID format (string numbers currently)

#### 4. Search/Filter Convention
Current implementation in page.tsx lines 9-13:
- Case-insensitive matching with toLowerCase()
- Searches across name, cuisine, and tags array
- Uses Array.some() for tags filtering
- Maintains search state with useState hook

#### 5. Modal Convention
Current implementation in page.tsx lines 82-149:
- Fixed positioning with inset-0
- Backdrop with bg-slate-900/60 backdrop-blur-sm
- Modal content with border-4 border-slate-900 rounded-3xl
- Close button in top-right with X icon
- Scrollable content with max-h-[90vh] overflow-y-auto
- Consistent spacing (p-8) and layout patterns

### Source Code Structure Changes
For this specific task (creating AGENTS.md):
- No changes to existing source code structure required
- AGENTS.md will be placed in the project root directory
- No modifications to existing .tsx or .ts files needed

### Data Model / API / Interface Changes
Not applicable for this task as we're only creating documentation.
However, for future reference when implementing backend:
- Restaurant interface in `src/data/restaurants.ts` should remain the source of truth
- Any API endpoints should return data conforming to this interface
- Future menu/order interfaces should extend or relate to this structure

### Delivery Phases
This task is a single-phase documentation effort:
1. Create AGENTS.md in project root with comprehensive guidelines
2. No incremental delivery needed for documentation

### Verification Approach
Since this is documentation creation:
- Visual inspection of AGENTS.md for completeness and accuracy
- Verify that all sections from the PRD are addressed
- Check that technical details accurately reflect the existing codebase
- Ensure guidelines are clear and actionable for future agents

### Dependencies
- None for this documentation task
- Future implementation work will depend on:
  - Setting up Next.js project (npm install)
  - Implementing Strapi backend
  - Setting up Postgres database
  - Integrating Stripe payments
  - Configuring Vercel deployment

### Traceability to PRD Requirements
This technical specification addresses all requirements from the PRD:
1. ✅ Project Overview Section - Included in AGENTS.md
2. ✅ Current State Documentation - Detailed in Architecture Notes
3. ✅ Key Files Identification - Specified in Key Files section
4. ✅ Development Setup Instructions - Provided in Development Setup
5. ✅ Tech Stack Roadmap - Outlined in Tech Stack Roadmap
6. ✅ Architecture Notes - Comprehensive section included
7. ✅ Critical Conventions - Detailed with specific examples
8. ✅ Next Steps Guidance - Provided in Next Steps for Agent
9. ✅ Verification Checklist - Included at end of AGENTS.md

### Acceptance Criteria
- AGENTS.md file created in project root
- File contains all required sections from PRD
- Technical details accurately reflect existing codebase
- Guidelines are clear, specific, and actionable
- No markdown syntax errors or formatting issues
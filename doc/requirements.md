# Product Requirements Document (PRD)
## AGENTS.md Creation for Berlin Naija Foodie Project

### Purpose
Create a comprehensive guideline file (AGENTS.md) that helps future AI agents quickly understand the Berlin Naija Foodie project, follow established conventions, avoid common mistakes, and contribute effectively to the codebase.

### Goal
Transition the project from basic frontend implementation to a full-featured digital storefront with backend, payments, and deployment capabilities by ensuring agents have clear guidance on project structure, tech stack, and development practices.

### Requirements
1. **Project Overview Section**: Clearly describe the project's purpose and current state
2. **Current State Documentation**: Detail what exists in the codebase (frontend only, hardcoded data, UI components)
3. **Key Files Identification**: Highlight the most important files agents should understand first
4. **Development Setup Instructions**: Provide clear commands for setting up and running the project
5. **Tech Stack Roadmap**: Outline planned technologies based on user specifications
6. **Architecture Notes**: Explain key architectural decisions and patterns used
7. **Critical Conventions**: Specify exact patterns agents must follow for consistency
8. **Next Steps Guidance**: Provide direction on what agents should work on next
9. **Verification Checklist**: Include items agents should verify before considering work complete

### Success Criteria
- An agent reading AGENTS.md should be able to:
  - Understand the project purpose and current limitations
  - Set up the development environment correctly
  - Identify where to make changes for common tasks
  - Follow existing code patterns and styling conventions
  - Know what technologies are planned for implementation
  - Verify their work meets project standards

### Assumptions
- The project uses Next.js 13+ with app router (based on src/app/page.tsx)
- Tailwind CSS is configured and used for styling
- Lucide React is used for icons
- No backend or payment systems are currently implemented
- Deployment to Vercel is the target platform
- Standard Next.js development commands apply (npm install, dev, build, start)

### Dependencies
- None for the creation of AGENTS.md itself
- Future work will depend on implementing the planned tech stack

### Scope
**Included**:
- Project overview and current state analysis
- File structure and key component documentation
- Development environment setup
- Tech stack implementation roadmap
- Architecture and convention guidelines
- Next steps and verification guidance

**Excluded**:
- Detailed implementation specifications for planned features
- Backend API designs
- Payment flow specifications
- Infrastructure as code for deployment
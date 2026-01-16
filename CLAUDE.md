# CLAUDE.md - AI Assistant Guide for MP SaaS

This document provides guidance for AI assistants working on the MP SaaS repository.

## Project Overview

**Repository:** MP SaaS
**Type:** Full-stack SaaS Web Application
**Framework:** Next.js 14 with TypeScript
**Styling:** Tailwind CSS
**Last Updated:** January 2026

MP SaaS is a modern Software-as-a-Service platform featuring a marketing website, user authentication, dashboard with analytics, and RESTful API endpoints.

## Repository Structure

```
MP/
├── CLAUDE.md                    # AI assistant guidelines (this file)
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
├── .gitignore                   # Git ignore rules
│
└── src/
    ├── app/                     # Next.js App Router pages
    │   ├── layout.tsx           # Root layout with metadata
    │   ├── globals.css          # Global styles and Tailwind
    │   ├── page.tsx             # Landing page (home)
    │   ├── pricing/page.tsx     # Pricing page with plans
    │   ├── features/page.tsx    # Features showcase
    │   ├── about/page.tsx       # About page
    │   ├── contact/page.tsx     # Contact form
    │   ├── login/page.tsx       # User login
    │   ├── signup/page.tsx      # User registration
    │   ├── dashboard/page.tsx   # User dashboard
    │   │
    │   └── api/                 # API routes
    │       ├── auth/
    │       │   ├── login/route.ts
    │       │   └── signup/route.ts
    │       ├── analytics/route.ts
    │       ├── contact/route.ts
    │       ├── projects/route.ts
    │       └── users/route.ts
    │
    ├── components/              # Reusable React components
    │   ├── Navbar.tsx           # Navigation header
    │   └── Footer.tsx           # Site footer
    │
    ├── lib/                     # Utility functions
    │   ├── utils.ts             # Helper functions
    │   └── constants.ts         # App constants
    │
    └── types/                   # TypeScript type definitions
        └── index.ts             # Shared types
```

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Next.js 14 | React framework with App Router |
| TypeScript | Type-safe JavaScript |
| Tailwind CSS | Utility-first styling |
| Lucide React | Icon library |
| clsx | Conditional class names |

## Commands Reference

| Command | Description |
|---------|-------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (port 3000) |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## Development Guidelines

### File Organization
- **Pages** go in `src/app/` using the Next.js App Router convention
- **API routes** go in `src/app/api/` with `route.ts` files
- **Reusable components** go in `src/components/`
- **Utility functions** go in `src/lib/`
- **TypeScript types** go in `src/types/`

### Component Conventions
- Use functional components with TypeScript
- Use `'use client'` directive only when client-side interactivity is needed
- Keep components focused and single-purpose
- Extract reusable UI elements to `src/components/`

### Styling Guidelines
- Use Tailwind CSS utility classes
- Custom component classes are defined in `globals.css` under `@layer components`
- Follow the existing color scheme (primary-50 through primary-950)
- Maintain responsive design (mobile-first approach)

### API Route Patterns
- Return consistent JSON responses with `success` boolean
- Include proper error handling with appropriate status codes
- Validate all input data
- Use TypeScript interfaces for request/response types

### Code Style
- Use TypeScript strict mode
- Prefer `const` over `let`
- Use descriptive variable and function names
- Format with 2-space indentation
- Use single quotes for strings

## Key Pages

| Route | Description | Auth Required |
|-------|-------------|---------------|
| `/` | Landing page with hero, features, testimonials | No |
| `/features` | Detailed feature showcase | No |
| `/pricing` | Pricing plans with comparison | No |
| `/about` | Company story and team | No |
| `/contact` | Contact form | No |
| `/login` | User authentication | No |
| `/signup` | User registration | No |
| `/dashboard` | User dashboard with analytics | Yes (simulated) |

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/auth/login` | POST | User login |
| `/api/auth/signup` | POST | User registration |
| `/api/contact` | POST | Contact form submission |
| `/api/users` | GET | List users (paginated) |
| `/api/analytics` | GET | Dashboard analytics data |
| `/api/projects` | GET, POST | Project CRUD operations |

## Common Tasks for AI Assistants

### Adding a New Page
1. Create `src/app/[page-name]/page.tsx`
2. Import and use `Navbar` and `Footer` components for public pages
3. Follow existing page structure patterns
4. Add route to navigation if needed

### Adding a New API Route
1. Create `src/app/api/[endpoint]/route.ts`
2. Export async functions for HTTP methods (GET, POST, etc.)
3. Use `NextRequest` and `NextResponse` from `next/server`
4. Add proper validation and error handling
5. Update types in `src/types/index.ts`

### Adding a New Component
1. Create `src/components/ComponentName.tsx`
2. Use TypeScript for props interface
3. Use Tailwind CSS for styling
4. Export as default

### Modifying Styles
- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Use Tailwind classes inline

## Security Considerations

- Never commit `.env` files or credentials
- Validate all user inputs server-side
- Use parameterized queries for database operations
- Implement proper CSRF protection
- Sanitize outputs to prevent XSS
- Use HTTPS in production

## Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
# Add database, auth, and API keys as needed
```

## Future Enhancements

When extending this project, consider:
- Database integration (PostgreSQL, MongoDB)
- Authentication provider (NextAuth.js, Clerk)
- Payment processing (Stripe)
- Email service (Resend, SendGrid)
- Analytics (Vercel Analytics, Mixpanel)
- Testing (Jest, Playwright)

---

*This document should be updated when significant changes are made to the codebase structure, patterns, or workflows.*

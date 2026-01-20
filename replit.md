# Jamia Islamia Ehya-ul-Uloom Niswa

## Overview

This is a full-stack web application for an Islamic educational institution (Madrasa). The platform serves as a public-facing website featuring announcements, events, courses, teacher profiles, and a contact form. Built with a React frontend and Express backend, it uses PostgreSQL for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter (lightweight React router)
- **State Management**: TanStack React Query for server state caching and synchronization
- **Styling**: Tailwind CSS with shadcn/ui component library (New York style variant)
- **Animations**: Framer Motion for page transitions and UI animations
- **Form Handling**: React Hook Form with Zod validation via @hookform/resolvers
- **Build Tool**: Vite with hot module replacement

### Backend Architecture
- **Runtime**: Node.js with Express 5
- **Language**: TypeScript (ES modules)
- **API Design**: RESTful endpoints defined in `shared/routes.ts` with Zod schemas for request/response validation
- **Database ORM**: Drizzle ORM with PostgreSQL dialect
- **Development**: tsx for TypeScript execution, Vite dev server middleware for frontend

### Shared Code Pattern
The `shared/` directory contains code used by both frontend and backend:
- `schema.ts`: Drizzle table definitions and Zod insert schemas
- `routes.ts`: API contract definitions with paths, methods, and response schemas

This pattern ensures type safety across the full stack.

### Data Models
Five core entities defined in PostgreSQL:
1. **Announcements** - News and updates with title, content, date
2. **Events** - Scheduled activities with title, description, date, location
3. **Courses** - Educational programs with title, description, age group, schedule
4. **Teachers** - Staff profiles with name, role, bio, optional image
5. **Contact Messages** - Form submissions with name, email, message

### Build Process
- Development: Vite serves frontend with HMR, Express handles API routes
- Production: Custom build script using esbuild for server bundling and Vite for client build
- Output: Server compiled to `dist/index.cjs`, client assets to `dist/public/`

## External Dependencies

### Database
- **PostgreSQL**: Primary data store, connection via `DATABASE_URL` environment variable
- **Drizzle Kit**: Schema migrations with `db:push` command

### UI Component Libraries
- **Radix UI**: Headless accessible components (dialog, dropdown, tabs, etc.)
- **shadcn/ui**: Pre-styled component collection built on Radix
- **Lucide React**: Icon library

### Key NPM Packages
- `@tanstack/react-query`: Data fetching and caching
- `drizzle-orm` / `drizzle-zod`: Database ORM with Zod schema generation
- `framer-motion`: Animation library
- `date-fns`: Date formatting utilities
- `zod`: Runtime type validation

### Development Tools
- `@replit/vite-plugin-runtime-error-modal`: Error overlay for development
- `@replit/vite-plugin-cartographer`: Replit-specific development tooling
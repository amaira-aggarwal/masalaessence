# Masala Essence

## Overview

Masala Essence is a premium event catering and decor business website built as a full-stack TypeScript application. The project showcases Indian catering services and event decoration offerings with an elegant, gallery-first design approach inspired by luxury hospitality platforms. The site features a marketing homepage, interactive catering menu with item selection, event decor gallery with lightbox viewing, and a contact form for event inquiries.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (pages: Home, Menu, Gallery, Contact)
- **State Management**: Zustand for menu item selection state (`useMenuStore`), TanStack React Query for server state
- **UI Components**: shadcn/ui component library built on Radix UI primitives with Tailwind CSS styling
- **Design System**: Custom theme with CSS variables for colors, Playfair Display (serif) for headings, Inter (sans-serif) for body text

### Backend Architecture
- **Runtime**: Node.js with Express.js server
- **API Structure**: RESTful endpoints prefixed with `/api` (routes defined in `server/routes.ts`)
- **Storage Pattern**: Interface-based storage abstraction (`IStorage`) with in-memory implementation (`MemStorage`), designed for easy database migration

### Build System
- **Development**: Vite dev server with HMR, tsx for TypeScript execution
- **Production**: Vite builds frontend to `dist/public`, esbuild bundles server to `dist/index.cjs`
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` with Zod validation via `drizzle-zod`
- **Current Schema**: Users table with id, username, password fields
- **Migration**: Drizzle Kit for schema migrations (`db:push` command)

## External Dependencies

### Database
- PostgreSQL (configured via `DATABASE_URL` environment variable)
- `connect-pg-simple` for session storage capability

### UI/Component Libraries
- Radix UI primitives (dialog, dropdown, tabs, toast, etc.)
- Embla Carousel for image carousels
- React Hook Form with Zod resolver for form validation
- Lucide React and React Icons for iconography

### Development Tools
- Replit-specific plugins: `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`

### Styling
- Tailwind CSS with custom configuration
- Google Fonts: Playfair Display, Inter, DM Sans, Geist Mono, Fira Code
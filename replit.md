# CreativeStudio Digital Agency Website

## Overview

This is a modern, responsive digital agency website built with React, TypeScript, and Tailwind CSS. The application follows a full-stack architecture with a Node.js/Express backend and a React frontend, designed to showcase creative services including graphic design and video editing. The site features a professional agency aesthetic with dark/light mode support, interactive portfolio showcases, and comprehensive contact forms.

## Recent Changes (January 28, 2025)

✓ Fixed navigation visibility issues - navbar brand and menu items now have proper contrast against hero background
✓ Added semi-transparent navbar background for better readability when not scrolled  
✓ Fixed "View Our Work" button visibility with background styling
✓ Resolved missing Process section icons by implementing Unicode emoji icons after SVG and Lucide imports failed
✓ All four process step icons now display correctly: Discovery (💡), Strategy (✏️), Creation (🎨), Launch (🚀)
✓ Removed file upload functionality from contact form
✓ Implemented Gmail integration for contact form with admin notifications and user confirmations
✓ Added newsletter subscription email confirmations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Shadcn/ui component library built on Radix UI primitives
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon serverless PostgreSQL
- **Session Management**: In-memory storage with fallback to database sessions

### Styling System
- **Theme System**: CSS custom properties with light/dark mode support
- **Component Library**: Radix UI primitives with custom styling
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Color Scheme**: Professional agency palette (primary: #2d3748, secondary: #4299e7, accent: #ed8936, success: #38a169)

## Key Components

### Page Structure
- **Home Page**: Single-page application with multiple sections
  - Hero section with animated counters and video background support
  - About section with intersection observer animations
  - Services showcase for graphic design and video editing
  - Interactive portfolio with filtering and modal views
  - Creative process workflow visualization
  - Team member profiles with social links
  - Client testimonials carousel
  - Service packages comparison
  - Contact form with file upload capability

### Interactive Features
- **Portfolio Filtering**: Category-based filtering system for projects
- **Modal System**: Portfolio item detail views with project information
- **Before/After Slider**: Interactive comparison component for design work
- **Intersection Observer**: Scroll-triggered animations throughout the site
- **Responsive Navigation**: Mobile-friendly navigation with sheet overlay
- **Theme Toggle**: Dark/light mode switching with system preference detection

### Form Handling
- **Contact Forms**: Multi-step contact forms with validation
- **File Upload**: Support for project brief and reference material uploads
- **Form Validation**: Client-side validation with error messaging
- **Newsletter Signup**: Email subscription functionality

## Data Flow

### Client-Side Data Management
- **Portfolio Data**: Static portfolio items defined in `lib/portfolio-data.ts`
- **Theme State**: Managed through React Context with localStorage persistence
- **Form State**: Local component state with validation hooks
- **Animation State**: Intersection Observer hooks for scroll-triggered animations

### Server-Side Architecture
- **Route Structure**: Express routes prefixed with `/api`
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **User Management**: Basic user CRUD operations with UUID generation
- **Session Handling**: Express session middleware with PostgreSQL store fallback

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Schema Management**: Drizzle ORM with TypeScript schema definitions
- **Migrations**: Database migrations managed through Drizzle Kit

## External Dependencies

### UI and Styling
- **Radix UI**: Complete set of accessible UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe component variants

### Development Tools
- **Vite**: Fast build tool with HMR support
- **TypeScript**: Type safety across the entire stack
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimizations

### Database and Backend
- **Drizzle ORM**: Type-safe database queries and schema management
- **Neon Database**: Serverless PostgreSQL provider
- **Connect PG Simple**: PostgreSQL session store for Express

## Deployment Strategy

### Development Environment
- **Dev Server**: Vite development server with Express middleware
- **Hot Reload**: Full-stack hot reloading with Vite HMR
- **Error Handling**: Runtime error overlays and comprehensive logging
- **Environment Variables**: Database URL and development flags

### Production Build
- **Frontend Build**: Vite builds optimized React bundle to `dist/public`
- **Backend Build**: ESBuild compiles TypeScript server to `dist/index.js`
- **Static Assets**: Served through Express static middleware in production
- **Asset Optimization**: Automatic code splitting and tree shaking

### Database Management
- **Schema Deployment**: `drizzle-kit push` for schema synchronization
- **Migration Strategy**: File-based migrations in `./migrations` directory
- **Connection Management**: Environment-based database URL configuration

### Performance Considerations
- **Image Optimization**: Unsplash CDN for portfolio images with responsive sizing
- **Code Splitting**: Automatic route-based code splitting
- **Caching Strategy**: TanStack Query for efficient data caching
- **Bundle Analysis**: Optimized imports and dead code elimination
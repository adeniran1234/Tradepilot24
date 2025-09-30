# TradePilot - Crypto Arbitrage Trading Platform

## Overview
TradePilot is a full-stack cryptocurrency arbitrage trading platform enabling users to invest in automated trading plans, monitor real-time arbitrage opportunities, and manage crypto investments. Its purpose is to provide a comprehensive, user-friendly platform with a modern dark-themed UI, real-time market data, robust user authentication, investment management, and administrative controls. The project aims to capitalize on the growing interest in automated crypto trading and provide a reliable, efficient tool for users to engage in arbitrage strategies.

## Recent Changes (September 30, 2025)
- **Fresh GitHub Import**: Successfully imported and set up the GitHub project in Replit environment
- **Dependencies Installation**: Installed all Node.js dependencies via npm install (656 packages)
- **Development Environment**: Configured Node.js application with proper Vite development server setup
- **Host Configuration**: Verified frontend is properly configured with `allowedHosts: true` in server/vite.ts for Replit proxy compatibility
- **Workflow Setup**: Configured workflow to run on port 5000 with webview output for user preview
- **Database Storage**: Confirmed file-based JSON storage system is working correctly with pre-populated data
- **Investment Service**: Verified automated daily return service is running for investment calculations
- **Deployment Configuration**: Set up autoscale deployment with build and start scripts for production
- **LSP Diagnostics**: All TypeScript compilation errors resolved after dependency installation

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Technology Stack**: React with TypeScript, built using Vite.
**UI Framework**: Radix UI components with shadcn/ui for a consistent, accessible design system.
**Styling**: Tailwind CSS with custom crypto-themed variables and dark mode support.
**Routing**: Wouter for lightweight client-side routing.
**State Management**: TanStack Query for server state management and caching.
**Form Handling**: React Hook Form for efficient form validation and submission.
**Design System**: Custom crypto-themed design featuring dark gradients, blue and green accent colors, and specialized components like CryptoCard and PlanCard.

### Backend Architecture
**Framework**: Express.js with TypeScript running on Node.js, providing RESTful API endpoints.
**Authentication**: JWT-based authentication with bcrypt for password hashing. Middleware handles token validation and role-based access control (admin vs. regular users).
**API Structure**: RESTful endpoints organized by domain (e.g., `/api/auth/*`, `/api/crypto/*`, `/api/plans/*`).

### Data Storage Solutions
**Database**: File-based JSON storage system for reliable data persistence in Replit environment.
**Schema Design**: Comprehensive data model includes users, investment plans, user investments, transaction records, messaging, support tickets, audit logging, and system settings stored in structured JSON files.
**Storage Implementation**: Custom FileStorage class providing type-safe operations with automatic file management and data integrity.
**Data Files**: All data stored securely in local `database/` directory with separate files for users, plans, investments, deposits, withdrawals, messages, and settings.

### Authentication and Authorization
**User Authentication**: JWT tokens with 7-day expiration, stored in localStorage.
**Authorization Levels**: Regular users access trading features, investments, and account management. Admin users have comprehensive access to user management (view profiles, adjust balances, block/unblock, edit/delete users), referral commission configuration, system settings, investment plan management, wallet configuration, audit logs, and security monitoring.
**Security**: Password hashing with bcrypt, protected routes with middleware validation, and secure token-based session management.

## External Dependencies

### Cryptocurrency Data
- **CoinGecko API**: Real-time cryptocurrency price feeds and market data.

### UI and Development
- **Radix UI**: Component library for accessible UI primitives.
- **shadcn/ui**: Pre-styled component system built on Radix UI.
- **Tailwind CSS**: Utility-first CSS framework.
- **Replit**: Development environment integration.

### Build and Deployment
- **Vite**: Fast build tool and development server for React.
- **esbuild**: JavaScript bundler for production server builds.
- **TypeScript**: Type safety across the application stack.

### Additional Services
- **TanStack Query**: Advanced data fetching, caching, and synchronization.
- **Wouter**: Lightweight routing solution.
- **React Hook Form**: Efficient form handling with validation.
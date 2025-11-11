# Nexora

**The marketplace platform for everything** - A configurable marketplace solution supporting physical goods, digital products, on-demand food, carbon credits, and more.

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

Nexora is a comprehensive marketplace platform built with Next.js that provides a unified experience for customers, sellers, and administrators. The platform supports multiple product types and configurable workflows to adapt to various marketplace needs.

## Features

### Customer Marketplace (Public)

- **Discovery**: Browse and search products across multiple categories
- **Comparison**: Compare products side-by-side
- **Ordering**: Seamless checkout and order placement
- **Payment**: Integrated payment processing
- **Tracking**: Real-time order tracking
- **Reviews**: Product reviews and ratings
- **Returns**: Return and refund management

### Seller Console

- **Catalog Management**: Create and manage product catalogs
- **Pricing**: Dynamic pricing configuration
- **Inventory**: Stock and availability management
- **Order Handling**: Process and fulfill orders
- **Analytics**: Sales and performance insights

### Admin Console

- **Moderation**: Content and product moderation
- **Dispute Resolution**: Handle customer-seller disputes
- **QC Templates**: Quality control template management
- **Category Taxonomy**: Manage product categories
- **Certifications**: Seller and product certification management

### Authentication

- Email/password login
- OTP-based authentication
- User registration
- Role-based access control (Customer, Seller, Admin)

## Tech Stack

- **Framework**: [Next.js 16.0](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.9](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4.1](https://tailwindcss.com/)
- **UI Components**: [Shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [Tabler Icons](https://tabler.io/icons)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Shaders**: [@paper-design/shaders-react](https://github.com/paper-design/shaders-react)
- **Forms**: [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/)
- **Tables**: [TanStack Table](https://tanstack.com/table)
- **Charts**: [Recharts](https://recharts.org/)
- **Notifications**: [Sonner](https://sonner.emilkowal.ski/)

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd starhacks-3.0
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
starhacks-3.0/
├── app/
│   ├── (app)/              # Authenticated routes
│   │   ├── admin/          # Admin dashboard
│   │   ├── customer/        # Customer dashboard
│   │   ├── seller/          # Seller dashboard
│   │   ├── login/           # Login page
│   │   ├── signup/          # Signup page
│   │   └── otp/              # OTP authentication
│   ├── (website)/           # Public routes
│   │   ├── page.tsx         # Landing page
│   │   ├── marketplace/     # Public marketplace
│   │   ├── terms/           # Terms & Conditions
│   │   └── privacy/         # Privacy Policy
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/
│   ├── ui/                  # Shadcn/ui components
│   ├── landing-header.tsx   # Landing page header
│   ├── landing-footer.tsx   # Landing page footer
│   ├── hero.tsx             # Hero section
│   ├── login-form.tsx       # Login form
│   ├── signup-form.tsx      # Signup form
│   └── otp-form.tsx         # OTP form
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── public/                  # Static assets
```

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint errors
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting

## Code Quality

### Pre-commit Hooks

This project uses [Husky](https://typicode.github.io/husky/) to run pre-commit hooks that automatically format code before commits.

**Setup**: Husky is automatically initialized when you run `pnpm install` via the `prepare` script.

**What runs on commit**:

- Prettier formatting for staged files
- Automatic formatting of `.js`, `.jsx`, `.ts`, `.tsx`, `.json`, `.css`, `.scss`, `.md`, `.mdx`, `.html` files

### Code Formatting

The project uses [Prettier](https://prettier.io/) with the following configuration:

- **Import Sorting**: Automatic import sorting with `@ianvs/prettier-plugin-sort-imports`
- **Tailwind CSS**: Class sorting with `prettier-plugin-tailwindcss`
- **Single Quotes**: Enabled
- **Trailing Commas**: All
- **Print Width**: 100 characters
- **Tab Width**: 2 spaces

### Import Order

Imports are automatically sorted in the following order:

1. Node.js built-in modules
2. React
3. Next.js
4. Third-party packages
5. Internal modules (`@/components`, `@/hooks`, `@/lib`, etc.)
6. Relative imports (`./`, `../`)

## Dark Mode

Dark mode is enabled by default. The theme is configured in `app/layout.tsx` and uses CSS variables defined in `app/globals.css`.

## Deployment

The project is configured for deployment on [Vercel](https://vercel.com/):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build

## Contributing

1. Create a feature branch
2. Make your changes
3. Code will be automatically formatted on commit
4. Push and create a pull request

## License

Private - All rights reserved

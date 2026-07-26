# Nexora Marketplace

A configurable marketplace frontend prototype for exploring customer, seller,
and administrator experiences in a single Next.js application.

[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Project status

Nexora is a **UI prototype**, not a production marketplace. It demonstrates
responsive screens, navigation, role-specific dashboards, forms, tables, and
charts using local mock data.

It does not currently provide a backend, persistent authentication, real
payments, inventory management, order fulfilment, or production-ready legal
policies. Those capabilities must be implemented by anyone using the project
as the basis for a deployed service.

## Included experiences

- Public landing and marketplace pages
- Login, signup, and OTP interface flows
- Customer, seller, and administrator dashboards
- Seller analytics, tables, filters, and responsive navigation
- Dark mode and reusable shadcn/ui-based components

## Stack

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS 4 and shadcn/ui
- TanStack Table and Recharts
- React Hook Form and Zod
- Framer Motion and Paper Design shaders

## Quick start

Requires Node.js 20 or later and [pnpm](https://pnpm.io/).

```bash
git clone https://github.com/piyush-gambhir/nexora-marketplace.git
cd nexora-marketplace
pnpm install
pnpm dev
```

Open <http://localhost:3000>.

## Routes

| Route                       | Purpose                             |
| --------------------------- | ----------------------------------- |
| `/`                         | Landing page                        |
| `/marketplace/dashboard`    | Public marketplace prototype        |
| `/login`, `/signup`, `/otp` | Authentication interface prototypes |
| `/customer/dashboard`       | Customer dashboard                  |
| `/seller/dashboard`         | Seller dashboard                    |
| `/admin/dashboard`          | Administrator dashboard             |

## Commands

```bash
pnpm dev          # local development server
pnpm build        # production build
pnpm start        # serve a production build
pnpm lint         # ESLint
pnpm format:check # verify Prettier formatting
```

## Contributing

Issues and pull requests are welcome. Keep changes focused, run the build and
format checks, and explain any new mock data or product assumptions in the pull
request.

For security-sensitive reports, follow [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE) © 2026 Piyush Gambhir.

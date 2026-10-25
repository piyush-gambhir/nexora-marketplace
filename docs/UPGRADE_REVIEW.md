# Node and dependency upgrade review

Reviewed against `origin/release` at `f725f69`, preserving its security changes and typed chart hooks. This public repository contains a UI prototype with local mock marketplace data. It has no implemented authentication, checkout, payment, or marketplace backend.

## Toolchain

Local development and Docker use Node 26.12.1 with pnpm 12.15.0. Node 24.22.1 remains supported for hosting. CI checks both exact versions. `typecheck` invokes the TypeScript 7.0.2 alias explicitly after Next route generation. `typecheck:compat` invokes TypeScript 6.0.3 explicitly for the compiler API used by Next and typed ESLint tooling.

The active `next.config.mjs` now produces the standalone output required by the existing Dockerfile. Production builds no longer skip TypeScript errors. Docker installs build dependencies explicitly, installs pnpm without Corepack, excludes environment files from its context, binds all container interfaces, and runs as a nonroot user.

The OTP page now awaits Next's promised search parameters. Real browser navigation previously lost the submitted email; it now preserves it.

## Validation

On Node 24.22.1 and 26.12.1: ESLint, explicit TypeScript 7 and TypeScript 6 checks, and strict production builds passed. Frozen installation, peer validation, repository formatting, and full and production dependency audits passed with zero reported advisories.

The ARM64 Docker image built successfully. Its runtime reports Node 26.12.1, UID 100, a standalone server, and no copied environment files. With a read-only container filesystem and isolated Chromium 155, the homepage, login-to-OTP email navigation, six-digit input, seller row selection, pagination, column visibility, and admin route passed with no uncaught browser errors. External browser requests were blocked. This verifies prototype interactions only, not OTP delivery, authentication, payments, live providers, or a deployed Vercel runtime.

## Compatible holds

- ESLint 9.39.5: current Next ESLint plugins do not support ESLint 10.
- TypeScript 6.0.3 remains the API compiler; TypeScript 7.0.2 is separately checked through its explicit CLI alias.
- `@prettier/plugin-oxc` 0.1.4 satisfies the import-sort plugin's peer range; latest 0.2.3 does not.
- `prettier-plugin-packagejson` 3.0.2 and panels 4.14.8 retain the existing release-age policy. Registry publication times for the newer releases were respectively 2026-10-25T08:14:36.289Z and 2026-10-24T21:32:32.360Z; their 24-hour eligibility times are 2026-10-26T08:14:36.289Z and 2026-10-25T21:32:32.360Z. No new release-age exclusions were added.

## Evidence and release behavior

Ignored local evidence lives in `node_modules/upgrade-*`: dual-runtime check results and logs, registry snapshot, frozen-install log, full and production audits, outdated report, Docker build/runtime report, and isolated-browser results. These are local review artifacts, not portable CI evidence.

CI runs on pushes and pull requests targeting `release`. No release/publish workflow was added or invoked. No deployment or external service writes occurred.

The concrete gains are current supported tooling, explicit compiler coverage, enforced build type safety, a working standalone container, and repaired OTP navigation. Runtime performance gains were not benchmarked.

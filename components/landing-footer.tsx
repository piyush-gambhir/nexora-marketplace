'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { MeshGradient } from '@paper-design/shaders-react';
import { AnimatePresence, motion } from 'framer-motion';
import { GalleryVerticalEnd, X } from 'lucide-react';

export function LandingFooter() {
  const currentYear = new Date().getFullYear();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = useCallback(() => {
    setIsExpanded(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  useEffect(() => {
    if (isExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isExpanded]);

  return (
    <>
      <footer className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 border-t backdrop-blur-xl">
        <div className="container mx-auto px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-6 sm:gap-x-8 sm:gap-y-8 md:grid-cols-3 lg:gap-x-12 lg:gap-y-12">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1">
              <Link
                href="/"
                className="mb-4 flex cursor-pointer items-center gap-2 font-medium"
              >
                <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-4" />
                </div>
                <span className="text-lg font-semibold">Nexora</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed">
                The marketplace platform for everything. Configurable flows for physical goods,
                digital products, on-demand food, carbon credits, and more.
              </p>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="mb-3 text-sm font-semibold sm:mb-4">Product</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="/marketplace/dashboard"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Marketplace
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="mb-3 text-sm font-semibold sm:mb-4">Company</h3>
              <ul className="space-y-1.5 sm:space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleExpand}
                    className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-border/40 mt-12 flex flex-col items-center justify-between gap-4 border-t pt-8 sm:flex-row">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Nexora. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                aria-label="GitHub"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground cursor-pointer text-sm transition-colors"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Demo Modal - Same as Hero */}
      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card-footer"
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              style={{
                borderRadius: '24px',
              }}
              layout
              className="relative flex h-full w-full transform-gpu overflow-y-auto bg-[#004FE5] will-change-transform"
            >
              <motion.div
                initial={{ opacity: 0, scale: 2 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                layout={false}
                transition={{ duration: 0.15, delay: 0.05 }}
                className="pointer-events-none absolute inset-0 h-full overflow-hidden"
                style={{
                  borderRadius: '24px',
                }}
              >
                <MeshGradient
                  speed={0.8}
                  colors={['#2452F1', '#022474', '#163DB9', '#0B1D99']}
                  distortion={0.7}
                  swirl={0.08}
                  grainMixer={0}
                  grainOverlay={0}
                  className="sticky inset-0 top-0"
                  style={{ height: '100%', width: '100%', willChange: 'transform' }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.4 }}
                className="relative z-10 mx-auto flex h-full w-full max-w-[1100px] flex-col items-center gap-8 p-6 sm:p-10 lg:flex-row lg:gap-16 lg:p-16"
              >
                <div className="flex w-full flex-1 flex-col justify-center space-y-3">
                  <h2 className="text-3xl leading-none font-medium tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl">
                    Get started with Nexora
                  </h2>

                  <div className="space-y-4 pt-4 sm:space-y-6">
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                        <svg
                          className="h-5 w-5 text-white sm:h-6 sm:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm leading-[150%] text-white sm:text-base">
                          Configurable flows for physical goods, digital products, on-demand food,
                          carbon credits, and more.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                        <svg
                          className="h-5 w-5 text-white sm:h-6 sm:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm leading-[150%] text-white sm:text-base">
                          Complete seller console for catalog, pricing, inventory, and order
                          management.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/10 sm:h-12 sm:w-12">
                        <svg
                          className="h-5 w-5 text-white sm:h-6 sm:w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm leading-[150%] text-white sm:text-base">
                          Powerful admin tools for moderation, disputes, QC templates, and
                          certifications.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/20 pt-6 sm:mt-8 sm:pt-8">
                    <p className="mb-4 text-lg leading-[150%] text-white sm:text-xl lg:text-2xl">
                      Nexora has transformed how we manage our marketplace. The configurable flows
                      make it perfect for our diverse product catalog.
                    </p>
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 sm:h-12 sm:w-12">
                        <span className="text-lg font-semibold text-white">SC</span>
                      </div>
                      <div>
                        <p className="text-base text-white sm:text-lg lg:text-xl">Sarah Chen</p>
                        <p className="text-sm text-white/70 sm:text-base">Marketplace Director</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex-1">
                  <form className="space-y-4 sm:space-y-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="footer-name"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="footer-name"
                        name="name"
                        className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    {/* Work Email Field */}
                    <div>
                      <label
                        htmlFor="footer-email"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        id="footer-email"
                        name="email"
                        className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex-1">
                        <label
                          htmlFor="footer-website"
                          className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                        >
                          COMPANY WEBSITE
                        </label>
                        <input
                          type="url"
                          id="footer-website"
                          name="website"
                          className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                        />
                      </div>
                      <div className="w-full sm:w-32">
                        <label
                          htmlFor="footer-company-size"
                          className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                        >
                          COMPANY SIZE
                        </label>
                        <select
                          id="footer-company-size"
                          name="company-size"
                          className="h-10 w-full cursor-pointer appearance-none rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all focus:ring-2 focus:ring-white/20 focus:outline-none"
                          style={{
                            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='white' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'right 0.75rem center',
                            backgroundSize: '1rem',
                          }}
                        >
                          <option value="1-10">1-10</option>
                          <option value="11-50">11-50</option>
                          <option value="51-200">51-200</option>
                          <option value="201-500">201-500</option>
                          <option value="501+">501+</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label
                        htmlFor="footer-message"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        ANYTHING ELSE?
                      </label>
                      <textarea
                        id="footer-message"
                        name="message"
                        rows={3}
                        className="w-full resize-none rounded-lg border-0 bg-[#001F63] px-4 py-3 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="h-10 w-full cursor-pointer rounded-full bg-white px-8 py-2.5 font-medium tracking-[-0.03em] text-[#0041C1] transition-colors hover:bg-white/90"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-transparent text-white transition-colors hover:bg-white/10"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

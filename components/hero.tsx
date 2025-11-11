'use client';

import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';

import { GodRays, MeshGradient } from '@paper-design/shaders-react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

export default function Hero() {
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
      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12 pt-24 sm:px-6 sm:py-20 sm:pt-28">
        {/* GodRays Background */}
        <div className="absolute inset-0 will-change-transform">
          <GodRays
            colorBack="#00000000"
            colors={['#FFFFFF6E', '#F3F3F3F0', '#8A8A8A', '#989898']}
            colorBloom="#FFFFFF"
            offsetX={0.85}
            offsetY={-1}
            intensity={0.8}
            spotty={0.4}
            midSize={10}
            midIntensity={0}
            density={0.1}
            bloom={0.12}
            speed={0.8}
            scale={1.5}
            style={{
              height: '100%',
              width: '100%',
              position: 'absolute',
              top: 0,
              left: 0,
              willChange: 'transform',
            }}
          />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-4 text-center sm:gap-6">
          <h1 className="text-foreground max-w-3xl text-4xl leading-[90%] font-normal tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">
            The marketplace platform for everything
          </h1>

          <p className="text-foreground/90 max-w-2xl px-4 text-base leading-[160%] sm:text-lg md:text-xl">
            One platform for physical goods, digital products, on-demand food, carbon credits, and
            more. Discover, compare, order, and track—all in one seamless experience.
          </p>

          <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
            <AnimatePresence initial={false}>
              {!isExpanded && (
                <motion.div className="relative inline-block">
                  <motion.div
                    style={{
                      borderRadius: '100px',
                    }}
                    layout
                    layoutId="cta-card"
                    className="absolute inset-0 transform-gpu items-center justify-center bg-[#004FE5] will-change-transform"
                  ></motion.div>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    layout={false}
                    onClick={handleExpand}
                    className="font-regular relative h-15 px-6 py-3 text-lg tracking-[-0.01em] text-[#E3E3E3] sm:px-8 sm:text-xl"
                  >
                    Request a demo
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Link
                href="/marketplace/dashboard"
                className="font-regular text-foreground border-border hover:bg-accent inline-block cursor-pointer rounded-full border px-6 py-3 text-lg transition-colors sm:px-8 sm:text-xl"
              >
                Browse Marketplace
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-2">
            <motion.div
              layoutId="cta-card"
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
                        htmlFor="name"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        FULL NAME *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    {/* Work Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        WORK EMAIL *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="phone"
                        className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row">
                      <div className="flex-1">
                        <label
                          htmlFor="website"
                          className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                        >
                          COMPANY WEBSITE
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          className="h-10 w-full rounded-lg border-0 bg-[#001F63] px-4 py-2.5 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                        />
                      </div>
                      <div className="w-full sm:w-32">
                        <label
                          htmlFor="company-size"
                          className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                        >
                          COMPANY SIZE
                        </label>
                        <select
                          id="company-size"
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
                        htmlFor="message"
                        className="mb-2 block font-mono text-[10px] font-normal tracking-[0.5px] text-white uppercase"
                      >
                        ANYTHING ELSE?
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        className="w-full resize-none rounded-lg border-0 bg-[#001F63] px-4 py-3 text-sm text-white transition-all placeholder:text-white/50 focus:ring-2 focus:ring-white/20 focus:outline-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="h-10 w-full rounded-full bg-white px-8 py-2.5 font-medium tracking-[-0.03em] text-[#0041C1] transition-colors hover:bg-white/90"
                    >
                      Submit
                    </button>
                  </form>
                </div>
              </motion.div>

              {/* Close Button */}
              <motion.button
                onClick={handleClose}
                className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white transition-colors hover:bg-white/10"
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

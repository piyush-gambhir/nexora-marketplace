'use client';

import { useState } from 'react';
import Link from 'next/link';

import { GalleryVerticalEnd, Menu, Search, ShoppingCart, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function LandingHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 z-50 w-full max-w-7xl -translate-x-1/2 px-4 sm:px-6 lg:px-8">
      <div className="border-border/40 bg-background/80 supports-[backdrop-filter]:bg-background/60 flex h-16 items-center justify-between rounded-2xl border px-4 shadow-lg shadow-black/5 backdrop-blur-xl sm:px-6">
        <Link
          href="/"
          className="flex cursor-pointer items-center gap-2 font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          <span className="text-lg font-semibold">Nexora</span>
        </Link>

        {/* Search Bar - Desktop */}
        <div className="mx-4 hidden max-w-xs flex-1 lg:flex">
          <div className="relative w-full">
            <Search className="text-muted-foreground absolute top-1/2 left-2.5 size-4 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search products..."
              className="border-border bg-background/50 focus:ring-ring w-full rounded-lg border py-1.5 pr-3 pl-9 text-sm focus:ring-2 focus:ring-offset-2 focus:outline-none"
            />
          </div>
        </div>

        <nav className="hidden items-center gap-6 md:flex">
          <Link
            href="#features"
            className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
          >
            Features
          </Link>
          <Link
            href="#pricing"
            className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="/marketplace/dashboard"
            className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
          >
            Marketplace
          </Link>
          <Link
            href="/seller/dashboard"
            className="text-muted-foreground hover:text-foreground cursor-pointer text-sm font-medium transition-colors"
          >
            Become a Seller
          </Link>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Shopping Cart - Desktop */}
          <Button
            variant="ghost"
            size="icon"
            className="hidden sm:flex"
            asChild
          >
            <Link
              href="/cart"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="size-5" />
            </Link>
          </Button>

          {/* User Menu - Desktop */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="hidden sm:flex"
              >
                <svg
                  className="size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="w-48"
            >
              <DropdownMenuItem asChild>
                <Link href="/customer/dashboard">My Account</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/orders">My Orders</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/seller/dashboard">Seller Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/login">Sign In</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/signup">Sign Up</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Auth Buttons - Desktop */}
          <div className="hidden items-center gap-2 sm:flex">
            <Button
              variant="ghost"
              asChild
            >
              <Link href="/login">Sign in</Link>
            </Button>
            <Button asChild>
              <Link href="/signup">Get started</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-border/40 bg-background/95 mt-2 space-y-3 rounded-2xl border p-4 backdrop-blur-xl md:hidden">
          <div className="relative mb-4">
            <Search className="text-muted-foreground absolute top-1/2 left-3 size-4 -translate-y-1/2" />
            <input
              type="search"
              placeholder="Search products..."
              className="border-border bg-background/50 focus:ring-ring w-full rounded-lg border py-2 pr-4 pl-10 text-sm focus:ring-2 focus:outline-none"
            />
          </div>
          <nav className="flex flex-col gap-3">
            <Link
              href="#features"
              className="text-muted-foreground hover:text-foreground cursor-pointer py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-muted-foreground hover:text-foreground cursor-pointer py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/marketplace/dashboard"
              className="text-muted-foreground hover:text-foreground cursor-pointer py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Marketplace
            </Link>
            <Link
              href="/seller/dashboard"
              className="text-muted-foreground hover:text-foreground cursor-pointer py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              Become a Seller
            </Link>
            <Link
              href="/cart"
              className="text-muted-foreground hover:text-foreground flex cursor-pointer items-center gap-2 py-2 text-sm font-medium"
              onClick={() => setMobileMenuOpen(false)}
            >
              <ShoppingCart className="size-4" />
              Shopping Cart
            </Link>
            <div className="border-border/40 flex flex-col gap-2 border-t pt-2">
              <Button
                variant="ghost"
                asChild
                className="w-full justify-start"
              >
                <Link
                  href="/login"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
              </Button>
              <Button
                asChild
                className="w-full"
              >
                <Link
                  href="/signup"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get started
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X, User } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Row 1: logo + account/take assessment */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10">
        <Link href="/" className="flex shrink-0 items-center">
          <Image
            src="/tobams-logo.png"
            alt="Tobams Group"
            width={166}
            height={64}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-plum-700 py-2 pl-2 pr-4 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-plum-100/40">
              <User className="h-4 w-4" aria-hidden="true" />
            </span>
            Account
            <ChevronDown className="h-4 w-4" aria-hidden="true" />
          </button>
          <Link
            href="#take-assessment"
            className="rounded-full bg-coral-500 px-5 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Take Assessment
          </Link>
        </div>

        {/* Mobile/tablet: hamburger toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav-panel"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-900 lg:hidden"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" aria-hidden="true" />
          ) : (
            <Menu className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Row 2: primary nav links (desktop/tablet only) */}
      <nav
        aria-label="Primary"
        className="hidden border-t border-black/5 lg:block"
      >
        <ul className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-8 gap-y-2 px-6 py-4 lg:px-10">
          {navLinks.map((link, index) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className={`flex items-center gap-1 whitespace-nowrap font-sans text-[15px] transition-colors hover:text-plum-700 ${
                  index === 0
                    ? "border-b-2 border-plum-700 pb-1 text-plum-700"
                    : "text-ink-900/80"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <nav
          id="mobile-nav-panel"
          aria-label="Primary"
          className="border-t border-black/5 lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-between gap-1 py-2.5 font-sans text-[15px] text-ink-900/80 transition-colors hover:text-plum-700"
                >
                  {link.label}
                  {link.hasDropdown && (
                    <ChevronDown className="h-4 w-4" aria-hidden="true" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-3 border-t border-black/5 px-6 py-4">
            <button
              type="button"
              className="flex items-center justify-center gap-2 rounded-full bg-plum-700 py-2.5 pl-2 pr-4 font-sans text-sm font-medium text-white"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-plum-100/40">
                <User className="h-4 w-4" aria-hidden="true" />
              </span>
              Account
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
            <Link
              href="#take-assessment"
              onClick={() => setMobileOpen(false)}
              className="rounded-full bg-coral-500 px-5 py-3 text-center font-sans text-sm font-medium text-white"
            >
              Take Assessment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

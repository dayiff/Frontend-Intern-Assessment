import Link from "next/link";
import { ChevronDown, User } from "lucide-react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const primaryLinks = navLinks.slice(0, -1);
  const bookConsultation = navLinks[navLinks.length - 1];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <nav
        aria-label="Primary"
        className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4 lg:px-10"
      >
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <LogoMark />
          <span className="leading-4">
            <span className="block font-sans text-lg font-semibold tracking-wide text-coral-500">
              TOBAMS
            </span>
            <span className="block font-sans text-lg font-bold tracking-wide text-plum-600">
              GROUP
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-7 xl:flex">
          {primaryLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="flex items-center gap-1 font-sans text-[15px] text-ink-900/80 transition-colors hover:text-plum-700"
              >
                {link.label}
                {link.hasDropdown && (
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                )}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={bookConsultation.href}
            className="font-sans text-[15px] text-ink-900/80 transition-colors hover:text-plum-700"
          >
            {bookConsultation.label}
          </Link>
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

        {/* Simple mobile CTA — full nav collapses to the essentials below xl */}
        <Link
          href="#take-assessment"
          className="rounded-full bg-coral-500 px-4 py-2.5 font-sans text-sm font-medium text-white lg:hidden"
        >
          Take Assessment
        </Link>
      </nav>
    </header>
  );
}

function LogoMark() {
  return (
    <svg
      width="40"
      height="36"
      viewBox="0 0 40 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 2C3.5 2 0 6 0 11c0 4 2.5 7 6 8.5L10 24l4-4.5C17 18 18.5 14.5 18.5 11c0-5-3.8-9-8.5-9H8Z"
        fill="#571244"
      />
      <path
        d="M31.5 2c-4.5 0-8 4-8 9 0 4 2.5 7 6 8.5l4 4.5 4-4.5c3.5-1.5 5-5 5-8.5 0-5-3.8-9-8.5-9h-2.5Z"
        fill="#571244"
        transform="translate(-9.5 0)"
      />
      <circle cx="9" cy="12" r="3.5" fill="#EF4353" />
      <circle cx="22" cy="12" r="3.5" fill="#EF4353" />
      <path
        d="M9 20c2.5 3 6 5.5 6.5 5.5S19.5 23 22 20"
        stroke="#571244"
        strokeWidth="2.4"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

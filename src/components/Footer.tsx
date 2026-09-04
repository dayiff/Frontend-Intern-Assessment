import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { LinkedinIcon, InstagramIcon, XIcon } from "./SocialIcons";
import { footerColumns } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-plum-950 text-white">
      <div className="border-b border-white/10 bg-plum-900">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left lg:px-10">
          <div>
            <p className="font-body text-sm text-white/70">
              Ready to be a part of something extraordinary?
            </p>
            <p className="font-sans text-xl font-semibold text-white sm:text-2xl">
              Let&apos;s work together to create a difference
            </p>
          </div>
          <Link
            href="#contact"
            className="shrink-0 rounded-md bg-plum-700 px-6 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Get In Touch
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <span className="flex items-center gap-2">
            <span className="font-sans text-lg font-semibold tracking-wide text-coral-500">
              TOBAMS
            </span>
            <span className="font-sans text-lg font-bold tracking-wide text-white">
              GROUP
            </span>
          </span>
          <p className="mt-4 max-w-xs font-body text-sm leading-6 text-white/65">
            Tobams Group is an innovative consultancy firm reshaping the
            future of tech talent development in Africa, specializing in
            talent acquisition, internships, and skill development with a
            global perspective.
          </p>
          <div className="mt-5 flex items-center gap-3">
            {[
              { Icon: LinkedinIcon, label: "LinkedIn" },
              { Icon: InstagramIcon, label: "Instagram" },
              { Icon: XIcon, label: "X (Twitter)" },
            ].map(({ Icon, label }) => (
              <Link
                key={label}
                href="#"
                aria-label={`Tobams Group on ${label}`}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-coral-500"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </Link>
            ))}
          </div>
        </div>

        {footerColumns.map((column) => (
          <nav key={column.heading} aria-label={column.heading}>
            <h3 className="font-sans text-sm font-semibold text-white">
              {column.heading}
            </h3>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link}>
                  <Link
                    href="#"
                    className="font-body text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:grid-cols-3 lg:px-10">
          <div className="rounded-xl bg-plum-900 p-5">
            <h3 className="font-sans text-sm font-semibold text-white">
              Registered Offices
            </h3>
            <p className="mt-3 font-sans text-sm font-semibold text-coral-300">
              United Kingdom
            </p>
            <p className="mt-1 font-body text-sm leading-6 text-white/65">
              07451196 (Registered by Company House)
              <br />
              Vine Cottages, 215 North Street, Romford, Essex, United
              Kingdom, RM1 4QA
            </p>
          </div>
          <div className="rounded-xl bg-plum-900 p-5">
            <p className="font-sans text-sm font-semibold text-coral-300">
              Nigeria
            </p>
            <p className="mt-1 font-body text-sm leading-6 text-white/65">
              RC 1048722 (Registered by the Corporate Affairs Commission)
              <br />
              4, Muaz Close, Angwar-Rimi
            </p>
          </div>
          <div className="rounded-xl bg-plum-900 p-5">
            <h3 className="font-sans text-sm font-semibold text-white">
              Contact Information
            </h3>
            <ul className="mt-3 flex flex-col gap-2">
              <li className="flex items-center gap-2 font-body text-sm text-white/65">
                <Mail className="h-4 w-4 text-coral-500" aria-hidden="true" />
                <a href="mailto:theteam@tobamsgroup.com" className="hover:text-white">
                  theteam@tobamsgroup.com
                </a>
              </li>
              <li className="flex items-center gap-2 font-body text-sm text-white/65">
                <Phone className="h-4 w-4 text-coral-500" aria-hidden="true" />
                <a href="tel:+447886600748" className="hover:text-white">
                  +447886600748
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-center sm:flex-row sm:text-left lg:px-10">
          <p className="font-body text-xs text-white/50">
            Copyright &copy; Tobams Group, 2024. All rights reserved.
          </p>
          <ul className="flex items-center gap-6">
            {["Terms and Conditions", "Privacy Policy", "Cookies Policy"].map(
              (item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="font-body text-xs text-white/60 underline-offset-2 hover:text-white hover:underline"
                  >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}

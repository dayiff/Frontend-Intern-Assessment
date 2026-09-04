"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const pageCount = Math.ceil(testimonials.length / perPage);

  const goPrev = () => setPage((p) => (p - 1 + pageCount) % pageCount);
  const goNext = () => setPage((p) => (p + 1) % pageCount);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <h2 className="text-center font-sans text-3xl font-semibold text-ink-900 sm:text-4xl">
          Testimonials
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-lg border-l-4 border-coral-500 bg-white p-6"
            >
              <figcaption className="flex items-center gap-3">
                <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar}
                    alt={`Portrait of ${testimonial.name}`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink-900">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-xs text-ink-900/60">
                    {testimonial.role}
                  </p>
                </div>
              </figcaption>
              <blockquote className="mt-4 font-body text-[15px] leading-6 text-ink-900/75">
                {testimonial.quote}
              </blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-8 flex justify-end gap-3">
          <button
            type="button"
            onClick={goPrev}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-coral-500 transition-colors hover:bg-coral-500 hover:text-white"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-pink-100 text-coral-500 transition-colors hover:bg-coral-500 hover:text-white"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Zap } from "lucide-react";
import { transformationHubPoints } from "@/lib/data";

export default function TransformationHub() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="rounded-3xl bg-pink-100 p-6 sm:p-10 lg:p-14">
          <p className="font-display text-lg italic text-plum-600/90">
            Learning With Our CEO:
          </p>
          <h2 className="mt-1 font-display text-3xl italic text-plum-700 sm:text-4xl">
            Transformation Hub With Jite Newton
          </h2>
          <p className="mt-5 max-w-3xl font-body text-[15px] leading-7 text-ink-900/75">
            Transformation Hub with Jite Newton is a flagship webinar series
            curated by the CEO, Dr. Jite Newton. Designed to elevate career
            trajectories and leadership capabilities, this exclusive event
            offers invaluable insights and strategies for personal and
            professional growth. Whether you&apos;re seeking to advance your
            career or enhance your leadership skills, the Transformation Hub
            provides a transformative learning experience to unlock your
            full potential and drive success in your endeavours.
          </p>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-12">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=900&h=675&fit=crop&q=80"
                alt="A woman lit by blue digital display screens, representing the Transformation Hub webinar series"
                fill
                sizes="(min-width: 1024px) 500px, 90vw"
                className="object-cover"
              />
            </div>

            <div>
              <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {transformationHubPoints.map((point) => (
                  <li key={point}>
                    <div className="flex items-center gap-3 rounded-lg bg-white px-5 py-4">
                      <Zap
                        className="h-4 w-4 shrink-0 text-plum-700"
                        fill="currentColor"
                        aria-hidden="true"
                      />
                      <span className="font-body text-[15px] text-ink-900/85">
                        {point}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
              <Link
                href="#transformation-hub-learn-more"
                className="mt-6 inline-flex items-center gap-2 rounded-md bg-plum-700 px-5 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
              >
                Learn More
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

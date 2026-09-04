import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { lmsCourses } from "@/lib/data";

export default function LearningManagementSystem() {
  return (
    <section id="tg-academy" className="bg-plum-50">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-full">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop&q=80"
            alt="Two Tobams Group facilitators, a man and a woman, smiling in a bright office"
            fill
            sizes="(min-width: 1024px) 448px, 90vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="font-sans text-3xl font-semibold text-plum-600 sm:text-4xl">
            Learning Management System
          </h2>
          <div className="mt-6 rounded-2xl bg-plum-100 p-6 sm:p-8">
            <p className="font-body text-[15px] leading-7 text-ink-900/80">
              TG Academy is a hub of knowledge and skill-building resources
              designed to empower tech talents on their learning journey.
              From technical courses covering the latest programming
              languages and development frameworks to soft skills training in
              leadership, effective communication and project management, TG
              Academy offers a wide range of courses to cater to diverse
              learning needs. With accessible and interactive learning
              materials, individuals can enhance their skills and stay ahead
              in today&apos;s competitive tech landscape.
            </p>
            <p className="mt-6 font-sans text-[15px] font-semibold text-plum-700">
              Some of our courses include:
            </p>
            <ul className="mt-3 grid grid-cols-1 gap-x-8 gap-y-2 sm:grid-cols-3">
              {lmsCourses.map((course) => (
                <li
                  key={course}
                  className="flex items-start gap-2 font-body text-[15px] text-ink-900/80"
                >
                  <span
                    className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-ink-900/70"
                    aria-hidden="true"
                  />
                  {course}
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="#tg-academy-learn-more"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-plum-700 px-5 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Learn More
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

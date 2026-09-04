import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { consultantFeatures } from "@/lib/data";

export default function TrainingConsultant() {
  return (
    <section className="bg-plum-50">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        <h2 className="font-sans text-3xl font-semibold text-plum-600 sm:text-4xl">
          Training The Consultant
        </h2>
        <p className="mt-3 font-sans text-[15px] font-semibold text-plum-700">
          Maximise Your Potential as a Certified Trainer:
        </p>
        <p className="mt-4 max-w-3xl font-body text-[15px] leading-7 text-ink-900/70">
          With the help of our Training Consultants program, take a
          revolutionary step toward becoming a distinguished certified
          training consultant. Learn from professionals in the field, immerse
          yourself in a thorough curriculum, and hone your training methods
          through interactive workshops. Participating in our program will
          enable you to gain expertise in diverse courses while also
          developing the abilities to mentor and encourage others in their
          career advancement.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-8 rounded-2xl bg-plum-700 p-6 sm:grid-cols-2 sm:p-10">
          {consultantFeatures.map((feature) => (
            <div key={feature.title}>
              <h3 className="font-sans text-base font-semibold text-white">
                {feature.title}
              </h3>
              <p className="mt-2 font-body text-[15px] leading-6 text-white/80">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="#training-consultant-learn-more"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-plum-700 px-5 py-3 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Learn More
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}

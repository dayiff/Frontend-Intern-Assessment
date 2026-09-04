import Image from "next/image";
import { BoltList } from "./IconListItem";
import {
  corporateTrainingPoints,
  personalisedTrainingPoints,
} from "@/lib/data";

export default function TrainingPrograms() {
  return (
    <section id="what-we-do" className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-24">
        {/* Corporate Trainings — text left, image right */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-sans text-3xl font-semibold text-ink-900 sm:text-4xl">
              Corporate Trainings
            </h2>
            <p className="mt-4 max-w-lg font-body text-[15px] leading-7 text-ink-900/70">
              Empower your team with our customised Corporate Training
              programs designed to address the unique needs and objectives
              of your organisation. Our expert facilitators work closely
              with your team to deliver tailored learning experiences that
              align with your company&apos;s goals and values.
            </p>
            <BoltList items={corporateTrainingPoints} className="mt-6" />
          </div>
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl [clip-path:polygon(6%_0,100%_0,100%_100%,0_100%,0_6%)]">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=900&h=675&fit=crop&q=80"
              alt="A facilitator leading a corporate training session in front of a data dashboard"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Personalised Individual Training — image left, text right */}
        <div className="mt-20 grid grid-cols-1 items-center gap-10 lg:mt-28 lg:grid-cols-2 lg:gap-16">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl lg:order-1">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&h=675&fit=crop&q=80"
              alt="A woman attentively participating in a small-group individual training session"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>
          <div className="lg:order-2">
            <h2 className="font-sans text-3xl font-semibold text-ink-900 sm:text-4xl">
              Personalised Individual Training
            </h2>
            <p className="mt-4 max-w-lg font-body text-[15px] leading-7 text-ink-900/70">
              Begin a journey of lifelong learning and professional
              development with Tobams Group&apos;s diverse range of training
              programs for individuals. From technical skills mastery to
              soft skills enhancement, our courses cover a wide spectrum of
              topics to meet the evolving needs of today&apos;s
              professionals.
            </p>
            <BoltList items={personalisedTrainingPoints} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}

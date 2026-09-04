import Image from "next/image";
import { BoltList } from "./IconListItem";
import { capacityDevelopmentPoints } from "@/lib/data";

export default function CapacityDevelopment() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pb-20 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:pb-24">
        <div>
          <h2 className="font-sans text-3xl font-semibold text-ink-900 sm:text-4xl">
            Capacity Development
          </h2>
          <p className="mt-4 max-w-lg font-body text-[15px] leading-7 text-ink-900/70">
            At Tobams Group, we empower individuals and organizations through
            tailored training programs, expert-led workshops, and
            personalized mentorship. We are committed to your success and
            growth. We are dedicated to providing a comprehensive suite of
            benefits designed to foster your development and success:
          </p>
          <BoltList items={capacityDevelopmentPoints} className="mt-6" />
        </div>
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
          <Image
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=900&h=675&fit=crop&q=80"
            alt="A mentor pointing at a whiteboard covered in charts while colleagues take notes"
            fill
            sizes="(min-width: 1024px) 500px, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

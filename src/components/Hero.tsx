import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-plum-950">
      <Image
        src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1600&h=900&fit=crop&q=80"
        alt="A professional reviewing data visualizations on a tablet, illustrating hands-on technical training"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[70%_center] opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/60" />

      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-28 text-center sm:py-36">
        <span className="rounded-full border border-white/25 bg-white/10 px-5 py-2 font-sans text-xs font-medium tracking-wide text-white">
          WHAT WE DO
        </span>
        <h1 className="mt-6 font-sans text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
          Training and Development
        </h1>
        <p className="mt-6 max-w-2xl text-balance text-base text-white/85 sm:text-lg">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <Link
          href="#book-a-consultation"
          className="mt-8 rounded-md bg-plum-700 px-6 py-3.5 font-sans text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          Book a Consultation
        </Link>
      </div>
    </section>
  );
}

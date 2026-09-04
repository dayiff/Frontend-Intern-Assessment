import Link from "next/link";

export default function CtaBanner() {
  return (
    <section id="book-a-consultation" className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-10">
        <div className="rounded-2xl bg-plum-700 px-6 py-12 text-center sm:px-12">
          <p className="font-sans text-lg font-medium text-white sm:text-xl">
            Want to accelerate professional growth and development at your
            organisation?
          </p>
          <p className="font-sans text-lg font-medium text-white sm:text-xl">
            See how we can help.
          </p>
          <Link
            href="#contact"
            className="mt-6 inline-block rounded-md bg-white px-6 py-3 font-sans text-sm font-medium text-plum-700 transition-opacity hover:opacity-90"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}

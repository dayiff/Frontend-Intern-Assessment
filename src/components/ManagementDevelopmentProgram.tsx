import Image from "next/image";
import { Zap } from "lucide-react";
import { managementProgramPoints } from "@/lib/data";

export default function ManagementDevelopmentProgram() {
  return (
    <section className="bg-neutral-50">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid grid-cols-1 items-center gap-10 rounded-3xl bg-plum-850 p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&h=675&fit=crop&q=80"
              alt="Three colleagues reviewing notes together on a tablet in a bright hallway"
              fill
              sizes="(min-width: 1024px) 500px, 90vw"
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="font-sans text-3xl font-semibold text-white sm:text-4xl">
              Management Development Program
            </h2>
            <p className="mt-5 font-body text-[15px] leading-7 text-white/80">
              Tobams Group offers a comprehensive Management Development
              Program designed to equip corporate organisations with the
              high-performing leaders they need to thrive.
            </p>
            <p className="mt-4 font-body text-[15px] leading-7 text-white/80">
              Our program includes workshops, seminars, coaching sessions,
              online courses, and experiential learning opportunities
              designed to improve leadership, strategic thinking,
              communication, and other essential managerial competencies for
              corporate organisations.
            </p>

            <ul className="mt-7 flex flex-col gap-3">
              {managementProgramPoints.map((point) => (
                <li key={point}>
                  <div className="flex items-center gap-3 rounded-lg bg-plum-300/80 px-5 py-4">
                    <Zap
                      className="h-4 w-4 shrink-0 text-white"
                      fill="currentColor"
                      aria-hidden="true"
                    />
                    <span className="font-body text-[15px] text-white">
                      {point}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Zap } from "lucide-react";
import type { ReactNode } from "react";

export function BoltList({
  items,
  className = "",
  textClassName = "text-ink-600",
  iconClassName = "text-plum-700",
}: {
  items: string[];
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}) {
  return (
    <ul className={`flex flex-col gap-3 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Zap
            className={`mt-0.5 h-4 w-4 shrink-0 ${iconClassName}`}
            fill="currentColor"
            aria-hidden="true"
          />
          <span className={`font-body text-[15px] ${textClassName}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function PillCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-lg px-5 py-4 font-body text-[15px] ${className}`}
    >
      {children}
    </div>
  );
}

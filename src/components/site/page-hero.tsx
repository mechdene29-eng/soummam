import type { ReactNode } from "react";
import { Reveal } from "./reveal";

export function PageHero({
  eyebrow,
  title,
  lead,
  image,
  alt,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  image: string;
  alt: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate flex min-h-[72vh] items-end overflow-hidden bg-ink pt-24">
      <img
        src={image}
        alt={alt}
        className="absolute inset-0 -z-10 size-full object-cover opacity-70 animate-drift"
      />
      <div className="veil absolute inset-0 -z-10" />
      <div className="shell pb-16">
        <Reveal>
          <p className="eyebrow text-sky">{eyebrow}</p>
          <h1 className="display-lg mt-5 max-w-4xl text-milk">{title}</h1>
          {lead ? (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-milk/75">{lead}</p>
          ) : null}
          {children ? <div className="mt-9 flex flex-wrap gap-3">{children}</div> : null}
        </Reveal>
      </div>
    </section>
  );
}

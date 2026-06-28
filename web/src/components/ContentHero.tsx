import Link from "next/link";
import { KnowledgeGraph } from "./KnowledgeGraph";
import { Eyebrow } from "./ui";

export function ContentHero({
  eyebrow,
  title,
  description,
  primary,
  secondary,
  visual,
}: {
  eyebrow: string;
  title: string;
  description: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  visual?: React.ReactNode;
}) {
  return (
    <section className="grid items-stretch gap-6 lg:grid-cols-[1.25fr_.9fr]">
      <div className="panel flex flex-col justify-center !p-8 lg:!p-10">
        <div>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
        <h1 className="my-4 text-[34px] font-black leading-[1.18] text-ink sm:text-[42px]">
          {title}
        </h1>
        <p className="lead max-w-2xl">{description}</p>
        {(primary || secondary) && (
          <div className="mt-7 flex flex-wrap gap-4">
            {primary && (
              <Link href={primary.href} className="btn-primary">
                {primary.label}
              </Link>
            )}
            {secondary && (
              <Link href={secondary.href} className="btn-ghost">
                {secondary.label}
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="panel flex items-center justify-center !p-5">
        {visual ?? <KnowledgeGraph compact />}
      </div>
    </section>
  );
}

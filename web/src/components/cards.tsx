import Link from "next/link";
import type { MentalModel, Bias, CaseStudy, Fallacy, SystemTool } from "@/lib/types";
import type { Locale } from "@/lib/i18n/config";
import { getDict } from "@/lib/i18n";
import { IconBadge, Tag, DifficultyDots } from "./ui";

export function ModelCard({ model, locale = "zh" }: { model: MentalModel; locale?: Locale }) {
  const t = getDict(locale);
  return (
    <Link href={`/models/${model.slug}`} className="card flex flex-col">
      <div className="mb-3 flex items-start justify-between">
        <IconBadge icon={model.icon} color={model.color} />
        <span className="text-muted">☆</span>
      </div>
      <h3 className="mb-2 text-[20px] font-extrabold text-ink">{model.title}</h3>
      <p className="mb-3 flex-1 text-[15px] leading-relaxed text-muted">{model.summary}</p>
      <div className="mb-3 space-y-1 text-[13px] text-muted">
        <div>
          <span className="font-bold text-[#46627f]">{t.modelDetail.coreQuestionLabel}</span> · {model.coreQuestion}
        </div>
      </div>
      <div className="mb-3 flex flex-wrap gap-2">
        <Tag color={model.color}>{model.category}</Tag>
        {model.useCases.slice(0, 2).map((u) => (
          <Tag key={u}>{u}</Tag>
        ))}
      </div>
      <DifficultyDots level={model.difficulty} />
    </Link>
  );
}

export function BiasCard({ bias, href }: { bias: Bias; href: string }) {
  const color = bias.isMunger ? "#7b61d1" : "#155eef";
  return (
    <Link href={href} className="card flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <IconBadge
          icon={bias.mungerNumber ?? bias.title.slice(0, 1)}
          color={color}
        />
        <span className="pill">{bias.category}</span>
      </div>
      <h3 className="mb-2 text-[19px] font-extrabold text-ink">{bias.title}</h3>
      <p className="mb-3 flex-1 text-[15px] leading-relaxed text-muted">{bias.summary}</p>
      <div className="flex flex-wrap gap-2">
        {bias.triggers.slice(0, 2).map((t) => (
          <Tag key={t} color={color}>
            {t}
          </Tag>
        ))}
      </div>
    </Link>
  );
}

export function CaseCard({ caseItem }: { caseItem: CaseStudy }) {
  return (
    <Link href={`/cases/${caseItem.slug}`} className="card flex flex-col">
      <div className="mb-3 flex items-center gap-3">
        <span className="grid h-12 w-12 place-items-center rounded-xl bg-[#edf5ff] text-2xl">
          {caseItem.logo}
        </span>
        <div className="flex flex-wrap gap-2">
          {caseItem.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </div>
      <h3 className="mb-2 text-[18px] font-extrabold leading-snug text-ink">{caseItem.title}</h3>
      <p className="mb-3 flex-1 text-[14px] leading-relaxed text-muted">{caseItem.problem}</p>
      <div className="flex flex-wrap gap-2">
        {caseItem.models.slice(0, 3).map((m) => (
          <span key={m} className="pill">
            {m}
          </span>
        ))}
      </div>
    </Link>
  );
}

export function FallacyCard({ fallacy }: { fallacy: Fallacy }) {
  return (
    <Link href={`/fallacies/${fallacy.slug}`} className="card flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <IconBadge icon="!" color="#f58a2a" />
        <span className="pill">{fallacy.category}</span>
      </div>
      <h3 className="mb-2 text-[19px] font-extrabold text-ink">{fallacy.title}</h3>
      <p className="mb-3 flex-1 text-[15px] leading-relaxed text-muted">{fallacy.summary}</p>
      <p className="rounded-lg bg-[#f7fbff] p-3 text-[13px] italic text-[#46627f]">
        “{fallacy.example}”
      </p>
    </Link>
  );
}

export function SystemToolCard({ tool }: { tool: SystemTool }) {
  return (
    <Link href={`/systems/${tool.slug}`} className="card flex flex-col">
      <div className="mb-3 flex items-center justify-between">
        <IconBadge icon="↻" color="#f58a2a" />
        <span className="pill">{tool.toolType}</span>
      </div>
      <h3 className="mb-2 text-[19px] font-extrabold text-ink">{tool.title}</h3>
      <p className="flex-1 text-[15px] leading-relaxed text-muted">{tool.summary}</p>
    </Link>
  );
}

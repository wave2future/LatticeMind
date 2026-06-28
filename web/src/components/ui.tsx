import Link from "next/link";
import type { ReactNode } from "react";

export function SectionTitle({
  title,
  link,
  linkLabel = "查看全部",
}: {
  title: string;
  link?: string;
  linkLabel?: string;
}) {
  return (
    <div className="section-title">
      <h2>{title}</h2>
      {link && (
        <Link href={link} className="section-link">
          {linkLabel} →
        </Link>
      )}
    </div>
  );
}

export function Pill({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <span className={`pill ${className}`}>{children}</span>;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow">{children}</span>;
}

export function IconBadge({
  icon,
  color = "#155eef",
  size = 46,
}: {
  icon: ReactNode;
  color?: string;
  size?: number;
}) {
  return (
    <span
      className="grid place-items-center rounded-[12px] font-black"
      style={{
        width: size,
        height: size,
        fontSize: size * 0.5,
        background: hexToTint(color),
        color,
      }}
    >
      {icon}
    </span>
  );
}

export function StepRow({
  no,
  title,
  children,
  color = "#155eef",
}: {
  no: number | string;
  title?: ReactNode;
  children?: ReactNode;
  color?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <span className="step-no" style={{ background: color }}>
        {no}
      </span>
      <div className="flex-1 pt-1">
        {title && <h3 className="m-0 text-[17px] font-extrabold text-ink">{title}</h3>}
        {children && <div className="mt-1 text-[15px] leading-relaxed text-muted">{children}</div>}
      </div>
    </div>
  );
}

export function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="mb-4 flex flex-wrap items-center gap-2 text-sm font-bold text-muted">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-2">
          {it.href ? (
            <Link href={it.href} className="hover:text-brand">
              {it.label}
            </Link>
          ) : (
            <span className="text-ink">{it.label}</span>
          )}
          {i < items.length - 1 && <span className="text-line">/</span>}
        </span>
      ))}
    </nav>
  );
}

export function Tag({ children, color }: { children: ReactNode; color?: string }) {
  return (
    <span
      className="inline-flex items-center rounded-md px-2 py-1 text-xs font-bold"
      style={{
        background: color ? hexToTint(color) : "#edf5ff",
        color: color ?? "#155eef",
      }}
    >
      {children}
    </span>
  );
}

export function DifficultyDots({ level }: { level: "入门" | "进阶" | "高阶" }) {
  const n = level === "入门" ? 1 : level === "进阶" ? 2 : 3;
  const color = level === "入门" ? "#3fa66b" : level === "进阶" ? "#155eef" : "#7b61d1";
  return (
    <span className="inline-flex items-center gap-2 text-[13px] font-bold text-muted">
      难度
      <span className="flex gap-1">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-[9px] w-[9px] rounded-full"
            style={{ background: i < n ? color : "#dbe7f7" }}
          />
        ))}
      </span>
    </span>
  );
}

export function Progress({ value }: { value: number }) {
  return (
    <div className="progress">
      <div className="bar" style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

// Light tint of a hex color for icon backgrounds.
export function hexToTint(hex: string, alpha = 0.12): string {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

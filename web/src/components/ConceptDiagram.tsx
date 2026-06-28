// Small, language-neutral schematic diagrams used to illustrate concepts on
// detail pages. Shapes only (arrows, curves, +/-, R/B) so they work in any locale.
import type { ReactNode } from "react";

export type DiagramType =
  | "reinforcing-loop"
  | "balancing-loop"
  | "exp-curve"
  | "bell-curve"
  | "value-function"
  | "anchor"
  | "iceberg"
  | "stock-flow"
  | "funnel"
  | "fork"
  | "target"
  | "tree"
  | "lever"
  | "buffer"
  | "network"
  | "reverse";

const BLUE = "#155eef";
const TEAL = "#0f9f96";
const ORANGE = "#f58a2a";
const PURPLE = "#7b61d1";
const GREEN = "#3fa66b";
const LINE = "#cbdcf2";
const INK = "#35506f";

function Arrow({ id, color }: { id: string; color: string }) {
  return (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto">
      <path d="M0,0 L6,3 L0,6 Z" fill={color} />
    </marker>
  );
}

function diagram(type: DiagramType): ReactNode {
  switch (type) {
    case "reinforcing-loop":
      return (
        <>
          <defs><Arrow id="rl" color={BLUE} /></defs>
          <path d="M70,30 A55,42 0 1 1 70,110" fill="none" stroke={BLUE} strokeWidth="3" markerEnd="url(#rl)" />
          <path d="M170,110 A55,42 0 1 1 170,30" fill="none" stroke={BLUE} strokeWidth="3" markerEnd="url(#rl)" />
          <circle cx="120" cy="70" r="22" fill={BLUE} />
          <text x="120" y="77" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff">R</text>
          <text x="50" y="74" textAnchor="middle" fontSize="20" fontWeight="900" fill={GREEN}>+</text>
          <text x="190" y="74" textAnchor="middle" fontSize="20" fontWeight="900" fill={GREEN}>+</text>
        </>
      );
    case "balancing-loop":
      return (
        <>
          <defs><Arrow id="bl" color={TEAL} /></defs>
          <path d="M70,30 A55,42 0 1 1 70,110" fill="none" stroke={TEAL} strokeWidth="3" markerEnd="url(#bl)" />
          <path d="M170,110 A55,42 0 1 1 170,30" fill="none" stroke={TEAL} strokeWidth="3" markerEnd="url(#bl)" />
          <circle cx="120" cy="70" r="22" fill={TEAL} />
          <text x="120" y="77" textAnchor="middle" fontSize="22" fontWeight="900" fill="#fff">B</text>
          <text x="50" y="74" textAnchor="middle" fontSize="22" fontWeight="900" fill={ORANGE}>+</text>
          <text x="188" y="76" textAnchor="middle" fontSize="22" fontWeight="900" fill="#d23">−</text>
        </>
      );
    case "exp-curve":
      return (
        <>
          <line x1="30" y1="115" x2="220" y2="115" stroke={LINE} strokeWidth="2" />
          <line x1="30" y1="115" x2="30" y2="20" stroke={LINE} strokeWidth="2" />
          <path d="M30,113 C120,110 165,95 210,25" fill="none" stroke={GREEN} strokeWidth="3.5" />
          <line x1="30" y1="113" x2="210" y2="60" stroke={LINE} strokeWidth="2" strokeDasharray="4 4" />
          <circle cx="210" cy="25" r="4" fill={GREEN} />
        </>
      );
    case "bell-curve":
      return (
        <>
          <line x1="20" y1="112" x2="225" y2="112" stroke={LINE} strokeWidth="2" />
          <path d="M25,112 C80,112 95,30 120,30 C145,30 160,112 220,112" fill="rgba(21,94,239,.12)" stroke={BLUE} strokeWidth="3" />
          <line x1="120" y1="112" x2="120" y2="34" stroke={BLUE} strokeWidth="2" strokeDasharray="4 4" />
        </>
      );
    case "value-function":
      return (
        <>
          <line x1="20" y1="70" x2="220" y2="70" stroke={LINE} strokeWidth="2" />
          <line x1="120" y1="15" x2="120" y2="125" stroke={LINE} strokeWidth="2" />
          <path d="M120,70 C150,55 180,48 210,44" fill="none" stroke={GREEN} strokeWidth="3" />
          <path d="M120,70 C100,92 70,108 30,118" fill="none" stroke="#d23" strokeWidth="3.5" />
          <text x="150" y="40" fontSize="13" fontWeight="800" fill={GREEN}>gain</text>
          <text x="40" y="110" fontSize="13" fontWeight="800" fill="#d23">loss</text>
        </>
      );
    case "anchor":
      return (
        <>
          <defs><Arrow id="an" color={ORANGE} /></defs>
          <line x1="20" y1="80" x2="220" y2="80" stroke={LINE} strokeWidth="3" />
          {[40, 80, 120, 160, 200].map((x) => (
            <line key={x} x1={x} y1="74" x2={x} y2="86" stroke={LINE} strokeWidth="2" />
          ))}
          <circle cx="60" cy="80" r="9" fill={ORANGE} />
          <text x="60" y="55" textAnchor="middle" fontSize="13" fontWeight="800" fill={ORANGE}>anchor</text>
          <path d="M150,45 C120,55 100,62 78,76" fill="none" stroke={ORANGE} strokeWidth="2.5" strokeDasharray="5 4" markerEnd="url(#an)" />
          <circle cx="150" cy="42" r="9" fill={INK} opacity=".4" />
        </>
      );
    case "iceberg":
      return (
        <>
          <line x1="10" y1="48" x2="230" y2="48" stroke={BLUE} strokeWidth="2" strokeDasharray="6 4" />
          <path d="M120,18 L150,48 L90,48 Z" fill={BLUE} />
          <path d="M90,48 L150,48 L175,128 L65,128 Z" fill="rgba(21,94,239,.25)" stroke={BLUE} strokeWidth="1.5" />
          {[68, 88, 108].map((y, i) => (
            <line key={y} x1="78" y1={y} x2="162" y2={y} stroke={BLUE} strokeWidth="1.5" opacity={0.5 - i * 0.1} />
          ))}
        </>
      );
    case "stock-flow":
      return (
        <>
          <defs><Arrow id="sf" color={BLUE} /></defs>
          <rect x="85" y="55" width="70" height="55" rx="4" fill="rgba(21,94,239,.12)" stroke={BLUE} strokeWidth="2.5" />
          <rect x="85" y="85" width="70" height="25" rx="0" fill="rgba(21,94,239,.3)" />
          <line x1="25" y1="70" x2="84" y2="70" stroke={GREEN} strokeWidth="3.5" markerEnd="url(#sf)" />
          <line x1="156" y1="98" x2="215" y2="98" stroke="#d23" strokeWidth="3.5" markerEnd="url(#sf)" />
        </>
      );
    case "funnel":
      return (
        <>
          <defs><Arrow id="fn" color={ORANGE} /></defs>
          <path d="M55,30 L185,30 L140,80 L140,115 L100,115 L100,80 Z" fill="rgba(245,138,42,.15)" stroke={ORANGE} strokeWidth="2.5" />
          {[45, 60, 75].map((y) => (
            <line key={y} x1="80" y1={y} x2="160" y2={y} stroke={ORANGE} strokeWidth="2" opacity=".5" />
          ))}
          <line x1="120" y1="118" x2="120" y2="135" stroke={ORANGE} strokeWidth="3" markerEnd="url(#fn)" />
        </>
      );
    case "fork":
      return (
        <>
          <defs><Arrow id="fk" color={BLUE} /></defs>
          <line x1="40" y1="70" x2="110" y2="70" stroke={BLUE} strokeWidth="3.5" />
          <line x1="110" y1="70" x2="195" y2="35" stroke={GREEN} strokeWidth="3.5" markerEnd="url(#fk)" />
          <line x1="110" y1="70" x2="195" y2="105" stroke={LINE} strokeWidth="3.5" strokeDasharray="5 4" markerEnd="url(#fk)" />
          <circle cx="110" cy="70" r="6" fill={BLUE} />
          <text x="205" y="38" fontSize="14" fontWeight="800" fill={GREEN}>✓</text>
          <text x="205" y="108" fontSize="14" fontWeight="800" fill={INK} opacity=".5">✕</text>
        </>
      );
    case "target":
      return (
        <>
          <circle cx="120" cy="70" r="50" fill="none" stroke={LINE} strokeWidth="2.5" />
          <circle cx="120" cy="70" r="32" fill="none" stroke={BLUE} strokeWidth="2.5" />
          <circle cx="120" cy="70" r="14" fill={BLUE} />
          <circle cx="120" cy="70" r="4" fill="#fff" />
        </>
      );
    case "tree":
      return (
        <>
          <defs><Arrow id="tr" color={TEAL} /></defs>
          <circle cx="40" cy="70" r="8" fill={TEAL} />
          <line x1="48" y1="66" x2="110" y2="40" stroke={TEAL} strokeWidth="2.5" markerEnd="url(#tr)" />
          <line x1="48" y1="74" x2="110" y2="100" stroke={TEAL} strokeWidth="2.5" markerEnd="url(#tr)" />
          <circle cx="118" cy="38" r="7" fill={GREEN} />
          <circle cx="118" cy="102" r="7" fill="#d23" opacity=".6" />
          <line x1="125" y1="35" x2="180" y2="22" stroke={LINE} strokeWidth="2" markerEnd="url(#tr)" />
          <line x1="125" y1="42" x2="180" y2="55" stroke={LINE} strokeWidth="2" markerEnd="url(#tr)" />
          <text x="150" y="15" fontSize="11" fontWeight="800" fill={GREEN}>P(E|H)</text>
        </>
      );
    case "lever":
      return (
        <>
          <line x1="35" y1="100" x2="205" y2="55" stroke={PURPLE} strokeWidth="4" />
          <path d="M120,82 L108,110 L132,110 Z" fill={INK} />
          <rect x="28" y="92" width="18" height="18" rx="3" fill={ORANGE} />
          <circle cx="200" cy="52" r="6" fill={PURPLE} />
          <text x="175" y="40" fontSize="12" fontWeight="800" fill={PURPLE}>small force</text>
        </>
      );
    case "buffer":
      return (
        <>
          <rect x="30" y="55" width="180" height="34" rx="4" fill="rgba(21,94,239,.1)" stroke={BLUE} strokeWidth="2" />
          <rect x="30" y="55" width="120" height="34" rx="4" fill={BLUE} />
          <rect x="150" y="55" width="60" height="34" fill="rgba(63,166,107,.25)" />
          <text x="90" y="77" textAnchor="middle" fontSize="12" fontWeight="800" fill="#fff">value</text>
          <text x="180" y="77" textAnchor="middle" fontSize="11" fontWeight="800" fill={GREEN}>buffer</text>
          <text x="180" y="48" textAnchor="middle" fontSize="11" fontWeight="800" fill={GREEN}>margin</text>
        </>
      );
    case "network":
      return (
        <>
          {[
            [60, 40], [180, 45], [45, 100], [200, 100], [120, 70], [120, 25], [120, 115],
          ].map(([x, y], i) => {
            const [cx, cy] = [120, 70];
            return <line key={`l${i}`} x1={cx} y1={cy} x2={x} y2={y} stroke={LINE} strokeWidth="2" />;
          })}
          {[
            [60, 40], [180, 45], [45, 100], [200, 100], [120, 25], [120, 115],
          ].map(([x, y], i) => (
            <circle key={`n${i}`} cx={x} cy={y} r="9" fill={BLUE} opacity=".8" />
          ))}
          <circle cx="120" cy="70" r="13" fill={BLUE} />
        </>
      );
    case "reverse":
      return (
        <>
          <defs><Arrow id="rv" color="#d23" /></defs>
          <line x1="40" y1="50" x2="200" y2="50" stroke={LINE} strokeWidth="3" markerEnd="url(#rv)" opacity=".4" />
          <line x1="200" y1="95" x2="40" y2="95" stroke="#d23" strokeWidth="3.5" markerEnd="url(#rv)" />
          <text x="120" y="38" textAnchor="middle" fontSize="11" fontWeight="800" fill={INK} opacity=".4">goal →</text>
          <text x="120" y="118" textAnchor="middle" fontSize="11" fontWeight="800" fill="#d23">← how it fails</text>
        </>
      );
    default:
      return null;
  }
}

export function ConceptDiagram({ type, caption }: { type: DiagramType; caption?: string }) {
  return (
    <figure className="rounded-xl border border-line bg-white p-3">
      <svg viewBox="0 0 240 140" className="h-auto w-full" role="img" aria-label={caption ?? type}>
        {diagram(type)}
      </svg>
      {caption && <figcaption className="mt-1 text-center text-xs text-muted">{caption}</figcaption>}
    </figure>
  );
}

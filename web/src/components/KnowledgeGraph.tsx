// Decorative three-ring knowledge graph used in the hero and content visuals.
// Pure SVG so it renders crisply and scales responsively.
import type { CSSProperties } from "react";

const ring1 = [
  { label: "多元模型", color: "#155eef", angle: 135 },
  { label: "误判心理学", color: "#0f9f96", angle: 45 },
  { label: "系统思维", color: "#6257d9", angle: 225 },
  { label: "决策清单", color: "#f58a2a", angle: 315 },
];

const ring2 = [
  { label: "数学", angle: 100 },
  { label: "心理", angle: 150 },
  { label: "经济", angle: 200 },
  { label: "工程", angle: 250 },
  { label: "生物", angle: 30 },
  { label: "历史", angle: 350 },
  { label: "金融", angle: 320 },
  { label: "管理", angle: 290 },
];

// Decorative concept chips, placed in the four empty corners so they never
// overlap the discipline ring nodes (which sit along the top/bottom center).
const chips: { label: string; style: CSSProperties }[] = [
  { label: "机会成本", style: { left: "1%", top: "3%" } },
  { label: "复利", style: { right: "1%", top: "3%" } },
  { label: "安全边际", style: { left: "1%", bottom: "3%" } },
  { label: "反馈回路", style: { right: "1%", bottom: "3%" } },
];

function polar(cx: number, cy: number, r: number, deg: number) {
  const rad = (deg * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

export function KnowledgeGraph({ compact = false }: { compact?: boolean }) {
  const W = 600;
  const H = 460;
  const cx = W / 2;
  const cy = H / 2;
  const r1 = 120;
  const r2 = 200;

  return (
    <div
      className="relative w-full overflow-hidden rounded-[30px] border border-line"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,.92), rgba(232,244,255,.72))",
        boxShadow: compact ? "none" : "0 18px 45px rgba(29, 78, 216, .12)",
      }}
    >
      <svg viewBox={`0 0 ${W} ${H}`} className="h-full w-full" role="img" aria-label="知识图谱">
        <defs>
          <radialGradient id="kgCenter" cx="50%" cy="40%" r="65%">
            <stop offset="0%" stopColor="#3f86ff" />
            <stop offset="100%" stopColor="#155eef" />
          </radialGradient>
          <pattern id="kgDots" width="22" height="22" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1.5" fill="#b5c9e8" opacity="0.5" />
          </pattern>
        </defs>
        <rect x="18" y="18" width={W - 36} height={H - 36} rx="24" fill="url(#kgDots)" />

        {/* edges center -> ring1 */}
        {ring1.map((n, i) => {
          const p = polar(cx, cy, r1, n.angle);
          return (
            <line
              key={`e1-${i}`}
              x1={cx}
              y1={cy}
              x2={p.x}
              y2={p.y}
              stroke="rgba(46,104,210,.3)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          );
        })}
        {/* edges ring1 -> ring2 */}
        {ring2.map((n, i) => {
          const p = polar(cx, cy, r2, n.angle);
          const nearest = ring1.reduce((a, b) =>
            Math.abs(((b.angle - n.angle + 540) % 360) - 180) <
            Math.abs(((a.angle - n.angle + 540) % 360) - 180)
              ? b
              : a
          );
          const q = polar(cx, cy, r1, nearest.angle);
          return (
            <line
              key={`e2-${i}`}
              x1={q.x}
              y1={q.y}
              x2={p.x}
              y2={p.y}
              stroke="rgba(46,104,210,.18)"
              strokeWidth="1.5"
            />
          );
        })}

        {/* ring2 nodes */}
        {ring2.map((n, i) => {
          const p = polar(cx, cy, r2, n.angle);
          return (
            <g key={`n2-${i}`}>
              <circle cx={p.x} cy={p.y} r="26" fill="#fff" stroke="#dbe7f7" strokeWidth="2" />
              <text
                x={p.x}
                y={p.y + 4}
                textAnchor="middle"
                fontSize="13"
                fontWeight="700"
                fill="#37516f"
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* ring1 nodes */}
        {ring1.map((n, i) => {
          const p = polar(cx, cy, r1, n.angle);
          return (
            <g key={`n1-${i}`}>
              <circle
                cx={p.x}
                cy={p.y}
                r="42"
                fill={n.color}
                stroke="rgba(255,255,255,.9)"
                strokeWidth="4"
              />
              <text
                x={p.x}
                y={p.y + 5}
                textAnchor="middle"
                fontSize="14"
                fontWeight="800"
                fill="#fff"
              >
                {n.label}
              </text>
            </g>
          );
        })}

        {/* center */}
        <circle
          cx={cx}
          cy={cy}
          r="62"
          fill="url(#kgCenter)"
          stroke="rgba(255,255,255,.9)"
          strokeWidth="5"
        />
        <text x={cx} y={cy - 6} textAnchor="middle" fontSize="19" fontWeight="900" fill="#fff">
          更好的
        </text>
        <text x={cx} y={cy + 18} textAnchor="middle" fontSize="19" fontWeight="900" fill="#fff">
          判断
        </text>
      </svg>

      {!compact && (
        <div className="pointer-events-none absolute inset-0">
          {chips.map((c) => (
            <span key={c.label} className="pill absolute shadow-soft" style={c.style}>
              {c.label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

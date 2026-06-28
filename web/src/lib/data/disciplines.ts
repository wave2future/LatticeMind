import type { Discipline } from "@/lib/types";

export const disciplines: Discipline[] = [
  { id: "1", name: "数学与统计", slug: "math", summary: "用概率、期望值与分布处理不确定性。", icon: "∑", color: "#155eef" },
  { id: "2", name: "物理与工程", slug: "physics", summary: "熵增、惯性、杠杆、瓶颈与容错。", icon: "⚙", color: "#6257d9" },
  { id: "3", name: "化学与生物", slug: "biology", summary: "活化能、催化、进化、生态位与适应。", icon: "🧬", color: "#3fa66b" },
  { id: "4", name: "经济与金融", slug: "economics", summary: "稀缺、机会成本、供需、现金流与安全边际。", icon: "$", color: "#0f9f96" },
  { id: "5", name: "心理学", slug: "psychology", summary: "动机、情绪、社会影响与认知偏差。", icon: "ψ", color: "#7b61d1" },
  { id: "6", name: "系统科学", slug: "systems", summary: "反馈回路、延迟、存量流量与杠杆点。", icon: "↻", color: "#f58a2a" },
  { id: "7", name: "商业与管理", slug: "business", summary: "护城河、网络效应、激励机制与组织。", icon: "◎", color: "#2781ca" },
  { id: "8", name: "历史与哲学", slug: "history", summary: "周期、路径依赖、第一性原理与可证伪。", icon: "⌛", color: "#94a813" },
];

export const disciplineMap = Object.fromEntries(disciplines.map((d) => [d.slug, d]));

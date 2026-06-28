import type { Locale } from "./config";

// Maps Chinese data labels (categories, scenarios, stages, risks, tags, types)
// to English. Used to localize dynamic strings stored in the content data.
const map: Record<string, string> = {
  // difficulty
  入门: "Beginner",
  进阶: "Intermediate",
  高阶: "Advanced",
  // model categories
  全部模型: "All models",
  通用思维: "General thinking",
  学科模型: "Disciplinary",
  第一性原理: "First principles",
  商业模型: "Business",
  投资模型: "Investing",
  管理模型: "Management",
  经济模型: "Economics",
  // misjudgment categories
  全部: "All",
  激励与自利: "Incentives & self-interest",
  情绪与损失: "Emotion & loss",
  社会影响: "Social influence",
  记忆与注意: "Memory & attention",
  推理与解释: "Reasoning & interpretation",
  压力与混乱: "Stress & chaos",
  多因素叠加: "Multi-factor stacking",
  // cognitive stages
  信息获取: "Information intake",
  信息解释: "Interpretation",
  价值判断: "Valuation",
  行动选择: "Action choice",
  结果复盘: "Outcome review",
  // decision risks
  看错事实: "Misreading facts",
  看错因果: "Misreading causality",
  看错概率: "Misreading probability",
  看错价值: "Misreading value",
  看错他人: "Misreading others",
  看错自己: "Misreading yourself",
  看错系统: "Misreading systems",
  // fallacy categories
  推理错误: "Reasoning errors",
  论证错误: "Argument errors",
  语言陷阱: "Language traps",
  // case scenarios / tags
  产品决策: "Product decisions",
  投资决策: "Investment decisions",
  管理决策: "Management decisions",
  创业决策: "Startup decisions",
  商业战略: "Business strategy",
  组织决策: "Organizational decisions",
  技术创新: "Tech innovation",
  系统思维: "Systems thinking",
  认知偏差: "Cognitive bias",
  心理误判: "Misjudgment",
  AI: "AI",
  // system tool types
  分析框架: "Framework",
  建模工具: "Modeling tool",
  干预策略: "Intervention",
  // discipline names
  数学与统计: "Math & statistics",
  物理与工程: "Physics & engineering",
  化学与生物: "Chemistry & biology",
  经济与金融: "Economics & finance",
  心理学: "Psychology",
  系统科学: "Systems science",
  商业与管理: "Business & management",
  历史与哲学: "History & philosophy",
};

export function term(zh: string, locale: Locale): string {
  if (locale === "zh") return zh;
  return map[zh] ?? zh;
}

export function terms(list: string[], locale: Locale): string[] {
  return list.map((x) => term(x, locale));
}

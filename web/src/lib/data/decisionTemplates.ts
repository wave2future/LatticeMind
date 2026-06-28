import type { DecisionTemplate } from "@/lib/types";

export const decisionTemplates: DecisionTemplate[] = [
  {
    slug: "product",
    title: "产品决策模板",
    scenario: "产品",
    description: "判断一个产品或功能是否值得做。",
    dimensions: [
      { dimension: "用户需求", models: "供需、痛点强度、机会成本" },
      { dimension: "市场", models: "规模、竞争、生态位" },
      { dimension: "商业", models: "LTV/CAC、分销、转换成本" },
      { dimension: "心理", models: "从众、确认偏误、过度自信" },
      { dimension: "系统", models: "增长回路、留存回路、瓶颈" },
      { dimension: "风险", models: "沉没成本、安全边际、可逆性" },
    ],
    modelChecklist: ["opportunity-cost", "expected-value", "moat", "network-effect", "bottleneck"],
    biasChecklist: ["confirmation-bias", "overconfidence", "herd-mentality", "survivorship-bias"],
    systemQuestions: ["有哪些增长与留存回路？", "当前最可能的瓶颈是什么？", "存在哪些反馈延迟？"],
    output: ["是否值得做？", "需要验证什么？", "最小实验是什么？", "什么信号说明应该停止？"],
  },
  {
    slug: "investment",
    title: "投资决策模板",
    scenario: "投资",
    description: "评估一笔投资是否值得买入。",
    dimensions: [
      { dimension: "能力圈", models: "是否真正理解" },
      { dimension: "现金流", models: "是否产生真实现金" },
      { dimension: "护城河", models: "优势是否可持续" },
      { dimension: "估值", models: "折现、安全边际" },
      { dimension: "周期", models: "均值回归、行业周期" },
      { dimension: "心理", models: "从众、锚定、损失厌恶" },
      { dimension: "风险", models: "永久损失、杠杆、流动性" },
    ],
    modelChecklist: ["circle-of-competence", "margin-of-safety", "moat", "regression-to-mean"],
    biasChecklist: ["loss-aversion", "anchoring", "herd-mentality", "overconfidence"],
    systemQuestions: ["这是周期性回归还是结构性变化？", "现金流的反馈回路是否健康？", "存在哪些尾部风险？"],
    output: ["是否在能力圈内？", "安全边际是否足够？", "什么会证明我看错了？", "最坏情况能否承受？"],
  },
  {
    slug: "management",
    title: "管理决策模板",
    scenario: "管理",
    description: "分析与解决组织和团队问题。",
    dimensions: [
      { dimension: "目标", models: "目标一致" },
      { dimension: "激励", models: "奖惩机制" },
      { dimension: "组织", models: "瓶颈、责任边界" },
      { dimension: "反馈", models: "数据、复盘、沟通" },
      { dimension: "文化", models: "信任、心理安全" },
      { dimension: "偏差", models: "权威误导、社会认同、沉默螺旋" },
      { dimension: "系统", models: "延迟、局部最优、转嫁负担" },
    ],
    modelChecklist: ["incentives", "bottleneck", "feedback-loop", "second-order-thinking"],
    biasChecklist: ["authority-bias", "social-proof", "fundamental-attribution-error", "local-optimum"],
    systemQuestions: ["真正的瓶颈在哪里？", "激励实际在奖励什么？", "存在哪些局部最优陷阱？"],
    output: ["问题是个人还是系统？", "应改变哪条激励或规则？", "杠杆点在哪里？", "如何验证改变有效？"],
  },
];

export const decisionTemplateMap = Object.fromEntries(decisionTemplates.map((t) => [t.slug, t]));

// 反误判检查清单 (PRD 7.7.2)
export const biasCheckItems = [
  { key: "激励", q: "谁从这个决定中获益？" },
  { key: "自利", q: "我是否只相信对自己有利的信息？" },
  { key: "确认", q: "我主动寻找反对证据了吗？" },
  { key: "锚定", q: "我是否被第一个数字影响？" },
  { key: "社会认同", q: "我是因为大家都在做才做吗？" },
  { key: "权威", q: "我是否过度相信某个专家或大佬？" },
  { key: "损失厌恶", q: "我是否只是为了不认输？" },
  { key: "沉没成本", q: "如果今天重新开始，我还会这样做吗？" },
  { key: "情绪", q: "我是否处于兴奋、恐惧、愤怒或焦虑中？" },
  { key: "时间", q: "这个决定是否可以延迟 24 小时？" },
  { key: "系统", q: "这个决定会改变哪些反馈回路？" },
  { key: "二阶后果", q: "这个决定一年后可能造成什么副作用？" },
];

// 多元模型扫描的学科维度输出 (PRD 7.7.1)
export const modelScanDimensions = [
  { discipline: "数学", models: "期望值、概率、样本量" },
  { discipline: "经济学", models: "机会成本、供需、支付意愿" },
  { discipline: "心理学", models: "损失厌恶、从众、确认偏误" },
  { discipline: "系统思维", models: "反馈回路、瓶颈、增长上限" },
  { discipline: "商业", models: "分销、护城河、转换成本" },
  { discipline: "风险", models: "沉没成本、过度自信、幸存者偏差" },
];

// 决策复盘结构 (PRD 7.7.4)
export const reviewQuestions = [
  "当时的判断是什么？",
  "当时依据了哪些证据？",
  "当时忽略了哪些信息？",
  "结果是什么？",
  "结果是否由运气造成？",
  "哪些模型适用？",
  "哪些偏差出现？",
  "下次如何避免？",
];

// 系统图生成器引导变量 (PRD 7.7.3)
export const systemMapVariables = [
  "新用户数", "老用户留存", "产品体验", "口碑", "广告投放",
  "CAC", "LTV", "客服响应", "功能复杂度", "团队开发速度",
];

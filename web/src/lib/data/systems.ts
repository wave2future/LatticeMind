import type { SystemTool, SystemArchetype } from "@/lib/types";

export const systemTools: SystemTool[] = [
  {
    slug: "iceberg",
    title: "冰山模型",
    toolType: "分析框架",
    summary: "从事件看到模式、结构、心智模型四个层次。",
    howToUse:
      "面对问题时，逐层下沉：发生了什么（事件）→ 是否反复出现（模式）→ 哪些规则与激励在驱动（结构）→ 人们默认相信什么（心智模型）。越往下越接近根因，干预越深层越持久。",
    layers: [
      "事件：发生了什么（看得见的表象）",
      "模式：是否反复出现的趋势",
      "结构：哪些规则、激励与反馈在驱动",
      "心智模型：人们默认相信的信念与假设",
    ],
    example:
      "客户流失（事件）→ 每季度都流失（模式）→ 续费提醒机制缺失、激励只奖拉新（结构）→ ‘增长靠拉新而非留存’的信念（心智模型）。真正的杠杆在结构与心智层。",
    relatedModels: ["feedback-loop", "incentives", "second-order-thinking"],
  },
  {
    slug: "causal-loop",
    title: "因果回路图",
    toolType: "建模工具",
    summary: "用变量与正负箭头展示增强或平衡反馈。",
    howToUse:
      "列出关键变量，用箭头连接并标注正向（同增同减）或负向（此增彼减）关系，找出闭合回路，判断它是增强回路（R）还是平衡回路（B）。",
    example:
      "用户数→口碑→新用户（增强回路 R）；新用户→获客成本→投放能力→新用户（平衡回路 B）。两条回路共同决定增长曲线的形状。",
    relatedModels: ["feedback-loop", "network-effect", "bottleneck"],
  },
  {
    slug: "stock-flow",
    title: "存量-流量图",
    toolType: "建模工具",
    summary: "理解库存、积累、延迟与流入流出。",
    howToUse:
      "区分存量（某时刻的积累，如用户总数、现金）与流量（单位时间的变化，如新增、流失）。存量由流入减流出决定，且变化往往滞后。",
    example:
      "现金（存量）= 流入（收入）− 流出（支出）。即使收入上升，若流出更快，现金仍会枯竭；存量的变化常滞后于流量的改变。",
    relatedModels: ["compounding", "delay", "bottleneck"],
  },
  {
    slug: "leverage-point",
    title: "杠杆点",
    toolType: "干预策略",
    summary: "找到低成本、高影响的干预位置。",
    howToUse:
      "在系统中，越靠近规则、目标、心智模型的干预，影响越深远。优先寻找改变结构而非修补症状的杠杆点，用最小投入撬动最大改变。",
    example:
      "与其不断处理客诉（症状），不如改变‘只考核拉新’的激励规则（杠杆点），从结构上减少流失的根源。",
    relatedModels: ["incentives", "bottleneck", "pareto-principle"],
  },
  {
    slug: "delay",
    title: "延迟分析",
    toolType: "分析框架",
    summary: "识别行动与结果之间的时间滞后。",
    howToUse:
      "标出每个因果链上的延迟，理解为何‘做了改变却没见效’。延迟会导致过度反应（剂量过猛）和震荡，需要耐心与领先指标。",
    example:
      "今天投入内容建设，三个月后才见自然流量。误以为无效而中途放弃，正是忽视延迟的典型。",
    relatedModels: ["feedback-loop", "second-order-thinking", "compounding"],
  },
  {
    slug: "bottleneck-analysis",
    title: "瓶颈分析",
    toolType: "分析框架",
    summary: "找到限制系统产出的关键环节。",
    howToUse:
      "沿流程找出当前产出的限制环节（最慢、最满、最堵的地方），集中资源扩张它；瓶颈解决后会转移，需重新定位。",
    example:
      "增长漏斗中，流量充足但激活率低——激活就是瓶颈。加大流量只会让漏得更多，扩张激活才有效。",
    relatedModels: ["bottleneck", "leverage-point", "pareto-principle"],
  },
  {
    slug: "boundary",
    title: "边界分析",
    toolType: "分析框架",
    summary: "判断哪些变量在系统内、哪些在系统外。",
    howToUse:
      "明确分析的边界：哪些因素可控（系统内）、哪些是外部环境（系统外）。边界划得太窄会漏掉关键变量，太宽会失焦。",
    example:
      "分析团队效率时，若把‘市场环境’也算进可控范围会失焦；但若忽略‘跨部门依赖’又会漏掉真正的约束。",
    relatedModels: ["circle-of-competence", "bottleneck"],
  },
  {
    slug: "feedback-strength",
    title: "反馈强度",
    toolType: "分析框架",
    summary: "评估反馈回路的强弱与主导关系。",
    howToUse:
      "同一系统中常有多条回路并存，判断当前哪条主导、强度如何，能预测系统走向，并知道强化或削弱哪条回路。",
    example:
      "增长早期增强回路主导（口碑扩散），到后期平衡回路（获客成本、市场饱和）逐渐主导，增长曲线随之趋缓。",
    relatedModels: ["feedback-loop", "network-effect", "regression-to-mean"],
  },
];

export const systemToolMap = Object.fromEntries(systemTools.map((t) => [t.slug, t]));

export const archetypes: SystemArchetype[] = [
  { slug: "fixes-that-fail", name: "饮鸩止渴", explanation: "短期解决方案缓解症状，却加重了长期问题。", scenarios: "补贴拉新、加班赶进度、借新还旧", leverage: "关注根本解而非症状解，承受短期阵痛换长期健康。" },
  { slug: "shifting-the-burden", name: "转嫁负担", explanation: "依赖外部或临时方案，逐渐削弱根本能力。", scenarios: "过度外包、依赖广告投放、依赖救火英雄", leverage: "投资根本能力建设，逐步减少对依赖项的依赖。" },
  { slug: "limits-to-growth", name: "成长上限", explanation: "增长触及资源或结构瓶颈后停滞。", scenarios: "服务器、供应链、团队能力、市场容量", leverage: "提前识别并扩张限制因素，而非一味加大增长投入。" },
  { slug: "tragedy-of-commons", name: "公地悲剧", explanation: "个体理性使用公共资源，导致整体枯竭受损。", scenarios: "价格战、环境污染、公共资源、共享带宽", leverage: "设立规则与产权，让个体成本与整体损害挂钩。" },
  { slug: "success-to-successful", name: "成功者更成功", explanation: "初始优势通过反馈不断自我放大。", scenarios: "平台流量分发、教育资源、马太效应", leverage: "为弱势方提供资源平衡，或主动打破单一赢家循环。" },
  { slug: "eroding-goals", name: "目标侵蚀", explanation: "标准不断降低以适应现实，逐渐妥协。", scenarios: "质量下降、战略妥协、KPI 注水", leverage: "锚定绝对标准，抵制‘暂时降低一点’的渐进滑坡。" },
  { slug: "accidental-adversaries", name: "意外对手", explanation: "本该合作的双方各自优化，互相伤害。", scenarios: "部门墙、渠道冲突、上下游博弈", leverage: "建立共同目标与透明沟通，看见对方的约束。" },
  { slug: "escalation", name: "恶性竞争升级", explanation: "双方不断加码以压过对方，损失共同扩大。", scenarios: "价格战、军备竞赛、广告大战", leverage: "主动打破升级循环，寻求差异化或停战协议。" },
  { slug: "fix-backfire", name: "修复反噬", explanation: "修复措施引入了新的副作用。", scenarios: "复杂流程、过度监管、补丁叠补丁", leverage: "评估修复的二阶后果，优先简单而非叠加复杂度。" },
];

export const archetypeMap = Object.fromEntries(archetypes.map((a) => [a.slug, a]));

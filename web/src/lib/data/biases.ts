import type { Bias } from "@/lib/types";

type Seed = {
  slug: string;
  title: string;
  stage: string; // 认知环节
  risk: string; // 决策风险
  summary: string;
  mechanism: string;
  triggers: string[];
  defenses: string[];
  combos: string[];
};

// 认知偏差库 (按认知环节与决策风险分类, PRD 7.5)
const seeds: Seed[] = [
  { slug: "confirmation-bias", title: "确认偏误", stage: "信息获取", risk: "看错事实", summary: "只寻找、记住支持已有观点的证据，回避反例。", mechanism: "一旦形成观点，大脑会自动偏向收集支持它的信息、忽视或贬低反对证据，制造“证据都站在我这边”的错觉。", triggers: ["已公开表态", "情绪投入高", "缺乏反对声音"], defenses: ["主动寻找反证", "请人扮演反方", "列出能推翻判断的三条证据"], combos: ["narrative-bias", "anchoring", "overconfidence"] },
  { slug: "availability-bias", title: "可得性偏差", stage: "信息获取", risk: "看错事实", summary: "越容易想起的事，越被高估其频率与重要性。", mechanism: "判断概率时，大脑用“能多容易想起例子”来代替真实统计，于是新闻报道多、印象深的事件被严重高估。", triggers: ["近期新闻", "亲身经历", "生动案例"], defenses: ["查真实基准率", "区分“好想起”与“真常见”", "用数据而非印象"], combos: ["vividness-bias", "base-rate-neglect"] },
  { slug: "selective-attention", title: "选择性注意", stage: "信息获取", risk: "看错事实", summary: "只注意到符合预期的信息，对其余视而不见。", mechanism: "注意力是稀缺资源，预期会引导我们只看见想看的，错过明显但不符合预期的信息。", triggers: ["强烈预期", "信息过载", "时间压力"], defenses: ["主动扫描被忽略的角落", "用清单检查缺失项", "让不同背景的人复核"], combos: ["confirmation-bias", "omission-blindness"] },
  { slug: "narrative-bias", title: "叙事偏差", stage: "信息解释", risk: "看错因果", summary: "偏爱连贯的故事，胜过零散但真实的事实。", mechanism: "大脑渴望因果叙事，会把随机事件编织成有意义的故事，从而高估可预测性、低估运气。", triggers: ["复盘解读", "媒体报道", "事后归因"], defenses: ["区分故事与证据", "事前记录预测", "警惕过于完美的解释"], combos: ["hindsight-bias", "illusory-causation"] },
  { slug: "illusory-causation", title: "因果错觉（相关当因果）", stage: "信息解释", risk: "看错因果", summary: "把同时出现误读为因果关系。", mechanism: "两件事相关或先后出现时，大脑倾向认定前者导致后者，忽视共同原因、巧合与反向因果。", triggers: ["数据相关", "时间先后", "想要简单解释"], defenses: ["寻找共同原因", "做对照实验", "问‘有没有第三变量’"], combos: ["narrative-bias", "survivorship-bias"] },
  { slug: "representativeness", title: "代表性启发", stage: "信息解释", risk: "看错概率", summary: "用‘像不像典型’替代真实概率判断。", mechanism: "判断某事属于某类时，人看它是否符合刻板印象，而忽略基准率，导致小概率被高估。", triggers: ["刻板印象", "生动描述", "忽视总体比例"], defenses: ["先看基准率", "警惕‘细节越多越可信’", "用概率而非相似度"], combos: ["base-rate-neglect", "conjunction-fallacy"] },
  { slug: "anchoring", title: "锚定效应", stage: "价值判断", risk: "看错价值", summary: "被初始数字或信息过度影响后续判断。", mechanism: "第一个出现的数字成为参照锚，即使无关，估计也会向它靠拢。", triggers: ["首个报价", "初始数据", "谈判开价"], defenses: ["多锚点独立估计", "先自己估再看锚", "质疑锚的依据"], combos: ["contrast-effect", "confirmation-bias"] },
  { slug: "contrast-effect", title: "对比效应", stage: "价值判断", risk: "看错价值", summary: "判断受前后参照物影响，而非对象本身。", mechanism: "大脑用相对而非绝对衡量价值，因此商家用高价陪衬、谈判用极端开价来操纵感知。", triggers: ["先贵后便宜", "极端参照", "消费升级"], defenses: ["看绝对值", "去掉参照物再判断", "警惕‘相比之下’"], combos: ["anchoring", "framing-effect"] },
  { slug: "framing-effect", title: "框架效应", stage: "价值判断", risk: "看错价值", summary: "同样的事实，表述方式不同会改变选择。", mechanism: "‘九成存活’与‘一成死亡’含义相同，但前者更易被接受——措辞框架直接影响决策。", triggers: ["正负措辞", "得失表述", "默认选项"], defenses: ["把问题正反都表述一遍", "还原为同一基准", "关注实质而非措辞"], combos: ["loss-aversion", "anchoring"] },
  { slug: "loss-aversion", title: "损失厌恶", stage: "行动选择", risk: "看错价值", summary: "损失带来的痛苦约为同等收益快乐的两倍。", mechanism: "为避免损失，人会拒绝合理风险、死守亏损头寸，做出不对称的非理性选择。", triggers: ["可能亏损", "已有获利", "现状受威胁"], defenses: ["按期望值决策", "问‘若重新开始会怎么选’", "把损失与收益对称看待"], combos: ["sunk-cost", "status-quo-bias"] },
  { slug: "sunk-cost", title: "沉没成本谬误", stage: "行动选择", risk: "看错价值", summary: "因已投入而继续，哪怕未来注定不划算。", mechanism: "已花出去且无法收回的成本，本不该影响未来决策，但人会为‘不浪费’而继续投入，越陷越深。", triggers: ["已投入大量时间金钱", "公开承诺", "接近完成感"], defenses: ["只看未来成本收益", "问‘从今天起还值得吗’", "设预先退出条件"], combos: ["loss-aversion", "consistency-bias"] },
  { slug: "status-quo-bias", title: "现状偏见", stage: "行动选择", risk: "看错价值", summary: "倾向维持现状，把默认当成安全。", mechanism: "改变需成本与风险，于是人高估现状、低估改变收益，默认选项因此拥有巨大力量。", triggers: ["默认设置", "组织惯性", "改变有风险"], defenses: ["把‘不改变’也当成一个选择评估", "设计更优默认值", "定期重新审视"], combos: ["loss-aversion", "consistency-bias"] },
  { slug: "herd-mentality", title: "从众", stage: "社会影响", risk: "看错他人", summary: "不确定时模仿多数人的行为。", mechanism: "把他人行为当成正确答案的线索，在群体中放弃独立判断，从而放大泡沫与恐慌。", triggers: ["不确定性高", "群体一致", "怕错过"], defenses: ["独立先下结论再看他人", "问‘除了大家都做还有别的理由吗’", "逆向思考"], combos: ["social-proof", "authority-bias"] },
  { slug: "authority-bias", title: "权威偏差", stage: "社会影响", risk: "看错他人", summary: "过度相信权威、专家或头衔。", mechanism: "面对权威符号，人倾向放弃独立判断而服从，即使权威跨界或明显出错。", triggers: ["专家头衔", "上级指令", "权威符号"], defenses: ["看证据而非头衔", "区分领域内外的权威", "允许质疑"], combos: ["halo-effect", "social-proof"] },
  { slug: "halo-effect", title: "光环效应", stage: "社会影响", risk: "看错他人", summary: "因一个优点而高估其全部。", mechanism: "对某人某物的一个突出特征（颜值、名气、成功）产生好感后，会不自觉地放大对其各方面的评价。", triggers: ["第一印象好", "名气大", "外表出众"], defenses: ["逐项独立评估", "区分单点与整体", "警惕‘成功者说什么都对’"], combos: ["authority-bias", "liking-disliking"] },
  { slug: "in-group-bias", title: "内群体偏见", stage: "社会影响", risk: "看错他人", summary: "偏袒自己所属的群体，贬低外群体。", mechanism: "人天然对‘自己人’更宽容信任，对‘外人’更苛刻怀疑，导致评价失真与对立。", triggers: ["团队对立", "身份认同", "竞争情境"], defenses: ["用统一标准评价", "主动倾听外群体", "警惕‘我们对他们’叙事"], combos: ["confirmation-bias", "fundamental-attribution-error"] },
  { slug: "hindsight-bias", title: "事后聪明偏差", stage: "结果复盘", risk: "看错自己", summary: "结果出来后觉得‘我早就知道’。", mechanism: "知道结果后，大脑会重构记忆，让过去的判断显得比当时更准确，从而学不到真正的教训。", triggers: ["结果已知", "复盘", "归因"], defenses: ["事前书面记录预测", "对照预测与结果", "承认当时的不确定"], combos: ["narrative-bias", "memory-bias"] },
  { slug: "outcome-bias", title: "结果偏差", stage: "结果复盘", risk: "看错自己", summary: "只凭结果好坏评判决策质量。", mechanism: "好决策可能因运气得到坏结果，坏决策也可能侥幸成功；只看结果会奖励运气、惩罚正确。", triggers: ["结果导向考核", "单次事件", "情绪化复盘"], defenses: ["评估决策过程而非结果", "区分运气与能力", "看多次重复表现"], combos: ["hindsight-bias", "survivorship-bias"] },
  { slug: "self-serving-bias", title: "自利归因偏差", stage: "结果复盘", risk: "看错自己", summary: "成功归于自己，失败归于外部。", mechanism: "为维护自尊，人把好结果归功于能力、把坏结果归咎于环境，从而无法客观复盘。", triggers: ["涉及自我评价", "公开复盘", "绩效考核"], defenses: ["主动找自身原因", "请他人客观反馈", "用决策日志对照"], combos: ["overconfidence", "hindsight-bias"] },
  { slug: "survivorship-bias", title: "幸存者偏差", stage: "信息获取", risk: "看错因果", summary: "只看到成功的幸存者，忽略沉默的失败者。", mechanism: "失败者往往消失在视野外，于是从幸存样本中总结‘成功秘诀’，得出系统性错误的结论。", triggers: ["成功案例集", "榜单排行", "励志故事"], defenses: ["主动寻找失败样本", "问‘没出现的那些去哪了’", "看完整分母"], combos: ["availability-bias", "illusory-causation"] },
  { slug: "base-rate-neglect", title: "基准率忽视", stage: "信息解释", risk: "看错概率", summary: "忽略总体概率，只看个案特征。", mechanism: "被生动的个案信息吸引，忘记先看它所属群体的整体概率，导致严重高估或低估。", triggers: ["生动个案", "强烈印象", "缺乏统计意识"], defenses: ["先锚定基准率", "再用个案微调", "用真实数据"], combos: ["representativeness", "vividness-bias"] },
  { slug: "gamblers-fallacy", title: "赌徒谬误", stage: "信息解释", risk: "看错概率", summary: "误以为独立事件会‘自我平衡’。", mechanism: "连续出现某结果后，人误以为相反结果‘该来了’，忽视独立事件互不影响。", triggers: ["连续同向结果", "随机序列", "想扳回"], defenses: ["确认事件是否独立", "理解随机不等于均匀", "用概率而非直觉"], combos: ["small-numbers", "illusion-of-control"] },
  { slug: "small-numbers", title: "小数定律", stage: "信息解释", risk: "看错概率", summary: "用过小样本得出过强结论。", mechanism: "小样本波动大，却被当成稳定规律，于是几个案例就被升格为‘趋势’。", triggers: ["样本量小", "早期数据", "急于下结论"], defenses: ["扩大样本再判断", "标注置信度", "对小样本保持怀疑"], combos: ["base-rate-neglect", "representativeness"] },
  { slug: "overconfidence", title: "过度自信", stage: "结果复盘", risk: "看错自己", summary: "高估自己的判断准确度与控制力。", mechanism: "人普遍认为自己优于平均、预测更准，低估不确定性与所需时间。", triggers: ["缺乏反馈", "专业领域", "连续成功"], defenses: ["用外部基准校准", "记录预测准确率", "留足安全边际"], combos: ["self-serving-bias", "illusion-of-control"] },
  { slug: "illusion-of-control", title: "控制错觉", stage: "结果复盘", risk: "看错自己", summary: "高估自己对随机结果的影响力。", mechanism: "人倾向相信自己能左右本质随机的事，于是过度交易、过度干预。", triggers: ["参与感强", "投入大", "随机结果"], defenses: ["区分可控与不可控", "接受运气成分", "减少无谓干预"], combos: ["overconfidence", "gamblers-fallacy"] },
  { slug: "fundamental-attribution-error", title: "基本归因错误", stage: "社会影响", risk: "看错他人", summary: "高估他人的人品因素，低估情境因素。", mechanism: "评价他人行为时归咎于其性格，评价自己时却强调环境，造成双重标准。", triggers: ["他人犯错", "缺乏背景信息", "快速评判"], defenses: ["先考虑情境因素", "用对自己的标准对待他人", "了解背景"], combos: ["in-group-bias", "hanlons-razor"] },
  { slug: "local-optimum", title: "局部最优", stage: "信息解释", risk: "看错系统", summary: "每个局部最优，整体却不优。", mechanism: "各部门或环节各自优化自身指标，缺乏全局协调，反而损害系统整体表现。", triggers: ["部门 KPI 各自为政", "缺乏全局视角", "激励错配"], defenses: ["从系统整体优化", "对齐共同目标", "识别次优化陷阱"], combos: ["incentive-bias", "feedback-delay"] },
  { slug: "feedback-delay", title: "反馈延迟", stage: "信息解释", risk: "看错系统", summary: "行动与结果之间的时间差导致误判。", mechanism: "因果之间存在延迟时，人会误以为行动无效而过度反应，或把无关结果错误归因。", triggers: ["长周期因果", "滞后指标", "缺乏耐心"], defenses: ["识别系统延迟", "区分领先与滞后指标", "避免过度反应"], combos: ["linear-extrapolation", "local-optimum"] },
  { slug: "linear-extrapolation", title: "线性外推", stage: "信息解释", risk: "看错系统", summary: "把当前趋势简单延伸到未来。", mechanism: "人习惯用线性外推预测本质非线性的系统（指数增长、均值回归、拐点），从而严重误判。", triggers: ["近期趋势", "缺乏系统视角", "外推预测"], defenses: ["考虑非线性与拐点", "关注反馈与约束", "警惕‘永远这样下去’"], combos: ["feedback-delay", "overconfidence"] },
];

export const biases: Bias[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.stage,
  isMunger: false,
  summary: s.summary,
  mechanism: s.mechanism,
  whyHappens:
    "这是大脑为高效处理信息而采用的心理捷径，多数情况下省力有效，但在需要审慎判断时会系统性出错。",
  triggers: s.triggers,
  symptoms: [
    "在相关情境下反复出现同类判断",
    "当事人通常意识不到自己正受其影响",
    "事后能为判断找到看似合理的理由",
  ],
  scenarios: [
    "在投资、产品、管理与日常决策中频繁出现。",
    `当${s.triggers[0]}时尤其容易触发。`,
  ],
  combos: s.combos,
  harm: `在“${s.risk}”这一维度上让判断系统性偏离真相，累积起来造成重大决策失误。`,
  howToDetect: [
    "察觉自己是否落入该偏差的典型触发情境",
    "对照反向问题检验判断",
    "请他人独立复核",
  ],
  defenses: s.defenses,
  exercises: [
    `回忆一次受“${s.title}”影响的判断，当时哪些信号被忽略？`,
    `为下次遇到“${s.triggers[0]}”设计一个反向检查清单。`,
  ],
  relatedModels: ["inversion", "bayesian-updating", "base-rate"],
  relatedCases: ["ai-app", "double-down-loss", "team-efficiency"],
  stage: s.stage,
  risk: s.risk,
}));

export const biasMap = Object.fromEntries(biases.map((b) => [b.slug, b]));

export const cognitiveStages = [
  "信息获取",
  "信息解释",
  "价值判断",
  "行动选择",
  "社会影响",
  "结果复盘",
];

export const decisionRisks = [
  "看错事实",
  "看错因果",
  "看错概率",
  "看错价值",
  "看错他人",
  "看错自己",
  "看错系统",
];

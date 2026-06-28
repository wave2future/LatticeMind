import type { Bias } from "@/lib/types";

// 28 人类误判心理倾向 (芒格体系)。isMunger=true。
type Seed = {
  n: number;
  slug: string;
  title: string;
  category: string;
  summary: string;
  scenes: string;
  defense: string;
  mechanism: string;
  mungerView: string;
};

const seeds: Seed[] = [
  { n: 1, slug: "association-bias", title: "关联偏误", category: "推理与解释", summary: "因为两个事物曾同时出现，就误以为它们有因果或价值关联。", scenes: "广告、品牌、过去成功经验", defense: "区分相关与因果", mechanism: "大脑天生擅长建立联想以快速反应，但联想常把“同时出现”误读为“互为因果”，于是过去的成功被错误地归因于某个无关因素。", mungerView: "芒格指出，人会把奖励与无关的伴随物绑定，导致用错误的方式重复过去的成功。" },
  { n: 2, slug: "reward-punishment", title: "奖惩超级反应", category: "激励与自利", summary: "严重低估奖励和惩罚对行为的强大塑造作用。", scenes: "KPI、销售提成、考试、组织管理", defense: "检查激励机制实际奖励什么", mechanism: "激励对行为的塑造力远超人们直觉，错误的激励会催生钻空子、造假和短视，而当事人往往真心相信自己是对的。", mungerView: "芒格名言：“给我看激励，我就告诉你结果。”绝不要低估激励的力量。" },
  { n: 3, slug: "self-serving-bias", title: "自利与激励偏差", category: "激励与自利", summary: "倾向于相信对自己有利的解释。", scenes: "投资推荐、销售话术、内部汇报", defense: "问“谁受益？”", mechanism: "当结论对自己有利时，人会不自觉地放松审查、寻找支持证据，并真诚地相信它，从而被自身利益悄悄牵引判断。", mungerView: "永远要问对方的激励何在，包括你自己的——尤其当结论刚好对你有利时。" },
  { n: 4, slug: "overconfidence", title: "过度自信", category: "推理与解释", summary: "高估自己的能力、未来和正确性。", scenes: "创业、投资、个人规划", defense: "基准率 + 外部视角", mechanism: "人普遍认为自己高于平均，低估风险与所需时间。缺乏外部参照时，自信沦为错觉，导致准备不足。", mungerView: "承认无知是智慧的开端；知道自己能力圈的边界比扩大它更重要。" },
  { n: 5, slug: "denial", title: "自欺与否认", category: "情绪与损失", summary: "为减少痛苦或维持希望而扭曲现实。", scenes: "亏损、失败项目、关系问题", defense: "面对事实清单", mechanism: "当现实过于痛苦，心理会自动否认或淡化，让人继续投入注定失败的事，逃避必须面对的真相。", mungerView: "现实哪怕令人不快也必须接受，否认只会让代价随时间放大。" },
  { n: 6, slug: "consistency-bias", title: "一致性与承诺偏差", category: "推理与解释", summary: "为保持过去承诺而拒绝新证据。", scenes: "沉没成本、公开承诺、战略转向", defense: "反证清单", mechanism: "人有维持言行一致的强烈倾向，尤其在公开承诺后，会拒绝与之冲突的新证据，哪怕证据更可靠。", mungerView: "公开承诺会锁死你的立场；越大声说出的观点越难修正。" },
  { n: 7, slug: "deprivation-reaction", title: "剥夺反应（损失厌恶）", category: "情绪与损失", summary: "对失去已有利益的反应远大于获得新利益。", scenes: "降薪、取消权益、产品涨价", defense: "预先沟通 + 渐进调整", mechanism: "失去同等价值带来的痛苦约为获得快乐的两倍，于是人会为避免损失做出不理性的激烈反应。", mungerView: "拿走人们已经拥有的东西，会触发远超预期的强烈反弹。" },
  { n: 8, slug: "status-quo-bias", title: "现状偏见", category: "情绪与损失", summary: "倾向维持当前状态，不愿改变。", scenes: "组织转型、旧系统、默认选项", defense: "默认值设计", mechanism: "改变需要付出认知成本并承担风险，于是人倾向于保持现状，把默认选项当成“安全”，即使改变更优。", mungerView: "惯性是强大的力量，组织和个人都会本能地抗拒必要的改变。" },
  { n: 9, slug: "short-termism", title: "短视与急躁", category: "情绪与损失", summary: "高估眼前收益，低估长期后果。", scenes: "消费、投资、产品增长", defense: "10/10/10 思考", mechanism: "即时奖励对大脑的吸引力远大于延迟的更大收益，导致人牺牲长期利益换取眼前满足。", mungerView: "复利的奇迹属于有耐心的人；急躁是长期主义的天敌。" },
  { n: 10, slug: "envy", title: "嫉妒与比较", category: "社会影响", summary: "因他人拥有而改变自己的判断。", scenes: "社交媒体、投资跟风、职场", defense: "个人目标基准", mechanism: "人通过与他人比较来评价自己，嫉妒会驱动非理性的攀比、跟风和报复性消费或投资。", mungerView: "嫉妒是七宗罪中最愚蠢的，因为它甚至带不来任何乐趣。" },
  { n: 11, slug: "contrast-bias", title: "对比误判", category: "推理与解释", summary: "判断受前后参照物影响，而非对象本身。", scenes: "定价、谈判、消费升级", defense: "绝对值检查", mechanism: "大脑用对比而非绝对值感知，于是先展示一个高价再展示目标价，会让后者显得便宜，操纵了判断。", mungerView: "对比会扭曲感知，销售和谈判高手都深谙此道。" },
  { n: 12, slug: "anchoring", title: "锚定偏差", category: "推理与解释", summary: "被初始数字或信息过度影响。", scenes: "估值、报价、薪资谈判", defense: "多锚点估计", mechanism: "第一个出现的数字会成为后续判断的锚，即使它毫无依据，估计也会向它靠拢。", mungerView: "随意的初始数字会悄悄绑架你的最终判断。" },
  { n: 13, slug: "vividness-bias", title: "鲜活性偏差", category: "记忆与注意", summary: "最近、最生动的信息被过度重视。", scenes: "新闻、短视频、事故案例", defense: "基准率校正", mechanism: "生动、近期、情绪强烈的信息更容易被记住和提取，于是被赋予过高权重，掩盖了枯燥但更真实的统计。", mungerView: "戏剧性的个案会压过沉默的大多数，扭曲你的概率感。" },
  { n: 14, slug: "omission-blindness", title: "遗漏与抽象盲点", category: "记忆与注意", summary: "只看到出现的信息，忽略缺失信息和抽象变量。", scenes: "调研、数据分析、合同审查", defense: "缺失信息清单", mechanism: "人只对眼前呈现的信息反应，难以察觉“没出现的东西”和抽象关系，于是幸存者偏差和隐性条款屡屡得逞。", mungerView: "看不见的、缺失的证据，往往比眼前的证据更重要。" },
  { n: 15, slug: "reciprocity", title: "互惠倾向", category: "社会影响", summary: "因收到好处而倾向回报。", scenes: "销售、礼物、商务关系", defense: "延迟承诺", mechanism: "接受恩惠会激起强烈的回报义务感，于是小恩小惠能换来不成比例的让步与购买。", mungerView: "免费的样品和小礼物，是为了触发你内心的回报机制。" },
  { n: 16, slug: "liking-disliking", title: "喜爱/厌恶偏差", category: "社会影响", summary: "喜欢的人更可信，讨厌的人更易被否定。", scenes: "面试、投资、合作", defense: "事实与人分离", mechanism: "对人的好恶会蔓延到对其观点、产品的评价，使判断被情感而非事实主导。", mungerView: "我们会高估喜欢的人、低估讨厌的人，扭曲了对事实的评估。" },
  { n: 17, slug: "social-proof", title: "社会认同", category: "社会影响", summary: "在不确定或压力下模仿多数人。", scenes: "牛市、热点创业、群体行为", defense: "独立判断", mechanism: "不确定时，人把他人的行为当成正确答案的线索，于是从众放大泡沫与恐慌。", mungerView: "当所有人都在做同一件事时，恰恰是最该独立思考的时候。" },
  { n: 18, slug: "authority-bias", title: "权威误导", category: "社会影响", summary: "过度服从专家、领导或权威。", scenes: "医疗、投资、组织决策", defense: "证据优先", mechanism: "面对权威，人倾向于放弃独立判断而服从，即使权威明显出错，也少有人质疑。", mungerView: "对权威的盲从会让聪明人集体犯下显而易见的错误。" },
  { n: 19, slug: "narrative-bias", title: "事后解释与叙事偏差", category: "推理与解释", summary: "结果发生后构造看似合理的故事。", scenes: "复盘、财经解读", defense: "事前记录预测", mechanism: "大脑渴望因果故事，会在结果出现后编造连贯解释，制造“早就知道”的错觉，掩盖真实的不确定。", mungerView: "事后看一切都顺理成章，但那只是叙事，不是当时的判断。" },
  { n: 20, slug: "reason-respecting", title: "理由尊重倾向", category: "推理与解释", summary: "只要给出理由，哪怕很弱，也更易被接受。", scenes: "排队、销售、组织命令", defense: "检查理由质量", mechanism: "“因为”这个词本身就能提高顺从率，人对理由的形式比内容更敏感。", mungerView: "给一个理由，哪怕苍白，也比不给理由更能让人配合。" },
  { n: 21, slug: "believe-first", title: "先信后疑", category: "记忆与注意", summary: "先接受信息再怀疑，分心时尤其明显。", scenes: "谣言、广告、短视频", defense: "延迟判断", mechanism: "理解一句话的第一步是先把它当真，怀疑是费力的第二步；在疲惫或分心时，怀疑常常缺席。", mungerView: "人会先相信，后怀疑，而很多时候怀疑这一步根本没发生。" },
  { n: 22, slug: "memory-bias", title: "记忆偏差", category: "记忆与注意", summary: "记忆具选择性、重构性，易受暗示。", scenes: "复盘、证词、关系冲突", defense: "记录原始证据", mechanism: "记忆不是录像而是每次重建，会被情绪、暗示和事后信息篡改，让人对“自己记得的”过度自信。", mungerView: "你记得的，往往是被反复重构后的版本，而非事实本身。" },
  { n: 23, slug: "action-impulse", title: "行动冲动", category: "压力与混乱", summary: "没有足够理由也想“做点什么”。", scenes: "频繁交易、管理瞎折腾", defense: "保留“不行动”选项", mechanism: "面对压力或无聊，人有强烈的“做点什么”的冲动，哪怕不行动才是更优解。", mungerView: "很多时候，最好的行动就是不行动；但人很难忍住不动。" },
  { n: 24, slug: "expression-impulse", title: "表达冲动", category: "压力与混乱", summary: "没有观点也想说点什么。", scenes: "会议、社交媒体、专家评论", defense: "允许沉默", mechanism: "为了显得参与或专业，人会在无话可说时强行表态，制造噪声甚至错误承诺。", mungerView: "承认“我不知道”需要勇气，但远胜过强行发表无知的意见。" },
  { n: 25, slug: "emotional-arousal", title: "情绪唤起", category: "压力与混乱", summary: "强烈情绪下做出草率判断。", scenes: "愤怒、兴奋、恐惧、焦虑", defense: "冷静期", mechanism: "强情绪会劫持理性，使人在愤怒、恐惧或狂喜中做出事后追悔的决定。", mungerView: "在情绪高峰做的重大决定，往往是最糟糕的决定。" },
  { n: 26, slug: "stress-chaos", title: "压力混乱", category: "压力与混乱", summary: "压力使判断质量下降。", scenes: "危机、公关、考试、交易", defense: "预案和清单", mechanism: "高压会收窄注意、加速冲动、削弱深思，让人在最需要清醒时反而最容易出错。", mungerView: "压力之下人会退回本能，唯有事先准备的清单能救你。" },
  { n: 27, slug: "physical-mental-state", title: "身体/心理状态影响", category: "压力与混乱", summary: "疼痛、疾病、疲劳、药物影响认知。", scenes: "熬夜决策、病中决策", defense: "推迟重大决定", mechanism: "生理状态直接影响判断力，疲惫、饥饿、疼痛会让人变得短视、易怒、缺乏自控。", mungerView: "身体不在状态时，把重大决定推迟到恢复之后。" },
  { n: 28, slug: "lollapalooza", title: "多偏差叠加效应", category: "多因素叠加", summary: "多个心理倾向同时作用，产生极端结果。", scenes: "传销、泡沫、灾难性组织决策", defense: "多人审查 + 清单", mechanism: "当多个偏差同向叠加（权威+社会认同+剥夺+承诺），其合力远超单个之和，导致灾难性的集体非理性。", mungerView: "芒格称之为 Lollapalooza 效应：几股心理力量同时朝一个方向推时，结果极端而疯狂。" },
];

const combosByCategory: Record<string, string[]> = {
  激励与自利: ["self-serving-bias", "authority-bias", "consistency-bias"],
  情绪与损失: ["loss-aversion", "sunk-cost", "denial"],
  社会影响: ["social-proof", "authority-bias", "liking-disliking"],
  记忆与注意: ["vividness-bias", "narrative-bias", "confirmation-bias"],
  推理与解释: ["confirmation-bias", "anchoring", "narrative-bias"],
  压力与混乱: ["emotional-arousal", "action-impulse", "stress-chaos"],
  多因素叠加: ["authority-bias", "social-proof", "deprivation-reaction"],
};

export const misjudgments: Bias[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  mungerNumber: s.n,
  isMunger: true,
  summary: s.summary,
  mungerView: s.mungerView,
  mechanism: s.mechanism,
  whyHappens:
    "这是大脑为快速生存而进化出的心理捷径，在原始环境中高效，却在现代复杂决策中频繁失灵。",
  triggers: s.scenes.split("、"),
  symptoms: [
    "只寻找支持当前倾向的信息",
    "在压力或情绪下反应加剧",
    "事后能为自己的判断找到合理理由",
  ],
  scenarios: [
    `典型场景：${s.scenes}。`,
    "在商业、投资、产品与管理决策中反复出现，且当事人通常意识不到。",
  ],
  combos: combosByCategory[s.category] ?? ["confirmation-bias", "authority-bias"],
  harm: "会让人在重大决策中系统性偏离事实，错误往往在结果出现后才暴露，代价高昂。",
  howToDetect: [
    "留意自己是否只在收集支持性证据",
    "察觉情绪、激励或群体压力是否正在升高",
    "问自己：如果结论相反，哪些事实会成立？",
  ],
  defenses: [
    s.defense,
    "主动寻找并写下能推翻判断的反证",
    "引入外部视角或多人独立审查",
    "对重大决定设置冷静期与检查清单",
  ],
  exercises: [
    `回忆一次你受“${s.title}”影响的决定，事后看哪些信号被忽略了？`,
    `设计一个清单，在下次遇到“${s.scenes.split("、")[0]}”时主动触发反向检查。`,
  ],
  relatedModels: ["inversion", "bayesian-updating", "decision-journal"],
  relatedCases: ["ai-app", "double-down-loss"],
  stage: "—",
  risk: "—",
}));

export const misjudgmentMap = Object.fromEntries(misjudgments.map((b) => [b.slug, b]));

export const misjudgmentCategories = [
  "全部",
  "激励与自利",
  "情绪与损失",
  "社会影响",
  "记忆与注意",
  "推理与解释",
  "压力与混乱",
  "多因素叠加",
];

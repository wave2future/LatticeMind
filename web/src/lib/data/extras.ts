import type { Locale } from "@/lib/i18n/config";
import type { DiagramType } from "@/components/ConceptDiagram";

type Bi = { zh: string; en: string };
export interface Extra {
  plain?: Bi;
  analogy?: Bi;
  diagram?: DiagramType;
}
export interface ResolvedExtra {
  plain?: string;
  analogy?: string;
  diagram?: DiagramType;
}

// ── Mental models ─────────────────────────────────────────
export const modelExtras: Record<string, Extra> = {
  "opportunity-cost": {
    diagram: "fork",
    plain: {
      zh: "你的时间、钱和精力都是有限的。选了一件事，就等于放弃了用同样资源能做的别的事。真正的成本，不是你花了多少钱，而是你放弃掉的那个最好的选择。",
      en: "Your time, money and energy are limited. Choosing one thing means giving up what the same resources could have done elsewhere. The real cost isn't what you spent — it's the best option you gave up.",
    },
    analogy: {
      zh: "周六打了一整天游戏，'成本'不只是电费，而是这一天本可以陪家人、健身或接私活赚的钱——那个被你放弃的最好选项，才是真正的代价。",
      en: "Gaming all Saturday doesn't just cost electricity — it costs the family time, workout, or freelance income that day could have brought. The best forgone option is the true cost.",
    },
  },
  "margin-of-safety": {
    diagram: "buffer",
    plain: {
      zh: "凡事留点余地，别把计划卡在'刚刚好'。因为现实总有意外，留出缓冲，才不会一出错就崩盘。",
      en: "Always leave some room; don't plan for 'just barely enough.' Reality always brings surprises, and a buffer keeps one mistake from breaking everything.",
    },
    analogy: {
      zh: "桥能承重 10 吨，工程师却只让 4 吨的车通过。多出来的余量就是安全边际——哪怕货物超重一点、材料有瑕疵，桥也不会塌。",
      en: "A bridge holds 10 tons, but engineers only allow 4-ton trucks. That extra capacity is the margin of safety — even if a load is over or materials are flawed, the bridge holds.",
    },
  },
  inversion: {
    diagram: "reverse",
    plain: {
      zh: "与其想'怎么才能成功'，不如反过来先问'怎么会失败'，然后把这些坑一个个避开。避免愚蠢，常比追求聪明更靠谱。",
      en: "Instead of 'how do I succeed,' ask 'how would this fail' — then avoid those traps one by one. Avoiding stupidity often beats chasing brilliance.",
    },
    analogy: {
      zh: "想身体健康，与其纠结买什么补品，不如先列出'什么会把身体搞垮'（熬夜、久坐、暴饮暴食），然后别做这些，效果往往更好。",
      en: "To get healthy, rather than obsess over supplements, first list what wrecks your body (late nights, sitting all day, overeating) — then just avoid those. Often more effective.",
    },
  },
  "feedback-loop": {
    diagram: "reinforcing-loop",
    plain: {
      zh: "一件事的结果会反过来影响它自己，于是要么越滚越大（增强），要么自动刹车（平衡）。看懂循环，就能预测系统往哪走。",
      en: "An outcome loops back to affect itself, so things either snowball (reinforcing) or self-correct (balancing). Spot the loop and you can predict where a system heads.",
    },
    analogy: {
      zh: "银行存款利息：利息变成本金，本金又生更多利息，越滚越多（增强回路）；而'越胖越懒得动、越不动越胖'也是一种自我强化的循环。",
      en: "Compound interest: interest becomes principal, which earns more interest — it snowballs (a reinforcing loop). 'The heavier you get, the less you move, the heavier you get' is the same kind of loop.",
    },
  },
  "bayesian-updating": {
    diagram: "tree",
    plain: {
      zh: "别因为一条新消息就彻底改主意，也别对铁证视而不见。证据越可靠，就把判断往那个方向调得越多；证据越弱，调得越少。",
      en: "Don't flip your view over one headline, but don't ignore hard proof either. The more reliable the evidence, the more you move your judgment; the weaker it is, the less.",
    },
    analogy: {
      zh: "一个朋友说某餐厅难吃，你只会稍微降低期待；但如果 10 个朋友都说难吃，你基本就信了——证据越多越强，你改变看法的幅度越大。",
      en: "If one friend says a restaurant is bad, you lower your expectation a little; if ten friends say so, you basically believe it. The stronger the evidence, the bigger your update.",
    },
  },
  "circle-of-competence": {
    diagram: "target",
    plain: {
      zh: "只在你真正懂的领域下重注；不懂的别硬上，先老实承认'我不懂'。圈子有多大不重要，知道边界在哪最重要。",
      en: "Bet big only where you truly understand; don't force it outside, and honestly admit 'I don't know.' The circle's size matters less than knowing its edge.",
    },
    analogy: {
      zh: "你擅长做饭就开餐馆，这是你的能力圈。别因为听说炒币赚钱，就把积蓄全押进一个自己完全看不懂的东西。",
      en: "If you're great at cooking, open a restaurant — that's your circle. Don't dump your savings into something you don't understand at all just because you heard it makes money.",
    },
  },
  compounding: {
    diagram: "exp-curve",
    plain: {
      zh: "小小的进步如果能持续叠加，时间久了会变成巨大的差距。它的特点是前期很慢、后期爆发，所以最怕半途而废。",
      en: "Small gains, if they keep stacking, become a huge gap over time. It's slow early and explosive later — so the danger is quitting halfway.",
    },
    analogy: {
      zh: "每天背 5 个单词看着不起眼，坚持三年就是 5000 多个。存钱、健身、学习都一样——慢慢来，反而最快。",
      en: "Five words a day seems trivial, but three years is 5,000+. Saving, fitness, learning — all the same: going slow is actually the fastest.",
    },
  },
  "base-rate": {
    diagram: "bell-curve",
    plain: {
      zh: "判断一件事之前，先看'这类事情整体上发生的概率有多大'，别被一个生动的个例带跑偏。",
      en: "Before judging something, first look at how often this kind of thing happens overall — don't get swept away by one vivid case.",
    },
    analogy: {
      zh: "看到一条空难新闻就怕坐飞机，其实飞机事故率远低于开车。先看整体概率（基准率），再看个例。",
      en: "One plane-crash headline makes people fear flying, yet flying is far safer than driving. Look at the overall rate first, then the individual case.",
    },
  },
  "second-order-thinking": {
    diagram: "tree",
    plain: {
      zh: "别只看眼前的直接结果，多问一句'然后呢？'。很多好心办坏事，都是因为只想到了第一步。",
      en: "Don't stop at the immediate result — ask 'and then what?' Many good intentions backfire because people only thought one step ahead.",
    },
    analogy: {
      zh: "一直给小区流浪猫喂食（一阶：猫吃饱了），结果猫越聚越多、繁殖更快（二阶：问题更大）。做决定要想到连锁反应。",
      en: "Keep feeding the stray cats (first-order: they're fed), and they gather and breed faster (second-order: a bigger problem). Decisions need to account for the chain reaction.",
    },
  },
  "first-principles": {
    plain: {
      zh: "当别人说'一直都是这样'时，把问题拆到最基本、不能再质疑的事实，从头重新想，常能发现别人没看到的办法。",
      en: "When people say 'it's always been this way,' break the problem down to the most basic, unquestionable facts and rethink from scratch — you often find options others miss.",
    },
    analogy: {
      zh: "马斯克不接受'电池就是贵'，而是去算电池的原材料到底值多少钱，发现其实可以便宜很多——回到最底层的事实重新推导。",
      en: "Musk didn't accept 'batteries are just expensive' — he calculated what the raw materials actually cost and found they could be far cheaper. Re-derive from the bedrock facts.",
    },
  },
  probability: {
    diagram: "bell-curve",
    plain: {
      zh: "世界不是非黑即白，而是各种可能性的概率。用'有多大可能'代替'会不会'，决策会更稳。",
      en: "The world isn't black and white — it's a spread of probabilities. Replace 'will it or won't it' with 'how likely,' and decisions get steadier.",
    },
    analogy: {
      zh: "天气预报说'70% 下雨'，你不会纠结'到底下不下'，而是大概率带伞——用概率思考，而不是赌一个确定答案。",
      en: "When the forecast says '70% rain,' you don't agonize over 'will it or won't it' — you probably grab an umbrella. Think in probabilities, don't bet on one certain answer.",
    },
  },
  "regression-to-mean": {
    diagram: "bell-curve",
    plain: {
      zh: "特别好或特别差的表现，往往带着运气成分，之后大多会回落到平均水平附近。别把一次爆发当成永久实力。",
      en: "Unusually great or terrible performance usually has luck in it, and tends to fall back toward average. Don't mistake one spike for permanent skill.",
    },
    analogy: {
      zh: "球员某场超常发挥上了头条，下一场通常没那么神——不是退步了，而是回归正常水平。",
      en: "A player has a headline-grabbing game, then a normal one — not a decline, just regression to their true level.",
    },
  },
  "network-effect": {
    diagram: "network",
    plain: {
      zh: "用的人越多，这个产品就越好用、越值钱，于是又吸引更多人来——强者恒强。",
      en: "The more people use it, the more useful and valuable it becomes, which draws even more people — the strong get stronger.",
    },
    analogy: {
      zh: "微信之所以离不开，是因为你的朋友都在上面。如果只有你一个人用，再好的聊天软件也没意义。",
      en: "WeChat is hard to leave because all your friends are on it. The best chat app is useless if you're the only user.",
    },
  },
  incentives: {
    diagram: "lever",
    plain: {
      zh: "人会朝着'被奖励'的方向走。想知道结果会怎样，先看这套规则到底在奖励什么行为。",
      en: "People move toward what's rewarded. To predict the outcome, look at what the rules actually reward.",
    },
    analogy: {
      zh: "如果客服只考核'关单速度'，他们就会草草关掉工单——你奖励速度，就别怪没人真正解决问题。",
      en: "If support is judged only on 'time to close,' agents will close tickets hastily — reward speed and don't be surprised nobody really solves the problem.",
    },
  },
  bottleneck: {
    diagram: "funnel",
    plain: {
      zh: "一个系统的产出，由它最弱的那个环节决定。不解决瓶颈，在别处再使劲也没用。",
      en: "A system's output is set by its weakest link. Without fixing the bottleneck, effort elsewhere is wasted.",
    },
    analogy: {
      zh: "水管最细的那一段决定了出水量。厨房洗菜切菜再快，只有一个灶台，上菜速度还是卡在灶台上。",
      en: "The narrowest part of a pipe sets the flow. No matter how fast you prep, with one stove the kitchen's output is capped at the stove.",
    },
  },
  moat: {
    plain: {
      zh: "真正能长期赚钱的生意，都有一道别人难以跨越的'护城河'，让对手抄不走、追不上。",
      en: "Businesses that earn for the long run have a 'moat' competitors can't cross — something rivals can't copy or catch.",
    },
    analogy: {
      zh: "可口可乐的品牌、微信的好友关系链，都是护城河——就算别人做出一模一样的产品，也很难把用户抢走。",
      en: "Coca-Cola's brand and WeChat's friend graph are moats — even an identical product struggles to pull users away.",
    },
  },
};

// ── Biases & misjudgment tendencies (shared slug map) ─────
export const biasExtras: Record<string, Extra> = {
  "reward-punishment": {
    diagram: "lever",
    plain: { zh: "奖励和惩罚对人的影响力，比我们以为的大得多。设错了奖励，再聪明的人也会被带偏。", en: "Rewards and punishments shape behavior far more than we think. Set them wrong, and even smart people get pulled off course." },
    analogy: { zh: "某地为减少眼镜蛇，悬赏蛇头，结果有人专门养蛇来领赏——奖励错了，反而养出更多蛇。", en: "A city paid a bounty for cobra heads to cut the cobra population; people bred cobras to cash in. The wrong incentive bred more snakes." },
  },
  "self-serving-bias": {
    plain: { zh: "人会不知不觉地相信对自己有利的说法。当一个结论刚好对你有好处时，要格外小心。", en: "People unconsciously believe what favors them. Be extra careful when a conclusion happens to benefit you." },
    analogy: { zh: "卖保健品的人往往真心相信它有效——因为这样既赚了钱又心安理得。听建议时先问：'他这么说，自己有没有好处？'", en: "Supplement sellers often truly believe it works — that way they profit and feel righteous. When taking advice, ask: 'Does the advisor benefit from this?'" },
  },
  overconfidence: {
    diagram: "bell-curve",
    plain: { zh: "大多数人都觉得自己'高于平均水平'，于是低估风险、低估需要的时间。", en: "Most people think they're 'above average,' so they underrate risk and how long things take." },
    analogy: { zh: "调查里九成司机认为自己车技高于平均——这在数学上不可能。装修、创业总是超时超支，也是过度自信。", en: "Surveys show ~90% of drivers rate themselves above average — mathematically impossible. Renovations and startups always run over time and budget, too." },
  },
  "deprivation-reaction": {
    diagram: "value-function",
    plain: { zh: "失去的痛苦，大约是得到同样东西快乐的两倍。所以人会为了'不亏'做出不理智的事。", en: "Losing hurts about twice as much as gaining the same thing feels good. So people do irrational things just to avoid a loss." },
    analogy: { zh: "捡到 100 元的开心，远不如丢了 100 元的难受。股票套牢了死扛不卖，就是怕'认亏'那种痛。", en: "Finding $100 feels far less good than losing $100 feels bad. Holding a sinking stock to avoid 'locking in the loss' is that pain at work." },
  },
  "loss-aversion": {
    diagram: "value-function",
    plain: { zh: "失去的痛苦，大约是得到同样东西快乐的两倍。所以人会为了'不亏'做出不理智的事。", en: "Losing hurts about twice as much as gaining the same thing feels good. So people act irrationally just to avoid a loss." },
    analogy: { zh: "捡到 100 元的开心，远不如丢了 100 元的难受。股票套牢死扛不卖，就是怕'认亏'那种痛。", en: "Finding $100 feels far less good than losing $100 feels bad. Refusing to sell a losing stock is the fear of 'admitting the loss.'" },
  },
  "consistency-bias": {
    plain: { zh: "人一旦公开表过态、做过承诺，就很难改口，哪怕后来的证据表明自己错了。", en: "Once people have publicly committed, they find it hard to change, even when new evidence shows they were wrong." },
    analogy: { zh: "追了一部烂剧 20 集，明知难看还要追完——'都看这么多了不能白看'，其实是被一致性绑架。", en: "You've watched 20 episodes of a bad show and keep going — 'I've come this far' — that's consistency hijacking you." },
  },
  anchoring: {
    diagram: "anchor",
    plain: { zh: "第一个出现的数字，会像锚一样拽住你的判断，哪怕那个数字毫无道理。", en: "The first number you see acts like an anchor, dragging your judgment toward it — even if that number is baseless." },
    analogy: { zh: "标价 1999、'现价 999'，你会觉得好便宜——其实 999 才是真实价值，1999 只是个锚，先把你的预期拉高。", en: "'Was $1999, now $999' feels cheap — but $999 is the real value; $1999 is just an anchor that first inflated your expectation." },
  },
  "social-proof": {
    diagram: "network",
    plain: { zh: "不确定该怎么办时，人会看大家怎么做然后跟着做。人越多，越觉得'准没错'。", en: "When unsure, people copy what the crowd does. The bigger the crowd, the more it feels 'must be right.'" },
    analogy: { zh: "两家空餐厅，你会挑'排队'的那家。股市里'大家都在买'时疯狂入场，往往就是接盘的时候。", en: "Between two empty restaurants you pick the one with a queue. Piling into stocks because 'everyone's buying' is often when you become the bag-holder." },
  },
  "authority-bias": {
    plain: { zh: "面对专家、领导、权威，人容易放弃自己的判断，哪怕对方明显说错了也不敢质疑。", en: "Facing experts, bosses or authority, people drop their own judgment — and dare not question even an obvious mistake." },
    analogy: { zh: "穿白大褂的人说的话我们更容易信。但专家也会跨界、也会错——要看证据，而不是看头衔。", en: "We trust people in white coats more. But experts stray out of their lane and err too — look at the evidence, not the title." },
  },
  envy: {
    plain: { zh: "因为别人有、自己没有，就改变了本来的判断，去攀比、跟风。", en: "Because others have it and you don't, you change your judgment and start keeping up with the Joneses." },
    analogy: { zh: "同事换了新车，你本来不需要也想换——攀比让你为了'不输给别人'花冤枉钱。", en: "A colleague gets a new car and suddenly you want one you don't need — envy makes you spend just to 'not lose face.'" },
  },
  "emotional-arousal": {
    plain: { zh: "在愤怒、兴奋、恐惧、焦虑这些强情绪下做的重大决定，事后往往最后悔。", en: "Big decisions made under strong emotion — anger, excitement, fear, anxiety — are the ones most regretted later." },
    analogy: { zh: "吵架时说的狠话、冲动下单的东西，冷静下来都想撤回——强情绪会'劫持'理智，重大决定要等冷静期。", en: "Harsh words in a fight, impulse purchases — once calm you want to undo them. Strong emotion hijacks reason; big calls need a cooling-off period." },
  },
  lollapalooza: {
    diagram: "reinforcing-loop",
    plain: { zh: "几种心理偏差同时朝一个方向使劲时，合力会大得吓人，造成疯狂的集体非理性。", en: "When several biases push the same way at once, their combined force is frightening — producing crazy collective irrationality." },
    analogy: { zh: "传销把权威、从众、占便宜、已投入的沉没成本好几股力量叠在一起，让平时理智的人也疯狂——这就是叠加效应。", en: "Pyramid schemes stack authority, herd, greed and sunk cost together, driving even level-headed people wild — that's the stacking effect." },
  },
  // ── cognitive-bias-only slugs ──
  "confirmation-bias": {
    diagram: "funnel",
    plain: { zh: "人会专门找支持自己观点的证据，对反对的视而不见，于是越来越觉得'我就是对的'。", en: "People seek evidence that supports their view and ignore the rest, growing ever more sure 'I'm right.'" },
    analogy: { zh: "觉得某明星人品差，就专挑他的黑料看、自动忽略好事——最后'证据'全站在你这边，其实你只看了一面。", en: "Decide a celebrity is bad, then only read the dirt and skip the good — soon all the 'evidence' is on your side, because you only looked at one side." },
  },
  "availability-bias": {
    plain: { zh: "越容易想起来的事，越被当成常见。其实只是它给你印象深，不代表真的常发生。", en: "The easier something comes to mind, the more 'common' it seems — but that's just vividness, not real frequency." },
    analogy: { zh: "空难一上新闻，大家就觉得坐飞机危险；天天发生的车祸没人天天报道，反而被低估了。", en: "A plane crash makes the news and flying feels dangerous; daily car crashes go unreported and get underrated." },
  },
  "sunk-cost": {
    plain: { zh: "已经花出去、收不回来的钱和时间，不该影响你接下来的选择；但人总舍不得'前功尽弃'。", en: "Money and time already spent and unrecoverable shouldn't affect your next choice — yet people can't bear to 'waste' them." },
    analogy: { zh: "电影票买了，看了半小时发现是烂片——理智的做法是走人去做别的，但很多人'既然花钱了'硬看完，浪费更多时间。", en: "You bought a ticket, and 30 minutes in the film is awful — the smart move is to leave, but many sit through it 'since I paid,' wasting even more time." },
  },
  "survivorship-bias": {
    plain: { zh: "我们只看到'活下来的成功者'，看不到沉默的失败者，于是总结出错误的成功秘诀。", en: "We see the surviving winners, not the silent failures, so we draw the wrong 'success secrets.'" },
    analogy: { zh: "'退学创业成功'的故事人尽皆知，但更多退学创业失败的人你根本没听说过——只看幸存者，会严重高估成功率。", en: "Everyone knows the 'dropped out and made it' stories, but you never hear about the far more numerous failures — counting only survivors badly overstates the odds." },
  },
  "hindsight-bias": {
    plain: { zh: "结果出来后，人会觉得'我早就知道会这样'，于是学不到真正的教训。", en: "After the result, people feel 'I knew it all along' — and so learn the wrong lesson." },
    analogy: { zh: "球赛结束才说'我就知道这队会赢'——赛前你可没这么肯定。事后诸葛亮，让人高估自己的预判能力。", en: "Only after the match do you say 'I knew that team would win' — you weren't so sure beforehand. Hindsight inflates your sense of foresight." },
  },
  "framing-effect": {
    plain: { zh: "同一件事，换个说法，你的选择就可能完全不同。", en: "The same fact, phrased differently, can completely change your choice." },
    analogy: { zh: "'九成存活率'和'一成死亡率'是一回事，但前者听着让人安心得多——措辞的'框'会悄悄改变你的决定。", en: "'90% survive' and '10% die' are identical, yet the first is far more reassuring — the wording 'frame' quietly shifts your decision." },
  },
  "halo-effect": {
    plain: { zh: "一个突出的优点（好看、有名、成功），会让你不自觉地觉得这个人或东西哪儿都好。", en: "One standout trait (looks, fame, success) makes you unconsciously assume the whole person or thing is good." },
    analogy: { zh: "长得帅的人容易被默认'人品也好、能力强'；某公司一款产品火了，就觉得它做什么都行。", en: "Good-looking people are assumed to be kind and capable; one hit product makes people think the company can do anything." },
  },
  "base-rate-neglect": {
    diagram: "bell-curve",
    plain: { zh: "只盯着眼前生动的个例，忘了先看'这类情况整体的概率'，于是判断严重失真。", en: "Fixating on a vivid case while forgetting the overall probability of that kind of case badly distorts judgment." },
    analogy: { zh: "一个人内向、爱看书，你猜他是图书管理员还是销售？多数人猜管理员，但销售人数是管理员的几十倍——别忘了基数。", en: "Someone is shy and loves books — librarian or salesperson? Most guess librarian, but salespeople outnumber librarians many times over. Don't forget the base." },
  },
  "gamblers-fallacy": {
    plain: { zh: "误以为'运气该轮到我了'。其实每次独立的事件，互不影响。", en: "Believing 'my luck is due.' In reality, independent events don't affect each other." },
    analogy: { zh: "连开 5 把红，就觉得'下把该黑了'加倍下注——但轮盘没有记忆，每把都是各自独立的概率。", en: "Five reds in a row, so you double down on 'black is due' — but the wheel has no memory; each spin is independent." },
  },
};

// ── System tools ──────────────────────────────────────────
export const systemExtras: Record<string, Extra> = {
  iceberg: {
    diagram: "iceberg",
    plain: { zh: "看问题别只看'表面发生了什么'，往下挖：是不是反复出现？背后有什么规则在推动？人们默认相信什么？越往下越接近根因。", en: "Don't stop at 'what happened' — dig down: Does it recur? What rules drive it? What do people assume by default? The deeper you go, the closer to the root cause." },
    analogy: { zh: "总迟到（事件）→ 每周一都迟到（模式）→ 周一早会排太早 + 通勤远（结构）→ '迟到没人管'的默认观念（心智）。改最底层才真正有用。", en: "Always late (event) → late every Monday (pattern) → Monday meeting too early + long commute (structure) → 'being late doesn't matter' belief (mental model). Fixing the deepest layer is what works." },
  },
  "causal-loop": {
    diagram: "reinforcing-loop",
    plain: { zh: "把关键变量用箭头连起来，看它们互相怎么影响、形成什么循环，复杂问题一下子就清楚了。", en: "Connect key variables with arrows to see how they affect each other and what loops form — complex problems suddenly become clear." },
    analogy: { zh: "用户多 → 口碑好 → 更多用户，画成一个圈就一目了然，能看出哪些循环在推动增长。", en: "More users → better word of mouth → more users; drawn as a loop it's obvious which cycles drive growth." },
  },
  "stock-flow": {
    diagram: "stock-flow",
    plain: { zh: "区分'存量'（某一刻积累了多少，如存款、用户总数）和'流量'（每段时间进出多少，如收入、流失）。", en: "Distinguish 'stock' (how much is accumulated at a moment, like savings or total users) from 'flow' (how much enters/leaves per period, like revenue or churn)." },
    analogy: { zh: "浴缸里的水是存量，水龙头进水和下水口出水是流量。进水快但漏得更快，缸还是会空。", en: "The water in a bathtub is the stock; the tap in and drain out are flows. Fill fast but drain faster, and the tub still empties." },
  },
  "leverage-point": {
    diagram: "lever",
    plain: { zh: "找到那个'花小力气却能撬动大改变'的位置，往往在规则和激励上，而不是天天救火。", en: "Find the spot where a little effort moves a lot — usually in rules and incentives, not daily firefighting." },
    analogy: { zh: "与其不停拖地（治标），不如把漏水的管子修好（杠杆点）——一次性解决根源。", en: "Rather than endlessly mopping (treating symptoms), fix the leaking pipe (the leverage point) — solve the source once." },
  },
  "bottleneck-analysis": {
    diagram: "funnel",
    plain: { zh: "找出限制整体产出的那个最堵的环节，集中火力解决它；瓶颈解决后会转移，要重新找。", en: "Find the most clogged link limiting total output and focus on it; once solved the bottleneck moves, so re-locate it." },
    analogy: { zh: "流量很大但注册流程太繁琐，用户全卡在注册——注册就是瓶颈，优化它比加广告有用得多。", en: "Lots of traffic but a clunky sign-up, and users get stuck there — sign-up is the bottleneck; fixing it beats buying more ads." },
  },
  delay: {
    plain: { zh: "行动和结果之间往往有时间差。别因为'做了没立刻见效'就乱改，也别把无关的结果误当成自己的功劳。", en: "There's usually a lag between action and result. Don't thrash because 'it didn't work instantly,' and don't claim credit for unrelated outcomes." },
    analogy: { zh: "今天开始健身，一个月后才看到变化。很多人三周没效果就放弃——其实是忽略了延迟。", en: "Start exercising today, see changes a month later. Many quit after three weeks of 'nothing' — they ignored the delay." },
  },
  boundary: {
    plain: { zh: "想清楚哪些因素你能控制（系统内），哪些是外部环境（系统外），别把锅全揽到自己身上，也别漏掉关键变量。", en: "Be clear on what you control (inside the system) versus the external environment (outside) — don't blame yourself for everything, nor miss key variables." },
    analogy: { zh: "分析销量下滑，'大环境不好'是系统外，'我们的服务变差'是系统内——划清边界才知道该改什么。", en: "Analyzing a sales drop, 'bad economy' is outside, 'our service got worse' is inside — drawing the boundary tells you what to fix." },
  },
  "feedback-strength": {
    diagram: "balancing-loop",
    plain: { zh: "同一个系统里常有好几股循环在较劲，判断当前哪股最强，就能预测系统往哪走。", en: "A system often has several loops competing; judging which is strongest now predicts where it heads." },
    analogy: { zh: "创业早期口碑循环最强（猛涨），后期获客变贵的平衡循环占上风（增速放缓）——强弱在变。", en: "Early on the word-of-mouth loop dominates (surging); later the rising-cost balancing loop takes over (growth slows) — the balance shifts." },
  },
};

function resolve(extra: Extra | undefined, locale: Locale): ResolvedExtra | undefined {
  if (!extra) return undefined;
  return {
    plain: extra.plain?.[locale],
    analogy: extra.analogy?.[locale],
    diagram: extra.diagram,
  };
}

export function getModelExtra(slug: string, locale: Locale) {
  return resolve(modelExtras[slug], locale);
}
export function getBiasExtra(slug: string, locale: Locale) {
  return resolve(biasExtras[slug], locale);
}
export function getSystemExtra(slug: string, locale: Locale) {
  return resolve(systemExtras[slug], locale);
}

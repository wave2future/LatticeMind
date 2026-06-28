import type { Fallacy } from "@/lib/types";

type Seed = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  example: string;
  whyWrong: string;
  howToRespond: string;
  related: string[];
};

const seeds: Seed[] = [
  { slug: "straw-man", title: "稻草人谬误", category: "论证错误", summary: "歪曲对方观点，再攻击这个被歪曲的版本。", example: "“你说要控制预算，就是想让公司什么都不做、坐以待毙。”", whyWrong: "攻击的不是对方真正的主张，而是一个更容易打倒的扭曲版本，因此即便‘赢了’也没有反驳原观点。", howToRespond: "复述对方的真实观点并请其确认，再就原观点本身讨论。", related: ["confirmation-bias", "in-group-bias"] },
  { slug: "appeal-to-authority", title: "诉诸权威", category: "论证错误", summary: "用权威的身份代替证据本身。", example: "“某知名专家都这么说，所以一定对。”", whyWrong: "权威也会犯错、会跨界、会有利益，身份不能替代论证与证据。", howToRespond: "问‘支撑这个结论的证据是什么’，并核实权威是否在其专业领域内。", related: ["authority-bias", "halo-effect"] },
  { slug: "false-cause", title: "错误因果", category: "推理错误", summary: "把先后或相关误当作因果。", example: "“我换了水晶后业绩变好，所以是水晶带来好运。”", whyWrong: "相关、巧合或共同原因都可能造成同时出现，需排除其他解释才能谈因果。", howToRespond: "寻找共同原因、做对照、问‘有没有第三变量’。", related: ["illusory-causation", "narrative-bias"] },
  { slug: "false-dilemma", title: "非黑即白", category: "推理错误", summary: "把多种可能压缩成只有两个极端选项。", example: "“要么全力扩张，要么彻底失败，没有第三条路。”", whyWrong: "现实中通常存在中间地带和其他选项，二选一是人为制造的虚假对立。", howToRespond: "主动列出被忽略的第三、第四种选项。", related: ["framing-effect", "contrast-effect"] },
  { slug: "slippery-slope", title: "滑坡谬误", category: "推理错误", summary: "断言一小步必然导致一连串灾难性后果。", example: "“今天允许远程办公，明天就没人来上班，公司迟早垮。”", whyWrong: "每一步之间的因果链未经证明，把可能性当成必然性。", howToRespond: "要求论证每一步的真实概率，而非假设必然发生。", related: ["linear-extrapolation", "narrative-bias"] },
  { slug: "ad-hominem", title: "人身攻击", category: "论证错误", summary: "攻击提出观点的人，而非观点本身。", example: "“他自己都没成功，凭什么谈管理？”", whyWrong: "观点的对错与提出者的身份、品行无关，攻击人不构成对论点的反驳。", howToRespond: "把讨论拉回观点本身的证据与逻辑。", related: ["halo-effect", "liking-disliking"] },
  { slug: "hasty-generalization", title: "以偏概全", category: "推理错误", summary: "用过少或不具代表性的样本下普遍结论。", example: "“我认识的两个程序员都内向，所以程序员都内向。”", whyWrong: "样本太小或有偏，无法支撑对整体的断言。", howToRespond: "要求更大、更有代表性的样本，区分个例与规律。", related: ["small-numbers", "survivorship-bias"] },
  { slug: "appeal-to-emotion", title: "诉诸情感", category: "语言陷阱", summary: "用激发情绪代替提供理由。", example: "“想想那些可怜的孩子，你怎么忍心反对？”", whyWrong: "情绪不能证明结论的真假，它绕过理性直接施压。", howToRespond: "承认情感后，回到事实与逻辑判断结论是否成立。", related: ["emotional-arousal", "vividness-bias"] },
  { slug: "bandwagon", title: "诉诸大众", category: "论证错误", summary: "因为多数人相信，就认为它正确。", example: "“大家都在买，所以肯定是好东西。”", whyWrong: "流行不等于正确，多数人也会集体犯错。", howToRespond: "独立评估证据，问‘除了流行还有别的理由吗’。", related: ["herd-mentality", "social-proof"] },
  { slug: "circular-reasoning", title: "循环论证", category: "推理错误", summary: "用结论本身作为论据。", example: "“这本书说的都是真的，因为书里说它绝不说谎。”", whyWrong: "前提依赖于结论，论证没有提供任何独立支持。", howToRespond: "指出论据与结论实为同一句话，要求外部证据。", related: ["confirmation-bias"] },
  { slug: "sunk-cost-fallacy", title: "诉诸沉没成本", category: "推理错误", summary: "用已投入为继续的理由。", example: "“都做了一年了，现在停就全白费了。”", whyWrong: "已花费且不可收回的成本不应影响对未来的判断。", howToRespond: "只比较未来的成本与收益，问‘从今天起还值得吗’。", related: ["sunk-cost", "loss-aversion"] },
  { slug: "appeal-to-nature", title: "诉诸自然", category: "语言陷阱", summary: "断言‘天然的’就是好的、对的。", example: "“这是纯天然的，所以一定健康无害。”", whyWrong: "‘自然’与‘有益’没有必然联系，许多天然之物有害。", howToRespond: "看具体证据，而非‘天然’标签。", related: ["halo-effect"] },
];

export const fallacies: Fallacy[] = seeds.map((s) => ({
  slug: s.slug,
  title: s.title,
  category: s.category,
  summary: s.summary,
  example: s.example,
  whyWrong: s.whyWrong,
  howToRespond: s.howToRespond,
  relatedBiases: s.related,
}));

export const fallacyMap = Object.fromEntries(fallacies.map((f) => [f.slug, f]));

export const fallacyCategories = ["全部", "推理错误", "论证错误", "语言陷阱"];

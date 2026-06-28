import type { Bias } from "@/lib/types";
import { misjudgments } from "@/lib/data/misjudgments";

type SeedEn = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  scenes: string[];
  defense: string;
  mechanism: string;
  mungerView: string;
};

const seedsEn: SeedEn[] = [
  { slug: "association-bias", title: "Association Bias", category: "Reasoning & interpretation", summary: "Because two things once appeared together, we wrongly assume a causal or value link.", scenes: ["Advertising", "Brands", "Past success"], defense: "Separate correlation from causation", mechanism: "The brain is built to form associations for fast reaction, but it often misreads 'appeared together' as 'caused each other,' so past success gets wrongly credited to an irrelevant factor.", mungerView: "Munger noted people bind reward to its irrelevant companions, repeating success in the wrong way." },
  { slug: "reward-punishment", title: "Reward/Punishment Superresponse", category: "Incentives & self-interest", summary: "Severely underestimating how powerfully reward and punishment shape behavior.", scenes: ["KPIs", "Sales commissions", "Exams", "Org management"], defense: "Check what the incentive actually rewards", mechanism: "Incentives shape behavior far more than intuition expects; bad incentives breed gaming, fraud and short-termism, while the person sincerely believes they're right.", mungerView: "Munger: 'Show me the incentive and I'll show you the outcome.' Never underestimate its power." },
  { slug: "self-serving-bias", title: "Self-Interest & Incentive Bias", category: "Incentives & self-interest", summary: "We tend to believe whatever is in our favor.", scenes: ["Investment pitches", "Sales talk", "Internal reports"], defense: "Ask 'who benefits?'", mechanism: "When a conclusion favors us, we unconsciously relax scrutiny, seek supporting evidence and sincerely believe it — quietly steered by our own interest.", mungerView: "Always ask where the other party's incentive lies — including your own, especially when the conclusion suits you." },
  { slug: "overconfidence", title: "Overconfidence", category: "Reasoning & interpretation", summary: "Overestimating our ability, our future and our correctness.", scenes: ["Startups", "Investing", "Personal plans"], defense: "Base rates + outside view", mechanism: "People generally think they're above average and underrate risk and time required. Without an outside reference, confidence becomes illusion and preparation falls short.", mungerView: "Admitting ignorance is the start of wisdom; knowing the edge of your circle beats enlarging it." },
  { slug: "denial", title: "Self-Deception & Denial", category: "Emotion & loss", summary: "Distorting reality to reduce pain or keep hope alive.", scenes: ["Losses", "Failing projects", "Relationship problems"], defense: "A face-the-facts checklist", mechanism: "When reality is too painful, the mind automatically denies or downplays it, keeping people invested in doomed things and dodging truths they must face.", mungerView: "Reality must be accepted even when unpleasant; denial only magnifies the cost over time." },
  { slug: "consistency-bias", title: "Consistency & Commitment Bias", category: "Reasoning & interpretation", summary: "Rejecting new evidence to stay consistent with past commitments.", scenes: ["Sunk cost", "Public commitments", "Strategy pivots"], defense: "A counter-evidence checklist", mechanism: "People have a strong drive to stay consistent, especially after a public commitment, rejecting conflicting new evidence even when it's more reliable.", mungerView: "Public commitment locks your stance; the louder the view, the harder to revise." },
  { slug: "deprivation-reaction", title: "Deprivation Reaction (Loss Aversion)", category: "Emotion & loss", summary: "We react far more to losing what we have than to gaining anew.", scenes: ["Pay cuts", "Removed perks", "Price increases"], defense: "Communicate ahead + adjust gradually", mechanism: "Losing equal value hurts about twice as much as gaining it pleases, so people react irrationally and fiercely to avoid loss.", mungerView: "Take away what people already have and you trigger a backlash far beyond expectation." },
  { slug: "status-quo-bias", title: "Status Quo Bias", category: "Emotion & loss", summary: "Preferring to keep the current state, reluctant to change.", scenes: ["Org transformation", "Legacy systems", "Default options"], defense: "Design the default", mechanism: "Change costs cognition and carries risk, so people favor the status quo and treat the default as 'safe,' even when change is better.", mungerView: "Inertia is a powerful force; organizations and individuals instinctively resist needed change." },
  { slug: "short-termism", title: "Short-Termism & Impatience", category: "Emotion & loss", summary: "Overvaluing immediate gains, undervaluing long-term consequences.", scenes: ["Consumption", "Investing", "Product growth"], defense: "10/10/10 thinking", mechanism: "Immediate rewards pull on the brain far more than larger delayed ones, so people sacrifice long-term interest for instant gratification.", mungerView: "The miracle of compounding belongs to the patient; impatience is the enemy of the long game." },
  { slug: "envy", title: "Envy & Comparison", category: "Social influence", summary: "Changing our judgment because others have something.", scenes: ["Social media", "Investment herding", "Workplace"], defense: "Anchor to your own goals", mechanism: "People rate themselves by comparison, and envy drives irrational rivalry, herding and revenge spending or investing.", mungerView: "Envy is the silliest of the deadly sins because it brings no pleasure at all." },
  { slug: "contrast-bias", title: "Contrast Misreaction", category: "Reasoning & interpretation", summary: "Judgment is swayed by the reference, not the thing itself.", scenes: ["Pricing", "Negotiation", "Consumption upgrades"], defense: "Check absolute values", mechanism: "The brain perceives by contrast, not absolutes, so showing a high price before the target makes it seem cheap — manipulating judgment.", mungerView: "Contrast distorts perception; sales and negotiation pros know it well." },
  { slug: "anchoring", title: "Anchoring Bias", category: "Reasoning & interpretation", summary: "Being over-influenced by an initial number or piece of information.", scenes: ["Valuation", "Quotes", "Salary talks"], defense: "Estimate from multiple anchors", mechanism: "The first number becomes the anchor for later judgment; even if baseless, estimates drift toward it.", mungerView: "An arbitrary starting number can quietly hijack your final judgment." },
  { slug: "vividness-bias", title: "Vividness Bias", category: "Memory & attention", summary: "The most recent, vivid information is overweighted.", scenes: ["News", "Short video", "Accident cases"], defense: "Correct with base rates", mechanism: "Vivid, recent, emotionally charged information is easier to recall and retrieve, so it gets too much weight, drowning out duller but truer statistics.", mungerView: "Dramatic cases drown out the silent majority and distort your sense of probability." },
  { slug: "omission-blindness", title: "Omission & Abstraction Blindness", category: "Memory & attention", summary: "Seeing only what's present, ignoring missing information and abstract variables.", scenes: ["Research", "Data analysis", "Contract review"], defense: "A missing-information checklist", mechanism: "People react only to information in front of them, struggling to notice 'what isn't there' and abstract relations, so survivorship bias and hidden clauses keep winning.", mungerView: "The invisible, missing evidence often matters more than what's in front of you." },
  { slug: "reciprocity", title: "Reciprocity Tendency", category: "Social influence", summary: "Feeling obliged to repay after receiving a favor.", scenes: ["Sales", "Gifts", "Business relations"], defense: "Delay commitment", mechanism: "Accepting a favor stirs a strong sense of obligation, so small gifts win disproportionate concessions and purchases.", mungerView: "Free samples and small gifts exist to trigger your reciprocity reflex." },
  { slug: "liking-disliking", title: "Liking/Disliking Bias", category: "Social influence", summary: "We trust those we like and dismiss those we dislike.", scenes: ["Interviews", "Investing", "Partnerships"], defense: "Separate facts from people", mechanism: "Our feelings about a person spill over to our evaluation of their views and products, so judgment is driven by emotion rather than fact.", mungerView: "We overrate those we like and underrate those we dislike, distorting our read of the facts." },
  { slug: "social-proof", title: "Social Proof", category: "Social influence", summary: "Imitating the majority under uncertainty or pressure.", scenes: ["Bull markets", "Hot startups", "Crowd behavior"], defense: "Judge independently", mechanism: "Under uncertainty, people treat others' behavior as a clue to the right answer, so herding amplifies bubbles and panics.", mungerView: "When everyone is doing the same thing is exactly when you should think independently." },
  { slug: "authority-bias", title: "Authority Misinfluence", category: "Social influence", summary: "Over-obeying experts, leaders or authority.", scenes: ["Medicine", "Investing", "Org decisions"], defense: "Evidence first", mechanism: "Facing authority, people tend to surrender independent judgment and obey, even when the authority is clearly wrong, and few question it.", mungerView: "Blind deference to authority leads smart people into collectively obvious mistakes." },
  { slug: "narrative-bias", title: "Hindsight Storytelling & Narrative Bias", category: "Reasoning & interpretation", summary: "After an outcome, constructing a plausible-sounding story.", scenes: ["Reviews", "Financial commentary"], defense: "Record predictions beforehand", mechanism: "The brain craves causal stories and fabricates coherent explanations after the fact, creating an 'I knew it' illusion that hides the real uncertainty.", mungerView: "In hindsight everything looks inevitable, but that's narrative, not the judgment you actually had." },
  { slug: "reason-respecting", title: "Reason-Respecting Tendency", category: "Reasoning & interpretation", summary: "Any reason, even a weak one, makes us more compliant.", scenes: ["Queues", "Sales", "Org orders"], defense: "Check the quality of the reason", mechanism: "The word 'because' alone raises compliance; people are more sensitive to the form of a reason than its content.", mungerView: "Give a reason, however thin, and people comply more than with none at all." },
  { slug: "believe-first", title: "Believe First, Doubt Later", category: "Memory & attention", summary: "We accept first and doubt later — especially when distracted.", scenes: ["Rumors", "Ads", "Short video"], defense: "Delay judgment", mechanism: "Understanding a statement first means provisionally accepting it; doubt is an effortful second step that, when tired or distracted, often never happens.", mungerView: "People believe first and doubt later — and often the doubting never comes." },
  { slug: "memory-bias", title: "Memory Bias", category: "Memory & attention", summary: "Memory is selective, reconstructive and suggestible.", scenes: ["Reviews", "Testimony", "Relationship conflict"], defense: "Record original evidence", mechanism: "Memory isn't a recording but a reconstruction each time, altered by emotion, suggestion and later information, making us overconfident in 'what we remember.'", mungerView: "What you remember is often a heavily reconstructed version, not the fact itself." },
  { slug: "action-impulse", title: "Action Impulse", category: "Stress & chaos", summary: "Wanting to 'do something' even without sufficient reason.", scenes: ["Frequent trading", "Managerial meddling"], defense: "Keep a 'do nothing' option", mechanism: "Under pressure or boredom, people feel a strong urge to 'do something,' even when inaction is the better choice.", mungerView: "Often the best action is no action — but it's hard for people to sit still." },
  { slug: "expression-impulse", title: "Expression Impulse", category: "Stress & chaos", summary: "Wanting to say something even without a real opinion.", scenes: ["Meetings", "Social media", "Expert commentary"], defense: "Allow silence", mechanism: "To seem engaged or expert, people speak up with nothing to say, creating noise or even rash commitments.", mungerView: "Saying 'I don't know' takes courage, but it beats voicing an ignorant opinion." },
  { slug: "emotional-arousal", title: "Emotional Arousal", category: "Stress & chaos", summary: "Making rash judgments under strong emotion.", scenes: ["Anger", "Excitement", "Fear", "Anxiety"], defense: "A cooling-off period", mechanism: "Strong emotion hijacks reason, leading to decisions later regretted, made in anger, fear or euphoria.", mungerView: "Big decisions made at an emotional peak are often the worst ones." },
  { slug: "stress-chaos", title: "Stress & Chaos", category: "Stress & chaos", summary: "Stress degrades judgment quality.", scenes: ["Crises", "PR", "Exams", "Trading"], defense: "Plans and checklists", mechanism: "High pressure narrows attention, speeds impulse and weakens deliberation, making us most error-prone exactly when we most need clarity.", mungerView: "Under stress people fall back on instinct; only a checklist prepared in advance can save you." },
  { slug: "physical-mental-state", title: "Physical/Mental State Effects", category: "Stress & chaos", summary: "Pain, illness, fatigue and drugs impair cognition.", scenes: ["Late-night decisions", "Deciding while ill"], defense: "Postpone major decisions", mechanism: "Physiological state directly affects judgment; fatigue, hunger and pain make people short-sighted, irritable and low on self-control.", mungerView: "When your body is off, postpone big decisions until you recover." },
  { slug: "lollapalooza", title: "The Lollapalooza Effect", category: "Multi-factor stacking", summary: "Several tendencies act at once, producing extreme outcomes.", scenes: ["Pyramid schemes", "Bubbles", "Catastrophic org decisions"], defense: "Multi-person review + checklist", mechanism: "When several biases stack in the same direction (authority + social proof + deprivation + commitment), their combined force far exceeds the sum, causing catastrophic collective irrationality.", mungerView: "Munger's Lollapalooza effect: when several psychological forces push the same way at once, the result is extreme and crazy." },
];

const combosByCategoryEn: Record<string, string[]> = {
  "Incentives & self-interest": ["self-serving-bias", "authority-bias", "consistency-bias"],
  "Emotion & loss": ["loss-aversion", "sunk-cost", "denial"],
  "Social influence": ["social-proof", "authority-bias", "liking-disliking"],
  "Memory & attention": ["vividness-bias", "narrative-bias", "confirmation-bias"],
  "Reasoning & interpretation": ["confirmation-bias", "anchoring", "narrative-bias"],
  "Stress & chaos": ["emotional-arousal", "action-impulse", "stress-chaos"],
  "Multi-factor stacking": ["authority-bias", "social-proof", "deprivation-reaction"],
};

function build(s: SeedEn): Bias {
  return {
    slug: s.slug,
    title: s.title,
    category: s.category,
    mungerNumber: misjudgments.find((m) => m.slug === s.slug)?.mungerNumber,
    isMunger: true,
    summary: s.summary,
    mungerView: s.mungerView,
    mechanism: s.mechanism,
    whyHappens:
      "This is a mental shortcut the brain evolved for fast survival — efficient in primitive settings, but often failing in modern complex decisions.",
    triggers: s.scenes,
    symptoms: [
      "Seeking only information that supports the current leaning",
      "Reacting more strongly under stress or emotion",
      "Being able to rationalize the judgment after the fact",
    ],
    scenarios: [
      `Typical settings: ${s.scenes.join(", ")}.`,
      "It recurs across business, investment, product and management decisions, usually unnoticed by the person.",
    ],
    combos: combosByCategoryEn[s.category] ?? ["confirmation-bias", "authority-bias"],
    harm: "It systematically pulls major decisions away from the facts, with errors surfacing only after the outcome — at high cost.",
    howToDetect: [
      "Notice whether you're only gathering supporting evidence",
      "Sense whether emotion, incentives or crowd pressure is rising",
      "Ask: if the conclusion were the opposite, what facts would hold?",
    ],
    defenses: [
      s.defense,
      "Actively seek and write down evidence that would overturn the judgment",
      "Bring in an outside view or independent multi-person review",
      "Set a cooling-off period and a checklist for major decisions",
    ],
    exercises: [
      `Recall a decision shaped by "${s.title}" — afterward, which signals were ignored?`,
      `Design a checklist that triggers a reverse check next time you hit "${s.scenes[0]}".`,
    ],
    relatedModels: ["inversion", "bayesian-updating", "decision-journal"],
    relatedCases: ["ai-app", "double-down-loss"],
    stage: "—",
    risk: "—",
  };
}

export const misjudgmentsEnMap: Record<string, Bias> = Object.fromEntries(
  seedsEn.map((s) => [s.slug, build(s)])
);

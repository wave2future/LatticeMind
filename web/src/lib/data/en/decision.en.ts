import type { Locale } from "@/lib/i18n/config";
import {
  biasCheckItems, modelScanDimensions, reviewQuestions, systemMapVariables,
} from "@/lib/data/decisionTemplates";

const biasCheckItemsEn = [
  { key: "Incentive", q: "Who benefits from this decision?" },
  { key: "Self-interest", q: "Am I believing only what favors me?" },
  { key: "Confirmation", q: "Did I actively seek opposing evidence?" },
  { key: "Anchoring", q: "Am I swayed by the first number?" },
  { key: "Social proof", q: "Am I doing this just because everyone else is?" },
  { key: "Authority", q: "Am I over-trusting some expert or big name?" },
  { key: "Loss aversion", q: "Am I just trying not to admit defeat?" },
  { key: "Sunk cost", q: "If I started fresh today, would I still do this?" },
  { key: "Emotion", q: "Am I excited, fearful, angry or anxious right now?" },
  { key: "Time", q: "Can this decision wait 24 hours?" },
  { key: "System", q: "Which feedback loops will this decision change?" },
  { key: "2nd-order", q: "What side effects could this cause a year out?" },
];

const modelScanDimensionsEn = [
  { discipline: "Math", models: "Expected value, probability, sample size" },
  { discipline: "Economics", models: "Opportunity cost, supply-demand, willingness to pay" },
  { discipline: "Psychology", models: "Loss aversion, herding, confirmation bias" },
  { discipline: "Systems", models: "Feedback loops, bottlenecks, limits to growth" },
  { discipline: "Business", models: "Distribution, moat, switching cost" },
  { discipline: "Risk", models: "Sunk cost, overconfidence, survivorship bias" },
];

const reviewQuestionsEn = [
  "What was the judgment at the time?",
  "What evidence did it rest on?",
  "What information was ignored?",
  "What was the outcome?",
  "Was the outcome caused by luck?",
  "Which models applied?",
  "Which biases appeared?",
  "How to avoid it next time?",
];

const systemMapVariablesEn = [
  "New users", "Existing retention", "Product experience", "Word of mouth", "Ad spend",
  "CAC", "LTV", "Support response", "Feature complexity", "Team dev speed",
];

export function getBiasCheckItems(locale: Locale) {
  return locale === "en" ? biasCheckItemsEn : biasCheckItems;
}
export function getModelScanDimensions(locale: Locale) {
  return locale === "en" ? modelScanDimensionsEn : modelScanDimensions;
}
export function getReviewQuestions(locale: Locale) {
  return locale === "en" ? reviewQuestionsEn : reviewQuestions;
}
export function getSystemMapVariables(locale: Locale) {
  return locale === "en" ? systemMapVariablesEn : systemMapVariables;
}

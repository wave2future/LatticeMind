import { models, modelMap } from "./models";
import { misjudgments, misjudgmentMap } from "./misjudgments";
import { biases, biasMap } from "./biases";
import { fallacies, fallacyMap } from "./fallacies";
import { systemTools, systemToolMap, archetypes, archetypeMap } from "./systems";
import { cases, caseMap } from "./cases";
import { paths, pathMap } from "./paths";
import { decisionTemplates, decisionTemplateMap } from "./decisionTemplates";
import { disciplines, disciplineMap } from "./disciplines";

export * from "./models";
export * from "./misjudgments";
export * from "./biases";
export * from "./fallacies";
export * from "./systems";
export * from "./cases";
export * from "./paths";
export * from "./decisionTemplates";
export * from "./disciplines";

// Unified lookup for cross-references (a related-bias slug may live in either set).
export const allBiasMap = { ...biasMap, ...misjudgmentMap };

export function resolveBias(slug: string) {
  return allBiasMap[slug];
}

export function biasHref(slug: string): string | null {
  if (misjudgmentMap[slug]) return `/misjudgment/${slug}`;
  if (biasMap[slug]) return `/biases/${slug}`;
  return null;
}

export function modelHref(slug: string): string | null {
  return modelMap[slug] ? `/models/${slug}` : null;
}

export function caseHref(slug: string): string | null {
  return caseMap[slug] ? `/cases/${slug}` : null;
}

export function systemHref(slug: string): string | null {
  return systemToolMap[slug] ? `/systems/${slug}` : null;
}

export const platformStats = {
  models: "100+",
  biases: "50+",
  tendencies: "28",
  paths: "5",
  casesCount: "300+",
};

export {
  models,
  modelMap,
  misjudgments,
  misjudgmentMap,
  biases,
  biasMap,
  fallacies,
  fallacyMap,
  systemTools,
  systemToolMap,
  archetypes,
  archetypeMap,
  cases,
  caseMap,
  paths,
  pathMap,
  decisionTemplates,
  decisionTemplateMap,
  disciplines,
  disciplineMap,
};

import type { Locale } from "@/lib/i18n/config";
import { term, terms } from "@/lib/i18n/terms";
import type {
  MentalModel, Bias, Fallacy, SystemTool, SystemArchetype, CaseStudy, LearningPath, Discipline,
} from "@/lib/types";
import { modelsEn } from "./en/models.en";
import { misjudgmentsEnMap } from "./en/misjudgments.en";
import { biasesEnMap } from "./en/biases.en";
import { fallaciesEn, systemToolsEn, archetypesEn, casesEn, pathsEn, disciplinesEn } from "./en/content.en";

export function localizeModel(m: MentalModel, locale: Locale): MentalModel {
  if (locale === "zh") return m;
  const o = modelsEn[m.slug];
  return { ...m, ...(o ?? {}), category: o?.category ?? term(m.category, locale) };
}
export function localizeModels(list: MentalModel[], locale: Locale): MentalModel[] {
  return list.map((m) => localizeModel(m, locale));
}

export function localizeMisjudgment(b: Bias, locale: Locale): Bias {
  if (locale === "zh") return b;
  return misjudgmentsEnMap[b.slug] ?? b;
}
export function localizeMisjudgments(list: Bias[], locale: Locale): Bias[] {
  return list.map((b) => localizeMisjudgment(b, locale));
}

export function localizeBias(b: Bias, locale: Locale): Bias {
  if (locale === "zh") return b;
  return biasesEnMap[b.slug] ?? b;
}
export function localizeBiases(list: Bias[], locale: Locale): Bias[] {
  return list.map((b) => localizeBias(b, locale));
}

export function localizeFallacy(f: Fallacy, locale: Locale): Fallacy {
  if (locale === "zh") return f;
  const o = fallaciesEn[f.slug];
  return { ...f, ...(o ?? {}), category: term(f.category, locale) };
}
export function localizeFallacies(list: Fallacy[], locale: Locale): Fallacy[] {
  return list.map((f) => localizeFallacy(f, locale));
}

export function localizeSystemTool(t: SystemTool, locale: Locale): SystemTool {
  if (locale === "zh") return t;
  const o = systemToolsEn[t.slug];
  return { ...t, ...(o ?? {}), toolType: term(t.toolType, locale) };
}
export function localizeSystemTools(list: SystemTool[], locale: Locale): SystemTool[] {
  return list.map((t) => localizeSystemTool(t, locale));
}

export function localizeArchetype(a: SystemArchetype, locale: Locale): SystemArchetype {
  if (locale === "zh") return a;
  return { ...a, ...(archetypesEn[a.slug] ?? {}) };
}
export function localizeArchetypes(list: SystemArchetype[], locale: Locale): SystemArchetype[] {
  return list.map((a) => localizeArchetype(a, locale));
}

export function localizeCase(c: CaseStudy, locale: Locale): CaseStudy {
  if (locale === "zh") return c;
  const o = casesEn[c.slug];
  return {
    ...c,
    ...(o ?? {}),
    scenario: term(c.scenario, locale),
    tags: terms(c.tags, locale),
  };
}
export function localizeCases(list: CaseStudy[], locale: Locale): CaseStudy[] {
  return list.map((c) => localizeCase(c, locale));
}

export function localizePath(p: LearningPath, locale: Locale): LearningPath {
  if (locale === "zh") return p;
  return { ...p, ...(pathsEn[p.slug] ?? {}) };
}
export function localizePaths(list: LearningPath[], locale: Locale): LearningPath[] {
  return list.map((p) => localizePath(p, locale));
}

export function localizeDiscipline(d: Discipline, locale: Locale): Discipline {
  if (locale === "zh") return d;
  const o = disciplinesEn[d.slug];
  return o ? { ...d, name: o.name, summary: o.summary } : d;
}
export function localizeDisciplines(list: Discipline[], locale: Locale): Discipline[] {
  return list.map((d) => localizeDiscipline(d, locale));
}

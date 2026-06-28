export type Difficulty = "入门" | "进阶" | "高阶";

export interface Discipline {
  id: string;
  name: string;
  slug: string;
  summary: string;
  icon: string;
  color: string;
}

export interface MentalModel {
  slug: string;
  title: string;
  category: string; // 通用思维 / 学科模型 / 第一性原理 / 商业模型 / 投资模型 / 管理模型
  discipline: string; // discipline slug
  summary: string; // one sentence
  coreQuestion: string;
  firstPrinciple: string;
  mechanism: string;
  useCases: string[];
  notApplicable: string[];
  misuse: string[];
  relatedBiases: string[];
  relatedSystems: string[];
  example: string;
  inDecision: string;
  selfTests: string[];
  inversion: string;
  relatedModels: string[];
  difficulty: Difficulty;
  icon: string;
  color: string;
  hot?: number; // learners
  // Optional rich blocks (e.g. for math-heavy models like Bayesian updating).
  formula?: {
    expression: string;
    params: { symbol: string; meaning: string }[];
    note?: string;
  };
  workedExample?: {
    title: string;
    setup: string[];
    steps: { label: string; calc: string }[];
    conclusion: string;
  };
}

export interface Principle {
  slug: string;
  name: string;
  discipline: string;
  oneSentence: string;
  definition: string;
  mechanism: string;
  applications: string[];
  limitations: string[];
  relatedModels: string[];
}

export interface Bias {
  slug: string;
  title: string;
  category: string;
  mungerNumber?: number;
  isMunger: boolean;
  summary: string;
  mungerView?: string;
  mechanism: string;
  whyHappens: string;
  triggers: string[];
  symptoms: string[];
  scenarios: string[]; // business/investment/product/management cases
  combos: string[]; // related biases combos
  harm: string;
  howToDetect: string[];
  defenses: string[];
  exercises: string[];
  relatedModels: string[];
  relatedCases: string[];
  stage: string; // cognitive stage
  risk: string; // decision risk
}

export interface Fallacy {
  slug: string;
  title: string;
  category: string;
  summary: string;
  example: string;
  whyWrong: string;
  howToRespond: string;
  relatedBiases: string[];
}

export interface SystemTool {
  slug: string;
  title: string;
  toolType: string;
  summary: string;
  howToUse: string;
  layers?: string[];
  example: string;
  relatedModels: string[];
}

export interface SystemArchetype {
  slug: string;
  name: string;
  explanation: string;
  scenarios: string;
  leverage: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  scenario: string;
  problem: string;
  background: string;
  logo?: string;
  analysis: { dimension: string; content: string }[];
  models: string[];
  biases: string[];
  systemStructure: string[];
  keyVariables: string[];
  possibleMisjudgments: string[];
  checklist: string[];
  conclusion: string;
  reviewQuestions: string[];
  lesson: string;
  difficulty: Difficulty;
  tags: string[];
}

export interface LearningPath {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  outcome: string;
  lessons: { title: string; summary: string }[];
  learners: string;
  icon: string;
  color: string;
  progress?: number;
}

export interface DecisionTemplate {
  slug: string;
  title: string;
  scenario: string;
  description: string;
  dimensions: { dimension: string; models: string }[];
  modelChecklist: string[];
  biasChecklist: string[];
  systemQuestions: string[];
  output: string[];
}

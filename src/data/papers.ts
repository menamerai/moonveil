export interface Paper {
  num: string;
  title: string;
  date: string; // YYYY-MM-DD
  url: string;
}

export const papers: Paper[] = [
  {
    num: "001",
    title: "Sycophancy Is Not One Thing: Causal Separation of Sycophantic Behaviors in LLMs",
    date: "YYYY-MM-DD",
    url: "https://arxiv.org/abs/2509.21305",
  },
  {
    num: "002",
    title: "CHEER-Ekman: Fine-grained Embodied Emotion Classification",
    date: "YYYY-MM-DD",
    url: "https://aclanthology.org/2025.acl-short.88/",
  },
  {
    num: "003",
    title: "Anatomy of a Feeling: Narrating Embodied Emotions via Large Vision-Language Models",
    date: "YYYY-MM-DD",
    url: "https://aclanthology.org/2025.findings-emnlp.1276/",
  },
  {
    num: "004",
    title: "Objective Matters: Fine-Tuning Objectives Shape Safety, Robustness, and Persona Drift",
    date: "YYYY-MM-DD",
    url: "https://arxiv.org/abs/2601.12639",
  },
];

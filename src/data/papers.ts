export interface Paper {
  num: string;
  title: string;
  year: number;
  url: string;
}

export const papers: Paper[] = [
  {
    num: "001",
    title: "Sycophancy Is Not One Thing: Causal Separation of Sycophantic Behaviors in LLMs",
    year: 2024,
    url: "https://scholar.google.com/citations?user=LSGBjPoAAAAJ&hl=en",
  },
  {
    num: "002",
    title: "CHEER-Ekman: Fine-grained Embodied Emotion Classification",
    year: 2024,
    url: "https://scholar.google.com/citations?user=LSGBjPoAAAAJ&hl=en",
  },
  {
    num: "003",
    title: "Anatomy of a Feeling: Narrating Embodied Emotions via Large Vision-Language Models",
    year: 2024,
    url: "https://scholar.google.com/citations?user=LSGBjPoAAAAJ&hl=en",
  },
  {
    num: "004",
    title: "Objective Matters: Fine-Tuning Objectives Shape Safety, Robustness, and Persona Drift",
    year: 2024,
    url: "https://scholar.google.com/citations?user=LSGBjPoAAAAJ&hl=en",
  },
];

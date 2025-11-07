import type { GuidelineCard } from './types';

export const GUIDELINE_CARDS: GuidelineCard[] = [
  // Intro Card
  {
    type: 'title',
    title: '🏛️ University Guidelines for GenAI',
    content: "These guidelines establish the principles for ethical, secure, and academically responsible use of Generative Artificial Intelligence (GenAI) tools across all university activities. \n\nClick 'Next' to begin.",
  },
  // Section I
  {
    type: 'section_title',
    title: 'I. Foundational Principles',
    content: "Let's start with the three core rules that form the foundation of our policy.",
  },
  {
    type: 'content',
    title: '1. Human Accountability (The Core Rule)',
    content: "All students, researchers, and staff are **ultimately responsible** for the accuracy, ethical implications, security risks, and integrity of their work, regardless of GenAI involvement.",
  },
  {
    type: 'content',
    title: '2. Critical Engagement',
    content: "GenAI must be used as a tool to **assist, not replace**, core human skills like critical thinking, analysis, and original argumentation. Users must verify all AI outputs for factual errors, bias, and potential fabrication.",
  },
  {
    type: 'content',
    title: '3. IP and Data Ownership',
    content: "AI cannot be an author or inventor, and its outputs do not automatically grant copyright or patent ownership. The **human user retains full responsibility** for all Intellectual Property (IP) implications.",
  },
  // Section II
  {
    type: 'section_title',
    title: 'II. Confidentiality and Data Security (The Red Line)',
    content: 'This is the most critical section regarding data protection. The use of public GenAI tools with sensitive data is **strictly prohibited**.',
  },
  {
    type: 'content',
    title: 'Prohibited Data Input',
    content: "Users must **never upload** any confidential, proprietary, or non-public information into publicly available GenAI models. This includes: \n- Personally Identifiable Information (PII) or sensitive research data. \n- Unpublished Manuscripts, Grant Proposals, or Peer Review Reports. \n- University Intellectual Property (IP). \n- Copyrighted materials.",
  },
  {
    type: 'content',
    title: 'Secure Environments',
    content: 'Any work involving sensitive data must be conducted **exclusively within University-approved, secured, and contracted enterprise AI platforms** where data is protected.',
  },
  {
    type: 'content',
    title: 'Reviewer Confidentiality',
    content: 'Reviewers and editors are **strictly prohibited** from uploading any part of an unpublished manuscript or review report into public GenAI tools. Breach of this rule will result in misconduct proceedings.',
  },
  // Section III
  {
    type: 'section_title',
    title: 'III. Academic Integrity and Disclosure Standards',
    content: 'Honesty and transparency are paramount. Here’s how to maintain academic integrity when using GenAI.',
  },
  {
    type: 'content',
    title: 'Authorship and Plagiarism',
    content: '**No AI Authorship:** GenAI tools cannot be listed as an author or co-author. \n\n**Plagiarism:** Submitting AI-generated content as one’s own without proper attribution constitutes plagiarism.',
  },
  {
    type: 'content',
    title: 'Mandatory Disclosure Statement',
    content: 'All submitted academic work using GenAI must include a **"GenAI Usage Statement"**. This should be placed in the Methods section, Acknowledgments, or a dedicated footnote.',
  },
  {
    type: 'content',
    title: 'Required Disclosure Detail',
    content: 'The statement must specify the **name and version of the AI tool**, the **specific purpose** of its use (e.g., "for outlining"), and confirm the human author verified the output. Students must be prepared to provide the **exact prompts** used upon request.',
  },
  {
    type: 'content',
    title: 'Misrepresenting AI Role',
    content: "**Falsely claiming limited use** of GenAI (e.g., claiming it was only for grammar when it performed data analysis) is a specific form of academic deception and will be treated as misconduct.",
  },
  // Section IV
  {
    type: 'section_title',
    title: 'IV. Use in Research and Methodology',
    content: 'GenAI can be a powerful research tool, but its use must be methodical and transparent.',
  },
  {
    type: 'content',
    title: 'Data Analysis and Code Generation',
    content: 'Researchers must **manually check all AI-generated code** for errors and security flaws. They must also document steps taken to check for **algorithmic bias** in the analysis process.',
  },
  {
    type: 'content',
    title: 'Fabrication and Synthetic Data',
    content: "**Fabrication:** Using GenAI to fabricate or manipulate research data, results, or sources is **strictly prohibited**. \n\n**Synthetic Data:** Creating synthetic data is permitted only with **explicit ethical approval** and must be clearly labeled as such.",
  },
  // Section V
  {
    type: 'section_title',
    title: 'V. Teaching, Learning, and Assessment',
    content: 'Finally, here’s how GenAI integrates into our educational mission.',
  },
  {
    type: 'content',
    title: 'AI Literacy and Assessment',
    content: "**Assessment Design:** Staff must prioritize assessments that test **higher-order critical thinking** to discourage over-reliance on GenAI. \n\n**AI Literacy Milestones:** Students must complete **mandatory AI literacy modules** before using GenAI in high-stakes assessments.",
  },
  {
    type: 'content',
    title: 'Administrative Use & High-Stakes Decisions',
    content: "Staff using GenAI must adhere to all data security rules. The university mandates a **human-in-the-loop audit process** for any high-stakes decisions (e.g., admissions) informed by AI output to mitigate bias.",
  },
  // Final Card
  {
    type: 'title',
    title: 'You are now ready!',
    content: 'You have reviewed the core principles of the university’s GenAI guidelines. It’s time to test your knowledge.',
  },
];
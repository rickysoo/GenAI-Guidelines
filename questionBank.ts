import type { QuizQuestion } from './types';

const questionBank: QuizQuestion[] = [
  // ===================================
  // Level 1: Novice (Easy)
  // ===================================
  {
    "questionText": "According to the 'Human Accountability' principle, who is ultimately responsible for work produced with GenAI?",
    "options": [
      "The GenAI tool itself",
      "The university's IT department",
      "The human user (student, researcher, or staff)",
      "The creator of the GenAI model"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The Core Rule of 'Human Accountability' states that the human user is always ultimately responsible for the accuracy, ethics, and integrity of their work, regardless of GenAI involvement.",
    "difficulty": 1
  },
  {
    "questionText": "What type of information is strictly prohibited from being uploaded into public GenAI tools under the 'Red Line' rule?",
    "options": [
      "Publicly available research papers",
      "Course syllabus information",
      "Unpublished manuscripts and grant proposals",
      "Personal class notes about a public lecture"
    ],
    "correctAnswerIndex": 2,
    "explanation": "The 'Confidentiality and Data Security' section explicitly lists unpublished manuscripts, grant proposals, and other sensitive, non-public information as prohibited data input for public GenAI tools.",
    "difficulty": 1
  },
  {
    "questionText": "Can a GenAI tool be listed as a co-author on an academic paper?",
    "options": [
      "Yes, if it did most of the writing.",
      "Yes, but only with the professor's permission.",
      "No, AI cannot be an author or inventor.",
      "Only if the AI is a university-approved tool."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The guidelines state under 'No AI Authorship' that GenAI tools cannot be listed as an author or co-author.",
    "difficulty": 1
  },
  {
    "questionText": "What is the core purpose of 'Critical Engagement' when using GenAI?",
    "options": [
      "To accept all AI output as factual and final.",
      "To use AI as a tool to assist, not replace, human skills like critical thinking.",
      "To only use AI for generating final drafts of papers.",
      "To engage with the AI in a conversational manner."
    ],
    "correctAnswerIndex": 1,
    "explanation": "'Critical Engagement' requires users to use GenAI to assist, not replace, core human skills and to verify all outputs for errors and bias.",
    "difficulty": 1
  },
  {
    "questionText": "Submitting AI-generated content as one's own work without proper attribution constitutes what form of academic misconduct?",
    "options": [
      "Copyright infringement",
      "Plagiarism",
      "Data fabrication",
      "Acceptable use"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The guidelines clearly state that submitting AI-generated content without proper attribution is plagiarism.",
    "difficulty": 1
  },
  {
    "questionText": "Are students required to complete any training before using GenAI in high-stakes assessments?",
    "options": [
      "No, they are expected to learn on their own.",
      "Yes, they must complete mandatory AI literacy modules.",
      "It is recommended, but not mandatory.",
      "Only if they are graduate students."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The 'AI Literacy Milestones' section mandates that students complete AI literacy modules before using GenAI in research or high-stakes assessments.",
    "difficulty": 1
  },
  {
    "questionText": "Which of the following must be included in a 'GenAI Usage Statement'?",
    "options": [
        "The cost of the AI tool used.",
        "The name and version of the AI tool.",
        "The time of day the AI was used.",
        "A log of all conversations with the AI."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The guidelines require the disclosure statement to specify the name and version of the AI tool, its specific purpose, and confirmation of verification.",
    "difficulty": 1
  },
  {
    "questionText": "According to the guidelines, using GenAI to invent data or sources for a research paper is known as what?",
    "options": [
        "Synthetic data creation",
        "Creative writing",
        "Fabrication",
        "Data analysis"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Using GenAI to fabricate or manipulate research data, results, or sources is strictly prohibited and constitutes severe research misconduct.",
    "difficulty": 1
  },

  // ===================================
  // Level 2: Practitioner (Medium)
  // ===================================
  {
    "questionText": "A student uses GenAI to paraphrase several paragraphs from a textbook for their essay. They do not cite the GenAI or the textbook. What academic integrity violation has occurred?",
    "options": [
      "Misrepresenting AI Role",
      "Plagiarism",
      "Fabrication",
      "No violation has occurred as it was just paraphrasing"
    ],
    "correctAnswerIndex": 1,
    "explanation": "Submitting AI-generated content (including heavy paraphrasing) as one's own without proper attribution constitutes plagiarism, as stated in the 'Academic Integrity' section.",
    "difficulty": 2
  },
  {
    "questionText": "A researcher uses GenAI to help write Python scripts for data analysis. What is their primary responsibility according to the guidelines?",
    "options": [
      "To list the AI as a co-author on the research paper.",
      "To ensure the AI has the latest software updates before use.",
      "To manually check all AI-generated code for errors, security flaws, and algorithmic bias.",
      "To use the code only if it was generated by a university-approved AI."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The 'Use in Research and Methodology' section requires researchers to manually verify all AI-generated code for errors and bias and to document the steps taken.",
    "difficulty": 2
  },
  {
    "questionText": "A staff member is creating a departmental newsletter and uses a public GenAI to summarize a confidential internal report for an article. Why is this a violation of university policy?",
    "options": [
      "Because the summarization might not be accurate.",
      "Because they are uploading confidential, non-public university information into a public tool.",
      "Because the GenAI cannot be cited as a source in a newsletter.",
      "Because they did not get permission from their manager first."
    ],
    "correctAnswerIndex": 1,
    "explanation": "This is a direct violation of the 'Prohibited Data Input' rule, which forbids uploading confidential administrative records into publicly available GenAI models.",
    "difficulty": 2
  },
  {
    "questionText": "A student is struggling with a coding assignment. They use GenAI to generate the entire solution, then submit it as their own work with no changes. Which two rules have they most clearly broken?",
    "options": [
      "IP Ownership and Data Fabrication",
      "Critical Engagement and Plagiarism",
      "Reviewer Confidentiality and AI Authorship",
      "Data Security and Synthetic Data"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The student failed to use the AI as an assistant ('Critical Engagement') and instead used it to replace their own work, which they then submitted without attribution ('Plagiarism').",
    "difficulty": 2
  },
  {
    "questionText": "If a student uses GenAI for brainstorming ideas for a paper, what must they do to comply with disclosure standards?",
    "options": [
        "They don't need to disclose brainstorming.",
        "Include a 'GenAI Usage Statement' mentioning its use for 'outlining' or 'idea generation'.",
        "Submit the entire chat history with the AI as an appendix.",
        "Get written permission from the instructor before starting."
    ],
    "correctAnswerIndex": 1,
    "explanation": "All use of GenAI for academic work must be disclosed. The statement must specify the purpose, such as 'for outlining' or 'idea generation'.",
    "difficulty": 2
  },
  {
    "questionText": "A student uses an approved, secure university AI platform to analyze sensitive research data. Is this permissible?",
    "options": [
        "No, sensitive data can never be used with AI.",
        "Only if the student is a PhD candidate.",
        "Yes, because the work is conducted within a university-approved, secure environment.",
        "No, because AI cannot be used for data analysis."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The guidelines permit the use of AI with sensitive data, but only 'exclusively within University-approved, secured, and contracted enterprise AI platforms'.",
    "difficulty": 2
  },

  // ===================================
  // Level 3: Expert (Hard)
  // ===================================
  {
    "questionText": "A faculty member on a hiring committee uses a public GenAI tool to summarize a candidate's lengthy CV to save time. The candidate did not consent to this. Which two principles are most directly violated?",
    "options": [
      "IP and Data Ownership & AI Literacy Milestones",
      "No AI Authorship & Plagiarism",
      "Confidentiality/Data Security & Algorithmic Bias in Decisions",
      "Synthetic Data & Reviewer Confidentiality"
    ],
    "correctAnswerIndex": 2,
    "explanation": "Uploading a CV (containing Personally Identifiable Information) violates the 'Confidentiality and Data Security' rule. Using an AI's output for a high-stakes decision like hiring without a human-in-the-loop audit process violates the 'Algorithmic Bias in Decisions' rule.",
    "difficulty": 3
  },
  {
    "questionText": "A student uses GenAI to generate an outline, refine the language of their thesis, and create several charts based on their collected data. In their mandatory disclosure, they only state, 'GenAI was used for grammar checks.' Which specific violation have they committed?",
    "options": [
      "Data Fabrication",
      "Misrepresenting AI Role",
      "A minor ethics breach, but not a formal violation.",
      "Breach of Reviewer Confidentiality"
    ],
    "correctAnswerIndex": 1,
    "explanation": "The student has committed 'Misrepresenting AI Role,' which is a specific form of academic deception, by failing to disclose the full extent of the GenAI's contribution to their work. This is treated as misconduct.",
    "difficulty": 3
  },
  {
    "questionText": "A research team wants to use GenAI to create synthetic patient data for pilot testing a new analysis model, because real patient data is difficult to acquire. According to the guidelines, this is:",
    "options": [
      "Strictly prohibited under all circumstances.",
      "Permitted only with explicit ethical approval and must be clearly labeled as synthetic.",
      "Allowed as long as the data looks realistic.",
      "Only permitted if the GenAI tool is HIPAA compliant."
    ],
    "correctAnswerIndex": 1,
    "explanation": "The section on 'Synthetic Data' states that its creation is permitted but requires explicit ethical approval and clear labeling in all outputs and publications.",
    "difficulty": 3
  },
  {
    "questionText": "A journal editor receives a manuscript for peer review. They use a public GenAI to check for plagiarism and summarize the key findings to speed up their workflow. Why is this a severe breach of policy?",
    "options": [
      "Because the GenAI's plagiarism check might be unreliable.",
      "Because the summary might miss key nuances of the research.",
      "Because it violates 'IP Ownership' as the AI now owns part of the summary.",
      "Because it violates 'Reviewer Confidentiality' by uploading an unpublished manuscript to a public tool."
    ],
    "correctAnswerIndex": 3,
    "explanation": "This is a direct and severe violation of 'Reviewer Confidentiality,' which strictly prohibits uploading any part of an unpublished manuscript into public GenAI tools. Breach can lead to misconduct proceedings.",
    "difficulty": 3
  },
  {
    "questionText": "An admissions officer uses a university-approved, secure enterprise AI to analyze applicant essays for certain keywords. The AI flags an essay from a non-native English speaker for 'unusual phrasing.' The officer lowers the applicant's score based solely on this AI feedback. Which guideline is this action in conflict with?",
    "options": [
      "Human Accountability only.",
      "Algorithmic Bias in Decisions only.",
      "Human Accountability and Algorithmic Bias in Decisions.",
      "No violation occurred as it was an approved tool."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The officer is not taking 'Human Accountability' for the decision, and is failing to use the required 'human-in-the-loop audit process' for a high-stakes decision, which is designed to mitigate 'Algorithmic Bias'.",
    "difficulty": 3
  },
  {
    "questionText": "A student is asked by their professor to provide the prompts they used for a GenAI tool that helped with their project. The student claims they deleted their history and cannot retrieve them. What is the likely consequence?",
    "options": [
        "The student will get an extension to try and find them.",
        "The professor will likely accept their explanation.",
        "This may be considered a violation of academic integrity, as students must be prepared to provide prompts upon request.",
        "The university will contact the GenAI company to retrieve the prompts."
    ],
    "correctAnswerIndex": 2,
    "explanation": "The 'Required Disclosure Detail' section states that students must log and be prepared to provide the exact prompts used. Failure to do so could be considered an academic integrity violation.",
    "difficulty": 3
  }
];

export default questionBank;

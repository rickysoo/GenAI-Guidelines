export interface QuizQuestion {
  questionText: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  difficulty: number; // 1 for easy, 2 for medium, 3 for hard
}

export interface GuidelineCard {
  type: 'title' | 'section_title' | 'content';
  title: string;
  content: string;
}

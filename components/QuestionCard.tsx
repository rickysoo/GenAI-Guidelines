
import React from 'react';
import type { QuizQuestion } from '../types';

interface QuestionCardProps {
  question: QuizQuestion;
  onSelectAnswer: (answerIndex: number) => void;
  selectedAnswer: number | null;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ question, onSelectAnswer, selectedAnswer }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">{question.questionText}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-start";
          const selectedClasses = "bg-blue-100 dark:bg-blue-900 border-blue-500 ring-2 ring-blue-500";
          const unselectedClasses = "bg-slate-50 dark:bg-slate-700 border-slate-300 dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-600";
          
          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
            >
              <span className={`mr-4 font-bold text-blue-600 dark:text-blue-400 ${isSelected ? 'text-blue-700 dark:text-blue-300' : ''}`}>{String.fromCharCode(65 + index)}.</span>
              <span className="flex-1">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;

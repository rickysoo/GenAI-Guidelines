
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
      <h2 className="text-2xl font-semibold text-navy dark:text-white mb-6">{question.questionText}</h2>
      <div className="space-y-4">
        {question.options.map((option, index) => {
          const isSelected = selectedAnswer === index;
          const baseClasses = "w-full text-left p-4 rounded-lg border-2 transition-all duration-200 cursor-pointer flex items-start font-sans";
          
          // On-brand styling
          const selectedClasses = "bg-gold-light/70 dark:bg-gold-dark/40 border-gold ring-2 ring-gold";
          const unselectedClasses = "bg-white dark:bg-navy border-gray-light dark:border-navy-light hover:border-gold/70 dark:hover:border-gold-light/70";
          
          const letterClasses = isSelected 
            ? "text-navy dark:text-white" 
            : "text-navy dark:text-gold-light";

          return (
            <button
              key={index}
              onClick={() => onSelectAnswer(index)}
              className={`${baseClasses} ${isSelected ? selectedClasses : unselectedClasses}`}
            >
              <span className={`mr-4 font-bold ${letterClasses}`}>{String.fromCharCode(65 + index)}.</span>
              <span className="flex-1 text-brand-text">{option}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;

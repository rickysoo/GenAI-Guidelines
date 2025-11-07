
import React from 'react';
import type { QuizQuestion } from '../types';
import CheckIcon from './icons/CheckIcon';
import XIcon from './icons/XIcon';

interface ResultsProps {
  userAnswers: number[];
  questions: QuizQuestion[];
  onRetakeQuiz: () => void;
  onReviewGuidelines: () => void;
}

const Results: React.FC<ResultsProps> = ({ userAnswers, questions, onRetakeQuiz, onReviewGuidelines }) => {
  const correctAnswersCount = userAnswers.filter((answer, index) => answer === questions[index].correctAnswerIndex).length;
  const scorePercentage = (correctAnswersCount / questions.length) * 100;

  const getScoreMessage = (percentage: number) => {
    if (percentage === 100) return "Perfect Score! You're a GenAI expert!";
    if (percentage >= 80) return "Excellent! You have a strong grasp of the guidelines.";
    if (percentage >= 60) return "Good job! A quick review might be helpful.";
    return "It's a good start. Review the guidelines and try again!";
  };

  const incorrectAnswers = questions.map((q, i) => ({...q, userAnswer: userAnswers[i]})).filter((q,i) => q.userAnswer !== q.correctAnswerIndex);

  return (
    <div className="bg-white dark:bg-navy-light p-6 sm:p-8 rounded-xl card-shadow animate-fade-in">
      <div className="text-center border-b border-gray-light dark:border-navy pb-6 mb-6">
        <h2 className="text-3xl font-bold text-navy dark:text-white mb-2">Quiz Results</h2>
        <p className="text-lg text-gray dark:text-gray">{getScoreMessage(scorePercentage)}</p>
        <div className="my-6">
          <p className="text-5xl font-extrabold text-gold dark:text-gold-light">
            {correctAnswersCount} / {questions.length}
          </p>
          <p className="text-lg font-semibold text-gray dark:text-gray">({scorePercentage.toFixed(0)}%)</p>
        </div>
      </div>
      
      {incorrectAnswers.length > 0 && (
        <div className="mb-8">
            <h3 className="text-xl font-semibold text-navy dark:text-white mb-4">Review Your Answers</h3>
            <div className="space-y-6">
                {incorrectAnswers.map((question, index) => (
                    <div key={index} className="bg-gray-light dark:bg-navy p-4 rounded-lg">
                        <p className="font-semibold mb-3 text-brand-text">{question.questionText}</p>
                        <div className="space-y-2">
                           <div className="flex items-start p-2 rounded bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200">
                                <XIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <div><span className="font-bold">Your answer:</span> {question.options[question.userAnswer]}</div>
                           </div>
                           <div className="flex items-start p-2 rounded bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200">
                                <CheckIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                                <div><span className="font-bold">Correct answer:</span> {question.options[question.correctAnswerIndex]}</div>
                           </div>
                           <p className="text-sm text-gray dark:text-gray-light pt-2 italic"><strong>Explanation:</strong> {question.explanation}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      )}

      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
        <button
          onClick={onRetakeQuiz}
          className="w-full sm:w-auto bg-gold text-navy font-semibold py-3 px-8 rounded-md transition-all transform hover:-translate-y-0.5 btn-shadow-gold-hover focus:outline-none"
        >
          Retake Quiz
        </button>
        <button
          onClick={onReviewGuidelines}
          className="w-full sm:w-auto bg-transparent border-2 border-navy text-navy font-semibold py-3 px-8 rounded-md transition-all transform hover:-translate-y-0.5 hover:bg-navy hover:text-white dark:border-gold-light dark:text-gold-light dark:hover:bg-gold-light dark:hover:text-navy focus:outline-none"
        >
          Review Guidelines
        </button>
      </div>
    </div>
  );
};

export default Results;

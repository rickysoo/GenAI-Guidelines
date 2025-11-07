import React, { useState, useCallback } from 'react';
import type { QuizQuestion } from '../types';
import QuestionCard from './QuestionCard';

interface QuizProps {
  questions: QuizQuestion[];
  onQuizComplete: (answers: number[]) => void;
}

const Quiz: React.FC<QuizProps> = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<number[]>(new Array(questions.length).fill(null));
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelectAnswer = useCallback((answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  }, []);

  const handleNext = useCallback(() => {
    if (selectedAnswer === null) return;

    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = selectedAnswer;
    setUserAnswers(newAnswers);
    setSelectedAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      onQuizComplete(newAnswers);
    }
  }, [selectedAnswer, userAnswers, currentQuestionIndex, questions.length, onQuizComplete]);
  
  if (!questions || questions.length === 0) {
    return (
        <div className="bg-yellow-100 dark:bg-yellow-900 border-l-4 border-yellow-500 text-yellow-700 dark:text-yellow-200 p-6 rounded-lg shadow-md" role="alert">
            <p className="font-bold">Quiz Error</p>
            <p>No questions were provided for this quiz.</p>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">Question {currentQuestionIndex + 1} of {questions.length}</h3>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
        </div>
      </div>

      <QuestionCard
        question={currentQuestion}
        onSelectAnswer={handleSelectAnswer}
        selectedAnswer={selectedAnswer}
      />
      <div className="mt-8 flex justify-end">
        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          className="bg-blue-600 text-white font-bold py-2 px-8 rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed dark:disabled:bg-slate-600 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;

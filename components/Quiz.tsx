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
        <div className="bg-gold-light/50 dark:bg-gold-dark/20 border-l-4 border-gold-dark text-navy dark:text-gold-light p-6 rounded-lg shadow-md" role="alert">
            <p className="font-bold font-serif">Quiz Error</p>
            <p className="font-sans">No questions were provided for this quiz.</p>
        </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="bg-white dark:bg-navy-light p-6 sm:p-8 rounded-xl card-shadow animate-fade-in">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gold dark:text-gold-light uppercase tracking-wider">Question {currentQuestionIndex + 1} of {questions.length}</h3>
        </div>
        <div className="w-full bg-gray-light/80 dark:bg-navy rounded-full h-2.5">
          <div className="bg-gold h-2.5 rounded-full transition-all duration-500" style={{ width: `${progress}%` }}></div>
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
          className="bg-gold text-navy font-semibold py-2 px-8 rounded-md hover:bg-gold-dark disabled:bg-gray disabled:text-gray-light disabled:cursor-not-allowed dark:disabled:bg-navy-light transition-colors"
        >
          {currentQuestionIndex < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;

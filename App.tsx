import React, { useState, useCallback } from 'react';
import type { QuizQuestion } from './types';
import Home from './components/Home';
import Guidelines from './components/Guidelines';
import Quiz from './components/Quiz';
import Results from './components/Results';
import Header from './components/Header';
import LevelSelector from './components/LevelSelector';
import Notices from './components/Notices';
// Import the pre-generated questions from the new TypeScript module
import questionBank from './questionBank';

type View = 'home' | 'learn' | 'level_select' | 'quiz' | 'results' | 'notices';
const QUIZ_LENGTH = 5;

// The question bank is now imported directly as a typed array.

const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  
  // State to handle potential data integrity errors (e.g., not enough questions in the TS file)
  const [dataError, setDataError] = useState<string | null>(null);

  const handleStartLearning = useCallback(() => setView('learn'), []);
  const handleShowNotices = useCallback(() => setView('notices'), []);
  
  const handleStartQuiz = useCallback(() => {
    setUserAnswers([]);
    setQuestions([]);
    setDataError(null); // Reset any previous errors
    setView('level_select');
  }, []);
  
  const handleLevelSelect = useCallback((level: number) => {
    const levelQuestions = questionBank.filter(q => q.difficulty === level);
    
    // Check if the local data file has enough questions for the selected level.
    // This is a data integrity check, not a runtime API error.
    if(levelQuestions.length < QUIZ_LENGTH){
        setDataError(`Configuration Error: Not enough questions available for Level ${level} in the question bank. Required ${QUIZ_LENGTH}, but found only ${levelQuestions.length}. Please contact the administrator.`);
        setView('home'); // Go back home to display the error
        return;
    }

    const shuffled = [...levelQuestions].sort(() => 0.5 - Math.random());
    const selectedQuestions = shuffled.slice(0, QUIZ_LENGTH);
    
    setQuestions(selectedQuestions);
    setView('quiz');
  }, []);

  const handleQuizComplete = useCallback((answers: number[]) => {
    setUserAnswers(answers);
    setView('results');
  }, []);
  
  const handleGoHome = useCallback(() => {
    setDataError(null); // Reset error when manually going home
    setView('home');
  }, []);

  const renderView = () => {
    switch (view) {
      case 'notices':
        return <Notices onGoHome={handleGoHome} />;
      case 'learn':
        return <Guidelines onStartQuiz={handleStartQuiz} />;
      case 'level_select':
        return <LevelSelector onSelectLevel={handleLevelSelect} />;
      case 'quiz':
        return <Quiz questions={questions} onQuizComplete={handleQuizComplete} />;
      case 'results':
        return <Results userAnswers={userAnswers} questions={questions} onRetakeQuiz={handleStartQuiz} onReviewGuidelines={handleStartLearning} />;
      case 'home':
      default:
         return (
          <>
            {dataError && (
              <div className="bg-red-100 dark:bg-red-900/50 border-l-4 border-red-500 text-red-700 dark:text-red-200 p-4 rounded-lg shadow-md mb-6" role="alert">
                <p className="font-bold">System Error</p>
                <p>{dataError}</p>
              </div>
            )}
            <Home onStartLearning={handleStartLearning} onStartQuiz={handleStartQuiz} onShowNotices={handleShowNotices} />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 font-sans">
      <Header onGoHome={handleGoHome} />
      <main className="container mx-auto p-4 sm:p-6">
        {renderView()}
      </main>
    </div>
  );
};

export default App;
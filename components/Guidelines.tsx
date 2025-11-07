import React, { useState } from 'react';
import { GUIDELINE_CARDS } from '../constants';

interface GuidelinesProps {
  onStartQuiz: () => void;
}

const SimpleMarkdownParser: React.FC<{ text: string }> = ({ text }) => {
  return (
    <>
      {text.split('\n').map((line, lineIndex) => {
        if (line.trim() === '') return null;
        const parts = line.split(/(\*\*.*?\*\*)/g);
        return (
          <p key={lineIndex} className="mb-4 text-slate-700 dark:text-slate-300 leading-relaxed">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIndex} className="font-bold text-slate-800 dark:text-slate-100">
                    {part.slice(2, -2)}
                  </strong>
                );
              }
              return part;
            })}
          </p>
        );
      })}
    </>
  );
};

const Guidelines: React.FC<GuidelinesProps> = ({ onStartQuiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentCard = GUIDELINE_CARDS[currentIndex];
  const isLastCard = currentIndex === GUIDELINE_CARDS.length - 1;

  const handleNext = () => {
    if (!isLastCard) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onStartQuiz();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };
  
  const progress = ((currentIndex + 1) / GUIDELINE_CARDS.length) * 100;

  return (
    <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-xl shadow-lg flex flex-col min-h-[500px]">
      <div className="mb-6">
         <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-blue-600 dark:text-blue-400">Step {currentIndex + 1} of {GUIDELINE_CARDS.length}</h3>
        </div>
        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5">
          <div className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col justify-center animate-fade-in" key={currentIndex}>
        <div className="text-center">
            {currentCard.type === 'title' && (
                <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">{currentCard.title}</h2>
            )}
            {currentCard.type === 'section_title' && (
                <h2 className="text-3xl font-bold text-slate-800 dark:text-slate-100 mb-4 border-b-2 border-slate-300 dark:border-slate-600 pb-2">{currentCard.title}</h2>
            )}
            {currentCard.type === 'content' && (
                <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100 mb-6">{currentCard.title}</h3>
            )}
            <div className="text-lg max-w-3xl mx-auto">
                <SimpleMarkdownParser text={currentCard.content} />
            </div>
        </div>
      </div>

      <div className="mt-8 flex justify-between items-center">
        <button
          onClick={handlePrev}
          disabled={currentIndex === 0}
          className="bg-slate-200 text-slate-800 font-bold py-2 px-6 rounded-lg hover:bg-slate-300 disabled:opacity-50 disabled:cursor-not-allowed dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`${
            isLastCard
              ? 'bg-green-600 hover:bg-green-700 focus:ring-green-300 dark:focus:ring-green-800'
              : 'bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:focus:ring-blue-800'
          } text-white font-bold py-2 px-6 rounded-lg transition-all transform hover:scale-105 focus:outline-none focus:ring-4`}
        >
          {isLastCard ? "Ready? Take the Quiz!" : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Guidelines;

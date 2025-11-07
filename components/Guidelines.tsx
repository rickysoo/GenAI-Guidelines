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
          <p key={lineIndex} className="mb-4 text-brand-text leading-relaxed">
            {parts.map((part, partIndex) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return (
                  <strong key={partIndex} className="font-bold text-navy dark:text-white">
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
    <div className="bg-white dark:bg-navy-light p-6 sm:p-8 rounded-xl card-shadow flex flex-col min-h-[500px]">
      <div className="mb-6">
         <div className="flex justify-between items-center mb-2">
            <h3 className="text-sm font-semibold text-gold dark:text-gold-light uppercase tracking-wider">Step {currentIndex + 1} of {GUIDELINE_CARDS.length}</h3>
        </div>
        <div className="w-full bg-gray-light/80 dark:bg-navy rounded-full h-2.5">
          <div className="bg-gold h-2.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      
      <div className="flex-grow flex flex-col justify-center animate-fade-in" key={currentIndex}>
        <div className="text-center">
            {currentCard.type === 'title' && (
                <h2 className="text-4xl font-extrabold text-gold dark:text-gold-light mb-4">{currentCard.title}</h2>
            )}
            {currentCard.type === 'section_title' && (
                <h2 className="text-3xl font-bold text-navy dark:text-white mb-4 border-b-2 border-gray-light dark:border-navy pb-2">{currentCard.title}</h2>
            )}
            {currentCard.type === 'content' && (
                <h3 className="text-2xl font-semibold text-navy dark:text-white mb-6">{currentCard.title}</h3>
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
          className="bg-transparent border-2 border-navy text-navy font-semibold py-2 px-6 rounded-md transition-colors hover:bg-navy hover:text-white dark:border-gold-light dark:text-gold-light dark:hover:bg-gold-light dark:hover:text-navy disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className={`${
            isLastCard
              ? 'bg-gold-dark hover:bg-gold'
              : 'bg-gold hover:bg-gold-dark'
          } text-navy font-semibold py-2 px-6 rounded-md transition-all transform hover:scale-105`}
        >
          {isLastCard ? "Ready? Take the Quiz!" : 'Next'}
        </button>
      </div>
    </div>
  );
};

export default Guidelines;

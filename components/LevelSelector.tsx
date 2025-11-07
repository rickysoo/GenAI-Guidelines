import React from 'react';

interface LevelSelectorProps {
  onSelectLevel: (level: number) => void;
}

const levels = [
  { level: 1, title: "Level 1: Novice", description: "Test your basic understanding of the core principles and definitions.", color: "bg-gold-light", hoverColor: "hover:bg-gold", ringColor: "focus:ring-gold" },
  { level: 2, title: "Level 2: Practitioner", description: "Apply the guidelines to common scenarios and situations you might face.", color: "bg-gold", hoverColor: "hover:bg-gold-dark", ringColor: "focus:ring-gold-dark" },
  { level: 3, title: "Level 3: Expert", description: "Analyze complex case studies that require nuanced judgment and multiple rules.", color: "bg-navy", hoverColor: "hover:bg-navy-light", ringColor: "focus:ring-gold-light" },
];


const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectLevel }) => {
  return (
    <div className="text-center bg-white dark:bg-navy-light p-8 rounded-xl card-shadow animate-fade-in">
      <h2 className="text-4xl font-extrabold text-gradient-gold mb-4">
        Select Your Challenge
      </h2>
      <p className="text-lg text-gray dark:text-gray mb-10 max-w-2xl mx-auto">
        Each quiz consists of 5 randomly selected questions from your chosen difficulty level.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map(({ level, title, description, color, hoverColor, ringColor }) => {
          const isDarkCard = level === 3;
          return (
            <button
              key={level}
              onClick={() => onSelectLevel(level)}
              className={`w-full p-6 rounded-lg font-bold transition-all transform hover:-translate-y-1 card-shadow-hover focus:outline-none focus:ring-4 ${color} ${hoverColor} ${ringColor} flex flex-col justify-between h-full`}
            >
              <div className="text-left">
                  <h3 className={`text-2xl font-bold mb-2 font-serif ${isDarkCard ? 'text-white' : 'dark:text-navy'}`}>{title}</h3>
                  <p className={`font-normal text-sm font-sans ${isDarkCard ? 'text-gray' : 'text-brand-text dark:text-navy-light'}`}>{description}</p>
              </div>
              <div className={`text-right mt-4 text-lg font-sans ${isDarkCard ? 'text-white' : 'dark:text-navy'}`}>
                  Start Test &rarr;
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LevelSelector;
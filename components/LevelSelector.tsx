import React from 'react';

interface LevelSelectorProps {
  onSelectLevel: (level: number) => void;
}

const levels = [
  { level: 1, title: "Level 1: Novice", description: "Test your basic understanding of the core principles and definitions.", color: "bg-green-600", hoverColor: "hover:bg-green-700", ringColor: "focus:ring-green-300 dark:focus:ring-green-800" },
  { level: 2, title: "Level 2: Practitioner", description: "Apply the guidelines to common scenarios and situations you might face.", color: "bg-yellow-500", hoverColor: "hover:bg-yellow-600", ringColor: "focus:ring-yellow-300 dark:focus:ring-yellow-700" },
  { level: 3, title: "Level 3: Expert", description: "Analyze complex case studies that require nuanced judgment and multiple rules.", color: "bg-red-600", hoverColor: "hover:bg-red-700", ringColor: "focus:ring-red-300 dark:focus:ring-red-800" },
];

const LevelSelector: React.FC<LevelSelectorProps> = ({ onSelectLevel }) => {
  return (
    <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
        Select Your Challenge
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
        Each quiz consists of 5 randomly selected questions from your chosen difficulty level.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {levels.map(({ level, title, description, color, hoverColor, ringColor }) => (
          <button
            key={level}
            onClick={() => onSelectLevel(level)}
            className={`w-full p-6 rounded-lg text-white font-bold transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 ${color} ${hoverColor} ${ringColor} flex flex-col justify-between h-full`}
          >
            <div className="text-left">
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="font-normal text-sm">{description}</p>
            </div>
            <div className="text-right mt-4 text-lg">
                Start Test &rarr;
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default LevelSelector;

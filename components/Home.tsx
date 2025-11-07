import React from 'react';

interface HomeProps {
  onStartLearning: () => void;
  onStartQuiz: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartLearning, onStartQuiz }) => {
  return (
    <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-4xl font-extrabold text-blue-600 dark:text-blue-400 mb-4">
        Welcome to GenAI Onboarding
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
        This program will guide you through the university's official guidelines for the ethical and responsible use of Generative AI. Prepare to learn and test your knowledge.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onStartLearning}
          className="w-full sm:w-auto bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Start Learning
        </button>
        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto bg-slate-200 text-slate-800 font-bold py-3 px-8 rounded-lg hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-slate-300 dark:focus:ring-slate-600"
        >
          Take the Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;
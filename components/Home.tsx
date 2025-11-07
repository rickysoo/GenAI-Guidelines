
import React from 'react';

interface HomeProps {
  onStartLearning: () => void;
  onStartQuiz: () => void;
}

const Home: React.FC<HomeProps> = ({ onStartLearning, onStartQuiz }) => {
  return (
    <div className="text-center bg-white dark:bg-navy-light p-8 md:p-12 rounded-xl card-shadow animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-extrabold text-navy dark:text-white mb-4">
        Welcome to GenAI Onboarding
      </h2>
      <p className="text-lg text-gray dark:text-gray mb-8 max-w-2xl mx-auto">
        This program will guide you through the official guidelines for the ethical and responsible use of Generative AI. Prepare to learn and test your knowledge.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
          onClick={onStartLearning}
          className="w-full sm:w-auto bg-gold text-navy font-semibold py-3 px-8 rounded-md transition-all transform hover:-translate-y-0.5 btn-shadow-gold-hover focus:outline-none"
        >
          Start Learning
        </button>
        <button
          onClick={onStartQuiz}
          className="w-full sm:w-auto bg-transparent border-2 border-navy text-navy font-semibold py-3 px-8 rounded-md transition-all transform hover:-translate-y-0.5 hover:bg-navy hover:text-white dark:border-gold-light dark:text-gold-light dark:hover:bg-gold-light dark:hover:text-navy focus:outline-none"
        >
          Take the Quiz
        </button>
      </div>
    </div>
  );
};

export default Home;

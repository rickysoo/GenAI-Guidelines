
import React from 'react';

interface HeaderProps {
  onGoHome: () => void;
}

const Header: React.FC<HeaderProps> = ({ onGoHome }) => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div 
          className="flex items-center justify-center space-x-3 cursor-pointer"
          onClick={onGoHome}
          title="Go to Home"
        >
          <svg
            className="w-10 h-10 text-blue-600 dark:text-blue-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 2.83L17.17 11H6.83L12 5.83zM7 18v-6h2v6H7zm4 0v-6h2v6h-2zm4 0v-6h2v6h-2z" />
          </svg>
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">
            GenAI University Onboarding
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
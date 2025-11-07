import React from 'react';

interface FooterProps {
  onShowNotices: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowNotices }) => {
  return (
    <footer className="mt-8 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto px-4 py-4 text-center text-slate-500 dark:text-slate-400 text-sm">
        <button 
          onClick={onShowNotices}
          className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          aria-label="View notices and disclaimer"
        >
          Notices & Disclaimer
        </button>
      </div>
    </footer>
  );
};

export default Footer;
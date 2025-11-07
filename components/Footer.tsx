
import React from 'react';

interface FooterProps {
  onShowNotices: () => void;
}

const Footer: React.FC<FooterProps> = ({ onShowNotices }) => {
  return (
    <footer className="mt-auto pt-8 border-t border-gray-light dark:border-navy">
      <div className="container mx-auto px-4 py-4 text-center text-gray dark:text-gray text-sm">
        <button 
          onClick={onShowNotices}
          className="text-gold dark:text-gold-light font-semibold hover:underline focus:outline-none focus:ring-2 focus:ring-gold rounded"
          aria-label="View notices and disclaimer"
        >
          Notices & Disclaimer
        </button>
      </div>
    </footer>
  );
};

export default Footer;

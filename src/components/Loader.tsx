import React from 'react';

interface LoaderProps {
  size?: number;
  className?: string;
  label?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 20, className = '', label }) => {
  return (
    <div className={`inline-flex items-center ${className}`} aria-live="polite">
      <svg
        className="animate-spin -ml-1 mr-2 text-current"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
      {label && <span className="text-sm">{label}</span>}
    </div>
  );
};

export default Loader;

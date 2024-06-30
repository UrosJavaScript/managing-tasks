import React from "react";

interface LoadingSpinnerProps {
  color?: string;
  h?: string;
  w?: string;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  color = "text-white",
  h = "h-5",
  w = "w-5",
}) => {
  return (
    <svg className={`animate-spin ${h} ${w} mr-3 ${color}`} viewBox="0 0 24 24">
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.004 8.004 0 014 12H0c0 4.418 3.582 8 8 8v-4.009zM20 12h-4a8.003 8.003 0 01-5.656-2.344l-1.415 1.415A9.955 9.955 0 0012 14c1.657 0 3.191-.405 4.525-1.059l1.414 1.414A7.96 7.96 0 0116 16h4c0-2.18-.864-4.18-2.293-5.656l-1.414 1.414A7.95 7.95 0 0020 12z"
      ></path>
    </svg>
  );
};

export default LoadingSpinner;

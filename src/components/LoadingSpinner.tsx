
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-a5c-purple/20 border-t-a5c-purple animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs font-medium text-a5c-purple">A5C</span>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

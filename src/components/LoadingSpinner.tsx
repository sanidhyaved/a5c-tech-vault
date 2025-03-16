
import React from 'react';
import { Shield, Lock } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-background z-50">
      <div className="relative">
        <div className="h-16 w-16 rounded-full border-4 border-a5c-purple/20 border-t-a5c-purple animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <Shield size={24} className="text-a5c-purple" />
            <Lock size={14} className="text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;

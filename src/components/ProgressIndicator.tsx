
import React from 'react';

interface ProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

const ProgressIndicator = ({ currentStep, totalSteps }: ProgressIndicatorProps) => {
  const progress = (currentStep / totalSteps) * 100;
  
  return (
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-[#123C69]">
          Question {currentStep} of {totalSteps}
        </span>
        <span className="text-sm font-medium text-[#123C69]">
          {Math.round(progress)}%
        </span>
      </div>
      <div className="progress-bar">
        <div 
          className="progress-value"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressIndicator;

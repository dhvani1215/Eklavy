
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface LanguageCardProps {
  id: string;
  name: string;
  flag: string;
  speakers: string;
  progress: number;
  color: string;
  index: number;
}

const LanguageCard = ({ id, name, flag, speakers, progress, color, index }: LanguageCardProps) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/lessons?language=${id}`);
  };

  return (
    <AnimatedElement 
      animation="slide-up" 
      delay={index * 100} 
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)]"
    >
      <div 
        className="eklavy-card p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
        onClick={handleClick}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="text-4xl">{flag}</div>
            <h3 className="text-xl font-semibold text-[#123C69]">{name}</h3>
          </div>
          <div 
            className="w-10 h-10 rounded-full flex items-center justify-center text-white transition-transform duration-300 hover:scale-110 bg-[#123C69]" 
          >
            <ArrowRight size={20} />
          </div>
        </div>

        <div className="text-sm text-gray-500 mb-4">{speakers} native speakers</div>

        <div className="progress-bar">
          <div 
            className="progress-value" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className="mt-2 text-sm text-right font-medium text-[#123C69]">
          {progress}% complete
        </div>
      </div>
    </AnimatedElement>
  );
};

export default LanguageCard;

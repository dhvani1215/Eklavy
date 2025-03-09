
import React, { useState } from 'react';
import { Check, X, Volume2 } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

interface Option {
  id: string;
  text: string;
}

interface ExerciseProps {
  question: string;
  options: Option[];
  correctOptionId: string;
  imageUrl?: string;
  audioUrl?: string;
  onAnswer: (isCorrect: boolean) => void;
}

const LessonExercise = ({ 
  question, 
  options, 
  correctOptionId, 
  imageUrl, 
  audioUrl, 
  onAnswer 
}: ExerciseProps) => {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false);
  
  const handleOptionClick = (optionId: string) => {
    if (showResult) return;
    
    setSelectedOptionId(optionId);
    setShowResult(true);
    
    const isCorrect = optionId === correctOptionId;
    
    // Delay to show the answer feedback before moving to the next question
    setTimeout(() => {
      onAnswer(isCorrect);
      setSelectedOptionId(null);
      setShowResult(false);
    }, 1500);
  };
  
  const playAudio = () => {
    if (audioUrl) {
      const audio = new Audio(audioUrl);
      audio.play();
    }
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <AnimatedElement animation="fade-in" className="mb-6">
        <h2 className="text-2xl font-semibold text-center text-language-dark mb-6">
          {question}
        </h2>
        
        {imageUrl && (
          <div className="mb-6 rounded-lg overflow-hidden shadow-lg">
            <img 
              src={imageUrl} 
              alt="Exercise visual" 
              className="w-full h-auto object-cover"
            />
          </div>
        )}
        
        {audioUrl && (
          <div className="flex justify-center mb-6">
            <button
              onClick={playAudio}
              className="flex items-center justify-center p-4 rounded-full bg-language-blue text-white hover:bg-language-blue/90 transition-colors"
            >
              <Volume2 size={24} />
            </button>
          </div>
        )}
      </AnimatedElement>
      
      <div className="grid gap-4 staggered-fade-in">
        {options.map((option) => {
          const isSelected = selectedOptionId === option.id;
          const isCorrect = option.id === correctOptionId;
          
          let cardClass = "option-card";
          if (showResult && isSelected) {
            cardClass += isCorrect ? " correct" : " incorrect";
          }
          
          return (
            <div
              key={option.id}
              className={cardClass}
              onClick={() => handleOptionClick(option.id)}
            >
              <div className="flex items-center justify-between">
                <span className="text-lg">{option.text}</span>
                {showResult && isSelected && (
                  <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                    isCorrect ? "bg-language-green" : "bg-language-red"
                  } text-white`}>
                    {isCorrect ? <Check size={18} /> : <X size={18} />}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonExercise;


import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Award } from 'lucide-react';
import Layout from '../components/Layout';
import LessonExercise from '../components/LessonExercise';
import ProgressIndicator from '../components/ProgressIndicator';
import AnimatedElement from '../components/AnimatedElement';
import { lessons } from '../utils/languageData';
import { toast } from 'sonner';

const Lesson = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const navigate = useNavigate();
  
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [lessonComplete, setLessonComplete] = useState(false);
  
  const lesson = lessons.find(lesson => lesson.id === lessonId);
  
  useEffect(() => {
    if (!lesson) {
      navigate('/lessons');
      toast.error("Lesson not found");
    }
    
    // Update document title with lesson info
    if (lesson) {
      document.title = `${lesson.title} | Eklavy`;
    }
    
    return () => {
      document.title = 'Eklavy';
    };
  }, [lesson, navigate]);

  if (!lesson) return null;
  
  const currentExercise = lesson.exercises[currentExerciseIndex];
  const progressPercentage = ((currentExerciseIndex) / lesson.exercises.length) * 100;
  
  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setCorrectAnswers(prev => prev + 1);
      toast.success("Correct!");
    } else {
      toast.error("Incorrect!");
    }
    
    if (currentExerciseIndex < lesson.exercises.length - 1) {
      setCurrentExerciseIndex(prev => prev + 1);
    } else {
      setLessonComplete(true);
    }
  };
  
  const handleBackClick = () => {
    navigate('/lessons');
  };
  
  const handleLessonRestart = () => {
    setCurrentExerciseIndex(0);
    setCorrectAnswers(0);
    setLessonComplete(false);
  };
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-4xl">
        <button 
          onClick={handleBackClick}
          className="flex items-center text-gray-600 hover:text-[#123C69] mb-6 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to lessons
        </button>
        
        {!lessonComplete ? (
          <>
            <div className="mb-10">
              <ProgressIndicator 
                currentStep={currentExerciseIndex + 1} 
                totalSteps={lesson.exercises.length}
              />
            </div>
            
            <LessonExercise
              question={currentExercise.question}
              options={currentExercise.options}
              correctOptionId={currentExercise.correctOptionId}
              imageUrl={currentExercise.imageUrl}
              audioUrl={currentExercise.audioUrl}
              onAnswer={handleAnswer}
            />
          </>
        ) : (
          <AnimatedElement animation="slide-up" className="glass-card p-8 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <Award className="h-24 w-24 text-[#AC3B61] animate-pulse-scale" />
                <div className="absolute inset-0 bg-[#AC3B61]/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
            
            <h2 className="text-3xl font-bold text-[#123C69] mb-4">
              Lesson Complete!
            </h2>
            
            <p className="text-lg text-gray-600 mb-6">
              You got {correctAnswers} out of {lesson.exercises.length} questions correct.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleLessonRestart}
                className="px-6 py-3 bg-white border border-[#123C69] text-[#123C69] rounded-lg hover:bg-[#EEE2DC]/50 transition-colors"
              >
                Restart Lesson
              </button>
              
              <button
                onClick={handleBackClick}
                className="px-6 py-3 bg-[#123C69] text-white rounded-lg hover:bg-[#123C69]/90 transition-colors"
              >
                Choose Another Lesson
              </button>
            </div>
          </AnimatedElement>
        )}
      </div>
    </Layout>
  );
};

export default Lesson;

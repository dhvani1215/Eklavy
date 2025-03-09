
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Book, Filter, CheckCircle2, LockKeyhole } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';
import { lessons, languages } from '../utils/languageData';

const LessonsPage = () => {
  const [searchParams] = useSearchParams();
  const languageId = searchParams.get('language');
  const [selectedLevel, setSelectedLevel] = useState<string>('all');
  
  const filteredLessons = languageId 
    ? lessons.filter(lesson => lesson.languageId === languageId)
    : lessons;
  
  const levelFilteredLessons = selectedLevel === 'all' 
    ? filteredLessons 
    : filteredLessons.filter(lesson => lesson.level === selectedLevel);
  
  const selectedLanguage = languageId 
    ? languages.find(lang => lang.id === languageId) 
    : null;
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-7xl">
        <AnimatedElement animation="fade-in" className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-[#123C69] mb-4">
            {selectedLanguage ? `${selectedLanguage.name} Lessons` : 'All Lessons'}
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {selectedLanguage 
              ? `Explore our curated ${selectedLanguage.name} lessons designed to help you become fluent.` 
              : 'Explore lessons across multiple languages to enhance your skills.'}
          </p>
        </AnimatedElement>
        
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Filter className="h-5 w-5 text-[#123C69]" />
            <span className="font-medium">Filter by level:</span>
            <div className="flex space-x-2">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === 'all' 
                    ? 'bg-[#123C69] text-white' 
                    : 'bg-white border border-[#123C69] text-[#123C69] hover:bg-[#EEE2DC]/50'
                }`}
                onClick={() => setSelectedLevel('all')}
              >
                All
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === 'beginner' 
                    ? 'bg-[#123C69] text-white' 
                    : 'bg-white border border-[#123C69] text-[#123C69] hover:bg-[#EEE2DC]/50'
                }`}
                onClick={() => setSelectedLevel('beginner')}
              >
                Beginner
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === 'intermediate' 
                    ? 'bg-[#123C69] text-white' 
                    : 'bg-white border border-[#123C69] text-[#123C69] hover:bg-[#EEE2DC]/50'
                }`}
                onClick={() => setSelectedLevel('intermediate')}
              >
                Intermediate
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedLevel === 'advanced' 
                    ? 'bg-[#123C69] text-white' 
                    : 'bg-white border border-[#123C69] text-[#123C69] hover:bg-[#EEE2DC]/50'
                }`}
                onClick={() => setSelectedLevel('advanced')}
              >
                Advanced
              </button>
            </div>
          </div>
          
          {selectedLanguage && (
            <Link to="/languages" className="text-[#123C69] hover:underline flex items-center gap-1">
              <span>View all languages</span>
            </Link>
          )}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {levelFilteredLessons.length === 0 ? (
            <div className="col-span-full text-center py-10">
              <Book className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600">No lessons found</h3>
              <p className="text-gray-500 mt-2">Try a different filter or language</p>
            </div>
          ) : (
            levelFilteredLessons.map((lesson, index) => {
              const lessonLanguage = languages.find(lang => lang.id === lesson.languageId);
              
              return (
                <AnimatedElement
                  key={lesson.id}
                  animation="slide-up"
                  delay={index * 100}
                >
                  <div className="eklavy-card h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-2xl bg-[#EEE2DC] rounded-full">
                        {lesson.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium px-2 py-1 bg-[#EEE2DC] rounded-full">
                            {lesson.level.charAt(0).toUpperCase() + lesson.level.slice(1)}
                          </span>
                          {lessonLanguage && (
                            <span className="text-sm text-gray-500">{lessonLanguage.name}</span>
                          )}
                        </div>
                        <h3 className="text-xl font-semibold text-[#123C69] mt-1">{lesson.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{lesson.description}</p>
                    
                    <div className="mt-auto">
                      <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm text-gray-500">{lesson.exercises.length} exercises</span>
                        {lesson.completed ? (
                          <span className="flex items-center text-sm text-green-600">
                            <CheckCircle2 className="h-4 w-4 mr-1" /> Completed
                          </span>
                        ) : (
                          <span className="flex items-center text-sm text-[#123C69]">
                            <LockKeyhole className="h-4 w-4 mr-1" /> Not started
                          </span>
                        )}
                      </div>
                      
                      <Link
                        to={`/lessons/${lesson.id}`}
                        className="eklavy-button w-full text-center block"
                      >
                        Start Lesson
                      </Link>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })
          )}
        </div>
      </div>
    </Layout>
  );
};

export default LessonsPage;

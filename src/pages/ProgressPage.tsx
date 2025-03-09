
import React from 'react';
import { BarChart, Calendar, Clock, Award, Flame, TrendingUp } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';
import { languages } from '../utils/languageData';

const ProgressPage = () => {
  // Sample data for the progress page
  const dailyStreak = 12;
  const totalLessonsCompleted = 48;
  const totalPoints = 1580;
  const minutesLearned = 420;
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-7xl">
        <AnimatedElement animation="fade-in" className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#123C69] mb-4">
            Your Learning Progress
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track your language learning journey and see how far you've come.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <AnimatedElement animation="slide-up" delay={100}>
            <div className="eklavy-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                <Flame size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Daily Streak</p>
                <h3 className="text-2xl font-bold text-[#123C69]">{dailyStreak} days</h3>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200}>
            <div className="eklavy-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                <Award size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Points</p>
                <h3 className="text-2xl font-bold text-[#123C69]">{totalPoints} XP</h3>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={300}>
            <div className="eklavy-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                <TrendingUp size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Lessons Completed</p>
                <h3 className="text-2xl font-bold text-[#123C69]">{totalLessonsCompleted}</h3>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={400}>
            <div className="eklavy-card flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                <Clock size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Time Spent Learning</p>
                <h3 className="text-2xl font-bold text-[#123C69]">{minutesLearned} mins</h3>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <AnimatedElement animation="slide-up" delay={500}>
            <div className="eklavy-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#123C69]">Language Progress</h3>
                <div className="text-sm text-gray-500">Last 30 days</div>
              </div>
              
              <div className="space-y-6">
                {languages.map((language) => (
                  <div key={language.id} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{language.flag}</span>
                        <span className="font-medium">{language.name}</span>
                      </div>
                      <span className="text-sm text-[#123C69] font-medium">{language.progress}%</span>
                    </div>
                    <div className="progress-bar">
                      <div 
                        className="progress-value" 
                        style={{ width: `${language.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={600}>
            <div className="eklavy-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-[#123C69]">Learning Calendar</h3>
                <div className="text-sm text-gray-500">May 2023</div>
              </div>
              
              <div className="grid grid-cols-7 gap-2">
                {Array.from({ length: 31 }, (_, i) => (
                  <div 
                    key={i} 
                    className={`w-full aspect-square rounded-md flex items-center justify-center text-sm ${
                      i % 3 === 0 
                        ? 'bg-[#123C69] text-white' 
                        : i % 5 === 0 
                          ? 'bg-[#EEE2DC] text-[#123C69]' 
                          : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    {i + 1}
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-center gap-6 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#123C69]"></div>
                  <span className="text-sm text-gray-600">15+ minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-[#EEE2DC]"></div>
                  <span className="text-sm text-gray-600">5-15 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-sm bg-gray-100"></div>
                  <span className="text-sm text-gray-600">No activity</span>
                </div>
              </div>
            </div>
          </AnimatedElement>
        </div>
        
        <AnimatedElement animation="slide-up" delay={700}>
          <div className="eklavy-card">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-[#123C69]">Achievement Badges</h3>
              <div className="text-sm text-[#123C69]">View All</div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                { icon: '🔥', name: 'Seven-Day Streak', earned: true },
                { icon: '🌟', name: 'First Perfect Score', earned: true },
                { icon: '🏆', name: 'Level 10 Achieved', earned: true },
                { icon: '🌎', name: 'Language Explorer', earned: false },
                { icon: '🎯', name: 'Accuracy Master', earned: false },
                { icon: '⏱️', name: 'Speed Learner', earned: false }
              ].map((badge, index) => (
                <div 
                  key={index} 
                  className={`flex flex-col items-center p-4 rounded-lg border ${
                    badge.earned 
                      ? 'border-[#123C69] bg-white' 
                      : 'border-gray-200 bg-gray-50'
                  }`}
                >
                  <div className="text-3xl mb-2">{badge.icon}</div>
                  <div className="text-sm font-medium text-center">{badge.name}</div>
                  <div className={`text-xs mt-1 ${badge.earned ? 'text-[#123C69]' : 'text-gray-400'}`}>
                    {badge.earned ? 'Earned' : 'Locked'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedElement>
      </div>
    </Layout>
  );
};

export default ProgressPage;

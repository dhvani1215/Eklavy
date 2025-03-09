
import React, { useState } from 'react';
import { User, Mail, Globe, Bell, Shield, LogOut, Settings, Edit } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('profile');
  
  // Sample user data
  const userData = {
    name: 'Dhvani Kakadiya',
    email: 'alex.johnson@example.com',
    avatar: null,
    nativeLanguage: 'English',
    learningLanguages: ['French', 'Spanish', 'Japanese'],
    memberSince: 'January 15, 2023',
    streak: 42,
    totalXP: 12580,
  };
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-5xl">
        <AnimatedElement animation="fade-in" className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-[#123C69] mb-4">
            Your Profile
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manage your account and view your progress.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedElement animation="slide-up" delay={100} className="md:col-span-1">
            <div className="eklavy-card sticky top-28">
              <div className="flex flex-col items-center mb-6">
                <div className="w-24 h-24 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69] mb-4">
                  {userData.avatar ? (
                    <img 
                      src={userData.avatar} 
                      alt={userData.name} 
                      className="w-full h-full rounded-full object-cover" 
                    />
                  ) : (
                    <User size={40} />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-[#123C69]">{userData.name}</h3>
                <p className="text-sm text-gray-500">{userData.email}</p>
                <button className="mt-3 text-sm px-3 py-1 rounded-full border border-[#123C69] text-[#123C69] hover:bg-[#EEE2DC]/50 flex items-center gap-1 transition-colors">
                  <Edit size={14} />
                  <span>Edit Profile</span>
                </button>
              </div>
              
              <div className="flex flex-col space-y-1">
                <button
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'profile' 
                      ? 'bg-[#123C69] text-white' 
                      : 'text-gray-600 hover:bg-[#EEE2DC]/50'
                  }`}
                  onClick={() => setActiveTab('profile')}
                >
                  <User size={18} />
                  <span>Personal Info</span>
                </button>
                <button
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'languages' 
                      ? 'bg-[#123C69] text-white' 
                      : 'text-gray-600 hover:bg-[#EEE2DC]/50'
                  }`}
                  onClick={() => setActiveTab('languages')}
                >
                  <Globe size={18} />
                  <span>Languages</span>
                </button>
                <button
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'notifications' 
                      ? 'bg-[#123C69] text-white' 
                      : 'text-gray-600 hover:bg-[#EEE2DC]/50'
                  }`}
                  onClick={() => setActiveTab('notifications')}
                >
                  <Bell size={18} />
                  <span>Notifications</span>
                </button>
                <button
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'security' 
                      ? 'bg-[#123C69] text-white' 
                      : 'text-gray-600 hover:bg-[#EEE2DC]/50'
                  }`}
                  onClick={() => setActiveTab('security')}
                >
                  <Shield size={18} />
                  <span>Security</span>
                </button>
                <button
                  className={`text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors ${
                    activeTab === 'settings' 
                      ? 'bg-[#123C69] text-white' 
                      : 'text-gray-600 hover:bg-[#EEE2DC]/50'
                  }`}
                  onClick={() => setActiveTab('settings')}
                >
                  <Settings size={18} />
                  <span>Account Settings</span>
                </button>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-100">
                <button className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 text-[#AC3B61] hover:bg-red-50 transition-colors">
                  <LogOut size={18} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          </AnimatedElement>
          
          <AnimatedElement animation="slide-up" delay={200} className="md:col-span-2">
            {activeTab === 'profile' && (
              <div className="eklavy-card">
                <h3 className="text-xl font-semibold text-[#123C69] mb-6">Personal Information</h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      value={userData.name}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      value={userData.email}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Native Language</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      value={userData.nativeLanguage}
                      readOnly
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Member Since</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                      value={userData.memberSince}
                      readOnly
                    />
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:justify-end space-y-2 sm:space-y-0 sm:space-x-2">
                    <button className="eklavy-outline-button">Cancel</button>
                    <button className="eklavy-button">Save Changes</button>
                  </div>
                </div>
              </div>
            )}
            
            {activeTab === 'languages' && (
              <div className="eklavy-card">
                <h3 className="text-xl font-semibold text-[#123C69] mb-6">Learning Languages</h3>
                
                <div className="space-y-6">
                  {userData.learningLanguages.map((language, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#EEE2DC] flex items-center justify-center text-[#123C69]">
                          <Globe size={18} />
                        </div>
                        <div>
                          <h4 className="font-medium">{language}</h4>
                          <div className="text-sm text-gray-500">
                            {index === 0 ? 'Advanced' : index === 1 ? 'Intermediate' : 'Beginner'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <button className="text-sm px-3 py-1 rounded-full bg-[#EEE2DC] text-[#123C69] hover:bg-[#EEE2DC]/80 transition-colors">
                          Practice
                        </button>
                        <button className="text-sm px-3 py-1 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  
                  <button className="w-full p-4 border border-dashed border-gray-200 rounded-lg text-[#123C69] flex items-center justify-center gap-2 hover:bg-[#EEE2DC]/20 transition-colors">
                    <Globe size={18} />
                    <span>Add a new language</span>
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'notifications' && (
              <div className="eklavy-card">
                <h3 className="text-xl font-semibold text-[#123C69] mb-6">Notification Settings</h3>
                
                <div className="space-y-4">
                  {[
                    { id: 'daily-reminder', label: 'Daily learning reminder', enabled: true, desc: 'Receive a daily reminder to continue your learning streak.' },
                    { id: 'new-content', label: 'New content alerts', enabled: true, desc: 'Get notified when new lessons are available in your learning languages.' },
                    { id: 'achievement', label: 'Achievement notifications', enabled: true, desc: 'Receive notifications when you earn badges or reach milestones.' },
                    { id: 'special-offers', label: 'Special offers', enabled: false, desc: 'Get information about premium features and special promotions.' },
                    { id: 'newsletter', label: 'Monthly newsletter', enabled: false, desc: 'Stay updated with language learning tips and community stories.' }
                  ].map((item) => (
                    <div key={item.id} className="flex items-start justify-between p-4 border border-gray-100 rounded-lg">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium">{item.label}</h4>
                          {item.enabled && <span className="text-xs px-2 py-0.5 bg-[#EEE2DC] text-[#123C69] rounded-full">Enabled</span>}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                      </div>
                      
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" className="sr-only peer" checked={item.enabled} readOnly />
                        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#123C69]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#123C69]"></div>
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </AnimatedElement>
        </div>
      </div>
    </Layout>
  );
};

export default ProfilePage;

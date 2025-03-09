
import React, { useState } from 'react';
import { Globe, Search } from 'lucide-react';
import Layout from '../components/Layout';
import LanguageCard from '../components/LanguageCard';
import AnimatedElement from '../components/AnimatedElement';
import { languages } from '../utils/languageData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredLanguages = languages.filter(language => 
    language.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-7xl">
        <AnimatedElement animation="fade-in" className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#123C69] mb-4">
            Discover languages with <span className="bg-gradient-to-r from-[#123C69] to-[#AC3B61] bg-clip-text text-transparent">Eklavy</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Master new languages through fun, bite-sized lessons designed to keep you engaged and motivated.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" className="mb-10">
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search for a language..."
              className="block w-full pl-10 pr-4 py-3 rounded-full border-none glass-card shadow-md focus:ring-2 focus:ring-[#123C69] focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </AnimatedElement>
        
        <div className="flex flex-wrap gap-6 justify-center">
          {filteredLanguages.length === 0 ? (
            <div className="text-center py-10">
              <Globe className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-600">No languages found</h3>
              <p className="text-gray-500 mt-2">Try a different search term</p>
            </div>
          ) : (
            filteredLanguages.map((language, index) => (
              <LanguageCard
                key={language.id}
                {...language}
                index={index}
              />
            ))
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Index;


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, Eye, EyeOff, Globe, User } from 'lucide-react';
import Layout from '../components/Layout';
import AnimatedElement from '../components/AnimatedElement';
import { languages } from '../utils/languageData';

const SignUpPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nativeLanguage, setNativeLanguage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle sign-up logic
    console.log('Sign up with:', { name, email, password, nativeLanguage, agreeTerms });
  };
  
  return (
    <Layout>
      <div className="px-6 mx-auto max-w-md">
        <AnimatedElement animation="fade-in" className="mb-8 text-center">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-[#EEE2DC] rounded-full flex items-center justify-center">
              <Globe className="h-8 w-8 text-[#123C69]" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-[#123C69] mb-2">
            Create Your Account
          </h1>
          <p className="text-gray-600">
            Join Eklavy and start your language learning journey.
          </p>
        </AnimatedElement>
        
        <AnimatedElement animation="slide-up" className="eklavy-card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="name"
                  type="text"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full pl-10 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69]"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              <p className="mt-1 text-xs text-gray-500">
                Password must be at least 8 characters long.
              </p>
            </div>
            
            <div>
              <label htmlFor="nativeLanguage" className="block text-sm font-medium text-gray-700 mb-1">
                Native Language
              </label>
              <select
                id="nativeLanguage"
                className="w-full pl-4 pr-10 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#123C69] appearance-none bg-white"
                value={nativeLanguage}
                onChange={(e) => setNativeLanguage(e.target.value)}
              >
                <option value="" disabled>Select your native language</option>
                {languages.map((language) => (
                  <option key={language.id} value={language.id}>
                    {language.flag} {language.name}
                  </option>
                ))}
              </select>
            </div>
            
            <div className="flex items-center">
              <input
                id="agree-terms"
                type="checkbox"
                required
                className="h-4 w-4 text-[#123C69] focus:ring-[#123C69] border-gray-300 rounded"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
              />
              <label htmlFor="agree-terms" className="ml-2 block text-sm text-gray-700">
                I agree to the <a href="#" className="text-[#123C69] hover:underline">Terms of Service</a> and <a href="#" className="text-[#123C69] hover:underline">Privacy Policy</a>
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full eklavy-button flex items-center justify-center gap-2"
              disabled={!agreeTerms}
            >
              <UserPlus size={18} />
              <span>Create Account</span>
            </button>
            
            <div className="relative flex items-center justify-center">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-3 text-sm text-gray-500 absolute">or sign up with</span>
            </div>
            
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </button>
              <button
                type="button"
                className="w-full flex justify-center py-2 px-4 border border-gray-200 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="text-center text-sm">
              <span className="text-gray-600">Already have an account?</span>
              <Link to="/signin" className="ml-1 text-[#123C69] hover:underline">
                Sign in
              </Link>
            </div>
          </form>
        </AnimatedElement>
      </div>
    </Layout>
  );
};

export default SignUpPage;

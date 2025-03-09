
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Book, Globe, GraduationCap, User, Mail, LogIn } from 'lucide-react';

const Header = () => {
  const location = useLocation();
  const isLesson = location.pathname.includes('/lessons/');
  
  return (
    <header className="fixed w-full top-0 left-0 right-0 z-50">
      <div className="glass-card mx-auto px-6 py-4 flex items-center justify-between border-b border-[#EEE2DC]">
        <Link to="/" className="flex items-center gap-2">
          <Globe className="h-8 w-8 text-[#123C69]" />
          <span className="text-xl font-semibold bg-gradient-to-r from-[#123C69] to-[#AC3B61] bg-clip-text text-transparent">
            Eklavy
          </span>
        </Link>

        {isLesson && (
          <div className="absolute left-1/2 -translate-x-1/2 w-1/3 hidden md:block">
            <div className="progress-bar">
              <div className="progress-value" style={{ width: '65%' }}></div>
            </div>
          </div>
        )}

        <nav className="flex items-center gap-6">
          <Link to="/languages" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <Globe className="h-5 w-5" />
            <span className="text-xs mt-1">Languages</span>
          </Link>
          <Link to="/lessons" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <Book className="h-5 w-5" />
            <span className="text-xs mt-1">Lessons</span>
          </Link>
          <Link to="/progress" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <GraduationCap className="h-5 w-5" />
            <span className="text-xs mt-1">Progress</span>
          </Link>
          <Link to="/profile" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <User className="h-5 w-5" />
            <span className="text-xs mt-1">Profile</span>
          </Link>
          <Link to="/contact" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <Mail className="h-5 w-5" />
            <span className="text-xs mt-1">Contact</span>
          </Link>
          <Link to="/signin" className="flex flex-col items-center text-gray-600 hover:text-[#123C69] transition-colors">
            <LogIn className="h-5 w-5" />
            <span className="text-xs mt-1">Sign In</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

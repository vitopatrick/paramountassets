import React, { useState } from 'react';
import { TrendingUp, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-2 rounded-lg">
              <TrendingUp className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">Fidelity Assets</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Home</a>
            <a href="#plans" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Plans</a>
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Features</a>
            <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">Contact</a>
          </nav>
          
          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-2 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-emerald-100 bg-white/95 backdrop-blur-sm">
            <div className="px-4 py-6 space-y-4">
              <nav className="space-y-4">
                <a 
                  href="#home" 
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                >
                  Home
                </a>
                <a 
                  href="#plans" 
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                >
                  Plans
                </a>
                <a 
                  href="#features" 
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                >
                  Features
                </a>
                <a 
                  href="#contact" 
                  onClick={closeMenu}
                  className="block text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                >
                  Contact
                </a>
              </nav>
              
              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-emerald-100 space-y-3">
                <Link to={"/login"}>
                <button 
                  onClick={closeMenu}
                  className="block w-full text-left text-gray-700 hover:text-emerald-600 transition-colors font-medium py-2"
                >
                  
                  Sign In
                </button>
                  </Link>
                <Link to={'/register'}>
                <button 
                  onClick={closeMenu}
                  className="block w-full bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 font-medium text-center"
                >
                  
                  Get Started
                </button>
                  </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
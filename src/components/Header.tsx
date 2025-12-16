import React, { useState, useEffect } from 'react';
import { Truck, Menu, X, Moon, Sun } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import AnimatedLink from './AnimatedLink';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'backdrop-blur-md bg-white/60 dark:bg-slate-900/60 shadow-lg dark:shadow-slate-900 py-3'
        : 'bg-gradient-to-b from-black/30 to-transparent dark:from-slate-950/50 py-6'
        }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div
              className={`p-2 rounded-lg transition-all duration-300 ${isScrolled ? 'bg-blue-50 dark:bg-slate-800' : 'bg-white/10 dark:bg-white/5'
                }`}
            >
              <Truck
                size={24}
                className={`transition-colors duration-300 ${isScrolled
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-white dark:text-blue-300'
                  }`}
              />
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight transition-colors duration-300 ${isScrolled
                  ? 'text-slate-900 dark:text-white'
                  : 'text-white dark:text-white'
                  }`}
              >
                CargoConnect
              </span>
              <div
                className={`text-xs font-medium transition-colors duration-300 ${isScrolled
                  ? 'text-blue-600 dark:text-blue-400'
                  : 'text-blue-100 dark:text-blue-300'
                  }`}
              >
                Logistics Solution
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-12">
            <AnimatedLink
              to="/"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white/90 dark:text-blue-100'
                }`}
            >
              Home
            </AnimatedLink>
            <AnimatedLink
              to="/services"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white/90 dark:text-blue-100'
                }`}
            >
              Services
            </AnimatedLink>
            <AnimatedLink
              to="/vehicles"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white/90 dark:text-blue-100'
                }`}
            >
              Vehicles
            </AnimatedLink>
            <AnimatedLink
              to="/about"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white/90 dark:text-blue-100'
                }`}
            >
              About
            </AnimatedLink>
            <AnimatedLink
              to="/contact"
              className={`text-sm font-medium transition-colors duration-300 hover:text-blue-600 dark:hover:text-blue-400 ${isScrolled
                ? 'text-slate-700 dark:text-slate-300'
                : 'text-white/90 dark:text-blue-100'
                }`}
            >
              Contact
            </AnimatedLink>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-12 relative group ${isScrolled
                ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                : 'bg-white/10 dark:bg-white/10 text-white'
                }`}
              aria-label="Toggle theme"
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <AnimatedLink
              to="/book-now"
              showUnderline={false}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white px-5 py-2.5 rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-500 ease-in-out font-medium text-sm shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 relative group"
              title="Start booking your cargo shipment"
            >
              <span>Book Now</span>
            </AnimatedLink>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${isScrolled
                ? 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400'
                : 'bg-white/10 dark:bg-white/10 text-white'
                }`}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>

            <button
              className="p-2 hover:bg-white/10 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X
                  size={24}
                  className={isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}
                />
              ) : (
                <Menu
                  size={24}
                  className={isScrolled ? 'text-slate-800 dark:text-white' : 'text-white'}
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 bg-white dark:bg-slate-800 rounded-xl mt-4 shadow-xl border border-slate-100 dark:border-slate-700 animate-in fade-in slide-in-from-top-2 duration-300">
            <nav className="flex flex-col gap-2 px-6">
              <AnimatedLink
                to="/"
                className="px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </AnimatedLink>
              <AnimatedLink
                to="/services"
                className="px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </AnimatedLink>
              <AnimatedLink
                to="/vehicles"
                className="px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Vehicles
              </AnimatedLink>
              <AnimatedLink
                to="/about"
                className="px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </AnimatedLink>
              <AnimatedLink
                to="/contact"
                className="px-4 py-3 rounded-lg font-medium text-slate-700 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-700 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </AnimatedLink>
              <AnimatedLink
                to="/book-now"
                showUnderline={false}
                className="mx-4 mt-4 flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all font-medium text-center justify-center transform hover:scale-105"
                onClick={() => setIsMenuOpen(false)}
              >
                <span>Book Now</span>
              </AnimatedLink>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
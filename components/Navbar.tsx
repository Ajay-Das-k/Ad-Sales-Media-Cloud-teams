import React from 'react';
import { NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';

interface NavbarProps {
    darkMode: boolean;
    toggleTheme: () => void;
    onBookDemo: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleTheme, onBookDemo }) => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
            <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    {/* Original Logo */}
                    <Link to="/" className="flex items-center gap-3">
                        <img src="/logo.png" alt="Ad Sales-In-A-Box Logo" className="w-10 h-10 object-contain" />
                        <span className="font-bold text-lg tracking-tight hidden sm:block text-slate-900 dark:text-white">Ad Sales-In-A-Box</span>
                    </Link>

                    {/* Vertical Divider */}
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>

                    {/* New CRMantra Logo */}
                    <div className="h-5 flex items-center opacity-90">
                        <img src="/crmantra_logo.png" alt="CRMantra" className="h-full object-contain" />
                    </div>
                </div>

                <div className="flex-1 flex justify-end items-center gap-8 ml-auto">
                    {/* Desktop Nav Links - Updated Styling */}
                    <div className="hidden lg:flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <a
                                key={link.label}
                                href={link.href.startsWith('#') ? `/${link.href}` : link.href} // Simple handling, ideally we scroll if on home, or navigate then scroll. For now, assuming hash links work on Home.
                                className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <button
                        onClick={onBookDemo}
                        className="hidden sm:flex items-center px-6 py-2.5 bg-[#00A1E0] hover:bg-[#008CC2] text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                    >
                        Book a Demo
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        aria-label="Toggle Theme"
                    >
                        {darkMode ? (
                            <span className="material-symbols-outlined text-xl">light_mode</span>
                        ) : (
                            <span className="material-symbols-outlined text-xl">dark_mode</span>
                        )}
                    </button>

                    {/* Mobile Menu Button */}
                    <button className="lg:hidden p-2 text-slate-900 dark:text-white">
                        <span className="material-symbols-outlined text-2xl">menu</span>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

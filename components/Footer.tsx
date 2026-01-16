import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="py-12 border-t border-white/10 bg-[#0B1220] text-slate-400 reveal">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                    <div className="flex items-center gap-3">
                        <img src="/logo.png" alt="Ad Sales-In-A-Box Logo" className="w-8 h-8 object-contain" />
                        <span className="font-bold text-lg text-primary tracking-tight">Ad Sales-In-A-Box</span>
                        <div className="h-4 w-px bg-slate-700 mx-2"></div>
                        <a href="https://crmantra.com/" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                            <img src="/crmantra_logo.png" alt="CRMantra" className="h-5 object-contain" />
                        </a>
                    </div>

                    <div className="flex gap-8 text-sm font-semibold text-slate-300">
                        <a href="https://crmantra.com/products/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Product</a>
                        <a href="#" className="hover:text-primary transition-colors">Solution</a>
                        <a href="#" className="hover:text-primary transition-colors">Partners</a>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
                    <p>© 2025 Ad Sales-In-A-Box. One Salesforce platform. Extended for Media selling.</p>
                    <div className="flex gap-6">
                        <Link to="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link to="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                        <Link to="/acceptable-use" className="hover:text-slate-300 transition-colors">Acceptable Use Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

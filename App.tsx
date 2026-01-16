import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import AcceptableUsePolicy from './pages/AcceptableUsePolicy';
import { LoadingScreen } from './components/UI';
import { ContactFormContent } from './components/ContactForm';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [loading, setLoading] = useState(true);

  // Modal States
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  useEffect(() => {
    // Theme application
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <Router>
      <LoadingScreen active={loading} />

      {/* Video Modal Overlay */}
      {showVideoModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300" onClick={() => setShowVideoModal(false)}>
          <button
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            onClick={() => setShowVideoModal(false)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
          <div
            className="relative w-full max-w-7xl bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative pt-[56.25%]">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/wP3JDGQlaiY?autoplay=1"
                title="Product Overview Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal Overlay */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/90 backdrop-blur-md animate-in fade-in duration-300 overflow-y-auto" onClick={() => setShowContactModal(false)}>
          <div className="relative min-h-[calc(100vh-2rem)] flex items-center justify-center w-full py-8">
            <button
              className="fixed top-8 right-8 z-[110] text-white/50 hover:text-white transition-colors"
              onClick={() => setShowContactModal(false)}
            >
              <span className="material-symbols-outlined text-4xl">close</span>
            </button>
            <div
              className="relative w-full max-w-5xl"
              onClick={e => e.stopPropagation()}
            >
              <ContactFormContent className="shadow-2xl ring-1 ring-white/10" />
            </div>
          </div>
        </div>
      )}

      {/* Main Layout */}
      <div className={`min-h-screen font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 ${loading ? 'overflow-hidden max-h-screen' : ''}`}>

        <Navbar
          darkMode={darkMode}
          toggleTheme={toggleTheme}
          onBookDemo={() => setShowContactModal(true)}
        />

        <Routes>
          <Route path="/" element={<Home onBookDemo={() => setShowContactModal(true)} onWatchVideo={() => setShowVideoModal(true)} />} />
          import AcceptableUsePolicy from './pages/AcceptableUsePolicy';

          // ... (in the Routes)
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/acceptable-use" element={<AcceptableUsePolicy />} />
        </Routes>

        <Footer />

      </div>
    </Router>
  );
};

export default App;

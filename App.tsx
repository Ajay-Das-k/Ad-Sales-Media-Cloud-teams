
import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_LINKS, USPS, EXTENDS_SF, WORKFLOWS, KPIS, FAQS, LOGOS
} from './constants';
import {
  Section, Card, CTAButton, IconTile, KPIGrid, FAQAccordion, ArchitectureDiagram, LoadingScreen
} from './components/UI';
import EcosystemAnimation from './components/EcosystemAnimation';
import ChannelsAnimation from './components/ChannelsAnimation';
import HeroAnimation from './components/HeroAnimation';


const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark';
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Theme application
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }

    // Scroll reveal observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
        }
      });
    }, observerOptions);

    const revealedElements = document.querySelectorAll('.reveal');
    revealedElements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      revealedElements.forEach(el => observer.unobserve(el));
    };
  }, [darkMode, loading]);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => setDarkMode(!darkMode);
  const [showVideoModal, setShowVideoModal] = useState(false);

  return (
    <>
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
            className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
            onClick={e => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/wP3JDGQlaiY?autoplay=1"
              title="Product Overview Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      )}

      <div className={`min-h-screen font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 ${loading ? 'overflow-hidden max-h-screen' : ''}`}>

        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Original Logo */}
              <div className="flex items-center gap-3">
                <img src="logo.png" alt="Ad Sales-In-A-Box Logo" className="w-10 h-10 object-contain" />
                <span className="font-bold text-lg tracking-tight hidden sm:block">Ad Sales-In-A-Box</span>
              </div>

              {/* Vertical Divider */}
              <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>

              {/* New CRMantra Logo */}
              <div className="h-5 flex items-center opacity-90">
                <img src="crmantra_logo.png" alt="CRMantra" className="h-full object-contain" />
              </div>
            </div>

            <div className="flex-1 flex justify-end items-center gap-8 ml-auto">
              {/* Desktop Nav Links - Updated Styling */}
              <div className="hidden lg:flex items-center gap-8">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>

              {/* Book a Demo Button (Pill Shape) */}
              <a
                href="#cta"
                className="hidden sm:flex items-center px-6 py-2.5 bg-[#00A1E0] hover:bg-[#008CC2] text-white text-sm font-bold rounded-full transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Book a Demo
              </a>

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
              <button className="lg:hidden p-2">
                <span className="material-symbols-outlined text-2xl">menu</span>
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <Section id="hero" className="pt-16 pb-24 overflow-hidden reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight text-slate-900 dark:text-white">
                <span className="text-[#00A0DF]">AI-First.</span> <br className="hidden md:block" />
                Salesforce-Native. <br className="hidden md:block" />
                Pitch-to-Pay.
              </h1>
              <p className="text-xl md:text-2xl font-bold text-slate-800 dark:text-slate-200 mt-2">
                One intelligent ad sales system — inside Salesforce.
              </p>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                A complete ad sales and order management platform connecting pitch, proposal, replans, execution, and billing.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                {/* Watch an Overview Button */}
                <button
                  onClick={() => setShowVideoModal(true)}
                  className="group flex items-center gap-3 px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-full shadow-sm hover:shadow-md hover:border-primary/50 transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors text-primary">
                    <span className="material-symbols-outlined text-xl">play_arrow</span>
                  </div>
                  <span className="font-bold text-slate-700 dark:text-slate-200">Watch an overview</span>
                </button>

                {/* Book a Demo Button */}
                <a
                  href="#cta"
                  className="flex items-center px-8 py-3.5 bg-[#00A1E0] hover:bg-[#008CC2] text-white font-bold rounded-full shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                >
                  Book a demo
                </a>
              </div>
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Media Leaders</p>
                <div className="flex flex-wrap gap-8 items-center grayscale opacity-50">
                  <span className="font-black text-2xl tracking-tight text-slate-800 dark:text-slate-200">SONY</span>
                  <span className="font-black text-2xl tracking-tight text-slate-800 dark:text-slate-200">ADA</span>
                  <span className="font-black text-2xl tracking-tight text-slate-800 dark:text-slate-200">yahoo!</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <HeroAnimation />
            </div>
          </div>
        </Section>



        {/* Problem & Solution */}
        <Section id="problem" className="py-24 reveal">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              The Reality of Media Ad Sales — and the Fix
            </h2>
            <div className="w-24 h-1 bg-[#00A1E0] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">

            {/* Left Card: The Problem */}
            <Card className="p-8 md:p-10 border-t-4 border-t-red-500 bg-white dark:bg-slate-800 shadow-xl reveal h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-2 leading-tight">
                Disconnected Tools. Broken Processes.
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Every media organization relies on a patchwork of systems.
              </p>

              {/* Visual: Patchwork of Systems */}
              <div className="flex-1 flex flex-col justify-center mb-8 min-h-[200px]">
                <div className="flex flex-wrap justify-center gap-4 relative">
                  {['CRM', 'Proposal App', 'OMS', 'Project Management', 'Billing & Finance', 'Spreadsheets'].map((item, i) => (
                    <div key={item} className={`px-4 py-3 bg-white dark:bg-slate-700 border border-slate-200 dark:border-slate-600 rounded-lg shadow-sm text-xs font-bold text-slate-600 dark:text-slate-300 text-center flex items-center justify-center w-[120px] aspect-[4/3] transform hover:scale-105 transition-transform ${i === 5 ? 'border-dashed' : ''}`}>
                      {item}
                    </div>
                  ))}
                  <div className="absolute -bottom-4 right-10 text-red-500 animate-bounce">
                    <span className="material-symbols-outlined text-3xl">water_drop</span>
                  </div>
                </div>
              </div>

              <div className="min-h-[3.5rem] flex items-start pb-2">
                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-6">
                  Each system may be automated — but the <span className="font-bold">automation is siloed.</span>
                </p>
              </div>

              {/* Result Box */}
              <div className="mt-auto bg-slate-100 dark:bg-slate-700/50 p-6 rounded-r-lg border-l-4 border-red-500">
                <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                  <span className="font-bold">Result:</span> Broken Data flows. Revenue leaks. Inaccurate forecasts.
                </p>
              </div>
            </Card>

            {/* Right Card: The Solution */}
            <Card className="p-8 md:p-10 border-t-4 border-t-green-500 bg-white dark:bg-slate-800 shadow-xl reveal h-full flex flex-col">
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                One Connected System.
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-8 font-medium">
                Pitch. Proposal. Order. Replans. Execution. Billing handoff. Reporting. <span className="font-bold text-slate-900 dark:text-white">All connected. All in Salesforce.</span>
              </p>
              <p className="text-slate-800 dark:text-slate-200 font-bold mb-1">

              </p>


              {/* Visual: Connected Hub */}
              <div className="flex-1 flex items-center justify-center mb-8 relative min-h-[200px]">
                {/* Spokes */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[0, 60, 120, 180, 240, 300].map(deg => (
                    <div key={deg} className="absolute w-[180px] h-[2px] bg-green-400/50 origin-center" style={{ transform: `rotate(${deg}deg)` }}></div>
                  ))}
                </div>
                {/* Connector Nodes (Implied) */}
                <div className="absolute top-0 text-[10px] text-slate-400 bg-white dark:bg-slate-800 px-2">Retention</div>
                <div className="absolute bottom-0 text-[10px] text-slate-400 bg-white dark:bg-slate-800 px-2">Optimizing</div>

                {/* Central Hub */}
                <div className="w-32 h-32 bg-[#00A1E0] rounded-full flex items-center justify-center text-center shadow-lg shadow-blue-500/30 z-10 animate-pulse-slow">
                  <span className="text-white font-bold text-sm leading-tight px-2">Ad Sales-In-A-Box</span>
                </div>
              </div>

              <div className="min-h-[3.5rem] flex items-start pb-2">
                <p className="text-slate-700 dark:text-slate-300 font-semibold mb-6">
                  Ad Sales-In-A-Box eliminates silos of automation
                </p>
              </div>

              {/* Result Box */}
              <div className="mt-auto bg-slate-100 dark:bg-slate-700/50 p-6 rounded-r-lg border-l-4 border-green-500">
                <p className="text-slate-800 dark:text-slate-200 text-sm leading-relaxed">
                  <span className="font-bold">Result:</span> Faster proposals. Fewer errors. Clean data. Higher ROI.
                </p>
              </div>
            </Card>

          </div>
        </Section>

        {/* USP Section */}
        <Section id="usp" className="py-24 reveal">
          <div className="text-center mb-16 relative">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">What Makes Us Different</h2>
            <div className="w-24 h-1 bg-[#00A1E0] mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-bold text-[#00A1E0]">Purpose-built for media selling and Salesforce deal cycles</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">

            {/* Card 1: AI-First (Purple) */}
            <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col items-start text-left h-full">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-300 mb-6">
                <span className="material-symbols-outlined text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">AI-First, Not Retrofitted</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
                Built for intelligence from day one with a unified data model for intelligent pricing and forecasting.
              </p>
              <p className="text-purple-700 dark:text-purple-400 font-bold text-sm">
                Faster decisions. Smarter deals.
              </p>
            </Card>

            {/* Card 2: Fast to Deploy (Green) */}
            <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col items-start text-left h-full">
              <div className="w-14 h-14 rounded-2xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-300 mb-6">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Fast to Deploy</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
                Pre-configured workflows replace heavy customization. Customers go live quickly and see ROI sooner.
              </p>
              <p className="text-green-700 dark:text-green-400 font-bold text-sm">
                Live in weeks, not quarters.
              </p>
            </Card>

            {/* Card 3: Spreadsheets, Connected (Blue) */}
            <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 flex flex-col items-start text-left h-full">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-300 mb-6">
                <span className="material-symbols-outlined text-3xl">grid_on</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Spreadsheets, Connected</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed flex-1">
                The only platform with real-time, two-way integration between spreadsheets and the system of record.
              </p>
              <p className="text-blue-700 dark:text-blue-400 font-bold text-sm">
                High adoption, no breakage.
              </p>
            </Card>

          </div>
        </Section>


        {/* AI Agents Section */}
        <Section id="ai-agents" className="py-24 reveal">
          <div className="text-center mb-16 relative px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              AI Agents Every Step of the Way. <br className="hidden md:block" /> From Pitch to Pay.
            </h2>
            <div className="w-24 h-1 bg-[#00A1E0] mx-auto rounded-full mb-6"></div>
            <p className="text-xl md:text-2xl font-bold text-[#00A1E0]">
              Agent-assisted ad sales workflows. Works with Agentforce.
            </p>
          </div>

          <div className="max-w-7xl mx-auto px-4 flex flex-col gap-8">
            {/* Row 1: 3 Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Agent 1 */}
              <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded-full">Marketing Agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Demand Generation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200">What it does:</span> Creates and executes targeted, multi-level marketing campaigns to generate demand — including campaigns run on behalf of advertisers and brands.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                    <span className="font-bold">Outcome:</span> Increased pipeline. Higher-quality leads. New revenue opportunities.
                  </p>
                </div>
              </Card>

              {/* Agent 2 */}
              <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded-full">Media Planning Agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Media Planning</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200">What it does:</span> Guides sellers through multi-site, multi-flight, cross-channel media plans using media-specific logic and intelligence.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                    <span className="font-bold">Outcome:</span> Faster proposals. Higher seller productivity. Greater plan accuracy.
                  </p>
                </div>
              </Card>

              {/* Agent 3 */}
              <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded-full">Campaign Optimization Agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Campaign Replanning</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200">What it does:</span> Predicts performance, adjusts pacing, reallocates budgets, and automatically updates upstream plans and downstream execution systems.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                    <span className="font-bold">Outcome:</span> Protected revenue. Optimized yield. Fewer manual interventions.
                  </p>
                </div>
              </Card>
            </div>

            {/* Row 2: 2 Cards centered */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:w-2/3 mx-auto">
              {/* Agent 4 */}
              <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded-full">IO Ingestion Agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">IO Ingestion & Validation</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200">What it does:</span> Ingests IOs from emails and PDFs, validates fields against the Media Plan, and creates error-free IOs linked to campaigns.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                    <span className="font-bold">Outcome:</span> Zero manual effort. Faster, error-free execution. Higher operational efficiency.
                  </p>
                </div>
              </Card>

              {/* Agent 5 */}
              <Card className="p-8 bg-white dark:bg-slate-800 shadow-lg border border-slate-100 dark:border-slate-700 flex flex-col relative overflow-hidden group hover:-translate-y-1 transition-transform duration-300">
                <div className="flex justify-between items-start mb-6">
                  <span className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-[10px] font-bold uppercase tracking-wider rounded-full">Reconciliation Agent</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Revenue Assurance</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 flex-1">
                  <span className="font-bold text-slate-900 dark:text-slate-200">What it does:</span> Reconciles Booked vs. Ordered vs. Delivered across systems to surface gaps and prevent revenue leakage.
                </p>
                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 rounded-r">
                  <p className="text-xs text-green-800 dark:text-green-300 font-medium">
                    <span className="font-bold">Outcome:</span> Accurate billing. Fewer disputes. Faster revenue recognition.
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <p className="text-center mt-12 text-slate-900 dark:text-white font-bold text-lg">
            Orchestrated by PacePal — the Pitch-to-Pay AI.
          </p>
        </Section>

        {/* Ecosystem Section */}
        <Section id="ecosystem" className="py-24 reveal">
          <div className="text-center mb-16 relative px-4">
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
              An Eco-system of Connected Agents for Ad Sales
            </h2>
            <div className="w-24 h-1 bg-[#00A1E0] mx-auto rounded-full mb-6"></div>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-xl md:text-2xl font-bold text-[#00A1E0]">
                An AI-First approach to Automating Workflows, Reducing Errors, and Scaling Operations.
              </p>

            </div>
          </div>
          <div className="flex justify-center max-w-6xl mx-auto px-4">
            <EcosystemAnimation />
          </div>
        </Section>

        {/* Audience Split */}
        <Section id="audience" className="bg-background-dark text-white py-24 rounded-3xl mx-4 mb-24 overflow-hidden relative reveal">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"></div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who Is It For</h2>
            <p className="text-slate-400">Tailored solutions for every stakeholder in the media sales ecosystem.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="p-10 bg-white/5 border-white/10 flex flex-col items-center text-center backdrop-blur-sm reveal">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-6 animate-float">
                <span className="material-symbols-outlined text-4xl">business_center</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Media Publishers & Agencies</h3>
              <ul className="space-y-4 text-slate-300 mb-10 text-left w-full">
                {['Scale operations without adding headcount', 'Automate multi-channel order entry', 'Real-time pacing and delivery insights', 'Eliminate manual billing reconciliation'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton variant="primary" className="w-full">View Publisher Solution</CTAButton>
            </Card>

            <Card className="p-10 bg-white/5 border-white/10 flex flex-col items-center text-center backdrop-blur-sm reveal [transition-delay:200ms]">
              <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center text-secondary mb-6 animate-float [animation-delay:-2s]">
                <span className="material-symbols-outlined text-4xl">handshake</span>
              </div>
              <h3 className="text-2xl font-bold mb-6">Salesforce Sellers & Partners</h3>
              <ul className="space-y-4 text-slate-300 mb-10 text-left w-full">
                {['Accelerate Media Cloud deal cycles', 'Pre-built media data model accelerators', 'Reduce implementation risk and complexity', 'Higher customer satisfaction scores'].map(item => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-secondary text-sm">check_circle</span>
                    {item}
                  </li>
                ))}
              </ul>
              <CTAButton variant="secondary" className="w-full border-secondary text-secondary hover:bg-secondary hover:text-white">Partner Program Info</CTAButton>
            </Card>
          </div>
          <p className="mt-16 text-center text-slate-500 font-medium">One Salesforce platform. Extended for Media selling.</p>
        </Section>

        {/* Extends Salesforce */}
        <Section id="extends-sf" className="py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Extends Salesforce</h2>
            <p className="text-slate-600 dark:text-slate-400">Leverage the power of the core while adding domain depth.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {EXTENDS_SF.map((item, i) => (
              <div key={i} className={`flex flex-col gap-4 reveal [transition-delay:${i * 150}ms]`}>
                <IconTile icon={item.icon} title={item.title} />
                <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 flex-1">
                  <div className="mb-6">
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Typical Situation</p>
                    <p className="text-sm text-slate-600 dark:text-slate-400">{item.situation}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">ASIAB Value</p>
                    <p className="text-sm font-semibold">{item.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="p-6 rounded-2xl bg-primary text-white text-center font-bold text-lg shadow-xl shadow-primary/20 reveal">
            Outcome: A unified revenue engine that actually speaks "Media" out of the box.
          </div>
        </Section>



        {/* AI Workflows */}
        <Section id="workflows" className="py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI-Assisted Pitch to Pay Workflows</h2>
            <p className="text-slate-600 dark:text-slate-400">Intelligent automation for every role in the house.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {WORKFLOWS.slice(0, 3).map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 reveal">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{item.agent}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.headline}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                <p className="text-xs font-bold text-primary">{item.outcome}</p>
              </Card>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {WORKFLOWS.slice(3).map((item, i) => (
              <Card key={i} className="p-6 hover:shadow-lg transition-shadow bg-white dark:bg-slate-800 reveal">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded">{item.agent}</span>
                </div>
                <h4 className="font-bold text-lg mb-2">{item.headline}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">{item.description}</p>
                <p className="text-xs font-bold text-primary">{item.outcome}</p>
              </Card>
            ))}
          </div>
          <Card className="p-8 bg-gradient-to-r from-background-dark to-slate-800 text-white border-none flex flex-col md:flex-row items-center gap-6 reveal">
            <div className="w-20 h-20 shrink-0 rounded-full bg-primary flex items-center justify-center shadow-lg shadow-primary/40 animate-sonar">
              <span className="material-symbols-outlined text-4xl">smart_toy</span>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">PacePal Callout</h3>
              <p className="text-slate-300">"All workflows are orchestrated by PacePal — our master AI agent specifically trained for media inventory management. Works seamlessly with Salesforce Agentforce."</p>
            </div>
          </Card>
        </Section>

        {/* Architecture Section */}
        <Section id="architecture" className="py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Agentic AI Architecture</h2>
            <p className="text-slate-600 dark:text-slate-400">Deep integration across your entire stack.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 w-full flex justify-center">
              <ArchitectureDiagram />
            </div>
            <div className="flex-1 space-y-8">
              {[
                { title: 'Core: PacePal', desc: 'The reasoning engine that connects user intent with automated system actions.', id: 'arch-1' },
                { title: 'Ring 2: Task Agents', desc: 'Scout, Planner, Optimizer, and Auditor — each specialized for the ad sales lifecycle.', id: 'arch-2' },
                { title: 'Ring 3: MCPs', desc: 'Standardized connectors for media planning, inventory, and pricing protocols.', id: 'arch-3' }
              ].map((item, i) => (
                <div key={item.id} className="p-4 border-l-4 border-primary bg-primary/5 reveal" style={{ transitionDelay: `${i * 200}ms` }}>
                  <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Converged Ad Sales */}
        <Section id="channels" className="py-24 bg-background-dark text-white rounded-t-3xl mx-4 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Converged Ad Sales Across Channels</h2>
            <p className="text-slate-400">One view of truth across all media types.</p>
          </div>
          <div className="flex flex-col items-center gap-12">
            <ChannelsAnimation />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
              {[
                'Unified planning across Linear & Digital',
                'Real-time availability of OOH inventory',
                'Cross-platform frequency capping',
                'Converged billing for complex campaigns',
                'Single point of entry for agency partners'
              ].map((benefit, i) => (
                <div key={benefit} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <span className="material-symbols-outlined text-primary">done_all</span>
                  <span className="text-sm text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Proof Points */}
        <Section id="proof" className="py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Customer Success</h2>
            <p className="text-slate-600 dark:text-slate-400">Hard metrics from real-world deployments.</p>
          </div>
          <KPIGrid items={KPIS} />
          <div className="mt-16 flex flex-wrap justify-center gap-12 grayscale opacity-40 reveal">
            {LOGOS.map(brand => (
              <span key={brand} className="text-2xl font-black italic tracking-tighter text-slate-400">{brand}</span>
            ))}
          </div>
        </Section>

        {/* Final CTA Band */}
        {/* Final CTA Band (Redesigned) */}
        <div className="relative py-32 mt-24 mx-4 rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-2xl reveal">
          {/* Background Effects */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-primary/20 via-slate-900/50 to-transparent opacity-50"></div>
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 grayscale"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 bg-primary/30 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -right-20 -top-20 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-bold text-primary mb-8 animate-float">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              Ready for the future?
            </div>

            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 leading-tight">
              Transform your Ad Sales <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Revenue Engine</span> today.
            </h2>

            <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
              Join high-performing media teams using <span className="text-white font-semibold">Ad Sales-In-A-Box</span> to drive predictable, scalable growth directly within Salesforce.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <CTAButton className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-white border-0 h-16 px-12 text-xl font-bold shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all duration-300">
                Request a Demo
              </CTAButton>

              <button className="group flex items-center gap-3 text-slate-300 font-bold text-lg hover:text-white transition-colors px-6 py-4 rounded-xl hover:bg-white/5">
                <span>Talk to an Expert</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div className="mt-12 flex items-center justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="h-8 w-px bg-white/20"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Rapid Integration</span>
              <div className="h-8 w-px bg-white/20"></div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">Secure by Design</span>
              <div className="h-8 w-px bg-white/20"></div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <Section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/50 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions / FAQ</h2>
            <p className="text-slate-600 dark:text-slate-400">Everything you need to know about the Media Ad Sales engine.</p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={FAQS} />
          </div>
        </Section>

        {/* Footer */}
        <footer className="py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-background-dark reveal">
          <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <img src="logo.png" alt="Ad Sales-In-A-Box Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg tracking-tight">Ad Sales-In-A-Box</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-primary transition-colors">Cookie Settings</a>
            </div>
            <p className="text-slate-400 text-sm">© 2024 Salesforce Media Cloud Partner. All rights reserved.</p>
          </div>
        </footer>
      </div >
    </>
  );
};

export default App;

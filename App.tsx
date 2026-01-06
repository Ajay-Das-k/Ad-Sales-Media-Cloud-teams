
import React, { useState, useEffect, useRef } from 'react';
import { 
  NAV_LINKS, USPS, EXTENDS_SF, WORKFLOWS, KPIS, FAQS, LOGOS 
} from './constants';
import { 
  Section, Card, CTAButton, IconTile, KPIGrid, FAQAccordion, ArchitectureDiagram, LoadingScreen 
} from './components/UI';

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

  return (
    <>
      <LoadingScreen active={loading} />
      
      <div className={`min-h-screen font-sans bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-300 ${loading ? 'overflow-hidden max-h-screen' : ''}`}>
        
        {/* Sticky Navbar */}
        <nav className="sticky top-0 z-50 w-full border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src="logo.png" alt="Ad Sales-In-A-Box Logo" className="w-10 h-10 object-contain" />
              <span className="font-bold text-lg tracking-tight">Ad Sales-In-A-Box</span>
            </div>

            <div className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map(link => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-500 dark:text-slate-400"
                aria-label="Toggle Theme"
              >
                <span className="material-symbols-outlined">
                  {darkMode ? 'light_mode' : 'dark_mode'}
                </span>
              </button>
              <CTAButton variant="primary" className="hidden md:flex h-9 px-4 text-sm">
                Request a Demo
              </CTAButton>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <Section id="hero" className="pt-16 pb-24 overflow-hidden reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 border border-primary/20 w-fit">
                <span className="material-symbols-outlined text-primary text-sm">bolt</span>
                <span className="text-xs font-semibold text-primary uppercase tracking-wide">Native to Salesforce</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
                Ad Sales-In-A-Box
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                The Salesforce-native engine for modern Media Cloud teams. Streamline your entire ad lifecycle from pitch to payment.
              </p>
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500 italic">
                Trusted by 50+ media publishers globally to drive 20% more revenue.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <CTAButton variant="primary">Request a Demo</CTAButton>
                <CTAButton variant="secondary">Talk to an Expert</CTAButton>
              </div>
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Trusted by Media Leaders</p>
                <div className="flex flex-wrap gap-8 items-center grayscale opacity-50">
                  {LOGOS.map(logo => (
                    <span key={logo} className="font-bold text-xl tracking-tighter text-slate-400">{logo}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-secondary rounded-2xl blur-2xl opacity-10 dark:opacity-20"></div>
              <div className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl aspect-video border border-white/10 flex items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none group-hover:opacity-60 transition-opacity"></div>
                <span className="material-symbols-outlined text-white/20 text-8xl transition-all duration-500 group-hover:scale-110 group-hover:text-primary/40">play_circle</span>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium">Product Overview Video</p>
              </div>
            </div>
          </div>
        </Section>

        {/* Problem & Solution */}
        <Section id="problem" className="bg-slate-50 dark:bg-slate-900/50 py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Reality of Media Ad Sales — and the Fix</h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">Moving from fragmented chaos to a unified engine changes the game.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-red-500/20 dark:border-red-500/10 bg-white dark:bg-slate-800 reveal">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-red-500">warning</span>
                <span className="text-xs font-bold text-red-600 uppercase tracking-wider">Before (The Problem)</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Disconnected Tools. <br/>Broken Processes.</h3>
              
              <div className="h-48 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 mb-8 relative flex items-center justify-center overflow-hidden">
                <div className="grid grid-cols-3 gap-8">
                  <div className="p-2 border border-dashed border-red-500/50 rounded animate-jitter [animation-delay:-0.1s]"><span className="material-symbols-outlined text-slate-400">table_view</span></div>
                  <div className="p-2 border border-dashed border-red-500/50 rounded animate-jitter [animation-delay:-0.3s]"><span className="material-symbols-outlined text-slate-400">mail</span></div>
                  <div className="p-2 border border-dashed border-red-500/50 rounded animate-jitter [animation-delay:-0.5s]"><span className="material-symbols-outlined text-slate-400">payments</span></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-500 text-4xl opacity-50">link_off</span>
                </div>
              </div>

              <ul className="space-y-3">
                {['CRM', 'Proposal app', 'OMS', 'PM', 'Billing/Finance', 'Spreadsheets'].map((item, idx) => (
                  <li key={item} className={`flex items-center gap-3 text-slate-600 dark:text-slate-400 reveal [transition-delay:${idx * 100}ms]`}>
                    <span className="material-symbols-outlined text-red-500/60 text-sm">close</span>
                    {item} siloed
                  </li>
                ))}
              </ul>
              <p className="mt-8 p-3 rounded bg-red-50 dark:bg-red-500/5 border border-red-100 dark:border-red-500/10 text-red-700 dark:text-red-400 font-bold text-center">
                Automation is siloed.
              </p>
            </Card>

            <Card className="p-8 border-primary/20 bg-primary/5 dark:bg-primary/10 reveal">
              <div className="flex items-center gap-2 mb-6">
                <span className="material-symbols-outlined text-primary">verified</span>
                <span className="text-xs font-bold text-primary uppercase tracking-wider">After (The Solution)</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">One Connected System.</h3>
              
              <div className="h-48 rounded-lg bg-white dark:bg-slate-800 border border-primary/20 mb-8 relative flex items-center justify-center overflow-hidden">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white z-10 relative">
                    <span className="material-symbols-outlined">hub</span>
                  </div>
                  <div className="absolute inset-[-40px] border border-primary/40 rounded-full animate-sonar"></div>
                  <div className="absolute inset-[-80px] border border-primary/20 rounded-full animate-sonar [animation-delay:0.5s]"></div>
                </div>
              </div>

              <div className="flex items-center justify-between text-[10px] font-black uppercase text-primary tracking-widest mb-6 opacity-60">
                <span>Pitch</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                <span>Order</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                <span>Execution</span>
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                <span>Billing</span>
              </div>

              <p className="text-slate-700 dark:text-slate-300 font-medium text-lg text-center mb-6 leading-relaxed">
                "Faster proposals. Fewer errors. <br/>Clean data. Higher ROI."
              </p>
              <CTAButton variant="primary" className="w-full">Get Connected</CTAButton>
            </Card>
          </div>
        </Section>

        {/* USP Section */}
        <Section id="usp" className="py-24 reveal">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Makes Us Different</h2>
            <p className="text-slate-600 dark:text-slate-400">Better data. Better decisions. Faster revenue.</p>
          </div>
          <div className="flex flex-col gap-6 max-w-4xl mx-auto">
            {USPS.map((usp, i) => (
              <Card key={i} className={`p-8 flex items-start gap-8 hover:border-primary/50 transition-all bg-white dark:bg-slate-900/50 reveal [transition-delay:${i * 150}ms] ${i % 2 === 1 ? 'bg-slate-50 dark:bg-slate-900/80' : ''}`}>
                <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">{usp.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">{usp.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-3">{usp.description}</p>
                  <p className="text-primary font-bold text-sm">{usp.result}</p>
                </div>
              </Card>
            ))}
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
        <Section id="workflows" className="bg-slate-50 dark:bg-slate-900/50 py-24 reveal">
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
            <div className="relative w-72 h-72 flex items-center justify-center">
               <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white z-10 shadow-2xl shadow-primary/40 animate-sonar">
                  <span className="material-symbols-outlined text-4xl">hub</span>
               </div>
               {/* Orbital icons */}
               {[
                 { icon: 'devices', label: 'Digital', angle: 0 },
                 { icon: 'share', label: 'Social', angle: 60 },
                 { icon: 'tv', label: 'Linear', angle: 120 },
                 { icon: 'print', label: 'Print', angle: 180 },
                 { icon: 'search', label: 'Search', angle: 240 },
                 { icon: 'location_on', label: 'D/OOH', angle: 300 },
               ].map((item, i) => (
                 <div 
                   key={item.label}
                   className="absolute flex flex-col items-center gap-1 group animate-float"
                   style={{
                     transform: `rotate(${item.angle}deg) translateY(-140px) rotate(-${item.angle}deg)`,
                     animationDelay: `${i * -1.5}s`
                   }}
                 >
                   <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors cursor-pointer group-hover:scale-110">
                     <span className="material-symbols-outlined">{item.icon}</span>
                   </div>
                   <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500 group-hover:text-white">{item.label}</span>
                 </div>
               ))}
            </div>
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
        <Section className="py-24 bg-gradient-to-r from-primary to-secondary text-white text-center rounded-b-3xl mx-4 reveal">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Ready to lead the future of Media Sales?</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-10">
            Join the ranks of high-performing media teams using Ad Sales-In-A-Box to drive 
            predictable, scalable revenue directly within Salesforce.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton className="bg-white text-primary hover:bg-slate-100 h-14 px-10 text-lg reveal">Request a Demo</CTAButton>
            <CTAButton className="bg-transparent border-white text-white hover:bg-white/10 h-14 px-10 text-lg reveal [transition-delay:200ms]">Talk to an Expert</CTAButton>
          </div>
          <p className="mt-8 text-white/50 text-sm font-medium">Integration starts in minutes. Value realized in weeks.</p>
        </Section>

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
      </div>
    </>
  );
};

export default App;

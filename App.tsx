
import React, { useState, useEffect, useRef } from 'react';
import {
  NAV_LINKS, USPS, EXTENDS_SF, WORKFLOWS, KPIS, FAQS, LOGOS
} from './constants';
import {
  Section, Card, CTAButton, IconTile, KPIGrid, FAQAccordion, ArchitectureDiagram, LoadingScreen
} from './components/UI';
import EcosystemAnimation from './components/EcosystemAnimation';
import ChannelsAnimation from './components/ChannelsAnimation';

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

            <div className="flex-1 flex justify-end items-center gap-6 ml-auto mr-6">
              <div className="hidden lg:flex items-center gap-6">
                {NAV_LINKS.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-[11px] font-bold text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-white transition-colors uppercase tracking-widest"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
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
              <a href="https://youtu.be/wP3JDGQlaiY" target="_blank" rel="noopener noreferrer" className="relative bg-slate-900 rounded-xl overflow-hidden shadow-2xl aspect-video border border-white/10 flex items-center justify-center group cursor-pointer hover:border-primary/50 transition-colors">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent pointer-events-none group-hover:opacity-60 transition-opacity"></div>
                <span className="material-symbols-outlined text-white/20 text-8xl transition-all duration-500 group-hover:scale-110 group-hover:text-primary/40">play_circle</span>
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/40 text-sm font-medium">Watch Product Overview</p>
              </a>
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
              <h3 className="text-2xl font-bold mb-4">Disconnected Tools. <br />Broken Processes.</h3>

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
                "Faster proposals. Fewer errors. <br />Clean data. Higher ROI."
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
                <div className="w-14 h-14 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform p-3">
                  {usp.icon.endsWith('.png') ? (
                    <img src={usp.icon} alt={usp.title} className="w-full h-full object-contain" />
                  ) : (
                    <span className="material-symbols-outlined text-3xl">{usp.icon}</span>
                  )}
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

        {/* Ecosystem Section */}
        <Section id="ecosystem" className="py-12 reveal">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">An Eco-system of Connected Agents for Ad Sales</h2>
            <div className="max-w-4xl mx-auto space-y-4">
              <p className="text-primary font-bold text-lg md:text-xl leading-relaxed">
                Orchestrated by PacePal. Supported by a library of MCPs connecting with Ad Servers, MediaOcean, invoicing systems, reporting tools, and more.
              </p>
              <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                An AI-First approach to Automating workflows, reducing errors, and scaling operations across your Ad Sales ecosystem.
              </p>
            </div>
          </div>
          <div className="flex justify-center max-w-6xl mx-auto px-4">
            <EcosystemAnimation />
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
      </div>
    </>
  );
};

export default App;

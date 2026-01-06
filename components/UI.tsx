
import React, { useState } from 'react';
import { KPIItem, FAQItem } from '../types';

export const LoadingScreen: React.FC<{ active: boolean }> = ({ active }) => (
  <div className={`loading-screen ${active ? '' : 'hidden'}`}>
    <div className="relative mb-8">
      <div className="w-20 h-20 rounded-2xl bg-primary flex items-center justify-center text-white relative z-10 animate-float shadow-2xl shadow-primary/50">
        <span className="material-symbols-outlined text-4xl">view_in_ar</span>
      </div>
      <div className="absolute inset-0 rounded-2xl bg-primary/40 animate-sonar blur-xl"></div>
    </div>
    <h2 className="text-2xl font-black text-white tracking-tighter mb-2">Ad Sales-In-A-Box</h2>
    <div className="flex items-center gap-3">
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
      <div className="w-1.5 h-1.5 rounded-full bg-primary animate-bounce"></div>
    </div>
    <p className="mt-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Initializing Agentforce Blueprint...</p>
  </div>
);

export const Section: React.FC<{ 
  id?: string; 
  children: React.ReactNode; 
  className?: string 
}> = ({ id, children, className = '' }) => (
  <section id={id} className={`w-full px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl ${className}`}>
    {children}
  </section>
);

export const Card: React.FC<{ 
  children: React.ReactNode; 
  className?: string 
}> = ({ children, className = '' }) => (
  <div className={`rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 ${className}`}>
    {children}
  </div>
);

export const CTAButton: React.FC<{
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}> = ({ variant = 'primary', children, className = '', onClick }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-bold transition-all active:scale-95";
  const variants = {
    primary: "bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/20",
    secondary: "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:border-primary hover:text-primary dark:hover:text-white"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} h-12 px-6 ${className}`}
    >
      {children}
    </button>
  );
};

export const IconTile: React.FC<{
  icon: string;
  title: string;
  className?: string;
}> = ({ icon, title, className = '' }) => (
  <div className={`flex flex-col items-center gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 ${className} hover:border-primary/50 transition-colors group`}>
    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
      <span className="material-symbols-outlined">{icon}</span>
    </div>
    <span className="font-bold text-sm text-center">{title}</span>
  </div>
);

export const KPIGrid: React.FC<{ items: KPIItem[] }> = ({ items }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {items.map((item, i) => (
      <Card key={i} className="p-8 text-center bg-white dark:bg-slate-800/50 reveal" style={{ transitionDelay: `${i * 150}ms` }}>
        <div className="text-primary mb-4 animate-float" style={{ animationDelay: `${i * -1}s` }}>
          <span className="material-symbols-outlined text-4xl">{item.icon}</span>
        </div>
        <div className="text-4xl font-black mb-2 text-primary">{item.value}</div>
        <div className="font-bold text-slate-900 dark:text-white mb-1">{item.label}</div>
        <div className="text-sm text-slate-500">{item.subtext}</div>
      </Card>
    ))}
  </div>
);

export const FAQAccordion: React.FC<{ items: FAQItem[] }> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-4">
      {items.map((item, i) => (
        <div key={i} className="border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden bg-white dark:bg-slate-900 reveal" style={{ transitionDelay: `${i * 100}ms` }}>
          <button 
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between p-6 text-left font-bold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            <span>{item.question}</span>
            <span className={`material-symbols-outlined transition-transform duration-300 ${openIndex === i ? 'rotate-180' : ''}`}>
              expand_more
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="p-6 pt-0 text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 mt-2 mx-6 pt-4">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const ArchitectureDiagram: React.FC = () => {
  return (
    <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center reveal">
      {/* Ring 4: External Systems - Outer Rotating Ring */}
      <div className="absolute inset-0 border-2 border-slate-200 dark:border-slate-800 rounded-full flex items-center justify-center animate-rotate-slow">
         <div className="absolute top-0 p-2 bg-white dark:bg-slate-800 rounded-lg -translate-y-1/2 border border-slate-200 dark:border-slate-700 cursor-help group/node shadow-lg animate-float">
            <span className="material-symbols-outlined text-slate-500">cloud_queue</span>
            <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 p-3 rounded bg-background-dark text-white text-[10px] w-40 opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
              External: Salesforce Media Cloud, GAM, Freewheel, NetSuite.
            </div>
         </div>
      </div>

      {/* Ring 3: MCPs - Reverse Rotating Ring */}
      <div className="absolute inset-[15%] border-2 border-slate-300 dark:border-slate-700 border-dashed rounded-full flex items-center justify-center animate-rotate-medium">
        <div className="absolute right-0 p-2 bg-white dark:bg-slate-800 rounded-lg translate-x-1/2 border border-slate-200 dark:border-slate-700 cursor-help group/node shadow-lg">
          <span className="material-symbols-outlined text-slate-500">sync_alt</span>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 p-3 rounded bg-background-dark text-white text-[10px] w-40 opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
            MCPs: Model Context Protocols ensuring secure data ingestion.
          </div>
        </div>
      </div>

      {/* Ring 2: Agents - Pulse Ring */}
      <div className="absolute inset-[30%] border-2 border-primary/20 rounded-full flex items-center justify-center">
        <div className="absolute bottom-0 p-2 bg-primary/10 rounded-lg translate-y-1/2 border border-primary/30 cursor-help group/node shadow-lg animate-float [animation-delay:-1s]">
          <span className="material-symbols-outlined text-primary">support_agent</span>
          <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 p-3 rounded bg-background-dark text-white text-[10px] w-40 opacity-0 group-hover/node:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl">
            Agents: Task-specific bots like Scout and Planner.
          </div>
        </div>
        <div className="absolute inset-0 rounded-full animate-sonar border border-primary/10"></div>
      </div>

      {/* Center Hub: PacePal */}
      <div className="w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 z-10 cursor-help group/pacepal relative">
        <div className="absolute inset-0 rounded-full bg-primary animate-sonar"></div>
        <span className="material-symbols-outlined text-4xl relative z-20">psychology</span>
        <div className="absolute top-full mt-4 p-4 rounded-xl bg-background-dark text-white text-xs w-48 opacity-0 group-hover/pacepal:opacity-100 transition-opacity pointer-events-none z-50 shadow-2xl text-center">
          <p className="font-bold text-primary mb-1">PacePal Core</p>
          The central reasoning agent orchestrating all sub-agent actions.
        </div>
      </div>
    </div>
  );
};

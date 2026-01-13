import React from 'react';

const NODES_INNER = [
    { label: 'Pitch Agent', icon: 'campaign' },
    { label: 'Optimization', icon: 'trending_up' },
    { label: 'Reporting', icon: 'analytics' },
    { label: 'IO Ingestion', icon: 'file_download' },
    { label: 'Ad Servers', icon: 'dns' },
];

const NODES_OUTER = [
    { label: 'Data Lakes', icon: 'database' },
    { label: 'Reconciliation', icon: 'fact_check' },
    { label: 'Invoicing', icon: 'receipt_long' },
    { label: 'MediaOcean MCP', icon: 'water' },
    { label: 'Ad Server MCP', icon: 'hub' },
    { label: 'Reporting MCP', icon: 'summarize' },
    { label: 'Email Servers', icon: 'mail' },
];

const EcosystemAnimation: React.FC = () => {
    return (
        <div className="relative w-full max-w-4xl aspect-[16/9] md:aspect-[2/1] flex items-center justify-center overflow-hidden my-12 select-none pointer-events-none">

            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent opacity-50"></div>

            {/* --- Center: PacePal --- */}
            <div className="relative z-20 w-32 h-32 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-4 border-primary shadow-[0_0_60px_rgba(0,159,221,0.3)] animate-float">
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-sonar"></div>
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mb-2 shadow-lg">
                    <span className="material-symbols-outlined text-4xl">psychology</span>
                </div>
                <div className="font-black text-primary text-xl tracking-tight">PacePal</div>
            </div>

            {/* --- Orbits Container --- */}
            {/* Using a fixed size container that scales for responsiveness ensures exact positioning matches the design */}
            <div className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] scale-75 md:scale-100 transition-transform">

                {/* Inner Ring (Radius ~180px on desktop) */}
                <div className="absolute inset-[15%] border border-dashed border-primary/20 rounded-full animate-rotate-slow [animation-duration:40s]">
                    {NODES_INNER.map((node, i) => (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                height: '100%',
                                transform: `rotate(${(360 / NODES_INNER.length) * i}deg)`
                            }}
                        >
                            {/* Counter-rotate to keep text upright */}
                            <div className="absolute -top-[0px] left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ animation: 'rotate-slow 40s linear infinite reverse' }}
                            >
                                <div className="flex flex-col items-center gap-2 w-32">
                                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                                        {node.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Outer Ring (Radius ~300px) */}
                <div className="absolute inset-[-10%] border border-slate-200 dark:border-slate-800 rounded-full animate-rotate-slow [animation-duration:80s] [animation-direction:reverse]">
                    {NODES_OUTER.map((node, i) => (
                        <div
                            key={i}
                            className="absolute top-0 left-1/2 -translate-x-1/2"
                            style={{
                                height: '100%',
                                transform: `rotate(${(360 / NODES_OUTER.length) * i}deg)`,
                                transformOrigin: '50% 50%'
                            }}
                        >
                            {/* Counter-rotation matches parent direction (reverse) but inverted.
                      Parent: reverse.
                      Child Correction: normal.
                  */}
                            <div className="absolute -top-[0px] left-1/2 -translate-x-1/2 -translate-y-1/2"
                                style={{ animation: 'rotate-slow 80s linear infinite normal' }}
                            >
                                <div className="flex flex-col items-center gap-2 w-32">
                                    <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500">
                                        <span className="material-symbols-outlined text-xl">{node.icon}</span>
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 bg-white/90 dark:bg-slate-900/90 px-2 py-0.5 rounded-full whitespace-nowrap shadow-sm">
                                        {node.label}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default EcosystemAnimation;

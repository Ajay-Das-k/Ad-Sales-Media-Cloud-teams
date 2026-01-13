import React, { useEffect, useRef } from 'react';

const NODES_INNER = [
    { label: 'Pitch Agent', icon: 'campaign' },
    { label: 'Optimization', icon: 'trending_up' },
    { label: 'Reporting', icon: 'analytics' },
    { label: 'IO Ingestion', icon: 'file_download' },
    { label: 'Ad Servers', icon: 'dns' },
];

const NODES_OUTER = [
    { label: 'Data Management', icon: 'database' },
    { label: 'Reconciliation', icon: 'fact_check' },
    { label: 'Billing/Invoicing', icon: 'receipt_long' },
    { label: 'MediaOcean MCP', icon: 'water' },
    { label: 'Ad Server MCP', icon: 'hub' },
    { label: 'Reporting MCP', icon: 'summarize' },
    { label: 'Identity/Auth', icon: 'fingerprint' },
];

const EcosystemAnimation: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const rotation = window.scrollY * 0.05; // Adjust speed here
                containerRef.current.style.setProperty('--scroll-rotation', `${rotation}deg`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial set
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
        /* 
           Scroll-Based Rotation:
           Uses CSS variable --scroll-rotation set by JS.
        */
      `}</style>

            <div
                ref={containerRef}
                className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center overflow-visible select-none my-4"
                style={{ '--scroll-rotation': '0deg' } as React.CSSProperties}
            >

                {/* --- Central Node: PacePal --- */}
                {/* Reduced size: w-20 h-20 md:w-32 md:h-32 (Requested) */}
                <div className="relative z-30 w-20 h-20 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-[4px] border-primary shadow-[0_0_40px_rgba(0,159,221,0.25)] animate-float">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-sonar"></div>
                    {/* Inner Logo Image */}
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-1 relative z-10 transition-transform hover:scale-110 duration-300">
                        <img src="pacepal_logo.png" alt="PacePal Logo" className="w-full h-full object-contain" />
                    </div>

                    <div className="absolute -inset-[15px] md:-inset-[25px] border border-primary/10 rounded-full z-0"></div>
                    <div className="absolute -inset-[30px] md:-inset-[50px] border border-dashed border-primary/10 rounded-full z-0 opacity-50"></div>
                </div>

                {/* ================= INNER ORBIT (Tilted, Scroll Controlled) ================= */}
                {NODES_INNER.map((node, i) => {
                    const angleOffset = (360 / NODES_INNER.length) * i;

                    return (
                        <div key={i} className="absolute z-20 pointer-events-none" style={{ width: '450px', height: '450px' }}>
                            <div
                                className="w-full h-full absolute inset-0 transition-transform duration-75 ease-linear"
                                style={{
                                    // Initial Layout Rotation + Scroll Rotation
                                    transform: `rotate(${angleOffset}deg) rotate(var(--scroll-rotation))`
                                }}
                            >
                                <div className="w-full h-full absolute inset-0" style={{ transform: 'scaleY(0.7)' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div style={{ transform: 'scaleY(1.428)' }}>
                                            <div
                                                className="transition-transform duration-75 ease-linear"
                                                style={{
                                                    // Counter Rotate: -(Initial + Scroll)
                                                    transform: `rotate(calc(-1 * var(--scroll-rotation))) rotate(-${angleOffset}deg)`
                                                }}
                                            >
                                                {/* CONTENT */}
                                                <div className="flex flex-col items-center gap-2 w-28 md:w-36 transition-transform pointer-events-auto hover:scale-110 group cursor-pointer">
                                                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-2 border-primary/10 flex items-center justify-center text-primary mb-1 backdrop-blur-sm group-hover:border-primary group-hover:shadow-primary/20 transition-all">
                                                        <span className="material-symbols-outlined text-2xl md:text-3xl">{node.icon}</span>
                                                    </div>
                                                    <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/95 dark:bg-slate-900/95 px-3 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                                        {node.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* ================= OUTER ORBIT (Tilted, Scroll Controlled Reverse) ================= */}
                {NODES_OUTER.map((node, i) => {
                    const angleOffset = (360 / NODES_OUTER.length) * i;
                    // Reverse scroll direction: multiply by -0.5 or similar

                    return (
                        <div key={i} className="absolute z-10 pointer-events-none" style={{ width: '750px', height: '750px' }}>
                            <div
                                className="w-full h-full absolute inset-0 transition-transform duration-75 ease-linear"
                                style={{
                                    // Initial + Scroll (Reverse direction)
                                    transform: `rotate(${angleOffset}deg) rotate(calc(-0.6 * var(--scroll-rotation)))`
                                }}
                            >
                                <div className="w-full h-full absolute inset-0" style={{ transform: 'scaleY(0.7)' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div style={{ transform: 'scaleY(1.428)' }}>
                                            <div
                                                className="transition-transform duration-75 ease-linear"
                                                style={{
                                                    // Counter Rotate: -1 * (Initial - 0.5 * Scroll) = -Initial + 0.5 * Scroll
                                                    transform: `rotate(calc(0.6 * var(--scroll-rotation))) rotate(-${angleOffset}deg)`
                                                }}
                                            >
                                                {/* CONTENT */}
                                                <div className="flex flex-col items-center gap-2 w-24 md:w-32 transition-transform pointer-events-auto hover:scale-110 group cursor-pointer">
                                                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 dark:bg-slate-800 shadow-md border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 mb-1 group-hover:border-primary/50 group-hover:text-primary transition-all">
                                                        <span className="material-symbols-outlined text-xl md:text-2xl">{node.icon}</span>
                                                    </div>
                                                    <span className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 px-2.5 py-0.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                                        {node.label}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}

                {/* Rings Visuals */}
                <div className="absolute w-[450px] h-[450px] border border-dashed border-primary/20 rounded-full pointer-events-none"
                    style={{ transform: 'scaleY(0.7) rotate(calc(0.2 * var(--scroll-rotation)))' }}></div>

                <div className="absolute w-[750px] h-[750px] border border-slate-200 dark:border-slate-800 rounded-full pointer-events-none opacity-40"
                    style={{ transform: 'scaleY(0.7) rotate(calc(-0.1 * var(--scroll-rotation)))' }}></div>

            </div>

            <style>{`
        @media (max-width: 768px) {
           .overflow-visible > div {
             transform: scale(0.45); 
           }
        }
      `}</style>
        </>
    );
};

export default EcosystemAnimation;

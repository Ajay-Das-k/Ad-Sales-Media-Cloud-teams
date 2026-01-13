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
                // Gentler rotation speed
                const rotation = window.scrollY * 0.05;
                containerRef.current.style.setProperty('--scroll-rotation', `${rotation}deg`);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <style>{`
        :root {
          /* 
            Responsive Layout Variables 
            Using min() ensures it never gets too big on desktop, 
            but shrinks proportionally on mobile (using vmin/vw).
          */
          --inner-diam: min(450px, 50vmin);
          --outer-diam: min(750px, 85vmin);
          
          /* Node sizes scale slightly with viewport */
          --center-node-size: min(128px, 20vmin);
          --node-size: min(100px, 15vmin);
          --node-icon-size: min(56px, 8vmin);
          --node-font-size: min(12px, 2vmin);
        }
        
        .orbit-container {
             /* Center the orbits */
             position: absolute;
             top: 50%;
             left: 50%;
             transform: translate(-50%, -50%);
             border-radius: 9999px;
        }
      `}</style>

            <div
                ref={containerRef}
                className="relative w-full h-[50vh] min-h-[400px] max-h-[800px] flex items-center justify-center overflow-hidden my-4"
                style={{ '--scroll-rotation': '0deg' } as React.CSSProperties}
            >

                {/* --- Central Node: PacePal --- */}
                <div
                    className="relative z-30 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-[4px] border-primary shadow-[0_0_40px_rgba(0,159,221,0.25)] animate-float"
                    style={{ width: 'var(--center-node-size)', height: 'var(--center-node-size)' }}
                >
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-sonar"></div>
                    {/* Inner Logo Image */}
                    <div className="relative z-10 w-[60%] h-[60%] flex items-center justify-center mb-1 transition-transform hover:scale-110 duration-300">
                        <img src="pacepal_logo.png" alt="PacePal Logo" className="w-full h-full object-contain" />
                    </div>

                    {/* Decor Rings */}
                    <div className="absolute -inset-[20%] border border-primary/10 rounded-full z-0"></div>
                    <div className="absolute -inset-[40%] border border-dashed border-primary/10 rounded-full z-0 opacity-50"></div>
                </div>

                {/* ================= INNER ORBIT ================= */}
                {NODES_INNER.map((node, i) => {
                    const angleOffset = (360 / NODES_INNER.length) * i;
                    return (
                        <div key={i} className="orbit-container z-20 pointer-events-none"
                            style={{ width: 'var(--inner-diam)', height: 'var(--inner-diam)' }}>
                            <div
                                className="w-full h-full absolute inset-0 transition-transform duration-75 ease-linear"
                                style={{ transform: `rotate(${angleOffset}deg) rotate(var(--scroll-rotation))` }}
                            >
                                <div className="w-full h-full absolute inset-0" style={{ transform: 'scaleY(0.7)' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div style={{ transform: 'scaleY(1.428)' }}>
                                            <div
                                                className="transition-transform duration-75 ease-linear"
                                                style={{ transform: `rotate(calc(-1 * var(--scroll-rotation))) rotate(-${angleOffset}deg)` }}
                                            >
                                                {/* CONTENT */}
                                                <div className="flex flex-col items-center gap-2 w-[120px] transition-transform pointer-events-auto hover:scale-110 group cursor-pointer">
                                                    <div className="rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-2 border-primary/10 flex items-center justify-center text-primary mb-1 backdrop-blur-sm group-hover:border-primary group-hover:shadow-primary/20 transition-all"
                                                        style={{ width: 'var(--node-icon-size)', height: 'var(--node-icon-size)' }}
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: 'calc(var(--node-icon-size) * 0.5)' }}>{node.icon}</span>
                                                    </div>
                                                    <span className="font-bold text-slate-600 dark:text-slate-300 bg-white/95 dark:bg-slate-900/95 px-3 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors"
                                                        style={{ fontSize: 'var(--node-font-size)' }}
                                                    >
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

                {/* ================= OUTER ORBIT ================= */}
                {NODES_OUTER.map((node, i) => {
                    const angleOffset = (360 / NODES_OUTER.length) * i;
                    return (
                        <div key={i} className="orbit-container z-10 pointer-events-none"
                            style={{ width: 'var(--outer-diam)', height: 'var(--outer-diam)' }}>
                            <div
                                className="w-full h-full absolute inset-0 transition-transform duration-75 ease-linear"
                                style={{ transform: `rotate(${angleOffset}deg) rotate(calc(-0.6 * var(--scroll-rotation)))` }}
                            >
                                <div className="w-full h-full absolute inset-0" style={{ transform: 'scaleY(0.7)' }}>
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        <div style={{ transform: 'scaleY(1.428)' }}>
                                            <div
                                                className="transition-transform duration-75 ease-linear"
                                                style={{ transform: `rotate(calc(0.6 * var(--scroll-rotation))) rotate(-${angleOffset}deg)` }}
                                            >
                                                {/* CONTENT */}
                                                <div className="flex flex-col items-center gap-2 w-[120px] transition-transform pointer-events-auto hover:scale-110 group cursor-pointer">
                                                    <div className="rounded-full bg-slate-50 dark:bg-slate-800 shadow-md border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 mb-1 group-hover:border-primary/50 group-hover:text-primary transition-all"
                                                        style={{ width: 'calc(var(--node-icon-size) * 0.8)', height: 'calc(var(--node-icon-size) * 0.8)' }}
                                                    >
                                                        <span className="material-symbols-outlined" style={{ fontSize: 'calc(var(--node-icon-size) * 0.4)' }}>{node.icon}</span>
                                                    </div>
                                                    <span className="font-bold text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 px-2.5 py-0.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors"
                                                        style={{ fontSize: 'calc(var(--node-font-size) * 0.9)' }}
                                                    >
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
                <div className="orbit-container border border-dashed border-primary/20 rounded-full pointer-events-none"
                    style={{ width: 'var(--inner-diam)', height: 'var(--inner-diam)', transform: 'translate(-50%, -50%) scaleY(0.7) rotate(calc(0.2 * var(--scroll-rotation)))' }}></div>

                <div className="orbit-container border border-slate-200 dark:border-slate-800 rounded-full pointer-events-none opacity-40"
                    style={{ width: 'var(--outer-diam)', height: 'var(--outer-diam)', transform: 'translate(-50%, -50%) scaleY(0.7) rotate(calc(-0.1 * var(--scroll-rotation)))' }}></div>

            </div>
        </>
    );
};

export default EcosystemAnimation;

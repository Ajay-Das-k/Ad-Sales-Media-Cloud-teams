import React, { useEffect, useState, useRef } from 'react';

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
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setRotation(window.scrollY * 0.15); // Slightly faster rotation
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Circular Position: Equal scale for X and Y
    const getPos = (angleDeg: number, radius: number) => {
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius; // Circular!
        return { x, y };
    };

    return (
        <>
            {/* 
        Responsive Strategy:
        Use a fixed-size reference container (e.g., 800x800) and scale it down using CSS transforms 
        based on viewport width. This preserves the absolute positioning perfect ratio.
      */}
            <div className="w-full flex items-center justify-center my-8 md:my-12 overflow-hidden">
                <div
                    className="relative flex items-center justify-center select-none origin-center transition-transform"
                    style={{
                        width: '800px',
                        height: '800px',
                        // Responsive Scaling via CSS styles below
                    }}
                    id="ecosystem-container"
                >

                    {/* --- Central Node: PacePal --- */}
                    {/* Increased Size requested */}
                    <div className="relative z-30 w-32 h-32 md:w-56 md:h-56 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-[6px] border-primary shadow-[0_0_60px_rgba(0,159,221,0.3)] animate-float">
                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-sonar"></div>

                        {/* Logo */}
                        <div className="w-20 h-20 md:w-36 md:h-36 rounded-full flex items-center justify-center mb-2 relative z-10 transition-transform hover:scale-105 duration-300">
                            <img src="pacepal_logo.png" alt="PacePal Logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>

                        {/* Text Label */}
                        <div className="absolute -bottom-8 md:-bottom-10 bg-white dark:bg-slate-900 px-4 py-1 rounded-full border-2 border-primary shadow-lg z-20">
                            <span className="text-xl md:text-2xl font-black text-primary tracking-tighter">PACEPAL</span>
                        </div>

                        {/* Decor Rings */}
                        <div className="absolute -inset-[30px] border border-primary/20 rounded-full z-0 pointer-events-none"></div>
                        <div className="absolute -inset-[60px] border border-dashed border-primary/20 rounded-full z-0 opacity-40 pointer-events-none"></div>
                    </div>

                    {/* ================= VISUAL RINGS (Circular) ================= */}
                    <div
                        className="absolute border-2 border-dashed border-primary/20 rounded-full pointer-events-none transition-transform duration-700 ease-out"
                        style={{ width: '500px', height: '500px' }} // Inner Ring Radius 250
                    ></div>

                    <div
                        className="absolute border border-slate-300 dark:border-slate-700 rounded-full pointer-events-none opacity-40"
                        style={{ width: '800px', height: '800px' }} // Outer Ring Radius 400
                    ></div>


                    {/* ================= INNER NODES ================= */}
                    {NODES_INNER.map((node, i) => {
                        const radius = 250;
                        const angleOffset = (360 / NODES_INNER.length) * i;
                        const currentAngle = angleOffset + rotation;
                        const pos = getPos(currentAngle, radius);

                        // Simple Z-Index based on Y is OK, but circle implies flat plane?
                        // User asked for "Circle". If flat 2D, depth sorting is less critical but nice.
                        // Let's keep subtle depth.
                        const isFront = pos.y > 0;
                        const zIndex = isFront ? 40 : 20;

                        return (
                            <div
                                key={i}
                                className="absolute flex flex-col items-center justify-center transition-transform hover:scale-110 group cursor-pointer"
                                style={{
                                    left: `calc(50% + ${pos.x}px)`,
                                    top: `calc(50% + ${pos.y}px)`,
                                    zIndex,
                                    transform: `translate(-50%, -50%)`,
                                }}
                            >
                                <div className="flex flex-col items-center gap-2 w-32 md:w-40">
                                    <div className="w-16 h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-xl border-2 border-primary/10 flex items-center justify-center text-primary mb-1 backdrop-blur-sm group-hover:border-primary group-hover:shadow-primary/30 transition-all">
                                        <span className="material-symbols-outlined text-3xl">{node.icon}</span>
                                    </div>
                                    <span className="text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/95 dark:bg-slate-900/95 px-3 py-1.5 rounded-full shadow-lg border border-slate-200 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                        {node.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                    {/* ================= OUTER NODES ================= */}
                    {NODES_OUTER.map((node, i) => {
                        const radius = 400;
                        const angleOffset = (360 / NODES_OUTER.length) * i;
                        const currentAngle = angleOffset + (rotation * -0.5);
                        const pos = getPos(currentAngle, radius);

                        const isFront = pos.y > 0;
                        const zIndex = isFront ? 35 : 10;

                        return (
                            <div
                                key={i}
                                className="absolute flex flex-col items-center justify-center transition-transform hover:scale-110 group cursor-pointer"
                                style={{
                                    left: `calc(50% + ${pos.x}px)`,
                                    top: `calc(50% + ${pos.y}px)`,
                                    zIndex,
                                    transform: `translate(-50%, -50%)`,
                                }}
                            >
                                <div className="flex flex-col items-center gap-2 w-28 md:w-36">
                                    <div className="w-14 h-14 rounded-full bg-slate-50 dark:bg-slate-800 shadow-lg border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 mb-1 group-hover:border-primary/50 group-hover:text-primary transition-all">
                                        <span className="material-symbols-outlined text-2xl">{node.icon}</span>
                                    </div>
                                    <span className="text-[10px] md:text-xs font-bold text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 px-3 py-1 rounded-full shadow-sm border border-slate-200 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                        {node.label}
                                    </span>
                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>

            <style>{`
        /* Responsive Scaling for Container */
        #ecosystem-container {
           transform: scale(0.35); /* Base Mobile Scale */
           height: 350px !important; /* Force Height Constraint to avoid huge gaps due to scale */
           width: 350px !important;
        }

        /* Adjust positions since we force width/height? 
           NO. If we force width/height on container, absolute children might clip or shift.
           Better approach: Transform Scale the Wrapper, leaving internal pixel math alone.
        */
        
        #ecosystem-container {
             /* Reset overridden styles above just in case logic was flawed */
             width: 800px !important;
             height: 800px !important;
             transform-origin: center center;
        }

        @media (max-width: 639px) {
           #ecosystem-container {
             transform: scale(0.38); 
             margin: -250px 0; /* Compensation for empty space left by scaling */
           }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
           #ecosystem-container {
             transform: scale(0.6);
             margin: -150px 0;
           }
        }
        @media (min-width: 1024px) {
           #ecosystem-container {
             transform: scale(0.85); /* Proper Desktop Scale */
             margin: -50px 0;
           }
        }
        @media (min-width: 1536px) {
           #ecosystem-container {
             transform: scale(1);
           }
        }
      `}</style>
        </>
    );
};

export default EcosystemAnimation;

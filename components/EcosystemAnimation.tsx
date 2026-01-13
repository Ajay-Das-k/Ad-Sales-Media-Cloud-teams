import React, { useEffect, useState, useRef } from 'react';

const NODES_INNER = [
    { label: 'Ad Server Agent', icon: 'dns' },
    { label: 'Reporting Agent', icon: 'analytics' },
    { label: 'Email Template Agent', icon: 'mail' },
    { label: 'Marketing Agent', icon: 'campaign' },
    { label: 'Media Planning Agent', icon: 'edit_calendar' },
    { label: 'Campaign Optimization Agent', icon: 'trending_up' },
    { label: 'IO Ingestion Agent', icon: 'file_download' },
    { label: 'Reconciliation Agent', icon: 'fact_check' },
];

const NODES_OUTER = [
    { label: 'Email Campaign MCP', icon: 'forward_to_inbox' },
    { label: 'Link Management MCP', icon: 'link' },
    { label: 'LinkedIn MCP', icon: 'work' },
    { label: 'GAM MCP', icon: 'ad_units' },
    { label: 'Media Ocean MCP', icon: 'water' },
    { label: 'Strata MCP', icon: 'layers' },
    { label: 'Facebook Ad Manager MCP', icon: 'public' },
    { label: 'The Trade Desk MCP', icon: 'show_chart' },
    { label: 'Billing MCP', icon: 'receipt_long' },
    { label: 'Zillow MCP', icon: 'home_work' },
    { label: 'US Census Bureau MCP', icon: 'groups' },
];

const EcosystemAnimation: React.FC = () => {
    const [rotation, setRotation] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setRotation(window.scrollY * 0.15);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getPos = (angleDeg: number, radius: number) => {
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        return { x, y };
    };

    return (
        <>
            {/* 
        Changes:
        1. overflow-visible (was hidden) to prevent node clipping.
        2. Added padding y to ensure room for nodes.
      */}
            <div className="w-full flex items-center justify-center my-12 md:my-24 overflow-visible px-4">
                <div
                    className="relative flex items-center justify-center select-none origin-center transition-transform"
                    style={{
                        width: '800px',
                        height: '800px',
                        // Responsive Scaling handled below
                    }}
                    id="ecosystem-container"
                >

                    {/* --- Central Node: PacePal --- */}
                    {/* Reduced size: w-32/56 -> w-24/40. Logo fills it. */}
                    <div className="relative z-30 w-24 h-24 md:w-40 md:h-40 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-[4px] border-primary shadow-[0_0_50px_rgba(0,159,221,0.25)] animate-float">
                        <div className="absolute inset-0 rounded-full bg-primary/10 animate-sonar"></div>

                        {/* Logo - Filled */}
                        <div className="w-full h-full rounded-full flex items-center justify-center relative z-10 transition-transform hover:scale-105 duration-300 overflow-hidden p-2">
                            {/* p-2 gives a small whitespace buffer so logo doesn't touch border directly, change to p-0 if absolute fill needed */}
                            <img src="pacepal_logo.png" alt="PacePal Logo" className="w-full h-full object-contain drop-shadow-sm" />
                        </div>

                        {/* Text Label - Adjusted position for smaller node */}
                        <div className="absolute -bottom-6 md:-bottom-8 bg-white dark:bg-slate-900 px-3 py-0.5 rounded-full border border-primary shadow-lg z-20">
                            <span className="text-sm md:text-lg font-black text-primary tracking-tighter">PacePal</span>
                        </div>

                        {/* Decor Rings - Scaled down */}
                        <div className="absolute -inset-[20px] border border-primary/20 rounded-full z-0 pointer-events-none"></div>
                        <div className="absolute -inset-[40px] border border-dashed border-primary/20 rounded-full z-0 opacity-40 pointer-events-none"></div>
                    </div>

                    {/* ================= VISUAL RINGS ================= */}
                    <div
                        className="absolute border-2 border-dashed border-primary/40 rounded-full pointer-events-none transition-transform duration-700 ease-out"
                        style={{ width: '500px', height: '500px' }}
                    ></div>

                    <div
                        className="absolute border border-slate-400 dark:border-slate-500 rounded-full pointer-events-none opacity-60"
                        style={{ width: '800px', height: '800px' }}
                    ></div>


                    {/* ================= INNER NODES ================= */}
                    {NODES_INNER.map((node, i) => {
                        const radius = 250;
                        const angleOffset = (360 / NODES_INNER.length) * i;
                        const currentAngle = angleOffset + rotation;
                        const pos = getPos(currentAngle, radius);

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
             width: 800px !important;
             height: 800px !important;
             transform-origin: center center;
        }

        @media (max-width: 639px) {
           #ecosystem-container {
             transform: scale(0.38); 
             /* Margin adjustment is crucial. With scale 0.38, the 800px box becomes 304px visually. 
                But it takes up 800px layout space unless margin adjustment. 
                (800 - 304) / 2 = 248px per side vertically.
                So margin should be approx -250px.
             */
             margin: -250px 0; 
           }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
           #ecosystem-container {
             transform: scale(0.55);
             margin: -180px 0;
           }
        }
        @media (min-width: 1024px) {
           #ecosystem-container {
             transform: scale(0.85);
             margin: -50px 0;
           }
        }
        @media (min-width: 1536px) {
           #ecosystem-container {
             transform: scale(1);
             margin: 0;
           }
        }
      `}</style>
        </>
    );
};

export default EcosystemAnimation;

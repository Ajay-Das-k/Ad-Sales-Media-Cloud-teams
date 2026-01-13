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

    // Scroll handler using RequestAnimationFrame for performance
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setRotation(window.scrollY * 0.1); // Speed factor
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Helper to position nodes based on angle, radius, and ELLIPSE scale
    // TILT creates an ellipse where Y_radius = Radius * 0.7
    const getPos = (angleDeg: number, radius: number) => {
        const angleRad = (angleDeg * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius * 0.7; // Factor 0.7 creates the 3D Tilt effect
        return { x, y };
    };

    return (
        <>
            <div className="relative w-full h-[350px] md:h-[550px] flex items-center justify-center overflow-visible select-none my-4">

                {/* --- Central Node: PacePal --- */}
                <div className="relative z-30 w-20 h-20 md:w-32 md:h-32 flex flex-col items-center justify-center rounded-full bg-white dark:bg-slate-900 border-[4px] border-primary shadow-[0_0_40px_rgba(0,159,221,0.25)] animate-float">
                    <div className="absolute inset-0 rounded-full bg-primary/20 animate-sonar"></div>
                    <div className="w-12 h-12 md:w-20 md:h-20 rounded-full flex items-center justify-center mb-1 relative z-10 transition-transform hover:scale-110 duration-300">
                        <img src="pacepal_logo.png" alt="PacePal Logo" className="w-full h-full object-contain" />
                    </div>

                    <div className="absolute -inset-[15px] md:-inset-[25px] border border-primary/10 rounded-full z-0"></div>
                    <div className="absolute -inset-[30px] md:-inset-[50px] border border-dashed border-primary/10 rounded-full z-0 opacity-50"></div>
                </div>

                {/* ================= VISUAL RINGS (Static Ellipses) ================= */}
                {/* Inner Ring Visual */}
                <div
                    className="absolute border border-dashed border-primary/20 rounded-full pointer-events-none transition-transform duration-700 ease-out"
                    style={{
                        width: '450px',
                        height: '450px',
                        transform: `scaleY(0.7) rotate(${rotation * 0.2}deg)` // Spin visual texture slowly? Or keep static? Static is safer for 3D logic.
                        // If we rotate a dashed ellipse, the dashes crawl along the path IF it's a circle projected.
                        // Here we just rotate the squashed div -> WOBBLE. 
                        // Better: Don't rotate visual ring. Just let nodes move.
                        // Or: Rotate a CIRCLE then squash it.
                        // transform: `scaleY(0.7) rotate(...)` = WOBBLE.
                        // transform: `rotate(...)` ? No, we need ellipse.
                        // Correct spinning dashed ring: `rotateX(45deg) rotateZ(scroll)`. 
                        // But we simulate TILT via scaleY(0.7).
                        // Let's keep it STATIC to match the "Rail" metaphor.
                    }}
                ></div>

                {/* Outer Ring Visual */}
                <div
                    className="absolute border border-slate-200 dark:border-slate-800 rounded-full pointer-events-none opacity-40"
                    style={{ width: '750px', height: '750px', transform: 'scaleY(0.7)' }}
                ></div>


                {/* ================= INNER NODES (Calculated Positions) ================= */}
                {NODES_INNER.map((node, i) => {
                    const radius = 225; // 450px / 2
                    const angleOffset = (360 / NODES_INNER.length) * i;
                    const currentAngle = angleOffset + rotation; // Clockwise
                    const pos = getPos(currentAngle, radius);

                    // Depth Sorting: y > 0 is front (higher z), y < 0 is back (lower z)
                    const isFront = pos.y > 0;
                    const zIndex = isFront ? 40 : 20; // PacePal is 30
                    const scale = isFront ? 1 : 0.9; // Subtle depth scale
                    const opacity = isFront ? 1 : 0.8;

                    return (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center justify-center transition-transform duration-75 ease-linear pointer-events-auto hover:scale-110 group cursor-pointer"
                            style={{
                                left: `calc(50% + ${pos.x}px)`,
                                top: `calc(50% + ${pos.y}px)`,
                                zIndex,
                                transform: `translate(-50%, -50%) scale(${scale})`, // Center the node itself
                                opacity
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 w-28 md:w-36">
                                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white dark:bg-slate-800 shadow-lg border-2 border-primary/10 flex items-center justify-center text-primary mb-1 backdrop-blur-sm group-hover:border-primary group-hover:shadow-primary/20 transition-all">
                                    <span className="material-symbols-outlined text-2xl md:text-3xl">{node.icon}</span>
                                </div>
                                <span className="text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 bg-white/95 dark:bg-slate-900/95 px-3 py-1 rounded-full shadow-md border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                    {node.label}
                                </span>
                            </div>
                        </div>
                    );
                })}

                {/* ================= OUTER NODES (Calculated Positions) ================= */}
                {NODES_OUTER.map((node, i) => {
                    const radius = 375; // 750px / 2
                    const angleOffset = (360 / NODES_OUTER.length) * i;
                    // Reverse Rotation: -rotation * 0.6
                    const currentAngle = angleOffset + (rotation * -0.6);
                    const pos = getPos(currentAngle, radius);

                    const isFront = pos.y > 0;
                    const zIndex = isFront ? 35 : 10; // Behind PacePal (30) if back, in front if front (but behind Inner Front?)
                    // Inner Front is 40. Outer Front is 35? Sure.
                    // Inner Back is 20. Outer Back is 10.
                    const scale = isFront ? 1 : 0.85;
                    const opacity = isFront ? 1 : 0.6;

                    return (
                        <div
                            key={i}
                            className="absolute flex flex-col items-center justify-center transition-transform duration-75 ease-linear pointer-events-auto hover:scale-110 group cursor-pointer"
                            style={{
                                left: `calc(50% + ${pos.x}px)`,
                                top: `calc(50% + ${pos.y}px)`,
                                zIndex,
                                transform: `translate(-50%, -50%) scale(${scale})`,
                                opacity
                            }}
                        >
                            <div className="flex flex-col items-center gap-2 w-24 md:w-32">
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-50 dark:bg-slate-800 shadow-md border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 mb-1 group-hover:border-primary/50 group-hover:text-primary transition-all">
                                    <span className="material-symbols-outlined text-xl md:text-2xl">{node.icon}</span>
                                </div>
                                <span className="text-[9px] md:text-[10px] font-bold text-slate-500 dark:text-slate-400 bg-white/90 dark:bg-slate-900/90 px-2.5 py-0.5 rounded-full shadow-sm border border-slate-100 dark:border-slate-800 whitespace-nowrap group-hover:text-primary transition-colors">
                                    {node.label}
                                </span>
                            </div>
                        </div>
                    );
                })}

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

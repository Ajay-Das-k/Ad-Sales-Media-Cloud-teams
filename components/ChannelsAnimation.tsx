import React, { useEffect, useState } from 'react';

const CHANNELS = [
    { icon: 'devices', label: 'Digital' },
    { icon: 'share', label: 'Social' },
    { icon: 'tv', label: 'Linear' },
    { icon: 'print', label: 'Print' },
    { icon: 'search', label: 'Search' },
    { icon: 'location_on', label: 'D/OOH' },
];

const ChannelsAnimation: React.FC = () => {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setRotation(window.scrollY * 0.1);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Simple Circular Layout
    const getPos = (index: number, total: number, radius: number) => {
        const angleOffset = (360 / total) * index;
        // Rotate entire ring with scroll
        const angleRad = ((angleOffset + rotation) * Math.PI) / 180;
        const x = Math.cos(angleRad) * radius;
        const y = Math.sin(angleRad) * radius;
        return { x, y };
    };

    return (
        <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center my-8">
            {/* Center Hub */}
            <div className="relative z-10 w-24 h-24 rounded-full bg-primary flex items-center justify-center text-white shadow-2xl shadow-primary/40 animate-sonar">
                <span className="material-symbols-outlined text-4xl">hub</span>
            </div>

            {/* Orbit Ring (Visual) */}
            <div className="absolute inset-0 border border-dashed border-white/20 rounded-full animate-spin-slow" style={{ animationDuration: '60s' }}></div>

            {/* Nodes */}
            {CHANNELS.map((item, i) => {
                const pos = getPos(i, CHANNELS.length, 140); // 140px radius

                return (
                    <div
                        key={item.label}
                        className="absolute flex flex-col items-center gap-2 group cursor-pointer"
                        style={{
                            transform: `translate(${pos.x}px, ${pos.y}px)`, // Absolute X/Y translation from center
                            transition: 'transform 0.1s linear', // Smooth transition for scroll
                        }}
                    >
                        <div className="w-12 h-12 rounded-full bg-white/10 border border-white/10 flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-lg backdrop-blur-sm">
                            <span className="material-symbols-outlined text-xl">{item.icon}</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors bg-background-dark/80 px-2 py-0.5 rounded-full">
                            {item.label}
                        </span>
                    </div>
                );
            })}
        </div>
    );
};

export default ChannelsAnimation;

import React from 'react';

const HeroAnimation: React.FC = () => {
    return (
        <div className="relative w-full aspect-video flex items-center justify-center select-none overflow-visible group cursor-default">

            {/* --- Base Illustration (Team Strategy) --- */}
            <div className="relative z-10 w-full max-w-[650px] animate-float-slow">
                <img
                    src="/hero_team_strategy.png"
                    alt="Marketing Team Strategy Dashboard"
                    className="w-full h-auto object-contain hover:scale-105 transition-transform duration-700"
                />
            </div>

            {/* --- Animated Overlays (Target & Insights) --- */}
            <div className="absolute inset-0 z-20 pointer-events-none">

                {/* 1. Pulsing Bullseye (Center Target) */}
                <div className="absolute top-[38%] left-[48%] w-16 h-16 bg-red-500/0 rounded-full border-2 border-red-500/50 animate-ping [animation-duration:3s]"></div>
                <div className="absolute top-[42%] left-[50%] w-8 h-8 bg-red-500/0 rounded-full border border-red-500/30 animate-ping [animation-duration:2s]"></div>

                {/* 2. Floating Idea (Lightbulb - Top Right) */}
                <div className="absolute top-[20%] right-[22%] w-10 h-10 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute top-[18%] right-[20%] w-2 h-2 bg-yellow-400 rounded-full shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-float [animation-delay:0s]"></div>

                {/* 3. Growth Indicator (Chart - Top Left) */}
                <div className="absolute top-[25%] left-[28%] w-1.5 h-10 bg-green-500/0 overflow-hidden flex flex-col justify-end">
                    <div className="w-full bg-green-400/50 animate-[grow-up_2s_ease-out_infinite] h-full" style={{ animationIterationCount: 1 }}></div>
                </div>
                <div className="absolute top-[22%] left-[28%] w-2 h-2 bg-green-500 rounded-full animate-bounce [animation-duration:3s]"></div>

                {/* 4. Megaphone Waves (Top Left) */}
                <div className="absolute top-[28%] left-[22%]">
                    <div className="w-6 h-6 border-r-2 border-orange-500/30 rounded-full animate-ping [animation-duration:2s]"></div>
                </div>

                {/* 5. Team Energy (Bottom Right Character) */}
                <div className="absolute bottom-[20%] right-[25%] w-1.5 h-1.5 bg-orange-400 rounded-full animate-float [animation-delay:1.5s]"></div>
            </div>

            <style>{`
                @keyframes float-slow {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-8px); }
                }
                .animate-float-slow {
                    animation: float-slow 7s ease-in-out infinite;
                }
                @keyframes grow-up {
                    0% { height: 0%; opacity: 0; }
                    100% { height: 100%; opacity: 1; }
                }
            `}</style>
        </div>
    );
};

export default HeroAnimation;

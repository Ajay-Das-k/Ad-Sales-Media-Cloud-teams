import React, { useState } from 'react';
import { Section } from './UI';

const VideoSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <Section id="video-showcase" className="py-24 bg-slate-900 overflow-hidden relative">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[10%] -left-[10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[128px] animate-pulse"></div>
                <div className="absolute bottom-[10%] -right-[10%] w-[50%] h-[50%] bg-secondary/10 rounded-full blur-[128px] animate-pulse [animation-delay:2s]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Transforming Ad Sales. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">One Platform.</span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                        Watch how Ad Sales-In-A-Box unifies your entire media workflow, from pitch to payment, native on Salesforce.
                    </p>
                </div>

                {/* Video Container (Laptop/Screen Style) */}
                <div
                    className={`relative mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 bg-slate-800 border-4 border-slate-700 max-w-[90%] md:max-w-7xl aspect-video group transition-all duration-500 ${!isPlaying ? 'cursor-pointer hover:border-primary/50 hover:shadow-primary/40' : ''}`}
                    onClick={() => !isPlaying && setIsPlaying(true)}
                >

                    {!isPlaying ? (
                        /* --- Thumbnail State --- */
                        <div className="absolute inset-0 flex items-center justify-center relative bg-slate-900">
                            {/* Background Image (Subtle 3D Ref) */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 to-slate-800/90 z-10"></div>
                            <img
                                src="/hero_saas_3d.png"
                                alt="Video Thumbnail Background"
                                className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay blur-sm scale-110"
                            />

                            {/* Overlay Content */}
                            <div className="relative z-20 flex flex-col items-center animate-fade-in-up">
                                {/* Play Button */}
                                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-6 backdrop-blur-md border border-white/20 group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-tr from-primary to-secondary rounded-full flex items-center justify-center shadow-lg shadow-primary/50 relative overflow-hidden">
                                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                                        <span className="material-symbols-outlined text-4xl text-white ml-2 relative z-10">play_arrow</span>
                                    </div>
                                </div>

                                {/* Text Overlay */}
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-md">See It In Action</h3>
                                <p className="text-slate-300 font-medium bg-slate-900/50 px-4 py-1 rounded-full border border-white/10 backdrop-blur-sm">
                                    Product Overview &bull; 2 min
                                </p>
                            </div>

                            {/* Hover Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 z-30 pointer-events-none"></div>
                        </div>
                    ) : (
                        /* --- Active Video State --- */
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/wP3JDGQlaiY?autoplay=1&rel=0"
                            title="Ad Sales-In-A-Box Product Overview"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="w-full h-full relative z-10 animate-in fade-in duration-500"
                        ></iframe>
                    )}

                </div>
            </div>
        </Section>
    );
};

export default VideoSection;

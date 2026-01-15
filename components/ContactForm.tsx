import React from 'react';
import { Section } from './UI';

const ContactVector: React.FC = () => (
    <div className="relative w-full h-64 md:h-full min-h-[300px] flex items-center justify-center">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        {/* Central Node (Salesforce/Hub) */}
        <div className="relative z-10 w-24 h-24 bg-[#00A1E0] rounded-2xl rotate-45 flex items-center justify-center shadow-[0_0_40px_rgba(0,161,224,0.4)] animate-float">
            <div className="w-20 h-20 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center -rotate-45">
                <span className="material-symbols-outlined text-white text-4xl">cloud_sync</span>
            </div>
            {/* Pulse Rings */}
            <div className="absolute inset-0 border border-white/30 rounded-2xl animate-ping opacity-20"></div>
        </div>

        {/* Orbiting Satellite Data Packets */}
        {[0, 90, 180, 270].map((deg, i) => (
            <div key={i} className="absolute inset-0 animate-rotate-slow" style={{ animationDelay: `-${i * 2}s`, transform: `rotate(${deg}deg)` }}>
                <div className="absolute top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center animate-float" style={{ animationDelay: `-${i * 1.5}s` }}>
                    <span className="material-symbols-outlined text-primary text-xl">
                        {['mail', 'chat', 'rocket_launch', 'handshake'][i]}
                    </span>
                    {/* Connection Line */}
                    <div className="absolute top-full left-1/2 w-px h-20 bg-gradient-to-b from-primary/50 to-transparent"></div>
                </div>
            </div>
        ))}

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 animate-float" style={{ animationDelay: '-1s' }}>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[10px] font-bold text-slate-500">System Online</span>
            </div>
        </div>
        <div className="absolute bottom-10 left-10 p-3 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-slate-100 dark:border-slate-700 animate-float" style={{ animationDelay: '-2.5s' }}>
            <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                <span className="text-[10px] font-bold text-slate-500">Agent Ready</span>
            </div>
        </div>
    </div>
);

export const ContactFormContent: React.FC<{ className?: string }> = ({ className = '' }) => (
    <div className={`relative rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-2">

            {/* Left Side: Visual & Context */}
            <div className="relative p-12 bg-slate-50 dark:bg-slate-800/50 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">
                        Ready to Transform Your Ad Sales?
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
                        Book a deep-dive architecture review. See how Agentic AI can streamline your pitch-to-pay workflow.
                    </p>
                </div>

                {/* Vector Animation */}
                <div className="flex-1 min-h-[300px]">
                    <ContactVector />
                </div>

                <div className="relative z-10 mt-8 flex flex-wrap gap-4">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                        <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-500">
                        <span className="material-symbols-outlined text-green-500">check_circle</span>
                        <span>Live Demo</span>
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="p-12 bg-white dark:bg-slate-900">
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Full Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none transition-colors" placeholder="Jane Doe" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Work Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none transition-colors" placeholder="jane@company.com" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Company</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none transition-colors" placeholder="Acme Media" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">I need help with...</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none transition-colors appearance-none">
                                <option>Book a Demo</option>
                                <option>Architecture Review</option>
                                <option>Pricing & Licensing</option>
                                <option>Partnership Inquiry</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-xs font-bold uppercase text-slate-500 tracking-wider">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 focus:border-primary outline-none transition-colors resize-none" placeholder="Tell us about your current ad sales challenges..."></textarea>
                    </div>

                    <button type="submit" className="w-full py-4 bg-[#00A1E0] hover:bg-[#008CC2] text-white font-bold text-lg rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all">
                        Send Message
                    </button>

                    <p className="text-center text-xs text-slate-400">
                        By submitting this form, you agree to our <a href="#" className="underline hover:text-primary">Terms</a> and <a href="#" className="underline hover:text-primary">Privacy Policy</a>.
                    </p>
                </form>
            </div>

        </div>
    </div>
);

const ContactForm: React.FC = () => {
    return (
        <Section id="contact" className="py-24 reveal">
            <ContactFormContent />
        </Section>
    );
};

export default ContactForm;

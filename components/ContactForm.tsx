import React from 'react';
import { Section } from './UI';
import { Link } from 'react-router-dom';



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
                    {/* Static Graphics for Light/Dark Mode */}
                    <div className="w-full h-full flex items-center justify-center p-8">
                        <img
                            src="/contact_illustration_light.png"
                            alt="Contact Illustration"
                            className="w-full h-full object-contain max-h-[300px] block dark:hidden drop-shadow-xl"
                        />
                        <img
                            src="/contact_illustration_dark.png"
                            alt="Contact Illustration"
                            className="w-full h-full object-contain max-h-[300px] hidden dark:block drop-shadow-xl filter brightness-110"
                        />
                    </div>
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
                        By submitting this form, you agree to our <Link to="/terms" className="underline hover:text-primary">Terms</Link> and <Link to="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
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

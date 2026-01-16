import React, { useEffect } from 'react';

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Privacy Policy</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Information that is gathered from visitors</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            In common with other websites, log files are stored on the web server saving details such as the visitor's IP address, browser type, referring page and time of visit. Cookies may be used to remember visitor preferences when interacting with the website. Where registration is required, the visitor's email and a username will be stored on the server.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How the Information is used</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            The information is used to enhance the vistor's experience when using the website to display personalised content and possibly advertising. E-mail addresses will not be sold, rented or leased to 3rd parties. E-mail may be sent to inform you of news of our services or offers by us or our affiliates.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Visitor Options</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            If you have subscribed to one of our services, you may unsubscribe by following the instructions which are included in the e-mail that you received. You may be able to block cookies via your browser settings but this may prevent you from access to certain features of the website.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Cookies</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Cookies are small digital signature files that are stored by your web browser that allow your preferences to be recorded when visiting the website. Also they may be used to track your return visits to the website. 3rd party advertising companies may also use cookies for tracking purposes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;

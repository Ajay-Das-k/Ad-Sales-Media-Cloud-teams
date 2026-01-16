import React, { useEffect } from 'react';

const AcceptableUsePolicy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-12 min-h-screen">
            <div className="max-w-3xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Acceptable Use Policy</h1>

                <div className="prose prose-slate dark:prose-invert max-w-none space-y-8">
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        This is a placeholder for the Acceptable Use Policy. Please provide the content for this page.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AcceptableUsePolicy;

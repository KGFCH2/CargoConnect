import React from 'react';
import { Truck, AlertTriangle, FileText, RefreshCw } from 'lucide-react';

const TermsPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            <section className="pt-28 pb-12 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Terms of Service</h1>
                    <p className="mt-4 text-blue-200 max-w-2xl">The terms that govern use of CargoConnect and related services.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 transition-transform transform hover:scale-[1.01] duration-300">
                        <h2 tabIndex={0} className="group text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <Truck className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Use of Service</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">CargoConnect provides a platform to request logistics and transport services. The platform is for informational and booking purposes; actual service provision is arranged between you and the transport provider.</p>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <AlertTriangle className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Limitation of Liability</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">To the maximum extent permitted by law, CargoConnect is not liable for indirect, incidental, or consequential damages arising from use of the site, delays, or service provider actions.</p>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <FileText className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Intellectual Property</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">All content, logos, and design in the CargoConnect site are the property of the maintainer. You may not reproduce or distribute content without permission.</p>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <RefreshCw className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Changes</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">We may update these Terms from time to time. Continued use of the site after updates constitutes acceptance of the revised terms.</p>

                        <div className="mt-6" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default TermsPage;

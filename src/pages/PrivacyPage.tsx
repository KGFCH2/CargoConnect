import React from 'react';
import { Database, Mail, ShieldCheck, Settings } from 'lucide-react';

const PrivacyPage: React.FC = () => {
    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            <section className="pt-28 pb-12 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 text-white">
                <div className="container mx-auto px-6">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">Privacy Policy</h1>
                    <p className="mt-4 text-blue-200 max-w-2xl">How CargoConnect collects, uses, and protects the information you provide while using the site.</p>
                </div>
            </section>

            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-10 border border-slate-200 dark:border-slate-700 transition-transform transform hover:scale-[1.01] duration-300">
                        <h2 tabIndex={0} className="group text-2xl font-semibold mb-4 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <Database className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Information We Collect</span>
                        </h2>
                        <ul className="list-disc pl-6 text-slate-700 dark:text-slate-300 space-y-2">
                            <li>Contact details you provide (name, email, phone) for bookings or contact forms.</li>
                            <li>Newsletter email addresses used solely for sending newsletters and updates.</li>
                            <li>Technical data (IP, browser, device) collected automatically for analytics.</li>
                        </ul>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <Mail className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">How We Use Your Data</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            We use your data to respond to inquiries, process bookings, send transactional emails (including newsletter confirmations), and improve site functionality. We do not sell personal data to third parties.
                        </p>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <ShieldCheck className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Security</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            We implement reasonable security measures to protect data in transit and at rest. For email sending we rely on secure SMTP providers and environment variables to store credentials (never commit secrets to source control).
                        </p>

                        <h2 tabIndex={0} className="group text-2xl font-semibold mt-8 mb-3 text-slate-900 dark:text-white flex items-center transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 rounded-md cursor-pointer">
                            <Settings className="w-6 h-6 mr-3 text-indigo-600 dark:text-indigo-300 flex-shrink-0 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
                            <span className="transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">Your Choices</span>
                        </h2>
                        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                            You can unsubscribe from newsletters at any time using the unsubscribe link in emails or by contacting support. You may request removal of personal data by contacting the maintainer at the email below.
                        </p>

                        <div className="mt-6" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PrivacyPage;

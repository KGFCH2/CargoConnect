import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const FAQPage: React.FC = () => {
    const [expandedId, setExpandedId] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            id: 1,
            question: 'How do I book a vehicle?',
            answer: 'Booking is simple! Click on "Book Now" from the homepage, enter your pickup and delivery locations, select a vehicle, choose your payment method, and confirm. You\'ll receive a booking confirmation immediately.'
        },
        {
            id: 2,
            question: 'What are your delivery timeframes?',
            answer: 'Our delivery timeframes depend on the distance and location. Same-day delivery is available for city deliveries, while interstate deliveries typically take 2-5 days. Real-time tracking keeps you updated throughout.'
        },
        {
            id: 3,
            question: 'Is my cargo insured?',
            answer: 'Yes! All shipments are covered with comprehensive insurance. Basic coverage is included with every shipment, and you can opt for enhanced coverage for high-value items.'
        },
        {
            id: 4,
            question: 'What payment methods do you accept?',
            answer: 'We accept multiple payment methods: Credit/Debit Cards, UPI, Net Banking, and Cash on Delivery. All payments are secure and encrypted.'
        },
        {
            id: 5,
            question: 'Can I track my shipment in real-time?',
            answer: 'Absolutely! You can track your shipment in real-time through our mobile app or website. You\'ll also receive SMS and email updates at each stage of delivery.'
        },
        {
            id: 6,
            question: 'What if my cargo gets damaged?',
            answer: 'In the unlikely event of damage, we have a comprehensive claim process. Document the damage with photos, file a claim within 48 hours, and we\'ll process your claim promptly with full compensation.'
        },
        {
            id: 7,
            question: 'Do you offer bulk discounts?',
            answer: 'Yes! We offer attractive discounts for regular bookings and bulk shipments. Contact our sales team for customized pricing based on your shipping volume.'
        },
        {
            id: 8,
            question: 'How can I contact customer support?',
            answer: 'Our 24/7 customer support team is available via phone (+91 8888 888 888), email (info@cargoconnect.in), or through the chat feature on our website. Response time is within 2 hours.'
        },
        {
            id: 9,
            question: 'What areas do you service?',
            answer: 'We currently service 25+ major cities across India including Mumbai, Bangalore, Delhi, Pune, Hyderabad, Chennai, and more. Coverage is expanding continuously.'
        },
        {
            id: 10,
            question: 'Can I cancel or modify my booking?',
            answer: 'Yes, you can cancel or modify your booking up to 2 hours before the scheduled pickup time. Cancellations within this window incur no charges. After that, applicable cancellation fees may apply.'
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                        <p className="text-xl text-blue-100">
                            Find answers to common questions about our services, booking process, and more
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            {faqs.map((faq) => (
                                <div
                                    key={faq.id}
                                    className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:border-blue-400 dark:hover:border-blue-600 transition-all duration-500 ease-in-out hover:shadow-lg dark:hover:shadow-blue-900/20"
                                >
                                    <button
                                        onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                                        className="w-full px-6 py-5 flex items-center justify-between bg-gradient-to-r from-slate-50 dark:from-slate-800 to-blue-50 dark:to-slate-800 hover:from-blue-50 dark:hover:from-slate-700 hover:to-blue-100 dark:hover:to-slate-700 transition-all duration-500 ease-in-out relative group transform hover:scale-[1.02]"
                                        title={expandedId === faq.id ? 'Click to collapse answer' : 'Click to expand answer'}
                                    >
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white text-left transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">{faq.question}</h3>
                                        <div className={`transition-all duration-500 ease-in-out ${expandedId === faq.id ? 'rotate-180 scale-110' : 'rotate-0 scale-100'}`}>
                                            {expandedId === faq.id ? (
                                                <ChevronUp size={24} className="text-blue-600 dark:text-blue-400 flex-shrink-0 transition-colors duration-300" />
                                            ) : (
                                                <ChevronDown size={24} className="text-slate-600 dark:text-slate-400 flex-shrink-0 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                                            )}
                                        </div>
                                    </button>

                                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === faq.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                        }`}>
                                        <div className="px-6 py-5 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
                                            <p className="text-slate-700 dark:text-slate-300 leading-relaxed animate-in fade-in slide-in-from-top-2 duration-300">{faq.answer}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Still Have Questions */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-900 transition-colors duration-500">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Still Have Questions?</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                        Our customer support team is available 24/7 to help you with any queries
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl dark:shadow-blue-900/30 transform hover:scale-105 hover:-translate-y-1 relative group"
                    >
                        Contact Us
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;

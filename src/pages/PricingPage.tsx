import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedLink from '../components/AnimatedLink';
import { Zap, TrendingDown, Award } from 'lucide-react';

const PricingPage: React.FC = () => {
    const [selectedPlan, setSelectedPlan] = React.useState<number | null>(null);

    const pricingPlans = [
        {
            name: 'Mini Tempo',
            capacity: '250-350 kg',
            basePrice: '₹200',
            perKm: '₹8',
            features: ['Max 250kg', 'City delivery', '2-4 hours', 'Basic insurance']
        },
        {
            name: 'Standard Tempo',
            capacity: '750-1000 kg',
            basePrice: '₹300',
            perKm: '₹10',
            features: ['Max 750kg', 'City & suburbs', '4-6 hours', 'Standard insurance'],
            popular: true
        },
        {
            name: 'Mini Truck',
            capacity: '1500-2000 kg',
            basePrice: '₹500',
            perKm: '₹12',
            features: ['Max 1500kg', 'Interstate', '1-3 days', 'Premium insurance']
        },
        {
            name: 'Cargo Truck',
            capacity: '4000-5000 kg',
            basePrice: '₹800',
            perKm: '₹15',
            features: ['Max 4000kg', 'Pan-India', '2-5 days', 'Full coverage']
        }
    ];

    const faqs = [
        {
            question: 'How are fares calculated?',
            answer: 'Fares = Base Price + (Distance in km × Price per km) + Any additional charges for special handling'
        },
        {
            question: 'Are there any hidden charges?',
            answer: 'No! All charges are transparent and shown before booking confirmation'
        },
        {
            question: 'Do you offer discounts for regular customers?',
            answer: 'Yes! Contact the sales team for volume discounts and corporate rates'
        },
        {
            question: 'What if my cargo is lighter than the minimum weight?',
            answer: 'Base price applies regardless of actual weight. You pay the better of: actual weight or minimum weight'
        },
        {
            question: 'Is GST included in these prices?',
            answer: 'Prices shown are before GST. GST will be added as per applicable rates'
        },
        {
            question: 'Can I upgrade insurance coverage?',
            answer: 'Yes! Enhanced insurance options are available at additional cost during booking'
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
                        <p className="text-xl text-blue-100">
                            No hidden charges. No surprises. Just honest, competitive rates
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {pricingPlans.map((plan, idx) => (
                            <div
                                key={idx}
                                className={`rounded-2xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl group cursor-pointer ${plan.popular
                                    ? 'border-2 border-blue-600 dark:border-blue-500 shadow-2xl dark:shadow-blue-900/30 transform lg:scale-105 bg-gradient-to-br from-white dark:from-slate-800 to-blue-50 dark:to-slate-900'
                                    : 'border-2 border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 bg-white dark:bg-slate-800'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white py-2 text-center font-bold">
                                        Most Popular
                                    </div>
                                )}

                                <div className="p-8">
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{plan.name}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">{plan.capacity}</p>

                                    <div className="mb-6 pb-6 border-b border-slate-200 dark:border-slate-600">
                                        <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">From</div>
                                        <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2 group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors duration-300">{plan.basePrice}</div>
                                        <div className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">+ {plan.perKm} per km</div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, fidx) => (
                                            <li key={fidx} className="flex items-center gap-3">
                                                <div className="w-5 h-5 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40 transition-colors duration-300">
                                                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                                                </div>
                                                <span className="text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => setSelectedPlan(idx)}
                                        className={`w-full py-3 rounded-lg font-bold transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-1 relative group ${selectedPlan === idx
                                            ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 shadow-lg'
                                            : plan.popular
                                                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl'
                                                : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-700 dark:hover:text-blue-300 hover:shadow-lg dark:hover:shadow-blue-900/20'
                                            }`}
                                        title={selectedPlan === idx ? 'Plan already selected' : `Select ${plan.name} plan`}
                                    >
                                        {selectedPlan === idx ? '✓ Selected' : plan.popular ? 'Choose Plan' : 'Select'}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">How Pricing Works</h2>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                                <TrendingDown size={28} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">Get Quote</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                We calculate the fare based on base price + distance charges
                            </p>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 text-center hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2">
                            <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-6 transition-all duration-300 hover:scale-110">
                                <Award size={28} className="text-blue-600 dark:text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">Best Price</h3>
                            <p className="text-slate-600 dark:text-slate-300">
                                Transparent pricing with no hidden charges ever
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Pricing FAQs</h2>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 bg-slate-50 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-[1.02] hover:shadow-lg dark:hover:shadow-blue-900/20 group cursor-pointer"
                            >
                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300">{faq.question}</h3>
                                <p className="text-slate-600 dark:text-slate-300 group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-300">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Service Guarantees */}
            <section className="py-20 bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Service Guarantees & Benefits</h2>
                            <p className="text-xl text-slate-600 dark:text-slate-300">Why choose CargoConnect for your logistics needs</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
                                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-green-200 dark:group-hover:bg-green-800/50">
                                    <span className="text-2xl">🚚</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">On-Time Delivery</h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">98% of our shipments arrive on or before the promised delivery time</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
                                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                    <span className="text-2xl">🛡️</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">Full Insurance Coverage</h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">Complete protection for your cargo with up to ₹50,000 coverage per shipment</p>
                            </div>

                            <div className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
                                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-200 dark:group-hover:bg-purple-800/50">
                                    <span className="text-2xl">📱</span>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">Real-Time Tracking</h3>
                                <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">Track your shipment in real-time with GPS updates and SMS notifications</p>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-slate-800 rounded-2xl border-2 border-blue-200 dark:border-blue-600 p-8 text-center">
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Special Offers & Discounts</h3>
                            <div className="space-y-4 mb-6">
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-green-700 dark:text-green-400">✓</span>
                                    </div>
                                    <span className="text-lg text-slate-700 dark:text-slate-300">5% discount on 10+ bookings per month</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-green-700 dark:text-green-400">✓</span>
                                    </div>
                                    <span className="text-lg text-slate-700 dark:text-slate-300">10% discount on 50+ bookings per month</span>
                                </div>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-green-700 dark:text-green-400">✓</span>
                                    </div>
                                    <span className="text-lg text-slate-700 dark:text-slate-300">Corporate packages available on request</span>
                                </div>
                            </div>
                            <p className="text-slate-600 dark:text-slate-400 mb-6">
                                Contact the sales team for customized pricing based on your shipping volume
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 dark:text-slate-300 mb-10">
                        Book your shipment now and experience competitive pricing
                    </p>
                    <Link
                        to="/book-now"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 dark:bg-slate-800 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Book Now
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default PricingPage;

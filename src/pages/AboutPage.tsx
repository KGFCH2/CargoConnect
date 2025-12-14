import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Shield, Award, Users, TrendingUp, Globe, Code, Github, Linkedin, Mail } from 'lucide-react';

const AboutPage: React.FC = () => {
    const values = [
        {
            icon: Zap,
            title: 'Reliability',
            description: 'Consistent, on-time delivery every single time'
        },
        {
            icon: Shield,
            title: 'Security',
            description: 'Advanced tracking and insurance for peace of mind'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'Premium service quality in every shipment'
        },
        {
            icon: Users,
            title: 'Customer Focus',
            description: 'Your satisfaction is our top priority'
        },
        {
            icon: TrendingUp,
            title: 'Innovation',
            description: 'Latest technology for better service'
        },
        {
            icon: Globe,
            title: 'Pan-India',
            description: 'Expanding coverage across the country'
        }
    ];

    const milestones = [
        { year: '2020', event: 'CargoConnect Founded' },
        { year: '2021', event: '5 Cities Coverage' },
        { year: '2022', event: '100,000 Shipments Completed' },
        { year: '2023', event: '25 Cities Across India' },
        { year: '2024', event: '50,000+ Happy Customers' }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">About CargoConnect</h1>
                        <p className="text-xl text-blue-100 dark:text-slate-300">
                            India's Most Trusted Logistics Partner - Delivering Excellence Since 2020
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="transform transition-all duration-500 ease-in-out hover:scale-[1.02] hover:-translate-y-2">
                            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">Mission</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed transition-colors duration-300 hover:text-slate-700 dark:hover:text-slate-200">
                                To revolutionize cargo transportation in India by providing reliable, affordable, and transparent logistics solutions that empower businesses and individuals to ship with confidence.
                            </p>
                            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed transition-colors duration-300 hover:text-slate-700 dark:hover:text-slate-200">
                                We believe in making logistics simple, accessible, and efficient for everyone. My commitment is to deliver exceptional service at every step of the journey.
                            </p>
                        </div>
                        <div className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-950 dark:to-slate-900 rounded-2xl p-10 text-white transform transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-2xl dark:hover:shadow-blue-900/30 group cursor-pointer">
                            <h3 className="text-3xl font-bold mb-6 transition-colors duration-300 group-hover:text-blue-200">Vision</h3>
                            <p className="text-lg mb-8 transition-colors duration-300 group-hover:text-blue-100">
                                To become India's leading logistics provider by combining cutting-edge technology with exceptional customer service.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-white/30">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="transition-colors duration-300 hover:text-blue-200">Expand to 100+ cities across India</span>
                                </li>
                                <li className="flex items-start gap-3 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-white/30">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="transition-colors duration-300 hover:text-blue-200">Serve 1 million+ customers annually</span>
                                </li>
                                <li className="flex items-start gap-3 transform transition-all duration-300 hover:scale-105 hover:translate-x-2">
                                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 transition-all duration-300 hover:bg-white/30">
                                        <span className="text-sm font-bold">✓</span>
                                    </div>
                                    <span className="transition-colors duration-300 hover:text-blue-200">Set new industry standards for service</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Core Values</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            The principles that guide everything we do
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div
                                    key={idx}
                                    className="bg-white dark:bg-slate-800 rounded-xl p-8 border border-slate-200 dark:border-slate-700 hover:shadow-xl dark:hover:shadow-blue-900/30 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 group cursor-pointer"
                                >
                                    <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50">
                                        <Icon size={28} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">{value.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-300 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-200">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">Journey</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                            Growing stronger every year with your trust
                        </p>
                    </div>

                    <div className="max-w-2xl mx-auto">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="flex gap-8 mb-8 relative group">
                                <div className="flex flex-col items-center">
                                    <div className="w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full z-10 transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-500 dark:group-hover:bg-blue-300"></div>
                                    {idx < milestones.length - 1 && (
                                        <div className="w-1 h-24 bg-gradient-to-b from-blue-600 dark:from-blue-400 to-blue-200 dark:to-blue-900 mt-4 transition-all duration-300 group-hover:from-blue-500 dark:group-hover:from-blue-300"></div>
                                    )}
                                </div>
                                <div className="bg-gradient-to-br from-blue-50 to-slate-50 dark:from-slate-800 dark:to-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700 flex-grow transition-all duration-500 ease-in-out hover:shadow-lg dark:hover:shadow-blue-900/20 transform hover:scale-[1.02] hover:-translate-y-1 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                                    <h3 className="text-2xl font-bold text-blue-700 dark:text-blue-400 mb-2 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-300">{milestone.year}</h3>
                                    <p className="text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-200">{milestone.event}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 group cursor-pointer">
                            <div className="text-5xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-300">500+</div>
                            <p className="text-blue-200 dark:text-slate-400 transition-colors duration-300 group-hover:text-blue-100">Vehicles in Vehicle</p>
                        </div>
                        <div className="text-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 group cursor-pointer">
                            <div className="text-5xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-300">50K+</div>
                            <p className="text-blue-200 dark:text-slate-400 transition-colors duration-300 group-hover:text-blue-100">Happy Customers</p>
                        </div>
                        <div className="text-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 group cursor-pointer">
                            <div className="text-5xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-300">25+</div>
                            <p className="text-blue-200 dark:text-slate-400 transition-colors duration-300 group-hover:text-blue-100">Cities Covered</p>
                        </div>
                        <div className="text-center transform transition-all duration-500 ease-in-out hover:scale-110 hover:-translate-y-2 group cursor-pointer">
                            <div className="text-5xl font-bold mb-3 transition-colors duration-300 group-hover:text-blue-300">99.9%</div>
                            <p className="text-blue-200 dark:text-slate-400 transition-colors duration-300 group-hover:text-blue-100">On-Time Delivery</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* About the Developer */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-6 hover:shadow-2xl dark:hover:shadow-blue-900/30 group cursor-pointer">
                        <Code size={40} className="text-white transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6 transition-colors duration-300 hover:text-blue-700 dark:hover:text-blue-300">About the Developer</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto transition-colors duration-300 hover:text-slate-700 dark:hover:text-slate-200">
                        This is a personal project made by Babin Bid
                    </p>
                    <div className="flex justify-center gap-6 mb-8">
                        <a href="https://github.com/KGFCH2" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 dark:bg-slate-700 hover:bg-slate-600 dark:hover:bg-slate-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 group shadow-lg hover:shadow-xl" title="GitHub Profile">
                            <Github size={24} className="text-white group-hover:text-slate-200 transition-colors duration-300" />
                        </a>
                        <a href="https://www.linkedin.com/in/babin-bid-853728293/" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-800 dark:bg-slate-700 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 group shadow-lg hover:shadow-xl" title="LinkedIn Profile">
                            <Linkedin size={24} className="text-white group-hover:text-blue-100 transition-colors duration-300" />
                        </a>
                        <a href="mailto:babinbid05@gmail.com" className="p-3 bg-slate-800 dark:bg-slate-700 hover:bg-green-600 dark:hover:bg-green-600 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:-translate-y-1 group shadow-lg hover:shadow-xl" title="Send Email">
                            <Mail size={24} className="text-white group-hover:text-green-100 transition-colors duration-300" />
                        </a>
                    </div>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:from-blue-600 dark:to-blue-700 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl dark:shadow-blue-900/30 transform hover:scale-105 hover:-translate-y-1 group"
                    >
                        Get in Touch
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6 transition-colors duration-300 hover:text-blue-200">Join This Journey</h2>
                    <p className="text-xl text-blue-100 dark:text-slate-300 mb-10 max-w-2xl mx-auto transition-colors duration-300 hover:text-blue-50">
                        Experience the CargoConnect difference today
                    </p>
                    <Link
                        to="/book-now"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 dark:bg-slate-800 dark:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-700 font-bold py-4 px-8 rounded-lg transition-all duration-500 ease-in-out shadow-lg hover:shadow-xl transform hover:scale-105 hover:-translate-y-1 group"
                    >
                        Start Shipping
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;

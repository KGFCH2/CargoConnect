import React from 'react';
import { Truck, Package, MapPin, Clock, Shield, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesPage: React.FC = () => {
    const services = [
        {
            id: 1,
            title: 'City Deliveries',
            description: 'Fast and reliable same-day delivery services within your city',
            icon: Truck,
            features: ['Same-day delivery', 'Real-time tracking', 'Professional drivers']
        },
        {
            id: 2,
            title: 'Interstate Transport',
            description: 'Long-distance cargo transport across India with safety guarantee',
            icon: MapPin,
            features: ['Pan-India coverage', 'Door-to-door service', 'Insurance included']
        },
        {
            id: 3,
            title: 'Bulk Shipments',
            description: 'Specialized service for large quantities and heavy loads',
            icon: Package,
            features: ['Custom solutions', 'Flexible scheduling', 'Cost-effective rates']
        },
        {
            id: 4,
            title: '24/7 Service',
            description: 'Round-the-clock availability for urgent and emergency transport',
            icon: Clock,
            features: ['Emergency response', 'Night deliveries', 'Priority handling']
        },
        {
            id: 5,
            title: 'Secure Transport',
            description: 'High-security transport for valuable and sensitive cargo',
            icon: Shield,
            features: ['GPS tracking', 'Locked containers', 'Full documentation']
        },
        {
            id: 6,
            title: 'Logistics Analytics',
            description: 'Comprehensive tracking and reporting for your shipments',
            icon: BarChart3,
            features: ['Real-time updates', 'Detailed reports', 'Performance metrics']
        }
    ];

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-5xl font-bold mb-6">Premium Services</h1>
                        <p className="text-xl text-blue-100">
                            Comprehensive logistics solutions tailored to meet your unique transportation needs across India
                        </p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => {
                            const Icon = service.icon;
                            return (
                                <div
                                    key={service.id}
                                    className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-800 dark:to-slate-900 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-blue-900/20 transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 cursor-pointer"
                                >
                                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                        <Icon size={28} className="text-white transition-transform duration-300 group-hover:scale-110" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300">{service.title}</h3>
                                    <p className="text-slate-600 dark:text-slate-400 mb-6 transition-colors duration-300 group-hover:text-slate-700 dark:group-hover:text-slate-300">{service.description}</p>
                                    <ul className="space-y-2">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-2 text-slate-700 dark:text-slate-300 transition-colors duration-300 group-hover:text-slate-600 dark:group-hover:text-slate-200">
                                                <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-500 dark:group-hover:bg-blue-300"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-700 dark:via-blue-800 dark:to-slate-900 text-white transition-colors duration-300">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
                    <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                        Choose the service that fits your needs and book your first shipment today
                    </p>
                    <Link
                        to="/book-now"
                        className="inline-flex items-center gap-2 bg-white dark:bg-slate-100 text-blue-700 dark:text-blue-700 hover:bg-slate-100 dark:hover:bg-slate-200 font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                        Book Service Now
                        <span>→</span>
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;

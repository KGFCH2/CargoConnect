import React from 'react';
import { Truck, Package, Users, Zap } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import Portal from '../components/Portal';
import { Link } from 'react-router-dom';

const VehiclesPage: React.FC = () => {
    const [lightboxImage, setLightboxImage] = React.useState<string | null>(null);

    React.useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setLightboxImage(null);
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, []);

    return (
        <div className="bg-white dark:bg-slate-950 transition-colors duration-300">
            {/* Hero Section */}
            <section className="pt-32 pb-16 bg-gradient-to-br from-blue-950 via-blue-900 to-slate-900 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">Vehicle</h1>
                        <p className="text-base sm:text-xl text-blue-100">
                            Wide range of modern, well-maintained vehicles to handle all your cargo transportation needs
                        </p>
                    </div>
                </div>
            </section>

            {/* Vehicle Stats */}
            <section className="py-16 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-colors duration-300">
                <div className="container mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="text-center group cursor-pointer transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-300">500+</div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white group-hover:font-semibold">Vehicles in Vehicle</p>
                        </div>
                        <div className="text-center group cursor-pointer transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-300">99.9%</div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white group-hover:font-semibold">On-Time Delivery</p>
                        </div>
                        <div className="text-center group cursor-pointer transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-300">25+</div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white group-hover:font-semibold">Cities Covered</p>
                        </div>
                        <div className="text-center group cursor-pointer transition-transform duration-300">
                            <div className="text-4xl font-bold text-blue-700 dark:text-blue-400 mb-2 transition-all duration-300 transform group-hover:scale-110 group-hover:-translate-y-1 group-hover:text-blue-800 dark:group-hover:text-blue-300">50K+</div>
                            <p className="text-slate-600 dark:text-slate-400 font-medium transition-colors duration-300 group-hover:text-slate-900 dark:group-hover:text-white group-hover:font-semibold">Happy Customers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vehicles Grid */}
            <section className="py-20 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Choose Your Vehicle</h2>
                        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Select from a diverse range of vehicles, each optimized for different cargo sizes and delivery requirements
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
                        {vehicles.map((vehicle) => (
                            <VehicleCard
                                key={vehicle.id}
                                vehicle={vehicle}
                                onClick={() => setLightboxImage(vehicle.image)}
                            />
                        ))}
                    </div>

                    {/* Lightbox modal for full-size vehicle images */}
                    {lightboxImage && (
                        <Portal>
                            <div
                                className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
                                onClick={() => setLightboxImage(null)}
                            >
                                <div className="relative max-w-6xl w-full">
                                    <button
                                        onClick={(e) => { e.stopPropagation(); setLightboxImage(null); }}
                                        className="absolute top-2 right-2 z-50 bg-white/90 dark:bg-slate-800/90 text-slate-900 dark:text-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
                                        aria-label="Close image"
                                    >
                                        ✕
                                    </button>
                                    <img
                                        src={lightboxImage}
                                        alt="Vehicle full"
                                        onClick={(e) => e.stopPropagation()}
                                        className="mx-auto w-full h-auto max-h-[90vh] object-contain"
                                    />
                                </div>
                            </div>
                        </Portal>
                    )}
                </div>
            </section>

            {/* Vehicle Features */}
            <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-16 text-center">Why Choose Vehicles?</h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg dark:hover:shadow-blue-900/30 group cursor-pointer">
                                <Truck size={32} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Well-Maintained</h3>
                            <p className="text-slate-600 dark:text-slate-400">Regular maintenance and safety inspections ensure reliability</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg dark:hover:shadow-blue-900/30 group cursor-pointer">
                                <Zap size={32} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Modern Technology</h3>
                            <p className="text-slate-600 dark:text-slate-400">GPS tracking and real-time updates for all shipments</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg dark:hover:shadow-blue-900/30 group cursor-pointer">
                                <Package size={32} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Secure Transport</h3>
                            <p className="text-slate-600 dark:text-slate-400">Full insurance coverage and secure locking mechanisms</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mx-auto mb-6 transition-all duration-500 ease-in-out transform hover:scale-110 hover:rotate-6 hover:shadow-lg dark:hover:shadow-blue-900/30 group cursor-pointer">
                                <Users size={32} className="text-blue-600 dark:text-blue-400 transition-colors duration-300 group-hover:text-blue-700 dark:group-hover:text-blue-300" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Expert Drivers</h3>
                            <p className="text-slate-600 dark:text-slate-400">Professionally trained and verified drivers</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 dark:from-blue-950 dark:via-slate-900 dark:to-slate-950 text-white">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6">Ready to Book?</h2>
                    <p className="text-xl text-blue-100 dark:text-slate-300 mb-10 max-w-2xl mx-auto">
                        Select your vehicle and get a quote for your shipment today
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

export default VehiclesPage;

import React from 'react';
import Hero from '../components/Hero';
import { Truck, Clock, Shield, Award, CheckCircle, ArrowRight, TrendingUp, Users, Globe, Zap } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Active Users', value: '10K+' },
    { icon: TrendingUp, label: 'Daily Shipments', value: '500+' },
    { icon: Globe, label: 'Coverage Areas', value: '50+' },
  ];

  const features = [
    {
      icon: Zap,
      title: 'Real-time Tracking',
      description: 'Track your shipments in real-time with our advanced GPS system.',
    },
    {
      icon: CheckCircle,
      title: 'Reliable Service',
      description: 'On-time delivery guaranteed or your money back.',
    },
    {
      icon: Award,
      title: 'Best Prices',
      description: 'Competitive rates with no hidden charges.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <Hero />

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="text-center p-6 rounded-xl bg-white dark:bg-slate-800 shadow-md dark:shadow-slate-900 hover:shadow-xl dark:hover:shadow-slate-700 transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="text-blue-600 dark:text-blue-400" size={28} />
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2">
                  {stat.label}
                </p>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              OUR PROCESS
            </span>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Booking Made Simple</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Three simple steps to book your transport and get your cargo delivered safely across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connecting line */}
            <div className="hidden md:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 dark:from-blue-900/30 via-blue-400 dark:via-blue-600 to-blue-200 dark:to-blue-900/30"></div>

            {[1, 2, 3].map((step) => (
              <div key={step} className="relative text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-2xl font-bold shadow-lg dark:shadow-blue-900/30 relative z-10 group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                  {step}
                </div>
                <h3 className={`text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors duration-300 ${step === 1 ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : step === 2 ? 'group-hover:text-blue-600 dark:group-hover:text-blue-400' : 'group-hover:text-blue-600 dark:group-hover:text-blue-400'}`}>
                  {step === 1 && 'Enter Locations'}
                  {step === 2 && 'Select Service'}
                  {step === 3 && 'Confirm Booking'}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {step === 1 && 'Provide your pickup and delivery locations with ease using our intuitive location selector.'}
                  {step === 2 && 'Choose the perfect service option that fits your shipping needs and budget.'}
                  {step === 3 && 'Confirm your booking and receive instant confirmation with real-time tracking.'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose CargoConnect?
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              We offer the best logistics solutions tailored to your needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:shadow-lg dark:hover:shadow-blue-900/20 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors duration-300 group-hover:scale-110 transform">
                    <feature.icon className="text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors duration-300" size={32} />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 text-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-center group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Vehicles
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Choose the perfect vehicle for your shipping needs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {vehicles.slice(0, 3).map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/vehicles"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 group"
            >
              View All Vehicles
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-700 dark:to-indigo-700 transition-colors duration-300">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Ship?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Get started with CargoConnect today and enjoy reliable, fast, and affordable shipping.
          </p>
          <Link
            to="/book-now"
            className="inline-flex items-center gap-2 bg-white text-blue-600 dark:text-blue-700 px-8 py-3 rounded-lg hover:bg-blue-50 dark:hover:bg-slate-100 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 group"
          >
            Book Your Shipment Now
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;

import React from 'react';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-slate-900/85" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                ✨ India's #1 Logistics Solution
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Your Trusted <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Logistics Partner</span>
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              Experience seamless cargo transportation across India with our reliable vehicle, competitive pricing, and dedicated customer support. Book instantly, pay securely, deliver confidently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-14">
              <Link
                to="/book-now"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Booking
              </Link>
              <Link
                to="/vehicles"
                className="bg-white/10 backdrop-blur hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 text-center"
              >
                Explore Vehicles
              </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/20">
              <div className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Truck size={24} className="text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 transition-colors duration-300 group-hover:text-blue-200">Wide Vehicle</h3>
                  <p className="text-sm text-blue-100 transition-colors duration-300 group-hover:text-blue-50">50+ vehicle options</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-cyan-400 to-blue-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Clock size={24} className="text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 transition-colors duration-300 group-hover:text-cyan-200">24/7 Support</h3>
                  <p className="text-sm text-blue-100 transition-colors duration-300 group-hover:text-cyan-50">Always available for you</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-blue-400 to-indigo-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <Shield size={24} className="text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 transition-colors duration-300 group-hover:text-indigo-200">Safe Transit</h3>
                  <p className="text-sm text-blue-100 transition-colors duration-300 group-hover:text-indigo-50">Full insurance coverage</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer transform transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-br from-cyan-400 to-teal-600 p-3 rounded-lg flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg group-hover:shadow-xl">
                  <MapPin size={24} className="text-white transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1 transition-colors duration-300 group-hover:text-teal-200">Pan-India</h3>
                  <p className="text-sm text-blue-100 transition-colors duration-300 group-hover:text-teal-50">Service nationwide</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/20 shadow-2xl transform hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-white mb-8">Get Instant Quote</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-white font-semibold mb-3 text-sm">Pickup Location</label>
                <input
                  type="text"
                  placeholder="e.g., Mumbai, Maharashtra"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-sm">Destination</label>
                <input
                  type="text"
                  placeholder="e.g., Bangalore, Karnataka"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-sm">Vehicle Type</label>
                <select
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                >
                  <option className="bg-slate-800" value="">Select a vehicle type</option>
                  <option className="bg-slate-800" value="mini-tempo">Mini Tempo</option>
                  <option className="bg-slate-800" value="standard-tempo">Standard Tempo</option>
                  <option className="bg-slate-800" value="mini-truck">Mini Truck</option>
                  <option className="bg-slate-800" value="cargo-truck">Cargo Truck</option>
                </select>
              </div>

              <div>
                <label className="block text-white font-semibold mb-3 text-sm">When do you need it?</label>
                <input
                  type="datetime-local"
                  className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
              >
                Get Instant Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
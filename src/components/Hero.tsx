import React from 'react';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-black/70" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Reliable Logistics <span className="text-orange-500">Solution</span> for Your Needs
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Find the nearest tempo or truck to transport your heavy luggage anywhere in India with ease and reliability.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                to="/book-now" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
              >
                Book Now
              </Link>
              <Link 
                to="/vehicles" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
              >
                View Vehicles
              </Link>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-md">
                  <Truck size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Wide Fleet</h3>
                  <p className="text-sm text-gray-300">Various vehicle options for any load</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-md">
                  <Clock size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">24/7 Service</h3>
                  <p className="text-sm text-gray-300">Available whenever you need us</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-md">
                  <Shield size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Safe Transit</h3>
                  <p className="text-sm text-gray-300">Your cargo's safety is our priority</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-orange-500/20 p-2 rounded-md">
                  <MapPin size={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="font-semibold">Pan-India Coverage</h3>
                  <p className="text-sm text-gray-300">Service available across India</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 shadow-xl">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Booking</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Pickup Location</label>
                <input 
                  type="text" 
                  placeholder="Enter pickup address"
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Destination</label>
                <input 
                  type="text" 
                  placeholder="Enter destination address"
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Vehicle Type</label>
                <select 
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="">Select a vehicle type</option>
                  <option value="mini-tempo">Mini Tempo</option>
                  <option value="standard-tempo">Standard Tempo</option>
                  <option value="mini-truck">Mini Truck</option>
                  <option value="cargo-truck">Cargo Truck</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white mb-2">When do you need it?</label>
                <input 
                  type="datetime-local" 
                  className="w-full bg-white/20 border border-white/30 rounded-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors text-center"
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
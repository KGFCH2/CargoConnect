import React, { useState } from 'react';
import { Truck, Clock, Shield, MapPin } from 'lucide-react';
import AnimatedLink from './AnimatedLink';
import { useNavigate } from 'react-router-dom';
import { useBooking } from '../context/BookingContext';
import { vehicles as vehicleList } from '../data/vehicles';
import Loader from './Loader';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[70vh] md:min-h-screen flex items-center pt-16 md:pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/95 via-blue-900/90 to-slate-900/85" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 py-12 sm:py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="mb-6">
              <span className="inline-block bg-blue-500/20 text-blue-100 px-4 py-2 rounded-full text-sm font-medium border border-blue-400/30">
                ✨ India's #1 Logistics Solution
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Your Trusted <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Logistics Partner</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Experience seamless cargo transportation across India with our reliable vehicle, competitive pricing, and dedicated customer support. Book instantly, pay securely, deliver confidently.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 sm:mb-14">
              <AnimatedLink
                to="/book-now"
                showUnderline={false}
                className="w-full sm:w-auto inline-flex justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3.5 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 text-center shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Start Booking
              </AnimatedLink>
              <AnimatedLink
                to="/vehicles"
                showUnderline={false}
                className="w-full sm:w-auto inline-flex justify-center bg-white/10 backdrop-blur hover:bg-white/20 border-2 border-white/30 hover:border-white/50 text-white font-semibold py-3.5 px-6 sm:py-4 sm:px-8 rounded-lg transition-all duration-300 text-center"
              >
                Explore Vehicles
              </AnimatedLink>
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
            <GetQuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const GetQuoteForm: React.FC = () => {
  const [pickup, setPickup] = useState('');
  const [dropoff, setDropoff] = useState('');
  const [vehicle, setVehicle] = useState('');
  const [datetime, setDatetime] = useState('');

  const { dispatch } = useBooking();
  const navigate = useNavigate();

  const mapVehicleValueToVehicle = (val: string) => {
    if (!val) return null;
    if (val.includes('mini-tempo')) return vehicleList.find(v => v.name.toLowerCase().includes('mini tempo') || v.id === 'v1') || null;
    if (val.includes('standard-tempo')) return vehicleList.find(v => v.name.toLowerCase().includes('standard tempo') || v.id === 'v2') || null;
    if (val.includes('mini-truck')) return vehicleList.find(v => v.type === 'mini-truck' || v.id === 'v4') || null;
    if (val.includes('cargo-truck')) return vehicleList.find(v => v.type === 'truck' || v.id === 'v3') || null;
    return vehicleList.find(v => v.id === val) || null;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickup || !dropoff) return;

    setIsSubmitting(true);

    dispatch({ type: 'SET_PICKUP', payload: { fullAddress: pickup, state: '', district: '' } });
    dispatch({ type: 'SET_DROPOFF', payload: { fullAddress: dropoff, state: '', district: '' } });

    const selectedVehicle = mapVehicleValueToVehicle(vehicle);
    if (selectedVehicle) dispatch({ type: 'SET_VEHICLE', payload: selectedVehicle });

    if (datetime) {
      const d = new Date(datetime);
      if (!isNaN(d.getTime())) dispatch({ type: 'SET_SCHEDULED_DATE', payload: d });
    }

    // show loader briefly then navigate so user sees transition
    setTimeout(() => {
      navigate('/book-now?step=4');
      setIsSubmitting(false);
    }, 500);
  };

  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-white font-semibold mb-3 text-sm">Pickup Location</label>
        <input value={pickup} onChange={(e) => setPickup(e.target.value)} type="text" placeholder="e.g., Mumbai, Maharashtra" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
      </div>

      <div>
        <label className="block text-white font-semibold mb-3 text-sm">Destination</label>
        <input value={dropoff} onChange={(e) => setDropoff(e.target.value)} type="text" placeholder="e.g., Bangalore, Karnataka" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
      </div>

      <div>
        <label className="block text-white font-semibold mb-3 text-sm">Vehicle Type</label>
        <select value={vehicle} onChange={(e) => setVehicle(e.target.value)} className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all">
          <option className="bg-slate-800" value="">Select a vehicle type</option>
          <option className="bg-slate-800" value="mini-tempo">Mini Tempo</option>
          <option className="bg-slate-800" value="standard-tempo">Standard Tempo</option>
          <option className="bg-slate-800" value="mini-truck">Mini Truck</option>
          <option className="bg-slate-800" value="cargo-truck">Cargo Truck</option>
        </select>
      </div>

      <div>
        <label className="block text-white font-semibold mb-3 text-sm">When do you need it?</label>
        <input value={datetime} onChange={(e) => setDatetime(e.target.value)} type="datetime-local" className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all" />
      </div>

      <button disabled={isSubmitting} type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-center disabled:opacity-60 disabled:cursor-not-allowed">
        {isSubmitting ? <Loader label="Preparing quote..." /> : 'Get Instant Quote'}
      </button>
    </form>
  );
};

export default Hero;
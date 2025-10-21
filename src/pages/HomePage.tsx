import React from 'react';
import Hero from '../components/Hero';
import { Truck, Clock, Shield, Award, CheckCircle } from 'lucide-react';
import { vehicles } from '../data/vehicles';
import VehicleCard from '../components/VehicleCard';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Booking a transport vehicle has never been easier. Our simple process ensures a seamless experience.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enter Location</h3>
              <p className="text-gray-600">
                Provide your pickup and delivery locations using our easy selection tool.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Choose Vehicle</h3>
              <p className="text-gray-600">
                Select the right vehicle based on your cargo size and requirements.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-800 font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Confirm & Pay</h3>
              <p className="text-gray-600">
                Review your booking details, pay securely, and wait for your vehicle to arrive.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Vehicles */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vehicles</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our wide range of well-maintained vehicles to meet your transportation needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link 
              to="/vehicles" 
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              View All Vehicles
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-blue-100 max-w-2xl mx-auto">
              We're committed to providing the best logistics experience with our premium service.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-orange-500 rounded-full mb-4">
                <Shield size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Safe & Secure</h3>
              <p className="text-blue-100">
                Your cargo is handled with utmost care and transported securely.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-orange-500 rounded-full mb-4">
                <Clock size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">On-Time Delivery</h3>
              <p className="text-blue-100">
                We value your time and commit to timely pickups and deliveries.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-orange-500 rounded-full mb-4">
                <Award size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Experienced Drivers</h3>
              <p className="text-blue-100">
                Our professional drivers ensure smooth and hassle-free transportation.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6">
              <div className="p-3 bg-orange-500 rounded-full mb-4">
                <Truck size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Well-Maintained Fleet</h3>
              <p className="text-blue-100">
                Our vehicles undergo regular maintenance to ensure reliability.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I needed to move my furniture from Mumbai to Pune, and CargoConnect made it so easy. The driver was professional, and my items reached safely and on time."
              </p>
              <div className="font-medium text-gray-900">Rajesh Sharma, Mumbai</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The booking process was simple, and I could track my shipment in real-time. The pricing was transparent with no hidden charges. Highly recommended!"
              </p>
              <div className="font-medium text-gray-900">Priya Patel, Bangalore</div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="text-orange-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="inline-block">★</span>
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "We use CargoConnect for our business deliveries regularly. Their consistent service quality and reliability have made them our preferred logistics partner."
              </p>
              <div className="font-medium text-gray-900">Amit Gupta, Delhi</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transport Your Cargo?</h2>
            <p className="text-xl mb-8">
              Book a vehicle now and experience hassle-free logistics services across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/book-now" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-8 rounded-md transition-colors text-center"
              >
                Book Now
              </Link>
              <Link 
                to="/contact" 
                className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-medium py-3 px-8 rounded-md transition-colors text-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
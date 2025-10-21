import React, { useState, useEffect } from 'react';
import { useBooking } from '../context/BookingContext';
import LocationSelector from '../components/LocationSelector';
import VehicleCard from '../components/VehicleCard';
import PaymentMethods from '../components/PaymentMethods';
import { vehicles } from '../data/vehicles';
import { MapPin, TruckIcon, Calendar, IndianRupee, ArrowRight, CheckCircle } from 'lucide-react';

const BookingPage: React.FC = () => {
  const { state, dispatch, calculateFare } = useBooking();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [distance, setDistance] = useState<number>(0);
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');

  useEffect(() => {
    // Simulate distance calculation when both locations are set
    if (state.pickup && state.dropoff) {
      // In a real app, this would call a distance matrix API
      // Simulating random distance for demo
      const randomDistance = Math.floor(Math.random() * 50) + 5; // 5-55 km
      setDistance(randomDistance);
      dispatch({ type: 'SET_DISTANCE', payload: randomDistance });
    }
  }, [state.pickup, state.dropoff, dispatch]);

  useEffect(() => {
    if (state.distance && state.selectedVehicle) {
      calculateFare();
    }
  }, [state.distance, state.selectedVehicle, calculateFare]);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit booking
      completeBooking();
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const completeBooking = () => {
    // In a real app, this would submit the booking to the backend
    // Simulating a booking confirmation
    setBookingComplete(true);
    setBookingId(`BK${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`);
  };

  // Check if current step is complete
  const isCurrentStepComplete = () => {
    switch (currentStep) {
      case 1:
        return state.pickup !== null;
      case 2:
        return state.dropoff !== null;
      case 3:
        return state.selectedVehicle !== null;
      case 4:
        return state.paymentMethod !== null;
      default:
        return false;
    }
  };

  if (bookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h1>
            
            <p className="text-lg text-gray-700 mb-6">
              Your booking has been successfully completed. Your booking ID is:
            </p>
            
            <div className="bg-blue-50 py-3 px-4 rounded-md mb-8">
              <span className="text-xl font-mono font-semibold text-blue-800">{bookingId}</span>
            </div>
            
            <div className="space-y-4 text-left bg-gray-50 p-4 rounded-md mb-8">
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Vehicle:</span>
                <span className="font-medium text-gray-900">{state.selectedVehicle?.name}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Pickup:</span>
                <span className="font-medium text-gray-900">
                  {state.pickup?.fullAddress || 
                    `${state.pickup?.place}, ${state.pickup?.district}, ${state.pickup?.state}`}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Dropoff:</span>
                <span className="font-medium text-gray-900">
                  {state.dropoff?.fullAddress || 
                    `${state.dropoff?.place}, ${state.dropoff?.district}, ${state.dropoff?.state}`}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Distance:</span>
                <span className="font-medium text-gray-900">{state.distance} km</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Total Fare:</span>
                <span className="font-medium text-gray-900">₹{state.fare}</span>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <span className="text-gray-600">Payment Method:</span>
                <span className="font-medium text-gray-900">
                  {state.paymentMethod === 'card' && 'Credit/Debit Card'}
                  {state.paymentMethod === 'upi' && 'UPI'}
                  {state.paymentMethod === 'netbanking' && 'Net Banking'}
                  {state.paymentMethod === 'cash' && 'Cash on Delivery'}
                </span>
              </div>
            </div>
            
            <p className="text-gray-600 mb-8">
              A confirmation has been sent to your registered email and mobile number. Our driver will contact you shortly.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/'}
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Back to Home
              </button>
              <button 
                onClick={() => {
                  // Reset booking and go to new booking
                  dispatch({ type: 'RESET_BOOKING' });
                  setBookingComplete(false);
                  setCurrentStep(1);
                }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Book Another
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Book Your Transportation</h1>
        
        {/* Steps Progress */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center">
                <div 
                  className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-medium
                    ${currentStep > step 
                      ? 'bg-green-500 text-white' 
                      : currentStep === step 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-200 text-gray-500'}
                  `}
                >
                  {currentStep > step ? <CheckCircle size={20} /> : step}
                </div>
                <span 
                  className={`
                    text-sm mt-2 hidden sm:block
                    ${currentStep >= step ? 'text-gray-800' : 'text-gray-500'}
                  `}
                >
                  {step === 1 && 'Pickup'}
                  {step === 2 && 'Destination'}
                  {step === 3 && 'Vehicle'}
                  {step === 4 && 'Payment'}
                </span>
              </div>
            ))}
          </div>
          
          <div className="relative mt-2">
            <div className="absolute top-0 left-5 right-5 h-1 bg-gray-200"></div>
            <div 
              className="absolute top-0 left-5 h-1 bg-blue-600 transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6">
          {/* Step 1: Pickup Location */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPin size={24} className="text-orange-500 mr-2" />
                Pickup Location
              </h2>
              
              <LocationSelector
                label="Where should we pick up your cargo?"
                placeholder="Enter your pickup address"
                onLocationSelect={(location) => dispatch({ type: 'SET_PICKUP', payload: location })}
              />
            </div>
          )}
          
          {/* Step 2: Dropoff Location */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <MapPin size={24} className="text-orange-500 mr-2" />
                Destination
              </h2>
              
              <LocationSelector
                label="Where should we deliver your cargo?"
                placeholder="Enter the destination address"
                onLocationSelect={(location) => dispatch({ type: 'SET_DROPOFF', payload: location })}
              />
              
              {state.pickup && state.dropoff && distance > 0 && (
                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <p className="text-blue-800">
                    <span className="font-medium">Estimated Distance:</span> {distance} km
                  </p>
                </div>
              )}
            </div>
          )}
          
          {/* Step 3: Select Vehicle */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <TruckIcon size={24} className="text-orange-500 mr-2" />
                Select Vehicle Type
              </h2>
              
              <div className="grid sm:grid-cols-2 gap-4">
                {vehicles.map((vehicle) => (
                  <VehicleCard
                    key={vehicle.id}
                    vehicle={vehicle}
                    isSelected={state.selectedVehicle?.id === vehicle.id}
                    onClick={() => dispatch({ type: 'SET_VEHICLE', payload: vehicle })}
                  />
                ))}
              </div>
              
              {state.fare && state.selectedVehicle && (
                <div className="mt-6 p-4 bg-blue-50 rounded-md">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-700">Base Fare:</p>
                      <p className="text-gray-700">Distance ({state.distance} km × ₹{state.selectedVehicle.pricePerKm}):</p>
                      <p className="font-medium text-blue-800 text-lg mt-2">Total Fare:</p>
                    </div>
                    <div className="text-right">
                      <p className="text-gray-700">₹{state.selectedVehicle.basePrice}</p>
                      <p className="text-gray-700">₹{state.distance! * state.selectedVehicle.pricePerKm}</p>
                      <p className="font-medium text-blue-800 text-lg mt-2">₹{state.fare}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Step 4: Payment */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                <IndianRupee size={24} className="text-orange-500 mr-2" />
                Payment Method
              </h2>
              
              <PaymentMethods
                onSelect={(method) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: method })}
              />
              
              {/* Booking Summary */}
              {state.fare && state.selectedVehicle && (
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
                  <div className="bg-gray-50 p-4 rounded-md space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Vehicle:</span>
                      <span className="font-medium">{state.selectedVehicle.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Pickup:</span>
                      <span className="font-medium">
                        {state.pickup?.fullAddress || 
                          `${state.pickup?.place}, ${state.pickup?.district}, ${state.pickup?.state}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dropoff:</span>
                      <span className="font-medium">
                        {state.dropoff?.fullAddress || 
                          `${state.dropoff?.place}, ${state.dropoff?.district}, ${state.dropoff?.state}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Distance:</span>
                      <span className="font-medium">{state.distance} km</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Fare:</span>
                      <span className="font-medium">₹{state.fare}</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-between">
            <button
              onClick={handlePrevStep}
              className={`px-6 py-2 rounded-md ${
                currentStep === 1 
                ? 'invisible' 
                : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
            >
              Back
            </button>
            
            <button
              onClick={handleNextStep}
              disabled={!isCurrentStepComplete()}
              className={`
                px-6 py-2 rounded-md flex items-center
                ${isCurrentStepComplete()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'}
              `}
            >
              {currentStep < 4 ? (
                <>
                  Next <ArrowRight size={16} className="ml-2" />
                </>
              ) : (
                'Confirm Booking'
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
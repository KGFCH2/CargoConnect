import React, { useState, useEffect, useRef } from 'react';
import { useBooking } from '../context/BookingContext';
import { useLocation } from 'react-router-dom';
import LocationSelector from '../components/LocationSelector';
import VehicleCard from '../components/VehicleCard';
import PaymentMethods from '../components/PaymentMethods';
import { vehicles } from '../data/vehicles';
import { MapPin, TruckIcon, IndianRupee, ArrowRight, CheckCircle } from 'lucide-react';
import OverlayLoader from '../components/OverlayLoader';
import { jsPDF } from 'jspdf';
import Loader from '../components/Loader';

const BookingPage: React.FC = () => {
  const { state, dispatch, calculateFare } = useBooking();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const location = useLocation();
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>(0);
  const [bookingComplete, setBookingComplete] = useState<boolean>(false);
  const [bookingId, setBookingId] = useState<string>('');
  const [isProcessingPayment, setIsProcessingPayment] = useState<boolean>(false);
  const [transactionId, setTransactionId] = useState<string>('');
  const [showSuccessAnim, setShowSuccessAnim] = useState<boolean>(false);
  const bookingTopRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // If URL contains ?step=X, set initial step accordingly and show loader briefly
    const params = new URLSearchParams(location.search);
    const stepParam = params.get('step');
    if (stepParam) {
      const s = parseInt(stepParam, 10);
      if (!isNaN(s) && s >= 1 && s <= 4) {
        setIsTransitioning(true);
        setTimeout(() => {
          setCurrentStep(s);
          setIsTransitioning(false);
        }, 400);
      }
    }

    if (state.pickup && state.dropoff) {
      const randomDistance = Math.floor(Math.random() * 50) + 5;
      setDistance(randomDistance);
      dispatch({ type: 'SET_DISTANCE', payload: randomDistance });
    }
  }, [state.pickup, state.dropoff, dispatch, location.search]);

  useEffect(() => {
    if (state.distance && state.selectedVehicle) {
      calculateFare();
    }
  }, [state.distance, state.selectedVehicle, calculateFare]);

  const handleNextStep = () => {
    if (currentStep < 4) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setIsTransitioning(false);
        // ensure the booking box is scrolled to its top when moving steps
        setTimeout(() => bookingTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
      }, 350);
      return;
    }

    // Final step: handle payment
    if (state.paymentMethod === 'cash' || !state.paymentMethod) {
      setIsTransitioning(true);
      setTimeout(() => {
        completeBooking();
        setIsTransitioning(false);
      }, 350);
      return;
    }

    // Simulate online payment processing for card/upi/netbanking
    setIsProcessingPayment(true);
    setShowSuccessAnim(false);
    setTimeout(() => {
      const tx = `TX${Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')}`;
      setTransactionId(tx);
      // show brief success animation then complete booking
      setIsProcessingPayment(false);
      setShowSuccessAnim(true);
      setTimeout(() => {
        setShowSuccessAnim(false);
        completeBooking();
      }, 900);
    }, 1400);
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentStep(currentStep - 1);
        setIsTransitioning(false);
        // scroll up to the top of the booking section when going back a step
        setTimeout(() => bookingTopRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 30);
      }, 300);
    }
  };

  const completeBooking = () => {
    const bid = `BK${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    setBookingId(bid);
    setBookingComplete(true);
    setIsProcessingPayment(false);
    // ensure viewport shows confirmation
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isCurrentStepComplete = () => {
    const isValidLocation = (loc: typeof state.pickup | null) => {
      if (!loc) return false;
      // require state, district and a full address to proceed
      return Boolean(loc.state && loc.district && loc.fullAddress && loc.fullAddress.trim().length > 0);
    };

    switch (currentStep) {
      case 1:
        return isValidLocation(state.pickup);
      case 2:
        return isValidLocation(state.dropoff);
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
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-32 pb-16 transition-colors duration-300">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-2xl dark:shadow-slate-900 p-10 text-center border border-slate-200 dark:border-slate-700">
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg dark:shadow-green-900/30">
              <CheckCircle size={40} className="text-white" />
            </div>

            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">Booking Confirmed!</h1>

            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Your cargo transportation has been successfully booked. Your unique booking ID is:
            </p>

            <div className="bg-gradient-to-r from-blue-100 dark:from-blue-900/30 to-blue-50 dark:to-slate-800 py-4 px-6 rounded-xl mb-10 border-2 border-blue-300 dark:border-blue-600">
              <span className="text-3xl font-mono font-bold text-blue-700 dark:text-blue-400">{bookingId}</span>
            </div>

            <div className="space-y-4 text-left bg-gradient-to-br from-slate-50 dark:from-slate-700 to-slate-100 dark:to-slate-800 p-8 rounded-xl mb-10 border border-slate-200 dark:border-slate-600">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Vehicle</span>
                  <span className="font-bold text-slate-900 dark:text-white">{state.selectedVehicle?.name}</span>
                </div>

                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Distance</span>
                  <span className="font-bold text-slate-900 dark:text-white">{state.distance} km</span>
                </div>

                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Pickup Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {state.pickup?.fullAddress ||
                      `${state.pickup?.place}, ${state.pickup?.district}, ${state.pickup?.state}`}
                  </span>
                </div>

                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Dropoff Location</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {state.dropoff?.fullAddress ||
                      `${state.dropoff?.place}, ${state.dropoff?.district}, ${state.dropoff?.state}`}
                  </span>
                </div>

                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Total Fare</span>
                  <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">₹{state.fare}</span>
                </div>

                <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                  <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Payment Method</span>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    {state.paymentMethod === 'card' && 'Credit/Debit Card'}
                    {state.paymentMethod === 'upi' && 'UPI'}
                    {state.paymentMethod === 'netbanking' && 'Net Banking'}
                    {state.paymentMethod === 'cash' && 'Cash on Delivery'}
                  </span>
                </div>
                {transactionId && (
                  <div className="hover:bg-white dark:hover:bg-slate-700 p-3 rounded-lg transition-colors duration-300">
                    <span className="text-slate-600 dark:text-slate-400 font-semibold block mb-1">Transaction ID</span>
                    <span className="font-mono text-slate-900 dark:text-white">{transactionId}</span>
                  </div>
                )}
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              A confirmation with complete details has been sent to your registered email and mobile number. Our professional driver will contact you shortly with pickup details.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.location.href = '/'}
                className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 relative group"
                title="Return to the homepage"
              >
                Back to Home
              </button>
              {(transactionId || state.paymentMethod === 'cash') && (
                <button
                  onClick={() => {
                    // Generate a PDF receipt using jsPDF
                    const generatePdfReceipt = () => {
                      try {
                        const doc = new jsPDF({ unit: 'pt', format: 'a4' as any });
                        const margin = 40;
                        let y = margin;

                        // Header
                        doc.setFillColor(11, 103, 194); // Blue header
                        doc.rect(0, 0, 595.28, 80, 'F');

                        doc.setFontSize(24);
                        doc.setTextColor(255, 255, 255);
                        doc.text('CargoConnect', margin, 50);

                        doc.setFontSize(12);
                        doc.text('Official Payment Receipt', 400, 50);

                        y = 120;
                        doc.setTextColor(0, 0, 0);

                        // Booking Info
                        doc.setFontSize(12);
                        doc.text(`Date: ${new Date().toLocaleDateString()}`, margin, y);
                        y += 20;
                        doc.text(`Booking ID: ${bookingId}`, margin, y);
                        y += 20;
                        doc.text(`Transaction ID: ${transactionId || 'N/A'}`, margin, y);

                        y += 40;

                        // Table Header
                        doc.setFillColor(240, 240, 240);
                        doc.rect(margin, y - 15, 515, 25, 'F');
                        doc.setFontSize(11);
                        doc.setFont('helvetica', 'bold');
                        doc.text('Description', margin + 10, y);
                        doc.text('Details', 300, y);

                        y += 30;
                        doc.setFont('helvetica', 'normal');

                        // Rows
                        const addRow = (label: string, value: string) => {
                          doc.text(label, margin + 10, y);

                          // Handle long text wrapping for addresses
                          const splitValue = doc.splitTextToSize(value, 250);
                          doc.text(splitValue, 300, y);

                          y += (splitValue.length * 15) + 10;

                          // Line separator
                          doc.setDrawColor(200, 200, 200);
                          doc.line(margin, y - 10, 555, y - 10);
                        };

                        addRow('Vehicle Type', state.selectedVehicle?.name || '-');
                        addRow('Pickup Location', state.pickup?.fullAddress || state.pickup?.place || '-');
                        addRow('Dropoff Location', state.dropoff?.fullAddress || state.dropoff?.place || '-');
                        addRow('Total Distance', `${state.distance} km`);
                        addRow('Payment Method', state.paymentMethod === 'cash' ? 'Cash on Delivery' : (state.paymentMethod?.toUpperCase() || '-'));

                        y += 20;

                        // Total Amount
                        doc.setFillColor(240, 247, 255);
                        doc.rect(margin, y - 15, 515, 40, 'F');
                        doc.setFontSize(14);
                        doc.setFont('helvetica', 'bold');
                        doc.setTextColor(11, 103, 194);
                        doc.text('Total Amount Paid', margin + 10, y + 10);
                        doc.text(`₹${state.fare}`, 480, y + 10);

                        // Footer
                        y += 80;
                        doc.setFontSize(10);
                        doc.setTextColor(100, 100, 100);
                        doc.setFont('helvetica', 'normal');
                        doc.text('This is a computer generated receipt and does not require a signature.', margin, y);
                        y += 15;
                        doc.text('Thank you for choosing CargoConnect for your logistics needs.', margin, y);
                        y += 15;
                        doc.text('For support, contact: support@cargoconnect.in', margin, y);

                        // Save as PDF
                        doc.save(`CargoConnect_Receipt_${bookingId || 'receipt'}.pdf`);
                      } catch (err) {
                        console.error('PDF generation failed', err);
                        alert('Unable to generate PDF receipt in this browser.');
                      }
                    };
                    generatePdfReceipt();
                  }}
                  className="bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-blue-700 dark:text-blue-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-blue-200 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-400 transform hover:scale-105 relative group"
                  title="Download receipt as PDF"
                >
                  Download Receipt (PDF)
                </button>
              )}
              <button
                onClick={() => {
                  dispatch({ type: 'RESET_BOOKING' });
                  setBookingComplete(false);
                  setCurrentStep(1);
                }}
                className="bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 text-blue-700 dark:text-blue-400 font-bold py-4 px-8 rounded-lg transition-all duration-300 border-2 border-blue-200 dark:border-blue-600 hover:border-blue-400 dark:hover:border-blue-400 transform hover:scale-105 relative group"
                title="Start a new booking process"
              >
                Book Another Shipment
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 pt-28 pb-16 transition-colors duration-300">
      {isTransitioning && <OverlayLoader size={36} label="Loading..." backdropClassName="bg-black/40" />}
      {isProcessingPayment && (
        <OverlayLoader size={48} label="Processing payment..." backdropClassName="bg-black/50" />
      )}
      {showSuccessAnim && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="flex flex-col items-center gap-4">
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center shadow-2xl animate-pulse">
              <CheckCircle size={56} className="text-white" />
            </div>
            <div className="text-white font-semibold text-lg">Payment Confirmed</div>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-4">Complete Your Booking</h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">Four simple steps to book your transportation</p>
        </div>

        {/* Steps Progress */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="flex items-center justify-between mb-8">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex flex-col items-center flex-1">
                <div
                  className={`
                    w-12 sm:w-14 h-12 sm:h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 transform
                    ${currentStep > step
                      ? 'bg-gradient-to-br from-green-400 to-green-600 dark:from-green-500 dark:to-green-600 text-white shadow-lg hover:scale-110'
                      : currentStep === step
                        ? 'bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white shadow-lg ring-2 ring-blue-300 dark:ring-blue-600 hover:scale-110'
                        : 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-400 hover:bg-slate-300 dark:hover:bg-slate-600'}
                  `}
                >
                  {currentStep > step ? '✓' : step}
                </div>
                <span
                  className={`
                    text-sm font-semibold mt-2 sm:mt-3 block sm:block text-center transition-colors duration-300
                    ${currentStep >= step ? 'text-slate-900 dark:text-white' : 'text-slate-500 dark:text-slate-500'}
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

          <div className="relative h-1 bg-slate-300 dark:bg-slate-700 rounded-full">
            <div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        <div ref={bookingTopRef} className="max-w-3xl mx-auto bg-white dark:bg-slate-800 rounded-2xl shadow-xl dark:shadow-slate-900 p-6 sm:p-8 border border-slate-200 dark:border-slate-700 transition-colors duration-300">
          <div className={`transition-all duration-500 ease-out transform will-change-transform ${isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'}`}>
            {/* Step 1: Pickup Location */}
            {currentStep === 1 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative pb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Where should we pick up?</span>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded animate-underline"></div>
                </h2>

                <LocationSelector
                  label="Select your pickup location"
                  placeholder="Enter your pickup address"
                  onLocationSelect={(location) => dispatch({ type: 'SET_PICKUP', payload: location })}
                />
              </div>
            )}

            {/* Step 2: Dropoff Location */}
            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative pb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <MapPin size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Where should we deliver?</span>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded animate-underline"></div>
                </h2>

                <LocationSelector
                  label="Select your destination location"
                  placeholder="Enter the destination address"
                  onLocationSelect={(location) => dispatch({ type: 'SET_DROPOFF', payload: location })}
                />

                {state.pickup && state.dropoff && distance > 0 && (
                  <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-cyan-50 dark:to-slate-800 rounded-xl border border-blue-200 dark:border-blue-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300">
                    <p className="text-slate-800 dark:text-slate-200">
                      <span className="font-bold text-blue-700 dark:text-blue-400">📍 Estimated Distance:</span> <span className="text-xl font-bold text-blue-700 dark:text-blue-400">{distance} km</span>
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Select Vehicle */}
            {currentStep === 3 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative pb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <TruckIcon size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span>Choose your vehicle</span>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded animate-underline"></div>
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-8">
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
                  <div className="p-6 bg-gradient-to-r from-blue-50 dark:from-blue-900/20 to-cyan-50 dark:to-slate-800 rounded-xl border border-blue-200 dark:border-blue-600 hover:shadow-lg dark:hover:shadow-blue-900/20 transition-all duration-300">
                    <h3 className="font-bold text-slate-900 dark:text-white mb-4 text-lg">Fare Breakdown</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-2 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300">Base Fare:</span>
                        <span className="font-bold text-slate-900 dark:text-white">₹{state.selectedVehicle.basePrice}</span>
                      </div>
                      <div className="flex justify-between items-center p-2 hover:bg-white dark:hover:bg-slate-700 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300">Distance ({state.distance} km × ₹{state.selectedVehicle.pricePerKm}/km):</span>
                        <span className="font-bold text-slate-900 dark:text-white">₹{state.distance! * state.selectedVehicle.pricePerKm}</span>
                      </div>
                      <div className="border-t-2 border-blue-300 dark:border-blue-600 pt-3">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-slate-900 dark:text-white">Total Fare:</span>
                          <span className="text-2xl font-bold text-blue-700 dark:text-blue-400">₹{state.fare}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 4: Payment */}
            {currentStep === 4 && (
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8 flex items-center relative pb-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mr-4">
                    <IndianRupee size={24} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-black dark:text-white">Select payment method</span>
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-300 rounded animate-underline"></div>
                </h2>

                <PaymentMethods
                  selectedMethod={state.paymentMethod}
                  onSelect={(method) => dispatch({ type: 'SET_PAYMENT_METHOD', payload: method })}
                />

                {/* Booking Summary */}
                {state.fare && state.selectedVehicle && (
                  <div className="mt-10 p-6 bg-slate-50 dark:bg-slate-700 rounded-xl border-2 border-slate-200 dark:border-slate-600 hover:border-slate-300 dark:hover:border-slate-500 transition-all duration-300">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">📋 Booking Summary</h3>
                    <div className="space-y-4">
                      <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-600 px-2 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Vehicle:</span>
                        <span className="font-bold text-slate-900 dark:text-white">{state.selectedVehicle.name}</span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-600 px-2 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Pickup:</span>
                        <span className="font-bold text-slate-900 dark:text-white text-right max-w-xs">
                          {state.pickup?.fullAddress ||
                            `${state.pickup?.place}, ${state.pickup?.district}`}
                        </span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-600 px-2 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Dropoff:</span>
                        <span className="font-bold text-slate-900 dark:text-white text-right max-w-xs">
                          {state.dropoff?.fullAddress ||
                            `${state.dropoff?.place}, ${state.dropoff?.district}`}
                        </span>
                      </div>
                      <div className="flex justify-between pb-3 border-b border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-600 px-2 rounded transition-colors duration-300">
                        <span className="text-slate-700 dark:text-slate-300 font-medium">Distance:</span>
                        <span className="font-bold text-slate-900 dark:text-white">{state.distance} km</span>
                      </div>
                      <div className="flex justify-between pt-4 px-2">
                        <span className="text-slate-900 dark:text-white font-bold text-lg">Total Fare:</span>
                        <span className="font-bold text-3xl text-blue-700 dark:text-blue-400">₹{state.fare}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Navigation Buttons */}
          <div className="mt-10 flex flex-col-reverse sm:flex-row justify-between gap-4">
            <button
              onClick={handlePrevStep}
              className={`w-full sm:w-auto px-8 py-3 font-bold rounded-lg transition-all duration-500 ease-in-out transform relative group ${currentStep === 1
                ? 'invisible'
                : 'bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-600 hover:scale-105 hover:-translate-y-1'
                }`}
              title="Go back to previous step"
            >
              ← Back
            </button>

            <button
              onClick={handleNextStep}
              disabled={!isCurrentStepComplete()}
              className={`
                w-full sm:w-auto px-8 py-3 font-bold rounded-lg flex items-center gap-2 transition-all duration-500 ease-in-out transform relative group
                ${isCurrentStepComplete()
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-700 dark:hover:to-blue-800 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1'
                  : 'bg-slate-300 dark:bg-slate-600 text-slate-500 dark:text-slate-400 cursor-not-allowed'}
              `}
              title={currentStep < 4 ? 'Continue to next step' : 'Complete your booking'}
            >
              {currentStep < 4 ? (
                <>
                  Next <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              ) : (
                <>
                  ✓ Confirm Booking
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

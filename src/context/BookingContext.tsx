import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { Location, Vehicle, Booking } from '../types';

interface BookingState {
  pickup: Location | null;
  dropoff: Location | null;
  selectedVehicle: Vehicle | null;
  distance: number | null;
  fare: number | null;
  scheduledDate: Date | null;
  paymentMethod: string | null;
}

type BookingAction =
  | { type: 'SET_PICKUP'; payload: Location }
  | { type: 'SET_DROPOFF'; payload: Location }
  | { type: 'SET_VEHICLE'; payload: Vehicle }
  | { type: 'SET_DISTANCE'; payload: number }
  | { type: 'CALCULATE_FARE' }
  | { type: 'SET_SCHEDULED_DATE'; payload: Date }
  | { type: 'SET_PAYMENT_METHOD'; payload: string }
  | { type: 'RESET_BOOKING' };

interface BookingContextType {
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
  calculateFare: () => void;
}

const initialState: BookingState = {
  pickup: null,
  dropoff: null,
  selectedVehicle: null,
  distance: null,
  fare: null,
  scheduledDate: null,
  paymentMethod: null
};

const BookingContext = createContext<BookingContextType | undefined>(undefined);

const bookingReducer = (state: BookingState, action: BookingAction): BookingState => {
  switch (action.type) {
    case 'SET_PICKUP':
      return { ...state, pickup: action.payload };
    case 'SET_DROPOFF':
      return { ...state, dropoff: action.payload };
    case 'SET_VEHICLE':
      return { ...state, selectedVehicle: action.payload };
    case 'SET_DISTANCE':
      return { ...state, distance: action.payload };
    case 'CALCULATE_FARE':
      if (state.selectedVehicle && state.distance) {
        const fare = state.selectedVehicle.basePrice + (state.selectedVehicle.pricePerKm * state.distance);
        return { ...state, fare };
      }
      return state;
    case 'SET_SCHEDULED_DATE':
      return { ...state, scheduledDate: action.payload };
    case 'SET_PAYMENT_METHOD':
      return { ...state, paymentMethod: action.payload };
    case 'RESET_BOOKING':
      return initialState;
    default:
      return state;
  }
};

export const BookingProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  const calculateFare = () => {
    dispatch({ type: 'CALCULATE_FARE' });
  };

  return (
    <BookingContext.Provider value={{ state, dispatch, calculateFare }}>
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = (): BookingContextType => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
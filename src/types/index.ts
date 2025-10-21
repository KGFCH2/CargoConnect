export interface Location {
  state: string;
  district: string;
  place?: string;
  fullAddress?: string;
}

export interface Vehicle {
  id: string;
  name: string;
  type: 'tempo' | 'truck' | 'mini-truck';
  capacity: string;
  description: string;
  pricePerKm: number;
  basePrice: number;
  image: string;
}

export interface Booking {
  id: string;
  userId: string;
  vehicleId: string;
  pickup: Location;
  dropoff: Location;
  distance: number;
  fare: number;
  status: 'pending' | 'confirmed' | 'in-progress' | 'completed' | 'cancelled';
  driverId?: string;
  driverName?: string;
  driverContact?: string;
  paymentMethod?: string;
  paymentStatus?: 'pending' | 'completed';
  createdAt: Date;
  scheduledFor?: Date;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  savedLocations?: Location[];
  bookingHistory?: string[]; // Booking IDs
}

export interface IndianState {
  name: string;
  districts: string[];
}
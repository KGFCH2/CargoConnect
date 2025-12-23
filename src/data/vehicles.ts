import { Vehicle } from '../types';
import miniTempoImg from './Mini_Tempo.png';
import standardTempoImg from './Standard_Tempo.png';
import miniTruckImg from './Mini_Truck.png';
import cargoTruckImg from './Cargo_Truck.png';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Mini Tempo',
    type: 'tempo',
    capacity: '250-350 kg',
    description: 'Perfect for small apartment moves or delivering a few large items',
    pricePerKm: 8,
    basePrice: 200,
    image: miniTempoImg
  },
  {
    id: 'v2',
    name: 'Standard Tempo',
    type: 'tempo',
    capacity: '750-1000 kg',
    description: 'Ideal for medium-sized moves or bulk deliveries',
    pricePerKm: 10,
    basePrice: 300,
    image: standardTempoImg
  },
  {
    id: 'v4',
    name: 'Mini Truck',
    type: 'mini-truck',
    capacity: '1500-2000 kg',
    description: 'Versatile option for medium loads with good maneuverability',
    pricePerKm: 12,
    basePrice: 500,
    image: miniTruckImg
  },
  {
    id: 'v3',
    name: 'Cargo Truck',
    type: 'truck',
    capacity: '4000-5000 kg',
    description: 'Suitable for full home moves or commercial deliveries',
    pricePerKm: 15,
    basePrice: 800,
    image: cargoTruckImg
  }
];
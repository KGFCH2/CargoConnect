import { Vehicle } from '../types';

export const vehicles: Vehicle[] = [
  {
    id: 'v1',
    name: 'Mini Tempo',
    type: 'tempo',
    capacity: 'Up to 500 kg',
    description: 'Perfect for small apartment moves or delivering a few large items',
    pricePerKm: 12,
    basePrice: 300,
    image: 'https://images.pexels.com/photos/15646669/pexels-photo-15646669/free-photo-of-old-truck-driving-city-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    id: 'v2',
    name: 'Standard Tempo',
    type: 'tempo',
    capacity: 'Up to 1000 kg',
    description: 'Ideal for medium-sized moves or bulk deliveries',
    pricePerKm: 18,
    basePrice: 500,
    image: 'https://content.jdmagicbox.com/quickquotes/images_main/force-trump-40-tempo-standard-801309013-avmuwtmu.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit'
  },
  {
    id: 'v3',
    name: 'Cargo Truck',
    type: 'truck',
    capacity: 'Up to 2500 kg',
    description: 'Suitable for full home moves or commercial deliveries',
    pricePerKm: 25,
    basePrice: 800,
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: 'v4',
    name: 'Mini Truck',
    type: 'mini-truck',
    capacity: 'Up to 1500 kg',
    description: 'Versatile option for medium loads with good maneuverability',
    pricePerKm: 20,
    basePrice: 600,
    image: 'https://truckcdn.cardekho.com/in/tata/ace-gold/tata-ace-gold-21473.jpg?impolicy=resize&imwidth=420'
  }
];
import React from 'react';
import { Vehicle } from '../types';
import { Truck, Package, IndianRupee } from 'lucide-react';

interface VehicleCardProps {
  vehicle: Vehicle;
  isSelected?: boolean;
  onClick?: () => void;
}

const VehicleCard: React.FC<VehicleCardProps> = ({ 
  vehicle, 
  isSelected = false,
  onClick 
}) => {
  return (
    <div 
      className={`
        border rounded-lg overflow-hidden transition-all duration-300 cursor-pointer
        ${isSelected 
          ? 'border-orange-500 shadow-lg shadow-orange-100' 
          : 'border-gray-200 hover:border-orange-300 hover:shadow-md'
        }
      `}
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative">
        <img 
          src={vehicle.image} 
          alt={vehicle.name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        {isSelected && (
          <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg font-medium">
            Selected
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{vehicle.name}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-700">
            <Package size={18} className="mr-2 text-orange-500" />
            <span>{vehicle.capacity}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <Truck size={18} className="mr-2 text-orange-500" />
            <span>{vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</span>
          </div>
          
          <div className="flex items-center text-gray-700">
            <IndianRupee size={18} className="mr-2 text-orange-500" />
            <span>₹{vehicle.basePrice} base + ₹{vehicle.pricePerKm}/km</span>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">{vehicle.description}</p>
        
        <button 
          className={`
            w-full py-2 rounded-md transition-colors
            ${isSelected 
              ? 'bg-orange-500 text-white' 
              : 'bg-gray-100 text-gray-800 hover:bg-orange-500 hover:text-white'
            }
          `}
        >
          {isSelected ? 'Selected' : 'Select Vehicle'}
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
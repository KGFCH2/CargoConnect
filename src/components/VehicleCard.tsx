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
        rounded-xl overflow-hidden transition-all duration-300 cursor-pointer group
        ${isSelected
          ? 'border-2 border-blue-600 dark:border-blue-500 shadow-2xl shadow-blue-200 dark:shadow-blue-900/30 transform scale-105'
          : 'border-2 border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-600 hover:shadow-xl dark:hover:shadow-blue-900/20'
        }
        bg-white dark:bg-slate-800 transition-colors duration-300
      `}
      onClick={onClick}
    >
      <div className="h-48 overflow-hidden relative bg-slate-100 dark:bg-slate-700">
        <img
          src={vehicle.image}
          alt={vehicle.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isSelected && (
          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white px-4 py-2 rounded-bl-xl font-bold shadow-lg">
            ✓ Selected
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">{vehicle.name}</h3>

        <div className="space-y-3 mb-6">
          <div className="flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <Package size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">{vehicle.capacity}</span>
          </div>

          <div className="flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <Truck size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">{vehicle.type.charAt(0).toUpperCase() + vehicle.type.slice(1)}</span>
          </div>

          <div className="flex items-center text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            <IndianRupee size={18} className="mr-3 text-blue-600 dark:text-blue-400" />
            <span className="font-medium">₹{vehicle.basePrice} + ₹{vehicle.pricePerKm}/km</span>
          </div>
        </div>

        <p className="text-sm text-slate-600 dark:text-slate-400 group-hover:text-slate-700 dark:group-hover:text-slate-300 mb-6 leading-relaxed transition-colors duration-300">{vehicle.description}</p>

        <button
          type="button"
          onClick={onClick}
          className={`
            w-full py-3 rounded-lg transition-all duration-500 ease-in-out font-bold transform hover:scale-105 hover:-translate-y-1 relative group
            ${isSelected
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-600 dark:to-blue-700 text-white shadow-lg dark:shadow-blue-900/30'
              : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-700 hover:text-white hover:shadow-lg dark:hover:shadow-blue-900/30'
            }
          `}
          title={isSelected ? 'Vehicle already selected' : 'Select this vehicle for your shipment'}
        >
          {isSelected ? '✓ Selected' : 'Select'}
        </button>
      </div>
    </div>
  );
};

export default VehicleCard;
import React, { useState, useEffect } from 'react';
import { MapPin, Search } from 'lucide-react';
import { indianStates } from '../data/indianStates';
import { Location } from '../types';

interface LocationSelectorProps {
  label: string;
  placeholder: string;
  onLocationSelect: (location: Location) => void;
}

const LocationSelector: React.FC<LocationSelectorProps> = ({
  label,
  placeholder,
  onLocationSelect
}) => {
  const [selectedState, setSelectedState] = useState<string>('');
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [fullAddress, setFullAddress] = useState<string>('');
  const [useFullAddress, setUseFullAddress] = useState<boolean>(false);

  const districts = selectedState
    ? indianStates.find(state => state.name === selectedState)?.districts || []
    : [];

  useEffect(() => {
    if (selectedState && selectedDistrict && (place || useFullAddress)) {
      const location: Location = {
        state: selectedState,
        district: selectedDistrict,
        place: useFullAddress ? undefined : place,
        fullAddress: useFullAddress ? fullAddress : undefined
      };
      onLocationSelect(location);
    }
  }, [selectedState, selectedDistrict, place, fullAddress, useFullAddress, onLocationSelect]);

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-gray-700 dark:text-gray-300 font-medium mb-2">{label}</label>

        <div className="flex items-center mb-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-l-md border transition-all duration-300 hover:scale-105 hover:shadow-md ${!useFullAddress ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400' : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'}`}
            onClick={() => setUseFullAddress(false)}
          >
            State & District
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-r-md border transition-all duration-300 hover:scale-105 hover:shadow-md ${useFullAddress ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-500 dark:border-blue-400 text-blue-700 dark:text-blue-400' : 'bg-white dark:bg-slate-700 border-gray-300 dark:border-slate-600 text-gray-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'}`}
            onClick={() => setUseFullAddress(true)}
          >
            Full Address
          </button>
        </div>

        {useFullAddress ? (
          <div className="relative">
            <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-500" />
            <input
              type="text"
              placeholder={placeholder}
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
          </div>
        ) : (
          <div className="space-y-3">
            <select
              value={selectedState}
              onChange={(e) => {
                setSelectedState(e.target.value);
                setSelectedDistrict('');
              }}
              className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            >
              <option value="">Select State</option>
              {indianStates.map((state) => (
                <option key={state.name} value={state.name}>
                  {state.name}
                </option>
              ))}
            </select>

            <select
              value={selectedDistrict}
              onChange={(e) => setSelectedDistrict(e.target.value)}
              disabled={!selectedState}
              className="w-full p-3 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 dark:disabled:text-slate-500"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-slate-500" />
              <input
                type="text"
                placeholder="Area/Locality/Street"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                disabled={!selectedDistrict}
                className="pl-10 w-full p-3 border border-gray-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-500 dark:disabled:text-slate-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
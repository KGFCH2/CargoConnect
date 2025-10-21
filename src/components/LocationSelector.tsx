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
        <label className="block text-gray-700 font-medium mb-2">{label}</label>
        
        <div className="flex items-center mb-2">
          <button
            type="button"
            className={`px-4 py-2 rounded-l-md border ${!useFullAddress ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700'}`}
            onClick={() => setUseFullAddress(false)}
          >
            State & District
          </button>
          <button
            type="button"
            className={`px-4 py-2 rounded-r-md border ${useFullAddress ? 'bg-blue-50 border-blue-500 text-blue-700' : 'bg-white border-gray-300 text-gray-700'}`}
            onClick={() => setUseFullAddress(true)}
          >
            Full Address
          </button>
        </div>
        
        {useFullAddress ? (
          <div className="relative">
            <MapPin size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder={placeholder}
              value={fullAddress}
              onChange={(e) => setFullAddress(e.target.value)}
              className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
            >
              <option value="">Select District</option>
              {districts.map((district) => (
                <option key={district} value={district}>
                  {district}
                </option>
              ))}
            </select>

            <div className="relative">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Area/Locality/Street"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                disabled={!selectedDistrict}
                className="pl-10 w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:text-gray-500"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationSelector;
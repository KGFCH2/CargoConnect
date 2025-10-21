import React, { useState } from 'react';
import { CreditCard, Landmark, Wallet, Check } from 'lucide-react';

interface PaymentMethodsProps {
  onSelect: (method: string) => void;
}

const PaymentMethods: React.FC<PaymentMethodsProps> = ({ onSelect }) => {
  const [selectedMethod, setSelectedMethod] = useState<string>('');

  const handleSelect = (method: string) => {
    setSelectedMethod(method);
    onSelect(method);
  };

  const PaymentOption = ({ 
    id, 
    name, 
    icon: Icon, 
    description 
  }: { 
    id: string; 
    name: string; 
    icon: React.ElementType; 
    description: string;
  }) => (
    <div
      className={`
        border rounded-lg p-4 cursor-pointer transition-all
        ${selectedMethod === id 
          ? 'border-orange-500 bg-orange-50' 
          : 'border-gray-200 hover:border-orange-300'
        }
      `}
      onClick={() => handleSelect(id)}
    >
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-full
          ${selectedMethod === id 
            ? 'bg-orange-500 text-white' 
            : 'bg-gray-100 text-gray-600'
          }
        `}>
          <Icon size={20} />
        </div>
        <div className="flex-grow">
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
        {selectedMethod === id && (
          <div className="text-orange-500">
            <Check size={20} />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Select Payment Method</h2>
      
      <PaymentOption
        id="card"
        name="Credit/Debit Card"
        icon={CreditCard}
        description="Pay securely with your card"
      />
      
      <PaymentOption
        id="upi"
        name="UPI"
        icon={Wallet}
        description="Pay using UPI apps like GPay, PhonePe, Paytm"
      />
      
      <PaymentOption
        id="netbanking"
        name="Net Banking"
        icon={Landmark}
        description="Pay directly from your bank account"
      />
      
      <PaymentOption
        id="cash"
        name="Cash on Delivery"
        icon={Wallet}
        description="Pay cash to the driver upon delivery"
      />
    </div>
  );
};

export default PaymentMethods;
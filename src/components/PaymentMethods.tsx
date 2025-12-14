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
        border rounded-lg p-4 cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 hover:-translate-y-2 hover:shadow-xl group
        ${selectedMethod === id
          ? 'border-orange-500 bg-orange-50 dark:bg-orange-900/20 shadow-lg'
          : 'border-gray-200 dark:border-slate-600 hover:border-orange-300 dark:hover:border-orange-500 bg-white dark:bg-slate-700 hover:bg-orange-50 dark:hover:bg-slate-600'
        }
      `}
      onClick={() => handleSelect(id)}
    >
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-full transition-all duration-300 group-hover:scale-110
          ${selectedMethod === id
            ? 'bg-orange-500 text-white'
            : 'bg-gray-100 dark:bg-slate-600 text-gray-600 dark:text-slate-300 group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 group-hover:text-orange-600 dark:group-hover:text-orange-400'
          }
        `}>
          <Icon size={20} />
        </div>
        <div className="flex-grow">
          <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">{name}</h3>
          <p className="text-sm text-gray-600 dark:text-slate-400 group-hover:text-gray-700 dark:group-hover:text-slate-300 transition-colors duration-300">{description}</p>
        </div>
        {selectedMethod === id && (
          <div className="text-orange-500 group-hover:scale-110 transition-transform duration-300">
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
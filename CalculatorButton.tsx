import React from 'react';

interface CalculatorButtonProps {
  label: string | React.ReactNode;
  onClick: () => void;
  variant?: 'grade' | 'default';
  className?: string;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({ 
  label, 
  onClick, 
  variant = 'default',
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'grade':
        return 'bg-emerald-50 text-emerald-700 border border-emerald-200 hover:bg-emerald-100 active:bg-emerald-200 font-bold';
      default:
        return 'bg-white text-slate-800 hover:bg-slate-50 active:bg-slate-100 shadow-sm border border-slate-200';
    }
  };

  return (
    <button
      onClick={onClick}
      className={`h-14 flex items-center justify-center rounded-2xl transition-all duration-150 text-lg font-bold ${getVariantStyles()} ${className}`}
    >
      {label}
    </button>
  );
};

export default CalculatorButton;
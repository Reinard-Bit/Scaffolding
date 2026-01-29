import React from 'react';
import { ArrowRight } from 'lucide-react';

const Button = ({ 
  variant = 'primary', 
  children, 
  icon = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-8 py-3 font-medium text-sm tracking-widest uppercase transition-all duration-300 ease-out flex items-center justify-center gap-2 group relative overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 border border-transparent shadow-[0_0_15px_rgba(255,255,255,0.1)]",
    outline: "bg-transparent border border-white/30 text-white hover:border-white hover:bg-white/5",
    minimal: "bg-transparent text-white hover:text-gray-300 px-0 py-2 border-b border-transparent hover:border-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
      </span>
    </button>
  );
};

export default Button;
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  to: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export default function CTAButton({ to, children, variant = 'primary', className = '' }: CTAButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300";
  const variantStyles = {
    primary: "bg-yellow-500 text-blue-900 hover:bg-yellow-400",
    secondary: "bg-blue-600 text-white hover:bg-blue-700"
  };

  return (
    <Link
      to={to}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
    >
      {children}
      <ArrowRight size={18} />
    </Link>
  );
}
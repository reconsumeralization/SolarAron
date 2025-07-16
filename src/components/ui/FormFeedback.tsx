import React from 'react';
import { CheckCircle, XCircle, Loader2 } from 'lucide-react';

interface FormFeedbackProps {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  successMessage?: string;
  className?: string;
}

export function FormFeedback({ 
  isSubmitting, 
  isSuccess, 
  error, 
  successMessage = "Thank you! Your message has been sent successfully.",
  className = "" 
}: FormFeedbackProps) {
  if (isSubmitting) {
    return (
      <div className={`flex items-center gap-2 text-blue-600 ${className}`}>
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>Sending message...</span>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className={`flex items-center gap-2 text-green-600 bg-green-50 border border-green-200 rounded-lg p-3 ${className}`}>
        <CheckCircle className="w-5 h-5" />
        <span>{successMessage}</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 ${className}`}>
        <XCircle className="w-5 h-5" />
        <span>{error}</span>
      </div>
    );
  }

  return null;
}
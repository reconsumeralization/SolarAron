import { useState } from 'react';

interface FormSubmissionOptions {
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

interface FormSubmissionState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  submitForm: (formData: any, formType?: string) => Promise<void>;
  resetForm: () => void;
}

export function useFormSubmission(options: FormSubmissionOptions = {}): FormSubmissionState {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (formData: any, formType: string = 'contact') => {
    setIsSubmitting(true);
    setError(null);
    setIsSuccess(false);

    try {
      // Submit to our Netlify function
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, formType }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
      }

      setIsSuccess(true);
      options.onSuccess?.();
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      options.onError?.(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitting(false);
    setIsSuccess(false);
    setError(null);
  };

  return {
    isSubmitting,
    isSuccess,
    error,
    submitForm,
    resetForm,
  };
}
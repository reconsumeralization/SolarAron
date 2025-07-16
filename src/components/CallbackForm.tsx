import React, { useState } from 'react';
import { Phone } from 'lucide-react';
import { useFormSubmission } from '../hooks/useFormSubmission';
import { FormFeedback } from './ui/FormFeedback';

interface CallbackFormProps {
  onSubmit?: (data: { name: string; phone: string; email: string; preferredTime: string }) => void;
  onCancel: () => void;
}

export function CallbackForm({ onSubmit, onCancel }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    preferredTime: 'morning'
  });

  const [validationErrors, setValidationErrors] = useState<Partial<typeof formData>>({});

  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useFormSubmission({
    onSuccess: () => {
      // Call the parent callback if provided
      onSubmit?.(formData);
      // Reset form data
      setFormData({
        name: '',
        phone: '',
        email: '',
        preferredTime: 'morning'
      });
      setValidationErrors({});
    },
    onError: (error) => {
      console.error('Callback form submission error:', error);
    }
  });

  const validateForm = (): boolean => {
    const errors: Partial<typeof formData> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    await submitForm(formData, 'callback');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation error for this field
    if (validationErrors[name as keyof typeof formData]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleReset = () => {
    resetForm();
    setValidationErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            validationErrors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          }`}
        />
        {validationErrors.name && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            validationErrors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          }`}
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handleChange}
          className={`w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500 ${
            validationErrors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500' : ''
          }`}
        />
        {validationErrors.phone && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Time
        </label>
        <select
          name="preferredTime"
          value={formData.preferredTime}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (4PM - 7PM)</option>
        </select>
      </div>

      <FormFeedback
        isSubmitting={isSubmitting}
        isSuccess={isSuccess}
        error={error}
        successMessage="Thank you! We'll call you back at your preferred time."
      />

      <div className="flex gap-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          {isSubmitting ? 'Requesting...' : 'Request Callback'}
        </button>
        
        {!isSubmitting && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
        )}
        
        {(isSuccess || error) && (
          <button
            type="button"
            onClick={handleReset}
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </form>
  );
}

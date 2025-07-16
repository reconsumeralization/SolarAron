import React, { useState } from 'react';
import { Check, Star, ArrowRight } from 'lucide-react';
import { useFormSubmission } from '../../hooks/useFormSubmission';
import { FormFeedback } from '../ui/FormFeedback';
import { packages } from '../../data/packages';
import type { MaintenancePackage } from '../../types';

interface PackageSelectionFormProps {
  preSelectedPackage?: string;
  onSuccess?: () => void;
}

interface PackageFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  selectedPackage: string;
  systemSize: string;
  installationDate: string;
  currentProvider: string;
  specialRequests: string;
}

export function PackageSelectionForm({ preSelectedPackage, onSuccess }: PackageSelectionFormProps) {
  const [selectedPackage, setSelectedPackage] = useState<MaintenancePackage | null>(
    preSelectedPackage ? packages.find(p => p.id === preSelectedPackage) || null : null
  );
  
  const [formData, setFormData] = useState<PackageFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    selectedPackage: preSelectedPackage || '',
    systemSize: '',
    installationDate: '',
    currentProvider: '',
    specialRequests: ''
  });

  const [validationErrors, setValidationErrors] = useState<Partial<PackageFormData>>({});

  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useFormSubmission({
    onSuccess: () => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        selectedPackage: '',
        systemSize: '',
        installationDate: '',
        currentProvider: '',
        specialRequests: ''
      });
      setValidationErrors({});
      setSelectedPackage(null);
      onSuccess?.();
    },
    onError: (error) => {
      console.error('Package selection form error:', error);
    }
  });

  const validateForm = (): boolean => {
    const errors: Partial<PackageFormData> = {};

    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.selectedPackage) errors.selectedPackage = 'Please select a package';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const packageDetails = packages.find(p => p.id === formData.selectedPackage);
    const emailData = {
      ...formData,
      formType: 'package',
      packageName: packageDetails?.name || 'Unknown Package',
      packagePrice: packageDetails?.price || 0,
      message: `Package Selection: ${packageDetails?.name || 'Unknown'}\n\nSystem Details:\n- Size: ${formData.systemSize || 'Not specified'}\n- Installation Date: ${formData.installationDate || 'Not specified'}\n- Current Provider: ${formData.currentProvider || 'Not specified'}\n\nSpecial Requests:\n${formData.specialRequests || 'None'}`
    };

    await submitForm(emailData, 'package');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (name === 'selectedPackage') {
      setSelectedPackage(packages.find(p => p.id === value) || null);
    }
    
    if (validationErrors[name as keyof PackageFormData]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePackageSelect = (packageId: string) => {
    setFormData(prev => ({ ...prev, selectedPackage: packageId }));
    setSelectedPackage(packages.find(p => p.id === packageId) || null);
    if (validationErrors.selectedPackage) {
      setValidationErrors(prev => ({ ...prev, selectedPackage: undefined }));
    }
  };

  const handleReset = () => {
    resetForm();
    setValidationErrors({});
    setSelectedPackage(null);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Package Selection */}
      <div className="space-y-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Choose Your Maintenance Package</h2>
          <p className="text-gray-600">Select the perfect maintenance plan for your solar system</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 cursor-pointer hover:shadow-xl ${
                selectedPackage?.id === pkg.id
                  ? 'border-blue-500 ring-2 ring-blue-200'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handlePackageSelect(pkg.id)}
            >
              {pkg.recommended && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <div className="p-6">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    ${pkg.price}
                    <span className="text-lg font-normal text-gray-500">/year</span>
                  </div>
                  <p className="text-sm text-green-600 font-medium">
                    Save ${pkg.savings}/year
                  </p>
                </div>

                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-center">
                  <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    selectedPackage?.id === pkg.id
                      ? 'border-blue-500 bg-blue-500'
                      : 'border-gray-300'
                  }`}>
                    {selectedPackage?.id === pkg.id && (
                      <Check className="w-4 h-4 text-white" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {validationErrors.selectedPackage && (
          <p className="text-red-600 text-center">{validationErrors.selectedPackage}</p>
        )}
      </div>

      {/* Contact Information Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Information</h3>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.name ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your full name"
              />
              {validationErrors.name && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.email ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your email address"
              />
              {validationErrors.email && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.phone ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your phone number"
              />
              {validationErrors.phone && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.address ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder="Enter your property address"
              />
              {validationErrors.address && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.address}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Solar System Size
              </label>
              <select
                name="systemSize"
                value={formData.systemSize}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="">Select system size</option>
                <option value="Small (1-5 kW)">Small (1-5 kW)</option>
                <option value="Medium (5-10 kW)">Medium (5-10 kW)</option>
                <option value="Large (10-20 kW)">Large (10-20 kW)</option>
                <option value="Commercial (20+ kW)">Commercial (20+ kW)</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Installation Date
              </label>
              <input
                type="date"
                name="installationDate"
                value={formData.installationDate}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Current Maintenance Provider (if any)
            </label>
            <input
              type="text"
              name="currentProvider"
              value={formData.currentProvider}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              placeholder="Enter current provider name or 'None'"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requests or Questions
            </label>
            <textarea
              name="specialRequests"
              value={formData.specialRequests}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none"
              placeholder="Any special requirements or questions about your maintenance package?"
            />
          </div>

          <FormFeedback
            isSubmitting={isSubmitting}
            isSuccess={isSuccess}
            error={error}
            successMessage="Thank you! We'll contact you soon to confirm your maintenance package and schedule service."
          />

          <div className="flex gap-4">
            <button
              type="submit"
              disabled={isSubmitting || !selectedPackage}
              className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Processing...' : 'Select Package'}
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {(isSuccess || error) && (
              <button
                type="button"
                onClick={handleReset}
                className="px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Reset
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
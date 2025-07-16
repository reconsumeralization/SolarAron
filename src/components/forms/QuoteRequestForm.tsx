import React, { useState } from 'react';
import { Calculator, Upload, X, FileText, Calendar, MapPin } from 'lucide-react';
import { useFormSubmission } from '../../hooks/useFormSubmission';
import { FormFeedback } from '../ui/FormFeedback';

interface QuoteFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  propertyType: string;
  systemSize: string;
  installationDate: string;
  currentProvider: string;
  serviceType: string[];
  urgency: string;
  budget: string;
  description: string;
  preferredContactMethod: string;
  preferredContactTime: string;
}

export function QuoteRequestForm() {
  const [formData, setFormData] = useState<QuoteFormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    propertyType: '',
    systemSize: '',
    installationDate: '',
    currentProvider: '',
    serviceType: [],
    urgency: '',
    budget: '',
    description: '',
    preferredContactMethod: 'phone',
    preferredContactTime: 'morning'
  });

  const [validationErrors, setValidationErrors] = useState<Partial<QuoteFormData>>({});
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);

  const { isSubmitting, isSuccess, error, submitForm, resetForm } = useFormSubmission({
    onSuccess: () => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        address: '',
        propertyType: '',
        systemSize: '',
        installationDate: '',
        currentProvider: '',
        serviceType: [],
        urgency: '',
        budget: '',
        description: '',
        preferredContactMethod: 'phone',
        preferredContactTime: 'morning'
      });
      setValidationErrors({});
      setUploadedFiles([]);
    },
    onError: (error) => {
      console.error('Quote request form error:', error);
    }
  });

  const serviceTypes = [
    'Solar Panel Cleaning',
    'System Inspection',
    'Performance Assessment',
    'Inverter Maintenance',
    'Electrical Repairs',
    'Panel Replacement',
    'Monitoring System Setup',
    'Emergency Repair',
    'Preventive Maintenance',
    'Warranty Service'
  ];

  const validateForm = (): boolean => {
    const errors: Partial<QuoteFormData> = {};

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
    if (!formData.propertyType) errors.propertyType = 'Property type is required';
    if (formData.serviceType.length === 0) errors.serviceType = 'Please select at least one service type';
    if (!formData.urgency) errors.urgency = 'Please select urgency level';
    if (!formData.description.trim()) errors.description = 'Please describe your needs';

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const emailData = {
      ...formData,
      formType: 'quote',
      serviceTypes: formData.serviceType.join(', '),
      message: `Quote Request Details:\n\nProperty Information:\n- Type: ${formData.propertyType}\n- Address: ${formData.address}\n- System Size: ${formData.systemSize || 'Not specified'}\n- Installation Date: ${formData.installationDate || 'Not specified'}\n- Current Provider: ${formData.currentProvider || 'None'}\n\nService Requirements:\n- Services: ${formData.serviceType.join(', ')}\n- Urgency: ${formData.urgency}\n- Budget: ${formData.budget || 'Not specified'}\n\nDescription:\n${formData.description}\n\nContact Preferences:\n- Method: ${formData.preferredContactMethod}\n- Time: ${formData.preferredContactTime}\n\nAttached Files: ${uploadedFiles.length > 0 ? uploadedFiles.map(f => f.name).join(', ') : 'None'}`
    };

    await submitForm(emailData, 'quote');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (validationErrors[name as keyof QuoteFormData]) {
      setValidationErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleServiceTypeChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceType: prev.serviceType.includes(service)
        ? prev.serviceType.filter(s => s !== service)
        : [...prev.serviceType, service]
    }));
    
    if (validationErrors.serviceType) {
      setValidationErrors(prev => ({ ...prev, serviceType: undefined }));
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(file => {
      const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      const maxSize = 5 * 1024 * 1024; // 5MB
      return validTypes.includes(file.type) && file.size <= maxSize;
    });
    
    setUploadedFiles(prev => [...prev, ...validFiles]);
  };

  const removeFile = (index: number) => {
    setUploadedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleReset = () => {
    resetForm();
    setValidationErrors({});
    setUploadedFiles([]);
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Calculator className="w-8 h-8 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-900">Request a Quote</h2>
        </div>
        <p className="text-gray-600">
          Get a customized quote for your solar maintenance needs
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Personal Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
            Contact Information
          </h3>
          
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
              <div className="relative">
                <MapPin className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    validationErrors.address ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter property address"
                />
              </div>
              {validationErrors.address && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.address}</p>
              )}
            </div>
          </div>
        </div>

        {/* Property Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
            Property Information
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Property Type *
              </label>
              <select
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.propertyType ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select property type</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
                <option value="Industrial">Industrial</option>
                <option value="Multi-family">Multi-family</option>
              </select>
              {validationErrors.propertyType && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.propertyType}</p>
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
                <option value="Unknown">Unknown</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Installation Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                <input
                  type="date"
                  name="installationDate"
                  value={formData.installationDate}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Current Maintenance Provider
              </label>
              <input
                type="text"
                name="currentProvider"
                value={formData.currentProvider}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                placeholder="Enter provider name or 'None'"
              />
            </div>
          </div>
        </div>

        {/* Service Requirements */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
            Service Requirements
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Services Needed * (Select all that apply)
            </label>
            <div className="grid md:grid-cols-2 gap-3">
              {serviceTypes.map((service) => (
                <label key={service} className="flex items-center space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.serviceType.includes(service)}
                    onChange={() => handleServiceTypeChange(service)}
                    className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
            {validationErrors.serviceType && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.serviceType}</p>
            )}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Urgency Level *
              </label>
              <select
                name="urgency"
                value={formData.urgency}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                  validationErrors.urgency ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select urgency</option>
                <option value="Emergency (24-48 hours)">Emergency (24-48 hours)</option>
                <option value="Urgent (1 week)">Urgent (1 week)</option>
                <option value="Standard (2-3 weeks)">Standard (2-3 weeks)</option>
                <option value="Flexible (1 month+)">Flexible (1 month+)</option>
              </select>
              {validationErrors.urgency && (
                <p className="mt-1 text-sm text-red-600">{validationErrors.urgency}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Budget Range
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="">Select budget range</option>
                <option value="Under $500">Under $500</option>
                <option value="$500 - $1,000">$500 - $1,000</option>
                <option value="$1,000 - $2,500">$1,000 - $2,500</option>
                <option value="$2,500 - $5,000">$2,500 - $5,000</option>
                <option value="Over $5,000">Over $5,000</option>
                <option value="Prefer not to say">Prefer not to say</option>
              </select>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold text-gray-900 border-b border-gray-200 pb-2">
            Additional Information
          </h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description of Your Needs *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={4}
              className={`w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors resize-none ${
                validationErrors.description ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="Please describe your maintenance needs, any issues you're experiencing, or specific requirements..."
            />
            {validationErrors.description && (
              <p className="mt-1 text-sm text-red-600">{validationErrors.description}</p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload Photos or Documents
            </label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600 mb-2">
                Upload photos of your solar system or relevant documents
              </p>
              <p className="text-sm text-gray-500 mb-4">
                Supported formats: JPG, PNG, GIF, PDF (max 5MB each)
              </p>
              <input
                type="file"
                multiple
                accept="image/*,.pdf"
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label
                htmlFor="file-upload"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer"
              >
                Choose Files
              </label>
            </div>
            
            {uploadedFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <p className="text-sm font-medium text-gray-700">Uploaded Files:</p>
                {uploadedFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-gray-50 p-2 rounded">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-700">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(index)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Contact Preferences */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Method
              </label>
              <select
                name="preferredContactMethod"
                value={formData.preferredContactMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="phone">Phone Call</option>
                <option value="email">Email</option>
                <option value="text">Text Message</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Contact Time
              </label>
              <select
                name="preferredContactTime"
                value={formData.preferredContactTime}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
              >
                <option value="morning">Morning (9AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 7PM)</option>
                <option value="anytime">Anytime</option>
              </select>
            </div>
          </div>
        </div>

        <FormFeedback
          isSubmitting={isSubmitting}
          isSuccess={isSuccess}
          error={error}
          successMessage="Thank you! We'll review your quote request and get back to you within 24 hours."
        />

        <div className="flex gap-4 pt-6 border-t border-gray-200">
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            <Calculator className="w-5 h-5" />
            {isSubmitting ? 'Submitting Quote Request...' : 'Request Quote'}
          </button>
          
          {(isSuccess || error) && (
            <button
              type="button"
              onClick={handleReset}
              className="px-6 py-4 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reset Form
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
import React, { useState } from 'react';

import { Phone } from 'lucide-react';

interface CallbackFormProps {
  onSubmit: (data: { name: string; phone: string; preferredTime: string }) => void;
  onCancel: () => void;
}

export function CallbackForm({ onSubmit, onCancel }: CallbackFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    preferredTime: 'morning'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg p-4 space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Phone Number
        </label>
        <input
          type="tel"
          required
          value={formData.phone}
          onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Preferred Time
        </label>
        <select
          value={formData.preferredTime}
          onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
          className="w-full px-3 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="morning">Morning (9AM - 12PM)</option>
          <option value="afternoon">Afternoon (12PM - 4PM)</option>
          <option value="evening">Evening (4PM - 7PM)</option>
        </select>
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
        >
          <Phone className="w-4 h-4" />
          Request Callback
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

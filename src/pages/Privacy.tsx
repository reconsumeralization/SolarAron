import React from 'react';
import { CONTACT_INFO } from '../constants/contact';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">Privacy Policy</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Information We Collect</h2>
            <p className="text-gray-600">
              We collect information that you provide directly to us, including name, email address, phone number, and address when you fill out our contact form or request our services.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Information Sharing</h2>
            <p className="text-gray-600">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted partners who assist us in operating our website and conducting our business.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-blue-800 mb-4">Contact Us</h2>
            <p className="text-gray-600">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <div className="mt-2">
              <p className="text-blue-600">Email: {CONTACT_INFO.email}</p>
              <p className="text-blue-600">Phone: {CONTACT_INFO.phone}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
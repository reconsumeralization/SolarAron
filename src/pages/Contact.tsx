import React from 'react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          Get In Touch
        </h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Let us help you maintain your solar investment
        </p>
        
        <ContactForm />
      </div>
    </div>
  );
}
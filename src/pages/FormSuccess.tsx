import React from 'react';
import { CheckCircle, Clock, Phone, Mail, Calendar, ArrowRight, Home, MessageCircle } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

interface FormSuccessProps {
  formType?: 'contact' | 'callback' | 'package' | 'quote';
  customerName?: string;
  submissionTime?: string;
}

export function FormSuccess({ formType, customerName, submissionTime }: FormSuccessProps) {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const type = formType || searchParams.get('type') || 'contact';
  const name = customerName || searchParams.get('name') || 'there';
  const time = submissionTime || searchParams.get('time') || new Date().toLocaleString();

  const getFormTypeInfo = () => {
    switch (type) {
      case 'callback':
        return {
          title: 'Callback Request Received',
          description: 'We\'ll call you back at your preferred time',
          icon: <Phone className="w-16 h-16 text-green-500" />,
          timeline: 'We typically return calls within 2-4 hours during business hours',
          nextSteps: [
            'Review your callback request',
            'Prepare any questions about your solar system',
            'Ensure your phone is available at the requested time'
          ]
        };
      case 'package':
        return {
          title: 'Package Selection Confirmed',
          description: 'Thank you for choosing our maintenance package',
          icon: <CheckCircle className="w-16 h-16 text-green-500" />,
          timeline: 'We\'ll contact you within 24 hours to schedule your first service',
          nextSteps: [
            'Review your package details and benefits',
            'Prepare for our initial system assessment',
            'Schedule your first maintenance appointment'
          ]
        };
      case 'quote':
        return {
          title: 'Quote Request Submitted',
          description: 'We\'re preparing your custom solar maintenance quote',
          icon: <MessageCircle className="w-16 h-16 text-green-500" />,
          timeline: 'Custom quotes are typically ready within 24-48 hours',
          nextSteps: [
            'Review your submitted requirements',
            'Prepare any additional system information',
            'Schedule a site visit if needed'
          ]
        };
      default:
        return {
          title: 'Message Sent Successfully',
          description: 'Thank you for contacting A-Aaron\'s Solar',
          icon: <Mail className="w-16 h-16 text-green-500" />,
          timeline: 'We typically respond to messages within 24 hours',
          nextSteps: [
            'Review your message details',
            'Prepare any additional questions',
            'Check your email for our response'
          ]
        };
    }
  };

  const formInfo = getFormTypeInfo();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Success Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            {formInfo.icon}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {formInfo.title}
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            {formInfo.description}
          </p>
          <p className="text-gray-500">
            Hi {name}, we received your submission at {time}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* What Happens Next */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-gray-900">What Happens Next</h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Review & Processing</h3>
                  <p className="text-gray-600 text-sm">{formInfo.timeline}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Personal Contact</h3>
                  <p className="text-gray-600 text-sm">Aaron will personally reach out to discuss your needs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Scheduling</h3>
                  <p className="text-gray-600 text-sm">We'll schedule your maintenance at your convenience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Next Steps */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="w-6 h-6 text-green-600" />
              <h2 className="text-2xl font-bold text-gray-900">Prepare for Success</h2>
            </div>
            
            <ul className="space-y-4">
              {formInfo.nextSteps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <ArrowRight className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Need Immediate Assistance?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Call Us</h3>
              <a
                href="tel:1-321-720-1500"
                className="text-blue-600 hover:text-blue-800 text-lg font-medium"
              >
                1-321-720-1500
              </a>
              <p className="text-sm text-gray-600 mt-1">
                Available 8 AM - 6 PM EST
              </p>
            </div>
            
            <div className="text-center">
              <div className="flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Us</h3>
              <a
                href="mailto:a.a.ronshomeimprovement321@gmail.com"
                className="text-green-600 hover:text-green-800 text-lg font-medium break-all"
              >
                a.a.ronshomeimprovement321@gmail.com
              </a>
              <p className="text-sm text-gray-600 mt-1">
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-lg p-8 text-white mb-8">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Why Customers Choose A-Aaron's Solar
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">10+</div>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-blue-100">Emergency Support</p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <Home className="w-5 h-5" />
            Return to Home
          </Link>
          
          <Link
            to="/services"
            className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-semibold"
          >
            <ArrowRight className="w-5 h-5" />
            Explore Our Services
          </Link>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 text-gray-600">
          <p className="text-sm">
            This confirmation has been sent to your email address. 
            Please add our email to your contacts to ensure you receive our responses.
          </p>
        </div>
      </div>
    </div>
  );
}
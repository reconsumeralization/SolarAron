import { Link } from 'react-router-dom';

export default function ThankYou() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Thank You!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We've received your message and will get back to you shortly.
        </p>
        <Link
          to="/"
          className="inline-block bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}

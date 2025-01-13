import {
  BrowserRouter as Router,
  Route,
  Routes,
} from 'react-router-dom';

import {
  ChatBot,
  Footer,
  Navigation,
} from './components';
import PricingSection from './components/pricing';
import {
  CityPage,
  Contact,
  Home,
  Packages,
  ROICalculator,
  ServiceDetail,
  ServicePage,
  SystemHealth,
  TestComponents,
  ThankYou,
} from './pages';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/pricing" element={<PricingSection />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/roi-calculator" element={<ROICalculator />} />
            <Route path="/system-health" element={<SystemHealth />} />
            <Route path="/services/:serviceId" element={<ServiceDetail />} />
            <Route path="/locations/:cityId" element={<CityPage />} />
            <Route path="/test-components" element={<TestComponents />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />
      </div>
    </Router>
  );
}

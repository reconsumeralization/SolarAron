import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import Packages from './pages/Packages';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import TransferPromo from './pages/TransferPromo';
import CustomerStories from './pages/CustomerStories';
import ServiceDetails from './pages/ServiceDetails';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<TransferPromo />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/stories" element={<CustomerStories />} />
            <Route path="/services" element={<ServiceDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
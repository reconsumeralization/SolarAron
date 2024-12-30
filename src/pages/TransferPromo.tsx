import React from 'react';
import TransferHero from '../components/promo/TransferHero';
import TransferBenefits from '../components/promo/TransferBenefits';
import TransferCTA from '../components/promo/TransferCTA';

export default function TransferPromo() {
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">
        <TransferHero />
        <TransferBenefits />
        <TransferCTA />
      </div>
    </div>
  );
}
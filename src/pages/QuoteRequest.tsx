import React from 'react';
import { AnimatedHero } from '@/components';
import { QuoteRequestForm } from '@/components/forms/QuoteRequestForm';

export default function QuoteRequest() {
  return (
    <main className="bg-background min-h-screen">
      <AnimatedHero
        title="Get Your Custom Quote"
        subtitle="Tell us about your solar maintenance needs and we'll provide a detailed quote"
      />

      <div className="container mx-auto px-4 py-16">
        <QuoteRequestForm />
      </div>
    </main>
  );
}
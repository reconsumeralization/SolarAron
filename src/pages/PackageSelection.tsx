import React from 'react';
import { AnimatedHero } from '@/components';
import { PackageSelectionForm } from '@/components/forms/PackageSelectionForm';
import { useNavigate } from 'react-router-dom';

export default function PackageSelection() {
  const navigate = useNavigate();

  const handleSuccess = () => {
    navigate('/success?type=package');
  };

  return (
    <main className="bg-background min-h-screen">
      <AnimatedHero
        title="Choose Your Maintenance Package"
        subtitle="Select the perfect solar maintenance plan for your system"
      />

      <div className="container mx-auto px-4 py-16">
        <PackageSelectionForm onSuccess={handleSuccess} />
      </div>
    </main>
  );
}
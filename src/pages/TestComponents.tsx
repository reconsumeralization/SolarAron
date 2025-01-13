import {
  AnimatedHero,
  BeforeAfterGallery,
  PromoBanner,
} from '@/components';
import { ServiceFoldout } from '@/components/services/ServiceFoldout';

export default function TestComponents() {
  return (
    <main className="bg-background min-h-screen">
      {/* Hero Section */}
      <AnimatedHero
        title="Component Testing"
        subtitle="A page to test and preview various components"
      />

      {/* Promo Banner */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
          Promo Banner Test
        </h2>
        <PromoBanner />
      </section>

      {/* Service Foldout */}
      <section className="py-16 bg-muted">
        <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
          Service Foldout Test
        </h2>
        <ServiceFoldout />
      </section>

      {/* Before/After Gallery */}
      <section className="py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
          Before/After Gallery Test
        </h2>
        <BeforeAfterGallery />
      </section>

      {/* Add more component test sections here */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-foreground mb-8">
          Additional Components
        </h2>
        <p className="text-muted-foreground">
          Add more components here for testing...
        </p>
      </div>
    </main>
  );
}

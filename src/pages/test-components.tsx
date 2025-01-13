import { Helmet } from 'react-helmet';

import {
  AboutAaron,
  AnimatedHero,
  AnimatedSection,
  AnimatedStats,
  BeforeAfterGallery,
  Benefits,
  Breadcrumbs,
  ContactForm,
  Features,
  ImageGallery,
  PromoBanner,
} from '@/components';
import { ServiceFoldout } from '@/components/services/ServiceFoldout';

const stats = [
  { label: "Efficiency Gain", value: 35, description: "Average improvement after cleaning" },
  { label: "Customer Satisfaction", value: 99, description: "Based on customer reviews" },
  { label: "Service Warranty", value: 1, description: "Full coverage guarantee", suffix: "Year" }
];

export default function TestComponentsPage() {
  return (
    <>
      <Helmet>
        <title>Component Testing | Solar Maintenance</title>
        <meta name="description" content="Test page for viewing and testing various components" />
      </Helmet>

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

        {/* Animated Stats */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Animated Stats Test
          </h2>
          <AnimatedStats
            title="Our Impact"
            stats={stats}
          />
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Benefits Test
          </h2>
          <Benefits />
        </section>

        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Features Test
          </h2>
          <Features />
        </section>

        {/* About Aaron Section */}
        <section className="py-16 bg-muted">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            About Aaron Test
          </h2>
          <AboutAaron />
        </section>

        {/* Contact Form */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Contact Form Test
          </h2>
          <div className="container mx-auto px-4">
            <ContactForm />
          </div>
        </section>

        {/* Breadcrumbs */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Breadcrumbs Test
          </h2>
          <div className="container mx-auto px-4">
            <Breadcrumbs serviceName="Test Components" />
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-16 bg-muted">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Image Gallery Test
          </h2>
          <ImageGallery />
        </section>

        {/* Before/After Gallery */}
        <section className="py-16">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Before/After Gallery Test
          </h2>
          <BeforeAfterGallery />
        </section>

        {/* Animated Section */}
        <section className="py-16 bg-muted">
          <h2 className="text-2xl font-bold text-foreground mb-8 container mx-auto px-4">
            Animated Section Test
          </h2>
          <AnimatedSection
            title="Example Section"
            items={[
              { title: "Feature 1", description: "Description of feature 1" },
              { title: "Feature 2", description: "Description of feature 2" },
              { title: "Feature 3", description: "Description of feature 3" }
            ]}
          />
        </section>
      </main>
    </>
  );
}

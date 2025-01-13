import { motion } from 'framer-motion';
import {
  Check,
  Clock,
  DollarSign,
  Package,
  Shield,
  Star,
  Wrench,
} from 'lucide-react';
import { useParams } from 'react-router-dom';

import {
  AnimatedHero,
  AnimatedStats,
  BeforeAfterGallery,
} from '@/components';

import { Breadcrumbs } from '../components/Breadcrumbs';
import MetaTags from '../components/seo/MetaTags';
import { ServiceSchema } from '../components/ServiceSchema';
import { SERVICE_SEO } from '../constants/seo';
import { services } from '../data/services';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function ServiceDetail() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Service Not Found</h1>
          <p className="text-muted-foreground">The requested service could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <MetaTags {...SERVICE_SEO[serviceId!]} path={`/services/${serviceId}`} />
      <ServiceSchema service={service} />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <AnimatedHero
          title={service.name}
          subtitle={service.description}
        />

        {/* Stats Section */}
        <AnimatedStats
          title="Service Benefits"
          description="Why choose our professional service"
          stats={[
            {
              value: 35,
              label: "Average Efficiency Gain",
              suffix: "%"
            },
            {
              value: 98,
              label: "Customer Satisfaction",
              suffix: "%"
            },
            {
              value: 5,
              label: "Year Warranty",
              suffix: "+"
            }
          ]}
          variant="light"
        />

        {/* Overview Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Service Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted transition-colors rounded-lg"
                >
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Quick Service</h3>
                  <p className="text-muted-foreground">Fast and efficient maintenance process</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted transition-colors rounded-lg"
                >
                  <Wrench className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Expert Team</h3>
                  <p className="text-muted-foreground">Skilled professionals with years of experience</p>
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  className="p-6 bg-card dark:bg-card hover:bg-muted dark:hover:bg-muted transition-colors rounded-lg"
                >
                  <Star className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2 text-foreground">Quality Results</h3>
                  <p className="text-muted-foreground">Guaranteed satisfaction with our service</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <Breadcrumbs serviceName={service.name} />

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-8">
                {/* Service Info */}
                <motion.div variants={itemVariants} className="bg-card dark:bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Service Details</h2>
                  <p className="text-xl text-muted-foreground mb-8">
                    Comprehensive solar system inspection using advanced diagnostic tools
                  </p>
                  <div className="flex items-center gap-2 text-2xl font-bold text-primary mb-6">
                    <DollarSign className="w-6 h-6" />
                    <span>42.5</span>
                    <span className="text-base font-normal text-muted-foreground">per panel</span>
                  </div>
                  <img
                    src="/solar-system-inspection.jpg"
                    alt="Advanced System Inspection"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                </motion.div>

                {/* Benefits */}
                <motion.div variants={itemVariants} className="bg-card dark:bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Shield className="w-6 h-6" />
                    Benefits
                  </h2>
                  <ul className="grid gap-4">
                    {service.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-muted/50 dark:bg-muted/20 p-4 rounded-lg"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">{benefit}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {service.priceOptions && (
                  <motion.div variants={itemVariants} className="bg-card dark:bg-card rounded-xl shadow-lg p-8">
                    <h3 className="text-xl font-semibold text-foreground mb-4">Pricing Options</h3>
                    <div className="space-y-4">
                      {service.priceOptions.map((option) => (
                        <motion.div
                          key={option.size}
                          whileHover={{ scale: 1.02 }}
                          className="flex justify-between items-center p-4 bg-muted/50 dark:bg-muted/20 rounded-lg"
                        >
                          <span className="font-medium text-foreground">{option.size} Panel</span>
                          <div className="text-right">
                            <div className="font-bold text-primary">${option.price}</div>
                            <div className="text-sm text-muted-foreground">
                              +${option.laborCost} installation
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>

              {/* Features Column */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div variants={itemVariants} className="bg-card dark:bg-card rounded-xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <Package className="w-6 h-6" />
                    Features
                  </h2>
                  <ul className="grid gap-4">
                    {service.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 bg-muted/50 dark:bg-muted/20 p-4 rounded-lg"
                      >
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span className="text-foreground">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>

                {/* Contact Form */}
                <motion.div variants={itemVariants} className="bg-card dark:bg-card rounded-xl shadow-lg p-8">
                  <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="space-y-6">
                    <input type="hidden" name="form-name" value="contact" />
                    <div hidden>
                      <input name="bot-field" />
                    </div>
                    <div className="space-y-6">
                      <div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          placeholder="Name"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-muted border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Email"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-muted border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-muted border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          placeholder="Address"
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-muted border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <textarea
                          id="message"
                          name="message"
                          placeholder="Message"
                          rows={4}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-muted border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-semibold hover:bg-primary/90 transition-colors duration-300"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Before/After Gallery */}
        <BeforeAfterGallery />
      </div>
    </>
  );
}

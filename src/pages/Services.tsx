import { motion } from 'framer-motion';
import {
  Clock,
  Star,
  Wrench,
} from 'lucide-react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

import {
  AnimatedHero,
  AnimatedStats,
} from '@/components';

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

export default function ServicePage() {
  return (
    <>
      <Helmet>
        <title>Solar Maintenance Services | A-Aaron's Florida Solar</title>
        <meta name="description" content="Professional solar maintenance solutions to maximize your investment and ensure long-term performance. Expert services for all types of solar systems." />
      </Helmet>

      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <AnimatedHero
          title="Solar Maintenance Services"
          subtitle="Professional solutions to maximize your solar investment and ensure peak performance"
        />

        {/* Featured Services Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Our Services
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our range of specialized solar maintenance services
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8"
            >
              {services.map((service) => (
                <motion.div
                  key={service.id}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="bg-card rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary/50 transition-colors duration-200"
                >
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-foreground mb-2">{service.name}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    {service.price && (
                      <p className="text-lg font-semibold text-primary mb-4">
                        ${service.price} {service.priceUnit}
                      </p>
                    )}
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center text-primary hover:text-primary/90"
                    >
                      View Details
                      <span className="ml-2">→</span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <AnimatedStats
          title="Our Service Impact"
          description="The numbers that drive our commitment to excellence"
          stats={[
            {
              value: 98,
              label: "Customer Satisfaction",
              suffix: "%"
            },
            {
              value: 35,
              label: "Average Efficiency Increase",
              suffix: "%"
            },
            {
              value: 1000,
              label: "Systems Maintained",
              suffix: "+"
            }
          ]}
          variant="light"
        />

        {/* Service Benefits Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Service Benefits</h2>
              <p className="text-muted-foreground">Why choose our professional service</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="text-4xl font-bold text-primary dark:text-primary mb-2">35%</div>
                <div className="text-gray-800 dark:text-gray-100 font-medium">Average Efficiency Gain</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="text-4xl font-bold text-primary dark:text-primary mb-2">98%</div>
                <div className="text-gray-800 dark:text-gray-100 font-medium">Customer Satisfaction</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg border border-border hover:border-primary/20 transition-colors duration-200"
              >
                <div className="text-4xl font-bold text-primary dark:text-primary mb-2">1yr</div>
                <div className="text-gray-800 dark:text-gray-100 font-medium">Year Warranty</div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-foreground mb-12">Service Overview</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-900/90 p-8 rounded-lg border border-border/50 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <p className="text-center text-muted-foreground dark:text-gray-300">Fast and efficient maintenance process</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-900/90 p-8 rounded-lg border border-border/50 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Wrench className="w-6 h-6 text-primary" />
                </div>
                <p className="text-center text-muted-foreground dark:text-gray-300">Skilled professionals with years of experience</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/50 dark:bg-gray-900/90 p-8 rounded-lg border border-border/50 hover:border-primary/20 transition-colors duration-200"
              >
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <p className="text-center text-muted-foreground dark:text-gray-300">Guaranteed satisfaction with our service</p>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

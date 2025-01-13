import { motion } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Quote,
} from 'lucide-react';

import { AnimatedHero } from '@/components';

export default function Contact() {
  return (
    <main className="bg-background">
      <AnimatedHero
        title="Contact Us"
        subtitle="Get in touch with our solar maintenance experts"
      />

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column */}
          <div className="space-y-8">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              src="/aaron-cleaning-solar-panels.jpg"
              alt="Aaron cleaning solar panels"
              className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
            />

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card dark:bg-gray-900 rounded-2xl shadow-lg p-8"
            >
              <Quote className="w-10 h-10 text-primary mb-4" />
              <p className="text-xl text-foreground italic mb-4">
                I'm not afraid to get my hands dirty to ensure your solar panels are performing at their best. Every panel I clean, every system I maintain - it's about delivering real value to our customers.
              </p>
              <div className="flex items-center gap-3">
                <span className="text-lg font-semibold text-primary">Aaron</span>
                <span className="text-muted-foreground">Owner, A-Aaron's Solar</span>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card dark:bg-gray-900 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
              <div className="space-y-4">
                <a
                  href="tel:1-321-720-1500"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  1-321-720-1500
                </a>
                <a
                  href="mailto:a.a.ronshomeimprovement321@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-5 h-5 text-primary" />
                  a.a.ronshomeimprovement321@gmail.com
                </a>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  Florida, USA
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card dark:bg-gray-900 rounded-2xl shadow-lg p-8"
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Get In Touch
                </h1>
                <p className="text-xl text-muted-foreground">
                  Let us help you maintain your solar investment
                </p>
              </div>
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
                      className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-gray-800 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Email"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-gray-800 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Phone"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-gray-800 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Address"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-gray-800 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Message"
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-lg bg-muted dark:bg-gray-800 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
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

            {/* Work Preview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-card dark:bg-gray-900 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold text-foreground mb-6">Our Work</h2>
              <img
                src="/solar-panel-cleaning-service.jpg"
                alt="Professional solar panel cleaning service"
                className="w-full h-[200px] object-cover rounded-xl shadow-lg"
              />
              <p className="text-muted-foreground mt-4">
                Professional solar panel cleaning and maintenance in action
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}

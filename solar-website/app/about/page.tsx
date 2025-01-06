'use client'

import { motion } from 'framer-motion'
import { 
  Star, Clock, CheckCircle, Award, Wrench, ThumbsUp, Sun, Shield,
  ArrowRight, Zap, Droplets, Phone, Mail, MapPin
} from 'lucide-react'
import AnimatedSection from '@/components/animated-section'
import AnimatedStats from '@/components/animated-stats'
import { theme } from '@/lib/theme'

const whyAaronFeatures = [
  {
    id: 'why-aaron-clock',
    icon: Clock,
    title: "HE WILL SHOW UP",
    description: "When A A-ron's makes a promise, he keeps it. No excuses, no delays - just reliable service you can count on."
  },
  {
    id: 'why-aaron-shield',
    icon: Shield,
    title: "Not Your Average Ron",
    description: "A A-ron's isn't just another Ron. He's the Ron who gets it done right, every single time."
  },
  {
    id: 'why-aaron-wrench',
    icon: Wrench,
    title: "Expert Knowledge",
    description: "With deep expertise in pool solar, hot water, and PV systems, A A-ron's knows solar inside and out."
  }
] as const

const serviceCommitments = [
  {
    id: 'service-star',
    icon: Star,
    title: "Quality First",
    description: "Every job gets the A A-ron's stamp of quality - nothing less than perfection leaves our hands."
  },
  {
    id: 'service-check',
    icon: CheckCircle,
    title: "Certified Excellence",
    description: "Licensed, insured, and certified - bringing professional expertise to every project."
  },
  {
    id: 'service-sun',
    icon: Sun,
    title: "Solar Specialist",
    description: "Focused solely on solar maintenance and repair, ensuring you get specialized expertise."
  }
] as const

const teamValues = [
  {
    id: 'team-award',
    icon: Award,
    title: "Professional Team",
    description: "A A-ron's leads a skilled team of solar experts, each committed to excellence."
  },
  {
    id: 'team-wrench',
    icon: Wrench,
    title: "Full-Service Care",
    description: "From routine maintenance to emergency repairs, we handle it all with precision."
  },
  {
    id: 'team-thumbs',
    icon: ThumbsUp,
    title: "Customer First",
    description: "Your satisfaction is our priority. We're not happy until you're happy."
  }
] as const

const transitionFeatures = [
  {
    id: 'transition-shield',
    icon: Shield,
    title: "Seamless Transfer",
    description: "Quick and easy transition with no service interruption. Your solar system stays running smoothly."
  },
  {
    id: 'transition-clock',
    icon: Clock,
    title: "Priority Service",
    description: "Get immediate attention from our expert technicians. Florida Solar East customers get VIP treatment."
  },
  {
    id: 'transition-star',
    icon: Star,
    title: "10% Discount",
    description: "Exclusive 10% off for Florida Solar East customers. Same great service, better value."
  }
] as const

const solarSystemTypes = [
  {
    id: 'system-droplets',
    icon: Droplets,
    title: "Pool Solar Systems",
    description: "Expert maintenance and repair for your pool heating system. Keep your pool at the perfect temperature year-round."
  },
  {
    id: 'system-zap',
    icon: Zap,
    title: "PV Electric Systems",
    description: "Professional care for your photovoltaic panels. Maximize energy production and efficiency."
  },
  {
    id: 'system-sun',
    icon: Sun,
    title: "Hot Water Systems",
    description: "Specialized service for solar water heaters. Ensure reliable hot water for your home."
  }
] as const

const contactInfo = [
  {
    id: 'contact-phone',
    icon: Phone,
    title: "24/7 Support",
    description: "(321) 506-2981 - Call us anytime for emergency service"
  },
  {
    id: 'contact-mail',
    icon: Mail,
    title: "Email Us",
    description: "Quick response to all your solar maintenance needs"
  },
  {
    id: 'contact-map',
    icon: MapPin,
    title: "Service Area",
    description: "Serving Melbourne, Vero Beach, Palm Bay, and surrounding areas"
  }
] as const

// Generate unique particle IDs
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: `about-particle-${i}`,
  x: Math.random() * 100,
  y: Math.random() * 100,
  scale: Math.random() * 0.5 + 0.5,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 10
}))

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        {/* Animated particles background */}
        <div className="absolute inset-0 opacity-20">
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="absolute w-2 h-2 bg-white rounded-full"
              initial={{ 
                x: `${particle.x}%`,
                y: `${particle.y}%`,
                scale: particle.scale
              }}
              animate={{ 
                y: ["-10%", "110%"],
                transition: {
                  duration: particle.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: -particle.delay
                }
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              animate={{
                scale: [1, 1.02, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Meet{" "}
              <span 
                className="inline-block"
                style={{ color: theme.colors.accent }}
              >
                A A-ron's
              </span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-blue-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Not just any Ron - THE Ron who shows up, gets it done, and keeps your solar running at its best.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Florida Solar East Transition Promo */}
      <section className="relative py-16 bg-[#1a237e] text-white overflow-hidden">
        <motion.div 
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
            transition: {
              duration: 20,
              repeat: Infinity,
              repeatType: 'reverse'
            }
          }}
          style={{
            backgroundImage: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 50%)',
            backgroundSize: '100% 100%'
          }}
        />
        
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-bold mb-4"
              animate={{
                scale: [1, 1.05, 1],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
            >
              Exclusive 10% Off
            </motion.h2>
            <motion.div 
              className="text-2xl md:text-3xl text-yellow-300 mb-8 flex items-center justify-center gap-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span>Florida Solar East</span>
              <ArrowRight className="w-8 h-8" />
              <span>A Aaron's Florida Solar LLC</span>
            </motion.div>
            <p className="text-lg text-blue-100">
              *Only valid for existing Florida Solar East (MyFloridaSolar.com) customers
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <AnimatedStats stats={{
        customers: 500,
        responseTime: '2 hours',
        satisfaction: 99,
        experience: 15
      }} />

      {/* Transition Benefits */}
      <AnimatedSection
        title="Easy Transition"
        subtitle="Switching to A A-ron's is simple and beneficial"
        features={transitionFeatures}
        variant="light"
        layout="cards"
      />

      {/* Why A A-ron's Section */}
      <AnimatedSection
        title="Why Choose A A-ron's?"
        subtitle="Because when A A-ron's says he'll be there, HE SHOWS UP!"
        features={whyAaronFeatures}
        variant="gradient"
        layout="cards"
      />

      {/* Solar System Expertise */}
      <AnimatedSection
        title="Complete Solar Care"
        subtitle="Expert service for all your solar systems"
        features={solarSystemTypes}
        variant="dark"
        layout="grid"
      />

      {/* Service Commitments */}
      <AnimatedSection
        title="Our Service Commitment"
        subtitle="Expert solar maintenance backed by years of experience"
        features={serviceCommitments}
        variant="gradient"
        layout="grid"
      />

      {/* Team Values */}
      <AnimatedSection
        title="The A A-ron's Difference"
        subtitle="A team dedicated to excellence in solar maintenance"
        features={teamValues}
        variant="light"
        layout="grid"
      />

      {/* Contact Information */}
      <AnimatedSection
        title="Ready to Make the Switch?"
        subtitle="Contact us today to experience the A A-ron's difference"
        features={contactInfo}
        variant="dark"
        layout="cards"
        callToAction={{
          text: "Get Started Now",
          href: "/contact"
        }}
      />
    </div>
  )
} 
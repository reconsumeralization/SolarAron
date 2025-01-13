import { motion } from 'framer-motion';
import {
  Check,
  Shield,
  Sun,
  Wrench,
} from 'lucide-react';

const expertiseAreas = [
  {
    title: "Professional Solar Cleaning",
    description: "Expert cleaning using deionized water and specialized equipment for optimal panel performance.",
    icon: Sun,
    highlights: [
      "Deionized water cleaning",
      "Manual squeegee application",
      "Microfiber detailing",
      "Same-day service available"
    ]
  },
  {
    title: "System Maintenance",
    description: "Comprehensive maintenance services to keep your solar system running at peak efficiency.",
    icon: Wrench,
    highlights: [
      "Full system diagnostics",
      "Performance optimization",
      "Preventive maintenance",
      "Expert troubleshooting"
    ]
  },
  {
    title: "Quality Assurance",
    description: "Rigorous quality standards and certified technicians for reliable solar maintenance.",
    icon: Shield,
    highlights: [
      "Certified technicians",
      "Industry best practices",
      "Satisfaction guarantee",
      "Detailed reporting"
    ]
  }
];

export function OurExpertise() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-foreground mb-4"
          >
            Our Solar Maintenance Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-muted-foreground"
          >
            With years of experience in solar maintenance, we deliver professional service you can trust.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{area.title}</h3>
              </div>

              <p className="text-muted-foreground mb-6">{area.description}</p>

              <ul className="space-y-3">
                {area.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

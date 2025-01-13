'use client'

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AnimatedSectionProps {
  title: string;
  description?: string;
  items: {
    title: string;
    description: string;
    icon?: LucideIcon;
  }[];
  variant?: 'light' | 'dark' | 'gradient';
  layout?: 'grid' | 'list';
  callToAction?: {
    text: string;
    href: string;
  };
}

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

export function AnimatedSection({
  title,
  description,
  items,
  variant = 'light',
  layout = 'grid',
  callToAction
}: AnimatedSectionProps) {
  const bgColor = {
    light: 'bg-white',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900'
  }[variant];

  const textColor = {
    light: 'text-gray-900',
    dark: 'text-white',
    gradient: 'text-white'
  }[variant];

  const descriptionColor = {
    light: 'text-gray-600',
    dark: 'text-gray-300',
    gradient: 'text-blue-100'
  }[variant];

  return (
    <section className={`py-20 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`text-3xl font-bold ${textColor} mb-4`}
          >
            {title}
          </motion.h2>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`text-xl ${descriptionColor}`}
            >
              {description}
            </motion.p>
          )}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className={layout === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}
        >
          {items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className={`${variant !== 'light' ? 'bg-white/10' : 'bg-white'} rounded-lg p-6 shadow-lg`}
            >
              {item.icon && (
                <div className="mb-4">
                  <item.icon className={`w-8 h-8 ${variant === 'light' ? 'text-blue-600' : 'text-blue-400'}`} />
                </div>
              )}
              <h3 className={`text-xl font-semibold mb-2 ${textColor}`}>
                {item.title}
              </h3>
              <p className={descriptionColor}>
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {callToAction && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href={callToAction.href}
              className={`inline-block px-8 py-3 rounded-lg font-semibold ${
                variant === 'light'
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              } transition-colors`}
            >
              {callToAction.text}
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}

'use client'

import {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  motion,
  useInView,
} from 'framer-motion';

interface Stat {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface AnimatedStatsProps {
  title: string;
  description?: string;
  stats: Stat[];
  variant?: 'light' | 'dark' | 'gradient';
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

function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      const stepTime = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.round(stepValue * currentStep), value));
        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary dark:text-primary">
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function AnimatedStats({ title, description, stats, variant = 'light' }: AnimatedStatsProps) {
  const bgColor = {
    light: 'bg-white dark:bg-gray-900',
    dark: 'bg-gray-900',
    gradient: 'bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900'
  }[variant];

  const textColor = {
    light: 'text-gray-900 dark:text-white',
    dark: 'text-white',
    gradient: 'text-white'
  }[variant];

  const descriptionColor = {
    light: 'text-gray-600 dark:text-gray-300',
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
              className={`text-xl ${descriptionColor} max-w-3xl mx-auto`}
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
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemAnimation}
              className={`${variant !== 'light' ? 'bg-white/10' : 'bg-white dark:bg-gray-900'} rounded-lg p-6 shadow-lg text-center flex flex-col items-center justify-center border border-border/50 dark:border-white/10`}
            >
              <CountUp value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className={`mt-2 text-lg ${descriptionColor}`}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

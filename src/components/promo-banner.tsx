import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function PromoBanner() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
      {/* Background particles effect */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/50 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center relative z-10"
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-block px-4 py-1 mb-4 text-sm font-medium text-yellow-400 bg-yellow-400/10 rounded-full"
        >
          Exclusive Offer
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          10% Off All Solar <br />
          Maintenance Packages
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-blue-100 mb-8 space-y-2"
        >
          <p className="flex items-center justify-center gap-2">
            For Florida Solar East
            <ArrowRight className="w-5 h-5 text-yellow-400" />
            A-Aaron's Florida Solar LLC
          </p>
          <p className="text-yellow-400/90 text-sm">*Valid for existing Florida Solar East customers only</p>
        </motion.div>
      </motion.div>
    </section>
  );
}

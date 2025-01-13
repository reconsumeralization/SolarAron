import { motion } from 'framer-motion';

import { packages } from '../../data/packages';
import PackageCard from './PackageCard';

export default function MonthlyPackages() {
  const formattedPackages = packages.map(pkg => ({
    ...pkg,
    price: `$${pkg.price}`,
    features: pkg.features.map(feature => ({
      feature,
      included: true
    }))
  }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="grid md:grid-cols-3 gap-6"
    >
      {formattedPackages.map((pkg) => (
        <PackageCard
          key={pkg.id}
          title={pkg.name}
          price={pkg.price}
          features={pkg.features}
          isPopular={pkg.recommended}
        />
      ))}
    </motion.div>
  );
}

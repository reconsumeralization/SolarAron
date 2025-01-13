import React, {
  useEffect,
  useRef,
  useState,
} from 'react';

import {
  AnimatePresence,
  motion,
  useAnimation,
} from 'framer-motion';
import {
  ArrowRight,
  Calendar,
  Check,
  Mail,
  Phone,
  RotateCcw,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "PV Panel Cleaning",
    description: "Maximize your solar energy output with our professional cleaning service.",
    price: "$10/panel",
    features: [
      "Deionized water cleaning for a spotless finish",
      "Gentle manual squeegee application",
      "Microfiber detailing for a streak-free shine",
      "Thorough inspection for optimal performance"
    ],
    benefits: [
      "Boost energy efficiency by up to 25%",
      "Prolong the lifespan of your panels",
      "Enhance the aesthetic appeal of your home",
      "Convenient same-day service available"
    ],
    image: "/solar-cleaning.jpg",
    link: "/services/panel-cleaning"
  },
  {
    title: "Solar System Tune-Up",
    description: "Comprehensive maintenance package for peak system performance.",
    price: "$180",
    features: [
      "Includes 10 FREE panel cleanings ($100 value)",
      "Comprehensive system inspection and diagnostics",
      "One FREE advanced panel inspection ($42.50 value)",
      "Incredible savings - a $340-$350 value!"
    ],
    benefits: [
      "Maximize your energy savings",
      "Ensure your system is operating at its best",
      "Exceptional value for comprehensive care",
      "Priority scheduling for your convenience"
    ],
    image: "/system-maintenance.jpg",
    link: "/services/tune-up",
    recommended: true
  },
  {
    title: "Advanced System Inspection",
    description: "In-depth diagnostic assessment for optimal solar health.",
    price: "$42.50/panel",
    features: [
      "Comprehensive diagnostic testing of each panel",
      "Advanced thermal imaging to detect hidden issues",
      "Personalized problem-solving consultation",
      "Detailed report with actionable insights"
    ],
    benefits: [
      "Early detection of potential problems",
      "Optimize system performance and output",
      "Expert guidance from certified technicians",
      "Proactive care to prevent future issues"
    ],
    image: "/inspection.jpg",
    link: "/services/inspection"
  }
];

// --- Custom Hooks ---

function useBrochureState() {
  const [isOpen, setIsOpen] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const controls = useAnimation();
  const brochureRef = useRef<HTMLDivElement>(null);

  // Reset state when brochure is closed
  useEffect(() => {
    if (!isOpen) {
      setIsFlipped(false);
      setSelectedIndex(null);
    }
  }, [isOpen]);

  // Handle closing the brochure when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (brochureRef.current && !brochureRef.current.contains(event.target as Node)) {
        if (isFlipped) {
          setIsFlipped(false); // Flip back if open
          setSelectedIndex(null);
        } else if (isOpen) {
          setIsOpen(false); // Close brochure if not flipped
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isFlipped]);

  // Handle closing with the Escape key
  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isFlipped) {
          setIsFlipped(false);
          setSelectedIndex(null);
        } else if (isOpen) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('keydown', handleEscapeKey);
    return () => document.removeEventListener('keydown', handleEscapeKey);
  }, [isOpen, isFlipped]);

  const handleFlip = (index: number) => {
    setSelectedIndex(index);
    setIsFlipped(!isFlipped);
  };

  return {
    isOpen,
    toggleOpen: () => setIsOpen(!isOpen),
    isFlipped,
    handleFlip,
    selectedIndex,
    controls,
    brochureRef
  };
}

// Hook for managing the selected tab on the back side
function useBackContentTab() {
  const [selectedTab, setSelectedTab] = useState<'schedule' | 'details' | 'contact'>('details');

  // Reset to 'details' when the card flips back
  const resetTab = () => setSelectedTab('details');

  return { selectedTab, setSelectedTab, resetTab };
}

// --- Sub-Components ---

// Front of the service card
const ServiceCardFront: React.FC<{
  service: typeof services[0];
  onFlip: () => void;
  isRecommended?: boolean;
}> = ({ service, onFlip, isRecommended }) => {
  return (
    <motion.div
      className="absolute inset-0 backface-hidden"
      style={{ backfaceVisibility: "hidden" }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${service.image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/70 to-gray-900/90 dark:from-gray-900/90 dark:via-gray-900/80 dark:to-gray-900/95 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="relative p-8 h-full flex flex-col">
        {isRecommended && (
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20
            }}
            className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg"
          >
            <Star className="w-4 h-4" />
            Best Value
          </motion.div>
        )}

        <h3 className="text-3xl font-bold text-white mb-3">{service.title}</h3>
        <p className="text-gray-200 mb-4 line-clamp-3">{service.description}</p>
        <div className="text-4xl font-bold text-yellow-400 mb-6">{service.price}</div>

        <div className="mt-auto">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onFlip();
            }}
            className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform-gpu"
          >
            View Details <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Tab navigation on the back of the card
const BackContentTabs: React.FC<{
  selectedTab: 'details' | 'schedule' | 'contact';
  setSelectedTab: (tab: 'details' | 'schedule' | 'contact') => void;
}> = ({ selectedTab, setSelectedTab }) => {
  return (
    <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-700">
      {(['details', 'schedule', 'contact'] as const).map((tab) => (
        <button
          key={tab}
          onClick={(e) => {
            e.stopPropagation();
            setSelectedTab(tab);
          }}
          className={`pb-2 px-1 transition-colors relative ${selectedTab === tab
            ? 'text-yellow-500'
            : 'text-gray-600 dark:text-gray-400 hover:text-yellow-400'
            }`}
          aria-selected={selectedTab === tab}
          role="tab"
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
          {selectedTab === tab && (
            <motion.div
              layoutId="activeTab"
              className="absolute bottom-0 left-0 right-0 h-0.5 bg-yellow-500"
            />
          )}
        </button>
      ))}
    </div>
  );
};

// Content for the "Details" tab
const BackContentDetails: React.FC<{ service: typeof services[0] }> = ({ service }) => {
  return (
    <motion.div
      key="details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
      role="tabpanel"
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Service Details</h4>
      <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Includes:</h5>
          <ul className="space-y-2">
            {service.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Benefits:</h5>
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                <Check className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

// Content for the "Schedule" tab
const BackContentSchedule: React.FC<{ service: typeof services[0] }> = ({ service }) => {
  return (
    <motion.div
      key="schedule"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-4"
      role="tabpanel"
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Schedule Service</h4>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Preferred Date
            </label>
            <div className="flex items-center gap-2 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <Calendar className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-600 dark:text-gray-300">Select Date</span>
            </div>
          </div>
          <Link
            to={service.link}
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center w-full gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform-gpu"
          >
            Book Now <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
          <h5 className="font-medium text-gray-900 dark:text-gray-100 mb-2">Available Times:</h5>
          <div className="grid grid-cols-2 gap-2">
            {['9:00 AM', '10:30 AM', '1:00 PM', '2:30 PM'].map((time) => (
              <button
                key={time}
                onClick={(e) => e.stopPropagation()}
                className="p-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 rounded transition-colors"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Content for the "Contact" tab
const BackContentContact: React.FC = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-6"
      role="tabpanel"
    >
      <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Contact Us</h4>
      <div className="space-y-4">
        <a
          href="tel:+1234567890"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <Phone className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Call Us</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">+1 (234) 567-890</div>
          </div>
        </a>
        <a
          href="mailto:service@example.com"
          onClick={(e) => e.stopPropagation()}
          className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <Mail className="w-5 h-5 text-yellow-500" />
          <div>
            <div className="font-medium text-gray-900 dark:text-gray-100">Email Us</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">service@example.com</div>
          </div>
        </a>
      </div>
    </motion.div>
  );
};

// Back side of the service card
const BackContent: React.FC<{
  service: typeof services[0];
  onBack: () => void;
}> = ({ service, onBack }) => {
  const { selectedTab, setSelectedTab, resetTab } = useBackContentTab();

  // Call resetTab when the card flips back
  useEffect(() => {
    return () => resetTab();
  }, [onBack]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 bg-white dark:bg-gray-800 p-8 rounded-xl"
    >
      <div className="flex justify-between items-start mb-6">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onBack();
          }}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-yellow-500 transition-colors"
          ref={(node) => {
            if (node) {
              node.focus();
            }
          }}
        >
          <RotateCcw className="w-5 h-5" />
          Flip Back
        </button>
        <div className="text-2xl font-bold text-yellow-400">{service.price}</div>
      </div>

      <BackContentTabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />

      <AnimatePresence mode="wait">
        {selectedTab === 'details' && <BackContentDetails service={service} />}
        {selectedTab === 'schedule' && <BackContentSchedule service={service} />}
        {selectedTab === 'contact' && <BackContentContact />}
      </AnimatePresence>
    </motion.div>
  );
};

// --- Main Brochure Component ---

export function ServiceFoldout() {
  const {
    isOpen,
    toggleOpen,
    isFlipped,
    handleFlip,
    selectedIndex,
    controls,
    brochureRef
  } = useBrochureState();

  const handleCardHover = (isHovered: boolean) => {
    if (!isOpen) return;
    controls.start({
      scale: isHovered ? 1.03 : 1,
    });
  };

  return (
    <div
      ref={brochureRef}
      className="w-full bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 py-16 px-4 perspective-[2500px]"
      onClick={toggleOpen}
    >
      <motion.div
        className="max-w-7xl mx-auto relative"
        animate={{ rotateY: isOpen ? 0 : -15 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        whileHover={{ scale: 1.01 }}
      >
        <div className="grid md:grid-cols-3 gap-0">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="relative h-[600px]"
              style={{
                perspective: 2000,
                transformOrigin: "center",
              }}
              animate={{
                x: isFlipped
                  ? index === selectedIndex
                    ? `${(1 - index) * 100}%`
                    : index < (selectedIndex ?? -1)
                    ? "-100%"
                    : "100%"
                  : 0,
                scale: isFlipped && index === selectedIndex ? 1.1 : 1,
                zIndex: isFlipped && index === selectedIndex ? 20 : 10,
              }}
              transition={{ duration: 0.7, ease: "easeInOut" }}
              onMouseEnter={() => handleCardHover(true)}
              onMouseLeave={() => handleCardHover(false)}
            >
              <motion.div
                className={`absolute inset-0 cursor-pointer transform-gpu preserve-3d
                  ${service.recommended ? 'ring-4 ring-yellow-500' : ''}
                  bg-white dark:bg-gray-800 rounded-xl
                  shadow-lg hover:shadow-2xl dark:shadow-gray-900/30
                  transition-all duration-300`}
                animate={{
                  rotateY: isFlipped && index === selectedIndex ? 180 : 0,
                  scale: isFlipped && index === selectedIndex ? 1.1 : 1,
                }}
                transition={{
                  duration: 0.8,
                  ease: "easeInOut",
                  type: "spring",
                  stiffness: 260,
                  damping: 20
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleFlip(index);
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Front Side */}
                <ServiceCardFront
                  service={service}
                  onFlip={() => handleFlip(index)}
                  isRecommended={service.recommended}
                />

                {/* Back Side */}
                <motion.div
                  className="absolute inset-0 backface-hidden"
                  style={{
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                  }}
                >
                  <BackContent service={service} onBack={() => handleFlip(index)} />
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

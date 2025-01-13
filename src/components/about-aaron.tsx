'use client'

import {
  Award,
  CheckCircle,
  Clock,
  Star,
  ThumbsUp,
  Wrench,
} from 'lucide-react';

import { AnimatedSection } from '@/components';

interface AboutAaronProps {
  city?: string
}

export function AboutAaron({ city = '' }: AboutAaronProps) {
  const features = [
    {
      icon: Clock,
      title: "HE WILL SHOW UP",
      description: `When A-Aaron's says he'll be there, he means it. Punctuality isn't just a promise, it's a guarantee${city ? ` in ${city}` : ''}`
    },
    {
      icon: CheckCircle,
      title: "Expert Team",
      description: `A-Aaron's leads a skilled team of solar professionals${city ? ` in ${city}` : ''}, each dedicated to delivering excellence.`
    },
    {
      icon: Star,
      title: "Quality First",
      description: "Every job gets the A-Aaron's stamp of quality - nothing less than perfection leaves our hands."
    },
    {
      icon: Award,
      title: "Certified Excellence",
      description: "Licensed, insured, and certified - A-Aaron's brings professional expertise to every project."
    },
    {
      icon: Wrench,
      title: "Full-Service Care",
      description: `From maintenance to repairs, A-Aaron's team handles it all with precision and care${city ? ` in ${city} and surrounding areas` : ''}`
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: `Join our family of satisfied customers who trust A-Aaron's for all their solar needs${city ? ` in ${city}` : ''}`
    }
  ]

  return (
    <AnimatedSection
      title={`Meet A-Aaron's${city ? ` - Serving ${city}` : ''}`}
      description="Not just Ron, but A-Aaron's - Your Trusted Solar Expert"
      items={features}
      variant="gradient"
      layout="grid"
      callToAction={{
        text: "Ready to experience the A-Aaron's difference? Contact us today!",
        href: "/contact"
      }}
    />
  )
}

'use client'

import { Star, Clock, CheckCircle, Award, Wrench, ThumbsUp } from 'lucide-react'
import AnimatedSection from '@/components/animated-section'

export default function AboutAaron() {
  const features = [
    {
      icon: Clock,
      title: "HE WILL SHOW UP",
      description: "When A-Aaron's says he'll be there, he means it. Punctuality isn't just a promise, it's a guarantee."
    },
    {
      icon: CheckCircle,
      title: "Expert Team",
      description: "A-Aaron's leads a skilled team of solar professionals, each dedicated to delivering excellence."
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
      description: "From maintenance to repairs, A-Aaron's team handles it all with precision and care."
    },
    {
      icon: ThumbsUp,
      title: "Customer Satisfaction",
      description: "Join our family of satisfied customers who trust A-Aaron's for all their solar needs."
    }
  ]

  return (
    <AnimatedSection
      title="Meet A-Aaron's"
      subtitle="Not just Ron, but A-Aaron's - Your Trusted Solar Expert"
      features={features}
      variant="gradient"
      layout="grid"
      callToAction={{
        text: "Ready to experience the A-Aaron's difference? Contact us today!",
        href: "/contact"
      }}
    />
  )
} 
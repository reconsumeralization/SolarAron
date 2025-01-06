'use client'

import { motion } from 'framer-motion'
import { 
  Sun, Wrench, Droplets, Zap, Shield, AlertTriangle,
  ThumbsUp, Calendar, Clock, User, ArrowRight
} from 'lucide-react'
import { theme } from '@/lib/theme'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: 'maintenance' | 'tips' | 'news' | 'emergency' | 'technical'
  date: string
  readTime: string
  author: string
  icon: typeof Sun
}

const blogPosts: BlogPost[] = [
  {
    id: 'solar-maintenance-101',
    title: "Solar Maintenance 101: Keep Your System Running Smoothly",
    excerpt: "Essential maintenance tips from A-Aaron's to keep your solar system performing at its best all year round.",
    category: 'maintenance',
    date: '2024-01-15',
    readTime: '5 min',
    author: 'A-Aaron\'s',
    icon: Wrench
  },
  {
    id: 'pool-solar-tips',
    title: "Maximizing Your Pool Solar System's Efficiency",
    excerpt: "Expert tips on getting the most from your pool solar heating system in Florida's climate.",
    category: 'tips',
    date: '2024-01-12',
    readTime: '4 min',
    author: 'A-Aaron\'s',
    icon: Droplets
  },
  {
    id: 'emergency-signs',
    title: "5 Signs Your Solar System Needs Emergency Service",
    excerpt: "Learn the warning signs that indicate your solar system needs immediate professional attention.",
    category: 'emergency',
    date: '2024-01-10',
    readTime: '6 min',
    author: 'A-Aaron\'s',
    icon: AlertTriangle
  },
  {
    id: 'florida-solar-transition',
    title: "Transitioning from Florida Solar East? Here's What to Know",
    excerpt: "Everything you need to know about making a smooth transition to A-Aaron's expert solar service.",
    category: 'news',
    date: '2024-01-08',
    readTime: '3 min',
    author: 'A-Aaron\'s',
    icon: Shield
  },
  {
    id: 'pv-maintenance',
    title: "PV System Maintenance: A Complete Guide",
    excerpt: "Comprehensive guide to maintaining your photovoltaic system for optimal performance.",
    category: 'maintenance',
    date: '2024-01-05',
    readTime: '7 min',
    author: 'A-Aaron\'s',
    icon: Zap
  },
  {
    id: 'customer-success',
    title: "Customer Success Story: From Issues to Excellence",
    excerpt: "See how A-Aaron's turned a problematic solar system into a high-performing asset.",
    category: 'news',
    date: '2024-01-03',
    readTime: '4 min',
    author: 'A-Aaron\'s',
    icon: ThumbsUp
  },
  {
    id: 'aquatherm-solar-systems',
    title: "Understanding Aquatherm in Solar Hot Water Systems",
    excerpt: "Learn about Aquatherm's innovative polypropylene piping systems and how they're revolutionizing solar water heating in Florida homes.",
    category: 'technical',
    date: '2024-01-20',
    readTime: '8 min',
    author: 'A-Aaron\'s',
    icon: Sun
  },
  {
    id: 'heat-pump-efficiency',
    title: "Maximizing Heat Pump Efficiency in Solar Systems",
    excerpt: "Discover how to optimize your heat pump's performance and integrate it effectively with your solar heating system for maximum efficiency.",
    category: 'technical',
    date: '2024-01-22',
    readTime: '7 min',
    author: 'A-Aaron\'s',
    icon: Zap
  }
]

const categoryColors = {
  maintenance: 'bg-blue-500',
  tips: 'bg-green-500',
  news: 'bg-purple-500',
  emergency: 'bg-red-500',
  technical: 'bg-indigo-500'
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4
    }
  }
}

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="container mx-auto px-4 text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Solar Maintenance Tips & News
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Expert advice, maintenance tips, and updates from A-Aaron's Florida Solar
          </p>
        </motion.div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className={`px-3 py-1 rounded-full text-sm text-white ${categoryColors[post.category]}`}>
                      {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
                    </span>
                    <post.icon className="w-5 h-5" style={{ color: theme.colors.accent }} />
                  </div>
                  
                  <h2 className="text-xl font-bold mb-3" style={{ color: theme.colors.primary }}>
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-sm text-gray-500 gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <motion.a
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
                    whileHover={{ x: 5 }}
                  >
                    Read More <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
} 
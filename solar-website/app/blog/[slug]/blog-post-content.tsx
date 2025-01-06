'use client'

import { motion } from 'framer-motion'
import { 
  Calendar, Clock, User, ArrowLeft,
  Wrench, AlertTriangle,
  CheckCircle
} from 'lucide-react'
import { type BlogContent } from './blog-data'

// Utility function to generate unique keys
const generateKey = (prefix: string, content: string, index: number) => 
  `${prefix}-${content.slice(0, 20).toLowerCase().replace(/\W+/g, '-')}-${index}`

export function BlogPostContent({ post }: Readonly<{ post: BlogContent }>) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      <div className="mb-8">
        <a href="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-800">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Blog
        </a>
      </div>

      <article>
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap gap-4 text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {post.readTime}
            </div>
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {post.author}
            </div>
          </div>
        </header>

        <div className="prose max-w-none">
          {post.content.map((section, index) => {
            switch (section.type) {
              case 'paragraph':
                return (
                  <p key={generateKey('p', section.content, index)} className="mb-4">
                    {section.content}
                  </p>
                )
              case 'heading':
                return (
                  <h2 key={generateKey('h', section.content, index)} className="text-2xl font-bold mt-8 mb-4">
                    {section.content}
                  </h2>
                )
              case 'list':
                return (
                  <div key={generateKey('l', section.content || 'list', index)} className="mb-4">
                    {section.content && (
                      <p className="mb-2">{section.content}</p>
                    )}
                    <ul className="list-disc pl-6">
                      {section.items?.map((item, itemIndex) => (
                        <li key={generateKey('li', item, itemIndex)} className="mb-2">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              case 'tip':
                return (
                  <div key={generateKey('t', section.content, index)} className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                    <div className="flex items-start">
                      <Wrench className="w-5 h-5 text-blue-500 mr-3 mt-1" />
                      <p className="text-blue-700">{section.content}</p>
                    </div>
                  </div>
                )
              case 'warning':
                return (
                  <div key={generateKey('w', section.content, index)} className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-4">
                    <div className="flex items-start">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 mr-3 mt-1" />
                      <p className="text-yellow-700">{section.content}</p>
                    </div>
                  </div>
                )
              case 'success':
                return (
                  <div key={generateKey('s', section.content, index)} className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                      <p className="text-green-700">{section.content}</p>
                    </div>
                  </div>
                )
              default:
                return null
            }
          })}
        </div>
      </article>
    </motion.div>
  )
} 
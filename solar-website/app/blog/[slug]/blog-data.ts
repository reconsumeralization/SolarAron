export interface BlogContent {
  title: string
  date: string
  readTime: string
  author: string
  category: string
  content: {
    type: 'paragraph' | 'heading' | 'list' | 'tip' | 'warning' | 'success'
    content: string
    items?: string[]
  }[]
}

export const blogContent: Record<string, BlogContent> = {
  'solar-maintenance-101': {
    title: "Solar Maintenance 101: Keep Your System Running Smoothly",
    date: "2024-01-15",
    readTime: "5 min",
    author: "A-Aaron's",
    category: "maintenance",
    content: [
      {
        type: 'paragraph',
        content: "Regular maintenance is crucial for keeping your solar system performing at its best. In this comprehensive guide, we'll cover the essential maintenance tasks that every solar system owner should know about."
      },
      {
        type: 'heading',
        content: "Why Regular Maintenance Matters"
      },
      {
        type: 'paragraph',
        content: "Solar systems are a significant investment in your home's energy future. Proper maintenance not only ensures optimal performance but also extends the life of your system and protects your investment."
      },
      {
        type: 'list',
        content: "Key Benefits of Regular Maintenance:",
        items: [
          "Improved system efficiency",
          "Extended system lifespan",
          "Prevention of costly repairs",
          "Consistent energy production",
          "Peace of mind"
        ]
      },
      {
        type: 'tip',
        content: "Schedule professional maintenance at least twice a year to keep your system running at peak efficiency."
      }
    ]
  },
  'aquatherm-solar-systems': {
    title: "Understanding Aquatherm in Solar Hot Water Systems",
    date: "2024-01-20",
    readTime: "8 min",
    author: "A-Aaron's",
    category: "technical",
    content: [
      {
        type: 'paragraph',
        content: "As your trusted solar maintenance expert, I often get questions about Aquatherm systems and their role in solar heating. Let's dive into everything you need to know about these innovative systems and how to maintain them properly."
      },
      {
        type: 'heading',
        content: "What is Aquatherm?"
      },
      {
        type: 'paragraph',
        content: "Aquatherm is a high-quality polypropylene piping system that's revolutionized solar water heating. With a life expectancy of 60+ years and natural insulation properties, it's become a preferred choice for solar hot water systems in Florida homes."
      }
    ]
  },
  'heat-pump-efficiency': {
    title: "Maximizing Heat Pump Efficiency in Solar Systems",
    date: "2024-01-22",
    readTime: "7 min",
    author: "A-Aaron's",
    category: "technical",
    content: [
      {
        type: 'paragraph',
        content: "Heat pumps are a crucial component in modern solar heating systems. Understanding how to optimize their performance can significantly impact your system's efficiency and longevity."
      },
      {
        type: 'heading',
        content: "The Role of Heat Pumps in Solar Systems"
      },
      {
        type: 'paragraph',
        content: "Heat pumps work in conjunction with your solar heating system to maximize energy efficiency. They transfer heat from one place to another, making them ideal for both heating and cooling applications."
      }
    ]
  }
} 
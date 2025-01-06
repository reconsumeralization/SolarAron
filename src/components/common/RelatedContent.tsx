import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface RelatedItem {
  title: string;
  description: string;
  path: string;
  icon?: React.ReactNode;
}

interface RelatedContentProps {
  title: string;
  items: RelatedItem[];
}

export default function RelatedContent({ title, items }: RelatedContentProps) {
  return (
    <div className="bg-gray-50 p-6 rounded-xl">
      <h3 className="text-xl font-semibold text-blue-900 mb-4">{title}</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className="block bg-white p-4 rounded-lg hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex items-start gap-3">
              {item.icon}
              <div className="flex-grow">
                <h4 className="font-medium text-blue-800">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <ArrowRight className="text-blue-500" size={20} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
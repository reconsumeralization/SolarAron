import React from 'react';

import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BreadcrumbsProps {
  serviceName: string;
}

export function Breadcrumbs({ serviceName }: BreadcrumbsProps): React.ReactElement {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
      <Link to="/" className="hover:text-primary transition-colors">
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <Link to="/services" className="hover:text-primary transition-colors">
        Services
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground">{serviceName}</span>
    </nav>
  );
}

import React from 'react';

import type { ServiceDetails } from '../types';

interface ServiceSchemaProps {
  service: ServiceDetails;
}

export function ServiceSchema({ service }: ServiceSchemaProps): React.ReactElement {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'LocalBusiness',
      name: "A-Aaron's Florida Solar",
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Florida',
        addressCountry: 'US'
      }
    },
    areaServed: {
      '@type': 'State',
      name: 'Florida'
    },
    ...(service.price && {
      offers: {
        '@type': 'Offer',
        price: service.price,
        priceCurrency: 'USD'
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

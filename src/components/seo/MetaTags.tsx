import React from 'react';
import { Helmet } from 'react-helmet';

interface MetaTagsProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  path: string;
}

export default function MetaTags({ title, description, keywords = [], image, path }: MetaTagsProps) {
  const siteUrl = 'https://aarons-florida-solar.com';
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og-image.jpg`;

  return (
    <Helmet>
      <title>{`${title} | A-Aaron's Florida Solar`}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image || defaultImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
}
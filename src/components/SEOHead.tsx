import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title: string;
  description: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  noindex?: boolean;
}

const BASE_URL = 'https://www.newedgebrand.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/lovable-uploads/198e2b1f-64ac-4570-82fe-278fb98b54ef.png`;

const SEOHead = ({
  title,
  description,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  noindex = false,
}: SEOHeadProps) => {
  const fullCanonical = canonical
    ? canonical.startsWith('http') ? canonical : `${BASE_URL}${canonical}`
    : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:description" content={ogDescription || description} />
      <meta property="og:image" content={ogImage || DEFAULT_OG_IMAGE} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="New Edge" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle || title} />
      <meta name="twitter:description" content={ogDescription || description} />
      <meta name="twitter:image" content={ogImage || DEFAULT_OG_IMAGE} />
    </Helmet>
  );
};

export default SEOHead;

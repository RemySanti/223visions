import { Helmet } from 'react-helmet-async';
import { DEFAULT_DESCRIPTION, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from '../data/constants';

export function SEOHead({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  image = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
}) {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} | ${SITE_NAME} | Atlanta Photography & Videography`;
  const url = `${SITE_URL}${path}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex, nofollow' : 'index, follow'} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {jsonLd &&
        (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
          <script key={i} type="application/ld+json">
            {JSON.stringify(ld)}
          </script>
        ))}
    </Helmet>
  );
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: '223 Visions',
    description: "Atlanta's premier hybrid photography and videography agency",
    url: SITE_URL,
    email: 'Christian@223visions.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      addressCountry: 'US',
    },
    sameAs: ['https://www.instagram.com/223.visions'],
  };
}

export function serviceSchema(serviceType) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType,
    provider: {
      '@type': 'LocalBusiness',
      name: '223 Visions',
    },
    areaServed: 'Atlanta, GA',
  };
}

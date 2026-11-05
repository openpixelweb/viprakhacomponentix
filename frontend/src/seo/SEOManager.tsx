import { useLocation } from 'react-router';
import { seoPages } from './seoConfig';

/** React 19 hoists title, meta and canonical link elements into document.head. */
export default function SEOManager() {
  const { pathname } = useLocation();
  const routePath = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  const page = seoPages[routePath];
  const origin = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/+$/, '')
    || (typeof window !== 'undefined' ? window.location.origin : '');
  const canonical = `${origin}${routePath}`;
  const title = page?.title || 'Page Not Found | Viprakha Componentix';
  const description = page?.description || 'Explore electronic products and automation solutions from Viprakha Componentix.';
  const indexable = Boolean(page) && routePath !== '/applynow';
  const image = `${origin}/viprakha-fav.png`;

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={indexable ? 'index, follow' : 'noindex, follow'} />
      {indexable && <link rel="canonical" href={canonical} />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Viprakha Componentix" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {routePath === '/' && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'Organization',
        name: 'Viprakha Componentix Pvt Ltd', url: origin,
      }).replace(/</g, '\u003c') }} />}
    </>
  );
}

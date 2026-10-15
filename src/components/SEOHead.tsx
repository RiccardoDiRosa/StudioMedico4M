import React, { useEffect } from 'react';
import { STUDIO_CONFIG } from '../data/studio';

export interface SEOProps {
  title: string;
  description: string;
  canonicalPath: string;
  noindex?: boolean;
  schemaJson?: object;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath,
  noindex = false,
  schemaJson
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // Helper to update or create meta tags
    const setMetaTag = (selector: string, attrName: string, attrVal: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Description & Robots
    setMetaTag('meta[name="description"]', 'name', 'description', description);
    setMetaTag('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow');

    // 3. OpenGraph Tags
    const fullCanonicalUrl = `${STUDIO_CONFIG.canonicalBaseUrl}${canonicalPath === '/' ? '' : canonicalPath}`;
    setMetaTag('meta[property="og:title"]', 'property', 'og:title', title);
    setMetaTag('meta[property="og:description"]', 'property', 'og:description', description);
    setMetaTag('meta[property="og:url"]', 'property', 'og:url', fullCanonicalUrl);
    setMetaTag('meta[property="og:site_name"]', 'property', 'og:site_name', STUDIO_CONFIG.name);
    setMetaTag('meta[property="og:type"]', 'property', 'og:type', 'website');

    // 4. Twitter Cards
    setMetaTag('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'name', 'twitter:title', title);
    setMetaTag('meta[name="twitter:description"]', 'name', 'twitter:description', description);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', fullCanonicalUrl);

    // 6. Schema.org JSON-LD Script Tag
    let scriptElement = document.querySelector('#seo-structured-data') as HTMLScriptElement | null;
    if (schemaJson) {
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.id = 'seo-structured-data';
        scriptElement.type = 'application/ld+json';
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(schemaJson);
    } else if (scriptElement) {
      scriptElement.remove();
    }
  }, [title, description, canonicalPath, noindex, schemaJson]);

  return null;
};

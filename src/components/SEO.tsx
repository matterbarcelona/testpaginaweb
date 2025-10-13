import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  keywords?: string[];
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  jsonLd?: object | object[];
}

const SEO = ({ 
  title, 
  description, 
  path, 
  type = "website", 
  image,
  keywords = [],
  author,
  publishedTime,
  modifiedTime,
  jsonLd
}: SEOProps) => {
  const siteUrl = "https://matter.group";
  const fullUrl = `${siteUrl}${path}`;
  const defaultImage = `${siteUrl}/og/home.jpg`;
  const ogImage = image || defaultImage;
  
  // Ensure title and description are within optimal lengths
  const optimizedTitle = title.length > 60 ? `${title.substring(0, 57)}...` : title;
  const optimizedDescription = description.length > 155 ? `${description.substring(0, 152)}...` : description;
  
  // Base Organization JSON-LD
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    "name": "Matter Group",
    "url": siteUrl,
    "logo": `${siteUrl}/logo.png`,
    "description": "Materiotecas, consultoría y agencia para arquitectura e interiorismo. Conectamos materiales, ideas y personas.",
    "sameAs": [
      "https://www.linkedin.com/company/matter-group",
      "https://www.instagram.com/mattergroup_es",
      "https://www.pinterest.com/mattergroup"
    ],
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "Poblenou",
        "addressLocality": "Barcelona",
        "postalCode": "08018",
        "addressCountry": "ES"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Chamberí",
        "addressLocality": "Madrid",
        "postalCode": "28010",
        "addressCountry": "ES"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "Puerto Deportivo",
        "addressLocality": "Sotogrande",
        "postalCode": "11310",
        "addressCountry": "ES"
      }
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+34-932-000-000",
      "contactType": "customer service",
      "areaServed": "ES",
      "availableLanguage": ["Spanish", "English"]
    }
  };

  // Combine all JSON-LD data
  const allJsonLd = jsonLd 
    ? Array.isArray(jsonLd) 
      ? [organizationJsonLd, ...jsonLd] 
      : [organizationJsonLd, jsonLd]
    : [organizationJsonLd];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{optimizedTitle}</title>
      <meta name="title" content={optimizedTitle} />
      <meta name="description" content={optimizedDescription} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(", ")} />}
      {author && <meta name="author" content={author} />}
      <link rel="canonical" href={fullUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={optimizedTitle} />
      <meta property="og:description" content={optimizedDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={optimizedTitle} />
      <meta property="og:site_name" content="Matter Group" />
      <meta property="og:locale" content="es_ES" />
      
      {/* Article specific tags */}
      {type === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {type === "article" && modifiedTime && (
        <meta property="article:modified_time" content={modifiedTime} />
      )}
      {type === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={optimizedTitle} />
      <meta name="twitter:description" content={optimizedDescription} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={optimizedTitle} />
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="language" content="Spanish" />
      <meta name="revisit-after" content="7 days" />
      <meta name="format-detection" content="telephone=no" />
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Manifest */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Theme color */}
      <meta name="theme-color" content="#B87333" />
      
      {/* JSON-LD Structured Data */}
      {allJsonLd.map((ld, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(ld)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

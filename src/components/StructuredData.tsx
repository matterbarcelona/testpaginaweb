import { Helmet } from "react-helmet";

interface StructuredDataProps {
  type: "organization" | "service" | "product" | "article" | "project" | "faq" | "blog";
  data: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const generateSchema = () => {
    const baseUrl = "https://matter.group";
    
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Matter Group",
          "url": baseUrl,
          "logo": `${baseUrl}/logo.png`,
          "description": "Plataforma profesional de materiales para arquitectura, interiorismo y construcción",
          "sameAs": [
            "https://www.linkedin.com/company/matter-group",
            "https://www.instagram.com/matter.group",
            "https://www.pinterest.com/mattergroup"
          ],
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+34-XXX-XXX-XXX",
            "contactType": "Customer Service",
            "availableLanguage": ["es", "en"]
          },
          "address": [
            {
              "@type": "PostalAddress",
              "streetAddress": "Calle Principal 123",
              "addressLocality": "Madrid",
              "addressRegion": "Madrid",
              "postalCode": "28001",
              "addressCountry": "ES"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Carrer Principal 456",
              "addressLocality": "Barcelona",
              "addressRegion": "Barcelona",
              "postalCode": "08001",
              "addressCountry": "ES"
            },
            {
              "@type": "PostalAddress",
              "streetAddress": "Gran Vía 789",
              "addressLocality": "Valencia",
              "addressRegion": "Valencia",
              "postalCode": "46001",
              "addressCountry": "ES"
            }
          ]
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          "serviceType": data.serviceType,
          "provider": {
            "@type": "Organization",
            "name": "Matter Group",
            "url": baseUrl
          },
          "areaServed": "ES",
          "description": data.description,
          "url": `${baseUrl}${data.url}`
        };

      case "product":
        return {
          "@context": "https://schema.org",
          "@type": "Product",
          "name": data.name,
          "description": data.description,
          "brand": {
            "@type": "Brand",
            "name": data.brand
          },
          "category": data.category,
          "material": data.material,
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "url": `${baseUrl}/biblioteca`
          }
        };

      case "article":
        return {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Person",
            "name": data.author
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "publisher": {
            "@type": "Organization",
            "name": "Matter Group",
            "logo": {
              "@type": "ImageObject",
              "url": `${baseUrl}/logo.png`
            }
          },
          "image": data.image || `${baseUrl}/og-image.jpg`,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${data.url}`
          },
          "keywords": data.keywords?.join(", ")
        };

      case "project":
        return {
          "@context": "https://schema.org",
          "@type": "CreativeWork",
          "name": data.title,
          "description": data.description,
          "creator": {
            "@type": "Organization",
            "name": "Matter Group"
          },
          "dateCreated": data.year,
          "locationCreated": data.location,
          "category": data.category,
          "image": data.image,
          "url": `${baseUrl}/proyectos/${data.slug}`
        };

      case "faq":
        return {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": data.questions.map((q: any) => ({
            "@type": "Question",
            "name": q.question,
            "acceptedAnswer": {
              "@type": "Answer",
              "text": q.answer
            }
          }))
        };

      case "blog":
        return {
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "It Matters Journal",
          "description": "Tendencias, entrevistas y proyectos sobre materialidad contemporánea",
          "url": `${baseUrl}/journal`,
          "publisher": {
            "@type": "Organization",
            "name": "Matter Group"
          }
        };

      default:
        return null;
    }
  };

  const schema = generateSchema();
  
  if (!schema) return null;

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default StructuredData;

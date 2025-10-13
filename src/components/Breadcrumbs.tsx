import { Link, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

interface BreadcrumbsProps {
  customItems?: Array<{ label: string; path?: string }>;
}

const Breadcrumbs = ({ customItems }: BreadcrumbsProps) => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  // Route name mapping
  const routeNames: Record<string, string> = {
    prescriptores: "Prescriptores",
    fabricantes: "Fabricantes",
    constructores: "Constructores",
    biblioteca: "Biblioteca",
    proyectos: "Proyectos",
    journal: "Journal",
    eventos: "Eventos",
    sobre: "Sobre",
    contacto: "Contacto",
  };

  // Build breadcrumb items
  const breadcrumbItems = customItems
    ? [{ label: "Home", path: "/" }, ...customItems]
    : [
        { label: "Home", path: "/" },
        ...pathSegments.map((segment, index) => {
          const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const label = routeNames[segment] || segment;
          return {
            label,
            path: index === pathSegments.length - 1 ? undefined : path,
          };
        }),
      ];

  // Generate JSON-LD BreadcrumbList
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.path && { item: `https://matter.group${item.path}` }),
    })),
  };

  // Don't show breadcrumbs on homepage
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <nav aria-label="breadcrumb" className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Breadcrumb>
            <BreadcrumbList>
              {breadcrumbItems.map((item, index) => (
                <div key={index} className="inline-flex items-center gap-1.5">
                  <BreadcrumbItem>
                    {item.path ? (
                      <BreadcrumbLink asChild>
                        <Link to={item.path}>{item.label}</Link>
                      </BreadcrumbLink>
                    ) : (
                      <BreadcrumbPage>{item.label}</BreadcrumbPage>
                    )}
                  </BreadcrumbItem>
                  {index < breadcrumbItems.length - 1 && (
                    <BreadcrumbSeparator>
                      <ChevronRight />
                    </BreadcrumbSeparator>
                  )}
                </div>
              ))}
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;

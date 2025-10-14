import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import StructuredData from "@/components/StructuredData";
import SkipToContent from "@/components/SkipToContent";
import Breadcrumbs from "@/components/Breadcrumbs";
import PrescriptoresHero from "@/components/prescriptores/PrescriptoresHero";
import KPIsPrescriptores from "@/components/prescriptores/KPIsPrescriptores";
import ProcesoColaboracion from "@/components/prescriptores/ProcesoColaboracion";
import GuiaMuestras from "@/components/prescriptores/GuiaMuestras";
import ProyectosPrescriptores from "@/components/prescriptores/ProyectosPrescriptores";
import FormularioProyecto from "@/components/prescriptores/FormularioProyecto";
import Testimonios from "@/components/prescriptores/Testimonios";
import FAQ from "@/components/prescriptores/FAQ";
import FinalCTA from "@/components/prescriptores/FinalCTA";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Prescriptores = () => {
  useScrollTracking('prescriptores');
  
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Consultoría de materiales para arquitectos e interioristas | Matter Group"
        description="Seleccionamos y enviamos en 24 h los materiales ideales para tus proyectos. Asesoramiento técnico experto, fichas y equivalencias, y acompañamiento en obra."
        path="/prescriptores"
        keywords={[
          "consultoría materiales arquitectos",
          "asesoramiento técnico materiales",
          "muestras materiales 24h",
          "especificación materiales",
          "certificación WELL BREEAM",
          "materiales sostenibles arquitectura"
        ]}
        image="/og/prescriptores.jpg"
      />
      <StructuredData
        type="service"
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Consultoría de materiales para arquitectos e interioristas",
          "provider": { 
            "@type": "Organization", 
            "name": "Matter Group", 
            "url": "https://mattergroup.com" 
          },
          "areaServed": "España",
          "audience": "Architects and interior designers",
          "description": "Seleccionamos y enviamos en 24 h los materiales ideales para tus proyectos. Asesoramiento técnico experto, fichas y equivalencias, y acompañamiento en obra."
        }}
      />
      <StructuredData
        type="faq"
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "¿Cómo funciona el servicio de muestras en 24 h?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Una vez seleccionas los materiales en nuestra biblioteca o con ayuda de nuestro equipo, procesamos tu pedido y enviamos las muestras físicas en un plazo máximo de 24 horas laborables. Puedes recibirlas en tu estudio o recogerlas en nuestras materiotecas."
              }
            },
            {
              "@type": "Question",
              "name": "¿Podéis ayudarme a encontrar equivalencias si un material no llega a tiempo?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutamente. Nuestro equipo técnico está especializado en encontrar alternativas equivalentes que cumplan las mismas especificaciones técnicas, estéticas y normativas. Trabajamos con más de 900 fabricantes, lo que nos permite ofrecer soluciones ágiles ante imprevistos."
              }
            },
            {
              "@type": "Question",
              "name": "¿Ofrecéis asesoramiento técnico durante la obra?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sí. Acompañamos el proyecto desde la especificación hasta la instalación. Nuestro equipo técnico puede resolver dudas de puesta en obra, validar instalaciones y coordinar con el constructor para garantizar que el material se aplique correctamente."
              }
            },
            {
              "@type": "Question",
              "name": "¿Puedo visitar la materioteca con mi cliente?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Por supuesto. Nuestras materiotecas en Barcelona, Madrid y Sotogrande están diseñadas para inspirar. Puedes reservar visitas privadas con tus clientes, donde nuestro equipo os presentará materiales curados específicamente para vuestro proyecto."
              }
            },
            {
              "@type": "Question",
              "name": "¿Tiene coste vuestro servicio de consultoría?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "El servicio de consultoría, asesoramiento técnico y envío de muestras es gratuito para arquitectos e interioristas. Solo facturamos si decides hacer el suministro del material a través de nosotros, con precios competitivos y transparentes."
              }
            }
          ]
        }}
      />
      <SkipToContent />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <PrescriptoresHero />
        <KPIsPrescriptores />
        <ProcesoColaboracion />
        <GuiaMuestras />
        <ProyectosPrescriptores />
        <FormularioProyecto />
        <Testimonios />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Prescriptores;

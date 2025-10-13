import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { analyticsEvents } from "@/lib/analytics";

interface NewsletterSubscribeProps {
  location?: string;
  selectedSerie?: string | null;
}

const NewsletterSubscribe = ({ location = "journal", selectedSerie }: NewsletterSubscribeProps) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  // Contextual CTA text based on selected serie
  const getCtaText = () => {
    if (selectedSerie === "Tendencias 2025") {
      return {
        title: "Suscríbete a Tendencias",
        description: "Mantente al día con las últimas tendencias en materiales y diseño."
      };
    }
    if (selectedSerie === "Best Practices") {
      return {
        title: "Suscríbete a Best Practices",
        description: "Recibe guías prácticas y consejos de expertos en especificación de materiales."
      };
    }
    if (selectedSerie === "Entrevistas Estudio") {
      return {
        title: "Suscríbete a Entrevistas",
        description: "Conoce la visión de los estudios más innovadores sobre arquitectura y materialidad."
      };
    }
    return {
      title: "Suscríbete al It Matters Journal",
      description: "Recibe novedades mensuales sobre materiales, arquitectura y sostenibilidad."
    };
  };

  const ctaContent = getCtaText();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!nombre || !email) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      analyticsEvents.newsletterSubmit(location);
      toast({
        title: "¡Gracias!",
        description: "Te mantendremos al día con las novedades de Matter.",
      });
      setNombre("");
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <section id="newsletter" className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            {ctaContent.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            {ctaContent.description}
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                disabled={loading}
              />
              <Input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <Button 
              type="submit" 
              size="lg" 
              disabled={loading}
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
            >
              {loading ? "Enviando..." : "Suscribirme"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscribe;

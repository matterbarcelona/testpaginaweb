import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { analyticsEvents } from "@/lib/analytics";

interface NewsletterSubscribeProps {
  location?: string;
}

const NewsletterSubscribe = ({ location = "journal" }: NewsletterSubscribeProps) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
            Suscríbete al It Matters Journal
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Recibe novedades mensuales sobre materiales, arquitectura y sostenibilidad.
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

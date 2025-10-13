import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ArticuloCTA = () => {
  const scrollToNewsletter = () => {
    const newsletter = document.getElementById('newsletter');
    newsletter?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-balance">
            Sigue explorando la materialidad contemporánea
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Descubre materiales innovadores y proyectos que transforman espacios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/biblioteca">
              <Button 
                size="lg"
                className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
              >
                Explorar materiales
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToNewsletter}
              className="w-full sm:w-auto hover:scale-105 transition-transform duration-300"
            >
              Suscribirme al Journal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticuloCTA;

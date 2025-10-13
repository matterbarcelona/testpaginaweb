import { Button } from "@/components/ui/button";

const JournalHero = () => {
  const scrollToNewsletter = () => {
    const newsletter = document.getElementById('newsletter');
    newsletter?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="py-20 md:py-32"
      aria-label="It Matters Journal"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          {/* Hero visual */}
          <div className="aspect-[21/9] md:aspect-[16/6] bg-muted rounded-lg mb-12 overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/20" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground">
            It Matters Journal
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
            Tendencias, entrevistas y proyectos con foco en la materialidad contemporánea.
          </p>
          <Button 
            size="lg"
            onClick={scrollToNewsletter}
            className="hover:scale-105 transition-transform duration-300"
          >
            Suscribirme al Journal
          </Button>
        </div>
      </div>
    </section>
  );
};

export default JournalHero;

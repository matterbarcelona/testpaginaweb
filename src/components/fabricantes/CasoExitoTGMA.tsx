import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";
import casoFlorim from "@/assets/caso-florim-stand.jpg";
import logosFabricantes from "@/assets/logos-fabricantes.jpg";

const CasoExitoTGMA = () => {
  return (
    <section 
      id="case-tgma"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="case-heading"
    >
      <div className="container mx-auto px-6">
        <h2 
          id="case-heading"
          className="text-3xl md:text-5xl font-bold mb-6 text-foreground text-center text-balance"
        >
          Historias de marcas que ya confían en TGMA
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-16 max-w-2xl mx-auto">
          Resultados reales, medibles y sostenibles en el tiempo
        </p>

        {/* Caso destacado: Florim */}
        <div className="max-w-5xl mx-auto mb-16">
          <article className="bg-background border border-line rounded-lg overflow-hidden hover:shadow-lg hover:shadow-accent/10 transition-all duration-300 group">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Imagen */}
              <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                <img 
                  src={casoFlorim} 
                  alt="Stand de Florim Ceramiche en evento TGMA con displays de productos cerámicos"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-background">Caso de éxito</Badge>
                </div>
              </div>

              {/* Contenido */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Florim Ceramiche
                </h3>
                
                <div className="grid grid-cols-3 gap-4 mb-6 pb-6 border-b border-line">
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">+120</div>
                    <p className="text-sm text-muted-foreground">Leads cualificados</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">14</div>
                    <p className="text-sm text-muted-foreground">Especificaciones</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent mb-1">6</div>
                    <p className="text-sm text-muted-foreground">Meses</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-highlight/50 border-l-2 border-accent pl-4 py-3">
                    <p className="text-sm font-medium text-foreground mb-1">Objetivo</p>
                    <p className="text-sm text-muted-foreground">
                      Visibilidad con estudios líderes y generación constante de leads cualificados
                    </p>
                  </div>
                  <div className="bg-highlight/50 border-l-2 border-accent pl-4 py-3">
                    <p className="text-sm font-medium text-foreground mb-1">Resultado</p>
                    <p className="text-sm text-muted-foreground">
                      Leads constantes y 14 especificaciones confirmadas en 6 meses
                    </p>
                  </div>
                </div>

                <Button
                  variant="ghost"
                  className="group/btn p-0 h-auto hover:bg-transparent self-start"
                  onClick={() => {
                    analyticsEvents.trackEvent('case_card_click', { 
                      brand: 'Florim Ceramiche',
                      location: 'case_tgma'
                    });
                    window.location.href = '/proyectos/florim';
                  }}
                  data-analytics="case_card_click"
                  data-label="Florim Ceramiche"
                  aria-label="Ver proyecto completo de Florim Ceramiche"
                >
                  <span className="text-accent group-hover/btn:underline">Ver proyecto completo</span>
                  <ArrowRight className="w-4 h-4 ml-1 inline group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </article>
        </div>

        {/* LogoWall secundario */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold text-center mb-8 text-foreground">
            Otras marcas que forman parte del ecosistema TGMA
          </h3>
          <div 
            className="bg-background border border-line rounded-lg p-8 cursor-default hover:border-accent/50 transition-all duration-300"
            onClick={() => {
              analyticsEvents.trackEvent('logo_wall_interaction', { 
                category: 'fabricantes_tgma',
                location: 'case_tgma'
              });
            }}
            data-analytics="logo_wall_interaction"
            data-label="Fabricantes TGMA"
          >
            <img
              src={logosFabricantes}
              alt="Logos de fabricantes partners TGMA: Florim, Cosentino, Porcelanosa, Laminam, Kerakoll, FMG"
              className="w-full h-auto opacity-80 hover:opacity-100 transition-opacity"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CasoExitoTGMA;

import tgmaEventoShowroom from "@/assets/tgma-evento-showroom.jpg";

const QueEsTGMA = () => {
  return (
    <section 
      id="intro-tgma"
      className="py-20 md:py-32 bg-surface"
      aria-labelledby="intro-tgma-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 
            id="intro-tgma-heading"
            className="text-3xl md:text-5xl font-bold mb-8 text-foreground text-balance text-center"
          >
            Qué es TGMA
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            TGMA es el puente entre tu marca y los prescriptores que crean los espacios del futuro. Desde nuestras materiotecas y red de eventos, te ayudamos a posicionarte en los estudios más influyentes, creando contenido, experiencias y relaciones que convierten inspiración en especificación.
          </p>
          
          {/* TGMA eventos collage */}
          <div className="aspect-[16/9] rounded-lg overflow-hidden shadow-lg border border-line">
            <img 
              src={tgmaEventoShowroom} 
              alt="Evento TGMA con arquitectos networking en showroom de materiales" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueEsTGMA;

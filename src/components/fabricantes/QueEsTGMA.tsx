const QueEsTGMA = () => {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-balance text-center">
            TGMA es el puente entre tu marca y los prescriptores que crean los espacios del futuro.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center mb-12">
            Desde nuestras materiotecas y red de eventos, te ayudamos a posicionar tu marca en los estudios más influyentes. Creamos contenido, experiencias y relaciones que convierten inspiración en especificación.
          </p>
          
          {/* Visual placeholder for images/collage */}
          <div className="aspect-[16/9] bg-muted rounded-lg overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-muted-foreground">
              <span className="text-sm">Eventos TGMA · Arquitectos en showroom · Productos destacados</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QueEsTGMA;

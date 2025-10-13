import categoriasImg from "@/assets/categorias-materiales.jpg";

const CategoriasDestacadas = () => {
  const categorias = [
    {
      title: "Pavimentos sostenibles",
      description: "Maderas certificadas, terrazo reciclado y linóleo natural",
      filter: "Pavimento",
    },
    {
      title: "Revestimientos técnicos",
      description: "Porcelánicos, piedra natural y microcemento",
      filter: "Revestimiento",
    },
    {
      title: "Maderas naturales",
      description: "Roble, nogal y acabados FSC certificados",
      filter: "FSC",
    },
    {
      title: "Superficies acústicas",
      description: "Textiles, paneles y vidrio con alto rendimiento",
      filter: "Acústica",
    },
  ];

  const handleCategoryClick = (filter: string) => {
    const buscador = document.getElementById('buscador');
    if (buscador) {
      buscador.scrollIntoView({ behavior: 'smooth' });
      // TODO: Programmatically apply filter (requires state management)
    }
  };

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground text-balance">
          Explora nuestras categorías destacadas.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto">
          {categorias.map((categoria, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCategoryClick(categoria.filter)}
            >
              <div className="aspect-[3/4] relative overflow-hidden bg-muted">
                <img 
                  src={categoriasImg} 
                  alt={categoria.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors duration-300">
                    {categoria.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {categoria.description}
                  </p>
                  <span className="text-accent text-sm font-medium inline-flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                    Ver materiales
                    <span className="transition-transform group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriasDestacadas;

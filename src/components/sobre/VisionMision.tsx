const VisionMision = () => {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Visión */}
            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-copper"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Visión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Ser el referente europeo en materialidad arquitectónica, creando
                un ecosistema donde fabricantes, prescriptores y constructores
                encuentren las soluciones más innovadoras y sostenibles para
                transformar el espacio construido.
              </p>
            </div>

            {/* Misión */}
            <div className="p-8 bg-card border border-border rounded-lg">
              <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="w-6 h-6 text-copper"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-foreground">Misión</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Facilitar la especificación, distribución y visibilidad de
                materiales de calidad mediante materiotecas físicas, asesoramiento
                experto y conexiones estratégicas que optimicen tiempo, costes y
                resultados en cada proyecto.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMision;

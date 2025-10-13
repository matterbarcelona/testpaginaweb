import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselItem {
  imagen: string;
  caption: string;
}

interface ProyectoCarouselProps {
  items: CarouselItem[];
}

const ProyectoCarousel = ({ items }: ProyectoCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Detalles del proyecto
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Explora cada aspecto de la ejecución
          </p>

          <div className="relative">
            {/* Carousel container */}
            <div className="aspect-video bg-muted rounded-lg overflow-hidden relative">
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">
                  Imagen {currentIndex + 1} de {items.length}
                </span>
              </div>

              {/* Navigation buttons */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                onClick={goToPrevious}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={20} />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background"
                onClick={goToNext}
                aria-label="Siguiente imagen"
              >
                <ChevronRight size={20} />
              </Button>

              {/* Counter */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-background/90 px-4 py-2 rounded-full text-sm font-medium">
                {currentIndex + 1} / {items.length}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-6 text-center">
              <p className="text-base text-foreground font-medium">
                {items[currentIndex].caption}
              </p>
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {items.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-copper w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProyectoCarousel;

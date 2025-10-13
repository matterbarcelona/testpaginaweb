import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AntesDepuesProps {
  imagenAntes: string;
  imagenDespues: string;
}

const AntesDepues = ({ imagenAntes, imagenDespues }: AntesDepuesProps) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, containerRect: DOMRect) => {
    const x = clientX - containerRect.left;
    const percentage = (x / containerRect.width) * 100;
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const containerRect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, containerRect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const containerRect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, containerRect);
  };

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Antes y después
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Desliza para comparar el estado inicial y el resultado final
          </p>

          <div
            className="relative aspect-[16/9] overflow-hidden rounded-lg cursor-ew-resize select-none"
            onMouseMove={handleMouseMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchMove={handleTouchMove}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* Imagen "Después" (background) */}
            <div className="absolute inset-0 bg-muted">
              <div className="w-full h-full bg-gradient-to-br from-accent/20 to-muted flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Después</span>
              </div>
            </div>

            {/* Imagen "Antes" (overlay clipped) */}
            <div
              className="absolute inset-0 bg-muted"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                <span className="text-sm text-muted-foreground">Antes</span>
              </div>
            </div>

            {/* Slider line */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white shadow-2xl"
              style={{ left: `${sliderPosition}%` }}
            >
              {/* Handle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-xl flex items-center justify-center">
                <ChevronLeft className="text-foreground absolute -left-1" size={20} />
                <ChevronRight className="text-foreground absolute -right-1" size={20} />
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 bg-background/90 px-3 py-1 rounded-full text-xs font-semibold">
              Antes
            </div>
            <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-xs font-semibold">
              Después
            </div>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Arrastra el control central para comparar ambas imágenes
          </p>
        </div>
      </div>
    </section>
  );
};

export default AntesDepues;

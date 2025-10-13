import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card/95 backdrop-blur-md border-t border-border p-4 shadow-2xl animate-slide-in-right">
      <div className="flex gap-3">
        <Button className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" size="sm">
          Solicitar muestra
        </Button>
        <Button variant="secondary" className="flex-1 rounded-full shadow-lg hover:shadow-xl transition-all duration-300" size="sm">
          Contactar
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;

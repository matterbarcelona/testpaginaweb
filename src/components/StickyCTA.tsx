import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-card border-t border-border p-4 shadow-lg">
      <div className="flex gap-3">
        <Button className="flex-1" size="sm">
          Solicitar muestra
        </Button>
        <Button variant="secondary" className="flex-1" size="sm">
          Contactar
        </Button>
      </div>
    </div>
  );
};

export default StickyCTA;

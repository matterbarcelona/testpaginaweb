import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe."
        path="/404"
      />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl animate-fade-in">
          <h1 className="text-9xl font-bold text-accent mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Página no encontrada
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Lo sentimos, la página que buscas no existe o ha sido movida.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button 
              size="lg" 
              onClick={() => window.location.href = '/'}
              aria-label="Volver al inicio"
            >
              Volver al inicio
            </Button>
            <Button 
              variant="secondary" 
              size="lg"
              onClick={() => window.location.href = '/biblioteca'}
              aria-label="Explorar materiales"
            >
              Explorar materiales
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

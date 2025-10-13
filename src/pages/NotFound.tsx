import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Página no encontrada"
        description="La página que buscas no existe o ha sido movida."
        path="/404"
      />
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 visual */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[12rem] font-bold text-accent/20 leading-none">
              404
            </h1>
          </div>
          
          {/* Content */}
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Página no encontrada
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Te invitamos a explorar nuestros materiales o volver al inicio.
          </p>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/">
              <Button size="lg" className="w-full sm:w-auto gap-2">
                <Home size={20} />
                Volver al inicio
              </Button>
            </Link>
            <Link to="/biblioteca">
              <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
                <ArrowLeft size={20} />
                Explorar materiales
              </Button>
            </Link>
          </div>
          
          {/* Quick links */}
          <div className="mt-16 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              ¿Buscabas alguna de estas páginas?
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/prescriptores" className="text-sm text-accent hover:underline">
                Prescriptores
              </Link>
              <Link to="/fabricantes" className="text-sm text-accent hover:underline">
                Fabricantes
              </Link>
              <Link to="/constructores" className="text-sm text-accent hover:underline">
                Constructores
              </Link>
              <Link to="/proyectos" className="text-sm text-accent hover:underline">
                Proyectos
              </Link>
              <Link to="/journal" className="text-sm text-accent hover:underline">
                Journal
              </Link>
              <Link to="/contacto" className="text-sm text-accent hover:underline">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;

import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import posts from "@/data/posts.json";

const Journal = () => {
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(
    null
  );

  const categorias = ["Todos", "Productos", "Proyectos", "Entrevistas"];

  const filteredPosts = posts.filter((post) => {
    if (!selectedCategoria || selectedCategoria === "Todos") return true;
    return post.categoria === selectedCategoria;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-foreground">
              It Matters Journal
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Tendencias, entrevistas y proyectos con foco en materialidad.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-3">
            {categorias.map((cat) => (
              <Badge
                key={cat}
                variant={selectedCategoria === cat ? "default" : "outline"}
                className="cursor-pointer px-4 py-2"
                onClick={() => setSelectedCategoria(cat)}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Grid de Posts */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Link
                key={post.id}
                to={`/journal/${post.slug}`}
                className="group"
              >
                <div className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                  <div className="aspect-[16/9] bg-muted"></div>
                  <div className="p-6">
                    <Badge variant="secondary" className="mb-3">
                      {post.categoria}
                    </Badge>
                    <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      · {post.author}
                    </p>
                    <p className="text-muted-foreground">{post.resumen}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Suscríbete al Journal
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Novedades mensuales de materiales, proyectos y tendencias.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                className="flex-1"
              />
              <Button>Suscribirme</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Journal;

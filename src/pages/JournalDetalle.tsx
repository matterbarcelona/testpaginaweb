import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import posts from "@/data/posts.json";

const JournalDetalle = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">
            Artículo no encontrado
          </h1>
          <Link to="/journal">
            <Button>Volver al Journal</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al Journal
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              {post.categoria}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {post.title}
            </h1>
            <div className="flex items-center gap-4 text-muted-foreground mb-8">
              <span>{post.author}</span>
              <span>•</span>
              <span>
                {new Date(post.date).toLocaleDateString("es-ES", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            </div>
            <div className="aspect-[21/9] bg-muted rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg prose-invert max-w-none">
              <p className="text-lg text-muted-foreground leading-relaxed">
                {post.body}
              </p>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Artículos relacionados */}
      {relatedPosts.length > 0 && (
        <section className="py-20 bg-card">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Artículos relacionados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  to={`/journal/${relatedPost.slug}`}
                  className="group"
                >
                  <div className="bg-background border border-border rounded-lg overflow-hidden hover:border-accent transition-colors">
                    <div className="aspect-[16/9] bg-muted"></div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2">
                        {relatedPost.categoria}
                      </Badge>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default JournalDetalle;

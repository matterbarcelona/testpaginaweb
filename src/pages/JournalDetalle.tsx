import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import posts from "@/data/posts.json";
import MaterialesMencionados from "@/components/journal/MaterialesMencionados";
import ArticuloCTA from "@/components/journal/ArticuloCTA";
import NewsletterSubscribe from "@/components/journal/NewsletterSubscribe";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const JournalDetalle = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useScrollTracking(`journal_${slug}`);

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

  const relatedPosts = posts
    .filter((p) => p.id !== post.id && p.categoria === post.categoria)
    .slice(0, 3);

  // Example material names that could be mentioned in articles
  const materialesMencionados = post.id === "tendencias-materiales-2025" 
    ? ["Porcelánico Maxfine", "Panel Acústico WoodWool"] 
    : [];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.resumen}
        path={`/journal/${post.slug}`}
        type="article"
      />
      <ScrollProgress />
      <Navbar />

      {/* Breadcrumb */}
      <section className="py-6 border-b border-border">
        <div className="container mx-auto px-6">
          <Link
            to="/journal"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft size={20} />
            Volver al Journal
          </Link>
        </div>
      </section>

      <main id="main-content">
        {/* Hero */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              {/* Cover image */}
              <div className="aspect-[21/9] md:aspect-[16/6] bg-muted rounded-lg mb-8 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/20" />
              </div>

              {/* Meta */}
              <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
                {post.categoria}
              </Badge>
              
              {/* Title */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground leading-tight">
                {post.title}
              </h1>
              
              {/* Author & Date */}
              <div className="flex flex-wrap items-center gap-3 text-lg text-muted-foreground mb-8 pb-8 border-b border-border">
                <span className="font-medium">{post.author}</span>
                <span>·</span>
                <span>
                  {new Date(post.date).toLocaleDateString("es-ES", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg prose-invert max-w-none">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-accent first-letter:mr-1 first-letter:float-left">
                  {post.body}
                </p>

                {/* Example blockquote for editorial style */}
                <blockquote className="border-l-4 border-accent bg-accent/5 pl-6 py-4 my-8 italic text-xl text-foreground">
                  "La materialidad es el puente entre la visión arquitectónica y la experiencia sensorial del espacio."
                </blockquote>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-border">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materiales mencionados */}
        <MaterialesMencionados 
          materialNames={materialesMencionados}
          articleSlug={post.slug}
        />

        {/* CTA */}
        <ArticuloCTA />

        {/* Artículos relacionados */}
        {relatedPosts.length > 0 && (
          <section className="py-12 md:py-20 border-t border-border">
            <div className="container mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">
                Artículos relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    to={`/journal/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300">
                      <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/10 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-6">
                        <Badge variant="secondary" className="mb-3 bg-accent/10 text-accent border-accent/20">
                          {relatedPost.categoria}
                        </Badge>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                          {relatedPost.resumen}
                        </p>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Newsletter */}
        <NewsletterSubscribe location={`journal_article_${post.slug}`} />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default JournalDetalle;

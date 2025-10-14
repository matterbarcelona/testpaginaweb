import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { analyticsEvents } from "@/lib/analytics";
import { useEffect, useRef, useState } from "react";
import postsData from "@/data/posts.json";

const Perspectivas = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          analyticsEvents.revealSection('perspectivas', 'home');
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Take first 3 posts
  const featuredPosts = postsData.slice(0, 3);

  return (
    <section
      id="perspectivas"
      ref={sectionRef}
      className="py-20 md:py-28 bg-background"
      aria-labelledby="perspectivas-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className={`text-center mb-16 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <h2 id="perspectivas-heading" className="text-3xl md:text-5xl font-bold mb-6 text-foreground">
              Perspectivas Matter
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Tendencias, materiales sostenibles y buenas prácticas que están transformando la arquitectura y el diseño.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredPosts.map((post, index) => (
              <article
                key={post.id}
                itemScope
                itemType="https://schema.org/BlogPosting"
                className={`group bg-surface rounded-lg overflow-hidden border border-line hover:border-accent/40 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
                tabIndex={0}
              >
                {/* Image */}
                <div className="aspect-[3/2] overflow-hidden bg-muted">
                  <img
                    src={post.cover}
                    alt={`Portada artículo ${post.title}`}
                    itemProp="image"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  <Badge className="mb-3 bg-accent/10 text-accent border-accent/20 hover:bg-accent/20">
                    {post.categoria}
                  </Badge>

                  {/* Title */}
                  <h3 
                    className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2"
                    itemProp="headline"
                  >
                    {post.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3 leading-relaxed">
                    {post.resumen}
                  </p>

                  {/* Metadata */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                    <time dateTime={post.date} itemProp="datePublished">
                      {new Date(post.date).toLocaleDateString('es-ES', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </time>
                    <span>·</span>
                    <span itemProp="author">{post.author}</span>
                  </div>

                  {/* CTA */}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="group/btn p-0 h-auto text-accent hover:text-accent-foreground"
                    onClick={() => {
                      analyticsEvents.articleClick(post.slug, post.categoria, 'home_perspectivas');
                      window.location.href = `/journal/${post.slug}`;
                    }}
                    aria-label={`Leer artículo: ${post.title}`}
                  >
                    Leer artículo
                    <span className="inline-block transition-transform group-hover/btn:translate-x-1 ml-1" aria-hidden="true">→</span>
                  </Button>
                </div>
              </article>
            ))}
          </div>

          {/* Global CTA */}
          <div className={`text-center transition-all duration-500 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => {
                analyticsEvents.trackEvent('cta_click', {
                  label: 'Leer más en el Journal',
                  location: 'perspectivas_home',
                  type: 'secondary'
                });
                window.location.href = '/journal';
              }}
              aria-label="Ver todos los artículos del Journal"
            >
              Leer más en el Journal
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Perspectivas;

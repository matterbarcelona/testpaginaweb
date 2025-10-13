import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { analyticsEvents } from "@/lib/analytics";

interface Post {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  categoria: string;
  cover: string;
  resumen: string;
  tags: string[];
}

interface JournalGridProps {
  posts: Post[];
}

const JournalGrid = ({ posts }: JournalGridProps) => {
  return (
    <section className="py-12 md:py-20">
      <div className="container mx-auto px-6">
        {posts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground">
              No se encontraron artículos con estos filtros.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.id}
                to={`/journal/${post.slug}`}
                className="group"
                onClick={() => analyticsEvents.journalArticleClick(post.slug, post.categoria)}
              >
                <article className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-[16/9] bg-muted relative overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-muted via-muted/70 to-accent/10 group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                      <span className="text-accent font-semibold">Leer más</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <Badge variant="secondary" className="mb-3 w-fit bg-accent/10 text-accent border-accent/20">
                      {post.categoria}
                    </Badge>
                    
                    <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-accent transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {new Date(post.date).toLocaleDateString("es-ES", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      · {post.author}
                    </p>
                    
                    <p className="text-muted-foreground line-clamp-3 mb-4 flex-1">
                      {post.resumen}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span 
                          key={tag}
                          className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JournalGrid;

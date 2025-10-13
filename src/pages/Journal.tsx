import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import ScrollProgress from "@/components/ScrollProgress";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import JournalHero from "@/components/journal/JournalHero";
import JournalFiltros from "@/components/journal/JournalFiltros";
import JournalGrid from "@/components/journal/JournalGrid";
import NewsletterSubscribe from "@/components/journal/NewsletterSubscribe";
import posts from "@/data/posts.json";
import { useScrollTracking } from "@/hooks/useScrollTracking";

const Journal = () => {
  const [selectedCategoria, setSelectedCategoria] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  useScrollTracking('journal');

  const filteredPosts = posts.filter((post) => {
    // Filter by category
    const categoriaMatch = !selectedCategoria || post.categoria === selectedCategoria;
    
    // Filter by search query
    const searchMatch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.resumen.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return categoriaMatch && searchMatch;
  });

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="It Matters Journal | Inspiración y conocimiento sobre materiales"
        description="Tendencias, entrevistas y proyectos sobre arquitectura, interiorismo y materialidad contemporánea."
        path="/journal"
      />
      <ScrollProgress />
      <Navbar />
      <Breadcrumbs />

      <main id="main-content">
        <JournalHero />
        <JournalFiltros 
          selectedCategoria={selectedCategoria}
          onCategoriaChange={setSelectedCategoria}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <JournalGrid posts={filteredPosts} />
        <NewsletterSubscribe location="journal_listing" />
      </main>

      <Footer />
      <StickyCTA />
    </div>
  );
};

export default Journal;

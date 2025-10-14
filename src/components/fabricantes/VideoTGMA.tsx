import { Play, Volume2, VolumeX } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { analyticsEvents } from "@/lib/analytics";

const VideoTGMA = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasTrackedPlay, setHasTrackedPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            analyticsEvents.trackEvent('section_view', {
              section: 'video_tgma',
              path: window.location.pathname
            });
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
        if (!hasTrackedPlay) {
          analyticsEvents.trackEvent('video_play', {
            label: 'video_tgma_overview',
            location: 'fabricantes_page'
          });
          setHasTrackedPlay(true);
        }
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="video-tgma"
      className="py-20 md:py-32 bg-highlight"
      aria-labelledby="video-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2
            id="video-heading"
            className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance"
          >
            Por qué TGMA funciona para las marcas de materiales
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Una visión de nuestro ecosistema: materiotecas, contenido y conexión real con prescriptores
          </p>
        </div>

        {/* Placeholder para vídeo futuro */}
        <div className="relative max-w-5xl mx-auto aspect-video rounded-lg overflow-hidden bg-surface border-2 border-line shadow-lg">
          {/* Placeholder image */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface via-highlight to-surface">
            <div className="text-center space-y-6 p-8">
              <div className="w-20 h-20 mx-auto rounded-full bg-accent/10 flex items-center justify-center border-2 border-accent/30">
                <Play className="w-10 h-10 text-accent" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-2xl font-semibold text-foreground mb-2">
                  Vídeo de presentación TGMA
                </p>
                <p className="text-muted-foreground max-w-lg mx-auto">
                  Próximamente: recorrido visual por nuestras materiotecas, eventos y resultados reales con fabricantes partner (2:30 min)
                </p>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/5 border border-accent/20 rounded-lg text-sm text-muted-foreground">
                <span className="w-2 h-2 rounded-full bg-warning animate-pulse" />
                TODO: Subir vídeo al CMS
              </div>
            </div>
          </div>

          {/* Video element (commented out until asset is ready) */}
          {/* 
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            poster="/media/tgma-overview-poster.webp"
            playsInline
            preload="metadata"
            aria-label="Vídeo presentación TGMA"
          >
            <source src="/media/tgma-overview.mp4" type="video/mp4" />
            <source src="/media/tgma-overview.webm" type="video/webm" />
            <track
              kind="subtitles"
              src="/media/tgma-overview-es.vtt"
              srcLang="es"
              label="Español"
            />
            Tu navegador no soporta la reproducción de vídeo.
          </video>

          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent pointer-events-none" />

          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between gap-4">
            <button
              onClick={handlePlay}
              className="w-14 h-14 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-all duration-300 hover:scale-105 shadow-xl"
              aria-label={isPlaying ? "Pausar vídeo" : "Reproducir vídeo"}
            >
              {isPlaying ? (
                <Pause className="w-6 h-6 text-foreground" strokeWidth={1.5} />
              ) : (
                <Play className="w-6 h-6 text-foreground ml-1" strokeWidth={1.5} />
              )}
            </button>

            <button
              onClick={handleMute}
              className="w-12 h-12 rounded-full bg-background/90 hover:bg-background flex items-center justify-center transition-all duration-300 shadow-lg"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              ) : (
                <Volume2 className="w-5 h-5 text-foreground" strokeWidth={1.5} />
              )}
            </button>
          </div>
          */}
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6 max-w-2xl mx-auto">
          Descubre cómo trabajamos con fabricantes líderes para posicionar sus materiales ante los estudios de arquitectura más relevantes de España
        </p>
      </div>
    </section>
  );
};

export default VideoTGMA;

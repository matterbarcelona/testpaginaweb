import { useState, useRef, useEffect } from "react";
import { Play, Volume2, VolumeX } from "lucide-react";
import { analyticsEvents } from "@/lib/analytics";

const VideoConstructores = () => {
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
              section: 'video_constructores',
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
          analyticsEvents.trackEvent('video_play_constructores', {
            label: 'video_overview',
            time: 0
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
      id="video-constructores"
      className="section-spacing bg-background"
      aria-labelledby="video-heading"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2
              id="video-heading"
              className="text-h2 font-bold text-foreground mb-6 text-balance"
            >
              Cómo trabajamos con constructores: simple, fiable, coordinado
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Un vistazo a nuestro proceso: un único interlocutor, plazos cumplidos y soporte técnico continuo.
            </p>
          </div>

          {/* Video Placeholder - TODO: Add real video */}
          <div className="relative aspect-video bg-surface border border-line rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-gradient-to-br from-surface to-background">
              <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                <Play className="w-12 h-12 text-accent" aria-hidden="true" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Vídeo en producción
              </h3>
              <p className="text-muted-foreground max-w-md">
                Próximamente: vídeo explicativo del proceso de distribución Matter (2:30 min)
              </p>
              <div className="mt-6 text-sm text-muted-foreground/60">
                TODO CMS: Subir vídeo /media/constructores-overview.mp4 + subtítulos .vtt
              </div>
            </div>

            {/* Commented video element - ready for when asset is available */}
            {/* 
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              poster="/media/constructores-overview-poster.webp"
              aria-label="Vídeo — cómo trabajamos con constructores"
              playsInline
            >
              <source src="/media/constructores-overview.mp4" type="video/mp4" />
              <track
                kind="subtitles"
                src="/media/constructores-overview.vtt"
                srcLang="es"
                label="Español"
              />
              Tu navegador no soporta el elemento de vídeo.
            </video>

            {!isPlaying && (
              <button
                onClick={handlePlay}
                className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                aria-label="Reproducir vídeo"
              >
                <div className="w-20 h-20 rounded-full bg-accent flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-background ml-1" fill="currentColor" />
                </div>
              </button>
            )}

            {isPlaying && (
              <div className="absolute bottom-4 right-4 flex gap-2">
                <button
                  onClick={handleMute}
                  className="w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 flex items-center justify-center transition-colors"
                  aria-label={isMuted ? "Activar sonido" : "Silenciar"}
                >
                  {isMuted ? (
                    <VolumeX className="w-5 h-5 text-white" />
                  ) : (
                    <Volume2 className="w-5 h-5 text-white" />
                  )}
                </button>
                <button
                  onClick={handlePlay}
                  className="px-4 py-2 rounded-full bg-black/60 hover:bg-black/80 text-white text-sm font-medium transition-colors"
                  aria-label="Pausar vídeo"
                >
                  Pausar
                </button>
              </div>
            )}
            */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoConstructores;

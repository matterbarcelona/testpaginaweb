import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { analyticsEvents } from "@/lib/analytics";
// @ts-ignore - mapbox-gl types
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

const SedesConMapa = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState("");
  const [showTokenInput, setShowTokenInput] = useState(true);
  const [mapInitialized, setMapInitialized] = useState(false);

  const sedes = [
    {
      ciudad: "Barcelona",
      direccion: "Poblenou, 08018",
      telefono: "+34 932 000 000",
      coords: [2.1955, 41.3995] as [number, number]
    },
    {
      ciudad: "Madrid",
      direccion: "Chamberí, 28010",
      telefono: "+34 912 000 000",
      coords: [-3.7038, 40.4268] as [number, number]
    },
    {
      ciudad: "Sotogrande",
      direccion: "Puerto Deportivo, 11310",
      telefono: "+34 956 000 000",
      coords: [-5.2861, 36.2833] as [number, number]
    }
  ];

  const initializeMap = (token: string) => {
    if (!mapContainer.current || mapInitialized) return;

    try {
      mapboxgl.accessToken = token;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: "mapbox://styles/mapbox/light-v11",
        center: [-1.5, 39.5], // Center of Spain
        zoom: 5
      });

      // Add navigation controls
      map.current.addControl(new mapboxgl.NavigationControl(), "top-right");

      // Add markers for each sede
      sedes.forEach((sede) => {
        const markerEl = document.createElement("div");
        markerEl.className = "w-8 h-8 bg-copper rounded-full border-4 border-white shadow-lg cursor-pointer hover:scale-110 transition-transform";

        new mapboxgl.Marker(markerEl)
          .setLngLat(sede.coords)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }).setHTML(
              `<div class="p-2">
                <h3 class="font-bold text-foreground mb-1">${sede.ciudad}</h3>
                <p class="text-sm text-muted-foreground">${sede.direccion}</p>
              </div>`
            )
          )
          .addTo(map.current!);
      });

      setMapInitialized(true);
      setShowTokenInput(false);
    } catch (error) {
      console.error("Error initializing map:", error);
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap(mapboxToken.trim());
    }
  };

  const handleReservarVisita = () => {
    analyticsEvents.ctaReservarVisita("sobre_sedes");
    window.location.href = "/contacto?tipo=visita";
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-center">
            Nuestras sedes
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-12">
            Tres materiotecas físicas para que explores, toques y especifiques
          </p>

          {/* Map */}
          <div className="mb-12 rounded-lg overflow-hidden border border-border">
            {showTokenInput ? (
              <div className="bg-background p-8 text-center">
                <MapPin className="w-12 h-12 text-copper mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Mapa interactivo de sedes
                </h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Para ver el mapa, introduce tu token público de Mapbox.{" "}
                  <a
                    href="https://mapbox.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:underline"
                  >
                    Obtén tu token aquí
                  </a>
                </p>
                <form onSubmit={handleTokenSubmit} className="max-w-md mx-auto">
                  <div className="flex gap-2">
                    <Input
                      type="text"
                      placeholder="pk.eyJ1..."
                      value={mapboxToken}
                      onChange={(e) => setMapboxToken(e.target.value)}
                      className="flex-1"
                    />
                    <Button type="submit">Mostrar mapa</Button>
                  </div>
                </form>
              </div>
            ) : (
              <div ref={mapContainer} className="w-full h-96" />
            )}
          </div>

          {/* Sedes grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {sedes.map((sede, index) => (
              <div
                key={index}
                className="p-6 bg-background border border-border rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <MapPin className="text-copper" size={24} />
                  {sede.ciudad}
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <span className="text-sm">{sede.direccion}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone size={16} />
                    <span className="text-sm">{sede.telefono}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center p-8 bg-gradient-to-br from-copper/5 to-background rounded-lg border border-copper/20">
            <Calendar className="w-12 h-12 text-copper mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Visita nuestras materiotecas
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Agenda una cita para explorar nuestra colección de materiales con
              asesoramiento personalizado
            </p>
            <Button size="lg" onClick={handleReservarVisita} className="gap-2">
              <Calendar size={20} />
              Reservar visita
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SedesConMapa;

"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

export interface MapOutlet {
  id: string;
  name: string;
  city: "Mumbai" | "Pune" | "Dubai";
  neighborhood: string;
  concept: string;
  address: string;
  timings: string;
  imageSrc: string;
  slug: string;
  phone: string;
  lat: number;
  lng: number;
  status: "Live" | "Upcoming";
}

interface RealLeafletMapProps {
  outlets: MapOutlet[];
  activeOutlet: MapOutlet;
  onSelectOutlet: (outlet: MapOutlet) => void;
  selectedCity: string;
}

export default function RealLeafletMap({
  outlets,
  activeOutlet,
  onSelectOutlet,
  selectedCity,
}: RealLeafletMapProps) {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const markersRef = useRef<{ [id: string]: any }>({});

  useEffect(() => {
    if (!mapContainerRef.current) return;
    let isCancelled = false;

    // Dynamically import leaflet to prevent SSR errors
    import("leaflet").then((L) => {
      if (isCancelled || !mapContainerRef.current) return;

      // Clean up previous instance if exists
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initial center: between Mumbai & Pune
      const defaultLat = activeOutlet?.lat || 18.75;
      const defaultLng = activeOutlet?.lng || 73.35;
      const defaultZoom = activeOutlet ? 13 : 9;

      const map = L.map(mapContainerRef.current, {
        center: [defaultLat, defaultLng],
        zoom: defaultZoom,
        minZoom: 8,
        maxZoom: 18,
        zoomControl: false, // We'll add custom styled zoom control
        attributionControl: false,
      });

      mapInstanceRef.current = map;

      // Clean OpenStreetMap luxury dark cartography without watermark
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        className: "luxury-dark-tile",
      }).addTo(map);

      // Create Custom Pins for each outlet
      outlets.forEach((outlet) => {
        const isSelected = activeOutlet?.id === outlet.id;

        // Custom HTML DivIcon with Gold and Maroon pulse
        const customIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <div class="absolute -inset-3 rounded-full transition-all duration-500 ${
                isSelected
                  ? "bg-[#dfc18a]/45 animate-ping"
                  : "bg-[#781d34]/25"
              }"></div>
              <div class="relative flex items-center justify-center rounded-full border-2 transition-all duration-300 shadow-xl ${
                isSelected
                  ? "h-11 w-11 border-[#dfc18a] bg-[#dfc18a] text-black scale-110"
                  : "h-9 w-9 border-[#781d34] bg-[#420d1a] text-[#dfc18a]"
              }">
                <span style="font-family: var(--font-cinzel), serif; font-size: ${
                  isSelected ? "13px" : "11px"
                }; font-weight: 800;">
                  ${outlet.name.charAt(0)}
                </span>
              </div>
              <div class="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none whitespace-nowrap rounded-full border border-[#dfc18a]/70 bg-[#1c040b]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#dfc18a] shadow-2xl transition-all duration-300 ${
                isSelected ? "opacity-100 translate-y-0" : "opacity-0"
              }">
                ${outlet.name}
              </div>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        });

        const marker = L.marker([outlet.lat, outlet.lng], { icon: customIcon }).addTo(map);

        marker.on("click", () => {
          onSelectOutlet(outlet);
        });

        markersRef.current[outlet.id] = marker;
      });
    });

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [outlets]);

  // Handle activeOutlet change (pan/fly smoothly to location)
  useEffect(() => {
    if (!mapInstanceRef.current || !activeOutlet) return;
    const map = mapInstanceRef.current;

    map.flyTo([activeOutlet.lat, activeOutlet.lng], 13, {
      duration: 1.2,
      easeLinearity: 0.25,
    });

    // Re-render markers with updated selected state
    import("leaflet").then((L) => {
      outlets.forEach((outlet) => {
        const marker = markersRef.current[outlet.id];
        if (!marker) return;

        const isSelected = activeOutlet.id === outlet.id;
        const newIcon = L.divIcon({
          className: "custom-leaflet-marker",
          html: `
            <div class="relative group cursor-pointer -translate-x-1/2 -translate-y-1/2">
              <div class="absolute -inset-3 rounded-full transition-all duration-500 ${
                isSelected
                  ? "bg-[#dfc18a]/45 animate-ping"
                  : "bg-[#781d34]/25"
              }"></div>
              <div class="relative flex items-center justify-center rounded-full border-2 transition-all duration-300 shadow-xl ${
                isSelected
                  ? "h-11 w-11 border-[#dfc18a] bg-[#dfc18a] text-black scale-110"
                  : "h-9 w-9 border-[#781d34] bg-[#420d1a] text-[#dfc18a]"
              }">
                <span style="font-family: var(--font-cinzel), serif; font-size: ${
                  isSelected ? "13px" : "11px"
                }; font-weight: 800;">
                  ${outlet.name.charAt(0)}
                </span>
              </div>
              <div class="absolute left-1/2 -translate-x-1/2 top-full mt-2 pointer-events-none whitespace-nowrap rounded-full border border-[#dfc18a]/70 bg-[#1c040b]/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#dfc18a] shadow-2xl transition-all duration-300 ${
                isSelected ? "opacity-100 translate-y-0" : "opacity-0"
              }">
                ${outlet.name}
              </div>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 22],
        });
        marker.setIcon(newIcon);
      });
    });
  }, [activeOutlet, outlets]);

  const zoomIn = () => mapInstanceRef.current?.zoomIn();
  const zoomOut = () => mapInstanceRef.current?.zoomOut();
  const resetView = () => {
    if (!mapInstanceRef.current) return;
    mapInstanceRef.current.flyTo([18.75, 73.35], 9, { duration: 1.2 });
  };

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2.2rem]">
      {/* The Leaflet Map Container */}
      <div ref={mapContainerRef} className="h-full w-full z-0" />

      {/* Luxury Cartography Glass Vignette & Radar Glow Overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0a0205] via-transparent to-[#0a0205]/40 opacity-70 z-10" />
      <div className="pointer-events-none absolute inset-0 border border-[#781d34] rounded-[2.2rem] z-10" />

      {/* Top Header Information HUD */}
      <div className="absolute top-5 left-5 z-20 pointer-events-none">
        <div className="inline-flex items-center gap-2 rounded-full border border-[#dfc18a]/60 bg-[#250711]/90 px-3.5 py-1 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#dfc18a] backdrop-blur-md shadow-lg">
          <span className="h-1.5 w-1.5 rounded-full bg-[#dfc18a] animate-ping" />
          <span>Real Street Cartography · Live GPS</span>
        </div>
      </div>

      {/* Custom Luxury Zoom & Reset HUD Controls in Velvet Maroon & Gold */}
      <div className="absolute bottom-5 right-5 z-20 flex flex-col gap-2">
        <button
          type="button"
          onClick={zoomIn}
          aria-label="Zoom in map"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#781d34] bg-[#420d1a]/95 text-lg font-bold text-[#dfc18a] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black active:scale-95 cursor-pointer"
        >
          +
        </button>
        <button
          type="button"
          onClick={zoomOut}
          aria-label="Zoom out map"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#781d34] bg-[#420d1a]/95 text-lg font-bold text-[#dfc18a] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black active:scale-95 cursor-pointer"
        >
          −
        </button>
        <button
          type="button"
          onClick={resetView}
          aria-label="Reset map view"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#781d34] bg-[#420d1a]/95 text-xs font-bold uppercase text-[#dfc18a] shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#dfc18a] hover:bg-[#dfc18a] hover:text-black active:scale-95 cursor-pointer"
          title="Overview"
        >
          ⤢
        </button>
      </div>

      {/* Bottom Coordinates Legend HUD */}
      <div className="absolute bottom-5 left-5 z-20 pointer-events-none hidden sm:block">
        <div className="rounded-full border border-[#6b162a] bg-[#1a040b]/90 px-3.5 py-1 text-[0.6rem] font-medium tracking-widest text-[#baa89f] backdrop-blur-md">
          MUMBAI 18.99° N · PUNE 18.53° N · DUBAI 25.25° N
        </div>
      </div>
    </div>
  );
}

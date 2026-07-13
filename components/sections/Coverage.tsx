"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
  createCoordinates,
  type Coordinates,
} from "@vnedyalk0v/react19-simple-maps";

import Container from "@/components/ui/Container";
import statesMap from "@/data/states-10m.json";

const coverageStateIds = new Set([
  "09", // Connecticut
  "34", // New Jersey
  "36", // New York
  "42", // Pennsylvania
]);



/*
  State FIPS codes:
  Connecticut  = 09
  New Jersey   = 34
  New York     = 36
  Pennsylvania = 42
*/
const stateLabels = [
  {
    name: "PA",
    coordinates: createCoordinates(-77.7, 40.9),
  },
  {
    name: "NY",
    coordinates: createCoordinates(-75.3, 43.0),
  },
  {
    name: "NJ",
    coordinates: createCoordinates(-74.6, 40.2),
  },
  {
    name: "CT",
    coordinates: createCoordinates(-72.7, 41.6),
  },
];

export default function Coverage() {
 const defaultPosition: MapPosition = {
  coordinates: createCoordinates(-74.8, 41.2),
  zoom: 4.8,
};

  const [position, setPosition] = useState<MapPosition>(defaultPosition);

  function handleMoveEnd(nextPosition: MapPosition) {
    setPosition(nextPosition);
  }

  function zoomIn() {
    setPosition((current) => ({
      ...current,
      zoom: Math.min(current.zoom + 0.75, 9),
    }));
  }

  function zoomOut() {
    setPosition((current) => ({
      ...current,
      zoom: Math.max(current.zoom - 0.75, 2.5),
    }));
  }

  function resetMap() {
    setPosition(defaultPosition);
  }

  return (
    <section
      id="coverage"
      className="relative overflow-hidden border-y border-white/10 bg-[#070a11] py-20 sm:py-24"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-blue-600/10 blur-[150px]" />

        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[160px]" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <Container>
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left side */}
          <div className="max-w-xl">
            <div className="mb-5 inline-flex items-center rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-blue-300">
              Service Coverage
            </div>

            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Local expertise.
              <span className="mt-2 block text-blue-400">
                Regional coverage.
              </span>
            </h2>

            <p className="mt-6 max-w-lg text-base leading-7 text-zinc-400 sm:text-lg">
              Shield X provides professional technology installation,
              infrastructure, and support services throughout New York, New
              Jersey, Pennsylvania, and Connecticut.
            </p>

            <p className="mt-5 max-w-lg text-sm leading-6 text-zinc-500">
              We support commercial properties, residential buildings, fitness
              centers, offices, hospitality businesses, retail locations, and
              property management companies.
            </p>

            <a
              href="#contact"
              className="group mt-9 inline-flex min-h-14 w-full max-w-md items-center justify-center gap-3 rounded-xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-[0_18px_50px_rgba(37,99,235,0.25)] transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-[0_22px_60px_rgba(37,99,235,0.35)] sm:text-lg"
            >
              Click to Contact Now

              <svg
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          {/* Right-side map */}
          <div className="relative h-[500px] overflow-hidden rounded-3xl border border-white/10 bg-[#0a0f1a] shadow-2xl shadow-blue-950/30 sm:h-[560px]">
            {/* Map title */}
            <div className="pointer-events-none absolute left-5 top-5 z-20">
              <div className="rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-300">
                  Northeast Coverage
                </p>

                <p className="mt-1 text-sm text-zinc-400">
                  Drag and scroll to explore
                </p>
              </div>
            </div>

            {/* Controls */}
            <div className="absolute right-5 top-5 z-20 flex flex-col gap-2">
              <button
                type="button"
                onClick={zoomIn}
                aria-label="Zoom map in"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/70 text-xl text-white backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-blue-600"
              >
                +
              </button>

              <button
                type="button"
                onClick={zoomOut}
                aria-label="Zoom map out"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/70 text-xl text-white backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-blue-600"
              >
                −
              </button>

              <button
                type="button"
                onClick={resetMap}
                aria-label="Reset coverage map"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-black/70 text-[9px] font-bold uppercase tracking-wide text-white backdrop-blur-xl transition hover:border-blue-400/40 hover:bg-blue-600"
              >
                Reset
              </button>
            </div>

            <ComposableMap
              projection="geoAlbersUsa"
              width={800}
              height={600}
              style={{
                width: "100%",
                height: "100%",
                display: "block",
              }}
            >
              <ZoomableGroup
                center={position.coordinates}
                zoom={position.zoom}
                minZoom={2.5}
                maxZoom={9}
                onMoveEnd={handleMoveEnd}
              >
                <Geographies geography={statesMap}>
                  {({ geographies }) =>
                    geographies.map((geo) => {
                      const stateId = String(geo.id).padStart(2, "0");
                      const covered = coverageStateIds.has(stateId);

                      return (
                        <Geography
                          key={geo.rsmKey}
                          geography={geo}
                          fill={covered ? "#2563eb" : "#172033"}
                          stroke={covered ? "#93c5fd" : "#3b475d"}
                          strokeWidth={covered ? 0.8 : 0.35}
                          style={{
                            default: {
                              outline: "none",
                            },
                            hover: {
                              fill: covered ? "#60a5fa" : "#25324a",
                              outline: "none",
                              cursor: "grab",
                            },
                            pressed: {
                              fill: covered ? "#1d4ed8" : "#25324a",
                              outline: "none",
                              cursor: "grabbing",
                            },
                          }}
                        />
                      );
                    })
                  }
                </Geographies>
                {stateLabels.map((state) => (
  <Marker key={state.name} coordinates={state.coordinates}>
    <g className="pointer-events-none">
      <circle
        r={13}
        fill="rgba(3, 7, 18, 0.82)"
        stroke="#93c5fd"
        strokeWidth={0.8}
      />

      <text
        textAnchor="middle"
        dominantBaseline="central"
        fill="#ffffff"
        fontSize={7}
        fontWeight={700}
        letterSpacing={0.5}
      >
        {state.name}
      </text>
    </g>
  </Marker>
))}
              </ZoomableGroup>
            </ComposableMap>

            {/* Legend */}
            <div className="pointer-events-none absolute bottom-5 left-5 right-5 z-20 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

                <span className="text-xs font-medium text-zinc-300">
                  Shield X service area
                </span>
              </div>

              <span className="text-xs font-semibold tracking-[0.15em] text-white">
                NY · NJ · PA · CT
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
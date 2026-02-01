"use client";

import { useState, useRef } from "react";
import { PlaceholderImage } from "@/components/layout/placeholder";

const images = ["Image 1", "Image 2", "Image 3", "Image 4", "Image 5"];

export function ImageGallery() {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="space-y-4">
      {/* Main image with zoom on hover */}
      <div
        ref={containerRef}
        className="relative aspect-square rounded-lg overflow-hidden border bg-gray-100 cursor-zoom-in"
        onMouseEnter={() => setZoom(true)}
        onMouseLeave={() => setZoom(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className="absolute inset-0 transition-transform duration-150"
          style={{
            transform: zoom ? "scale(1.5)" : "scale(1)",
            transformOrigin: `${pos.x}% ${pos.y}%`,
          }}
        >
          <PlaceholderImage
            width={600}
            height={600}
            text={images[active]}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      {/* Thumbnail carousel */}
      <div className="flex gap-2 overflow-x-auto pb-2">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition ${
              active === i ? "border-primary" : "border-gray-200"
            }`}
          >
            <PlaceholderImage width={64} height={64} text={img} className="w-full h-full" />
          </button>
        ))}
      </div>
    </div>
  );
}

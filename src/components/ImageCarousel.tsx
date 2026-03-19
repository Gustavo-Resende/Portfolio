"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface ImageItem {
  src: string;
  alt: string;
}

interface ImageCarouselProps {
  images: ImageItem[];
  accentColor?: "lime" | "amber" | "purple" | "blue" | "cyan";
}

const colorMap = {
  lime: "text-lime-primary bg-lime-primary shadow-[0_0_20px_rgba(163,230,53,0.3)]",
  amber: "text-amber-500 bg-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.3)]",
  purple: "text-purple-500 bg-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.3)]",
  blue: "text-blue-500 bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.3)]",
  cyan: "text-cyan-400 bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.3)]",
};

export function ImageCarousel({ images, accentColor = "lime" }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

  if (!images || images.length === 0) return null;

  return (
    <div className="relative w-full h-full group overflow-hidden rounded-xl border border-white/10 bg-[#050505]/50 flex items-center justify-center">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 }
          }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src={images[index].src}
            alt={images[index].alt}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 z-10 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 z-10 p-2 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/60"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </>
      )}

      {/* Indicator Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index 
                  ? `w-6 ${colorMap[accentColor].split(' ')[1]}` 
                  : "w-1.5 bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      )}

      {/* Glassmorphism gradient overlay for better text contrast/vibe */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/20 to-transparent" />
    </div>
  );
}

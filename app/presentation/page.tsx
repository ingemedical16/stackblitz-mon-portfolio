"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Fullscreen, FullscreenExit } from "@mui/icons-material";

const slides = [
  { title: "Introduction", content: "Présentation du projet Facebook Clone.", image: "/slide/slide01.png" },
  { title: "Introduction", content: "Présentation Personnelle.", image: "/slide/slide02.png" },
  { title: "Introduction", content: "Contexte et Objectifs du Projet.", image: "/slide/slide03.png" },
  { title: "Technologies Utilisées", content: "TypeScript, React, Node.js, Express.js, Socket.io, MongoDB.", image: "/slide/slide04.png" },
  { title: "Fonctionnalités Principales", content: "Authentification, publication, messagerie, notifications.", image: "/slide/slide05.png" },
  { title: "Démonstration du Projet", content: "", image: "/slide/slide06.png" },
  { title: "Architecture Technique", content: "", image: "/slide/slide07.png" },
  { title: "Défis et Solutions", content: "Optimisation de la performance, gestion des utilisateurs.", image: "/slide/slide08.png" },
  { title: "Conclusion", content: "Améliorations futures et apprentissages.", image: "/slide/slide09.png" },
  { title: "Conclusion", content: "", image: "/slide/slide10.png" },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleFullScreen = () => {
    if (slideContainerRef.current) {
      if (!document.fullscreenElement) {
        slideContainerRef.current.requestFullscreen().catch((err: any) => {
          console.log("Error attempting to enable full-screen mode:", err);
        });
        setIsFullScreen(true);
      } else {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Handle mouse navigation
  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) nextSlide(); // Left-click for next slide
      if (e.button === 2) prevSlide(); // Right-click for previous slide
    };

    window.addEventListener("mousedown", handleMouseDown);
    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <div
        ref={slideContainerRef}
        className={`relative flex flex-col items-center justify-center ${
          isFullScreen ? "w-screen h-screen" : "w-[90%] md:w-[800px] h-[70vh] md:h-[80vh]"
        }`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="absolute w-full h-full"
          >
            <Image
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              layout="fill"
              objectFit="contain"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </AnimatePresence>

        {!isFullScreen && (
          <div className="absolute top-8 flex flex-col items-center z-20 text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">{slides[currentSlide].title}</h1>
            <p className="text-base md:text-xl mb-4 md:mb-6 max-w-4xl">{slides[currentSlide].content}</p>
          </div>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleFullScreen();
          }}
          className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 rounded-full z-30"
        >
          {isFullScreen ? <FullscreenExit className="text-white" /> : <Fullscreen className="text-white" />}
        </button>
      </div>

      <div className="absolute bottom-8 flex space-x-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 md:px-6 md:py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm md:text-lg"
        >
          Précédent
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 md:px-6 md:py-3 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm md:text-lg"
        >
          Suivant
        </button>
      </div>
    </div>
  );
}

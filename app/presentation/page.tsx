"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const slides = [
  { title: "Introduction", content: "Présentation du projet Facebook Clone.", image: "/slide/slide01.png" },
  { title: "Introduction", content: "Présentation Personnelle.", image: "/slide/slide02.png" },
  { title: "Introduction", content: "Contexte et Objectifs du Projet.", image: "/slide/slide03.png" },
  { title: "Technologies Utilisées", content: "TypeScript, React, Node.js, Express.js, Socket.io, MongoDB.", image: "/slide/slide04.png" },
  { title: "Fonctionnalités Principales", content: "Authentification, publication, messagerie, notifications.",  image: "/slide/slide05.png" },
  { title: "Démonstration du Projet", content: "",  image: "/slide/slide06.png" },
  { title: "Architecture Technique", content: "", image: "/slide/slide07.png" },
  { title: "Défis et Solutions", content: "Optimisation de la performance, gestion des utilisateurs.", image: "/slide/slide08.png" },
  { title: "Conclusion", content: "Améliorations futures et apprentissages.", image: "/slide/slide09.png" },
  { title: "Conclusion", content: "", image: "/slide/slide10.png" }
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-900 text-white relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div 
          key={currentSlide} 
          initial={{ opacity: 0, x: 100 }} 
          animate={{ opacity: 1, x: 0 }} 
          exit={{ opacity: 0, x: -100 }} 
          transition={{ duration: 0.5 }}
          className="absolute h-full w-full flex flex-col items-center justify-center p-8"
        >
          <h1 className="text-5xl font-bold mb-6 text-center">{slides[currentSlide].title}</h1>
          <p className="text-xl mb-6 text-center max-w-4xl">{slides[currentSlide].content}</p>
          <div className="relative w-full h-3/5 flex items-center justify-center">
            <Image 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title} 
              layout="fill" 
              objectFit="cover" 
              className="rounded-lg shadow-lg" 
            />
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 flex space-x-4">
        <button onClick={prevSlide} className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg text-lg">Précédent</button>
        <button onClick={nextSlide} className="px-6 py-3 bg-blue-500 hover:bg-blue-400 rounded-lg text-lg">Suivant</button>
      </div>
    </div>
  );
}

"use client"; // Adicione isso no topo do arquivo para usar hooks do React
import { useState } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Ícones das setas
import Image from "next/image"; // Importe o componente Image do Next.js

export const MisTrabajos = () => {
  // Lista de imagens (caminhos relativos à pasta public)
  const images = [
    "/images/trabalho1.jpg",
    "/images/trabalho2.jpg",
    "/images/trabalho3.jpg",
    "/images/trabalho4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(1); // Índice da imagem central

  // Função para navegar para a próxima imagem
  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  // Função para navegar para a imagem anterior
  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  // Índices das imagens à esquerda, centro e direita
  const leftIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  const centerIndex = currentIndex;
  const rightIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

  return (
    <div className="text-white text-center h-full">
      <div className="relative flex items-center justify-center h-full">
        {/* Seta esquerda */}
        <button
          onClick={prevImage}
          className="absolute left-0 z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaArrowLeft className="text-2xl" />
        </button>

        {/* Container das imagens */}
        <div className="flex items-center justify-center gap-16 h-8/12">
          {/* Imagem à esquerda */}
          <motion.div
            key={leftIndex}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-1/4 h-auto rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={images[leftIndex]}
              alt={`Trabalho ${leftIndex + 1}`}
              width={300} // Largura da imagem
              height={200} // Altura da imagem
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Imagem central (destacada) */}
          <motion.div
            key={centerIndex}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 h-80 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={images[centerIndex]}
              alt={`Trabalho ${centerIndex + 1}`}
              width={500} // Largura da imagem
              height={300} // Altura da imagem
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Imagem à direita */}
          <motion.div
            key={rightIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="w-1/4 h-64 rounded-lg overflow-hidden shadow-lg"
          >
            <Image
              src={images[rightIndex]}
              alt={`Trabalho ${rightIndex + 1}`}
              width={300} // Largura da imagem
              height={200} // Altura da imagem
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Seta direita */}
        <button
          onClick={nextImage}
          className="absolute right-0 z-10 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-75 transition-all"
        >
          <FaArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

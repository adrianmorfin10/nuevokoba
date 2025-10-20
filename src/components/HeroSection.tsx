'use client';
import Image from 'next/image';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const HeroSection = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = ['/hero.png', '/hero2.png','/hero3.png'];

  // Animaciones simplificadas sin variants
  const containerAnimation = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  // Cambiar fondo automáticamente cada 10 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, []);

  // Función para hacer scroll a la sección de productos
  const scrollToProducts = () => {
    const productsSection = document.getElementById('productos');
    if (productsSection) {
      productsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative bg-black text-white h-[80vh] min-h-[500px] w-full mt-0 overflow-hidden">
      {/* Contenedor de fondos con transición */}
      <div className="absolute inset-0 z-0">
        {/* Fondo actual */}
        <motion.div
          key={currentBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={backgrounds[currentBg]}
            alt="Fondo hero"
            quality={85}
            priority
            fill
            className="object-cover object-center"
          />
          {/* Overlay oscuro para mejor contraste */}
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>

        {/* Fondo siguiente (pre-cargado) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0 }}
          className="absolute inset-0"
        >
          <Image
            src={backgrounds[(currentBg + 1) % backgrounds.length]}
            alt="Fondo hero siguiente"
            quality={85}
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10 pt-[72px]">
        <motion.div
          initial="initial"
          animate="animate"
          variants={containerAnimation}
          className="max-w-2xl w-full"
        >
          {/* Título principal con animación en las letras rojas */}
          <motion.h1 
            className="text-5xl md:text-6xl mb-4 leading-tight"
            style={{ fontFamily: 'Play, sans-serif' }}
          >
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.span 
                style={{ color: '#FF4646' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5, ease: "backOut" }}
              >D</motion.span>escubre{' '}
              <motion.span 
                style={{ color: '#FF4646' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7, ease: "backOut" }}
              >T</motion.span>u
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.span 
                style={{ color: '#FF4646' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9, ease: "backOut" }}
              >P</motion.span>oder{' '}
              <motion.span 
                style={{ color: '#FF4646' }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1, ease: "backOut" }}
              >F</motion.span>itness
            </motion.span>
          </motion.h1>

          {/* Subtítulo con efecto de aparición */}
          <motion.p 
            className="text-xl mb-8 text-gray-300"
            style={{ fontFamily: 'Lato, sans-serif' }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
          >
            Diseñamos ropa deportiva de alto rendimiento para que lleves tu entrenamiento al máximo nivel
          </motion.p>

          {/* Botones con efecto escalonado - 100% ancho en móvil */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 w-full"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <motion.div
              className="w-full min-[600px]:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAButton 
                text="Comprar ahora" 
                onClick={() => window.open('https://wa.me/5215543813413?text=¡Hola!%20Me%20interesa%20comprar%20productos%20KOBA%20Fitness.%20¿Podrían%20brindarme%20más%20información?', '_blank')}
                primary
              />
            </motion.div>
            <motion.div
              className="w-full min-[600px]:w-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAButton 
                text="Ver colección" 
                onClick={scrollToProducts}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll simple */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>

      {/* Indicadores de slide (opcional) */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-2">
        {backgrounds.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentBg ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentBg(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
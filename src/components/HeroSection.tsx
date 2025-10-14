'use client';
import Image from 'next/image';
import CTAButton from './CTAButton';
import { motion } from 'framer-motion';

const HeroSection = () => {
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



  return (
    <section className="relative bg-black text-white h-[80vh] min-h-[500px] w-full mt-0 overflow-hidden">
      {/* Imagen de fondo optimizada con overlay oscuro */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png"
          alt="Fondo hero"
          quality={85}
          priority
          fill
          className="object-cover object-center opacity-90"
        />
        {/* Overlay oscuro para mejor contraste */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10 pt-[72px]">
        <motion.div
          initial="initial"
          animate="animate"
          variants={containerAnimation}
          className="max-w-2xl"
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

          {/* Botones con efecto escalonado */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAButton 
                text="Comprar ahora" 
                onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
                primary
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <CTAButton 
                text="Ver colección" 
                onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
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
    </section>
  );
};

export default HeroSection;
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SportsGallery = () => {
  const bentoItems = [
    {
      id: 1,
      image: "/bento2.png", // Gym - ahora la más grande
      title: "GYM",
      description: "",
      size: "col-span-2 row-span-2",
      textPosition: "items-start justify-end"
    },
    {
      id: 2,
      image: "/bento1.png", // Boxeo - ahora secundario
      title: "Boxeo",
      description: "",
      size: "col-span-1 row-span-1",
      textPosition: "items-center justify-center"
    },
    {
      id: 3,
      image: "/bento3.png",
      title: "Pilates",
      description: "",
      size: "col-span-1 row-span-1",
      textPosition: "items-center justify-center"
    },
    {
      id: 4,
      image: "/bento4.png",
      title: "CrossFit",
      description: "",
      size: "col-span-2 row-span-1",
      textPosition: "items-center justify-end"
    },
    {
      id: 5,
      image: "/bento5.png",
      title: "Running",
      description: "",
      size: "col-span-1 row-span-1",
      textPosition: "items-center justify-center"
    },
   
  ];

  return (
    <section className="py-20 bg-[#0F0F0F] text-white">
      <div className="container mx-auto px-6">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: 'Play, sans-serif' }}
          >
            Diseñada para <span className="text-red-500">Todos</span> los Deportes
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            En KOBA Fitness creemos que la ropa deportiva debe adaptarse a tu pasión, 
            sin importar cuál sea tu disciplina. Nuestra tecnología se enfoca en rendimiento, 
            comodidad y durabilidad para que des lo mejor de ti en cada entrenamiento.
          </p>
        </motion.div>

        {/* Bento Grid reorganizado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 grid-rows-3 gap-4 h-[800px] max-w-6xl mx-auto"
        >
          {bentoItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className={`relative rounded-2xl overflow-hidden group ${item.size} bg-[#1A1A1A]`}
            >
              {/* Imagen de fondo */}
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Overlay gradiente dinámico */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              
              {/* Efecto de iluminación en hover */}
              <div className="absolute inset-0 bg-red-500/0 group-hover:bg-red-500/5 transition-all duration-500" />
              
              {/* Contenido */}
              <div className={`relative z-10 h-full flex flex-col p-6 ${item.textPosition} text-white`}>
                <div className="text-center">
                  <h3 
                    className="text-2xl md:text-3xl font-bold mb-2"
                    style={{ fontFamily: 'Play, sans-serif' }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Efecto de borde sutil en hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-black-500/50 rounded-2xl transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Características en formato compacto */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-black hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⚡</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
                Alto Rendimiento
              </h3>
              <p className="text-gray-300 text-sm">
                Tecnología que mejora tu performance
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-black hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💪</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
                Máxima Durabilidad
              </h3>
              <p className="text-gray-300 text-sm">
                Resistente a los entrenamientos más intensos
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-[#1A1A1A] rounded-xl p-6 text-center border border-black hover:border-red-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">🎯</span>
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
                Versatilidad Total
              </h3>
              <p className="text-gray-300 text-sm">
                Para cualquier deporte que practiques
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Texto de cierre */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            <span className="text-red-500 font-bold">KOBA Fitness</span> - Donde el diseño se encuentra con el rendimiento
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SportsGallery;
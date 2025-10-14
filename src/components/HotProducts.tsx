'use client';

import CTAButton from './CTAButton';
import { motion } from 'framer-motion';

const HotProducts = () => {
  return (
    <section className="bg-[#0F0F0F] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Lado izquierdo - Texto e imagen */}
        <div className="flex-1">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6" 
            style={{ fontFamily: 'Play, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span style={{ color: '#FF4646' }}>T</span>
            <span style={{ color: 'white' }}>ransforma tu rutina fitness</span>
          </motion.h2>
          
          <motion.div 
            className="ml-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img 
              src="/transform.png" 
              alt="Transforma tu rutina" 
              className="w-full max-w-md object-cover rounded-tl-[200px]"
            />
          </motion.div>
        </div>

        {/* Lado derecho - Productos */}
        <div className="flex-1">
          {/* Título "Los más vendidos" */}
          <motion.h3 
            className="text-2xl font-bold mb-6" 
            style={{ fontFamily: 'Play, sans-serif' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span style={{ color: '#FF4646' }}>L</span>
            <span style={{ color: 'white' }}>os más vendidos</span>
          </motion.h3>
          
          {/* Contenedor de productos */}
          <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
            {/* Producto 1 */}
            <motion.div 
              className="relative overflow-hidden cursor-pointer"
              style={{ width: '280px', borderRadius: '20px 20px 0 20px' }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full h-full relative">
                <img 
                  src="/product1.png" 
                  alt="Top deportivo" 
                  className="w-full h-full object-cover"
                  style={{ height: '320px' }}
                />
                
                {/* Overlay de gradiente vertical al hover - solo en desktop */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF4646]/10 via-transparent to-[#FF4646]/5 opacity-0 lg:hover:opacity-100 transition-all duration-500" />
                
                {/* Efecto de brillo al hover - solo en desktop */}
                <div className="absolute inset-0 bg-white/5 opacity-0 lg:hover:opacity-100 transition-all duration-300" />
              </div>
              
              {/* Barra inferior con texto y CTA */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end" 
                style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.95)',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                <div className="p-3">
                  <h3 className="text-white font-bold">Top deportivo</h3>
                  <p className="text-[#FF4646] font-bold">$1,299</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CTAButton 
                    text="Comprar" 
                    onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
                    small
                    primary
                    className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
                  />
                </motion.div>
              </div>

              {/* Indicador de nuevo producto */}
              <motion.div 
                className="absolute top-3 right-3 bg-[#FF4646] text-white text-xs px-2 py-1 rounded-full font-bold"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
              >
                NUEVO
              </motion.div>
            </motion.div>

            {/* Producto 2 */}
            <motion.div 
              className="relative overflow-hidden cursor-pointer"
              style={{ width: '280px', borderRadius: '20px 20px 0 20px' }}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3, ease: "easeInOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="w-full h-full relative">
                <img 
                  src="/product2.png" 
                  alt="Hoddie" 
                  className="w-full h-full object-cover"
                  style={{ height: '320px' }}
                />
                
                {/* Overlay de gradiente vertical al hover - solo en desktop */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#FF4646]/10 via-transparent to-[#FF4646]/5 opacity-0 lg:hover:opacity-100 transition-all duration-500" />
                
                {/* Efecto de brillo al hover - solo en desktop */}
                <div className="absolute inset-0 bg-white/5 opacity-0 lg:hover:opacity-100 transition-all duration-300" />
              </div>
              
              {/* Barra inferior con texto y CTA */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end" 
                style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.95)',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                <div className="p-3">
                  <h3 className="text-white font-bold">Hoddie</h3>
                  <p className="text-[#FF4646] font-bold">$1,599</p>
                </div>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <CTAButton 
                    text="Comprar" 
                    onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
                    small
                    primary
                    className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
                  />
                </motion.div>
              </div>

              {/* Indicador de popular */}
              <motion.div 
                className="absolute top-3 right-3 bg-yellow-500 text-black text-xs px-2 py-1 rounded-full font-bold"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
              >
                POPULAR
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
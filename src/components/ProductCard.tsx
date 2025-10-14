'use client';

import CTAButton from './CTAButton';
import { motion } from 'framer-motion';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  mercadolibreLink: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <motion.div 
      className="relative overflow-hidden mx-auto cursor-pointer"
      style={{ 
        width: '280px', 
        maxWidth: '100%',
        borderRadius: '20px 20px 0 20px' 
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeInOut" }
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Contenedor de imagen con efectos hover */}
      <div className="w-full h-full relative">
        <img 
          src={product.image} 
          alt={product.name} 
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
          <h3 className="text-white font-bold" style={{ fontFamily: 'Play, sans-serif' }}>
            <span style={{ color: '#FFFFFF' }}>
              {product.name.charAt(0).toUpperCase()}
            </span>
            <span style={{ color: 'white' }}>
              {product.name.slice(1)}
            </span>
          </h3>
          <p className="text-[#FF4646] font-bold" style={{ fontFamily: 'Lato, sans-serif' }}>
            ${product.price.toLocaleString()}
          </p>
        </div>
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <CTAButton 
            text="Comprar" 
            onClick={() => window.open(product.mercadolibreLink, '_blank')}
            small
            primary
            className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
          />
        </motion.div>
      </div>

      {/* Indicador de producto nuevo (opcional) */}
      {product.id <= 2 && (
        <motion.div 
          className="absolute top-3 right-3 bg-[#FF4646] text-white text-xs px-2 py-1 rounded-full font-bold"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
        >
          {product.id === 1 ? 'NUEVO' : 'POPULAR'}
        </motion.div>
      )}
    </motion.div>
  );
}
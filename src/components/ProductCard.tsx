'use client';

import CTAButton from './CTAButton';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
  regularPrice?: number;
  image: string;
  mercadolibreLink: string;
  comingSoon?: boolean;
}

export default function ProductCard({ product }: { product: Product }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateRegularPrice = (promoPrice: number) => {
    return Math.round(promoPrice * 2.3);
  };

  const regularPrice = product.regularPrice || calculateRegularPrice(product.price);
  const discountPercentage = product.price > 0 ? Math.round(((regularPrice - product.price) / regularPrice) * 100) : 0;
  const isComingSoon = product.comingSoon || product.price === 0;

  const formatPrice = (price: number) => {
    if (!isMounted) return price.toString();
    return price.toLocaleString();
  };

  return (
    <motion.div 
      className={`relative overflow-hidden mx-auto cursor-pointer ${
        isComingSoon ? 'opacity-80' : ''
      }`}
      style={{ 
        width: '320px', 
        maxWidth: '100%',
        borderRadius: '20px 20px 0 20px' 
      }}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ 
        y: isComingSoon ? 0 : -10,
        scale: isComingSoon ? 1 : 1.02,
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
          style={{ height: '380px' }}
        />
        
        {/* Overlay de gradiente vertical al hover - solo en desktop */}
        <div className={`absolute inset-0 bg-gradient-to-b from-[#FF4646]/10 via-transparent to-[#FF4646]/5 opacity-0 lg:hover:opacity-100 transition-all duration-500 ${
          isComingSoon ? 'lg:hover:opacity-0' : ''
        }`} />
        
        {/* Efecto de brillo al hover - solo en desktop */}
        <div className={`absolute inset-0 bg-white/5 opacity-0 lg:hover:opacity-100 transition-all duration-300 ${
          isComingSoon ? 'lg:hover:opacity-0' : ''
        }`} />

        {/* Etiqueta sutil de PRÓXIMAMENTE */}
        {isComingSoon && (
          <motion.div 
            className="absolute top-4 right-4 bg-black/70 text-white text-xs px-3 py-1 rounded-full font-medium backdrop-blur-sm border border-white/20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.4, ease: "backOut" }}
            style={{ fontFamily: 'Play, sans-serif' }}
          >
            Próximamente
          </motion.div>
        )}

        {/* Indicador de producto nuevo/popular */}
        {!isComingSoon && product.id <= 2 && (
          <motion.div 
            className="absolute top-3 right-3 bg-[#FF4646] text-white text-xs px-3 py-1 rounded-full font-bold z-10"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "backOut" }}
          >
            {product.id === 1 ? 'NUEVO' : 'POPULAR'}
          </motion.div>
        )}

        {/* Badge de descuento */}
        {!isComingSoon && discountPercentage > 0 && (
          <motion.div 
            className="absolute top-3 left-3 bg-green-500 text-white text-xs px-2 py-1 rounded-full font-bold z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
          >
            -{discountPercentage}%
          </motion.div>
        )}
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
        <div className="p-4 flex-1">
          <h3 className="text-white font-bold text-lg mb-1" style={{ fontFamily: 'Play, sans-serif' }}>
            <span style={{ color: '#FFFFFF' }}>
              {product.name.charAt(0).toUpperCase()}
            </span>
            <span style={{ color: 'white' }}>
              {product.name.slice(1)}
            </span>
          </h3>
          
          {/* Precios */}
          <div className="flex items-center gap-2">
            {!isComingSoon ? (
              <>
                <p className="text-[#FF4646] font-bold text-xl" style={{ fontFamily: 'Lato, sans-serif' }}>
                  ${formatPrice(product.price)}
                </p>
                {regularPrice > product.price && (
                  <p className="text-gray-400 line-through text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
                    ${formatPrice(regularPrice)}
                  </p>
                )}
              </>
            ) : (
              <p className="text-gray-400 text-sm italic" style={{ fontFamily: 'Lato, sans-serif' }}>
                Disponible pronto
              </p>
            )}
          </div>
        </div>
        
        {/* Botón de compra o Próximamente */}
        {!isComingSoon ? (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <CTAButton 
              text="Comprar" 
              onClick={() => window.open(product.mercadolibreLink, '_blank')}
              small
              primary
              className="rounded-none border-0 m-0 h-[48px] min-w-[100px]"
            />
          </motion.div>
        ) : (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              disabled
              className="h-[48px] min-w-[100px] bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-gray-300 font-bold px-4 rounded-none cursor-not-allowed transition-all duration-200 border-0 m-0"
              style={{ 
                fontFamily: 'Play, sans-serif',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
              }}
            >
              <span style={{ color: '#FFFFFF' }}>P</span>
              <span style={{ color: 'white' }}>róximamente</span>
            </button>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
'use client';

import { useState, useEffect } from 'react';

const SubFoot = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative w-full h-[400px] overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/subfooter.png")' }}
      />
      
      {/* Overlay para mejor contraste */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Contenido animado */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className={`transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <img 
            src="/logofoot.png" 
            alt="KOBA Fitness" 
            className="w-80 h-16 object-contain mb-6 animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default SubFoot;
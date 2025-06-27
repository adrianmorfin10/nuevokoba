'use client';
import Image from 'next/image';
import CTAButton from './CTAButton';

const HeroSection = () => {
  return (
    <section className="relative bg-black text-white h-[80vh] min-h-[500px] w-full mt-0">
      {/* Imagen de fondo optimizada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero.png" // Usa la ruta directa desde public
          alt="Fondo hero"
          quality={85}
          priority
          fill
          className="object-cover object-center opacity-90"
        />
      </div>
      
      {/* Resto del componente permanece igual */}
      <div className="container mx-auto px-6 h-full flex items-center relative z-10 pt-[72px]">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl mb-4 leading-tight" style={{ fontFamily: 'Play, sans-serif' }}>
            <span>
              <span style={{ color: '#FF4646' }}>D</span>escubre{' '}
              <span style={{ color: '#FF4646' }}>T</span>u
            </span>
            <br />
            <span>
              <span style={{ color: '#FF4646' }}>P</span>oder{' '}
              <span style={{ color: '#FF4646' }}>F</span>itness
            </span>
          </h1>
          
          <p className="text-xl mb-8 text-gray-300" style={{ fontFamily: 'Lato, sans-serif' }}>
            Diseñamos ropa deportiva de alto rendimiento para que lleves tu entrenamiento al máximo nivel
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CTAButton 
              text="Comprar ahora" 
              onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
              primary
            />
            <CTAButton 
              text="Ver colección" 
              onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
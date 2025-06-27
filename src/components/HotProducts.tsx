'use client';

import CTAButton from './CTAButton';

const HotProducts = () => {
  return (
    <section className="bg-[#201F1F] py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-8">
        {/* Lado izquierdo - Texto e imagen */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Play, sans-serif' }}>
            <span style={{ color: '#FF4646' }}>T</span>
            <span style={{ color: 'white' }}>ransforma tu rutina fitness</span>
          </h2>
          <div className="ml-8">
            <img 
              src="/transform.png" 
              alt="Transforma tu rutina" 
              className="w-full max-w-md object-cover rounded-tl-[200px]"
            />
          </div>
        </div>

        {/* Lado derecho - Productos */}
        <div className="flex-1">
          {/* Título "Los más vendidos" */}
          <h3 className="text-2xl font-bold mb-6" style={{ fontFamily: 'Play, sans-serif' }}>
            <span style={{ color: '#FF4646' }}>L</span>
            <span style={{ color: 'white' }}>os más vendidos</span>
          </h3>
          
          {/* Contenedor de productos centrado */}
          <div className="flex flex-row gap-8 justify-center">
            {/* Producto 1 */}
            <div className="relative overflow-hidden" style={{ width: '280px', borderRadius: '20px 20px 0 20px' }}>
              <img 
                src="/product1.png" 
                alt="Top deportivo" 
                className="w-full h-full object-cover"
                style={{ height: '320px' }}
              />
              {/* Barra inferior con texto y CTA */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end" 
                style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.9)',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                <div className="p-3">
                  <h3 className="text-white font-bold">Top deportivo</h3>
                  <p className="text-[#FF4646] font-bold">$1,299</p>
                </div>
                <CTAButton 
                  text="Comprar" 
                  onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
                  small
                  primary
                  className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
                />
              </div>
            </div>

            {/* Producto 2 */}
            <div className="relative overflow-hidden" style={{ width: '280px', borderRadius: '20px 20px 0 20px' }}>
              <img 
                src="/product2.png" 
                alt="Leggings performance" 
                className="w-full h-full object-cover"
                style={{ height: '320px' }}
              />
              {/* Barra inferior con texto y CTA */}
              <div 
                className="absolute bottom-0 left-0 right-0 flex flex-row justify-between items-end" 
                style={{ 
                  backgroundColor: 'rgba(42, 42, 42, 0.9)',
                  borderBottomLeftRadius: '20px',
                  borderBottomRightRadius: '20px'
                }}
              >
                <div className="p-3">
                  <h3 className="text-white font-bold">Hoddie</h3>
                  <p className="text-[#FF4646] font-bold">$1,599</p>
                </div>
                <CTAButton 
                  text="Comprar" 
                  onClick={() => window.open('https://mercadolibre.com/YOUR_SHOP_LINK', '_blank')}
                  small
                  primary
                  className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotProducts;
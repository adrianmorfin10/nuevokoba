'use client';

import CTAButton from './CTAButton';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  mercadolibreLink: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="relative overflow-hidden" style={{ width: '280px', borderRadius: '20px 20px 0 20px' }}>
      {/* Imagen del producto */}
      <img 
        src={product.image} 
        alt={product.name} 
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
        <CTAButton 
          text="Comprar" 
          onClick={() => window.open(product.mercadolibreLink, '_blank')}
          small
          primary
          className="rounded-none border-0 m-0 h-[42px] min-w-[90px]"
        />
      </div>
    </div>
  );
}
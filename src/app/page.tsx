'use client';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import HotProducts from '@/components/HotProducts';
import Footer from '@/components/footer';
import CompraSeguraSection from '@/components/CompraSeguraSection';
import SubFoot from '@/components/SubFoot';
import SportsGallery from '@/components/SportsGallery';

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Conjunto Completo",
      price: 1649, // Precio promocional
      regularPrice: 2399, // Precio regular (1649 * 2.3)
      image: "/uno.JPG",
      mercadolibreLink: "https://wa.me/5215543813413?text=¡Hola!%20Quiero%20comprar%20un%20Conjunto%20KOBA%20Completo.%20¿Podrían%20ayudarme%20con%20el%20proceso?"
    },
    {
      id: 2,
      name: "Top Deportivo",
      price: 449,
      regularPrice: 679,
      image: "/puno.png",
      mercadolibreLink: "https://wa.me/5215543813413?text=¡Hola!%20Me%20gustaría%20comprar%20un%20Top%20KOBA.%20¿Podrían%20proporcionarme%20más%20información?"
    },
    {
      id: 3,
      name: "Legging",
      price: 479,
      regularPrice: 699,
      image: "/pdos.png",
      mercadolibreLink: "https://wa.me/5215543813413?text=¡Hola!%20Estoy%20interesado/a%20en%20comprar%20un%20Legging%20KOBA.%20¿Me%20podrían%20dar%20más%20detalles?"
    },
    {
      id: 4,
      name: "Chamarra",
      price: 789,
      regularPrice: 999,
      image: "/ptres.png",
      mercadolibreLink: "https://wa.me/5215543813413?text=¡Hola!%20Quiero%20adquirir%20una%20Chamarra%20KOBA.%20¿Tienen%20disponibilidad%20y%20podrían%20informarme%20más?"
    },
    {
      id: 5,
      name: "Crop Top",
      price: 0,
      image: "/tres.jpg",
      mercadolibreLink: "https://mercadolibre.com/link5",
      comingSoon: true
    },
    {
      id: 6,
      name: "Oversized",
      price: 0,
      image: "/dos.JPG",
      mercadolibreLink: "https://mercadolibre.com/link6",
      comingSoon: true
    },
    {
      id: 7,
      name: "Short",
      price: 0,
      image: "/pcuatro.png",
      mercadolibreLink: "https://mercadolibre.com/link6",
      comingSoon: true
    },
    {
      id: 8,
      name: "Hoodie",
      price: 0,
      image: "/pcinco.png",
      mercadolibreLink: "https://mercadolibre.com/link6",
      comingSoon: true
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
        <HotProducts />
        
        {/* Sección de Productos (añade id para navegación) */}
        <section id="productos" className="py-16 container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ fontFamily: 'Play, sans-serif' }}>
            <span style={{ color: '#FF4646' }}>N</span>
            <span>uestros productos</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        {/* Añade más secciones con IDs según necesites */}
        <section id="nosotros">{/* ... */}</section>
        <section id="contacto">{/* ... */}</section>

        <CompraSeguraSection />
        <SportsGallery />
        <SubFoot />
      </main>
      <Footer />
    </div>
  );
}
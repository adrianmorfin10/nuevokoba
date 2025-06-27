'use client';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import HotProducts from '@/components/HotProducts';
import Footer from '@/components/footer';
import CompraSeguraSection from '@/components/CompraSeguraSection';

export default function Home() {
  const products = [
    {
      id: 1,
      name: "Conjunto",
      price: 599,
      image: "/uno.JPG",
      mercadolibreLink: "https://mercadolibre.com/link1"
    },
    {
      id: 2,
      name: "Oversized",
      price: 899,
      image: "/dos.JPG",
      mercadolibreLink: "https://mercadolibre.com/link2"
    },
  ];

  return (
    <>
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
      </main>
      <Footer />
    </>
  );
}
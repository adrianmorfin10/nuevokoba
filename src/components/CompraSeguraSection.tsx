'use client';

import { FaShieldAlt, FaRocket, FaLock } from 'react-icons/fa';

const CompraSeguraSection = () => {
  return (
    <section className="bg-[#1E1E1E] py-12 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Play, sans-serif' }}>
            <span className="text-[#FF4646]">C</span>ompra <span className="text-[#FF4646]">S</span>egura
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto" style={{ fontFamily: 'Lato, sans-serif' }}>
            Todos tus pedidos se procesan a través de Mercado Libre para garantizar:
          </p>
        </div>

        {/* Tarjetas de beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Tarjeta 1 - Protección */}
          <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-[#FF4646]/30">
            <div className="flex justify-center mb-4">
              <div className="bg-[#FF4646]/20 p-4 rounded-full">
                <FaShieldAlt className="text-[#FF4646] text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">P</span>rotección ML
            </h3>
            <ul className="text-gray-300 text-sm text-left space-y-2 pl-5" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li className="list-disc">Garantía de devolución</li>
              <li className="list-disc">Reclamos protegidos</li>
              <li className="list-disc">Productos verificados</li>
            </ul>
          </div>

          {/* Tarjeta 2 - Envíos */}
          <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-[#FF4646]/30">
            <div className="flex justify-center mb-4">
              <div className="bg-[#FF4646]/20 p-4 rounded-full">
                <FaRocket className="text-[#FF4646] text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">E</span>nvíos Express
            </h3>
            <ul className="text-gray-300 text-sm text-left space-y-2 pl-5" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li className="list-disc">24-48h en CDMX</li>
              <li className="list-disc">2-5 días nacional</li>
              <li className="list-disc">Seguimiento en tiempo real</li>
            </ul>
          </div>

          {/* Tarjeta 3 - Pagos */}
          <div className="bg-[#262626] p-6 rounded-lg hover:shadow-lg transition-all border border-transparent hover:border-[#FF4646]/30">
            <div className="flex justify-center mb-4">
              <div className="bg-[#FF4646]/20 p-4 rounded-full">
                <FaLock className="text-[#FF4646] text-2xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">P</span>agos Seguros
            </h3>
            <ul className="text-gray-300 text-sm text-left space-y-2 pl-5" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li className="list-disc">Cifrado bancario</li>
              <li className="list-disc">Múltiples métodos de pago</li>
              <li className="list-disc">Sin compartir tus datos</li>
            </ul>
          </div>
        </div>

        {/* Badge Mercado Libre */}
        <div className="flex justify-center mt-10">
          <div className="bg-[#333] px-6 py-3 rounded-full flex items-center">
            <span className="text-white mr-2" style={{ fontFamily: 'Play, sans-serif' }}>Procesado por</span>
            <span className="font-bold text-[#FFE600]">MERCADO LIBRE</span>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a 
            href="https://mercadolibre.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-[#FF4646] to-[#FF6B6B] hover:from-[#E03E3E] hover:to-[#FF5757] text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-[#FF4646]/30"
            style={{ fontFamily: 'Play, sans-serif' }}
          >
            COMPRAR AHORA
          </a>
          <p className="text-gray-400 text-xs mt-3" style={{ fontFamily: 'Lato, sans-serif' }}>
            Redirección segura al marketplace oficial
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompraSeguraSection;
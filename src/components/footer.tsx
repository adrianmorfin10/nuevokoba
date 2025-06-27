'use client';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaShieldAlt } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-white py-12 px-6 md:px-16 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y redes */}
          <div className="flex flex-col items-center md:items-start">
            <Image 
              src="/logofoot.png" 
              alt="KOBA Fitness" 
              width={140} 
              height={50} 
              className="mb-4"
            />
            <p className="text-gray-300 text-sm mb-4 text-center md:text-left" style={{ fontFamily: 'Lato, sans-serif' }}>
              Ropa deportiva de alto rendimiento diseñada para potenciar tu entrenamiento.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/koba.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4646] transition-colors text-xl"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href="https://wa.me/5215512345678" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4646] transition-colors text-xl"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">E</span>nlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="#productos" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                  <span className="mr-2">•</span> Productos
                </Link>
              </li>
              <li>
                <Link href="#nosotros" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                  <span className="mr-2">•</span> Nosotros
                </Link>
              </li>
              <li>
                <Link href="#contacto" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                  <span className="mr-2">•</span> Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">C</span>ontacto
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaWhatsapp className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">+52 55 1234 5678</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">contacto@koba.mx</p>
                </div>
              </li>
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">Ciudad de México</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Columna 4 - Compra segura */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">C</span>ompra segura
            </h3>
            <div className="flex items-center mb-2">
              <FaShoppingCart className="text-[#FF4646] text-xl mr-2" />
              <span className="text-gray-300">Mercado Libre</span>
            </div>
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-[#FF4646] text-xl mr-2" />
              <span className="text-gray-300">Garantía incluida</span>
            </div>
            <p className="text-gray-300 text-sm">
              Todos nuestros productos son 100% originales.
            </p>
          </div>
        </div>

        {/* Derechos reservados */}
        <div className="border-t border-[#444] mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} KOBA Fitness. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
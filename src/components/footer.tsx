'use client';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaShieldAlt, FaFacebook } from 'react-icons/fa';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-[#0F0F0F] text-white py-12 px-6 md:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y redes */}
          <div className="flex flex-col items-center md:items-start">
            <motion.div
              className="mb-4"
              animate={{
                scale: [1, 1.05, 1],
                rotate: [0, 2, 0, -2, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Image 
                src="/logofoot.png" 
                alt="KOBA Fitness" 
                width={140} 
                height={50} 
              />
            </motion.div>
            <p className="text-gray-300 text-sm mb-4 text-center md:text-left" style={{ fontFamily: 'Lato, sans-serif' }}>
              Ropa deportiva de alto rendimiento diseñada para potenciar tu entrenamiento.
            </p>
            <div className="flex space-x-4">
              <motion.a 
                href="https://www.facebook.com/profile.php?id=61582368386679&locale=is_IS" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4646] transition-colors text-xl"
                aria-label="Facebook"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaFacebook />
              </motion.a>
              <motion.a 
                href="https://instagram.com/koba.mx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4646] transition-colors text-xl"
                aria-label="Instagram"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaInstagram />
              </motion.a>
              <motion.a 
                href="https://wa.me/5215543813413" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#FF4646] transition-colors text-xl"
                aria-label="WhatsApp"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaWhatsapp />
              </motion.a>
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">E</span>nlaces
            </h3>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="#productos" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Productos
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="#nosotros" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Nosotros
                  </Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 5 }}>
                  <Link href="#contacto" scroll={false} className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center">
                    <span className="mr-2">•</span> Contacto
                  </Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Columna 3 - Contacto */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">C</span>ontacto
            </h3>
            <ul className="space-y-3">
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaWhatsapp className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">+52 55 4381 3413</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaEnvelope className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">kobamx25@gmail.com</p>
                </div>
              </motion.li>
              <motion.li 
                className="flex items-start"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <FaMapMarkerAlt className="text-[#FF4646] mt-1 mr-2" />
                <div>
                  <p className="text-gray-300">Ciudad de México</p>
                </div>
              </motion.li>
            </ul>
          </div>

          {/* Columna 4 - Compra segura */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center" style={{ fontFamily: 'Play, sans-serif' }}>
              <span className="text-[#FF4646]">C</span>ompra segura
            </h3>
            <motion.div 
              className="flex items-center mb-2"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShoppingCart className="text-[#FF4646] text-xl mr-2" />
              <span className="text-gray-300">Mercado Libre</span>
            </motion.div>
            <motion.div 
              className="flex items-center mb-4"
              whileHover={{ x: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaShieldAlt className="text-[#FF4646] text-xl mr-2" />
              <span className="text-gray-300">Garantía incluida</span>
            </motion.div>
            <p className="text-gray-300 text-sm">
              Todos nuestros productos son 100% originales.
            </p>
          </div>
        </div>

        {/* Derechos reservados */}
        <motion.div 
          className="border-t border-[#444] mt-8 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>© {new Date().getFullYear()} KOBA Fitness. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}
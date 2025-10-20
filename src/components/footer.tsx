'use client';
import Image from 'next/image';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaShoppingCart, FaShieldAlt, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5215543813413', '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleNosotrosClick = () => {
    // Esperar un momento para asegurar que el DOM esté listo
    setTimeout(() => {
      scrollToSection('nosotros');
    }, 100);
  };

  return (
    <motion.footer 
      className="bg-[#0F0F0F] text-white py-12 px-6 md:px-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Columna 1 - Logo y redes */}
          <motion.div 
            className="flex flex-col items-center md:items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <Image 
                src="/logofoot.png" 
                alt="KOBA Fitness" 
                width={140} 
                height={50} 
                className="mb-4"
              />
            </motion.div>
            <motion.p 
              className="text-gray-300 text-sm mb-6 text-center md:text-left leading-relaxed"
              style={{ fontFamily: 'Lato, sans-serif' }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ropa deportiva de alto rendimiento diseñada para potenciar tu entrenamiento.
            </motion.p>
            <div className="flex space-x-4 mt-2">
              {[
                { 
                  icon: FaFacebook, 
                  href: "https://www.facebook.com/profile.php?id=61582368386679&locale=is_IS",
                  label: "Facebook"
                },
                { 
                  icon: FaInstagram, 
                  href: "https://instagram.com/koba.mx",
                  label: "Instagram"
                },
                { 
                  icon: FaWhatsapp, 
                  href: "https://wa.me/5215543813413",
                  label: "WhatsApp"
                }
              ].map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF4646] transition-colors text-xl flex items-center justify-center w-10 h-10"
                  aria-label={social.label}
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1, ease: "backOut" }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                >
                  <social.icon />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Columna 2 - Enlaces rápidos */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h3 
              className="text-lg font-bold mb-4 flex items-center"
              style={{ fontFamily: 'Play, sans-serif' }}
              whileHover={{ x: 5 }}
              transition={{ duration: 0.3 }}
            >
              <span className="text-[#FF4646]">E</span>nlaces
            </motion.h3>
            <ul className="space-y-3">
              {[
                { name: "Productos", id: "productos", action: () => scrollToSection('productos') },
                { name: "Nosotros", id: "nosotros", action: handleNosotrosClick },
                { name: "Contacto", id: "contacto", action: handleWhatsAppClick }
              ].map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ x: 10 }}
                >
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-[#FF4646] transition-colors flex items-center w-full text-left group"
                  >
                    <motion.span 
                      className="mr-3 text-[#FF4646] text-lg"
                      whileHover={{ scale: 1.5 }}
                    >
                      •
                    </motion.span>
                    <span className="group-hover:translate-x-1 transition-transform duration-200">
                      {link.name}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 3 - Contacto */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.h3 
              className="text-lg font-bold mb-4 flex items-center"
              style={{ fontFamily: 'Play, sans-serif' }}
              whileHover={{ x: 5 }}
            >
              <span className="text-[#FF4646]">C</span>ontacto
            </motion.h3>
            <ul className="space-y-4">
              {[
                { 
                  icon: FaWhatsapp, 
                  text: "+52 55 4381 3413",
                  action: handleWhatsAppClick,
                  description: "Chat directo"
                },
                { 
                  icon: FaEnvelope, 
                  text: "kobamx25@gmail.com",
                  action: () => window.open('mailto:kobamx25@gmail.com', '_blank'),
                  description: "Envíanos un correo"
                },
                { 
                  icon: FaMapMarkerAlt, 
                  text: "Ciudad de México",
                  action: null,
                  description: "Ubicación"
                }
              ].map((contact, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start cursor-pointer group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                  onClick={contact.action || undefined}
                >
                  <motion.div
                    className="text-[#FF4646] mt-1 mr-3 flex-shrink-0"
                    whileHover={{ scale: 1.3 }}
                  >
                    <contact.icon />
                  </motion.div>
                  <div className="min-w-0">
                    <p className="text-gray-300 font-medium truncate">{contact.text}</p>
                    <p className="text-gray-400 text-xs mt-1">{contact.description}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Columna 4 - Compra segura */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h3 
              className="text-lg font-bold mb-4 flex items-center"
              style={{ fontFamily: 'Play, sans-serif' }}
              whileHover={{ x: 5 }}
            >
              <span className="text-[#FF4646]">C</span>ompra segura
            </motion.h3>
            <div className="space-y-4">
              {[
                { icon: FaShoppingCart, text: "Mercado Libre", description: "Plataforma segura" },
                { icon: FaShieldAlt, text: "Garantía incluida", description: "30 días" }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="text-[#FF4646] text-xl mr-3 flex-shrink-0"
                    whileHover={{ scale: 1.3, rotate: 360 }}
                  >
                    <item.icon />
                  </motion.div>
                  <div>
                    <span className="text-gray-300 font-medium">{item.text}</span>
                    <p className="text-gray-400 text-xs mt-1">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.p 
              className="text-gray-300 text-sm mt-6 p-3 bg-gray-800/50 rounded-lg border-l-4 border-[#FF4646]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              💎 Todos nuestros productos son 100% originales con calidad premium.
            </motion.p>
          </motion.div>
        </div>

        {/* Derechos reservados */}
        <motion.div 
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.p
            whileHover={{ scale: 1.02 }}
            className="flex items-center justify-center gap-2"
          >
            <span>© {new Date().getFullYear()} KOBA Fitness.</span>
            <span className="text-[#FF4646]">•</span>
            <span>Todos los derechos reservados.</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
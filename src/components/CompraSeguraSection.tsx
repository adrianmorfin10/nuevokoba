'use client';

import { FaShieldAlt, FaRocket, FaLock, FaWhatsapp, FaShoppingCart, FaMoneyBillWave, FaPercentage } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CompraSeguraSection = () => {
  const whatsappLink = "https://wa.me/5215543813413?text=¡Hola!%20Me%20interesa%20comprar%20directo%20por%20transferencia%20para%20obtener%20el%20mejor%20precio.%20¿Podrían%20brindarme%20más%20información?";

  return (
    <section className="bg-[#0F0F0F] py-16 px-6 md:px-16">
      <div className="container mx-auto">
        {/* Encabezado */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: 'Play, sans-serif' }}>
            <span className="text-[#FF4646]">O</span>pciones de <span className="text-[#FF4646]">C</span>ompra
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg" style={{ fontFamily: 'Lato, sans-serif' }}>
            Elige la forma de compra que mejor se adapte a tus necesidades
          </p>
        </motion.div>

        {/* Comparación de opciones */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Opción 1 - WhatsApp Directo */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border-2 border-[#FF4646]/50 relative overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Badge Recomendado */}
            <div className="absolute top-4 right-4 bg-[#FF4646] text-white text-xs font-bold px-3 py-1 rounded-full">
              MÁS ECONÓMICO
            </div>
            
            <div className="flex items-center mb-6">
              <div className="bg-[#FF4646]/20 p-3 rounded-full mr-4">
                <FaWhatsapp className="text-[#FF4646] text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold" style={{ fontFamily: 'Play, sans-serif' }}>
                  <span className="text-[#FF4646]">W</span>hatsApp Directo
                </h3>
                <p className="text-[#FF4646] font-bold text-lg">Hasta 25% más barato</p>
              </div>
            </div>

            <ul className="text-gray-300 space-y-3 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li className="flex items-center">
                <FaMoneyBillWave className="text-[#FF4646] mr-3" />
                <span>Precios sin impuestos de plataforma</span>
              </li>
              <li className="flex items-center">
                <FaPercentage className="text-[#FF4646] mr-3" />
                <span>Evitas comisiones de Mercado Libre</span>
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-[#FF4646] mr-3" />
                <span>Transferencia segura con comprobante</span>
              </li>
              <li className="flex items-center">
                <FaRocket className="text-[#FF4646] mr-3" />
                <span>Envío igual de rápido y seguro</span>
              </li>
            </ul>

            <div className="bg-[#FF4646]/10 border border-[#FF4646]/30 rounded-lg p-4 mb-6">
              <p className="text-[#FF4646] text-sm font-bold text-center">
                💰 Ahorras aproximadamente $300-$500 MXN por producto
              </p>
            </div>

            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gradient-to-r from-[#FF4646] to-[#FF6B6B] hover:from-[#E03E3E] hover:to-[#FF5757] text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              style={{ fontFamily: 'Play, sans-serif' }}
            >
              <FaWhatsapp className="text-xl" />
              COMPRAR POR WHATSAPP
            </a>
          </motion.div>

          {/* Opción 2 - Mercado Libre */}
          <motion.div 
            className="bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] p-8 rounded-2xl border-2 border-gray-500/50 relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-gray-500/20 p-3 rounded-full mr-4">
                <FaShoppingCart className="text-gray-400 text-2xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-300" style={{ fontFamily: 'Play, sans-serif' }}>
                  <span className="text-gray-400">M</span>ercado Libre
                </h3>
                <p className="text-gray-400 font-bold text-lg">Máxima seguridad</p>
              </div>
            </div>

            <ul className="text-gray-300 space-y-3 mb-6" style={{ fontFamily: 'Lato, sans-serif' }}>
              <li className="flex items-center">
                <FaLock className="text-gray-400 mr-3" />
                <span>Protección al comprador de ML</span>
              </li>
              <li className="flex items-center">
                <FaShieldAlt className="text-gray-400 mr-3" />
                <span>Garantía de reembolso 30 días</span>
              </li>
              <li className="flex items-center">
                <FaMoneyBillWave className="text-gray-400 mr-3" />
                <span>Múltiples métodos de pago</span>
              </li>
              <li className="flex items-center">
                <FaRocket className="text-gray-400 mr-3" />
                <span>Envíos con seguimiento</span>
              </li>
            </ul>

            <div className="bg-gray-500/10 border border-gray-500/30 rounded-lg p-4 mb-6">
              <p className="text-gray-400 text-sm text-center">
                ⚠️ Incluye comisiones e impuestos de plataforma
              </p>
            </div>

            <a 
              href="https://articulo.mercadolibre.com.mx/MLM-2515334189-koba-ropa-deportiva-modelo-mujer-_JM" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-3"
              style={{ fontFamily: 'Play, sans-serif' }}
            >
              <FaShoppingCart className="text-xl" />
              COMPRAR EN MERCADO LIBRE
            </a>
          </motion.div>
        </div>

        {/* Comparación de precios */}
        <motion.div 
          className="bg-[#1a1a1a] rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-center mb-6" style={{ fontFamily: 'Play, sans-serif' }}>
            <span className="text-[#FF4646]">C</span>omparación de Precios
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-[#FF4646]/10 rounded-lg border border-[#FF4646]/30">
              <h4 className="font-bold text-[#FF4646] mb-2" style={{ fontFamily: 'Play, sans-serif' }}>WhatsApp Directo</h4>
              <p className="text-2xl font-bold text-white">$1,649 MXN</p>
              <p className="text-[#FF4646] text-sm mt-1">Precio final</p>
            </div>
            
            <div className="text-center p-4 bg-gray-500/10 rounded-lg border border-gray-500/30">
              <h4 className="font-bold text-gray-400 mb-2" style={{ fontFamily: 'Play, sans-serif' }}>Mercado Libre</h4>
              <p className="text-2xl font-bold text-white">$1,949 MXN</p>
              <p className="text-gray-400 text-sm mt-1">Incluye comisiones</p>
            </div>
          </div>
          
          <div className="text-center mt-6 p-4 bg-[#FF4646]/10 rounded-lg border border-[#FF4646]/30">
            <p className="text-[#FF4646] font-bold">
              💡 <span className="text-white">Consejo:</span> Compra por WhatsApp y ahorra hasta <span className="text-[#FF4646]">$300 MXN</span> por producto
            </p>
          </div>
        </motion.div>

        {/* Garantías comunes */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm" style={{ fontFamily: 'Lato, sans-serif' }}>
            ✅ En ambas opciones recibes: Producto original KOBA • Envío rápido y seguro • Garantía de calidad • Soporte post-venta
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CompraSeguraSection;
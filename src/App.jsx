import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Music, PartyPopper, Calendar } from 'lucide-react';
import foto from './assets/Neto.png'

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-amber-50">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Decorative elements */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-amber-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-200/20 rounded-full blur-2xl" />
        </div>

        {/* Content */}
        <div className="text-center max-w-2xl mx-auto space-y-8">
          {/* Pre-title */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center justify-center gap-2"
          >
            <PartyPopper className="w-5 h-5 text-amber-600" />
            <span className="text-amber-700 font-medium tracking-widest uppercase text-sm">
              Você está convidado
            </span>
            <PartyPopper className="w-5 h-5 text-amber-600" />
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900"
          >
            Aniversário do
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-amber-600 mt-2">
              Netinho
            </span>
          </motion.h1>

          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 p-1">
              <div className="w-full h-full rounded-full bg-white p-1">
                <img
                  src={foto}
                  alt="Netinho"
                  className="w-full h-full rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Invitation text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed px-4 max-w-xl mx-auto"
          >
            Venha celebrar comigo mais um ano de vida!  
            <br className="hidden md:block" />
            Vamos fazer essa festa ser <span className="font-semibold text-amber-700">inesquecível</span> juntos! 🥳
          </motion.p>
        </div>

                {/* Event details cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="w-full max-w-6xl mx-auto px-6 mt-16"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

            {/* Data */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-amber-100/50 border border-amber-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Calendar className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Data</h3>
              <p className="text-amber-700 font-semibold text-lg">Sábado, 10/01</p>
              <p className="text-gray-500 text-sm mt-2">Marca na agenda!</p>
            </motion.div>

            {/* Local */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-amber-100/50 border border-amber-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <MapPin className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Local</h3>
              <p className="text-amber-700 font-semibold text-lg">La Duca Bar</p>
              <p className="text-gray-500 text-sm mt-2">Rua Monte Serrat, 1070</p>
            </motion.div>

            {/* Horário */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-amber-100/50 border border-amber-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Horário</h3>
              <p className="text-amber-700 font-semibold text-lg">A partir das 17h</p>
              <p className="text-gray-500 text-sm mt-2">Chega cedo pra não perder nada!</p>
            </motion.div>

            {/* Música */}
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg shadow-amber-100/50 border border-amber-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-2xl flex items-center justify-center mb-4 mx-auto">
                <Music className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Música</h3>
              <p className="text-amber-700 font-semibold text-lg">Pagode & Sertanejo</p>
              <p className="text-gray-500 text-sm mt-2">O som que a gente ama! 🎵</p>
            </motion.div>

          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 mb-4">Te esperamos lá! 💛</p>

          <motion.a
            href="https://www.google.com/maps/search/Rua+Monte+Serrat+1070"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <MapPin className="w-5 h-5" />
            Ver no mapa
          </motion.a>
        </motion.div>

      </section>
    </div>
  );
}
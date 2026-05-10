'use client';

import { motion } from 'framer-motion';
import OpenButton from '@/components/OpenButton';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-50 to-pink-50 font-sans">
      <motion.div
        className="flex flex-col items-center justify-center gap-8 text-center px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Title */}
        <motion.h1
          className="text-5xl sm:text-6xl font-serif font-bold text-pink-900 leading-tight"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Happy Mother's Day ❤️
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-xl sm:text-2xl text-rose-700 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          I made something special for you.
        </motion.p>

        {/* Decorative flowers */}
        <motion.div
          className="text-4xl flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
            🌷
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.3, repeat: Infinity, delay: 0.2 }}>
            🌸
          </motion.span>
          <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 }}>
            🌹
          </motion.span>
        </motion.div>

        {/* Open button */}
        <OpenButton />
      </motion.div>
    </div>
  );
}

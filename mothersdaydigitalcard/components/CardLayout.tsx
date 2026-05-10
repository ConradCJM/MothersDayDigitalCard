'use client';

import { motion } from 'framer-motion';
import type { CardProps } from '@/types/card';

export default function CardLayout({ title, message, children }: CardProps) {
  return (
    <motion.div
      className="w-full max-w-2xl mx-auto px-8 py-12 rounded-2xl shadow-2xl bg-white border-4 border-pink-200"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
    >
      {/* Card heading */}
      <motion.h2
        className="text-4xl font-serif text-center text-pink-900 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        {title}
      </motion.h2>

      {/* Main message */}
      <motion.p
        className="text-center text-gray-700 leading-relaxed mb-8 font-light text-lg max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        {message}
      </motion.p>

      {/* Bouquet and other content */}
      {children}
    </motion.div>
  );
}

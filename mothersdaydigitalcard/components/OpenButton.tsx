'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function OpenButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/card');
  };

  return (
    <motion.button
      onClick={handleClick}
      className="px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-rose-500 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.6 }}
    >
      Open Card 💌
    </motion.button>
  );
}

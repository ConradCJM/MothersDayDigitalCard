'use client';

import { motion } from 'framer-motion';
import CardLayout from '@/components/CardLayout';
import Bouquet from '@/components/Bouquet';

export default function CardPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50 py-8 px-4">
      <CardLayout
        title="Dear Mom,"
        message="Thank you for every sacrifice, every hug, every late‑night talk, and every moment you believed in me even when I didn't. You are my strength, my comfort, and my favorite person."
      >
        {/* Custom Bouquet */}
        <Bouquet />
      </CardLayout>
    </div>
  );
}

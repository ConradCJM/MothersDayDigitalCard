'use client';

import { motion } from 'framer-motion';
import CardLayout from '@/components/CardLayout';
import Bouquet from '@/components/Bouquet';

export default function CardPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-rose-50 py-8 px-4">
      <CardLayout
        title="Dear Mom,"
        message="Thank you for every sacrifice, every hug, and every moment you believed in me even when I didn't. You are the best mom that I could ever ask for!"
      >
        {/* Custom Bouquet */}
        <Bouquet />
        {/* Signature */}
        <div className="mt-12 pt-8 border-t-2 border-pink-200 flex justify-end">
            <p className="text-lg text-pink-900 font-serif">
                Love CJ <span className="ml-2">❤️</span>
            </p>
        </div>
      </CardLayout>
    </div>
  );
}

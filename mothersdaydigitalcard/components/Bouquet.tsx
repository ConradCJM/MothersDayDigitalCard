'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Bouquet() {
    const [isOpened, setIsOpened] = useState(false);

    return (
        <div className="relative w-full h-80 flex flex-col items-center justify-center">
            {!isOpened ? (
                // Gift Box
                <motion.button
                    onClick={() => setIsOpened(true)}
                    className="focus:outline-none cursor-pointer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <motion.svg
                        width="150"
                        height="150"
                        viewBox="0 0 120 150"
                        animate={{ y: [0, -15, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity }}
                    >
                        {/* Gift box body */}
                        <rect x="20" y="40" width="80" height="60" fill="#ec4899" rx="5" />
                        {/* Lid */}
                        <rect x="20" y="30" width="80" height="15" fill="#f472b6" rx="3" />
                        {/* Ribbon vertical */}
                        <rect x="55" y="20" width="10" height="80" fill="#fbbf24" />
                        {/* Ribbon horizontal */}
                        <rect x="20" y="62" width="80" height="8" fill="#fbbf24" />
                        {/* Bow left */}
                        <circle cx="45" cy="28" r="9" fill="#fbbf24" />
                        {/* Bow right */}
                        <circle cx="75" cy="28" r="9" fill="#fbbf24" />
                        {/* Bow center */}
                        <circle cx="60" cy="28" r="7" fill="#f59e0b" />
                        {/* Text */}
                        <text x="60" y="120" textAnchor="middle" fontSize="14" fill="#926400" fontWeight="bold">
                            Click/Tap to open!
                        </text>
                    </motion.svg>
                </motion.button>
            ) : (
                // Bouquet (revealed)
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
                >
                    <motion.svg
                        width="300"
                        height="350"
                        viewBox="0 0 300 360"
                        className="drop-shadow-lg"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    >
                        {/* Vase */}
                        {/* Bouquet Vase - Wide and elegant */}
                        {/* Modern Tall Bouquet Vase */}
                        <path
                            d="M 115 180 L 100 200 Q 85 220 85 280 L 85 310 Q 85 320 100 320 L 200 320 Q 215 320 215 310 L 215 280 Q 215 220 200 200 L 185 180"
                            fill="#f3e8ff"
                            stroke="#c4b5fd"
                            strokeWidth="2.5"
                        />
                        {/* Opening */}
                        <ellipse cx="150" cy="180" rx="50" ry="14" fill="#ddd6fe" stroke="#c4b5fd" strokeWidth="2" />
                        {/* Accent line */}
                        <line x1="90" y1="260" x2="210" y2="260" stroke="#c4b5fd" strokeWidth="1" opacity="0.5" />

                        {/* Flower 1 - Pink-light (Right-front) */}
                        <g>
                            <line x1="150" y1="220" x2="200" y2="125" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="200"
                                    cy="125"
                                    rx="11"
                                    ry="20"
                                    fill="#f472b6"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 200 125)`}
                                />
                            ))}
                            <circle cx="200" cy="125" r="9" fill="#fcd34d" />
                        </g>

                        {/* Leaves */}
                        <ellipse cx="130" cy="180" rx="8" ry="18" fill="#22c55e" opacity="0.7" transform="rotate(-30 130 180)" />
                        <ellipse cx="170" cy="185" rx="8" ry="18" fill="#16a34a" opacity="0.7" transform="rotate(35 170 185)" />
                        <ellipse cx="140" cy="150" rx="7" ry="16" fill="#10b981" opacity="0.6" transform="rotate(-45 140 150)" />
                        <ellipse cx="160" cy="155" rx="7" ry="16" fill="#059669" opacity="0.6" transform="rotate(40 160 155)" />
                    </motion.svg>
                </motion.div>
            )}
        </div>
    );
}
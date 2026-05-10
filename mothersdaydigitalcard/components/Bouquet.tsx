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
                        {/* Opening */}
                        <ellipse cx="150" cy="180" rx="35" ry="10" fill="#f3e8ff" stroke="#c4b5fd" strokeWidth="2" />
                        <path
                            d="M 125 180 L 115 195 Q 105 210 105 260 L 105 285 Q 105 295 115 295 L 185 295 Q 195 295 195 285 L 195 260 Q 195 210 185 195 L 175 180"
                            fill="#f3e8ff"
                            stroke="#c4b5fd"
                            strokeWidth="2.5"
                        />

                        {/* Accent line */}
                        <line x1="105" y1="240" x2="195" y2="240" stroke="#c4b5fd" strokeWidth="1" opacity="0.5" />

                        {/* Flower 1 - Pink-light (Mid-Right) */}
                        <g>
                            <line x1="150" y1="170" x2="143" y2="80" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="143"
                                    cy="80"
                                    rx="11"
                                    ry="20"
                                    fill="#f472b6"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 143 80)`}
                                />
                            ))}
                            <circle cx="143" cy="80" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 7 - Pink-light () */}
                        <g>
                            <line x1="150" y1="170" x2="175" y2="84" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="175"
                                    cy="84"
                                    rx="11"
                                    ry="20"
                                    fill="#8a72f4"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 175 84)`}
                                />
                            ))}
                            <circle cx="175" cy="84" r="9" fill="#fcd34d" />
                        </g>
                        
                        {/* Flower 2 - Orange (Left) */}
                        <g>
                            <line x1="145" y1="170" x2="115" y2="110" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="115"
                                    cy="110"
                                    rx="11"
                                    ry="20"
                                    fill="#ffbb00"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 115 110)`}
                                />
                            ))}
                            
                            <circle cx="115" cy="110" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 3 - Blue (Right) */}
                        <g>
                            <line x1="160" y1="170" x2="190" y2="120" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="190"
                                    cy="120"
                                    rx="11"
                                    ry="20"
                                    fill="#00d9ff"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 190 120)`}
                                />
                            ))}
                            
                            <circle cx="190" cy="120" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 4 - Purple (Right) */}
                        <g>
                            <line x1="160" y1="170" x2="165" y2="140" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="165"
                                    cy="140"
                                    rx="11"
                                    ry="20"
                                    fill="#7700ff"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 165 140)`}
                                />
                            ))}
                            
                            <circle cx="165" cy="140" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 5 - Red (MidBotLeft) */}
                        <g>
                            <line x1="147" y1="170" x2="140" y2="120" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="140"
                                    cy="120"
                                    rx="11"
                                    ry="20"
                                    fill="#ff0000"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 140 120)`}
                                />
                            ))}
                            
                            <circle cx="140" cy="120" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 6 - Yellow Green (MidRight) */}
                        <g>
                            <line x1="156" y1="170" x2="160" y2="105" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="160"
                                    cy="105"
                                    rx="11"
                                    ry="20"
                                    fill="#577c00"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 160 105)`}
                                />
                            ))}
                            
                            <circle cx="160" cy="105" r="9" fill="#fcd34d" />
                        </g>
                        {/* Flower 8 - Pink-light () */}
                        <g>
                            <line x1="150" y1="170" x2="125" y2="150" stroke="#22c55e" strokeWidth="2" />
                            {[0, 72, 144, 216, 288].map((angle) => (
                                <ellipse
                                    key={`flower5-${angle}`}
                                    cx="125"
                                    cy="150"
                                    rx="11"
                                    ry="20"
                                    fill="#165349"
                                    opacity="0.9"
                                    transform={`rotate(${angle} 125 150)`}
                                />
                            ))}
                            <circle cx="125" cy="150" r="9" fill="#fcd34d" />
                        </g>
                        



                    </motion.svg>
                </motion.div>
            )}
        </div>
    );
}
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ frontImage, backImage, title }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex flex-col items-center"
    >
      <img src={title} alt="Card Title" className="w-[240px] h-auto mb-4" />

      <div
        className="relative w-full h-[400px] [perspective:1000px] cursor-pointer group"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div
          className={`relative w-full h-full duration-700 [transform-style:preserve-3d] ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden group-hover:scale-[1.03] transition-transform duration-300 ease-out">
            <motion.img
              src={frontImage}
              alt="Front"
              className="w-full h-full object-cover rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden rotate-y-180 group-hover:scale-[1.03] transition-transform duration-300 ease-out">
            <motion.img
              src={backImage}
              alt="Back"
              className="w-full h-full object-cover rounded-xl shadow-xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>

      {/* Tombol */}
      <motion.button
        onClick={() => setIsFlipped(!isFlipped)}
        whileTap={{ scale: 0.95 }}
        className="mt-4 px-4 py-2 text-sm font-semibold bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 transition"
      >
        {isFlipped ? 'Kembali' : 'Lihat Detail'}
      </motion.button>
    </motion.div>
  );
};

export default FlipCard;

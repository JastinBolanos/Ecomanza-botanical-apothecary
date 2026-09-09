import React, { useState } from 'react';
import { motion } from 'motion/react';

interface AnimatedEcomanzaLogoProps {
  className?: string;
  color?: string; // Brand burgundy default #611C35
  height?: number | string;
}

const letterVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.94, filter: 'blur(6px)' },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.75,
      delay: 0.15 + i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

export const AnimatedEcomanzaLogo: React.FC<AnimatedEcomanzaLogoProps> = ({
  className = 'h-16 sm:h-24 md:h-32 lg:h-36 w-auto max-w-[92vw]',
  color = '#611C35',
  height,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative inline-flex justify-center items-center select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Ambient Breathing Luminous Aura behind Logo */}
      <motion.div
        className="absolute -inset-6 sm:-inset-10 -z-10 rounded-full blur-2xl pointer-events-none"
        animate={{
          opacity: isHovered ? 0.35 : [0.15, 0.28, 0.15],
          scale: isHovered ? 1.05 : [0.97, 1.03, 0.97],
        }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          background: 'radial-gradient(ellipse at center, rgba(97,28,53,0.3) 0%, rgba(197,168,128,0.15) 50%, transparent 75%)',
        }}
      />

      <div className="relative overflow-hidden p-2">
        <motion.svg
          viewBox="0 0 636 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`${className} drop-shadow-sm transition-transform duration-700`}
          style={height ? { height } : undefined}
          role="img"
          aria-label="ECOMANZA"
          initial="hidden"
          animate="visible"
          animate-hover={isHovered ? { scale: 1.015 } : { scale: 1 }}
        >
          {/* ===== 0: E ===== */}
          <motion.g
            custom={0}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <rect x="0" y="1" width="54" height="18" fill={color} />
            <rect x="0" y="32" width="54" height="18" fill={color} />
            <rect x="0" y="63" width="54" height="18" fill={color} />
          </motion.g>

          {/* ===== 1: C ===== */}
          <motion.g
            custom={1}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <path
              d="M 125,1 C 94,1 66,18 66,41 C 66,64 94,81 125,81 L 125,63 C 104,63 88,52 88,41 C 88,30 104,19 125,19 Z"
              fill={color}
            />
          </motion.g>

          {/* ===== 2: O ===== */}
          <motion.g
            custom={2}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M 180,1 C 153,1 138,19 138,41 C 138,63 153,81 180,81 C 207,81 222,63 222,41 C 222,19 207,1 180,1 Z M 180,19 C 193,19 200,29 200,41 C 200,53 193,63 180,63 C 167,63 160,53 160,41 C 160,29 167,19 180,19 Z"
              fill={color}
            />
          </motion.g>

          {/* ===== 3: M ===== */}
          <motion.g
            custom={3}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <rect x="234" y="1" width="20" height="80" fill={color} />
            <rect x="294" y="1" width="20" height="80" fill={color} />
            <polygon points="244,1 258,1 274,81 264,81" fill={color} />
            <polygon points="304,1 290,1 274,81 284,81" fill={color} />
          </motion.g>

          {/* ===== 4: A (1) ===== */}
          <motion.g
            custom={4}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <polygon points="324,81 360,1 396,81 378,81 360,40 342,81" fill={color} />
            <polygon points="342,40 360,1 378,40" fill={color} />
            <polygon points="351,81 360,48 369,81" fill={color} />
          </motion.g>

          {/* ===== 5: N ===== */}
          <motion.g
            custom={5}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <rect x="406" y="1" width="20" height="80" fill={color} />
            <rect x="454" y="1" width="20" height="80" fill={color} />
            <polygon points="406,1 426,1 474,81 454,81" fill={color} />
          </motion.g>

          {/* ===== 6: Z ===== */}
          <motion.g
            custom={6}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <polygon points="484,1 532,1 550,19 484,19" fill={color} />
            <polygon points="550,19 530,19 484,63 504,63" fill={color} />
            <polygon points="504,63 550,63 550,81 502,81 484,63" fill={color} />
            <polygon points="502,81 550,81 550,63 504,63" fill={color} />
          </motion.g>

          {/* ===== 7: A (2) ===== */}
          <motion.g
            custom={7}
            variants={letterVariants}
            whileHover={{ y: -3 }}
            transition={{ duration: 0.25 }}
          >
            <polygon points="560,81 596,1 632,81 614,81 596,40 578,81" fill={color} />
            <polygon points="578,40 596,1 614,40" fill={color} />
            <polygon points="587,81 596,48 605,81" fill={color} />
          </motion.g>
        </motion.svg>

        {/* Specular Light Gleam (Sweep Animation Across Title) */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ x: '-120%', opacity: 0 }}
          animate={{
            x: ['-120%', '160%'],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 2.2,
            repeat: Infinity,
            repeatDelay: 3.8,
            ease: 'easeInOut',
          }}
          style={{
            background:
              'linear-gradient(110deg, transparent 20%, rgba(255,255,255,0.7) 48%, rgba(245,230,200,0.85) 52%, transparent 80%)',
            mixBlendMode: 'overlay',
          }}
        />
      </div>
    </div>
  );
};

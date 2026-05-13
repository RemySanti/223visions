import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Gradient Orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, rgba(236, 72, 153, 0.2) 50%, transparent 100%)',
          top: '10%',
          left: '10%',
        }}
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(168, 85, 247, 0.2) 50%, transparent 100%)',
          bottom: '10%',
          right: '10%',
        }}
        animate={{
          x: [0, -80, 0],
          y: [0, -60, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.5) 0%, rgba(168, 85, 247, 0.3) 50%, transparent 100%)',
          top: '50%',
          left: '50%',
        }}
        animate={{
          x: [0, -50, 0],
          y: [0, 100, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-purple-400 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}

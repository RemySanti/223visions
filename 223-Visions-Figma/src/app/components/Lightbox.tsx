import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';
import { useEffect } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title?: string;
  category?: string;
}

export function Lightbox({ isOpen, onClose, imageSrc, title, category }: LightboxProps) {
  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
          onClick={onClose}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/70 hover:text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-colors z-50"
          >
            <X size={32} />
          </button>

          {/* Image Container */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-full max-h-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking image
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl ring-1 ring-white/10">
              <ImageWithFallback
                src={imageSrc}
                alt={title || 'Portfolio Image'}
                className="max-h-[85vh] max-w-full object-contain"
              />
            </div>

            {/* Caption */}
            {(title || category) && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                delay={0.2}
                className="mt-4 text-center"
              >
                {title && <h3 className="text-xl md:text-2xl font-medium text-white">{title}</h3>}
                {category && <p className="text-white/60 mt-1 uppercase tracking-wider text-sm">{category}</p>}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

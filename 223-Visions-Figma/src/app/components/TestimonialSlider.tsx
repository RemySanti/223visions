import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "223Visions made it happen — their team handled everything! From start to finish, they were professional, creative, and delivered beyond our expectations.",
    author: "Sarah Johnson",
    role: "Event Coordinator",
  },
  {
    id: 2,
    quote: "Working with Chris and his team was an absolute pleasure. They captured our vision perfectly and brought it to life with stunning imagery.",
    author: "Michael Chen",
    role: "Marketing Director",
  },
  {
    id: 3,
    quote: "The level of professionalism and creativity from 223Visions is unmatched. They're our go-to team for all our visual content needs.",
    author: "Emily Rodriguez",
    role: "Brand Manager",
  },
];

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-4">Client Love</h2>
        <div className="flex justify-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </div>
      
      <div className="relative min-h-[300px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-2xl"
          >
            <Quote className="w-12 h-12 mx-auto mb-6 opacity-20" />
            <h3 className="text-xl md:text-2xl font-light italic leading-relaxed mb-8">
              "{testimonials[currentIndex].quote}"
            </h3>
            
            <div>
              <p className="font-bold text-lg">{testimonials[currentIndex].author}</p>
              <p className="opacity-60 text-sm uppercase tracking-widest">{testimonials[currentIndex].role}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center gap-6 mt-8">
        <Button variant="ghost" size="icon" onClick={prev} className="rounded-full hover:bg-black/5">
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIndex ? 'w-8 bg-black/80' : 'w-2 bg-black/20'
              }`}
            />
          ))}
        </div>
        <Button variant="ghost" size="icon" onClick={next} className="rounded-full hover:bg-black/5">
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
    </div>
  );
}

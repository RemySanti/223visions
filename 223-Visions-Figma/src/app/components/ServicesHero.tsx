import { motion } from 'motion/react';
import { Camera, Video, Award, Sparkles, Star, Zap, TrendingUp, CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export function ServicesHero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stats = [
    { icon: Camera, value: '500+', label: 'Projects Delivered' },
    { icon: Star, value: '5.0', label: 'Client Rating' },
    { icon: Award, value: '100%', label: 'Satisfaction Rate' },
  ];

  const floatingIcons = [
    { Icon: Camera, delay: 0, position: { top: '20%', left: '10%' } },
    { Icon: Video, delay: 0.2, position: { top: '60%', left: '15%' } },
    { Icon: Sparkles, delay: 0.4, position: { top: '30%', right: '10%' } },
    { Icon: Star, delay: 0.6, position: { top: '70%', right: '20%' } },
    { Icon: Zap, delay: 0.8, position: { top: '15%', right: '25%' } },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-black" ref={containerRef}>
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 20% 30%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 70%, rgba(219, 39, 119, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0"
        />
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 80% 20%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(251, 146, 60, 0.2) 0%, transparent 50%)',
              'radial-gradient(circle at 60% 40%, rgba(219, 39, 119, 0.2) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute inset-0"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Floating Icons with Parallax */}
      {floatingIcons.map(({ Icon, delay, position }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={position}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: delay,
            ease: 'easeInOut',
          }}
        >
          <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10 flex items-center justify-center">
            <Icon className="w-8 h-8 md:w-12 md:h-12 text-purple-400" />
          </div>
        </motion.div>
      ))}

      {/* Mouse-Following Gradient Orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full pointer-events-none blur-3xl"
        style={{
          background: 'radial-gradient(circle, rgba(147, 51, 234, 0.4) 0%, transparent 70%)',
          left: `${mousePosition.x * 100}%`,
          top: `${mousePosition.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 200 }}
      />

      {/* Main Content */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 pt-32 pb-20 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-6xl mx-auto">
          {/* Top Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 border border-purple-500/50 backdrop-blur-xl shadow-2xl shadow-purple-500/20"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles size={20} className="text-purple-400" />
              </motion.div>
              <span className="text-white">Atlanta's Premier Hybrid Shooting Agency</span>
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 border-2 border-black" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-orange-400 border-2 border-black" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-purple-400 border-2 border-black" />
              </div>
            </motion.div>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-none">
              <motion.span
                className="block bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Premium
              </motion.span>
              <motion.span
                className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Photography
              </motion.span>
              <motion.span
                className="block text-white"
              >
                & Videography
              </motion.span>
            </h1>
          </motion.div>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            From intimate headshots to full-scale events, we deliver 
            <span className="text-purple-400"> stunning visual content </span>
            that captures your most important moments with 
            <span className="text-pink-400"> cinematic precision</span>.
          </motion.p>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {[
              { icon: CheckCircle2, text: 'Same-Day Booking' },
              { icon: Zap, text: 'Fast Turnaround' },
              { icon: Star, text: '5-Star Rated' },
              { icon: TrendingUp, text: 'Professional Results' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 px-5 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all"
              >
                <feature.icon size={18} className="text-purple-400" />
                <span className="text-white/90 text-sm">{feature.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
              >
                <a
                  href="https://links.223visions.com/widget/bookings/223-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2" size={20} />
                  Book Your Session
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white/20 hover:bg-white/10 backdrop-blur-xl"
              >
                <Link to="/portfolio">
                  <Play className="mr-2" size={20} />
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-purple-500/50 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/10 group-hover:to-pink-600/10 transition-all duration-300" />
                  
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-6 h-6 text-purple-400" />
                      </div>
                    </div>
                    <div className="text-center">
                      <motion.div
                        className="text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
                        whileHover={{ scale: 1.1 }}
                      >
                        {stat.value}
                      </motion.div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Service Categories Preview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {[
              {
                icon: Camera,
                title: 'Photography',
                price: 'From $275/hr',
                features: ['Headshots', 'Events', 'Church Services'],
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                icon: Video,
                title: 'Videography',
                price: 'From $315/hr',
                features: ['Events', 'Promos', 'Church Services'],
                gradient: 'from-pink-600 to-orange-600',
                popular: true,
              },
              {
                icon: Award,
                title: 'Hybrid Coverage',
                price: 'From $550',
                features: ['Photo + Video', 'Full Coverage', 'Best Value'],
                gradient: 'from-purple-600 via-pink-600 to-orange-600',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative group"
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-4 py-1 rounded-full shadow-lg flex items-center gap-1"
                    >
                      <Star size={12} fill="currentColor" />
                      POPULAR
                    </motion.span>
                  </div>
                )}

                <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xl border transition-all duration-300 ${
                  service.popular 
                    ? 'border-purple-500/50 bg-gradient-to-br from-purple-600/10 to-pink-600/10' 
                    : 'border-white/10 hover:border-purple-500/30'
                }`}>
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg`}
                      >
                        <service.icon className="w-7 h-7 text-white" />
                      </motion.div>
                    </div>

                    <h3 className="text-center mb-2 text-white">{service.title}</h3>
                    <div className={`text-center text-2xl mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {service.price}
                    </div>

                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-white/70 text-sm">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex justify-center mt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex flex-col items-center gap-2 text-white/40"
            >
              <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-2"
              >
                <motion.div
                  animate={{ y: [0, 12, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-1.5 h-1.5 bg-white/40 rounded-full"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

// Helper component (add Calendar import)
function Calendar({ className, size }: { className?: string; size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}
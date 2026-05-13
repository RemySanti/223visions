import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera, Video, Award, Church, Users, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import logo223 from 'figma:asset/05b61e39e917836bc4a065d6b27a645561ee9068.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/service-areas', label: 'Areas' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  const servicesDropdownItems = [
    { 
      icon: Camera, 
      title: 'Photography',
      description: 'From $275/hr',
      path: '/services#photography',
    },
    { 
      icon: Video, 
      title: 'Videography',
      description: 'From $315/hr',
      path: '/services#videography',
    },
    { 
      icon: Award, 
      title: 'Hybrid Packages',
      description: 'Photo + Video',
      path: '/services#hybrid',
    },
    { 
      icon: Users, 
      title: 'Headshots',
      description: '$350 flat rate',
      path: '/services#headshots',
    },
    { 
      icon: Church, 
      title: 'Church Services',
      description: 'From $300',
      path: '/services#church',
    },
  ];

  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current);
    }
    setIsServicesOpen(true);
  };

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'glass-strong shadow-2xl shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="relative z-50 group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <img
                src={logo223}
                alt="223 Visions"
                className="h-16 w-auto relative z-10"
                style={{ transform: 'scale(1.3)' }}
              />
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 blur-xl transition-all duration-500 rounded-full" />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => {
              // Special handling for Services link with dropdown
              if (link.path === '/services') {
                return (
                  <div
                    key={link.path}
                    className="relative"
                    onMouseEnter={handleServicesMouseEnter}
                    onMouseLeave={handleServicesMouseLeave}
                  >
                    <Link
                      to={link.path}
                      className="relative px-4 py-2 group flex items-center gap-1"
                    >
                      <span
                        className={`relative z-10 transition-colors duration-300 ${
                          location.pathname === link.path
                            ? 'text-white'
                            : 'text-white/70 group-hover:text-white'
                        }`}
                      >
                        {link.label}
                      </span>
                      <motion.div
                        animate={{ rotate: isServicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} className={`${
                          location.pathname === link.path
                            ? 'text-white'
                            : 'text-white/70 group-hover:text-white'
                        }`} />
                      </motion.div>
                      
                      {/* Active indicator */}
                      {location.pathname === link.path && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute inset-0 glass-purple rounded-xl"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                        />
                      )}
                      
                      {/* Hover background */}
                      {location.pathname !== link.path && (
                        <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                      )}
                    </Link>

                    {/* Services Dropdown */}
                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-0 mt-2 w-72 glass-strong border border-white/20 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
                        >
                          <div className="p-3">
                            {servicesDropdownItems.map((item, index) => (
                              <motion.div
                                key={item.path}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                              >
                                <Link
                                  to={item.path}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:glass-purple transition-all duration-300 group/item"
                                  onClick={() => setIsServicesOpen(false)}
                                >
                                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center flex-shrink-0 group-hover/item:from-purple-600/40 group-hover/item:to-pink-600/40 transition-all">
                                    <item.icon size={20} className="text-purple-400 group-hover/item:text-purple-300" />
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <div className="text-white text-sm mb-0.5 group-hover/item:text-white transition-colors">
                                      {item.title}
                                    </div>
                                    <div className="text-white/50 text-xs group-hover/item:text-white/70 transition-colors">
                                      {item.description}
                                    </div>
                                  </div>
                                </Link>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* View All Services Link */}
                          <div className="border-t border-white/10 p-3">
                            <Link
                              to="/services"
                              className="flex items-center justify-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors py-2"
                              onClick={() => setIsServicesOpen(false)}
                            >
                              <span>View All Services</span>
                              <ChevronDown size={14} className="rotate-[-90deg]" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              // Regular nav links
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 group"
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      location.pathname === link.path
                        ? 'text-white'
                        : 'text-white/70 group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>
                  
                  {/* Active indicator */}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="navIndicator"
                      className="absolute inset-0 glass-purple rounded-xl"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  
                  {/* Hover background */}
                  {location.pathname !== link.path && (
                    <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300" />
                  )}
                </Link>
              );
            })}
            
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button 
                asChild 
                className="ml-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 border-0"
              >
                <a
                  href="https://links.223visions.com/widget/bookings/223-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Now
                </a>
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="md:hidden relative z-50 w-10 h-10 rounded-xl glass flex items-center justify-center text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="md:hidden fixed right-0 top-0 bottom-0 w-80 max-w-[85vw] glass-strong z-40 border-l border-white/20 shadow-2xl"
            >
              <nav className="flex flex-col gap-2 p-6 pt-24">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block px-6 py-4 rounded-2xl transition-all duration-300 ${
                        location.pathname === link.path
                          ? 'glass-purple text-white shadow-lg shadow-purple-500/20'
                          : 'text-white/70 hover:glass hover:text-white'
                      }`}
                    >
                      <span className="text-xl">{link.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="mt-6"
                >
                  <Button 
                    asChild 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/30 text-lg py-6 border-0"
                  >
                    <a
                      href="https://links.223visions.com/widget/bookings/223-booking"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      Book Now
                    </a>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
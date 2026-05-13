import { Link } from 'react-router-dom';
import { Instagram, Mail, MapPin, ArrowRight, Camera, Video, Award } from 'lucide-react';
import { motion } from 'motion/react';
import logo223 from 'figma:asset/05b61e39e917836bc4a065d6b27a645561ee9068.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/service-areas', label: 'Service Areas' },
  ];

  const services = [
    { icon: Camera, label: 'Photography' },
    { icon: Video, label: 'Videography' },
    { icon: Award, label: 'Hybrid Coverage' },
  ];

  return (
    <footer className="relative z-10 mt-24 border-t border-white/10">
      {/* Main Footer Content */}
      <div className="glass-subtle">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Logo & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <Link to="/" className="inline-block group mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <img
                    src={logo223}
                    alt="223 Visions"
                    className="h-16 w-auto"
                    style={{ transform: 'scale(1.3)' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-pink-600/0 group-hover:from-purple-600/20 group-hover:to-pink-600/20 blur-xl transition-all duration-500 rounded-full" />
                </motion.div>
              </Link>
              <p className="text-white/60 mb-6 leading-relaxed">
                Atlanta's premier hybrid shooting agency for photography & videography.
              </p>
              
              {/* Social Links */}
              <div className="flex gap-3">
                <motion.a
                  href="https://www.instagram.com/223.visions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:glass-purple transition-all duration-300"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  href="mailto:Christian@223visions.com"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white/70 hover:text-white hover:glass-purple transition-all duration-300"
                >
                  <Mail size={20} />
                </motion.a>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Quick Links
              </h3>
              <div className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="group flex items-center gap-2 text-white/60 hover:text-white transition-colors"
                  >
                    <ArrowRight 
                      size={16} 
                      className="opacity-0 group-hover:opacity-100 -ml-6 group-hover:ml-0 transition-all duration-300" 
                    />
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      {link.label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Services
              </h3>
              <div className="flex flex-col gap-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors group"
                  >
                    <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:glass-purple transition-all duration-300">
                      <service.icon size={16} className="text-purple-400" />
                    </div>
                    <span>{service.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="mb-6 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <div className="flex flex-col gap-4">
                <motion.a
                  href="mailto:Christian@223visions.com"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:glass-purple transition-all duration-300">
                    <Mail size={16} className="text-purple-400" />
                  </div>
                  <span className="break-all">Christian@223visions.com</span>
                </motion.a>
                
                <motion.a
                  href="https://www.instagram.com/223.visions/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-white/60 hover:text-white transition-all duration-300 group"
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:glass-purple transition-all duration-300">
                    <Instagram size={16} className="text-purple-400" />
                  </div>
                  <span>@223.visions</span>
                </motion.a>
                
                <motion.div
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-white/60 group"
                >
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center">
                    <MapPin size={16} className="text-purple-400" />
                  </div>
                  <span>Atlanta, GA</span>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-white/40 text-sm text-center md:text-left">
                © {currentYear} 223 Visions. All rights reserved.
              </p>
              <p className="text-white/40 text-sm text-center md:text-right">
                Led by Creative Director{' '}
                <span className="text-purple-400">Christian Bates</span>
              </p>
            </div>
            
            {/* Market Motion Agency Credit */}
            <div className="flex justify-center mt-6 pt-6 border-t border-white/5">
              <motion.a
                href="https://marketmotionagency.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/30 hover:text-white/60 text-xs transition-all duration-300 group flex items-center gap-2"
              >
                <span>Created by</span>
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-purple-300 group-hover:to-pink-300 transition-all duration-300">
                  Market Motion Agency
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
    </footer>
  );
}
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Camera, Video, Award, Sparkles } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ServiceAreas() {
  const areas = [
    {
      name: 'Buckhead',
      slug: 'buckhead',
      description: 'Premium photography & videography in Atlanta\'s upscale district',
      landmarks: ['Lenox Square', 'Phipps Plaza', 'Buckhead Village'],
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
      gradient: 'from-purple-600 to-pink-600',
    },
    {
      name: 'Midtown',
      slug: 'midtown',
      description: 'Creative visual content in the heart of Atlanta\'s arts district',
      landmarks: ['Piedmont Park', 'Fox Theatre', 'High Museum'],
      image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800',
      gradient: 'from-pink-600 to-orange-600',
    },
    {
      name: 'Downtown Atlanta',
      slug: 'downtown-atlanta',
      description: 'Professional coverage for Atlanta\'s business and entertainment hub',
      landmarks: ['Centennial Park', 'State Farm Arena', 'Mercedes-Benz Stadium'],
      image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800',
      gradient: 'from-orange-600 to-purple-600',
    },
    {
      name: 'Decatur',
      slug: 'decatur',
      description: 'Capturing moments in Atlanta\'s vibrant historic community',
      landmarks: ['Decatur Square', 'Agnes Scott College', 'Glenlake Park'],
      image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800',
      gradient: 'from-purple-600 to-blue-600',
    },
    {
      name: 'Sandy Springs',
      slug: 'sandy-springs',
      description: 'Premier visual services for North Atlanta\'s thriving city',
      landmarks: ['Chattahoochee River', 'City Springs', 'Abernathy Greenway'],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
      gradient: 'from-blue-600 to-purple-600',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <MapPin size={18} className="text-purple-400" />
                <span className="text-white">Serving Greater Atlanta</span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6">
              Professional Photography & Videography{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Across Atlanta
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              223 Visions brings premium hybrid shooting services to every corner of Atlanta. 
              Select your area below to learn about our local services and availability.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { icon: Camera, label: '5+ Areas' },
                { icon: Award, label: '500+ Projects' },
                { icon: Sparkles, label: '5-Star Rated' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass rounded-2xl p-4"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Select Your Atlanta Area</h2>
            <p className="text-white/60 text-lg">
              Choose your location to see our services, pricing, and local availability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {areas.map((area, index) => (
              <motion.div
                key={area.slug}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <Link to={`/service-areas/${area.slug}`}>
                  <div className="glass rounded-3xl overflow-hidden hover:glass-strong transition-all duration-500">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={area.image}
                        alt={`${area.name} Photography & Videography`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                      
                      {/* Badge on image */}
                      <div className="absolute top-4 right-4">
                        <div className={`glass-purple rounded-full px-4 py-2 text-xs flex items-center gap-2`}>
                          <MapPin size={14} />
                          Available Now
                        </div>
                      </div>

                      {/* Location Name Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl mb-1">{area.name}</h3>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <p className="text-white/70 mb-4 leading-relaxed">
                        {area.description}
                      </p>

                      {/* Landmarks */}
                      <div className="mb-6">
                        <div className="text-xs text-white/40 mb-2 uppercase tracking-wider">
                          Popular Locations
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {area.landmarks.map((landmark, i) => (
                            <span
                              key={i}
                              className="glass-subtle rounded-full px-3 py-1 text-xs text-white/60"
                            >
                              {landmark}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full bg-gradient-to-r ${area.gradient} hover:shadow-lg hover:shadow-purple-500/30 transition-all border-0 group`}
                      >
                        View {area.name} Services
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">What We Offer in Every Area</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Consistent premium service across all Atlanta locations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: Camera,
                title: 'Photography Services',
                services: ['Headshots', 'Event Photography', 'Church Services', 'Corporate Events'],
                price: 'From $275/hr',
              },
              {
                icon: Video,
                title: 'Videography Services',
                services: ['Event Videos', 'Promotional Content', 'Church Services', 'Brand Videos'],
                price: 'From $315/hr',
              },
              {
                icon: Award,
                title: 'Hybrid Coverage',
                services: ['Photo + Video', 'Full Event Coverage', 'Multi-Cam Setup', 'Best Value'],
                price: 'From $550',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                  <service.icon size={28} className="text-white" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3">
                  {service.services.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gradient rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6">Can't Find Your Area?</h2>
            <p className="text-white/70 text-xl mb-10">
              We service the entire Greater Atlanta Metro area. Contact us to discuss 
              your specific location and how we can help bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 border-0"
                >
                  <a
                    href="https://links.223visions.com/widget/bookings/223-booking"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                  className="text-lg px-8 py-6 glass border-white/20 hover:glass-strong"
                >
                  <Link to="/contact">
                    Contact Us
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

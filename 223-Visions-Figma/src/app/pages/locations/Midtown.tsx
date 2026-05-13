import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Video, Award, CheckCircle2, ArrowRight, Phone, Mail, Clock, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function Midtown() {
  const services = [
    {
      icon: Camera,
      title: 'Midtown Photography',
      price: 'From $275/hr',
      features: [
        'Creative Portraits',
        'Arts & Culture Events',
        'Urban Photography',
        'Corporate Headshots',
      ],
    },
    {
      icon: Video,
      title: 'Midtown Videography',
      price: 'From $315/hr',
      features: [
        'Music Videos',
        'Arts Documentation',
        'Event Coverage',
        'Brand Content',
      ],
    },
    {
      icon: Award,
      title: 'Midtown Hybrid Packages',
      price: 'From $550',
      features: [
        'Photo + Video',
        'Festival Coverage',
        'Concert Documentation',
        'Complete Edit Suite',
      ],
    },
  ];

  const landmarks = [
    'Piedmont Park',
    'Fox Theatre',
    'High Museum of Art',
    'Atlantic Station',
    'Woodruff Arts Center',
    'Ponce City Market',
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=1600"
            alt="Midtown Atlanta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg shadow-pink-500/20">
                <MapPin size={18} className="text-pink-400" />
                <span className="text-white">Now Serving Midtown</span>
              </div>
            </motion.div>

            <h1 className="mb-6">
              Midtown Atlanta{' '}
              <span className="bg-gradient-to-r from-pink-400 via-orange-400 to-pink-400 bg-clip-text text-transparent">
                Photography & Videography
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Creative photography and videography services in the heart of Atlanta's arts and 
              culture district. From Piedmont Park to the Fox Theatre, we capture Midtown's 
              vibrant energy and artistic spirit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 shadow-2xl shadow-pink-500/50 border-0"
                >
                  <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                    Book Midtown Session
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 glass border-white/20 hover:glass-strong">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Same-Day Booking', icon: Clock },
                { label: '5-Star Rated', icon: Star },
                { label: 'Arts District Experts', icon: MapPin },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-pink-400" />
                  <div className="text-xs text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Midtown Services</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Creative visual services for Atlanta's arts and culture hub
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass rounded-3xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-600 to-orange-600 flex items-center justify-center mb-6 shadow-lg">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <div className="text-2xl bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent mb-6">
                  {service.price}
                </div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={16} className="text-pink-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Popular Midtown Locations</h2>
            <p className="text-white/60 text-lg">Expert coverage at Midtown's iconic venues</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {landmarks.map((landmark, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-2xl p-6 text-center"
              >
                <MapPin className="w-6 h-6 mx-auto mb-3 text-pink-400" />
                <div className="text-white">{landmark}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-600/30 to-orange-600/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-gradient rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto"
          >
            <h2 className="mb-6">Ready to Book Your Midtown Session?</h2>
            <p className="text-white/70 text-xl mb-10">
              Let's capture the creative energy of Midtown Atlanta. From music videos to 
              corporate events, we bring your vision to life.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-pink-600 to-orange-600 hover:from-pink-700 hover:to-orange-700 shadow-2xl shadow-pink-500/50 border-0"
                >
                  <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                    Book Now
                    <ArrowRight className="ml-2" size={20} />
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 glass border-white/20 hover:glass-strong">
                  <a href="mailto:Christian@223visions.com">
                    <Mail className="mr-2" size={20} />
                    Email Us
                  </a>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-gradient-to-b from-transparent to-pink-900/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12">
            <h2 className="mb-6">Professional Photography & Videography in Midtown Atlanta</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                223 Visions provides professional photography and videography services throughout Midtown Atlanta, the city's vibrant arts and culture district. Whether you need creative portraits at Piedmont Park, event coverage at the Fox Theatre, or music video production near Atlantic Station, we deliver exceptional visual content.
              </p>
              <p>
                Our Midtown photography services specialize in creative portraits, arts event photography, urban photography, and corporate headshots. We understand Midtown's unique character and artistic energy, bringing that creativity to every project.
              </p>
              <p>
                For Midtown videography, we excel at music video production, arts documentation, festival coverage, and brand content creation. From the High Museum to Ponce City Market, we've filmed throughout Midtown's most iconic locations.
              </p>
              <p>
                Led by Creative Director Christian Bates, 223 Visions combines technical expertise with artistic vision to create stunning content for Midtown's businesses, artists, and events. Contact us today to discuss your Midtown photography or videography needs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

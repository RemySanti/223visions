import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Video, Award, CheckCircle2, ArrowRight, Phone, Mail, Clock, Star } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function Buckhead() {
  const services = [
    {
      icon: Camera,
      title: 'Buckhead Photography',
      price: 'From $275/hr',
      features: [
        'Professional Headshots',
        'Corporate Event Photography',
        'Real Estate Photography',
        'Luxury Brand Shoots',
      ],
    },
    {
      icon: Video,
      title: 'Buckhead Videography',
      price: 'From $315/hr',
      features: [
        'Corporate Videos',
        'Event Videography',
        'Promotional Content',
        'Commercial Production',
      ],
    },
    {
      icon: Award,
      title: 'Buckhead Hybrid Packages',
      price: 'From $550',
      features: [
        'Photo + Video Coverage',
        'Full Event Documentation',
        'Premium Edit Package',
        'Same-Day Highlights',
      ],
    },
  ];

  const landmarks = [
    'Lenox Square',
    'Phipps Plaza',
    'Buckhead Village District',
    'Atlanta History Center',
    'Chastain Park',
    'The Shops Buckhead',
  ];

  const testimonials = [
    {
      name: 'Jennifer Mason',
      role: 'Buckhead Business Owner',
      text: 'Outstanding service for our corporate event at Lenox Square. The team knew all the best spots in Buckhead for photos!',
      rating: 5,
    },
    {
      name: 'David Chen',
      role: 'Real Estate Agent',
      text: 'As a luxury realtor in Buckhead, I need the best. 223 Visions delivers consistently amazing property photos.',
      rating: 5,
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1600"
            alt="Buckhead Atlanta"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        {/* Floating Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute top-20 left-10 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
          />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            {/* Location Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <MapPin size={18} className="text-purple-400" />
                <span className="text-white">Now Serving Buckhead</span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6">
              Buckhead{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Photography & Videography
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Premium photography and videography services for Buckhead's upscale businesses, 
              events, and brands. From Lenox Square to Phipps Plaza, we capture Atlanta's 
              most prestigious district with style and sophistication.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
                    Book Buckhead Session
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
                  <Link to="/portfolio">
                    View Portfolio
                  </Link>
                </Button>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[
                { label: 'Same-Day Booking', icon: Clock },
                { label: '5-Star Rated', icon: Star },
                { label: 'Local Experts', icon: MapPin },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  className="glass rounded-xl p-4"
                >
                  <stat.icon className="w-5 h-5 mx-auto mb-2 text-purple-400" />
                  <div className="text-xs text-white/70">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Buckhead Services</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Professional visual services tailored for Buckhead's luxury market
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
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6 shadow-lg">
                  <service.icon size={32} className="text-white" />
                </div>

                <h3 className="mb-2">{service.title}</h3>
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                  {service.price}
                </div>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Locations */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Popular Buckhead Locations We Serve</h2>
            <p className="text-white/60 text-lg">
              Expert local knowledge of Buckhead's best venues and spots
            </p>
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
                <MapPin className="w-6 h-6 mx-auto mb-3 text-purple-400" />
                <div className="text-white">{landmark}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us for Buckhead */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="mb-4">Why Buckhead Chooses 223 Visions</h2>
              <p className="text-white/60 text-lg">
                Local expertise meets professional excellence
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: 'Local Buckhead Expertise',
                  description: 'We know every corner of Buckhead - from the best lighting at Lenox Square to perfect angles at Chastain Park.',
                },
                {
                  title: 'Luxury Market Experience',
                  description: 'Specialized in high-end photography and videography that matches Buckhead\'s premium standards.',
                },
                {
                  title: 'Fast Response Times',
                  description: 'Based in Atlanta, we can be at your Buckhead location quickly for last-minute bookings.',
                },
                {
                  title: 'Premium Equipment',
                  description: 'Professional-grade cameras, lenses, and lighting equipment for exceptional Buckhead content.',
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-3xl p-8"
                >
                  <h3 className="text-xl mb-3">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">What Buckhead Clients Say</h2>
            <p className="text-white/60 text-lg">
              Real reviews from real Buckhead businesses and residents
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass rounded-3xl p-8"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.text}"</p>
                <div>
                  <div className="text-white mb-1">{testimonial.name}</div>
                  <div className="text-white/50 text-sm">{testimonial.role}</div>
                </div>
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
            <h2 className="mb-6">Ready to Book Your Buckhead Session?</h2>
            <p className="text-white/70 text-xl mb-10">
              Let's create exceptional visual content for your Buckhead business or event. 
              Same-day booking available for local Buckhead clients.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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
                    Book Now
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
                  <a href="mailto:Christian@223visions.com">
                    <Mail className="mr-2" size={20} />
                    Email Us
                  </a>
                </Button>
              </motion.div>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/50">
              <Phone size={16} />
              <span className="text-sm">Call for immediate Buckhead availability</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content */}
      <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12">
            <h2 className="mb-6">Professional Photography & Videography in Buckhead, Atlanta</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>
                223 Visions is proud to serve Buckhead, Atlanta's premier upscale neighborhood, with professional photography and videography services. Whether you need corporate headshots near Lenox Square, event coverage at Phipps Plaza, or luxury real estate photography in Buckhead Village, our team delivers exceptional results.
              </p>
              <p>
                Our Buckhead photography services include professional headshots, corporate event photography, real estate photography, and brand content creation. We understand the unique character of Buckhead and know how to capture content that reflects its sophistication and style.
              </p>
              <p>
                For videography in Buckhead, we offer corporate video production, promotional videos, event videography, and commercial content. From the Atlanta History Center to Chastain Park, we've filmed throughout Buckhead's most iconic locations.
              </p>
              <p>
                As a local Atlanta company led by Creative Director Christian Bates, we provide fast response times, competitive pricing, and intimate knowledge of Buckhead's best locations. Book your Buckhead photography or videography session today and experience why local businesses trust 223 Visions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

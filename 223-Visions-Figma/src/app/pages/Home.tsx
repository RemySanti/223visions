import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Camera, Video, Award, Users, ArrowRight, Play, Sparkles, Star, Zap, CheckCircle2 } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useRef } from 'react';
import bannerImage from 'figma:asset/fdf7e115adec502ac7f071e30fa7d4b652f07a4f.png';

export function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Camera },
    { number: '5.0', label: 'Client Rating', icon: Star },
    { number: '15+', label: 'Team Members', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Award },
  ];

  const services = [
    {
      icon: Camera,
      title: 'Photography',
      description: 'Professional photography for portraits, events, and commercial needs.',
      features: ['Headshots', 'Events', 'Church Services', 'Product Shoots'],
      gradient: 'from-purple-600 to-pink-600',
      price: 'From $275/hr',
    },
    {
      icon: Video,
      title: 'Videography',
      description: 'Cinematic video production that tells your unique story.',
      features: ['Events', 'Promos', 'Church Services', 'Brand Content'],
      gradient: 'from-pink-600 to-orange-600',
      price: 'From $315/hr',
    },
    {
      icon: Award,
      title: 'Hybrid Coverage',
      description: 'Complete photo and video coverage for maximum impact.',
      features: ['Full Coverage', 'Photo + Video', 'Best Value', 'Premium Quality'],
      gradient: 'from-purple-600 via-pink-600 to-orange-600',
      price: 'From $550',
      popular: true,
    },
  ];

  const portfolio = [
    {
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a0002.jpg',
      title: 'Studio Portrait Photography',
      category: 'Photography',
    },
    {
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a0130.jpg',
      title: 'Wedding Coverage',
      category: 'Hybrid',
    },
    {
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2048.jpg',
      title: 'Event Production',
      category: 'Videography',
    },
    {
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a9953.jpg',
      title: 'Creative Portraits',
      category: 'Photography',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Event Coordinator',
      text: 'The team at 223 Visions captured our corporate event perfectly. Professional, creative, and delivered stunning results!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Business Owner',
      text: 'Outstanding work on our promotional video. They understood our brand and created content that exceeded expectations.',
      rating: 5,
    },
    {
      name: 'Pastor Williams',
      role: 'Church Leader',
      text: 'Reliable and talented! They\'ve been documenting our services for months. The quality is always exceptional.',
      rating: 5,
    },
  ];

  return (
    <div className="relative">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax */}
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ scale: heroScale }}
        >
          <img
            src={bannerImage}
            alt="223 Visions Production"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>
        </motion.div>

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
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
          />
        </div>

        {/* Hero Content */}
        <motion.div 
          className="container mx-auto px-4 relative z-10 text-center pt-20"
          style={{ opacity: heroOpacity }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg shadow-purple-500/20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                >
                  <Sparkles size={18} className="text-purple-400" />
                </motion.div>
                <span className="text-white">Atlanta's Premier Hybrid Shooting Agency</span>
              </div>
            </motion.div>

            {/* Headline */}
            <h1 className="mb-6 max-w-5xl mx-auto leading-tight">
              Capturing Your Vision in{' '}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Photo & Video
              </span>
            </h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto mb-12 leading-relaxed"
            >
              Professional photography and videography services for Atlanta's businesses, 
              events, and special moments. Led by Creative Director Christian Bates.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  asChild
                  size="lg"
                  className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300 border-0"
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
                  <Link to="/portfolio">
                    <Play className="mr-2" size={20} />
                    View Our Work
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="glass rounded-2xl p-6 group"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <stat.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
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
      </section>

      {/* Services Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block glass-purple rounded-full px-6 py-2 text-sm mb-6">
              Our Services
            </span>
            <h2 className="mb-6">What We Offer</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              From photography to videography, we've got all your visual content needs covered.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                    <motion.span
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-4 py-1 rounded-full shadow-lg flex items-center gap-1"
                    >
                      <Star size={12} fill="currentColor" />
                      MOST POPULAR
                    </motion.span>
                  </div>
                )}

                <div className={`glass rounded-3xl p-8 h-full transition-all duration-500 ${
                  service.popular ? 'glass-purple' : 'hover:glass-strong'
                }`}>
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <service.icon size={32} className="text-white" />
                  </motion.div>

                  {/* Title & Price */}
                  <h3 className="mb-2">{service.title}</h3>
                  <div className={`text-xl mb-4 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.price}
                  </div>

                  {/* Description */}
                  <p className="text-white/60 mb-6">{service.description}</p>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Button
                    asChild
                    className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-purple-500/30 transition-all border-0`}
                  >
                    <Link to="/services">
                      Learn More
                      <ArrowRight className="ml-2" size={18} />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block glass-purple rounded-full px-6 py-2 text-sm mb-6">
              Our Work
            </span>
            <h2 className="mb-6">Featured Projects</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              A glimpse into the stunning visuals we create for our clients.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {portfolio.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-3xl aspect-[4/3]"
              >
                {/* Image */}
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <span className="glass-purple rounded-full px-4 py-1 text-xs mb-4 inline-block">
                      {item.category}
                    </span>
                    <h3 className="text-2xl mb-2">{item.title}</h3>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="glass-strong border-white/20 hover:glass-purple"
            >
              <Link to="/portfolio">
                View Full Portfolio
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block glass-purple rounded-full px-6 py-2 text-sm mb-6">
              Testimonials
            </span>
            <h2 className="mb-6">What Clients Say</h2>
            <p className="text-white/60 text-xl max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say.
            </p>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="glass rounded-3xl p-8"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-white/80 mb-6 leading-relaxed">"{testimonial.text}"</p>

                {/* Author */}
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
        {/* Animated Background */}
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
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-2xl shadow-purple-500/50"
            >
              <Sparkles size={32} className="text-white" />
            </motion.div>

            <h2 className="mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-white/70 text-xl mb-10 max-w-2xl mx-auto">
              Let's bring your vision to life. Book your session today and experience why 
              Atlanta trusts 223 Visions for their most important moments.
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

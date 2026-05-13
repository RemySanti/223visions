import { motion, useScroll, useTransform } from 'motion/react';
import { Camera, Video, Award, CheckCircle2, ArrowRight, Plus, Clock, Zap, Sparkles, Star, TrendingUp } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import { ServicesHero } from '../components/ServicesHero';

export function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.8, 1, 1, 0.8]);

  const services = [
    {
      icon: Camera,
      title: 'Photography',
      gradient: 'from-purple-600 to-pink-600',
      description: 'Stunning visual storytelling through the lens.',
      packages: [
        {
          name: 'Headshots',
          price: '$350',
          icon: Star,
          features: [
            'One-hour session',
            'One outfit change',
            'Up to 5 retouched images',
            'Studio or on-location (within 20 miles)',
            '3-5 business day turnaround',
          ],
        },
        {
          name: 'Event Photography',
          price: '$275',
          priceUnit: '/hour',
          popular: true,
          icon: Sparkles,
          subtitle: '2-hour minimum',
          features: [
            'Unlimited photos',
            'Online gallery delivery',
            'Basic editing & color correction',
            '7-day turnaround',
          ],
        },
        {
          name: 'Church Photography',
          price: '$300',
          priceUnit: ' flat',
          icon: Award,
          features: [
            '1.5 hours of coverage',
            'Unlimited images',
            'Online gallery delivery',
            '5-7 business day turnaround',
          ],
        },
      ],
    },
    {
      icon: Video,
      title: 'Videography',
      gradient: 'from-pink-600 to-orange-600',
      description: 'Cinematic storytelling that moves hearts.',
      packages: [
        {
          name: 'Event Videography',
          price: '$315',
          priceUnit: '/hour',
          popular: true,
          icon: Sparkles,
          subtitle: '2-hour minimum',
          features: [
            'Full event coverage',
            '1-3 minute highlight reel',
            '10-day turnaround',
          ],
        },
        {
          name: 'Church Videography',
          price: '$300',
          priceUnit: ' flat',
          icon: Award,
          features: [
            'Highlight recap',
            '7-10 business day turnaround',
          ],
        },
      ],
    },
    {
      icon: Award,
      title: 'Hybrid Coverage',
      gradient: 'from-purple-600 via-pink-600 to-orange-600',
      description: 'The ultimate combo: photos + videos in perfect harmony.',
      packages: [
        {
          name: 'Event Photo + Video',
          price: '$600',
          priceUnit: '',
          popular: true,
          icon: Zap,
          subtitle: 'for 2 hours',
          badge: 'Best Value',
          features: [
            'Full photography and videography coverage',
            'Online photo gallery',
            '1-3 minute video recap',
            '10-14 day turnaround',
          ],
        },
        {
          name: 'Church Photo + Video',
          price: '$550',
          priceUnit: ' flat',
          icon: Award,
          features: [
            'Complete photography and videography',
            'Online photo gallery',
            'Full sermon or 1-3 minute recap video',
            '7-10 business day turnaround',
          ],
        },
      ],
    },
  ];

  const addOns = [
    { name: 'Extra Hour (Photo or Video)', price: '$125', icon: Clock },
    { name: 'Raw Footage', price: '$75', icon: Video },
    { name: 'Rush Delivery (48-72 hrs)', price: '$100', icon: Zap },
    { name: 'Behind-the-Scenes Content', price: '$75', icon: Camera },
    { name: 'Extra Look (for Headshots)', price: '$50', icon: Sparkles },
    { name: 'Travel Fee (20+ miles outside ATL)', price: '$0.75/mile', icon: TrendingUp },
  ];

  const process = [
    {
      step: '01',
      title: 'Book Your Session',
      description: 'Choose your package and select a date that works for you through our easy booking system.',
    },
    {
      step: '02',
      title: 'Pre-Production Planning',
      description: 'We discuss your vision, location preferences, and any specific requirements to ensure perfection.',
    },
    {
      step: '03',
      title: 'Shoot Day Magic',
      description: 'Our team captures stunning content with professional equipment and creative expertise.',
    },
    {
      step: '04',
      title: 'Post-Production',
      description: 'Expert editing, color grading, and retouching to make every shot absolutely perfect.',
    },
    {
      step: '05',
      title: 'Delivery & Delight',
      description: 'Receive your beautifully edited photos and videos via our online gallery platform.',
    },
  ];

  return (
    <div className="overflow-hidden" ref={containerRef}>
      {/* New Epic Hero Section */}
      <ServicesHero />

      {/* Services Sections */}
      {services.map((service, serviceIndex) => (
        <section
          key={serviceIndex}
          className="py-24 relative"
        >
          {/* Background gradient for alternating sections */}
          <div className={`absolute inset-0 ${serviceIndex % 2 === 1 ? 'bg-gradient-to-b from-white/5 to-transparent' : ''}`} />
          
          <div className="container mx-auto px-4 relative z-10">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/50`}
              >
                <service.icon size={40} className="text-white" />
              </motion.div>
              <h2 className="mb-4 bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                {service.title}
              </h2>
              <p className="text-white/60 text-lg max-w-2xl mx-auto">{service.description}</p>
            </motion.div>

            {/* Pricing Cards */}
            <div className={`grid grid-cols-1 gap-8 ${service.packages.length === 3 ? 'lg:grid-cols-3' : 'lg:grid-cols-2 max-w-4xl mx-auto'}`}>
              {service.packages.map((pkg, pkgIndex) => (
                <motion.div
                  key={pkgIndex}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: pkgIndex * 0.15, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div
                    className={`relative h-full p-8 rounded-3xl border transition-all duration-500 ${
                      pkg.popular
                        ? 'bg-gradient-to-br from-purple-600/30 via-pink-600/20 to-purple-600/30 border-purple-500/60 shadow-2xl shadow-purple-500/30'
                        : 'bg-white/5 backdrop-blur-sm border-white/10 hover:border-purple-500/40 hover:bg-white/10'
                    }`}
                  >
                    {/* Popular Badge */}
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <motion.span
                          animate={{ scale: [1, 1.05, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs px-6 py-2 rounded-full shadow-lg flex items-center gap-2"
                        >
                          <Star size={14} fill="currentColor" />
                          {pkg.badge || 'MOST POPULAR'}
                        </motion.span>
                      </div>
                    )}

                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center`}>
                        <pkg.icon size={24} className="text-white" />
                      </div>
                    </div>

                    {/* Package Name */}
                    <h3 className="mb-3 group-hover:text-purple-300 transition-colors">{pkg.name}</h3>
                    
                    {/* Price */}
                    <div className="mb-2">
                      <div className="flex items-baseline gap-1">
                        <span className={`text-5xl bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                          {pkg.price}
                        </span>
                        {pkg.priceUnit && (
                          <span className="text-white/60 text-lg">{pkg.priceUnit}</span>
                        )}
                      </div>
                      {pkg.subtitle && (
                        <p className="text-white/50 text-sm mt-2">{pkg.subtitle}</p>
                      )}
                    </div>

                    {/* Divider */}
                    <div className={`h-px bg-gradient-to-r ${service.gradient} opacity-30 my-6`} />
                    
                    {/* Features */}
                    <ul className="space-y-4 mb-8">
                      {pkg.features.map((feature, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.1 }}
                          className="flex items-start gap-3 text-white/80"
                        >
                          <CheckCircle2 size={20} className={`flex-shrink-0 mt-0.5 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`} />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* CTA Button */}
                    <Button 
                      asChild 
                      className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 group-hover:scale-105`}
                    >
                      <a
                        href="https://links.223visions.com/widget/bookings/223-booking"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Book This Package
                        <ArrowRight className="ml-2" size={18} />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Process Timeline Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/10 via-pink-900/10 to-purple-900/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/50 text-sm mb-6">
              <Zap size={16} className="text-purple-400" />
              Our Process
            </span>
            <h2 className="mb-4">From Booking to Delivery</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              A seamless experience designed to bring your vision to life with minimal effort on your part.
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="flex items-start gap-8">
                  {/* Step Number */}
                  <div className="flex-shrink-0">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center shadow-xl shadow-purple-500/30"
                    >
                      <span className="text-2xl">{item.step}</span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-2">
                    <h3 className="mb-2">{item.title}</h3>
                    <p className="text-white/60">{item.description}</p>
                  </div>
                </div>

                {/* Connecting Line */}
                {index < process.length - 1 && (
                  <div className="ml-10 mt-4 mb-4 h-12 w-px bg-gradient-to-b from-purple-500 to-pink-500 opacity-30" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-Ons Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.6 }}
              className="w-20 h-20 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/50"
            >
              <Plus size={40} />
            </motion.div>
            <h2 className="mb-4">Enhance Your Package</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Customize your experience with our premium add-ons.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {addOns.map((addon, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <addon.icon size={20} className="text-purple-400" />
                  </div>
                  <span className="text-xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {addon.price}
                  </span>
                </div>
                <span className="text-white/80 group-hover:text-white transition-colors">{addon.name}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-white/50 text-sm">
              All add-ons can be included at booking or requested later
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Frequently Asked Questions</h2>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Everything you need to know about our services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                q: "What's included in the turnaround time?",
                a: "Turnaround times begin after your session and include professional editing, color correction, and retouching. Rush delivery is available as an add-on."
              },
              {
                q: "Can I get both RAW files and edited photos?",
                a: "Yes! RAW footage is available as a $75 add-on. Standard packages include professionally edited final images."
              },
              {
                q: "Do you travel outside of Atlanta?",
                a: "Absolutely! Locations within 20 miles are included. Beyond that, we charge $0.75 per mile for travel."
              },
              {
                q: "What happens if I need to reschedule?",
                a: "We understand things come up! Contact us as soon as possible, and we'll work with you to find a new date that works."
              },
              {
                q: "Can I customize a package?",
                a: "Yes! While our packages are designed to cover most needs, we're happy to create custom solutions. Just reach out!"
              },
              {
                q: "How do I receive my photos and videos?",
                a: "All content is delivered through our secure online gallery where you can view, download, and share your images and videos."
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/30 transition-colors"
              >
                <h3 className="mb-3 text-lg">{item.q}</h3>
                <p className="text-white/60">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-full blur-3xl"
        />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-24 h-24 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-purple-500/50"
            >
              <Sparkles size={40} className="text-white" />
            </motion.div>
            
            <h2 className="mb-6">Ready to Create Something Amazing?</h2>
            <p className="text-white/70 text-xl mb-10 leading-relaxed">
              Let's bring your vision to life. Book your session today and experience 
              why Atlanta trusts 223 Visions for their most important moments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all duration-300"
              >
                <a
                  href="https://links.223visions.com/widget/bookings/223-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Your Session Now
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="border-white/20 hover:bg-white/10 backdrop-blur-sm"
              >
                <Link to="/contact">
                  Have Questions? Contact Us
                </Link>
              </Button>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-12 pt-12 border-t border-white/10"
            >
              <p className="text-white/50 text-sm">
                Need a custom package? Email us at{' '}
                <a href="mailto:Christian@223visions.com" className="text-purple-400 hover:text-purple-300 transition-colors">
                  Christian@223visions.com
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
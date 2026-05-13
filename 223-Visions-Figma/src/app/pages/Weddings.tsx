import { motion, useScroll, useTransform } from 'motion/react';
import { useRef, useState } from 'react';
import { Heart, Camera, Video, Calendar, Star, Check, ArrowRight, Sparkles, Maximize2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { Lightbox } from '../components/Lightbox';

export function Weddings() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const packages = [
    {
      name: 'Silver Collection',
      price: '$2,499',
      description: 'Perfect for intimate celebrations and micro-weddings.',
      features: [
        '6 hours of coverage',
        '1 professional photographer',
        '300+ hand-edited images',
        'Online private gallery',
        'Print release rights'
      ],
      color: 'bg-zinc-200'
    },
    {
      name: 'Gold Collection',
      price: '$3,999',
      description: 'Our most popular choice for full wedding day storytelling.',
      features: [
        '8 hours of coverage',
        '2 professional photographers',
        '500+ hand-edited images',
        'Complimentary engagement session',
        'Timeline consultation',
        'Online private gallery',
        'Print release rights'
      ],
      popular: true,
      color: 'bg-yellow-200'
    },
    {
      name: 'Platinum Collection',
      price: '$5,999',
      description: 'The ultimate luxury experience with complete coverage.',
      features: [
        '10 hours of coverage',
        '2 photographers + 1 videographer',
        '700+ hand-edited images',
        '3-5 minute cinematic highlight film',
        'Engagement session included',
        'Premium leather heirloom album',
        'Priority editing & delivery'
      ],
      color: 'bg-stone-300'
    },
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1606800052052-a08af7148866?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZ29sZGVufGVufDF8fHx8MTc2MjkxOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1511285560982-1351cdeb9821?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlfGVufDF8fHx8MTc2MjkxOTY1NXww&ixlib=rb-4.1.0&q=80&w=1080',
    'https://images.unsplash.com/photo-1519225468316-7473a190d8d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGFydHl8ZW58MXx8fHwxNzYyOTE5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080'
  ];

  return (
    <div className="bg-white min-h-screen text-stone-900 overflow-hidden font-sans" ref={containerRef}>
      {/* Soft Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-rose-50/50 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-stone-50/50 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-20 px-4">
        <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-stone-50 border border-stone-200 mb-8">
              <Heart size={14} className="text-rose-400 fill-rose-400" />
              <span className="text-xs font-medium tracking-widest uppercase text-stone-500">Atlanta Wedding Photography</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-tight mb-8 leading-[1.1] text-stone-900">
              Capturing the <br />
              <span className="italic text-rose-900/80">timeless</span> moments <br />
              of your love story.
            </h1>
            
            <p className="text-xl text-stone-600 mb-10 max-w-md leading-relaxed">
              We create romantic, authentic, and timeless imagery that you will cherish for generations to come.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="bg-stone-900 text-white hover:bg-stone-800 text-lg px-8 py-7 rounded-full transition-all shadow-xl shadow-stone-200"
              >
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Inquire for Date
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-stone-200 text-stone-800 hover:bg-stone-50 text-lg px-8 py-7 rounded-full"
              >
                <Link to="/portfolio">View Gallery</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1519741497674-611481863552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZWxlZ2FudHxlbnwxfHx8fDE3NjI5MjAwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Wedding couple"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
            </div>
            
            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
            >
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-stone-600 text-sm italic">
                "The photos are absolutely breathtaking. We couldn't have asked for a better team to capture our day."
              </p>
              <p className="text-stone-900 font-medium text-xs mt-3">— Sarah & Michael</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="relative z-10 py-24 px-4 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <span className="text-rose-500 font-medium tracking-widest uppercase text-sm mb-4 block">Our Philosophy</span>
          <h2 className="text-4xl md:text-5xl font-serif mb-8 text-stone-900">
            More than just photos.<br />It's your legacy.
          </h2>
          <p className="text-xl text-stone-600 leading-relaxed mb-12">
            We believe wedding photography should be effortless, natural, and true to who you are. 
            We step back and let moments unfold naturally, stepping in only when needed to guide you into 
            the most flattering light and composition.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Authentic', desc: 'Real emotions, not stiff poses.' },
              { title: 'Timeless', desc: 'Edits that never go out of style.' },
              { title: 'Intimate', desc: 'Focusing on the connection between you.' },
            ].map((item, index) => (
              <div key={index} className="p-6 bg-white rounded-2xl shadow-sm border border-stone-100">
                <h3 className="text-lg font-serif font-bold mb-2 text-stone-900">{item.title}</h3>
                <p className="text-stone-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-6 text-stone-900">The Collections</h2>
            <p className="text-stone-500 max-w-2xl mx-auto">
              Curated packages designed to cover every detail of your celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-8 rounded-3xl border transition-all duration-300 group ${
                  pkg.popular 
                    ? 'bg-stone-900 text-white shadow-2xl -mt-4 mb-4' 
                    : 'bg-white text-stone-900 border-stone-200 hover:border-stone-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-rose-400 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </div>
                )}

                <div className="mb-8">
                  <h3 className={`text-2xl font-serif mb-2 ${pkg.popular ? 'text-white' : 'text-stone-900'}`}>
                    {pkg.name}
                  </h3>
                  <div className="flex items-baseline gap-1 mb-4">
                    <span className="text-4xl font-light">{pkg.price}</span>
                  </div>
                  <p className={`text-sm ${pkg.popular ? 'text-stone-300' : 'text-stone-500'}`}>
                    {pkg.description}
                  </p>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check size={18} className={`shrink-0 mt-0.5 ${pkg.popular ? 'text-rose-400' : 'text-stone-900'}`} />
                      <span className={pkg.popular ? 'text-stone-200' : 'text-stone-600'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  asChild 
                  className={`w-full py-6 rounded-xl transition-all ${
                    pkg.popular 
                      ? 'bg-white text-stone-900 hover:bg-stone-100' 
                      : 'bg-stone-900 text-white hover:bg-stone-800'
                  }`}
                >
                  <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                    Select Collection
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-stone-500 text-sm">
              Custom packages available for destination weddings and multi-day events.
              <br />
              <Link to="/contact" className="text-stone-900 font-medium underline hover:text-rose-500 transition-colors mt-2 inline-block">
                Contact us for a custom quote
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Teaser */}
      <section className="relative z-10 py-24 px-4 bg-stone-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4">Love Stories</h2>
              <p className="text-stone-400 max-w-md">
                Real weddings, real moments, real love. Browse our latest galleries.
              </p>
            </div>
            <Button asChild variant="outline" className="border-stone-700 text-white hover:bg-stone-800 hover:text-white rounded-full px-8">
              <Link to="/portfolio">View All Galleries</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer"
                onClick={() => setSelectedImage(src)}
              >
                <ImageWithFallback
                  src={src}
                  alt="Wedding portfolio"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/10 backdrop-blur-md p-3 rounded-full">
                    <Maximize2 className="text-white w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-rose-50/30">
        <TestimonialSlider />
      </section>

      {/* Final CTA */}
      <section className="relative z-10 py-32 px-4 text-center">
        <div className="container mx-auto max-w-3xl">
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6 fill-rose-400" />
          <h2 className="text-5xl md:text-6xl font-serif mb-8 text-stone-900">
            Let's start your journey.
          </h2>
          <p className="text-xl text-stone-600 mb-10">
            Dates book up fast. Let's chat about your vision and ensure your date is available.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-stone-900 text-white hover:bg-stone-800 text-lg px-12 py-8 rounded-full shadow-2xl transition-all hover:scale-105"
          >
            <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
              Schedule Consultation
            </a>
          </Button>
        </div>
      </section>

      <Lightbox
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        imageSrc={selectedImage || ''}
        category="Wedding"
      />
    </div>
  );
}

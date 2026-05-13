import { motion, useScroll } from 'motion/react';
import { useRef, useState } from 'react';
import { User, Briefcase, Users as UsersIcon, Camera, ArrowRight, Zap, CheckCircle2, Maximize2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Lightbox } from '../components/Lightbox';

export function PhotographyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedItem, setSelectedItem] = useState<{ title: string; category: string; imageUrl: string } | null>(null);

  const services = [
    {
      icon: User,
      title: 'Portraits',
      description: 'Professional portrait photography that captures personality and character. Perfect for individuals looking to update their personal brand.',
      gradient: 'from-blue-500 to-cyan-500',
      features: ['1-hour session', '2 outfit changes', '10 retouched images', 'Online gallery']
    },
    {
      icon: Briefcase,
      title: 'Headshots',
      description: 'Corporate and professional headshots that make the right impression. We bring the studio to your office or you come to us.',
      gradient: 'from-purple-500 to-indigo-500',
      features: ['30-minute session', '1 outfit', '3 high-end retouched images', 'Same-day selection']
    },
    {
      icon: UsersIcon,
      title: 'Family Sessions',
      description: 'Warm, authentic family photography that you\'ll treasure forever. We specialize in capturing genuine moments and connections.',
      gradient: 'from-amber-500 to-orange-500',
      features: ['90-minute session', 'Unlimited family members', '30+ edited images', 'Print release']
    },
    {
      icon: Camera,
      title: 'Corporate Events',
      description: 'Complete event coverage with professional editing and fast turnaround. We capture the energy and key moments of your event.',
      gradient: 'from-emerald-500 to-teal-500',
      features: ['Hourly coverage', 'Candid & posed shots', '24-hour preview', 'Full gallery in 3 days']
    },
  ];

  const portfolioItems = [
    {
      title: 'Executive Presence',
      category: 'Headshots',
      imageUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjI4NzY1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'large'
    },
    {
      title: 'Urban Style',
      category: 'Portraits',
      imageUrl: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2Mjk2ODQ3MXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'small'
    },
    {
      title: 'Corporate Gala',
      category: 'Events',
      imageUrl: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjkwMjgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'small'
    },
    {
      title: 'Fashion Editorial',
      category: 'Portraits',
      imageUrl: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhv%0AdG9ncmFwaHl8ZW58MXx8fHwxNzYyOTQ1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      size: 'wide'
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden" ref={containerRef}>
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, rgba(147, 51, 234, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8"
            >
              <Camera size={16} className="text-blue-400" />
              <span className="text-sm font-medium tracking-wide uppercase text-white/80">Premium Photography Services</span>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-tight">
              Capturing Moments <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                Defining Legacies
              </span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/60 mb-12 leading-relaxed">
              We don't just take pictures; we craft visual narratives. From corporate headshots 
              to large-scale events, our lens focuses on what matters most—your story.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-lg px-8 py-6 rounded-full transition-all hover:scale-105"
              >
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Book Your Session
                </a>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="border-white/20 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm"
              >
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-500 overflow-hidden"
              >
                {/* Gradient Blob on Hover */}
                <div className={`absolute -right-20 -top-20 w-64 h-64 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500 rounded-full`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-500`}>
                    <service.icon className="text-white w-7 h-7" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-white/60 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white/70 text-sm">
                        <CheckCircle2 size={16} className={`text-white opacity-50`} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center text-white/80 group-hover:text-white font-medium transition-colors">
                    <span>Learn more</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work - Masonry Style */}
      <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h2>
              <p className="text-white/60 max-w-xl">
                A curation of our recent photography projects showcasing our diverse capabilities and attention to detail.
              </p>
            </div>
            <Button asChild variant="ghost" className="text-white hover:text-blue-400 group w-fit">
              <Link to="/portfolio">
                View All Projects <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedItem(item)}
                className={`relative group rounded-2xl overflow-hidden cursor-pointer ${
                  item.size === 'wide' ? 'md:col-span-2' : item.size === 'large' ? 'md:row-span-2' : ''
                }`}
              >
                <ImageWithFallback
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <span className="text-blue-400 text-sm font-medium tracking-wider uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.category}
                  </span>
                  <h3 className="text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    {item.title}
                  </h3>
                </div>
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={18} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">The Process</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              From the initial consultation to final delivery, we ensure a seamless and enjoyable experience.
            </p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-[20px] top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-30 md:left-1/2 md:-ml-px" />

            {[
              { title: 'Consultation', desc: 'We discuss your goals, style preferences, and logistics.' },
              { title: 'The Shoot', desc: 'Our team guides you through poses and lighting for the perfect shot.' },
              { title: 'Selection', desc: 'Review your images and select your favorites for retouching.' },
              { title: 'Delivery', desc: 'Receive your high-resolution, professionally edited images.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative flex items-center gap-8 mb-16 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Number Bubble */}
                <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 rounded-full bg-black border-2 border-white/20 flex items-center justify-center z-10 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                  <span className="text-sm font-bold">{index + 1}</span>
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'}`}>
                  <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
                
                {/* Empty side for layout balance */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="relative rounded-3xl overflow-hidden p-12 text-center bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-white/10 backdrop-blur-xl">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            
            <div className="relative z-10">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to create magic?</h2>
              <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
                Book your session today and let us capture the moments that matter most to you.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-lg px-10 py-6 rounded-full shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105"
              >
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Schedule Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Lightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        imageSrc={selectedItem?.imageUrl || ''}
        title={selectedItem?.title}
        category={selectedItem?.category}
      />
    </div>
  );
}

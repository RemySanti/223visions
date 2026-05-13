import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Lightbulb, Image, Camera, Clock, Wifi, Box, Layers, Zap, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function StudioRentals() {
  const containerRef = useRef<HTMLDivElement>(null);

  const amenities = [
    { icon: Lightbulb, title: 'Pro Lighting', desc: 'Profoto strobes & modifiers included' },
    { icon: Image, title: 'Backdrops', desc: 'Seamless paper in 12 colors' },
    { icon: Wifi, title: 'Fiber WiFi', desc: '1Gbps upload/download' },
    { icon: Box, title: 'Cyclorama Wall', desc: '20ft wide infinity wall' },
    { icon: Layers, title: 'Makeup Station', desc: 'Vanity with adjustable lighting' },
    { icon: Zap, title: 'Power', desc: 'Dedicated 20amp circuits' },
  ];

  return (
    <div className="bg-white min-h-screen text-black overflow-hidden font-sans" ref={containerRef}>
      {/* Grid Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 border border-black px-3 py-1 text-xs font-mono uppercase tracking-widest mb-8">
                  <div className="w-2 h-2 bg-black animate-pulse" />
                  Available Now
                </div>
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-none mb-8">
                  THE <br /> STUDIO
                </h1>
                <p className="text-xl md:text-2xl text-black/60 max-w-xl leading-relaxed">
                  A 1,500 sq ft creative playground designed for photographers, filmmakers, and content creators.
                </p>
              </motion.div>
            </div>
            
            <div className="lg:col-span-5">
               <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="border-t border-black pt-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm uppercase text-black/50">Location</span>
                    <span className="font-medium flex items-center gap-1"><MapPin size={14} /> Buckhead, Atlanta</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-mono text-sm uppercase text-black/50">Ceiling Height</span>
                    <span className="font-medium">14 Feet</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-mono text-sm uppercase text-black/50">Access</span>
                    <span className="font-medium">24/7 Available</span>
                  </div>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <Button asChild size="lg" className="bg-black text-white hover:bg-zinc-800 rounded-none w-full h-14 text-lg">
                    <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                      Book Space
                    </a>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero Image */}
      <section className="relative z-10 px-4 mb-24">
        <div className="container mx-auto max-w-[1400px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="aspect-video relative overflow-hidden bg-zinc-100"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1668453814676-c8093305fae6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMGludGVyaW9yfGVufDF8fHx8MTc2MjkyNDM3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Studio Interior"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Amenities Grid */}
      <section className="relative z-10 py-24 px-4 border-t border-black/10">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Technical Specs</h2>
            <p className="text-black/60 max-w-md">Everything you need to create professional work, included with every rental.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black/10 border border-black/10">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 hover:bg-zinc-50 transition-colors"
              >
                <item.icon className="w-8 h-8 mb-4 stroke-1" />
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-black/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Rates Section */}
      <section className="relative z-10 py-24 px-4 bg-zinc-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-4 tracking-tight">Simple Pricing</h2>
            <p className="text-black/60">No hidden fees. Book exactly what you need.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Hourly', price: '$75', unit: '/hr', desc: 'Minimum 2 hours. Great for headshots and quick sessions.' },
              { title: 'Half Day', price: '$250', unit: '/4 hrs', desc: 'Perfect for editorial shoots and small product sessions.', popular: true },
              { title: 'Full Day', price: '$450', unit: '/8 hrs', desc: 'For commercial productions and large scale projects.' },
            ].map((rate, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className={`relative p-8 bg-white border ${rate.popular ? 'border-black shadow-xl' : 'border-zinc-200'} flex flex-col`}
              >
                {rate.popular && (
                  <div className="absolute top-0 right-0 bg-black text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
                    Best Value
                  </div>
                )}
                <h3 className="text-xl font-bold mb-4">{rate.title}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold tracking-tight">{rate.price}</span>
                  <span className="text-black/40 ml-1">{rate.unit}</span>
                </div>
                <p className="text-black/60 mb-8 flex-grow">{rate.desc}</p>
                <Button asChild className="w-full bg-black text-white hover:bg-zinc-800 rounded-none">
                  <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                    Book Now
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="relative z-10 py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-[1400px]">
           <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px]">
             <div className="col-span-2 row-span-2 relative overflow-hidden group">
               <ImageWithFallback src="https://images.unsplash.com/photo-1590520286827-b52960553755?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBsaWdodGluZ3xlbnwxfHx8fDE3NjI5OTAxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <div className="col-span-1 row-span-1 relative overflow-hidden group">
               <ImageWithFallback src="https://images.unsplash.com/photo-1621330366914-256e6d191244?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwcGhvdG9ncmFwaHl8ZW58MXx8fHwxNzYyOTkwMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <div className="col-span-1 row-span-2 relative overflow-hidden group">
               <ImageWithFallback src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjI5OTAxNDV8MA&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <div className="col-span-1 row-span-1 relative overflow-hidden group">
               <ImageWithFallback src="https://images.unsplash.com/photo-1622675363311-ac97f3a9e383?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkaW8lMjBnZWFyfGVufDF8fHx8MTc2Mjk5MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
           </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 px-4 bg-black text-white text-center">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter">CREATE HERE.</h2>
          <Button asChild size="lg" className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-8 rounded-none font-bold uppercase tracking-widest">
            <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
              Reserve Space
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

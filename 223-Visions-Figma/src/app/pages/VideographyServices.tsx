import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Video, Music, Calendar, Trophy, Tv, Play, Film, Clapperboard, Mic, MonitorPlay } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function VideographyServices() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const services = [
    {
      icon: Music,
      title: 'Music Videos',
      description: 'Cinematic music videos that bring your sound to life. We handle everything from concept to final cut.',
      gradient: 'from-pink-600 to-rose-600',
      features: ['Concept Development', '4K Production', 'VFX & Color Grading', 'Social Teasers']
    },
    {
      icon: Calendar,
      title: 'Event Coverage',
      description: 'Capture the energy of your event with dynamic highlight reels and full-length documentation.',
      gradient: 'from-orange-500 to-red-500',
      features: ['Multi-cam Setup', 'Drone Coverage', 'Highlight Reel', 'Full Speech Edits']
    },
    {
      icon: Tv,
      title: 'Commercials',
      description: 'High-impact commercials and brand stories that engage audiences and drive conversions.',
      gradient: 'from-blue-600 to-indigo-600',
      features: ['Scriptwriting', 'Professional Voiceover', 'Motion Graphics', 'Broadcast Quality']
    },
    {
      icon: Trophy,
      title: 'Sports & Action',
      description: 'Fast-paced editing and high-frame-rate shooting to capture every split-second of the action.',
      gradient: 'from-green-500 to-emerald-500',
      features: ['Slow Motion', 'Action Cams', 'Hype Reels', 'Team Intros']
    },
  ];

  return (
    <div className="bg-black min-h-screen text-white overflow-hidden" ref={containerRef}>
      {/* Cinematic Background */}
      <div className="fixed inset-0 z-0">
        <motion.div
          animate={{
            background: [
              'radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 80%, rgba(37, 99, 235, 0.15) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 20%, rgba(220, 38, 38, 0.15) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute inset-0"
        />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
        {/* Scanlines Effect */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none" />
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-32 pb-20 md:pt-48 md:pb-32 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 relative inline-block"
          >
            <div className="absolute -inset-4 bg-red-500/20 blur-xl rounded-full animate-pulse" />
            <div className="relative flex items-center gap-2 px-6 py-2 rounded-full bg-red-900/30 border border-red-500/30 backdrop-blur-md">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 font-mono text-sm tracking-widest uppercase">Recording Now</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter mb-8 uppercase"
          >
            Cinematic <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-red-500 bg-[length:200%_auto] animate-gradient">
              Vision
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-3xl mx-auto text-xl text-white/60 mb-12 leading-relaxed"
          >
            We don't just record events; we create films. High-end production value, professional storytelling, and cutting-edge editing for brands and artists.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Button 
              asChild 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white text-lg px-10 py-7 rounded-lg shadow-[0_0_30px_rgba(220,38,38,0.4)] transition-all hover:scale-105 uppercase font-bold tracking-wider"
            >
              <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                Start Project
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-white/20 hover:bg-white/10 text-lg px-10 py-7 rounded-lg backdrop-blur-sm uppercase font-bold tracking-wider"
            >
              <Link to="/portfolio">Watch Reel</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative z-10 py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-3xl bg-zinc-900/50 border border-zinc-800 hover:border-zinc-600 transition-colors"
              >
                <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${service.gradient}`} />
                
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-start mb-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform duration-500`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <MonitorPlay className="w-8 h-8 text-zinc-700 group-hover:text-white transition-colors" />
                  </div>

                  <h3 className="text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-white/60 mb-8 text-lg">{service.description}</p>

                  <div className="grid grid-cols-2 gap-4">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-zinc-400">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production Pipeline */}
      <section className="relative z-10 py-32 px-4 bg-zinc-900/30 border-y border-white/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Production Pipeline</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our industry-standard workflow ensures your project is delivered on time and beyond expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { 
                icon: Clapperboard, 
                step: '01', 
                title: 'Pre-Production',
                desc: 'Storyboarding, location scouting, and shot listing.'
              },
              { 
                icon: Video, 
                step: '02', 
                title: 'Production',
                desc: 'Shooting with cinema cameras, pro lighting, and audio.'
              },
              { 
                icon: MonitorPlay, 
                step: '03', 
                title: 'Post-Production',
                desc: 'Editing, color grading, VFX, and sound design.'
              },
              { 
                icon: Film, 
                step: '04', 
                title: 'Delivery',
                desc: 'Final render in multiple formats for all platforms.'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="mb-6 relative">
                  <div className="text-8xl font-black text-white/5 absolute -top-8 -left-4 z-0">{item.step}</div>
                  <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-zinc-800 to-black border border-white/10 rounded-2xl flex items-center justify-center">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-gradient-to-r from-zinc-700 to-transparent -ml-4 z-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 py-32 px-4">
        <div className="container mx-auto max-w-5xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-gradient-to-b from-red-900/20 to-black border border-red-500/20 p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/20 blur-[100px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Let's Roll Camera.</h2>
              <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto">
                Ready to create something iconic? Schedule your consultation and let's bring your vision to the screen.
              </p>
              
              <Button 
                asChild 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 text-lg px-12 py-8 rounded-full shadow-2xl transition-all hover:scale-105 font-bold uppercase tracking-wider"
              >
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Book Consultation
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

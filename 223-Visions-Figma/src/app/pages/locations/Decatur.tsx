import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Video, Award, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function Decatur() {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1600" alt="Decatur Georgia" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block mb-8">
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg">
                <MapPin size={18} className="text-purple-400" />
                <span className="text-white">Now Serving Decatur</span>
              </div>
            </motion.div>

            <h1 className="mb-6">
              Decatur{' '}
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Photography & Videography
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Professional visual services for Decatur's vibrant community. From downtown Decatur 
              Square to local businesses and family events, we capture the charm of this historic city.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-2xl border-0">
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Book Decatur Session <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-lg px-8 py-6 glass border-white/20 hover:glass-strong">
                <Link to="/portfolio">View Portfolio</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Decatur Services</h2>
            <p className="text-white/60 text-lg">Community-focused photography and videography</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Camera, title: 'Decatur Photography', price: 'From $275/hr', features: ['Family Portraits', 'Small Business', 'Community Events', 'Local Festivals'] },
              { icon: Video, title: 'Decatur Videography', price: 'From $315/hr', features: ['Event Videos', 'Business Promos', 'Community Stories', 'Social Content'] },
              { icon: Award, title: 'Decatur Hybrid', price: 'From $550', features: ['Photo + Video', 'Complete Coverage', 'Local Expertise', 'Fast Turnaround'] },
            ].map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="glass rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <div className="text-2xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={16} className="text-purple-400 flex-shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4">Decatur Locations</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Decatur Square', 'Agnes Scott College', 'Glenlake Park', 'Oakhurst Village', 'Decatur Cemetery', 'Downtown Decatur'].map((landmark, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-2xl p-6 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-3 text-purple-400" />
                <div className="text-white">{landmark}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-gradient rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Book Your Decatur Session</h2>
            <p className="text-white/70 text-xl mb-10">
              Serving Decatur's families, businesses, and community with exceptional visual content.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 border-0">
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Book Now <ArrowRight className="ml-2" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="glass border-white/20">
                <a href="mailto:Christian@223visions.com"><Mail className="mr-2" />Email Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto glass rounded-3xl p-12">
            <h2 className="mb-6">Decatur Photography & Videography Services</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>223 Visions proudly serves Decatur, Georgia with professional photography and videography services. From Decatur Square to Agnes Scott College, we provide comprehensive visual coverage for this historic and vibrant community.</p>
              <p>Our Decatur photography services include family portraits, small business photography, community event coverage, and local festival documentation. We understand Decatur's unique character and capture its charm in every frame.</p>
              <p>For Decatur videography, we specialize in event videos, business promotional content, community storytelling, and social media content. Whether at Glenlake Park or downtown Decatur, we deliver professional results that showcase your Decatur story.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

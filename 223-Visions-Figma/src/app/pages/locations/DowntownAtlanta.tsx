import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { MapPin, Camera, Video, Award, CheckCircle2, ArrowRight, Mail } from 'lucide-react';
import { Button } from '../../components/ui/button';

export function DowntownAtlanta() {
  return (
    <div className="pt-20">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1600" alt="Downtown Atlanta" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="inline-block mb-8">
              <div className="glass-purple rounded-full px-6 py-3 inline-flex items-center gap-2 shadow-lg">
                <MapPin size={18} className="text-orange-400" />
                <span className="text-white">Now Serving Downtown</span>
              </div>
            </motion.div>

            <h1 className="mb-6">
              Downtown Atlanta{' '}
              <span className="bg-gradient-to-r from-orange-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Photography & Videography
              </span>
            </h1>

            <p className="text-xl text-white/70 mb-12 leading-relaxed">
              Professional visual services for Atlanta's business and entertainment epicenter. From 
              corporate events to sports coverage, we capture the pulse of Downtown Atlanta.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-orange-600 to-purple-600 hover:from-orange-700 hover:to-purple-700 shadow-2xl border-0">
                <a href="https://links.223visions.com/widget/bookings/223-booking" target="_blank" rel="noopener noreferrer">
                  Book Downtown Session <ArrowRight className="ml-2" size={20} />
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
            <h2 className="mb-4">Downtown Atlanta Services</h2>
            <p className="text-white/60 text-lg">Corporate, entertainment, and sports coverage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { icon: Camera, title: 'Downtown Photography', price: 'From $275/hr', features: ['Corporate Events', 'Conference Coverage', 'Sports Photography', 'Business Portraits'] },
              { icon: Video, title: 'Downtown Videography', price: 'From $315/hr', features: ['Event Videos', 'Sports Coverage', 'Corporate Content', 'Live Streaming'] },
              { icon: Award, title: 'Downtown Hybrid', price: 'From $550', features: ['Full Coverage', 'Multi-Camera Setup', 'Live + Edited', 'Premium Package'] },
            ].map((service, index) => (
              <motion.div key={index} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.2 }} className="glass rounded-3xl p-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-600 to-purple-600 flex items-center justify-center mb-6">
                  <service.icon size={32} className="text-white" />
                </div>
                <h3 className="mb-2">{service.title}</h3>
                <div className="text-2xl bg-gradient-to-r from-orange-400 to-purple-400 bg-clip-text text-transparent mb-6">{service.price}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-white/70 text-sm">
                      <CheckCircle2 size={16} className="text-orange-400 flex-shrink-0" />{feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-900/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="mb-4">Downtown Venues We Cover</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {['Centennial Park', 'State Farm Arena', 'Mercedes-Benz Stadium', 'Georgia Aquarium', 'World of Coca-Cola', 'CNN Center'].map((landmark, index) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="glass rounded-2xl p-6 text-center">
                <MapPin className="w-6 h-6 mx-auto mb-3 text-orange-400" />
                <div className="text-white">{landmark}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="glass-gradient rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
            <h2 className="mb-6">Book Your Downtown Atlanta Session</h2>
            <p className="text-white/70 text-xl mb-10">
              Professional photography and videography for Downtown's businesses, events, and venues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-orange-600 to-purple-600 border-0">
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
            <h2 className="mb-6">Downtown Atlanta Photography & Videography Services</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>223 Visions offers professional photography and videography throughout Downtown Atlanta, serving businesses, sports venues, and entertainment destinations. From Centennial Park to State Farm Arena and Mercedes-Benz Stadium, we provide comprehensive visual coverage.</p>
              <p>Our Downtown Atlanta services include corporate event photography, conference coverage, sports photography, and business portraits. We specialize in fast-paced environments and deliver professional results for Atlanta's busiest district.</p>
              <p>For Downtown videography, we offer event videos, sports coverage, corporate content creation, and live streaming services. With experience at major venues including Georgia Aquarium and World of Coca-Cola, we handle any Downtown Atlanta project.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

import { motion } from 'motion/react';
import { Award, Users, Target, Heart, Instagram, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function About() {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver nothing less than exceptional quality in every frame.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Your vision combined with our expertise creates magic.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Every detail matters. We craft content that hits the mark.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do, and it shows in every project.',
    },
  ];

  const team = [
    {
      name: 'Christian Bates',
      role: 'Creative Director & Founder',
      image: 'https://images.unsplash.com/photo-1762160768611-f6d37a161b49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHN0dWRpbyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2MzkyOTA2NHww&ixlib=rb-4.1.0&q=80&w=1080',
      bio: 'Leading 223 Visions with a passion for visual storytelling and creative excellence.',
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="mb-6">About 223 Visions</h1>
            <p className="text-white/60 text-lg">
              Atlanta's hybrid shooting agency bringing your creative vision to life through exceptional photography and videography.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="mb-6">Our Story</h2>
              <div className="space-y-4 text-white/70">
                <p>
                  Founded by Creative Director Christian Bates, 223 Visions emerged from a simple belief: 
                  that every brand, every moment, and every story deserves to be captured with artistry and authenticity.
                </p>
                <p>
                  Based in Atlanta, we've built a reputation for delivering world-class photography and videography 
                  that doesn't just document—it elevates. Our hybrid approach means you get comprehensive coverage 
                  that tells your complete story across all mediums.
                </p>
                <p>
                  From intimate portraits to large-scale commercial productions, we bring together Atlanta's most 
                  talented creatives to craft visual content that resonates, engages, and inspires.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYzODg0MDE2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Professional Photography"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl opacity-20 blur-3xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Our Values</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide every project we take on.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={28} />
                </div>
                <h3 className="mb-3">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="mb-4">Meet Our Leadership</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The visionary behind 223 Visions' creative direction.
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/5 rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-white/60 text-sm mb-4">{member.bio}</p>
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://www.instagram.com/223.visions/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-purple-400 transition-colors"
                    >
                      <Instagram size={20} />
                    </a>
                    <a
                      href="mailto:Christian@223visions.com"
                      className="text-white/60 hover:text-purple-400 transition-colors"
                    >
                      <Mail size={20} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 max-w-2xl mx-auto"
          >
            <p className="text-white/60">
              Beyond our leadership, we work with a network of talented photographers, videographers, 
              editors, and creatives across Atlanta. Each project is staffed with the perfect team 
              to bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '200+', label: 'Happy Clients' },
              { number: '15+', label: 'Team Members' },
              { number: '5+', label: 'Years in Atlanta' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <p className="text-white/60 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Let's Create Together</h2>
            <p className="text-white/60 mb-8">
              Ready to work with Atlanta's premier hybrid shooting agency? Let's discuss your project.
            </p>
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <a
                href="https://links.223visions.com/widget/bookings/223-booking"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Consultation
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

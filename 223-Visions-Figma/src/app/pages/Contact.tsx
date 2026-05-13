import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'Christian@223visions.com',
      link: 'mailto:Christian@223visions.com',
    },
    {
      icon: Instagram,
      title: 'Follow Us',
      value: '@223.visions',
      link: 'https://www.instagram.com/223.visions/',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Atlanta, GA',
      link: null,
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
            <h1 className="mb-6">Let's Work Together</h1>
            <p className="text-white/60 text-lg">
              Ready to create something exceptional? Book a consultation or reach out directly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/50 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="mb-4">Book Your Free Consultation</h2>
              <p className="text-white/70 mb-8">
                Schedule a call with our team to discuss your project, timeline, and budget. 
                We'll help you find the perfect solution for your creative needs.
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a
                  href="https://links.223visions.com/widget/bookings/223-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4">Other Ways to Reach Us</h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Prefer a different method? We're available through multiple channels.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {method.link ? (
                  <a
                    href={method.link}
                    target={method.link.startsWith('http') ? '_blank' : undefined}
                    rel={method.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="block p-6 bg-white/5 border border-white/10 rounded-xl hover:border-purple-500/50 transition-all group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                      <method.icon size={24} />
                    </div>
                    <h3 className="text-center mb-2 text-lg">{method.title}</h3>
                    <p className="text-white/60 text-center text-sm">{method.value}</p>
                  </a>
                ) : (
                  <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                      <method.icon size={24} />
                    </div>
                    <h3 className="text-center mb-2 text-lg">{method.title}</h3>
                    <p className="text-white/60 text-center text-sm">{method.value}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 md:p-12">
              <h2 className="mb-4 text-center">Common Questions</h2>
              <div className="space-y-4">
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="mb-2 text-lg">What's your turnaround time?</h3>
                  <p className="text-white/60 text-sm">
                    Typically 1-2 weeks for photography and 2-3 weeks for videography. 
                    Rush delivery is available for an additional fee.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="mb-2 text-lg">Do you travel outside Atlanta?</h3>
                  <p className="text-white/60 text-sm">
                    Yes! We serve clients throughout Georgia and beyond. 
                    Travel fees may apply for locations outside the metro Atlanta area.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="mb-2 text-lg">Can I customize a package?</h3>
                  <p className="text-white/60 text-sm">
                    Absolutely! Our packages are flexible and can be tailored to your specific needs and budget.
                  </p>
                </div>
                <div className="border-l-2 border-purple-500 pl-4">
                  <h3 className="mb-2 text-lg">What deposit is required?</h3>
                  <p className="text-white/60 text-sm">
                    We require a 50% deposit to secure your booking, with the remainder due upon delivery.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-white/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="mb-6">Business Hours</h2>
            <div className="space-y-2 text-white/60">
              <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
              <p>Saturday: 10:00 AM - 6:00 PM</p>
              <p>Sunday: By Appointment Only</p>
            </div>
            <p className="mt-6 text-white/50 text-sm">
              We're flexible and often available outside these hours for shoots and consultations. 
              Just ask!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Let's Start Your Project</h2>
            <p className="text-white/60 mb-8">
              The first step is simple. Book a consultation and let's discuss how we can bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <a
                  href="https://links.223visions.com/widget/bookings/223-booking"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Consultation
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="mailto:Christian@223visions.com">
                  Email Us
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

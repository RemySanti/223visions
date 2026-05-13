import { Hero } from '../components/Hero';
import { CTABlock } from '../components/CTABlock';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const btsImages = [
  {
    id: 1,
    title: 'On Set',
    imageUrl: 'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjBzY2VuZXMlMjBmaWxtfGVufDF8fHx8MTc2Mjk5MDE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 2,
    title: 'Team Collaboration',
    imageUrl: 'https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JrfGVufDF8fHx8MTc2MjkwMDY0MXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 3,
    title: 'Studio Setup',
    imageUrl: 'https://images.unsplash.com/photo-1758613656356-b3d9030a9ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MXx8fHwxNzYyOTkwMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 4,
    title: 'Camera Work',
    imageUrl: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYyOTQ1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 5,
    title: 'Video Production',
    imageUrl: 'https://images.unsplash.com/photo-1713392824135-a7c7db3d9465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBmaWxtaW5nfGVufDF8fHx8MTc2Mjk5MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    id: 6,
    title: 'Event Coverage',
    imageUrl: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjkwMjgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

export function BehindTheScenes() {
  return (
    <>
      <Hero
        headline="Behind the Lens at 223Visions"
        subheadline="See our team in action on set."
        primaryCTA={{ text: 'Book Our Team', link: '/contact' }}
        backgroundImage="https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjBzY2VuZXMlMjBmaWxtfGVufDF8fHx8MTc2Mjk5MDE2OHww&ixlib=rb-4.1.0&q=80&w=1080"
      />

      {/* Photo/Video Carousel */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="mb-4">Inside Our Process</h2>
            <p className="max-w-2xl mx-auto opacity-70">
              From pre-production to final delivery, witness the dedication and creativity that goes into every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {btsImages.map((image) => (
              <div key={image.id} className="relative aspect-square rounded-lg overflow-hidden group">
                <ImageWithFallback
                  src={image.imageUrl}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-4 text-white">
                    <p>{image.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-center mb-12">Our Process</h2>
            
            <div className="space-y-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="mb-4">Team Coordination</h3>
                  <p className="opacity-70">
                    Every successful shoot starts with seamless team coordination. Our professionals work together 
                    like a well-oiled machine, each bringing their unique expertise to create something exceptional. 
                    From photographers and videographers to lighting specialists and assistants, everyone plays a crucial role.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-square rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjB3b3JrfGVufDF8fHx8MTc2MjkwMDY0MXww&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Team Coordination"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758613656356-b3d9030a9ff8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHN0dWRpbyUyMHRlYW18ZW58MXx8fHwxNzYyOTkwMTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Client Collaboration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="mb-4">Client Collaboration</h3>
                  <p className="opacity-70">
                    Your vision guides everything we do. We maintain open communication throughout the entire process, 
                    from initial concept discussions to on-set direction and post-production reviews. Our collaborative 
                    approach ensures the final product exceeds your expectations.
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="mb-4">Attention to Detail</h3>
                  <p className="opacity-70">
                    The difference between good and great is in the details. Our team obsesses over lighting, composition, 
                    timing, and every other element that makes visual content truly exceptional. We don't settle until 
                    every shot is perfect.
                  </p>
                </div>
                <div className="order-1 md:order-2 aspect-square rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYyOTQ1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Attention to Detail"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Highlight */}
      <TestimonialSlider />

      {/* CTA */}
      <CTABlock
        headline="Ready to Work with Our Team?"
        description="Experience the 223Visions difference. Let's create something amazing together."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        variant="dark"
      />
    </>
  );
}
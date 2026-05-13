import { Hero } from '../components/Hero';
import { CTABlock } from '../components/CTABlock';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Calendar, User } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '5 Tips for Preparing for Your Photography Session',
    excerpt: 'Make the most of your photo shoot with these essential preparation tips from our professional photographers.',
    image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwaG90b2dyYXBoZXIlMjBjYW1lcmF8ZW58MXx8fHwxNzYyOTQ1MjE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Christian Bates',
    date: 'November 5, 2025',
    category: 'Photography Tips',
  },
  {
    id: 2,
    title: 'The Importance of Professional Video Content for Your Brand',
    excerpt: 'Discover why investing in professional videography can transform your brand\'s digital presence and engagement.',
    image: 'https://images.unsplash.com/photo-1713392824135-a7c7db3d9465?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlb2dyYXBoZXIlMjBmaWxtaW5nfGVufDF8fHx8MTc2Mjk5MDE0NXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '223Visions Team',
    date: 'October 28, 2025',
    category: 'Videography',
  },
  {
    id: 3,
    title: 'Wedding Photography: Capturing Your Perfect Day',
    excerpt: 'Learn what goes into creating stunning wedding photos and how to choose the right photography team for your big day.',
    image: 'https://images.unsplash.com/photo-1730476513367-16fe58a8a653?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzYyOTE5NjU1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Christian Bates',
    date: 'October 15, 2025',
    category: 'Weddings',
  },
  {
    id: 4,
    title: 'Behind the Scenes: Our Creative Process',
    excerpt: 'Take a peek behind the curtain and see how our team brings creative visions to life from concept to delivery.',
    image: 'https://images.unsplash.com/photo-1709316131422-35a5fb1e9eb2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjBzY2VuZXMlMjBmaWxtfGVufDF8fHx8MTc2Mjk5MDE2OHww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '223Visions Team',
    date: 'October 1, 2025',
    category: 'Behind the Scenes',
  },
  {
    id: 5,
    title: 'Corporate Headshots That Make an Impact',
    excerpt: 'Professional headshots are more than just photos—they\'re your first impression. Here\'s how to make it count.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NjI4NzY1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    author: 'Christian Bates',
    date: 'September 22, 2025',
    category: 'Photography Tips',
  },
  {
    id: 6,
    title: 'Event Photography: From Concept to Gallery',
    excerpt: 'Explore our comprehensive approach to event photography and how we ensure every moment is captured perfectly.',
    image: 'https://images.unsplash.com/photo-1614607653708-0777e6d003b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2MjkwMjgwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    author: '223Visions Team',
    date: 'September 10, 2025',
    category: 'Events',
  },
];

export function Blog() {
  return (
    <>
      <Hero
        headline="Insights & Inspiration from 223Visions"
        subheadline="Tips, stories, and behind-the-scenes looks at our creative process."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
                <CardHeader>
                  <div className="inline-block px-3 py-1 bg-gray-100 rounded-full mb-3">
                    {post.category}
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 opacity-60">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CTABlock
        headline="Ready to Create Amazing Content?"
        description="Whether you need photography, videography, or both—our team is ready to bring your vision to life."
        ctaText="Schedule Consultation"
        ctaLink="/contact"
        variant="dark"
      />
    </>
  );
}
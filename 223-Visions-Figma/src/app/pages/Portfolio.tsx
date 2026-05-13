import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Lightbox } from '../components/Lightbox';
import { Maximize2 } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedItem, setSelectedItem] = useState<{ title: string; category: string; image: string } | null>(null);

  const filters = ['All', 'Photography', 'Events', 'Portraits', 'Weddings'];

  const portfolioItems = [
    // Portraits from GitHub
    {
      id: 1,
      title: 'Studio Portrait Session',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a0002.jpg',
    },
    {
      id: 2,
      title: 'Creative Portrait Photography',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a0222.jpg',
    },
    {
      id: 3,
      title: 'Professional Portrait Session',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a0224.jpg',
    },
    {
      id: 4,
      title: 'Lifestyle Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a1923.JPG',
    },
    {
      id: 5,
      title: 'Editorial Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a1954.JPG',
    },
    {
      id: 6,
      title: 'Fashion Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a1958.JPG',
    },
    {
      id: 7,
      title: 'Studio Headshots',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a2112.JPG',
    },
    {
      id: 8,
      title: 'Creative Portraiture',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a2147.JPG',
    },
    {
      id: 9,
      title: 'Natural Light Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a9920.jpg',
    },
    {
      id: 10,
      title: 'Professional Branding',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a9922.jpg',
    },
    {
      id: 11,
      title: 'Contemporary Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a9953.jpg',
    },
    {
      id: 12,
      title: 'Artistic Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/1h4a9962.jpg',
    },
    {
      id: 13,
      title: 'Personal Branding',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2325.jpg',
    },
    {
      id: 14,
      title: 'Commercial Portrait',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2326.jpg',
    },
    {
      id: 15,
      title: 'Studio Sessions',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2327.jpg',
    },
    {
      id: 16,
      title: 'Business Portraits',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2331.jpg',
    },
    {
      id: 17,
      title: 'Professional Headshots',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2332.jpg',
    },
    {
      id: 18,
      title: 'Personal Portraits',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_2333.jpg',
    },
    {
      id: 19,
      title: 'Lifestyle Photography',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_4341.JPG',
    },
    {
      id: 20,
      title: 'Brand Photography',
      category: 'Portraits',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Portraits/IMG_4342.JPG',
    },
    // Wedding Photography from GitHub
    {
      id: 21,
      title: 'Wedding - Couple Portrait',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a0130.jpg',
    },
    {
      id: 22,
      title: 'Wedding - Intimate Moments',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a0133.jpg',
    },
    {
      id: 23,
      title: 'Wedding - First Look',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a0143.jpg',
    },
    {
      id: 24,
      title: 'Wedding - Reception Details',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a3588.jpg',
    },
    {
      id: 25,
      title: 'Wedding - Ceremony',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a3597.jpg',
    },
    {
      id: 26,
      title: 'Wedding - Bride Portrait',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a3744.jpg',
    },
    {
      id: 27,
      title: 'Wedding - Groom Portrait',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a3890.jpg',
    },
    {
      id: 28,
      title: 'Wedding - Venue Details',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6502.jpg',
    },
    {
      id: 29,
      title: 'Wedding - Celebration',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6517.jpg',
    },
    {
      id: 30,
      title: 'Wedding - Love Story',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6582.jpg',
    },
    {
      id: 31,
      title: 'Wedding - Golden Hour',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6633.jpg',
    },
    {
      id: 32,
      title: 'Wedding - Reception Dance',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6928.jpg',
    },
    {
      id: 33,
      title: 'Wedding - Romantic Shots',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a6939.jpg',
    },
    {
      id: 34,
      title: 'Wedding - Special Moments',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7012.jpg',
    },
    {
      id: 35,
      title: 'Wedding - Candid Shots',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7020.jpg',
    },
    {
      id: 36,
      title: 'Wedding - Bridal Party',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7025.jpg',
    },
    {
      id: 37,
      title: 'Wedding - Portraits',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7107.jpg',
    },
    {
      id: 38,
      title: 'Wedding - Beautiful Moments',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7130.jpg',
    },
    {
      id: 39,
      title: 'Wedding - Elegant Portraits',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7164.jpg',
    },
    {
      id: 40,
      title: 'Wedding - Reception Details',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7177.jpg',
    },
    {
      id: 41,
      title: 'Wedding - Couple Moments',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7262.jpg',
    },
    {
      id: 42,
      title: 'Wedding - Timeless Memories',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7286.jpg',
    },
    {
      id: 43,
      title: 'Wedding - Love & Joy',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7321.jpg',
    },
    {
      id: 44,
      title: 'Wedding - Celebration Time',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7410.jpg',
    },
    {
      id: 45,
      title: 'Wedding - Final Dance',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1h4a7434.jpg',
    },
    {
      id: 46,
      title: 'Wedding - Classic Romance',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0652.jpg',
    },
    {
      id: 47,
      title: 'Wedding - Perfect Day',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0658.jpg',
    },
    {
      id: 48,
      title: 'Wedding - Forever Together',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0665.jpg',
    },
    {
      id: 49,
      title: 'Wedding - Just Married',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0678.jpg',
    },
    {
      id: 50,
      title: 'Wedding - Newlyweds',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0703.jpg',
    },
    {
      id: 51,
      title: 'Wedding - Pure Happiness',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0912.jpg',
    },
    {
      id: 52,
      title: 'Wedding - Love Captured',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0922.jpg',
    },
    {
      id: 53,
      title: 'Wedding - Best Day Ever',
      category: 'Weddings',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Wedding/1j0a0949.jpg',
    },
    // Event Photography from GitHub
    {
      id: 54,
      title: 'Corporate Event',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2048.jpg',
    },
    {
      id: 55,
      title: 'Event Coverage',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2074.jpg',
    },
    {
      id: 56,
      title: 'Conference Photography',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2080.jpg',
    },
    {
      id: 57,
      title: 'Live Event',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2096.jpg',
    },
    {
      id: 58,
      title: 'Event Production',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2125.jpg',
    },
    {
      id: 59,
      title: 'Business Events',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2152.jpg',
    },
    {
      id: 60,
      title: 'Special Events',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2170.jpg',
    },
    {
      id: 61,
      title: 'Corporate Function',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2216.jpg',
    },
    {
      id: 62,
      title: 'Event Documentation',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2277.jpg',
    },
    {
      id: 63,
      title: 'Brand Event',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2300.jpg',
    },
    {
      id: 64,
      title: 'Product Launch',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a2338.jpg',
    },
    {
      id: 65,
      title: 'Concert & Live Performance',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9351.jpg',
    },
    {
      id: 66,
      title: 'Music Event',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9352.jpg',
    },
    {
      id: 67,
      title: 'Live Performance',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9535.jpg',
    },
    {
      id: 68,
      title: 'Stage Photography',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9544.jpg',
    },
    {
      id: 69,
      title: 'Concert Coverage',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9571.jpg',
    },
    {
      id: 70,
      title: 'Entertainment Event',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9611.jpg',
    },
    {
      id: 71,
      title: 'Artist Performance',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9620.jpg',
    },
    {
      id: 72,
      title: 'Stage Show',
      category: 'Events',
      type: 'Photography',
      image: 'https://raw.githubusercontent.com/RemySanti/223visions/e1b04e1c3f1c3189b23bc3d0d57a38e6524af929/Events/1h4a9628.jpg',
    },
  ];

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === 'All') return true;
    return item.type === activeFilter || item.category === activeFilter;
  });

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
            <h1 className="mb-6">Our Portfolio</h1>
            <p className="text-white/60 text-lg">
              A collection of our finest work across photography, videography, and hybrid productions in Atlanta.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 sticky top-20 z-40 bg-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                    : 'bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.02 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-purple-400 text-sm mb-2">{item.type}</span>
                  <h3 className="text-xl mb-1">{item.title}</h3>
                  <span className="text-white/50 text-sm">{item.category}</span>
                </div>
                
                {/* Maximize Icon on Hover */}
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Maximize2 size={18} />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/10">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-white/60 mb-8">
              Let's create something exceptional together. Book a consultation to discuss your vision.
            </p>
            <a
              href="https://links.223visions.com/widget/bookings/223-booking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all"
            >
              Book Your Consultation
            </a>
          </motion.div>
        </div>
      </section>

      <Lightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        imageSrc={selectedItem?.image || ''}
        title={selectedItem?.title}
        category={selectedItem?.category}
      />
    </div>
  );
}

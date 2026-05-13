import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import { Lightbox } from './Lightbox';
import { Maximize2 } from 'lucide-react';

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface PortfolioGridProps {
  items: PortfolioItem[];
  showFilter?: boolean;
}

export function PortfolioGrid({ items, showFilter = false }: PortfolioGridProps) {
  const [filter, setFilter] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  
  const categories = ['All', ...Array.from(new Set(items.map(item => item.category)))];
  const filteredItems = filter === 'All' ? items : items.filter(item => item.category === filter);

  return (
    <>
      <div>
        {showFilter && (
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  filter === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-black hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedItem(item)}
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-medium">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.category}</p>
                </div>
                <div className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <Maximize2 size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={!!selectedItem}
        onClose={() => setSelectedItem(null)}
        imageSrc={selectedItem?.imageUrl || ''}
        title={selectedItem?.title}
        category={selectedItem?.category}
      />
    </>
  );
}
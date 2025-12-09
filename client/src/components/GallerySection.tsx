import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import mandapImage from '@assets/generated_images/mandap_wedding_decoration.png';
import corporateImage from '@assets/generated_images/corporate_event_decor_setup.png';
import outdoorImage from '@assets/generated_images/outdoor_wedding_ceremony_setup.png';
import tableImage from '@assets/generated_images/elegant_indian_event_table.png';
import dessertImage from '@assets/generated_images/indian_dessert_spread_display.png';
import cateringImage from '@assets/generated_images/indian_catering_appetizers_display.png';

type FilterCategory = 'all' | 'weddings' | 'corporate' | 'social';

interface GalleryImage {
  src: string;
  alt: string;
  category: FilterCategory;
}

// todo: remove mock functionality
const galleryImages: GalleryImage[] = [
  { src: mandapImage, alt: 'Mandap wedding decoration with flowers', category: 'weddings' },
  { src: corporateImage, alt: 'Corporate event decor setup', category: 'corporate' },
  { src: outdoorImage, alt: 'Outdoor wedding ceremony', category: 'weddings' },
  { src: tableImage, alt: 'Elegant table setting', category: 'social' },
  { src: dessertImage, alt: 'Indian dessert display', category: 'social' },
  { src: cateringImage, alt: 'Catering appetizer spread', category: 'corporate' },
];

const filters: { key: FilterCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'weddings', label: 'Weddings' },
  { key: 'corporate', label: 'Corporate' },
  { key: 'social', label: 'Social Events' },
];

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const filteredImages =
    activeFilter === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (direction === 'prev') {
      setCurrentImageIndex((prev) => (prev === 0 ? filteredImages.length - 1 : prev - 1));
    } else {
      setCurrentImageIndex((prev) => (prev === filteredImages.length - 1 ? 0 : prev + 1));
    }
  };

  return (
    <section className="py-20 md:py-32" data-testid="section-gallery">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-gallery-page-title"
          >
            Decor Gallery
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Explore our portfolio of stunning event designs and decorations
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12"
          data-testid="nav-gallery-filters"
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeFilter === filter.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover-elevate'
              }`}
              data-testid={`button-filter-${filter.key}`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="break-inside-avoid group cursor-pointer"
              onClick={() => openLightbox(index)}
              data-testid={`image-gallery-${index}`}
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={lightboxOpen} onOpenChange={setLightboxOpen}>
        <DialogContent className="max-w-5xl p-0 bg-black/95 border-none">
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={() => setLightboxOpen(false)}
              data-testid="button-close-lightbox"
            >
              <X className="h-6 w-6" />
            </Button>

            <div className="flex items-center justify-center min-h-[60vh] p-4">
              {filteredImages[currentImageIndex] && (
                <img
                  src={filteredImages[currentImageIndex].src}
                  alt={filteredImages[currentImageIndex].alt}
                  className="max-h-[80vh] object-contain rounded-lg"
                />
              )}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage('prev')}
              data-testid="button-prev-image"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
              onClick={() => navigateImage('next')}
              data-testid="button-next-image"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}

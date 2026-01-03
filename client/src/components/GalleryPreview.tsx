import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mandapImage from "@assets/generated_images/decor/gk_sukhmanisahib.JPG";
import corporateImage from "@assets/generated_images/corporate_event_decor_setup.png";
import outdoorImage from "@assets/generated_images/decor/birthday_decor.JPG";
import tableImage from "@assets/generated_images/catering/lunch_layout_catering.JPG";

// todo: remove mock functionality
const galleryImages = [
  { src: mandapImage, alt: "Mandap wedding decoration", category: "Wedding" },
  { src: corporateImage, alt: "Corporate event setup", category: "Corporate" },
  { src: outdoorImage, alt: "Outdoor ceremony", category: "Wedding" },
  { src: tableImage, alt: "Elegant table setting", category: "Reception" },
];

export default function GalleryPreview() {
  return (
    <section
      className="pt-8 md:pt-12 pb-20 md:pb-32 bg-muted/30"
      data-testid="section-gallery-preview"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Our Work
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A glimpse into the beautiful events we've had the honor of creating
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-lg"
              data-testid={`image-gallery-preview-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/gallery">
            <Button
              variant="outline"
              size="lg"
              data-testid="button-view-gallery"
            >
              View Full Gallery
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

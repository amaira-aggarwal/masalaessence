import { useState } from "react";
import EventCarouselModal from "./ui/eventCarouselModal";
import corporateImage from "@assets/generated_images/corporate_event_decor_setup.png";
type GalleryEvent = {
  title: string;
  cover: string;
  images: string[];
};
const fashionImages = import.meta.glob(
  "@assets/generated_images/fashion show/*.{jpg,png,jpeg,JPG}",
  { eager: true, import: "default" },
);
const fashionImagesArray = Object.values(fashionImages) as string[];
const sandhyaImages = import.meta.glob(
  "@assets/generated_images/krishan sandhya/*.{jpg,png,jpeg,JPG,JPEG}",
  { eager: true, import: "default" },
);
const sandhyaImagesArray = Object.values(sandhyaImages) as string[];
const pathImages = import.meta.glob(
  "@assets/generated_images/sunderkand path/*.{jpg,png,jpeg,JPG,JPEG}",
  { eager: true, import: "default" },
);
const pathImagesArray = Object.values(pathImages) as string[];
const galleryEvents: GalleryEvent[] = [
  {
    title: "Fashion Show",
    cover: fashionImagesArray[2], // first image as cover
    images: fashionImagesArray,
  },
  {
    title: "Mata Ki Chowki",
    cover: corporateImage,
    images: [corporateImage],
  },
  {
    title: "Krishan Sandhya",
    cover: sandhyaImagesArray[5],
    images: sandhyaImagesArray,
  },
  {
    title: "Sunderkand Path",
    cover: pathImagesArray[1],
    images: pathImagesArray,
  },
];

export default function GalleryPreview() {
  const [activeEvent, setActiveEvent] = useState<GalleryEvent | null>(null);

  return (
    <>
      <section className="pt-8 pb-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl font-semibold">
              Our Highlight Events
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {galleryEvents.map((event, index) => (
              <div
                key={index}
                onClick={() => setActiveEvent(event)}
                className="group relative aspect-square overflow-hidden rounded-lg cursor-pointer"
              >
                <img
                  src={event.cover}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                  <span className="text-white text-lg font-medium">
                    {event.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeEvent && (
        <EventCarouselModal
          event={activeEvent}
          onClose={() => setActiveEvent(null)}
        />
      )}
    </>
  );
}

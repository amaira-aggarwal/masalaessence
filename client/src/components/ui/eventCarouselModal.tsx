import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type EventData = {
  title: string;
  images: string[];
};

type EventCarouselModalProps = {
  event: EventData;
  onClose: () => void;
};

export default function EventCarouselModal({
  event,
  onClose,
}: EventCarouselModalProps) {
  const [index, setIndex] = useState(0);
  const images = event.images;

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
      <button onClick={onClose} className="absolute top-6 right-6 text-white">
        <X size={28} />
      </button>

      <button
        onClick={() => setIndex((index - 1 + images.length) % images.length)}
        className="absolute left-6 text-white"
      >
        <ChevronLeft size={40} />
      </button>

      <img
        src={images[index]}
        alt={event.title}
        className="max-h-[80vh] max-w-[90vw] rounded-lg"
      />

      <button
        onClick={() => setIndex((index + 1) % images.length)}
        className="absolute right-6 text-white"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}

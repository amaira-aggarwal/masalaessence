import Navigation from '@/components/Navigation';
import GallerySection from '@/components/GallerySection';
import Footer from '@/components/Footer';

export default function Gallery() {
  return (
    <div className="min-h-screen" data-testid="page-gallery">
      <Navigation />
      <main className="pt-20">
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}

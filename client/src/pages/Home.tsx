import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GalleryPreview from '@/components/GalleryPreview';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Navigation />
      <main>
        <HeroSection />
        <ServicesSection />
        <GalleryPreview />
      </main>
      <Footer />
    </div>
  );
}

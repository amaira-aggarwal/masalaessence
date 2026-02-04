import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import GalleryPreview from "@/components/GalleryPreview";
import Footer from "@/components/Footer";
import AboutUs from "@/components/AboutUs";
import VideoTestimonials from "@/components/VideoTestimonials";
import FAQSchema from "@/components/FAQSchema";
import FAQSection from "@/components/FAQsection";
export default function Home() {
  return (
    <div className="min-h-screen" data-testid="page-home">
      <Navigation />
      <main>
        <HeroSection />
        <AboutUs />
        <ServicesSection />
        <GalleryPreview />
        <FAQSchema />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}

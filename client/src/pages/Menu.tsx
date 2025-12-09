import Navigation from '@/components/Navigation';
import MenuSection from '@/components/MenuSection';
import Footer from '@/components/Footer';

export default function Menu() {
  return (
    <div className="min-h-screen" data-testid="page-menu">
      <Navigation />
      <main className="pt-20">
        <MenuSection />
      </main>
      <Footer />
    </div>
  );
}

import Navigation from '@/components/Navigation';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen" data-testid="page-contact">
      <Navigation />
      <main className="pt-20">
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

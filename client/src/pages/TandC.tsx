import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import TermsAndConditions from "@/components/TermsAndConditions";

export default function TandC() {
  return (
    <div className="min-h-screen" data-testid="page-termsandconditions">
      <Navigation />
      <main className="pt-20">
        <TermsAndConditions />
      </main>
      <Footer />
    </div>
  );
}

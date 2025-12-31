const TermsAndConditions = () => {
  return (
    <section
      className="py-12 md:py-12"
      data-testid="section-termsandconditions"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-contact-title"
          >
            Terms and Conditions
          </h1>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">1. Scope of Services</h2>
            <p>
              Masala Essence provides event management, catering, and décor
              services as discussed and agreed upon with the client. The final
              scope of work will be based on the confirmed quotation and mutual
              understanding.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              2. Booking & Confirmation
            </h2>
            <p>
              An event is considered confirmed only after receipt of the agreed
              advance payment. Dates are blocked exclusively after confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">3. Payments</h2>
            <p>
              Payment terms, including advance and balance amounts, will be
              communicated clearly. Delays in payment may impact service
              delivery or result in cancellation of services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              4. Customization & Changes
            </h2>
            <p>
              While we strive to accommodate changes, requests made close to the
              event date are subject to feasibility and may involve additional
              costs.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">
              5. Cancellation & Date Changes
            </h2>
            <p>
              Any cancellation or rescheduling must be communicated in advance.
              Cancellation charges may apply depending on the stage of
              preparation and vendor commitments.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">6. Force Majeure</h2>
            <p>
              Masala Essence shall not be held responsible for delays or
              cancellations due to circumstances beyond control, including but
              not limited to natural calamities, government restrictions, or
              unforeseen emergencies.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">7. Media Usage</h2>
            <p>
              Images or videos from events may be used for portfolio, website,
              or promotional purposes unless the client requests otherwise in
              writing.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">8. Liability</h2>
            <p>
              Masala Essence will ensure professional execution of services but
              shall not be liable for indirect losses or issues arising from
              third-party vendors beyond our control.
            </p>
          </div>
        </div>

        <p className="mt-10 text-sm text-gray-600">
          These terms are subject to change without prior notice.
        </p>
      </div>
    </section>
  );
};

export default TermsAndConditions;

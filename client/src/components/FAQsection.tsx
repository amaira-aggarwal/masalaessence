import { faqs } from "@/data/faqs";
export default function FAQSection() {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <h2 className="font-serif text-3xl md:text-4xl font-semibold text-center mb-12">
          FAQs
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group border border-border rounded-xl p-5"
            >
              <summary className="flex cursor-pointer items-center justify-between font-medium">
                {faq.question}
                <span className="text-primary text-xl group-open:rotate-45 transition">
                  +
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

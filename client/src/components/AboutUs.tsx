import { Card, CardContent } from "@/components/ui/card";
import aboutImage from "@assets/generated_images/decor/gk_sukhmanisahib.JPG";
import teamImage from "@assets/generated_images/catering/lunch_layout_catering.JPG";

export default function AboutUs() {
  return (
    <section className="pt-8 md:pt-32 pb-8 md:pb-12 bg-background">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4">
            About Masala Essence
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Crafting memorable wedding and event experiences through thoughtful
            planning, exceptional catering, and elegant décor.
          </p>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={aboutImage}
              alt="Masala Essence Event Setup"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Masala Essence was founded with a simple belief — every wedding
              and celebration deserves to feel personal, seamless, and
              beautifully executed. What started as a passion for authentic
              cuisine and thoughtful design has grown into a full-service event
              management brand.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in wedding catering and décor, combining traditional
              flavors, modern presentation, and structured planning to deliver
              experiences that leave a lasting impression on guests and families
              alike.
            </p>
          </div>
        </div>

        {/* Values / Strengths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: "Wedding-Focused Approach",
              description:
                "We understand wedding timelines, rituals, guest expectations, and cultural nuances, allowing us to plan with precision and care.",
            },
            {
              title: "Customized Experiences",
              description:
                "Every menu, décor theme, and layout is designed specifically for your event — no templates, no shortcuts.",
            },
            {
              title: "Detail-Driven Execution",
              description:
                "From food presentation to final décor touches, we focus on the details that elevate an event from good to unforgettable.",
            },
          ].map((item, index) => (
            <Card key={index} className="h-full">
              <CardContent className="p-6">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team / Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Our Vision
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our vision is to build Masala Essence as a trusted name in wedding
              and event management — known for quality, creativity, and
              reliability.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We aim to grow alongside our clients’ celebrations, continuously
              improving our offerings while maintaining the personal attention
              that sets us apart.
            </p>
          </div>

          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={teamImage}
              alt="Masala Essence Catering Team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

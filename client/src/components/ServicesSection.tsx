import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Sparkles, Calendar } from "lucide-react";
import cateringImage from "@assets/generated_images/catering/lunch_layout_catering.JPG";
import decorImage from "@assets/generated_images/decor/gk_sukhmanisahib.JPG";
import corporateImage from "@assets/generated_images/corporate_event_decor_setup.png";

const services = [
  {
    // icon: UtensilsCrossed,
    title: "Catering",
    description:
      "Authentic cuisines crafted with traditional recipes and premium ingredients.",
    image: cateringImage,
    link: "/menu",
  },
  {
    icon: Sparkles,
    title: "Decor",
    description: "Custom decor and themes to bring your vision to life.",
    image: decorImage,
    link: "/gallery",
  },
  {
    icon: Calendar,
    title: "Full Event Planning",
    description: "Complete event coordination from concept to execution.",
    image: corporateImage,
    link: "/contact",
  },
];

export default function ServicesSection() {
  return (
    <section
      className="pt-8 md:pt-12 pb-8 md:pb-20 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-8">
          <h2
            className="font-serif text-2xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision
            to life
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x snap-mandatory">
          {services.map((service, index) => (
            <Link
              key={service.title}
              to={service.link}
              className="min-w-[60%] sm:min-w-[50%] md:min-w-0 snap-center"
            >
              <Card
                className="group overflow-hidden hover-elevate cursor-pointer h-full"
                data-testid={`card-service-${index}`}
              >
                <div className="h-44 md:h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-4 md:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    {/* <service.icon className="h-6 w-6 text-primary" /> */}
                    <h3 className="font-serif text-base sm:text-lg md:text-2xl font-semibold">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-snug">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { UtensilsCrossed, Sparkles, Calendar } from "lucide-react";
import cateringImage from "@assets/generated_images/catering/lunch_layout_catering.JPG";
import decorImage from "@assets/generated_images/decor/gk_sukhmanisahib.JPG";
import corporateImage from "@assets/generated_images/corporate_event_decor_setup.png";

const services = [
  {
    icon: UtensilsCrossed,
    title: "Catering",
    description:
      "Authentic Indian cuisine crafted with traditional recipes and premium ingredients. From appetizers to desserts, we create menus that delight.",
    image: cateringImage,
    link: "/menu",
  },
  {
    icon: Sparkles,
    title: "Decor",
    description:
      "Transform any venue into a stunning celebration space with our elegant floral arrangements, lighting, and thematic designs.",
    image: decorImage,
    link: "/gallery",
  },
  {
    icon: Calendar,
    title: "Full Event Planning",
    description:
      "Complete event coordination from concept to execution. Let us handle every detail while you enjoy your special day.",
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
        <div className="text-center mb-16">
          <h2
            className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Our Services
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From intimate gatherings to grand celebrations, we bring your vision
            to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link key={service.title} to={service.link}>
              <Card
                className="group overflow-hidden hover-elevate cursor-pointer h-full"
                data-testid={`card-service-${index}`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
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

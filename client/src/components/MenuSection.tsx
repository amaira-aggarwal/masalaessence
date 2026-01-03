import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Plus, ShoppingBag } from "lucide-react";
import { Link } from "wouter";
import { useMenuStore } from "@/lib/menuStore";

type Category = "salads" | "starters" | "livestations" | "mains" | "desserts";

interface MenuItem {
  name: string;
}

const menuData: Record<Category, MenuItem[]> = {
  salads: [
    { name: "Watermelon and Feta Salad" },
    { name: "Raw Papaya Salad" },
    { name: "Peanut Chaat" },
    { name: "Orange Segment with Rocket Leaves and Feta" },
    { name: "Quinoa Salad" },
    { name: "Caesar Salad" },
    { name: "Exotic Fruit Nut Salad" },
    { name: "Spiced Herb Paneer Ranch Salad" },
  ],
  starters: [
    { name: "Palak Patta Chaat" },
    { name: "Gol Gappa" },
    { name: "Bhalla Papdi" },
    { name: "Samosa Chaat" },
    { name: "Avocado Papdi Chaat" },
    { name: "Bombay Bhel Puri" },
    { name: "Paneer Tikka" },
    { name: "Haryali Paneer Tikka" },
    { name: "Malai Paneer Tikka" },
    { name: "Mushroom Tikka" },
    { name: "Tandoori Pineapple" },
    { name: "Tandoori Aloo" },
    { name: "Hara Bhara Kebab" },
    { name: "Dahi Kebab" },
    { name: "Seekh Kebab" },
    { name: "Chilli Paneer" },
    { name: "Spring Rolls" },
    { name: "Honey Chilli Potato" },
  ],
  livestations: [
    { name: "Pasta Station" },
    { name: "Sushi Station" },
    { name: "Dimsum Station" },
    { name: "Golgappa Station" },
    { name: "Mukhwaas Station" },
    { name: "Pizza Station" },
    { name: "Laccha Aaloo Tikki Station" },
    { name: "Chips and Dips Platter" },
  ],
  mains: [
    { name: "Dal Makhani" },
    { name: "Dal Tadka" },
    { name: "Amritsari Chana" },
    { name: "Paneer Butter Masala" },
    { name: "Kadhai Paneer" },
    { name: "Paneer Makhani" },
    { name: "Saag with Makki Roti" },
    { name: "Malai Kofta" },
    { name: "Rajma" },
    { name: "Kurkuri Bhindi" },
    { name: "Vegetable Jalfrezi" },
    { name: "Biryani with Burani Raita" },
    { name: "Green Thai Curry" },
    { name: "Pad Thai Noodles" },
    { name: "Hakka Noodles" },
    { name: "Vegetable Fried Rice" },
  ],
  desserts: [
    { name: "Paan Phirni" },
    { name: "Rose Phirni" },
    { name: "Kesar Phirni" },
    { name: "Kesar Stick Kulfi" },
    { name: "Rasmalai" },
    { name: "Gulab Jamun with Rabri" },
    { name: "Rasgulla" },
    { name: "Live Jalebi Station" },
    { name: "Moong Dal Halwa" },
    { name: "Gajar ka Halwa" },
    { name: "Tiramisu Cups" },
    { name: "Fruit Cream" },
    { name: "Fruit Custard" },
  ],
};

const categories: { key: Category; label: string }[] = [
  { key: "salads", label: "Salads" },
  { key: "starters", label: "Starters" },
  { key: "livestations", label: "Live Stations" },
  { key: "mains", label: "Main Course" },
  { key: "desserts", label: "Desserts" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("salads");
  const { selectedItems, addItem, removeItem, isSelected } = useMenuStore();

  const toggleItem = (name: string, category: string) => {
    if (isSelected(name)) {
      removeItem(name);
    } else {
      addItem({ name, category });
    }
  };

  return (
    <section className="py-12 md:py-12" data-testid="section-menu">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-menu-title"
          >
            Our Catering Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Select items you're interested in to get a personalized quote
          </p>
          {selectedItems.length > 0 && (
            <div className="inline-flex items-center gap-3 bg-primary/10 px-4 py-2 rounded-full">
              <ShoppingBag className="h-5 w-5 text-primary" />
              <span className="text-foreground font-medium">
                {selectedItems.length} item
                {selectedItems.length !== 1 ? "s" : ""} selected
              </span>
              <Link href="/contact">
                <Button size="sm" data-testid="button-get-quote">
                  Get Quote
                </Button>
              </Link>
            </div>
          )}
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12 top-20 bg-background py-4 z-40"
          data-testid="nav-menu-categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover-elevate"
              }`}
              data-testid={`button-category-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuData[activeCategory].map((item, index) => {
            const selected = isSelected(item.name);
            return (
              <Card
                key={item.name}
                className={`cursor-pointer transition-all ${
                  selected
                    ? "ring-2 ring-primary bg-primary/5"
                    : "hover-elevate"
                }`}
                onClick={() => toggleItem(item.name, activeCategory)}
                data-testid={`card-menu-item-${index}`}
              >
                <CardContent className="p-4 flex items-center justify-between gap-3">
                  <span className="font-medium text-foreground">
                    {item.name}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                      selected
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {selected ? (
                      <Check className="h-4 w-4" />
                    ) : (
                      <Plus className="h-4 w-4" />
                    )}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {selectedItems.length >= 10 && (
          <div className="mt-12 text-center">
            <Link href="/contact">
              <Button size="lg" data-testid="button-request-quote">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Request Quote for {selectedItems.length} Item
                {selectedItems.length !== 1 ? "s" : ""}
              </Button>
            </Link>
          </div>
        )}
        {selectedItems.length > 0 && selectedItems.length < 10 && (
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Select at least 10 items to request a quote.
          </p>
        )}
      </div>
    </section>
  );
}

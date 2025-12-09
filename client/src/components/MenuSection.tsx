import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Wheat } from 'lucide-react';

type Category = 'appetizers' | 'mains' | 'desserts' | 'beverages';

interface MenuItem {
  name: string;
  description: string;
  vegetarian?: boolean;
  vegan?: boolean;
  glutenFree?: boolean;
}

// todo: remove mock functionality
const menuData: Record<Category, MenuItem[]> = {
  appetizers: [
    { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', vegetarian: true },
    { name: 'Chicken Tikka', description: 'Marinated chicken pieces grilled in tandoor', glutenFree: true },
    { name: 'Paneer Pakora', description: 'Cottage cheese fritters with mint chutney', vegetarian: true },
    { name: 'Seekh Kebab', description: 'Minced lamb skewers with aromatic spices', glutenFree: true },
    { name: 'Aloo Tikki', description: 'Spiced potato patties with tamarind sauce', vegetarian: true, vegan: true },
    { name: 'Fish Amritsari', description: 'Crispy battered fish with tangy spices' },
  ],
  mains: [
    { name: 'Butter Chicken', description: 'Tender chicken in creamy tomato sauce', glutenFree: true },
    { name: 'Lamb Rogan Josh', description: 'Slow-cooked lamb in Kashmiri spices', glutenFree: true },
    { name: 'Palak Paneer', description: 'Cottage cheese in spinach curry', vegetarian: true, glutenFree: true },
    { name: 'Dal Makhani', description: 'Black lentils slow-cooked with cream', vegetarian: true },
    { name: 'Biryani', description: 'Fragrant basmati rice with choice of protein', glutenFree: true },
    { name: 'Chana Masala', description: 'Chickpeas in tangy tomato gravy', vegetarian: true, vegan: true },
  ],
  desserts: [
    { name: 'Gulab Jamun', description: 'Milk dumplings in rose-scented syrup', vegetarian: true },
    { name: 'Rasmalai', description: 'Cottage cheese patties in cardamom milk', vegetarian: true },
    { name: 'Kheer', description: 'Creamy rice pudding with nuts and saffron', vegetarian: true, glutenFree: true },
    { name: 'Jalebi', description: 'Crispy spirals soaked in saffron syrup', vegetarian: true },
    { name: 'Kulfi', description: 'Traditional Indian ice cream', vegetarian: true, glutenFree: true },
    { name: 'Gajar Halwa', description: 'Warm carrot pudding with almonds', vegetarian: true },
  ],
  beverages: [
    { name: 'Mango Lassi', description: 'Creamy yogurt smoothie with mango', vegetarian: true, glutenFree: true },
    { name: 'Masala Chai', description: 'Spiced tea with milk', vegetarian: true, glutenFree: true },
    { name: 'Rose Sharbat', description: 'Refreshing rose-flavored drink', vegetarian: true, vegan: true },
    { name: 'Sweet Lassi', description: 'Traditional yogurt drink', vegetarian: true, glutenFree: true },
    { name: 'Nimbu Pani', description: 'Fresh lemonade with cumin', vegetarian: true, vegan: true },
    { name: 'Thandai', description: 'Festive milk drink with nuts and spices', vegetarian: true },
  ],
};

const categories: { key: Category; label: string }[] = [
  { key: 'appetizers', label: 'Appetizers' },
  { key: 'mains', label: 'Main Course' },
  { key: 'desserts', label: 'Desserts' },
  { key: 'beverages', label: 'Beverages' },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<Category>('appetizers');

  return (
    <section className="py-20 md:py-32" data-testid="section-menu">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="text-center mb-12">
          <h1
            className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4"
            data-testid="text-menu-title"
          >
            Our Catering Menu
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Authentic flavors crafted with love and tradition
          </p>
        </div>

        <div
          className="flex flex-wrap justify-center gap-3 mb-12 sticky top-20 bg-background py-4 z-40"
          data-testid="nav-menu-categories"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === cat.key
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover-elevate'
              }`}
              data-testid={`button-category-${cat.key}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuData[activeCategory].map((item, index) => (
            <Card key={item.name} className="h-full" data-testid={`card-menu-item-${index}`}>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-serif text-lg font-semibold text-foreground">{item.name}</h3>
                  <div className="flex gap-1 flex-shrink-0">
                    {item.vegetarian && (
                      <Leaf className="h-4 w-4 text-green-600" aria-label="Vegetarian" />
                    )}
                    {item.glutenFree && (
                      <Wheat className="h-4 w-4 text-amber-600" aria-label="Gluten Free" />
                    )}
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                {item.vegan && (
                  <Badge variant="secondary" className="mt-3">
                    Vegan
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-4 flex-wrap">
            <span className="flex items-center gap-1">
              <Leaf className="h-4 w-4 text-green-600" /> Vegetarian
            </span>
            <span className="flex items-center gap-1">
              <Wheat className="h-4 w-4 text-amber-600" /> Gluten Free
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

# Masala Essence Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from premium hospitality and event platforms (Airbnb, high-end restaurant sites, luxury event venues) to create an elegant, visually-driven experience that showcases culinary artistry and decor expertise.

**Core Principle**: Create an immersive, gallery-first experience that makes users feel the warmth and sophistication of Masala Essence events before they even inquire.

## Typography System

**Font Families** (Google Fonts):
- Primary: 'Playfair Display' (serif) - Headers and brand elements for elegance
- Secondary: 'Inter' (sans-serif) - Body text and UI elements for readability

**Hierarchy**:
- Hero headline: text-5xl md:text-6xl lg:text-7xl, font-bold
- Section headers: text-3xl md:text-4xl, font-semibold
- Menu category headers: text-2xl md:text-3xl, font-medium
- Menu items: text-lg, font-normal
- Body text: text-base, leading-relaxed
- Form labels: text-sm, font-medium
- Captions/metadata: text-sm, opacity-75

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 for consistent rhythm
- Section padding: py-20 md:py-32
- Component gaps: gap-6 md:gap-8
- Card padding: p-6 md:p-8
- Form spacing: space-y-6

**Container Strategy**:
- Full-width sections with inner max-w-7xl mx-auto px-6 md:px-8
- Menu content: max-w-6xl
- Contact form: max-w-3xl

## Component Library

### Navigation
Sticky header with transparent-to-solid transition on scroll
- Logo (left): Masala Essence with decorative element
- Navigation links (right): Home, Menu, Gallery, Contact
- Mobile: Hamburger menu with slide-in overlay
- Height: h-20, backdrop-blur-md

### Homepage Sections

**Hero Section** (80vh):
- Full-width background image showing beautifully plated food or elegant decor setup
- Centered overlay content with dark gradient backdrop
- Headline + subheadline + primary CTA button with backdrop-blur-lg bg-white/20
- Scroll indicator at bottom

**Services Overview** (3-column grid on desktop, stack on mobile):
- Cards for Catering, Decor, Full Event Planning
- Each card: icon/image, title, brief description, "Learn More" link
- Grid: grid-cols-1 md:grid-cols-3, gap-8

**Featured Gallery Preview**:
- Masonry-style grid showing 6-8 decor highlight images
- Image hover: subtle zoom with overlay showing project type
- CTA: "View Full Gallery" button centered below

**Testimonials/Social Proof**:
- 2-column layout with customer quote cards
- Include client name, event type, star rating

### Catering Menu Page

**Menu Structure**:
- Category navigation tabs (sticky): Appetizers, Mains, Desserts, Beverages
- Each category displays in elegant card grid
- Menu item cards (2-column on tablet, 3-column on desktop):
  - Item name (bold, larger)
  - Description (lighter text)
  - Optional: dietary indicators (vegetarian, vegan, gluten-free icons)
  - Spacing: generous whitespace between items

**Menu Presentation**:
- Background: Subtle texture or pattern
- Cards: Elevated with shadow, rounded-xl, bg-white
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### Decor Gallery Page

**Gallery Layout**:
- Masonry grid using columns-1 sm:columns-2 lg:columns-3
- Images: Various aspect ratios, rounded-lg
- Hover effect: Overlay with project name/event type appears
- Lightbox functionality: Click to view full-size with navigation arrows

**Filtering** (above gallery):
- Pill-style filter buttons: All, Weddings, Corporate, Social Events
- Active state: filled background

### Contact Form Page

**Form Layout** (single column, centered):
- Section header: "Plan Your Event"
- Introductory text explaining the process

**Required Fields**:
- Full Name (text input)
- Email (email input)
- Phone (tel input)
- Event Date (date picker)
- Event Location (text input)
- Event Type (dropdown: Wedding, Corporate, Birthday, Other)
- Guest Count (number input with +/- buttons)
- Services Interested In (multi-select checkboxes: Catering, Decor, Both)
- Additional Details (textarea)

**Form Styling**:
- Inputs: Consistent height (h-12), rounded borders, focus states with ring
- Labels: Above inputs, required asterisk for mandatory fields
- Submit button: Large, full-width on mobile, inline on desktop
- Spacing: space-y-6 between form groups

**Contact Information Sidebar** (2-column layout on desktop):
- Form (left, 2/3 width)
- Info panel (right, 1/3 width): Office hours, phone, email, social links

### Footer
- 3-column layout on desktop, stack on mobile
  - Column 1: Logo, tagline, social media icons
  - Column 2: Quick links (Menu, Gallery, Contact, About)
  - Column 3: Contact info, business hours
- Bottom bar: Copyright, links to Terms/Privacy
- Padding: py-12

## Images

**Hero Image**: 
- Large, high-quality image showing an elegantly set table with colorful Indian dishes OR a beautifully decorated event space
- Should evoke warmth, celebration, and premium quality
- Placement: Full-width background on homepage hero section

**Gallery Images** (15-20 images):
- Decor setups: Mandap decorations, table settings, floral arrangements, lighting setups, stage designs
- Mix of wide shots and detail shots
- Should showcase variety: weddings, corporate events, cultural celebrations
- Placement: Decor Gallery page in masonry grid

**Service Cards** (3 images):
- Appetizer platter image
- Decorated event space image  
- Full service event image
- Placement: Homepage services section

**Menu Page Background**:
- Subtle texture or elegant pattern (not photo)
- Should not compete with menu content

## Icons
**Library**: Heroicons (via CDN)
- Navigation: menu, x-mark for mobile toggle
- Form: calendar for date, location-marker, user-group
- Services: utensils, sparkles, check-circle
- Social: Instagram, Facebook, phone, envelope

## Accessibility
- Form inputs: Proper labels with for attributes
- Alt text for all gallery images with descriptive event type
- Focus states: Visible ring-2 on all interactive elements
- Color contrast: Maintain WCAG AA standards
- Mobile touch targets: Minimum 44x44px

## Key Design Principles
1. **Visual Hierarchy**: Large, striking imagery takes center stage
2. **Warmth & Elegance**: Serif headlines paired with clean sans-serif body create sophisticated yet approachable feel
3. **Generous Spacing**: Let content breathe - event businesses are about creating experiences, not cramming information
4. **Mobile-First Gallery**: Decor images are hero content - optimize for thumb-friendly browsing
5. **Frictionless Inquiry**: Contact form should feel welcoming and comprehensive without being overwhelming
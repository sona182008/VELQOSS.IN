/*
  EASY MAINTENANCE:
  Edit ONLY this file when you want to add/remove/change products.
  No need to touch index.html or styles.css.

  price: Keep it as "Starting from ₹..." or "Get quote" if your price changes.
  category must match one of the CATEGORIES below.
*/

const CATEGORIES = [
  { id: "cards", name: "Cards" },
  { id: "id", name: "ID / PVC" },
  { id: "invitation", name: "Invitation" },
  { id: "business", name: "Business" },
  { id: "gifts", name: "Gifts" },
  { id: "design", name: "Design" }
];

const PRODUCTS = [
  {
    name: "Visiting Cards",
    category: "cards",
    categoryLabel: "Cards",
    description: "Professional cards for personal branding, shops and businesses.",
    price: "Get quote",
    badge: "Popular",
    icon: "▤",
    theme: ""
  },
  {
    name: "Business Cards",
    category: "business",
    categoryLabel: "Business",
    description: "Premium business cards designed around your brand identity.",
    price: "Get quote",
    badge: "Premium",
    icon: "▥",
    theme: "theme-light"
  },
  {
    name: "ID Cards",
    category: "id",
    categoryLabel: "ID / PVC",
    description: "School, office, club and organization ID card printing.",
    price: "Get quote",
    badge: "Bulk",
    icon: "▣",
    theme: "theme-blue"
  },
  {
    name: "PVC Cards",
    category: "id",
    categoryLabel: "ID / PVC",
    description: "Durable PVC card options for identification and membership use.",
    price: "Get quote",
    badge: "Durable",
    icon: "▭",
    theme: ""
  },
  {
    name: "Invitation Cards",
    category: "invitation",
    categoryLabel: "Invitation",
    description: "Custom invitations for birthdays, weddings, functions and events.",
    price: "Get quote",
    badge: "Custom",
    icon: "✉",
    theme: "theme-light"
  },
  {
    name: "Photo Gifts",
    category: "gifts",
    categoryLabel: "Gifts",
    description: "Personalized photo products and gift printing. Availability on request.",
    price: "Ask availability",
    badge: "Custom",
    icon: "♡",
    theme: "theme-red"
  },
  {
    name: "Sublimation Printing",
    category: "gifts",
    categoryLabel: "Gifts",
    description: "Custom printing for suitable sublimation blanks and products.",
    price: "Get quote",
    badge: "Custom",
    icon: "◇",
    theme: ""
  },
  {
    name: "Logo & Poster Design",
    category: "design",
    categoryLabel: "Design",
    description: "Clean digital designs for logos, posters, social media and print.",
    price: "Get quote",
    badge: "Digital",
    icon: "✦",
    theme: "theme-blue"
  },
  {
    name: "Custom Printing",
    category: "design",
    categoryLabel: "Design",
    description: "Have a different requirement? Send your reference and quantity.",
    price: "Get quote",
    badge: "Flexible",
    icon: "＋",
    theme: ""
  }
];

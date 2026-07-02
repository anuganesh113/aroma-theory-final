export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'Starters' | 'Mains' | 'Desserts' | 'Tasting Menu';
  image: string;
}

export const menuItems: MenuItem[] = [
  // Starters
  {
    id: 's1',
    name: 'Smoked Heirloom Tomato',
    description: 'Cold-pressed basil oil, fermented garlic, ash-dusted burrata.',
    price: '$24',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1592417817098-8fd3d9eb14a5?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 's2',
    name: 'Charred Diver Scallop',
    description: 'Yuzu kosho beurre blanc, sea bean, puffed wild rice.',
    price: '$32',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 's3',
    name: 'Wagyu Beef Tartare',
    description: 'Cured egg yolk, black truffle emulsion, sourdough tuile.',
    price: '$38',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1544025162-811114215f5a?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  // Mains
  {
    id: 'm1',
    name: 'Dry-Aged Duck Breast',
    description: 'Morel mushroom, preserved blackberry, spruce tip reduction.',
    price: '$58',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 'm2',
    name: 'Miso-Glazed Black Cod',
    description: 'Dashi broth, baby bok choy, pickled ginger blossom.',
    price: '$54',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 'm3',
    name: 'Foraged Mushroom Risotto',
    description: 'Acquerello rice, chanterelle, aged pecorino, white truffle shavings.',
    price: '$48',
    category: 'Mains',
    image: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  // Desserts
  {
    id: 'd1',
    name: 'Burnt Honey Panna Cotta',
    description: 'Cardamom shortbread, fig leaf oil, macerated figs.',
    price: '$20',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 'd2',
    name: 'Dark Chocolate Mille-Feuille',
    description: 'Espresso ganache, smoked sea salt, hazelnut praline.',
    price: '$22',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  // Tasting Menu
  {
    id: 't1',
    name: 'The Aroma Experience',
    description: 'An eight-course journey exploring the intersection of scent, memory, and flavor. Requires entire table participation.',
    price: '$225/pp',
    category: 'Tasting Menu',
    image: 'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=800&h=1200',
  },
  {
    id: 't2',
    name: 'Sommelier Wine Pairing',
    description: 'Curated selections focusing on natural and biodynamic producers to complement the tasting menu.',
    price: '$145/pp',
    category: 'Tasting Menu',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&q=80&w=800&h=1200',
  }
];

export const galleryImages = [
  'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&q=80&w=1200&h=800', // Restaurant interior
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&q=80&w=800&h=800', // Plate details
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=800&h=1000', // Chef plating
  'https://images.unsplash.com/photo-1514326640560-7d063ef2aed5?auto=format&fit=crop&q=80&w=1000&h=800', // Tasting dish
  'https://images.unsplash.com/photo-1574966739987-65e386c1da8a?auto=format&fit=crop&q=80&w=800&h=1200', // Wine glass
  'https://images.unsplash.com/photo-1544025162-811114215f5a?auto=format&fit=crop&q=80&w=1200&h=800', // Food macro
];

export const testimonials = [
  {
    id: 1,
    quote: "Aroma Theory isn't just a meal; it's a profound sensory journey. Every dish evokes a different memory.",
    name: "Elena R., Food Critic",
    publication: "The Culinary Times"
  },
  {
    id: 2,
    quote: "The way they use smoke, pine, and floral notes is nothing short of alchemy. The tasting menu left me speechless.",
    name: "Marcus J.",
    publication: ""
  },
  {
    id: 3,
    quote: "Impeccable service paired with wildly inventive flavor profiles. The smoked tomato starter changed how I think about food.",
    name: "Sarah W.",
    publication: "Gastronomy Monthly"
  }
];

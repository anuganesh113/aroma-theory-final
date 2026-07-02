import type { Dish } from '../components/menu/MenuSection';

export const startersData: Dish[] = [
  {
    id: "s1",
    name: "Truffle Arancini",
    description: "Crispy wild mushroom risotto balls stuffed with smoked mozzarella, served with black garlic aioli.",
    price: "NPR 1,250",
    dietary: ["vegetarian"],
    badges: [{ text: "Popular", type: "popular" }]
  },
  {
    id: "s2",
    name: "Wagyu Beef Carpaccio",
    description: "Thinly sliced premium wagyu, aged parmesan, micro arugula, capers, and white truffle oil.",
    price: "NPR 2,800",
    dietary: ["gf"],
    badges: [{ text: "Chef's Pick", type: "chef" }]
  },
  {
    id: "s3",
    name: "Himalayan Trout Tartare",
    description: "Locally sourced trout, avocado pureé, yuzu dressing, and crispy lotus root chips.",
    price: "NPR 1,650",
    dietary: ["gf"]
  }
];

export const saladsData: Dish[] = [
  {
    id: "sa1",
    name: "Burrata & Heirloom Tomato",
    description: "Fresh burrata cheese, organic heirloom tomatoes, basil oil, and 12-year aged balsamic.",
    price: "NPR 1,800",
    dietary: ["vegetarian", "gf"]
  },
  {
    id: "sa2",
    name: "Roasted Beetroot Salad",
    description: "Wood-fired beets, whipped goat cheese, candied walnuts, and citrus vinaigrette.",
    price: "NPR 1,450",
    dietary: ["vegetarian", "nuts", "gf"]
  }
];

export const mainsData: Dish[] = [
  {
    id: "m1",
    name: "Grilled Herb Salmon",
    description: "Fresh Atlantic salmon with lemon butter sauce, seasonal vegetables, and garlic mashed potatoes.",
    price: "NPR 3,250",
    dietary: ["gf"],
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=600"
  },
  {
    id: "m2",
    name: "24-Hour Braised Lamb Shank",
    description: "Slow-cooked local lamb, creamy polenta, roasted root vegetables, and red wine reduction.",
    price: "NPR 4,500",
    badges: [{ text: "Signature", type: "chef" }]
  },
  {
    id: "m3",
    name: "Wild Mushroom Risotto",
    description: "Arborio rice, porcini mushrooms, truffle butter, and 24-month aged Parmigiano-Reggiano.",
    price: "NPR 2,400",
    dietary: ["vegetarian", "gf"]
  }
];

export const dessertsData: Dish[] = [
  {
    id: "d1",
    name: "Chocolate Lava Cake",
    description: "Warm dark chocolate fondant, Madagascar vanilla bean gelato, and raspberry coulis.",
    price: "NPR 1,150",
    dietary: ["vegetarian"],
    badges: [{ text: "Must Try", type: "popular" }]
  },
  {
    id: "d2",
    name: "Yuzu Crème Brûlée",
    description: "Classic set custard infused with Japanese yuzu, caramelized sugar crust, and fresh berries.",
    price: "NPR 950",
    dietary: ["vegetarian", "gf"]
  }
];

export type ProductCategory = "gateaux" | "cupcakes" | "patisseries" | "special";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  description: string;
  longDescription?: string;
  price: string;
  image: string;
  featured?: boolean;
  servings?: string;
};

export const categoryLabels: Record<ProductCategory, string> = {
  gateaux: "Gâteaux",
  cupcakes: "Cupcakes",
  patisseries: "Pâtisseries",
  special: "Commandes spéciales",
};

export const products: Product[] = [
  {
    id: "gateau-chocolat",
    name: "Gâteau Chocolat & Café",
    category: "gateaux",
    description: "Couches de biscuit chocolat et crème café, nappé de ganache.",
    longDescription:
      "Une création signature : biscuit chocolat moelleux alterné avec une crème légère au café, le tout recouvert d'une ganache brillante et garni de grains de café torréfiés. Idéal pour les amateurs de mocha.",
    price: "à partir de 45 DT",
    image: "/images/gateau-chocolat.jpg",
    featured: true,
    servings: "8–10 personnes",
  },
  {
    id: "cheesecake",
    name: "Verrines Cheesecake",
    category: "patisseries",
    description: "Mini verrines crémeuses aux parfums assortis.",
    longDescription:
      "Des verrines individuelles aux textures croustillantes et fondantes : cheesecake, chocolat-noisette, cookies & cream et caramel. Parfaites pour un dessert à partager ou un événement.",
    price: "à partir de 8 DT / pièce",
    image: "/images/cheesecake.jpg",
    featured: true,
    servings: "1 pièce",
  },
  {
    id: "millefeuille",
    name: "Millefeuille",
    category: "patisseries",
    description: "Feuilletage croustillant, crème pâtissière et glaçage délicat.",
    longDescription:
      "Le classique revisité : pâte feuilletée dorée et croustillante, crème pâtissière onctueuse et une finition élégante. Une pâtisserie intemporelle pour toutes les occasions.",
    price: "à partir de 12 DT",
    image: "/images/millefeuille.webp",
    featured: true,
    servings: "1 pièce",
  },
];

interface Offer {
  name: string;
  discountPercentage: number;
  imagePath: string;
}

interface Item {
  name: string;
  description: string;
  price: number;
}

interface Category {
  name: string;
  items: Array<Item>;
}

export interface Restaurant {
  id: number;
  name: string;
  imagePath: string;
  slogan: string;
  minimumOrderPrice: number;
  deliveryTimeMin: number;
  deliveryTimeMax: number; 
  raring: number;
  numReviews: number;
  closingTime: string;
  menuOptions: Array<string>;
  offers: Array<Offer>; 
  categories: Array<Category>;
  posterBackgroundImage: string;
  posterImage: string;
}
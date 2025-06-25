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
  offers: []; 
}
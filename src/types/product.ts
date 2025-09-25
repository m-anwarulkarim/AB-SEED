export interface Product {
  id: number;
  name: string;
  description: string;
  longDescription?: string;
  category: string;
  offerPrice: number;
  regularPrice: number;
  image: string;
  isFavorite?: boolean;
  inStock?: boolean;
}

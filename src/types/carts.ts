// types/CartItem.ts
export interface CartItem {
  productId: number;
  name: string;
  image: string;
  offerPrice: number;
  regularPrice: number;
  quantity: number;
  description: string;
  isBranded: boolean;
  isFavorite: boolean;
}

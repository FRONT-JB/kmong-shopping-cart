export interface ProductTypes {
  id: number;
  name: string;
  image: string;
  stock: number;
  price: number;
  isPrime: boolean;
}

export interface CartProducts extends ProductTypes {
  quantity: number;
}

export type PaymentProduct = Pick<CartProducts, 'id' | 'quantity'>[];

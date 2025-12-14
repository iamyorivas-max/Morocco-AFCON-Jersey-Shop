export interface JerseyConfig {
  name: string;
  number: string;
  size: string;
  color: 'red' | 'green' | 'white' | 'black';
}

export interface OrderDetails {
  fullName: string;
  phone: string;
  city: string;
  quantity: number;
}

export const JERSEY_PRICES = {
  base: 299, // Moroccan Dirham (MAD)
  discount: 199
};

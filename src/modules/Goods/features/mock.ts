import { Good } from './models';

const DATA: Good[] = [
  { id: 1, name: 'Bike', price: 1560 },
  { id: 2, name: 'Headphones', price: 120 },
  { id: 3, name: 'T-Shirt', price: 25 },
  { id: 4, name: 'Laptop', price: 950 },
  { id: 5, name: 'Backpack', price: 65 },
  { id: 6, name: 'Smartphone', price: 800 },
  { id: 7, name: 'Running Shoes', price: 90 },
  { id: 8, name: 'Wireless Mouse', price: 35 },
  { id: 9, name: 'Gaming Console', price: 450 },
  { id: 10, name: 'LED TV', price: 800 },
];

export function FetchGoods() {
  return new Promise<Good[]>((res) => {
    setTimeout(() => {
      res(DATA);
    }, 1000);
  });
}

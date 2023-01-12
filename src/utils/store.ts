import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface Cart {
  items: OrderItem[];
  subtotal: number;
  taxes: number;
  total: number;
}

export type OrderItem = {
  id: string;
  quantity: number;
  price: number;
  orderId: string | null;
  productId: string;
};

export type Product = {
  id: string;
  name: string;
  price: number;
};

export const selectedAccountAtom = atomWithStorage("selectedAccount", "");

export const cartAtom = atom<Cart>({
  items: [],
  subtotal: 0,
  taxes: 0,
  total: 0,
});

export const clearCartAtom = atom(
  () => "",
  (_get, set) => {
    set(cartAtom, { items: [], subtotal: 0, taxes: 0, total: 0 });
  }
);

export const addProductToCartAtom = atom(
  () => "",
  (get, set, product: Product) => {
    set(cartAtom, {
      ...get(cartAtom),
      items: [
        ...get(cartAtom).items,
        {
          id: "",
          orderId: null,
          quantity: 1,
          price: product.price,
          productId: product.id,
        },
      ],
    });
  }
);

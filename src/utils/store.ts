import type { Product } from "@prisma/client";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export interface Cart {
  items: OrderItem[];
  subtotal: number;
  taxes: number;
  total: number;
}

export type OrderItem = {
  quantity: number;
  price: number;
  product: Product;
};

export const selectedAccountAtom = atomWithStorage("selectedAccount", "");

export const clearSelectedAccountAtom = atom(
  () => "",
  (_get, set) => {
    set(selectedAccountAtom, "");
  }
);

export const cartAtom = atomWithStorage<Cart>("cart", {
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
    const originalItems = get(cartAtom).items;
    const existingProduct = originalItems.find(
      (item) => item.product.id === product.id
    );

    let items = originalItems;
    if (existingProduct) {
      existingProduct.quantity += 1;
      existingProduct.price += product.price;
    } else {
      items = [
        ...originalItems,
        {
          product: product,
          quantity: 1,
          price: product.price,
        },
      ];
    }

    const subtotal = items.reduce(
      (result, item) => result + item.product.price * item.quantity,
      0
    );
    const taxes = subtotal * 0.07;
    const total = subtotal + taxes;

    set(cartAtom, {
      items,
      subtotal,
      taxes,
      total,
    });
  }
);

export const removeProductFromCartAtom = atom(
  () => "",
  (get, set, product: Product) => {
    const items = get(cartAtom).items.filter(
      (item) => item.product.id !== product.id
    );

    const subtotal = items.reduce(
      (result, item) => result + item.price * item.quantity,
      0
    );
    const taxes = subtotal * 0.07;
    const total = subtotal + taxes;

    set(cartAtom, {
      items,
      subtotal,
      taxes,
      total,
    });
  }
);

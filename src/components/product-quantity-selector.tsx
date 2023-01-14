import { useAtom } from "jotai";
import { type ChangeEvent, useState, useEffect } from "react";
import type { OrderItem } from "../utils/store";
import { changeProductQuantityAtom } from "../utils/store";
import MinusIcon from "./icons/minus-icon";
import PlusIcon from "./icons/plus-icon";

const ProductQuantitySelector = ({ item }: { item: OrderItem }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [, changeProductQuantity] = useAtom(changeProductQuantityAtom);

  useEffect(() => {
    setQuantity(item.quantity);
  }, [item.quantity]);

  const addOne = () => {
    setQuantity(item.quantity + 1);
    changeProductQuantity({
      product: item.product,
      quantity: item.quantity + 1,
    });
  };

  const subtractOne = () => {
    setQuantity(item.quantity - 1);
    changeProductQuantity({
      product: item.product,
      quantity: item.quantity - 1,
    });
  };

  const updateQuantity = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuantity = Number.parseInt(event.target.value);

    setQuantity(newQuantity);
    changeProductQuantity({
      product: item.product,
      quantity: newQuantity,
    });
  };

  return (
    <div className="flex items-center space-x-3">
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 disabled:cursor-not-allowed dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        disabled={item.quantity <= 1}
        onClick={subtractOne}
      >
        <PlusIcon />
      </button>
      <input
        type="number"
        className="block w-14 rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        value={quantity}
        onChange={(event) => setQuantity(Number.parseInt(event.target.value))}
        onBlur={updateQuantity}
        min="1"
      />
      <button
        type="button"
        className="inline-flex items-center rounded-full border border-gray-300 bg-white p-1 text-sm font-medium text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
        onClick={addOne}
      >
        <MinusIcon />
      </button>
    </div>
  );
};

export default ProductQuantitySelector;

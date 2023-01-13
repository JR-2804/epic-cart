import type { Product } from "@prisma/client";
import { useAtom } from "jotai";
import { removeProductFromCartAtom } from "../utils/store";

const OrderCartProductListItem = ({
  product,
  price,
  quantity,
}: {
  product: Product;
  price: number;
  quantity: number;
}) => {
  const [, removeProductFromCart] = useAtom(removeProductFromCartAtom);

  return (
    <div className="grid grid-flow-col">
      <p>{product.name}</p>
      <p>{quantity}</p>
      <p>{price}</p>
      <button
        type="button"
        className="bg-slate-500"
        onClick={() => removeProductFromCart(product)}
      >
        Remove
      </button>
    </div>
  );
};

export default OrderCartProductListItem;

import type { Product } from "@prisma/client";
import { useAtom } from "jotai";
import { addProductToCartAtom } from "../utils/store";

const ProductListItem = ({ product }: { product: Product }) => {
  const [, addProductToCart] = useAtom(addProductToCartAtom);

  return (
    <div className="grid grid-flow-col justify-between bg-yellow-400">
      <p>{product.name}</p>
      <button type="button" onClick={() => addProductToCart(product)}>
        Add
      </button>
    </div>
  );
};

export default ProductListItem;

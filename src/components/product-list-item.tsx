import type { Product } from "@prisma/client";

const ProductListItem = ({ product }: { product: Product }) => (
  <div className="grid grid-flow-col justify-between bg-yellow-400">
    <p>{product.name}</p>
    <button type="button">Add</button>
  </div>
);

export default ProductListItem;

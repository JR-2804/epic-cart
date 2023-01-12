import type { Product } from "@prisma/client";

const OrderCartItem = ({
  product,
  price,
  quantity,
}: {
  product: Product;
  price: number;
  quantity: number;
}) => (
  <div className="grid grid-flow-col">
    <p>{product.name}</p>
    <p>{price}</p>
    <p>{quantity}</p>
  </div>
);

export default OrderCartItem;

import type { Product } from "@prisma/client";

const OrderCartProductListItem = ({
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

export default OrderCartProductListItem;

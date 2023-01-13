import { useAtom } from "jotai";
import { cartAtom } from "../utils/store";
import OrderCartProductListItem from "./order-cart-product-list-item";

const OrderCartProductList = () => {
  const [cart] = useAtom(cartAtom);

  return (
    <ul className="grid content-start gap-2 overflow-y-auto">
      {cart.items.map((item) => (
        <li key={item.product.id}>
          <OrderCartProductListItem
            product={item.product}
            price={item.price}
            quantity={item.quantity}
          />
        </li>
      ))}
    </ul>
  );
};

export default OrderCartProductList;

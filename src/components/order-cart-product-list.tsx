import OrderCartProductListItem from "./order-cart-product-list-item";

const OrderCartProductList = () => (
  <ul className="grid">
    <li>
      <OrderCartProductListItem
        product={{ id: "p1", name: "product1", price: 10 }}
        price={10}
        quantity={1}
      />
    </li>
  </ul>
);

export default OrderCartProductList;

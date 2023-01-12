import OrderCartProductList from "./order-cart-product-list";
import OrderCartSubmit from "./order-cart-submit";

const OrderCart = ({ account }: { account: string }) => (
  <div className="grid grid-rows-[auto_1fr_auto] bg-blue-500 p-4">
    <h1>New Order: {account}</h1>
    <OrderCartProductList />
    <OrderCartSubmit />
  </div>
);

export default OrderCart;

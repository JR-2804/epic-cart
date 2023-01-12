import OrderCartItem from "./order-cart-item";

const OrderCart = ({ account }: { account: string }) => (
  <div className="grid grid-rows-[auto_1fr_auto] bg-blue-500 p-4">
    <h1>New Order: {account}</h1>
    <div className="grid">
      <ul>
        <li>
          <OrderCartItem
            product={{ id: "p1", name: "product1", price: 10 }}
            price={10}
            quantity={1}
          />
        </li>
      </ul>
    </div>
    <div className="grid gap-2 justify-self-end">
      <div className="grid grid-cols-2">
        <p>Subtotal</p>
        <p className="text-right">$10</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Taxes</p>
        <p className="text-right">$5</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Total</p>
        <p className="text-right">$15</p>
      </div>
      <button type="button" className="bg-orange-400">
        Submit Order
      </button>
    </div>
  </div>
);

export default OrderCart;

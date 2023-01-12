const OrderCartSubmit = () => (
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
);

export default OrderCartSubmit;

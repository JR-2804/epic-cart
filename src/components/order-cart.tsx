import OrderCartProductList from "./order-cart-product-list";
import OrderCartSubmit from "./order-cart-submit";

const OrderCart = ({ account }: { account: string }) => (
  <div className="grid grid-rows-[1fr_auto] gap-4">
    <div className="grid max-h-[30rem] w-full grid-rows-[73px_1fr_auto] overflow-hidden rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800 md:max-h-full">
      <div className="relative grid place-content-center rounded-t-lg border-b border-gray-200 bg-gray-50 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <h1 className="text-center text-xl text-gray-900 dark:text-white">
          New order for {account}
        </h1>
      </div>
      <OrderCartProductList />
    </div>
    <div className="grid rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <OrderCartSubmit />
    </div>
  </div>
);

export default OrderCart;

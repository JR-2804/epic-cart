import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { cartAtom, clearCartAtom, selectedAccountAtom } from "../utils/store";
import CartIcon from "./icons/cart-icon";
import LoadingIcon from "./icons/loading-icon";

const OrderCartSubmit = () => {
  const router = useRouter();
  const [cart] = useAtom(cartAtom);
  const [selectedAccount] = useAtom(selectedAccountAtom);
  const [, clearCart] = useAtom(clearCartAtom);
  const submitOrderMutation = api.order.addProductToOrder.useMutation();

  const submitOrder = async () => {
    submitOrderMutation.mutate({
      account: selectedAccount,
      subtotal: cart.subtotal,
      taxes: cart.taxes,
      total: cart.total,
      items: cart.items,
    });
    await router.push("/order/success");
    clearCart();
  };

  return (
    <div className="grid gap-2 justify-self-end p-4 text-gray-900 dark:text-white">
      <div className="grid grid-cols-2">
        <p>Subtotal</p>
        <p className="text-right">${cart.subtotal.toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Taxes</p>
        <p className="text-right">${cart.taxes.toFixed(2)}</p>
      </div>
      <div className="grid grid-cols-2">
        <p>Total</p>
        <p className="text-right">${cart.total.toFixed(2)}</p>
      </div>
      <button
        type="button"
        className="grid h-10 w-44 grid-flow-col place-content-center items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:cursor-not-allowed dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        disabled={submitOrderMutation.isLoading || !cart.total}
        onClick={() => void submitOrder()}
      >
        {submitOrderMutation.isLoading ? (
          <LoadingIcon />
        ) : (
          <>
            <CartIcon />
            <span>Submit order</span>
          </>
        )}
      </button>
    </div>
  );
};

export default OrderCartSubmit;

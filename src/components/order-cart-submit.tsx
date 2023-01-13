import { useAtom } from "jotai";
import { useRouter } from "next/router";
import { api } from "../utils/api";
import { cartAtom, clearCartAtom, selectedAccountAtom } from "../utils/store";

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
    <div className="grid gap-2 justify-self-end">
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
        className="bg-orange-400"
        disabled={submitOrderMutation.isLoading}
        onClick={() => void submitOrder()}
      >
        {submitOrderMutation.isLoading ? "Loading" : "Submit Order"}
      </button>
    </div>
  );
};

export default OrderCartSubmit;

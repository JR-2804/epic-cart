import { useAtom } from "jotai";
import { cartAtom, removeProductFromCartAtom } from "../utils/store";
import ProductQuantitySelector from "./product-quantity-selector";

const OrderCartProductList = () => {
  const [cart] = useAtom(cartAtom);
  const [, removeProductFromCart] = useAtom(removeProductFromCartAtom);

  return (
    <div className="relative overflow-auto">
      <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
        <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Total
            </th>
            <th scope="col" className="px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((item) => (
            <tr
              key={item.product.id}
              className="border-b bg-white dark:border-gray-700 dark:bg-gray-800"
            >
              <td
                scope="row"
                className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
              >
                {item.product.name}
              </td>
              <td className="px-6 py-4">${item.product.price.toFixed(2)}</td>
              <td className="px-6 py-4">
                <ProductQuantitySelector item={item} />
              </td>
              <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                ${item.price.toFixed(2)}
              </td>
              <td className="px-6 py-4 text-right">
                <button
                  type="button"
                  className="font-medium text-red-600 hover:underline dark:text-red-500"
                  onClick={() => removeProductFromCart(item.product)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderCartProductList;

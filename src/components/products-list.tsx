import type { Product } from "@prisma/client";
import { useAtom } from "jotai";
import { useState } from "react";
import { addProductToCartAtom } from "../utils/store";
import SearchIcon from "./icons/search-icon";

const ProductsList = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");
  const [, addProductToCart] = useAtom(addProductToCartAtom);

  const matchesQuery = (product: Product) =>
    product.name.toLowerCase().includes(query.toLowerCase());

  const filteredProducts = products.filter(matchesQuery);

  return (
    <div className="grid w-full grid-rows-[auto_1fr] overflow-hidden rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
      <div className="relative rounded-t-lg border-b border-gray-200 bg-gray-50 p-4 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
        <div className="pointer-events-none absolute top-[1.6rem] left-4 pl-3">
          <SearchIcon />
        </div>
        <input
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="block h-10 w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Search products..."
        />
      </div>
      <div className="relative overflow-auto shadow-md">
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
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredProducts.length > 0 &&
              filteredProducts.map((product) => (
                <tr
                  key={product.id}
                  className="border-b bg-white hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                  >
                    {product.name}
                  </th>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      type="button"
                      className="font-medium text-blue-600 hover:underline dark:text-blue-500"
                      onClick={() => addProductToCart(product)}
                    >
                      Add
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductsList;

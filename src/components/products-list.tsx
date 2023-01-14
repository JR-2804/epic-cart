import type { Product } from "@prisma/client";
import { useState } from "react";
import SearchIcon from "./icons/search-icon";
import ProductListItem from "./product-list-item";

const ProductsList = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");

  const matchesQuery = (product: Product) =>
    product.name.toLowerCase().includes(query.toLowerCase());

  const filteredProducts = products.filter(matchesQuery);

  return (
    <div className="w-full rounded-lg border bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
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
      <div className="grid grid-rows-[auto_1fr] gap-4 p-4">
        {filteredProducts.length === 0 && <h6>No existen productos</h6>}
        {filteredProducts.length > 0 && (
          <div className="grid content-start gap-2 overflow-y-auto">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsList;

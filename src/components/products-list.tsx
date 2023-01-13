import type { Product } from "@prisma/client";
import { useState } from "react";
import ProductListItem from "./product-list-item";

const ProductsList = ({ products }: { products: Product[] }) => {
  const [query, setQuery] = useState("");

  const matchesQuery = (product: Product) =>
    product.name.toLowerCase().includes(query.toLowerCase());

  const filteredProducts = products.filter(matchesQuery);

  return (
    <div className="grid grid-rows-[auto_1fr] gap-4 bg-red-500 p-4">
      <input
        type="text"
        placeholder="Filter products"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      {filteredProducts.length === 0 && <h6>No existen productos</h6>}
      {filteredProducts.length > 0 && (
        <div className="grid content-start gap-2 overflow-y-auto">
          {filteredProducts.map((product) => (
            <ProductListItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

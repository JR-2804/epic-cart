import type { Product } from "@prisma/client";
import ProductListItem from "./product-list-item";

const ProductsList = ({ products }: { products: Product[] }) => (
  <div className="grid grid-rows-[auto_1fr] gap-4 bg-red-500 p-4">
    <input type="text" placeholder="Filter products" />
    {products.length === 0 && <h6>No existen productos</h6>}
    {products.length > 0 && (
      <div className="grid content-start gap-2 overflow-y-auto">
        {products.map((product) => (
          <ProductListItem key={product.id} product={product} />
        ))}
      </div>
    )}
  </div>
);

export default ProductsList;

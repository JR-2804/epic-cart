import type { Product } from "@prisma/client";
import { useAtom } from "jotai";
import type { GetStaticProps } from "next";
import { useRouter } from "next/router";
import MetadataHead from "../../components/head-metadata";
import OrderCart from "../../components/order-cart";
import ProductsList from "../../components/products-list";
import { prisma } from "../../server/db";
import { selectedAccountAtom } from "../../utils/store";

const CreateOrderPage = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const [selectedAccount] = useAtom(selectedAccountAtom);

  if (!selectedAccount) {
    void router.push("/");
  }

  return (
    <>
      <MetadataHead title="Create Order" />
      <div className="grid grid-cols-2 grid-rows-1 gap-6 py-8">
        <ProductsList products={products} />
        <OrderCart account={selectedAccount} />
      </div>
    </>
  );
};

export default CreateOrderPage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    products: await prisma.product.findMany(),
  },
});

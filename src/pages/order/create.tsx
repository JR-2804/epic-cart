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
      <div className="grid grid-rows-1 gap-4 py-4 px-4 md:grid-cols-2 md:gap-6 md:py-8">
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

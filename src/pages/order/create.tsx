import type { Product } from "@prisma/client";
import { useAtom } from "jotai";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import OrderCart from "../../components/order-cart";
import ProductsList from "../../components/products-list";
import useHasMounted from "../../hooks/use-has-mounted";
import { prisma } from "../../server/db";
import { selectedAccountAtom } from "../../utils/store";

const CreateOrderPage = ({ products }: { products: Product[] }) => {
  const hasMounted = useHasMounted();
  const router = useRouter();
  const [selectedAccount] = useAtom(selectedAccountAtom);

  if (!hasMounted) {
    return null;
  }

  if (!selectedAccount) {
    void router.push("/");
  }

  return (
    <>
      <Head>
        <title>Create Order</title>
        <meta name="description" content="Salesforce interview project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

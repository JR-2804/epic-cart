import type { Product } from "@prisma/client";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import OrderCart from "../../components/order-cart";
import ProductsList from "../../components/products-list";
import { prisma } from "../../server/db";

const CreateOrderPage = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const { account } = router.query;

  if (typeof account !== "string") {
    return "Invalid account";
  }

  return (
    <>
      <Head>
        <title>Create Order</title>
        <meta name="description" content="Salesforce interview project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid h-screen grid-cols-2 grid-rows-1 gap-6 py-8">
        <ProductsList products={products} />
        <OrderCart account={account} />
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

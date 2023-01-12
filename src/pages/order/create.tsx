import type { Product } from "@prisma/client";
import type { GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { prisma } from "../../server/db";

const CreateOrderPage = ({ products }: { products: Product[] }) => {
  const router = useRouter();
  const { account } = router.query;

  return (
    <>
      <Head>
        <title>Create Order</title>
        <meta name="description" content="Salesforce interview project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container grid h-screen grid-cols-2 gap-6 py-8">
        <div className="bg-red-500">
          <input type="text" placeholder="Filter products" />
          {products.length === 0 && <h6>No existen productos</h6>}
          {products.length > 0 &&
            products.map((product) => (
              <div key={product.id}>
                <p>{product.name}</p>
                <button type="button">Add</button>
              </div>
            ))}
        </div>
        <div className="bg-blue-500">
          <h1>New Order: {account}</h1>
        </div>
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

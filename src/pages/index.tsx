import type { GetStaticProps } from "next";
import { prisma } from "../server/db";
import { useAtom } from "jotai";
import { selectedAccountAtom } from "../utils/store";
import { useRouter } from "next/router";
import MetadataHead from "../components/head-metadata";
import AccountSelector from "../components/account-selector";

const HomePage = ({ accounts }: { accounts: string[] }) => {
  const router = useRouter();
  const [selectedAccount] = useAtom(selectedAccountAtom);

  const goToCreateOrder = () => {
    void router.push("/order/create");
  };

  return (
    <>
      <MetadataHead title="Epic Cart" />
      <main className="mt-8 grid content-start justify-center justify-items-center gap-4 md:mt-12">
        <AccountSelector accounts={accounts} />
        {selectedAccount && (
          <button
            type="button"
            className="mr-2 mb-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={goToCreateOrder}
          >
            Create Order
          </button>
        )}
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    accounts: (await prisma.account.findMany()).map(
      ({ name }: { name: string }) => name
    ),
  },
});

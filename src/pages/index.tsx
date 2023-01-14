import type { GetStaticProps } from "next";
import { prisma } from "../server/db";
import { useAtom } from "jotai";
import { selectedAccountAtom, clearCartAtom } from "../utils/store";
import { useRouter } from "next/router";
import MetadataHead from "../components/head-metadata";
import PrimaryButton from "../components/primary-button";
import AccountSelector from "../components/account-selector";

const HomePage = ({ accounts }: { accounts: string[] }) => {
  const router = useRouter();
  const [selectedAccount] = useAtom(selectedAccountAtom);
  const [, clearCart] = useAtom(clearCartAtom);

  const goToCreateOrder = () => {
    clearCart();
    void router.push("/order/create");
  };

  return (
    <>
      <MetadataHead title="Epic Cart" />
      <main className="mt-16 grid content-start justify-center justify-items-center gap-4">
        <AccountSelector accounts={accounts} />
        {selectedAccount && (
          <PrimaryButton text="Create Order" onClick={goToCreateOrder} />
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

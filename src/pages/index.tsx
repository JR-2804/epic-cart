import { useState } from "react";
import type { GetStaticProps } from "next";
import { Combobox } from "@headlessui/react";
import { prisma } from "../server/db";
import { useAtom } from "jotai";
import { selectedAccountAtom, clearCartAtom } from "../utils/store";
import { useRouter } from "next/router";
import MetadataHead from "../components/head-metadata";
import PrimaryButton from "../components/primary-button";

const HomePage = ({ accounts }: { accounts: string[] }) => {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useAtom(selectedAccountAtom);
  const [, clearCart] = useAtom(clearCartAtom);
  const [query, setQuery] = useState("");

  const goToCreateOrder = () => {
    clearCart();
    void router.push("/order/create");
  };

  const matchesQuery = (account: string) =>
    account.toLowerCase().includes(query.toLowerCase());

  return (
    <>
      <MetadataHead title="Epic Cart" />
      <main className="grid place-content-center gap-4">
        <p>Select account</p>
        <Combobox value={selectedAccount} onChange={setSelectedAccount}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre de la cuenta..."
            className="rounded-lg bg-red-300 p-2 placeholder:text-zinc-500"
          />
          <Combobox.Options className="bg-red-600">
            {accounts.filter(matchesQuery).map((account) => (
              <Combobox.Option key={account} value={account}>
                {account}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <PrimaryButton
          text="Create Order"
          disabled={!selectedAccount}
          onClick={goToCreateOrder}
        />
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

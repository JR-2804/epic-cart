import { useState } from "react";
import type { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import { Combobox } from "@headlessui/react";
import { prisma } from "../server/db";
import { useAtom } from "jotai";
import { selectedAccountAtom } from "../utils/store";
import { useRouter } from "next/router";
import useHasMounted from "../hooks/use-has-mounted";

const HomePage = ({ accounts }: { accounts: string[] }) => {
  const hasMounted = useHasMounted();

  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useAtom(selectedAccountAtom);
  const [query, setQuery] = useState("");

  const goToCreateOrder = () => void router.push("/order/create");

  const matchesQuery = (query: string) => (account: string) =>
    account.toLowerCase().includes(query.toLowerCase());

  const filteredAccounts = accounts.filter(matchesQuery(query));

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Salesforce Cart</title>
        <meta name="description" content="Salesforce interview project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid h-screen place-content-center gap-4">
        <p>Select account</p>
        <Combobox value={selectedAccount} onChange={setSelectedAccount}>
          <Combobox.Input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nombre de la cuenta..."
            className="rounded-lg bg-red-300 p-2 placeholder:text-zinc-500"
          />
          <Combobox.Options className="bg-red-600">
            {filteredAccounts.map((account) => (
              <Combobox.Option key={account} value={account}>
                {account}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <button
          type="button"
          className="cursor-pointer bg-slate-500 text-center hover:bg-slate-600 disabled:bg-slate-200"
          disabled={!selectedAccount}
          onClick={goToCreateOrder}
        >
          Create Order
        </button>
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

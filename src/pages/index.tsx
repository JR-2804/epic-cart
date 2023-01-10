import { type NextPage } from "next";
import Head from "next/head";
import { Combobox } from "@headlessui/react";
import { useState } from "react";
import type { GetStaticProps } from "next";
import { prisma } from "../server/db";
import Link from "next/link";

const HomePage: NextPage<{ accounts: string[] }> = ({ accounts }) => {
  const [selectedPerson, setSelectedPerson] = useState();
  const [query, setQuery] = useState("");

  const filteredAccounts =
    query === ""
      ? accounts
      : accounts.filter((person) => {
          return person.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <>
      <Head>
        <title>Salesforce cart</title>
        <meta name="description" content="Salesforce interview project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid">
        <p>Select account ({selectedPerson})</p>
        <Combobox value={selectedPerson} onChange={setSelectedPerson}>
          <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
          <Combobox.Options>
            {filteredAccounts.map((person) => (
              <Combobox.Option key={person} value={person}>
                {person}
              </Combobox.Option>
            ))}
          </Combobox.Options>
        </Combobox>
        <Link href="/order/create">Create Order</Link>
      </main>
    </>
  );
};

export default HomePage;

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    accounts: await prisma.account.findMany(),
  },
});

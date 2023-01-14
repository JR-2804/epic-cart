import { type ChangeEvent, useState } from "react";
import { useAtom } from "jotai";
import { selectedAccountAtom } from "../utils/store";
import SearchIcon from "./icons/search-icon";
import ValidIcon from "./icons/valid-icon";
import InvalidIcon from "./icons/invalid-icon";

const AccountSelector = ({ accounts }: { accounts: string[] }) => {
  const [selectedAccount, setSelectedAccount] = useAtom(selectedAccountAtom);
  const [query, setQuery] = useState(selectedAccount);

  const updateQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    setSelectedAccount("");
  };

  const selectAccount = (account: string) => () => {
    setSelectedAccount(account);
    setQuery(account);
  };

  const filteredAccounts = accounts.filter((account) =>
    account.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="relative grid w-64 md:w-96">
      <div className="pointer-events-none absolute top-4 left-0 pl-3">
        <SearchIcon />
      </div>
      <input
        type="search"
        value={query}
        onChange={updateQuery}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search accounts..."
      />
      {query && query === selectedAccount && <ValidIcon />}
      {query && query !== selectedAccount && (
        <ul className="mt-4 grid gap-2 rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
          {filteredAccounts.length === 0 && (
            <li className="grid grid-flow-col items-center justify-center">
              <InvalidIcon />
              <p className="text-center text-sm text-gray-900 dark:text-white">
                No matching accounts have been found
              </p>
            </li>
          )}
          {filteredAccounts.length > 0 &&
            filteredAccounts.map((account) => (
              <li key={account}>
                <button
                  type="button"
                  className="w-full rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  onClick={selectAccount(account)}
                >
                  <span>{account}</span>
                </button>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default AccountSelector;

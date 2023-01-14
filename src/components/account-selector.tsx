import { type ChangeEvent, useState } from "react";
import { useAtom } from "jotai";
import { selectedAccountAtom } from "../utils/store";

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
      <div className="pointer-events-none absolute top-4 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 text-gray-500 dark:text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="search"
        value={query}
        onChange={updateQuery}
        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-4 pl-10 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
        placeholder="Search accounts..."
      />
      {query && query === selectedAccount && (
        <svg
          className="absolute right-2.5 top-5 mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {query && query !== selectedAccount && (
        <ul className="mt-4 grid gap-2 rounded-lg border border-gray-300 bg-gray-50 p-4 text-sm text-gray-900 outline-none focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500">
          {filteredAccounts.length === 0 && (
            <li className="grid grid-flow-col items-center justify-center">
              <svg
                className="mr-1.5 h-4 w-4 flex-shrink-0 text-red-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
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
                  className="grid w-full grid-flow-col items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                  onClick={selectAccount(account)}
                >
                  {selectedAccount === account && (
                    <svg
                      className="mr-1.5 h-4 w-4 flex-shrink-0 text-green-500 dark:text-green-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
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

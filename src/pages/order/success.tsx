import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MetadataHead from "../../components/head-metadata";
import SuccessIcon from "../../components/icons/success-icon";
import { clearSelectedAccountAtom } from "../../utils/store";

const SuccessPage: NextPage = () => {
  const router = useRouter();
  const [, clearSelectedAccount] = useAtom(clearSelectedAccountAtom);

  const createOrder = () => void router.push("/order/create");

  const changeAccount = () => {
    clearSelectedAccount();
    void router.push("/");
  };

  return (
    <>
      <MetadataHead title="Success" />
      <div className="grid place-content-center pt-8 md:pt-12">
        <SuccessIcon />
        <p className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Order created successfully!
        </p>
        <div className="grid justify-center gap-4">
          <button
            type="button"
            className="w-52 rounded-lg bg-primary-600 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            onClick={createOrder}
          >
            Create another order
          </button>
          <button
            type="button"
            className="w-52 rounded-lg bg-primary-600 py-2 px-3 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
            onClick={changeAccount}
          >
            Change account
          </button>
        </div>
      </div>
    </>
  );
};

export default SuccessPage;

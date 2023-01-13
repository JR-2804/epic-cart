import { useAtom } from "jotai";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import MetadataHead from "../../components/head-metadata";
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
      <div className="grid place-content-center gap-4">
        <h1>Your order has been submitted successfully</h1>
        <button type="button" className="bg-slate-500" onClick={createOrder}>
          Create another order
        </button>
        <button type="button" className="bg-slate-500" onClick={changeAccount}>
          Change account
        </button>
      </div>
    </>
  );
};

export default SuccessPage;

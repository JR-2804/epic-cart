import type { ReactNode } from "react";
import useHasMounted from "../hooks/use-has-mounted";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";

const MainLayout = ({ children }: { children: ReactNode }) => {
  const hasMounted = useHasMounted();

  if (!hasMounted) {
    return null;
  }

  return (
    <div className="grid h-screen w-screen grid-cols-1 grid-rows-[auto_1fr_auto]">
      <MainHeader />
      <main className="container grid">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;

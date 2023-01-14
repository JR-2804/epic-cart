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
    <div className="grid h-full w-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-white dark:bg-gray-900 md:h-screen">
      <MainHeader />
      <main className="container md:overflow-hidden">{children}</main>
      <MainFooter />
    </div>
  );
};

export default MainLayout;

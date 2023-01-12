import type { ReactNode } from "react";
import MainFooter from "./main-footer";
import MainHeader from "./main-header";

const MainLayout = ({ children }: { children: ReactNode }) => (
  <div className="grid h-screen grid-rows-[auto_1fr_auto]">
    <MainHeader />
    <main className="container grid">{children}</main>
    <MainFooter />
  </div>
);

export default MainLayout;

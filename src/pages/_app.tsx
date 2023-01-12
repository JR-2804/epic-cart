import { type AppType } from "next/app";

import { api } from "../utils/api";

import "../styles/globals.css";
import MainLayout from "../components/main-layout";

const MyApp: AppType = ({ Component, pageProps }) => (
  <MainLayout>
    <Component {...pageProps} />
  </MainLayout>
);

export default api.withTRPC(MyApp);

import { type AppType } from "next/app";
import Script from "next/script";
import MainLayout from "../components/main-layout";
import { api } from "../utils/api";
import "../styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => (
  <MainLayout>
    <Component {...pageProps} />
    <Script
      id="dark-mode"
      dangerouslySetInnerHTML={{
        __html: `
          if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark')
          }
        `,
      }}
    />
  </MainLayout>
);

export default api.withTRPC(MyApp);

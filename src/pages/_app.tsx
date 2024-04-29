import { type AppType } from "next/app";
import { Inter } from "next/font/google";

import { api } from "~/utils/api";
import { Toaster } from "react-hot-toast";

import "~/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});
const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <main className={`font-sans ${inter.variable}`}>
      <Component {...pageProps} />
      <Toaster/>
    </main>
  );
};

export default api.withTRPC(MyApp);

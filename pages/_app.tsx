import type { AppProps } from "next/app";
import "@fontsource/poppins";
import "./../global.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;

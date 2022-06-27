import type { AppProps } from "next/app";
import Layout from "../components/layout/Layout";
import Navbar from "../components/layout/Navbar";
import "../styles/styles.scss";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

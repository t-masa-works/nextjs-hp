import Layout from "@/components/Layout";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout topImage={pageProps.topImage} topText={pageProps.topText}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

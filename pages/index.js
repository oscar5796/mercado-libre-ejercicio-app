import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout searchTerm="">
      <Head>
        <title>Home</title>
      </Head>
    </Layout>
  );
}

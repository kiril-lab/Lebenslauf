import Head from "next/head";
import Hauptcomponent from "../components/Hauptcomponent";
import Header from "../components/header";
import Layout from "../components/layout";
import SecondComponent from "../components/SecondComponent";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kiril Shterjov</title>
        <meta name="description" content="Lebenslauf" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Hauptcomponent/>
        <SecondComponent/>
      </Layout>
    </div>
  );
}

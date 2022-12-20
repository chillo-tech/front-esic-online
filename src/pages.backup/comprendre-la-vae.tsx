import Head from "next/head";
import MainLayout from "../components/main-layout";
import { understand_vae } from "../utils/data/pages-list";

export default function ComprendreLaVae() {
  return (
    <MainLayout>
      <Head>
        <title>{understand_vae.title} </title>
      </Head>
    </MainLayout>
  );
}

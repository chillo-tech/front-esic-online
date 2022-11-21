import Head from "next/head";
import MainLayout from "../components/main-layout";
import { vae } from "../utils/data/pages-list";

export default function VaePage() {
  return (
    <MainLayout>
      <Head>
        <title> {vae.title} </title>
      </Head>
    </MainLayout>
  );
}

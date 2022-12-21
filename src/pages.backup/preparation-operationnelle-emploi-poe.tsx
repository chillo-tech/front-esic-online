import Head from "next/head";
import MainLayout from "../components/main-layout";
import { poe } from "../utils/data/pages-list";

export default function Preparation() {
  return (
    <MainLayout>
      <Head>
        <title> {poe.title} </title>
      </Head>
    </MainLayout>
  );
}

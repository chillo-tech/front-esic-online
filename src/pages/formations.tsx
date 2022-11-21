import Head from "next/head";
import MainLayout from "../components/main-layout";
import { formations } from "../utils/data/pages-list";

export default function Formations() {
  return (
    <MainLayout>
      <Head>
        <title> {formations.title} </title>
      </Head>
    </MainLayout>
  );
}

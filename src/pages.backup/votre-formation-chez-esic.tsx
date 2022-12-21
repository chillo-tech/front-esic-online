import Head from "next/head";
import MainLayout from "../components/main-layout";
import { training_at_esic } from "../utils/data/pages-list";

export default function VotreFormation() {
  return (
    <MainLayout>
      <Head>
        <title> {training_at_esic.title} </title>
      </Head>
    </MainLayout>
  );
}

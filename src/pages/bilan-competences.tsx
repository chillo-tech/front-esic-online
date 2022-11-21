import Head from "next/head";
import MainLayout from "../components/main-layout";
import { competence_assement } from "../utils/data/pages-list";

export default function BilanCompetences() {
  return (
    <MainLayout>
      <Head>
        <title> {competence_assement.title} </title>
      </Head>
    </MainLayout>
  );
}

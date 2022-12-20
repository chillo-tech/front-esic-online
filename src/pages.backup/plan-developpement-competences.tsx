import Head from "next/head";
import MainLayout from "../components/main-layout";
import { competences_development_plan } from "../utils/data/pages-list";

export default function PlanDeveloppement() {
  return (
    <MainLayout>
      <Head>
        <title> {competences_development_plan.title} </title>
      </Head>
    </MainLayout>
  );
}

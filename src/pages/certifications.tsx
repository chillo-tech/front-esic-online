import Head from "next/head";
import MainLayout from "../components/main-layout";
import { certifications } from "../utils/data/pages-list";

export default function Certifications() {
  return (
    <MainLayout>
      <Head>
        <title> {certifications.title} </title>
      </Head>
    </MainLayout>
  );
}

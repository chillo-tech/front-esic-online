import Head from "next/head";
import MainLayout from "../components/main-layout";
import { quality } from "../utils/data/pages-list";

export default function Qaulity() {
  return (
    <MainLayout>
      <Head>
        <title> {quality.title} </title>
      </Head>
    </MainLayout>
  );
}

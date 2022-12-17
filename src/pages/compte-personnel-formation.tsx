import Head from "next/head";
import MainLayout from "../components/main-layout";
import { cpf } from "../utils/data/pages-list";

export default function CPF() {
  return (
    <MainLayout>
      <Head>
        <title> {cpf.title} </title>
      </Head>
    </MainLayout>
  );
}

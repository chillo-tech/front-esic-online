import Head from "next/head";
import MainLayout from "../components/main-layout";
import { mediator } from "../utils/data/pages-list";

export default function Mediateur() {
  return (
    <MainLayout>
      <Head>
        <title> {mediator.title} </title>
      </Head>
    </MainLayout>
  );
}

import Head from "next/head";
import MainLayout from "../components/main-layout";
import { about_us } from "../utils/data/pages-list";

export default function NousConnaitre() {
  return (
    <MainLayout>
      <Head>
        <title> {about_us.title} </title>
      </Head>
    </MainLayout>
  );
}

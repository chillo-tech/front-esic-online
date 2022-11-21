import Head from "next/head";
import MainLayout from "../components/main-layout";
import { book_course } from "../utils/data/pages-list";

export default function ReserverFormation() {
  return (
    <MainLayout>
      <Head>
        <title> {book_course.title} </title>
      </Head>
    </MainLayout>
  );
}

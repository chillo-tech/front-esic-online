import Head from "next/head";
import { useEffect } from "react";
import MainLayout from "../components/main-layout";
import { book_course } from "../utils/data/pages-list";

export default function ReserverFormation() {
  useEffect(() => {}, []);

  return (
    <MainLayout>
      <Head>
        <title> {book_course.title} </title>
      </Head>
      <section className="min-h-[800px]" id="hero"></section>
    </MainLayout>
  );
}

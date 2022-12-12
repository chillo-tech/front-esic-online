import Footer from "../components/footer";
import Header from "../components/header";
import Head from "next/head";
import React from "react";

function OpenedLayout({ children }: { children: any }) {
  return (
    <section className="w-full">
      <Head>
        <title>Informez nos contacts de vos évènements</title>
        <meta
          name="description"
          content="Informez nos contacts de vos évènements"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </section>
  );
}

export default OpenedLayout;

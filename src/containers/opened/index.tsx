import Footer from "containers/components/footer";
import Header from "containers/components/header";
import Head from "next/head";
import React from "react";

function OpenedLayout({ children }: { children: any }) {
  return (
    <section className="w-full relative">
      <Head>
        <title>Centre de formation esic</title>
        <meta
          name="description"
          content="Centre de formation esic"
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

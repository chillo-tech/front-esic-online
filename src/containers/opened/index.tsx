import Footer from "containers/components/footer";
import Header from "containers/components/header";
import React from "react";

function OpenedLayoutBack({ children }: { children: any }) {
  return (
    <section className="w-full relative">
      <Header />
      <main className="relative">{children}</main>
      <Footer />
    </section>
  );
}

export default OpenedLayoutBack;

export async function getServerSideProps(context: any) {
  return { props: {} };
}

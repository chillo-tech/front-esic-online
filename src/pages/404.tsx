import OpenedLayout from "../containers/opened";
import Link from "next/link";
import React from "react";
import Head from 'next/head';

function PageNotFound() {
  return (
    <OpenedLayout>
      <Head>
        <title>ESIC| La page que vous recherchez n&apos;existe pas</title>
        <meta name="titre" content="ESIC| La page que vous recherchez n'existe pas" />
        <meta name="description" content="ESIC| La page que vous recherchez n'existe pas" />
      </Head>
      <Head>
        <title>ESIC| La page que vous recherchez n&apos;existe pas</title>
        <meta name="titre" content="ESIC| La page que vous recherchez n'existe pas" />
        <meta name="description" content="ESIC| La page que vous recherchez n'existe pas" />
      </Head>
      <section className="w-full text-lg">
        <main className="container mx-auto flex flex-col justify-center py-40 px-2">
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-500 flex items-center justify-between w-full py-2 focus:ring-4 focus:ring-gray-200">
            Erreur : Page Non Trouvée
          </h1>
          <p className="pt-3">
            La page que vous recherchez n&apos;existe pas. Vous avez peut-être
            mal saisi l&apos;adresse ou la page a été déplacée.
          </p>
          <p className="pt-3">
            En cliquant sur ce lien vous pouvez
            <Link
              href="/"
              className="text-green-700 border-b border-b-green-700 ml-1"
            >
              retourner à la page d&apos;accueil.
            </Link>
          </p>
        </main>
      </section>
    </OpenedLayout>
  );
}

export default PageNotFound;

import OpenedLayout from "containers/opened";
import Link from "next/link";
import React from "react";

function PageNotFound() {
  return (
    <OpenedLayout>
      <section className="w-full text-xl">
        <main className="container mx-auto flex flex-col justify-center py-40">
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-500 flex items-center justify-between w-full py-2 focus:ring-4 focus:ring-gray-200">
            Erreur : Page Non Trouvée
          </h1>
          <p className="pt-3">
            La page que vous recherchez n&apos;existe pas. Vous avez peut-être
            mal saisi l&apos;adresse ou la page a été déplacée.
          </p>
          <p className="pt-3">
            En cliquant sur ce lien vous pouvez{" "}
            <Link
              href="/"
              className="text-green-700 border-b border-b-green-700"
            >
              retourner à la page d'accueil.
            </Link>
          </p>
        </main>
      </section>
    </OpenedLayout>
  );
}

export default PageNotFound;

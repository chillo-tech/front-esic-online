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
          <div className="pt-3">
            La page que vous recherches n&apos;existe pas. Vous avez peut-etre
            mal saisi l&apos;adresse ou la page a été deplacée
          </div>
          <div className="pt-3">
            En cliquant sur ce lien vous pouvez
            <Link
              href="/"
              className="text-secondary border-b border-b-secondary"
            >
              retourner à la page d&apos;accueil
            </Link>
          </div>
        </main>
      </section>
    </OpenedLayout>
  );
}

export default PageNotFound;

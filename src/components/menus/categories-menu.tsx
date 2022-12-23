import Link from "next/link";
import { slugify } from "utils/slugify";

export default function CategoriesMenu({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  return (
    <div
      className={`${className} flex absolute top-[3.7rem] left-0 bg-white shadow-xl w-full border-t-4 border-blue-800 z-50`}
    >
      <div className="w-full md:w-4/5 px-8">
        {item.menu_category.map((item: any) => (
          <div
            key={`cat${item.categories_id.id}`}
            className="border-b border-gray-300 grid grid-cols-4 gap-4"
          >
            <Link
              href={`/formations/${slugify(item.categories_id.libelle)}-${
                item.categories_id.id
              }`}
              className="uppercase font-bold text-lg pt-8 text-blue-800 flex flex-col justify-center"
            >
              {item.categories_id.libelle}
            </Link>
            <ul className="col-span-3 grid grid-cols-3 text-gray-900/90 px-6 py-4">
              {item.categories_id.souscategories?.map(
                (sous: any, index: number) => (
                  <li key={`sc${item.id}${index}`}>
                    <Link
                      href={`/formations/${slugify(
                        item.categories_id.libelle
                      )}-${item.categories_id.id}/${slugify(
                        sous.sousCategories_id.libelle
                      )}-${sous.sousCategories_id.id}`}
                      className="py-1 block text-sm"
                    >
                      {sous.sousCategories_id.libelle}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="hidden md:block w-1/5 pt-16 pr-16 bg-primary">
        <div className="bg-primary  text-white py-8 px-4">
          <ul>
            {item.sous_menus.map((item: any, index: number) => (
              <li key={`${item.libelle}${index}`}>
                <Link href={`/${slugify(item.libelle)}`}>
                  <span className="block  py-2 w-full text-base">{item.libelle}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={"/reverser-formation"}
            className="inline-block bg-white text-center text-primary px-4 py-2 font-semibold rounded-full mt-4"
          >
            S&apos;inscrire 
          </Link>
        </div>
      </div>
    </div>
  );
}

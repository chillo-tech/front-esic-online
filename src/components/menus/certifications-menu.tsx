import Image from "next/image";
import Link from "next/link";
import { slugify } from "utils/slugify";
export default function CertificationsMenu({
  item,
  className,
}: {
  item: any;
  className: string;
}) {
  return (
    <div
      className={`${className} flex absolute left-0 top-[3.7rem] bg-blue-900 shadow-xl w-full text-white`}
    >
      <ul className="grid grid-cols-3 w-full p-8 gap-8">
        {item.menu_certificationCategory.map((element: any, index: number) => (
          <li key={`certif${index}`}>
            <Link
              className="uppercase text-sm font-bold"
              href={`/certifications/${slugify(
                element.certificationCategories_id.libelle
              )}`}
            >
              {element.certificationCategories_id.libelle}
            </Link>
            <ul className="grid grid-cols-2 gap-4 mt-4">
              {element.certificationCategories_id.sous_categories.map(
                (sub: any, subIndex: number) => (
                  <li
                    key={`certif${index}${subIndex}`}
                    className="flex items-center space-x-2"
                  >
                    <span className="relative bg-gray-300 w-[50px] h-[50px]">
                      <Image
                        fill={true}
                        src="/images/icon-quality.png"
                        alt="Esic image"
                      />
                    </span>
                    <Link
                      href={`/certifications/${slugify(
                        element.certificationCategories_id.libelle
                      )}/${slugify(
                        sub.certificationSousCategories_id.libelle
                      )}-${subIndex}`}
                    >
                      <span className="text-sm font-medium block">
                        {sub.certificationSousCategories_id.libelle}
                      </span>
                      <span className="text-xs mt-1 block">
                        {sub.certificationSousCategories_id.souslibelle}
                      </span>
                    </Link>
                  </li>
                )
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

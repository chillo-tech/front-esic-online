import Link from "next/link";
import { slugify } from "utils/slugify";

export default function SimpleMenu({
  parent,
  items,
  className,
}: {
  parent: any,
  items: any[];
  className: string;
}){
  return (
    <ul
      className={`${className} absolute top-[3.7rem] left-0 bg-white md:text-lg w-[320px] shadow-xl`}
    >
      {items
        .sort((a: any, b: any) => a?.categories_id?.ordre - b?.categories_id?.ordre)
        .map((item: any, index) => (
        <li key={`menu_category_${index}`}>
          <Link href={`${slugify(parent.libelle)}/${slugify(item?.categories_id?.libelle)}-${item?.categories_id?.id}`}>
            <span className="block hover:bg-secondary/20 px-4 py-2 w-full">
              {item?.categories_id?.libelle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

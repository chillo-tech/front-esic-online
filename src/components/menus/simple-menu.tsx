import Link from "next/link";
import { slugify } from "utils/slugify";

export default function SimpleMenu({
  items,
  className,
  parent,
}: {
  items: any[];
  className: string;
  parent: string;
}) {
  return (
    <ul
      className={`${className} left-0 bg-white text-gray-900 md:text-lg w-[320px] shadow-xl`}
    >
      {items.map((item: any, index) => (
        <li key={`${item ? item.id : item.id}`}>
          <Link 
              href={{
                pathname: `/${parent}/${slugify(item.libelle)}-${item.id}`
              }}>
            <span className="block hover:bg-green-800/30 px-4 py-2 w-full">
              {item.libelle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

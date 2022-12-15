import Link from "next/link";
import { slugify } from "utils/slugify";

export default function SimpleMenu({
  parent,
  items,
  className,
}: {
  parent: any;
  items: any[];
  className: string;
}) {
  return (
    <ul
      className={`${className} absolute top-[3.7rem] left-0 bg-blue-900 text-white/90 md:text-lg w-[320px] shadow-xl`}
    >
      {items.map((item: any, index) => (
        <li key={`${item.libelle}${index}`}>
          <Link href="#">
            <span className="block hover:bg-secondary/20 px-4 py-2 w-full">
              {item.libelle}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

import Link from "next/link";

export default function SimpleMenu({
  items,
  className,
}: {
  items: any[];
  className: string;
}) {
  return (
    <ul
      className={`${className} absolute top-[3.7rem] left-0 bg-white md:text-lg w-[320px] shadow-xl`}
    >
      {items.map((item: any, index) => (
        <li key={`${item.label}${index}`}>
          <Link href={item?.link}>
            <span className="block hover:bg-secondary/20 px-4 py-2 w-full">
              {item.label}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

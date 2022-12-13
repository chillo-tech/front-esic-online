import Link from "next/link";
import { useQuery } from "react-query";
import { getAllSubcategories } from "services";

export default function CategoriesMenu({
  items,
  className,
}: {
  items: any[];
  className: string;
}) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryKey: ["subcategories"],
    queryFn: getAllSubcategories,
    refetchOnWindowFocus: false,
  });

  return (
    <div
      className={`${className} flex absolute top-[3.7rem] left-0 bg-white shadow-xl w-[1000px]`}
    >
      <div className="w-2/3 px-8 py-4">
        <ul className="grid grid-cols-2">
          {data?.data.data.map((item: any, index: number) => (
            <li key={`${item.libelle}${index}`}>
              <Link href="#">
                <span className="block hover:bg-secondary/20 px-4 py-2 w-full">
                  {item.libelle}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-1/3">
        <div className="bg-primary h-full text-white py-8 px-8">
          <ul>
            {items.map((item: any, index) => (
              <li key={`${item.label}${index}`}>
                <Link href={item?.link}>
                  <span className="block  py-2 w-full">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-white text-primary px-4 py-2 font-semibold rounded-full mt-4">
            S'inscrire à une formation
          </button>
        </div>
      </div>
    </div>
  );
}

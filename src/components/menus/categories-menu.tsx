import Link from "next/link";
import { useQuery } from "react-query";
import { getCategories } from "services";

export default function CategoriesMenu({
  items,
  className,
}: {
  parent: any;
  items: any[];
  className: string;
}) {
  const { data } = useQuery<any>({
    queryKey: ["categories"],
    queryFn: () =>
      getCategories({
        fields:
          "id,libelle,souscategories,souscategories.sousCategories_id.libelle",
      }),
    refetchOnWindowFocus: false,
  });

  return (
    <div
      className={`${className} flex absolute top-[3.7rem] left-0 bg-blue-900 shadow-xl w-full`}
    >
      <div className="w-full md:w-3/4 px-8">
        {data?.data.data.map((item: any) => (
          <div
            key={`cat${item.id}`}
            className="border-b border-white/20 grid grid-cols-3 gap-4"
          >
            <h4 className="uppercase font-bold text-lg pt-8 text-white">
              {item.libelle}
            </h4>
            <ul className="col-span-2 grid grid-cols-2 text-white/90 px-4 py-4">
              {item.souscategories?.map((sous: any, index: number) => (
                <li key={`sc${item.id}${index}`}>
                  {sous.sousCategories_id.libelle}
                </li>
              ))}
            </ul>
          </div>
          // <li key={`${item.libelle}${index}`}>
          //   <Link href="#">
          //     <span className="block hover:bg-secondary/20 px-4 py-2 w-full">
          //       {item.libelle}
          //     </span>
          //   </Link>
          // </li>
        ))}
      </div>
      <div className="hidden md:block w-1/4 pt-16 pr-16">
        <div className="bg-primary  text-white py-8 px-8">
          <ul>
            {items.map((item: any, index) => (
              <li key={`${item.label}${index}`}>
                <Link href="#">
                  <span className="block  py-2 w-full">{item.libelle}</span>
                </Link>
              </li>
            ))}
          </ul>
          <button className="bg-white text-primary px-4 py-2 font-semibold rounded-full mt-4">
            S&apos;inscrire à une formation
          </button>
        </div>
      </div>
    </div>
  );
}

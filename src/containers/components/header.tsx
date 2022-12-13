import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { header, slugify } from "utils";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown
} from "react-icons/ai";
import { useQuery } from "react-query";
import { getMenus } from "../../services";
import classNames from 'classnames';
export default function Header() {
  const  { isSuccess, isLoading, data: {data: menus} = {} }  = useQuery<any>({
    queryKey:  ["menus"],
    queryFn:  getMenus,
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000 //1jour
  });
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function displaySubmenuFull(item: any) {
    return item.label == "Formations";
  }

  return (
      <nav
        className="bg-white fixed w-full shadow-xl top-0 py-4 z-40 hidden md:block"
        id="navbar"
      >
        <div className="px-8 flex items-center justify-between md:text-lg relative">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={150}
              height={50}
              alt="Logo Esic"
            />
          </Link>
          {isLoading ?(
          <ul className="flex items-center space-x-2 text-gray-700 font-medium">
            {header.menu.map((item, ind) => (
              <li key={`menu${ind}`} className={`menu-item ${displaySubmenuFull(item) ? "" : "relative"}`}>
                <a href={item.link} className="block">
                  <button className="px-6 flex space-x-2 justify-center lg:text-lg items-center font-medium transition-colors hover:text-primary">
                    <span>{item.label}</span>
                    {item.submenu.length > 0 ? (
                      <>
                        <AiOutlineCaretDown
                          className={`w-4 h-4 menu-item-down`}
                        />
                        <AiOutlineCaretUp
                          className={`w-4 h-4 hidden menu-item-up`}
                        />
                      </>
                    ) : null}
                  </button>
                </a>
              </li>
            ))}
          </ul>
          ) : null }
           {isSuccess?
           (
              <ul className="flex items-center space-x-2 text-gray-700 font-medium">
                {menus.data.sort((a:any, b: any) => a.ordre - b.ordre).map((item: any) => (
                  <li key={`${item.id}`} className={classNames('menu-item', {'relative': item.libelle.toLowerCase() === 'certifications'})}>
                    <a href={`/${slugify(item.libelle)}`} className="block px-6 py-2 space-x-2 justify-center lg:text-lg items-center font-medium transition-colors hover:text-primary">
                        <span>{item.libelle}</span>
                    </a>
                  </li>
                ))}
              </ul>
           )
           : null
          }
          <div className="text-lg">
            <Link 
              className="inline-block px-8 py-1.5 text-white bg-secondary rounded-full  hover:bg-secondary/90 transition-colors" 
              href={header.contact.link}>
                {header.contact.label}
            </Link>
          </div>
        </div>
      </nav>
  );
}

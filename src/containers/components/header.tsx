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
        className="bg-white w-full shadow-xl top-0 py-4 z-40 hidden md:block"
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
                {item.submenu.length > 0 ? (
                  <div
                    className={`menu-item-sub hidden absolute left-0 top-6 pt-6 z-40 ${
                      displaySubmenuFull(item) ? "w-full " : "w-[300px]"
                    }`}
                  >
                    {item.label == "Formations" ? (
                      <ul className="bg-white w-full border-t-8 border-primary px-8 pb-8 flex flex-wrap">
                        {item.submenu.map((subItem) => (
                          <li
                            key={`leaf${subItem.label}`}
                            className="w-1/3 mt-4"
                          >
                            <div className="flex justify-start items-center space-x-2">
                              <div className="w-20 h-20  relative">
                                <Image
                                  src={subItem.image}
                                  fill={true}
                                  alt={subItem.label}
                                />
                              </div>
                              <div>
                                <a className="inline-block" href={subItem.link}>
                                  <button className="flex w-full items-center  2xl:text-lg transition-colors hover:text-primary">
                                    {subItem.label}
                                  </button>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <ul className="bg-white border-t-8 pb-4 shadow-xl border-primary px-4">
                        {item.submenu.map((subItem) => (
                          <li key={`leaf${subItem.label}`} className="mt-3">
                            <div className="flex justify-start items-center space-x-2">
                              <div>
                                <a className="inline-block" href={subItem.link}>
                                  <button className="flex w-full items-center transition-colors hover:text-primary">
                                    {subItem.label}
                                  </button>
                                </a>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : null}
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

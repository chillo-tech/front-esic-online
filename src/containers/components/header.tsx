import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { header, slugify } from "utils";
import { useQuery } from "react-query";
import { getMenus } from "services";
import classNames from "classnames";
import DisplayMenu from "components/menus/display-menu";
import { HiChevronDown, HiChevronUp, HiMenu, HiX } from "react-icons/hi";
import { useOnClickAway } from "utils/custom-hooks";
import { useRouter } from "next/router";
export default function Header() {
  const { data: { data: menus } = {} } = useQuery<any>({
    queryKey: ["menus"],
    queryFn: getMenus,
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  const [showMenu, setShowMenu] = useState<Record<number, boolean>>({});
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false);
  const menuLinks = useRef(null);
  useOnClickAway(menuLinks, () => {
    setShowMenu(() => ({}));
  });
  const router = useRouter();

  function toggleShowMenu(item: any): void {
    if (window.innerWidth > 768) {
      //md
      setShowMenu((values) => ({
        [item.id]: !values[item.id],
      }));
    } else {
      router.push(`/${slugify(item.libelle.replace('/', '-'))}`);
    }
  }

  return (
    <nav
      className="bg-white w-full shadow-xl top-0  relative z-40 "
      id="navbar"
    >
      <div className="px-2 md:px-8 flex flex-wrap md:flex-nowrap items-center justify-between md:text-lg relative">
        <div className="flex items-center justify-between w-full md:w-auto py-4">
          <Link href={"/"} className="">
            <Image
              src={"/images/logo.png"}
              width={150}
              height={50}
              alt="Logo Esic"
            />
          </Link>
          <button
            className="md:hidden  text-gray-700"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <HiMenu
              className={classNames("w-8 h-8 md:hidden", {
                hidden: showMobileMenu,
              })}
            />
            <HiX
              className={classNames("w-8 h-8", { hidden: !showMobileMenu })}
            />
          </button>
        </div>

        <div
          className={classNames(
            "w-full justify-center items-center h-screen  md:h-auto  md:pt-0",
            {
              "flex flex-col-reverse": showMobileMenu,
              "hidden md:block ": !showMobileMenu,
            }
          )}
        >
          <ul
            ref={menuLinks}
            className="md:flex justify-center  -mt-16 md:-mt-0 items-center w-full space-x-2 text-gray-700"
          >
            {menus?.data
              .sort((a: any, b: any) => a.ordre - b.ordre)
              .map((item: any, index: number) => (
                <li
                  key={`nav-${index}-${item.id}`}
                  onClick={() => toggleShowMenu(item)}
                  className={classNames("menu-item  cursor-pointer", {
                    relative: item.display == "simple_menu",
                  })}
                >
                  <div
                    //href={`/${slugify(item.libelle)}`}
                    className={classNames(
                      "inline-flex py-2 w-full  md:py-6 px-4 space-x-2 justify-center text-2xl  md:text-base 2xl:text-lg items-center",
                      {
                        "bg-secondary text-white": showMenu[item.id],
                      }
                    )}
                  >
                    
                    {(item.sous_menus.length == 0 && item.pages.length == 0) ? <Link href={`/${slugify(item.libelle)}-${item.id}`}>{item.libelle}</Link> : <span>{item.libelle}</span>}
                    <span className="hidden md:inline-block">
                      <HiChevronDown
                        className={classNames("w-5 h-5 ", {
                          hidden:
                            showMenu[item.id] || (item.sous_menus.length == 0 && item.pages.length == 0)
                        })}
                      />
                      <HiChevronUp
                        className={classNames("w-5 h-5  ", {
                          hidden:
                            !showMenu[item.id] || (item.sous_menus.length == 0 && item.pages.length == 0)
                        })}
                      />
                    </span>
                  </div>
                  <div className="font-light font-sans hidden md:block">
                    <DisplayMenu
                      className={classNames("absolute top-[4.5rem] ", {
                        hidden: !showMenu[item.id],
                      })}
                      item={item}
                    ></DisplayMenu>
                  </div>
                </li>
              ))}
            <li className="md:hidden  w-full text-center mt-8">
              <Link
                className="px-8 py-4 block w-full text-white bg-secondary rounded-full  hover:bg-secondary/90 transition-colors"
                href={header.contact.link}
              >
                {header.contact.label}
              </Link>
            </li>
          </ul>
        </div>

        <div className="text-lg">
          <Link
            className="hidden md:inline-block px-8 py-1.5 text-white bg-secondary rounded-full  hover:bg-secondary/90 transition-colors"
            href={header.contact.link}
          >
            {header.contact.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}

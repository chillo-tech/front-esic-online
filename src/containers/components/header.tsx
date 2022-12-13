import Image from "next/image";
import { useRef, useState } from "react";
import Link from "next/link";
import { header, slugify } from "utils";
import { useQuery } from "react-query";
import { getMenus } from "../../services";
import classNames from "classnames";
import DisplayMenu from "components/menus/display-menu";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { useOnClickAway } from "utils/custom-hooks";
export default function Header() {
  const { data: { data: menus } = {} } = useQuery<any>({
    queryKey: ["menus"],
    queryFn: getMenus,
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  const [showMenu, setShowMenu] = useState<Record<number, boolean>>({});
  const menuLinks = useRef(null);
  useOnClickAway(menuLinks, () => {
    setShowMenu(() => ({}));
  });

  function toggleShowMenu(id: number): void {
    setShowMenu((values) => ({
      [id]: !values[id],
    }));
  }

  return (
    <nav
      className="bg-white w-full shadow-xl top-0 py-4 relative z-40 hidden md:block"
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

        <ul
          ref={menuLinks}
          className="flex items-center space-x-2 text-gray-700 font-medium"
        >
          {menus?.data
            .sort((a: any, b: any) => a.ordre - b.ordre)
            .map((item: any) => (
              <li
                key={`${item.id}`}
                onClick={() => toggleShowMenu(item.id)}
                className={classNames("menu-item  relative cursor-pointer", {
                  relative: item.libelle.toLowerCase() === "certifications",
                })}
              >
                <div
                  //href={`/${slugify(item.libelle)}`}
                  className="flex px-6 py-2 space-x-2 justify-center lg:text-lg items-center font-medium transition-colors hover:text-primary"
                >
                  <span>{item.libelle}</span>
                  <HiChevronDown
                    className={classNames("w-5 h-5 text-gray-500", {
                      hidden: showMenu[item.id] || item.sous_menus.length == 0,
                    })}
                  />
                  <HiChevronUp
                    className={classNames("w-5 h-5  text-gray-500", {
                      hidden: !showMenu[item.id] || item.sous_menus.length == 0,
                    })}
                  />
                </div>
                <DisplayMenu
                  className={classNames("", {
                    hidden: !showMenu[item.id],
                  })}
                  items={item.sous_menus}
                  display={item.display}
                ></DisplayMenu>
              </li>
            ))}
        </ul>

        <div className="text-lg">
          <Link
            className="inline-block px-8 py-1.5 text-white bg-secondary rounded-full  hover:bg-secondary/90 transition-colors"
            href={header.contact.link}
          >
            {header.contact.label}
          </Link>
        </div>
      </div>
    </nav>
  );
}

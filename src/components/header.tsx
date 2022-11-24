import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { header } from "../utils/data";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineMenu,
  AiOutlineRight,
  AiOutlineClose,
} from "react-icons/ai";

export default function Header() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  function displaySubmenuFull(item: any) {
    return item.label == "Formations";
  }

  return (
    <>
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

          <ul className="flex items-center space-x-2 text-gray-700 font-medium">
            {header.menu.map((item, ind) => (
              <li
                key={`menu${ind}`}
                className={`menu-item ${
                  displaySubmenuFull(item) ? "" : "relative"
                }`}
              >
                <Link href={item.link}>
                  <button className="px-6 flex space-x-2 justify-center xl:text-lg items-center font-medium transition-colors hover:text-primary">
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
                </Link>
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
                                <Link href={subItem.link}>
                                  <button className="flex w-full items-center uppercase text-lg transition-colors hover:text-primary">
                                    {subItem.label}
                                  </button>
                                </Link>
                                <p className="text-sm text-gray-700">
                                  {subItem.subtitle}
                                </p>
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
                                <Link href={subItem.link}>
                                  <button className="flex w-full items-center transition-colors hover:text-primary">
                                    {subItem.label}
                                  </button>
                                </Link>
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

          <div className="text-lg">
            <Link href={header.contact.link}>
              <button className="px-8 py-1.5 inline-block  text-white bg-secondary rounded-full  hover:bg-secondary/90 transition-colors">
                {header.contact.label}
              </button>
            </Link>
          </div>
        </div>
      </nav>

      <nav className="bg-white md:hidden border-b p-4 text-gray-700">
        <div className="flex justify-between">
          <Link href={"/"}>
            <Image
              src={"/images/logo.png"}
              width={150}
              height={50}
              alt="Logo Esic"
            />
          </Link>
          <button onClick={() => setShowMobileMenu(true)}>
            <AiOutlineMenu className="w-6 h-6" />
          </button>
        </div>

        <div
          className={`${
            showMobileMenu ? "" : "hidden"
          } transition-display fixed h-screen w-full bg-white border-b top-0 left-0 z-50 p-6 `}
        >
          <div className="flex justify-between">
            <Link href={"/"}>
              <Image
                src={"/images/logo.png"}
                width={200}
                height={150}
                alt="Logo Esic"
              />
            </Link>
            <button onClick={() => setShowMobileMenu(false)}>
              <AiOutlineClose className="w-6 h-6" />
            </button>
          </div>
          <ul className="space-y-4 mt-8">
            {header.menu.map((item, ind) => (
              <li key={`menu${ind}`}>
                <Link href={item.link}>
                  <button className="px-6 flex space-x-2 justify-center items-center font-medium transition-colors hover:text-primary">
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
                </Link>
              </li>
            ))}
          </ul>
          <div className="text-lg mt-8 space-y-2">
            <a
              href={header.contact.link}
              className="px-4 py-1.5 block text-center  text-white bg-secondary rounded-md hover:bg-orange/50 transition-colors"
            >
              {header.contact.label}
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

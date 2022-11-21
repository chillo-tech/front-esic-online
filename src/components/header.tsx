import Image from "next/image";
import { useEffect, useRef, useState } from "react";
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

  useEffect(() => {
    window.onscroll = function () {
      let navbar = document.getElementById("navbar");
      if (navbar != null) {
        if (window.scrollY > navbar.offsetHeight) {
          navbar.classList.add("fixed");
          navbar.classList.add("w-full");
        } else {
          navbar.classList.remove("fixed");
        }
      }
    };
  }, []);

  return (
    <>
      <nav className="py-4 bg-white z-50 hidden md:block" id="navbar">
        <div className="max-w-7xl mx-auto flex items-center justify-between md:text-lg">
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
              <li key={`menu${ind}`} className="relative menu-item">
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

                {item.submenu.length > 0 ? (
                  <div className="menu-item-sub hidden absolute left-0 top-6 pt-6 sm:w-[330px] z-40 shadow-xl">
                    <ul className="bg-white border-t-8 border-primary px-2 py-4 rounded-">
                      {item.submenu.map((subItem) => (
                        <li
                          key={`leaf${subItem.label}`}
                          className="menu-item-sub-item px-4"
                        >
                          <Link href={subItem.link} className="">
                            <button className="flex w-full items-center py-2  transition-colors hover:text-primary ">
                              <AiOutlineRight className="w-3 h-3 text-primary mr-2" />
                              <span>{subItem.label} </span>
                            </button>
                          </Link>

                          {subItem.submenu.length > 0 ? (
                            <div className="menu-item-sub-item-sub hidden absolute h-full pt-6 top-0 left-[300px] w-[600px]">
                              <ul className="h-full border-t-8 border-primary  overflow-auto bg-white px-4 py-5 border-l  ml-4">
                                {subItem.submenu.map((leaf) => (
                                  <li key={`leaf${leaf.label}`}>
                                    <Link href={leaf.link} className="">
                                      <button className="inline-flex space-x-2 items-center py-2 transition-colors hover:text-primary ">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                                        <span>{leaf.label} </span>
                                      </button>
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ) : null}
                        </li>
                      ))}
                    </ul>
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

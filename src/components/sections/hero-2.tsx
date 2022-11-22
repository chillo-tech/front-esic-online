import formations from "../../utils/data/formations-list";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { hero } from "../../utils/data";
import { header } from "../../utils/data";
import { stats } from "../../utils/data";

import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineRight,
} from "react-icons/ai";

export default function Hero2() {
  const [result, setResult] = useState<any>([]);
  const [showResult, setShowResult] = useState(false);
  const all_formations = formations.map((item) => item.courses).flat();

  function handleInput(e: any) {
    if (e.target.value) {
      setShowResult(e.target.value == "" ? false : true);
    }
    setResult((items: any) =>
      all_formations.filter((item: any) => item.name.includes(e.target.value))
    );
  }

  const first_part = hero.title[0];
  const second_part = hero.title[1];

  return (
    <>
      <nav
        className="fixed bg-transparent  w-full top-0 py-4 z-50 hidden md:block"
        id="navbar"
      >
        <div className="px-8 md:px-12 flex items-center justify-between md:text-lg">
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
      <section className="flex items-center relative md:min-h-[600px]  2xl:min-h-[850px] overflow-hidden">
        <aside className="w-full sm:max-w-xl 2xl:max-w-2xl mx-auto flex">
          <article>
            <div className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left">
              <h1 className="text-primary inline">{first_part}</h1>
              <h1 className="ml-4 inline">{second_part}</h1>
            </div>
            <h3 className="text-xl sm:text-xl text-gray-700 mt-8 text-center sm:text-left">
              {hero.subtitle}
            </h3>

            <div className="sm:absolute mt-8 py-2 w-full z-40 sm:w-[650px]">
              <div className="flex flex-wrap sm:flex-nowrap space-x-2 sm:border-2 border-secondary px-3 md:px-0 sm:rounded-full relative">
                <input
                  id="search-input"
                  onChange={handleInput}
                  className="w-full px-2 sm:px-6 py-4 sm:py-2.5 sm:rounded-full border-2  outline-secondary focus:border-secondary sm:border-transparent text-base sm:text-xl"
                  placeholder={hero.form.input.placeholder}
                ></input>
                <button className="mt-4 sm:mt-0 sm:absolute w-full md:w-[25%] -right-1 top-0 px-6 sm:px-8 py-3 sm:text-lg bg-secondary hover:bg-secondary/90 transitions-colors text-white sm:rounded-full border-secondary border-1.5 placeholder-gray-900">
                  {hero.form.submit.label}
                </button>
              </div>

              <div
                className={`${
                  result.length > 0 ? "" : "hidden"
                } absolute w-full top-[4rem] rounded-2xl shadow-2xl bg-white overflow-auto h-[400px]`}
              >
                <ul>
                  {result.map((item: any, index: number) => (
                    <li key={`result${index}`}>
                      <Link href={item.link}>
                        <button
                          className={`hover:bg-primary/20 w-full inline-flex justify-between items-center py-3 px-6 transition-colors`}
                        >
                          <span>{item.name} </span>
                          <span className="underline text-secondary">
                            {hero.form.result.cta.label}
                          </span>
                        </button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </aside>
        <aside className="w-full md:w-1/2 px-8 h-[600px] relative"></aside>
        <img
          src={"/images/students-2.jpg"}
          className="absolute -right-12 z-30 rounded-full rounded-r-none md:h-[700px] 2xl:h-[850px]"
          // /fill={true}
          alt="Students"
        />
      </section>
      <section className="">
        <div className="max-w-5xl relative z-40 mx-auto rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4 -mt-8">
          {stats.items.map((item, ind) => (
            <article
              key={`stat${ind}`}
              className="px-6 py-12 text-center sm:border-0 sm:border-l"
            >
              <div className="text-6xl font-extrabold text-secondary">
                {item.value}
              </div>
              <div className="mt-2 text-lg leading-6 font-medium text-gray-500">
                {item.label}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

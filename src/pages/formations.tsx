import Head from "next/head";
import MainLayout from "../components/main-layout";
import { formations as formations_page } from "../utils/data/pages-list";
import formations_list from "../utils/data/formations-list";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { BsImageAlt } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { useOnAway } from "../utils/custom-hooks";
import { FormationCTA } from "../components/sections/formtion-cta";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Mediateur() {
  const [selected, setSelected] = useState<any>(null);
  const [formations, setFormations] = useState<any>(formations_list);
  const [result, setResult] = useState<any>([]);
  const [showChooseCategorie, setShowChooseCategorie] =
    useState<boolean>(false);

  const categoryFilter = useRef(null);
  useOnAway(categoryFilter, () => {
    setShowChooseCategorie(false);
  });

  function get_all_courses() {
    return formations.map((item: any) => item.courses).flat();
  }

  function get_formation_courses(slug: string) {
    const formation = formations.find((item: any) => item.slug == slug);
    if (formation == undefined) {
      return [];
    } else {
      return formation.courses;
    }
  }

  function handleInput(e: any) {
    setResult((items: any) =>
      get_all_courses().filter((item: any) =>
        item.name.includes(e.target.value)
      )
    );
  }

  function chooseCategorie(item: any) {}

  useEffect(() => {
    setResult(() => get_all_courses());
  }, []);

  return (
    <MainLayout>
      <Head>
        <title> {formations.title} </title>
      </Head>

      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: "url(images/esic-image-5.jpg)" }}
      >
        <div className="bg-black/30 bg-gradient-to-r from-secondary w-full h-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl py-20 pt-40 text-white">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left ">
                {formations_page.hero.title}
              </h1>
              <h3 className="text-xl sm:text-xl  mt-8 text-center sm:text-left">
                {formations_page.hero.subtitle}
              </h3>
              <Link href={formations_page.cta.link}>
                <button className="px-8 py-3 text-secondary bg-white mt-8 text-lg font-semibold rounded-full">
                  {formations_page.cta.label}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-wrap max-w-7xl mx-auto py-12 sm:py-16 ">
        <aside className="">
          <div className="mb-16">
            <h2 className="text-xl font-semibold sm:text-2xl">
              Get start with one domain
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              {formations.map((item: any) => (
                <div
                  key={item.slug}
                  className="w-full border-2 text-center  hover:bg-secondary/20 cursor-pointer transition-colors p-4"
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {formations.map((item: any) => (
            <article key={item.name} className="w-full mb-16">
              <div className="flex justify-between items-center">
                <div className="w-full md:w-3/4">
                  <h2 className="text-xl font-semibold sm:text-2xl">
                    {item.name}
                  </h2>
                  <p className="mt-2">{item.subtitle}</p>
                </div>
                <div className="w-full md:w-1/4 justify-end flex">
                  <button className="text-secondary font-semibold rounded-full border-2 border-secondary hover:bg-secondary hover:text-white px-4 py-2">
                    Discover more
                  </button>
                </div>
              </div>
              <div className="mt-8 relative">
                {/* <div className="absolute top-[50%] w-full flex justify-between text-center text-gray-100">
                  <button className="p-2 rounded-full bg-secondary text-white">
                    <HiChevronLeft className="w-8 h-8" />
                  </button>
                  <button className="p-2 rounded-full bg-secondary text-white">
                    <HiChevronRight className="w-8 h-8" />
                  </button>
                </div> */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                  {get_formation_courses(item.slug)
                    .filter((item: any, index: any) => index < 4)
                    .map((course: any) => (
                      <div key={course.slug}>
                        <div className="w-full h-44 bg-gray-400 flex items-center justify-center">
                          <BsImageAlt className="text-gray-300 w-24 h-24" />
                        </div>
                        <div className="p-3 border h-40 relative">
                          <h3 className="font-semibold">{course.name}</h3>
                          <h6 className="mt-1 text-sm text-gray-700">
                            {["string", "number"].includes(typeof course.hours)
                              ? `${course.hours} Heures`
                              : `${course.hours[0]} - ${course.hours[1]}Heures`}
                          </h6>
                          <div className="left-0 bottom-4 absolute w-full px-4">
                            <Link href={course.link}>
                              <button className="bg-secondary text-white p-2 text-sm w-full">
                                {formations_page.search.details.cta.label}
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </article>
          ))}
        </aside>
      </section>

      <FormationCTA />
    </MainLayout>
  );
}

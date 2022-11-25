import Head from "next/head";
import MainLayout from "../../components/main-layout";
import { formations as formations_page } from "../../utils/data/pages-list";
import formations_list from "../../utils/data/formations-list";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { BsImageAlt } from "react-icons/bs";
import { AiFillCaretDown, AiOutlineSearch } from "react-icons/ai";
import { useOnAway } from "../../utils/custom-hooks";

export default function Mediateur() {
  const [selected, setSelected] = useState<any>(null);
  const [formations, setFormations] = useState<any>(formations_list);
  const [result, setResult] = useState<any>([]);
  const [showChooseCategorie, setShowChooseCategorie] = useState<any>(false);

  const categoryFilter = useRef(null);
  useOnAway(categoryFilter, () => {
    setShowChooseCategorie(false);
  });

  function get_all_courses() {
    return formations.map((item: any) => item.courses).flat();
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

      <section className="flex flex-wrap max-w-7xl mx-auto py-12 sm:py-20">
        <aside className="">
          <div className="py-4 flex flex-wrap pb-8 border-b" id="filters">
            <div className="w-full md:w-1/4 flex items-center justify-between relative">
              <div
                className="border rounded-md flex w-full px-4 py-2 items-center justify-between"
                onClick={() => setShowChooseCategorie(true)}
                ref={categoryFilter}
              >
                <span>{formations_page.all_courses.label}</span>
                <span>
                  <AiFillCaretDown className="text-secondary" />
                </span>
              </div>
              <ul
                className={`${
                  showChooseCategorie ? "" : "hidden"
                } absolute z-30 top-12 left-0 bg-white shadow-xl w-full`}
              >
                {formations.map((item: any) => (
                  <li
                    key={item.name}
                    className="w-full hover:bg-secondary/20 cursor-pointer transition-colors px-4 py-1"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>

            <div className="w-full md:w-2/4 px-8">
              <div className="flex flex-wrap sm:flex-nowrap space-x-2 px-3 md:px-0 sm:rounded-full relative">
                <input
                  id="search-input"
                  className="w-full px-2 sm:px-4 py-2 sm:rounded-full border  outline-secondary focus:border-secondary"
                  placeholder="Search your course, e.g Data Science"
                ></input>
                <button className="absolute p-3 flex items-center right-0.5 top-0 sm:text-lg bg-secondary hover:bg-secondary/90 transitions-colors text-white rounded-full">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/4 flex items-center justify-center space-x-8">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="certification"
                  value=""
                  className="input-checkbox"
                />
                <label htmlFor="certification">Certifiante</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="cpf"
                  value=""
                  className="input-checkbox"
                />
                <label htmlFor="cpf">En CPF</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            {result.map((course: any) => (
              <article>
                <div className="w-full h-44 bg-gray-400 flex items-center justify-center">
                  <BsImageAlt className="text-gray-300 w-24 h-24" />
                </div>
                <div className="p-3 bg-secondary/10 h-40 relative">
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
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="py-16 bg-secondary text-white max-w-7xl mx-auto rounded-2xl">
        <header className="max-w-3xl mx-auto">
          <h2 className="text-white text-center"> Start you path right now </h2>
          <p className="text-center text-white">
            Empower your tech teams to produce key business outcomes by making
            upskilling and reskilling as easy as powering up their laptop. Tap
            into the power of curated learning paths to guide teams through the
            exact skills they need to progress from novice to guru across a
            variety of tech skills.
          </p>
          <p className="text-center">
            <Link href={formations_page.cta.link}>
              <button className="px-8 py-3 text-secondary bg-white mt-8 text-lg font-semibold rounded-full">
                {formations_page.cta.label}
              </button>
            </Link>
          </p>
        </header>
      </section>
    </MainLayout>
  );
}

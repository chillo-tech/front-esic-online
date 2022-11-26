import Head from "next/head";
import MainLayout from "../../components/main-layout";
import { formations as formations_page } from "../../utils/data/pages-list";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { BsImageAlt } from "react-icons/bs";
import { AiOutlineSearch } from "react-icons/ai";
import { FormationCTA } from "../../components/sections/formation-cta";
import formations_list from "../../utils/data/formations-list.json";
import Formation from "../../utils/models/Formation";
import Course from "../../utils/models/Course";

export default function Mediateur() {
  const router = useRouter();
  const [formation, setFormation] = useState<Partial<Formation>>({});
  const [courses, setCourses] = useState<Course[]>([]);
  const [result, setResult] = useState<Course[]>([]);

  function handleInput(e: any) {
    setResult((items: any) =>
      courses.filter((item: any) => item.name.includes(e.target.value))
    );
  }

  useEffect(() => {
    const temp = formations_list.find(
      (item) => item.slug == router.query.formation_slug
    );
    if (temp != undefined) {
      setFormation(() => temp);
      setCourses(() => temp.courses);
      setResult(() => temp.courses);
    }
  }, [router]);

  return (
    <MainLayout>
      <Head>
        <title> {formation.name} </title>
      </Head>

      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${formation.image})` }}
      >
        <div className="bg-black/30 bg-gradient-to-r from-secondary w-full h-full">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl py-20 pt-40 text-white">
              <h1 className="text-4xl sm:text-6xl font-extrabold text-center sm:text-left ">
                {formation.name}
              </h1>
              <h3 className="text-xl sm:text-xl  mt-8 text-center sm:text-left">
                {formation.short_description}
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

      <section className=" max-w-7xl mx-auto py-8 sm:pb-20">
        <aside className="w-full ">
          <div className="py-4 flex flex-wrap pb-8 border-b" id="filters">
            {/**/}

            <div className="w-full md:w-2/4">
              <div className="flex flex-wrap sm:flex-nowrap space-x-2 px-3 md:px-0 sm:rounded-full relative">
                <input
                  id="search-input"
                  className="w-full px-2 sm:px-4 py-2 sm:rounded-full border  outline-secondary focus:border-secondary"
                  placeholder="Search your course"
                ></input>
                <button className="absolute p-3 flex items-center right-0.5 top-0 sm:text-lg bg-secondary hover:bg-secondary/90 transitions-colors text-white rounded-full">
                  <AiOutlineSearch />
                </button>
              </div>
            </div>

            <div className="w-full md:w-1/4 flex items-center justify-center space-x-8 text-gray-700">
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="certification"
                  value=""
                  className="input-checkbox"
                />
                <label htmlFor="certification">With certification</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="cpf"
                  value=""
                  className="input-checkbox"
                />
                <label htmlFor="cpf">CPF</label>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            {result.map((course: any) => (
              <article key={`${course.slug}`} className="flex flex-wrap">
                <div className="w-full md:w-[30%] h-[13rem] bg-gray-400 flex items-center justify-center">
                  <BsImageAlt className="text-gray-300 w-24 h-24" />
                </div>
                <div className="w-full md:w-[70%] h-[13rem] p-3 bg-secondary/10 h-46 relative">
                  <h3 className="font-semibold">{course.name}</h3>
                  <h6 className="mt-2  text-gray-800 font-medium">
                    {["string", "number"].includes(typeof course.hours)
                      ? `${course.hours} Heures`
                      : `${course.hours[0]} - ${course.hours[1]}Heures`}
                  </h6>
                  <h4 className="mt-2 text-gray-800">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eos accusantium obcaecati natus aut.
                  </h4>

                  <div className="left-0 bottom-4 absolute w-full px-4 mt-1">
                    <Link href={course.link}>
                      <button className="bg-secondary text-white py-2 px-4 rounded-lg">
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

      <FormationCTA />
    </MainLayout>
  );
}

import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/main-layout";
import { course_page } from "../../utils/data/pages-list";
import formations_list from "../../utils/data/formations-list.json";
import {
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineCheck,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiCheck,
  HiOutlineMap,
} from "react-icons/hi";

export default function Formations() {
  const [course, setCourse] = useState<any>({});
  const router = useRouter();
  const [activeChapter, setActiveChapter] = useState(-1);

  function activateChapter(index: number): void {
    let chapterPanel = document.getElementById(
      "chapter" + index
    ) as HTMLElement;
    if (chapterPanel != null) {
      chapterPanel.classList.remove("hidden");
      const btnDown = document.getElementById(
        `btn-down${index}`
      ) as HTMLElement;
      const btnUp = document.getElementById(`btn-up${index}`) as HTMLElement;
      console.log(chapterPanel.style.maxHeight);
      if (!["", "0px", ")"].includes(chapterPanel.style.maxHeight)) {
        chapterPanel.style.maxHeight = "0px";
        btnDown.style.display = "inline";
        btnUp.style.display = "none";
      } else {
        chapterPanel.style.maxHeight = chapterPanel.scrollHeight + "px";
        btnDown.style.display = "none";
        btnUp.style.display = "inline";
      }
    }
  }

  function get_all_courses(): any[] {
    return formations_list.map((item) => item.courses).flat();
  }

  function formatDuration(duration: number): string {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours == 0) {
      return `${minutes} Min`;
    } else {
      return `${hours} H ${minutes} Min`;
    }
  }

  useEffect(() => {
    const currentCourse = get_all_courses().find(
      (e) => e.slug == router.query.course_slug
    );
    if (currentCourse == undefined) {
      const item: any = {};
      setCourse(() => item);
    } else {
      setCourse(currentCourse);
    }

    window.onscroll = function () {
      let panel = document.getElementById("formation-panel") as HTMLElement;
      let header = document.getElementById("navbar") as HTMLElement;
      let courseCtaElement = document.getElementById(
        "course-cta"
      ) as HTMLElement;

      if (panel != null && header != null && courseCtaElement != null) {
        if (window.scrollY > panel.offsetTop) {
          panel.style.top = header.offsetHeight + "px";
        } else {
          panel.style.top = "200px";
        }

        if (window.scrollY > courseCtaElement.offsetTop) {
          panel.classList.add("hidden");
        } else {
          panel.classList.remove("hidden");
        }
      }
    };
  }, [router, activeChapter]);

  return (
    <MainLayout>
      <Head>Esic - {course.name}</Head>

      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="bg-gradient-to-r from-sky-900 bg-black/50 w-full h-full">
          <div className="max-w-7xl mx-auto px-3 flex relative">
            <div className="max-w-3xl py-16 pt-40 text-white">
              <ul className="flex items-center uppercase text-blue-100">
                <li>{course.formation?.name}</li>
              </ul>
              <h1 className="text-4xl mt-2 sm:text-6xl font-extrabold text-center sm:text-left ">
                {course.name}
              </h1>
              <h3 className="text-xl sm:text-xl  mt-4 text-center sm:text-left">
                {course.short_description}
              </h3>
            </div>
            <div
              id="formation-panel"
              className="w-[400px] rounded-md shadow-2xl fixed top-[200px] z-50 sm:left-[62%] 2xl:left-[60%] p-8 bg-white"
            >
              <ul className="mt-4 space-y-4">
                <li className="flex space-x-3 items-center text-lg font-medium">
                  <AiOutlineClockCircle className="w-6 h-6 text-gray-500" />
                  <span>{course.hours} Hours</span>
                </li>
                <li className="flex space-x-3 items-center text-lg font-medium">
                  <HiOutlineMap className="w-6 h-6 text-gray-500" />
                  <span>Online, In Office, Mixe</span>
                </li>
                <li className="flex space-x-3 items-center text-lg font-medium">
                  <HiAcademicCap className="w-6 h-6 text-gray-500" />
                  <span>Certification</span>
                </li>
                <li className="flex space-x-3 items-center text-lg font-medium">
                  <HiBadgeCheck className="w-6 h-6 text-gray-500" />
                  <span>CPF Eligible</span>
                </li>
                <li className="flex space-x-3 items-center text-lg font-medium">
                  <HiCheck className="w-6 h-6 text-gray-500" />
                  <span>Available</span>
                </li>
              </ul>
              <div className="border-t my-4"></div>
              <div className="sm:text-4xl font-bold text-center">
                1000&euro; HT
              </div>
              <Link
                href={course_page.cta.button.link}
                className="px-8 py-3 w-full text-white bg-secondary mt-8 text-lg font-semibold rounded-full"
              >
                {course_page.cta.button.label}
              </Link>
              <Link
                href={course_page.cta.button.link}
                className="px-8 py-3 w-full text-secondary border-secondary mt-4 text-lg font-semibold rounded-full"
              >
                Take contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto">
        <article className="mt-12 max-w-3xl px-3">
          <div className="border p-8">
            <h3 className="text-2xl font-semibold">Description</h3>
            <p className="mt-4">{course.description}</p>
          </div>
        </article>

        <article className="mt-8 max-w-3xl px-3">
          <div className="border p-8 bg-secondary text-white">
            <h3 className="text-2xl font-semibold">Objectifs</h3>
            <ul className="space-y-3 mt-3">
              {course.requirements?.map((item: any, index: number) => (
                <li
                  key={`requirement${index}`}
                  className="flex items-center space-x-2"
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="mt-8 max-w-3xl px-3">
          <div className="border p-8">
            <h3 className="text-2xl font-semibold">Students Profile</h3>
            <ul className="space-y-3 mt-3">
              {course.requirements?.map((item: any, index: number) => (
                <li
                  key={`requirement${index}`}
                  className="flex items-center space-x-2"
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <section className="max-w-3xl px-3 mt-8">
          <h3 className="text-2xl font-semibold">
            {course_page.syllabus.title}
          </h3>
          <div className="mt-4">
            {course.syllabus?.map((chapter: any, index: number) => (
              <div key={`chapter${index}`} className="border">
                <div
                  className="flex flex-wrap justify-between  cursor-pointer p-4 bg-gray-100 "
                  onClick={() => activateChapter(index)}
                >
                  <div className="flex items-center  font-semibold">
                    <button id={`btn-down${index}`}>
                      <AiOutlineCaretDown className="w-3 h-3" />
                    </button>
                    <button id={`btn-up${index}`} className="hidden">
                      <AiOutlineCaretUp className="w-3 h-3" />
                    </button>
                    <h4 className="ml-4">{chapter.name}</h4>
                  </div>
                </div>
                <div id={`chapter${index}`} className="chapter-panel">
                  <ul className="">
                    {chapter.lectures.map((item: any, index: any) => (
                      <li
                        key={`lecture${index}`}
                        className="space-x-4 flex items-center p-3 md:px-8 justify-between border-b"
                      >
                        {item.name}
                        {/* <span className="text-sm md:text-base">
                          {formatDuration(item.duration)}
                        </span> */}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <article className="mt-6 max-w-3xl px-3">
          <div className="border p-6">
            <h3 className="text-2xl font-semibold">Our Teaching Staff</h3>
            <p className="mt-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              est necessitatibus ea rem nemo autem error, facilis tenetur aut!
              Sapiente fugit animi quae pariatur tenetur neque recusandae quidem
              et sequi?
            </p>
          </div>
        </article>

        <article className="mt-6 max-w-3xl px-3">
          <div className="border p-6">
            <h3 className="text-2xl font-semibold">
              Monitoring of implementation and evaluation of results
            </h3>
            <ul className="space-y-3 mt-3">
              {course.requirements?.map((item: any, index: number) => (
                <li
                  key={`requirement${index}`}
                  className="flex items-center space-x-2"
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="mt-6 max-w-3xl px-3">
          <div className="border p-6">
            <h3 className="text-2xl font-semibold">Course resources</h3>
            <ul className="space-y-3 mt-3">
              {course.requirements?.map((item: any, index: number) => (
                <li
                  key={`requirement${index}`}
                  className="flex items-center space-x-2"
                >
                  <span>
                    <AiOutlineCheck />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </article>

        <article className="mt-6 max-w-3xl px-3">
          <div className="border p-6">
            <h3 className="text-2xl font-semibold">Accessibility </h3>
            <p className="mt-4">
              People with disabilities wishing to follow this training are
              invited to contact us directly, in order to study together the
              possibilities to follow the training.
            </p>
          </div>
        </article>
      </div>

      <section
        id="course-cta"
        className="py-16 sm:mt-20 bg-secondary text-white max-w-7xl px-3 mx-auto rounded-2xl"
      >
        <header className="max-w-3xl mx-auto">
          <h2 className="text-white text-center">{course_page.cta.title} </h2>
          <p className="text-center text-white">{course_page.cta.subtitle}</p>
          <p className="text-center">
            <Link href={course_page.cta.button.link}>
              <button className="px-8 py-3 text-secondary bg-white mt-8 text-lg font-semibold rounded-full">
                {course_page.cta.button.label}
              </button>
            </Link>
          </p>
        </header>
      </section>
    </MainLayout>
  );
}

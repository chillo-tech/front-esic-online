import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import MainLayout from "../../components/main-layout";
import { course_page } from "../../utils/data/pages-list";
import formations_list from "../../utils/data/formations-list.json";
import {
  AiFillCaretLeft,
  AiFillCaretRight,
  AiOutlineCaretDown,
  AiOutlineCaretUp,
  AiOutlineCheck,
  AiOutlineDown,
  AiOutlineUp,
} from "react-icons/ai";
import Course from "../../utils/models/Course";
import Chapter from "../../utils/models/Chapter";
import { FormationCTA } from "../../components/sections/formation-cta";

export default function Formations() {
  const [course, setCourse] = useState<Partial<Course>>({});
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

  function get_all_courses(): Course[] {
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
      const item: Partial<Course> = {};
      setCourse(() => item);
    } else {
      setCourse(currentCourse);
    }
  }, [router, activeChapter]);

  return (
    <MainLayout>
      <Head>Esic - {course.name}</Head>
      {course.image}
      <section
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${course.image})` }}
      >
        <div className="bg-black/30 bg-gradient-to-r from-primary 0 w-full h-full">
          <div className="max-w-6xl mx-auto px-3">
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
              <Link href={course_page.cta.button.link}>
                <button className="px-8 py-3 text-gray-800 bg-white mt-8 text-lg font-semibold rounded-full">
                  {course_page.cta.button.label}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 max-w-6xl px-3 mx-auto">
        <div className="border p-8">
          <h3 className="text-2xl font-semibold">
            {course_page.achievements.title}
          </h3>
          <ul className="space-y-3 mt-6">
            {course.achievements?.map((item, index) => (
              <li
                key={`achievement${index}`}
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
      </section>

      <section className="max-w-6xl mx-auto px-3">
        <h3 className="text-2xl font-semibold">{course_page.syllabus.title}</h3>
        <div className="mt-4">
          {course.syllabus?.map((chapter: Chapter, index: number) => (
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
                <div>
                  {chapter.lectures.length} Lectures -{" "}
                  {formatDuration(
                    chapter.lectures
                      .map((item) => item.duration)
                      .reduce((a, b) => a + b)
                  )}
                </div>
              </div>
              <div id={`chapter${index}`} className="chapter-panel">
                <ul className="">
                  {chapter.lectures.map((item, index) => (
                    <li
                      key={`lecture${index}`}
                      className="space-x-4 flex items-center p-3 md:px-8 justify-between border-b"
                    >
                      <span>{item.name}</span>
                      <span className="text-sm md:text-base">
                        {formatDuration(item.duration)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl px-3 mx-auto mt-8">
        <div className="">
          <h3 className="text-2xl font-semibold">
            {course_page.requirements.title}
          </h3>
          <ul className="space-y-3 mt-3">
            {course.requirements?.map((item, index) => (
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
      </section>

      <section className="max-w-6xl px-3 mx-auto mt-8 mb-20">
        <div className="">
          <h3 className="text-2xl font-semibold">
            {course_page.description.title}
          </h3>
          <p className="mt-3">{course.description}</p>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white max-w-7xl px-3 mx-auto rounded-2xl">
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

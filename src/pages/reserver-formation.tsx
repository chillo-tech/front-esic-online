import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import MainLayout from "../components/main-layout";
import { book_course, course_page } from "../utils/data/pages-list";
import { line, Point, wave } from "../utils/helpers";
import formations_list from "../utils/data/formations";

export default function ReserverFormation() {
  const [step, setStep] = useState<string>("choices");
  const [choices, setChoices] = useState<string[]>([]);
  const [form, setForm] = useState<any>({
    accept_terms: false,
  });
  function handleChange(e: any): void {}
  function handleBooleanChange(name: string, value: boolean) {
    const valueChanged: Record<string, boolean> = { [name]: value };
    setForm((values: any) => ({ ...values, ...valueChanged }));
  }
  function toogleChoice(item: string) {
    if (choices.includes(item)) {
      setChoices((items) => items.filter((e) => e != item));
    } else {
      setChoices((items) => [...items, item]);
    }
  }

  function goToInformations() {
    if (choices.length == 0) {
      return 0;
    }
    setStep("informations");
  }

  useEffect(() => {
    const waveParent = document.getElementById("wave-parent") as HTMLElement;
    if (waveParent != null) {
      waveParent.setAttribute("width", window.innerWidth + "");
      const waveElement = document.getElementById("wave") as HTMLElement;
      if (waveElement) {
        waveElement.setAttribute(
          "d",
          wave(0, 100, window.innerWidth / 2, 40, 0)
        );
      }
    }
  }, []);

  function submit() {}

  return (
    <MainLayout>
      <Head>
        <title> {book_course.title} </title>
      </Head>

      <section
        style={{ backgroundImage: "url(/images/esic-hero-image-5.jpg)" }}
        className=" overflow-hidden  bg-cover relative"
      >
        <div className="bg-black/40 py-12 pb-0 pt-40 ">
          <div className="max-w-7xl justify-between flex px-3 mx-auto ">
            <div className="w-full md:w-2/5 text-white">
              <h2 className=" text-2xl md:text-5xl font-bold">
                {book_course.hero.title}
              </h2>
              <p
                className=" md:text-xl mt-8 mx-auto font-bold"
                dangerouslySetInnerHTML={{ __html: book_course.hero.subtitle }}
              ></p>
            </div>

            <div className="w-full md:w-1/2 pl-8 text-darkprimary">
              <div className="bg-white rounded-2xl p-8 px-8 shadow-2xl">
                <div className={`${step == "choices" ? "" : "hidden"}`}>
                  <h3 className="text-lg md:text-2xl text-center font-semibold">
                    {book_course.form.choices.title}
                  </h3>
                  <h4 className="text-gray-700 text-center">
                    {book_course.form.choices.indication}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    {formations_list.map((item, index) => (
                      <div
                        key={`formation${index}`}
                        onClick={() => toogleChoice(item.name)}
                        className={`${
                          choices.includes(item.name)
                            ? "border-secondary bg-secondary text-white"
                            : "border-secondary/50"
                        } border-2  py-4 px-2 text-center md:text-lg flex items-center justify-center  hover:bg-secondary hover:text-white rounded-lg font-medium cursor-pointer`}
                      >
                        {item.name}
                      </div>
                    ))}
                    <div
                      onClick={() => toogleChoice("Autre")}
                      className={`${
                        choices.includes("Autre")
                          ? " border-secondary bg-secondary text-white"
                          : "border-secondary/50"
                      } border-2 py-4 flex items-center justify-center  hover:bg-secondary hover:text-white rounded-lg text-lg font-medium cursor-pointer transition-all transition-ease`}
                    >
                      {book_course.form.choices.other_choice.label}
                    </div>
                  </div>
                  <button
                    onClick={goToInformations}
                    className="px-5 md:px-8 py-2 md:py-2.5 md:text-xl text-white bg-secondary rounded-full mt-6"
                  >
                    {book_course.form.next}
                  </button>
                </div>

                <div className={`${step == "informations" ? "" : "hidden"}`}>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    <div>
                      <label htmlFor="firstname" className="block mb-2  ">
                        {book_course.form.fields.firstname.label}
                      </label>
                      <input
                        name="firstname"
                        onChange={handleChange}
                        type="text"
                        id="firstname"
                        className="bg-gray-50 border border-gray-300 outline-secondary rounded-lg  focus:ring-secondary/50 focus:border-secondary/50 block w-full p-2.5"
                        placeholder={
                          book_course.form.fields.firstname.placeholder
                        }
                      />
                    </div>
                    <div>
                      <label htmlFor="lastname" className="block mb-2  ">
                        {book_course.form.fields.lastname.label}
                      </label>
                      <input
                        name="lastname"
                        onChange={handleChange}
                        type="text"
                        id="lastname"
                        className="bg-gray-50 border border-gray-300 outline-secondary rounded-lg focus:ring-secondary/50 focus:border-secondary/50 block w-full p-2.5"
                        placeholder={
                          book_course.form.fields.lastname.placeholder
                        }
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="email" className="block mb-2  ">
                        {book_course.form.fields.email.label}
                      </label>
                      <input
                        name="email"
                        onChange={handleChange}
                        type="text"
                        id="email"
                        className="bg-gray-50 border border-gray-300 outline-secondary rounded-lg focus:ring-secondary/50 focus:border-secondary/50 block w-full p-2.5"
                        placeholder={book_course.form.fields.email.placeholder}
                      />
                    </div>
                    <div className="col-span-2">
                      <label htmlFor="nom" className="block mb-2  ">
                        {book_course.form.fields.phone.label}
                      </label>
                      <input
                        name="phone"
                        onChange={handleChange}
                        type="text"
                        id="phone"
                        className="bg-gray-50 border border-gray-300 outline-secondary rounded-lg focus:ring-secondary/50 focus:border-secondary/50 block w-full p-2.5"
                        placeholder={book_course.form.fields.phone.placeholder}
                      />
                    </div>

                    <div className="col-span-2">
                      <div className="flex space-x-2 mt-4">
                        <input
                          type="checkbox"
                          name="accept_terms"
                          id="accept_terms"
                          checked={form.accept_terms}
                          onChange={(e) =>
                            handleBooleanChange(
                              "accept_terms",
                              e.target.checked
                            )
                          }
                        />

                        <label className="-mt-2">
                          {book_course.form.fields.accept_terms.label}
                        </label>
                      </div>

                      <div className="flex space-x-2 mt-4">
                        <input
                          type="checkbox"
                          name="commercial_user"
                          id="commercial_use"
                          checked={form.commercial_use}
                          onChange={(e) =>
                            handleBooleanChange(
                              "commercial_use",
                              e.target.checked
                            )
                          }
                        />
                        <label className="-mt-2">
                          {book_course.form.fields.commercial_use.label}
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      onClick={() => setStep("choices")}
                      className="px-5 md:px-8 py-2 md:py-2.5 md:text-xl text-secondary border-secondary border-2 rounded-full mt-6"
                    >
                      {book_course.form.previous}
                    </button>
                    <button
                      onClick={submit}
                      className="px-5 md:px-8 py-2 md:py-2.5 md:text-lg text-white bg-secondary rounded-full mt-6"
                    >
                      {book_course.form.next}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <svg
            className="hidden md:block text-white relative z-10"
            id="wave-parent"
            width="200"
            height="200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path id="wave" d="" stroke="" fill="currentColor" />
          </svg>
        </div>
      </section>
    </MainLayout>
  );
}

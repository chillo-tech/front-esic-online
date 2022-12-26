import { hero, formations } from "../../utils";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useQuery } from "react-query";
import { read } from "../../services/index";

export default function Hero() {
  const [result, setResult] = useState<any>([]);
  const [showResult, setShowResult] = useState(false);
  const all_formations = formations.map((item) => item.courses).flat();
  const { isSuccess, data } = useQuery<any>({
    queryKey: ["statistics"],
    queryFn: () =>
      read({
        path: "statistiques",
        fields:
          "libelle,articles.article_id.id,articles.article_id.souslibelle,articles.article_id.libelle,articles.article_id.ordre",
      })
  });
  useEffect(() => {}, []);

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
      <section className="flex flex-wrap md:flex-nowrap relative md:min-h-[800px] 2xl:min-h-[900px]">
        <aside className="w-full sm:max-w-xl 2xl:max-w-2xl mx-auto  bg-transparent z-10 pt-12 xl:pt-[100px]  2xl:pt-[100px]">
          <article>
            <div className="px-3 md:px-0 text-4xl sm:text-6xl font-extrabold text-center sm:text-left">
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

        {isSuccess ? (
          <div className="relative md:absolute  md:top-[50%] pt-4 md:pt-20 z-30 w-full ">
            <div className="mx-auto max-w-7xl">
              <div className="mx-auto rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-4 mt-4 md:mt-12">
                {data?.data.data[0].articles &&
                  data?.data.data[0].articles.map((item: any) => (
                    <article
                      key={`stat${item.article_id?.id}`}
                      className="py-8 text-center"
                    >
                      <div className="text-6xl font-extrabold text-secondary">
                        {item?.article_id?.libelle}
                      </div>
                      <div className="mt-2 text-lg leading-6 font-medium text-gray-500">
                        {item?.article_id?.souslibelle}
                      </div>
                    </article>
                  ))}
              </div>
            </div>
          </div>
        ) : null}
        <div
          className="absolute z-0 hidden md:block  h-full w-3/4 bg-cover right-0 "
          style={{ backgroundImage: "url(/images/esic-hero-image-4.jpg)" }}
        ></div>

        <aside
          id="hero-image-container"
          className="w-full md:w-1/2 hidden md:block relative z-0"
        ></aside>
      </section>
    </>
  );
}

import OpenedLayout from "containers/opened";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import {
  HiAcademicCap,
  HiBadgeCheck,
  HiCheck,
  HiOutlineMap,
} from "react-icons/hi";
import { useQuery } from "react-query";
import { getDetail } from "services/index";

function Training({ id }: { id: string }) {
  const { isSuccess, isLoading, data } = useQuery<any>({
    queryKey: ["formations", "detail", id],
    queryFn: () =>
      getDetail({
        //id: id.split("-")[1],
        id: "3",
      }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });

  useEffect(() => {
    window.onscroll = function () {
      let panel = document.getElementById("formation-panel") as HTMLElement;
      let header = document.getElementById("navbar") as HTMLElement;
      let courseCtaElement = document.getElementById("equipe") as HTMLElement;

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
  });

  return (
    <OpenedLayout>
      <Head>
        <title>{"formations.data.titre"}</title>
        <meta name="description" content={"formations.data.description"} />
      </Head>
      <main>
        <section
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: `url()` }}
        >
          <div className="bg-gradient-to-r from-sky-900 bg-black/50 w-full h-full">
            <div className="max-w-7xl mx-auto px-3 flex relative">
              <div className="max-w-4xl py-16 pt-24 text-white">
                <h2 className="text-4xl mt-2 sm:text-5xl font-extrabold text-center sm:text-left ">
                  {data?.data.data.name}
                </h2>
                <h3
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.short_description,
                  }}
                  className="mt-2 sm:text-lg text-center sm:text-left "
                ></h3>
                <ul className="mt-8  items-center flex space-x-3">
                  <li className="flex space-x-2 items-center text-lg font-medium">
                    <AiOutlineClockCircle className="w-5 h-5 text-secondary" />
                    <span>10 Hours</span>
                  </li>
                  <li className="flex space-x-2 items-center text-lg font-medium">
                    <HiOutlineMap className="w-5 h-5 text-secondary" />
                    <span>Online, In Office, Mixe</span>
                  </li>

                  <li className="flex space-x-2 items-center text-lg font-medium">
                    <HiBadgeCheck className="w-5 h-5 text-secondary" />
                    <span>CPF Eligible</span>
                  </li>
                </ul>

                <div className="mt-12 space-x-6">
                  <Link
                    href="/reserver-formation"
                    className="px-8 py-3 w-full text-white bg-secondary mt-8 text-lg font-semibold rounded-full"
                  >
                    Je candidate
                  </Link>
                  <Link
                    href="/reserver-formation"
                    className="px-8 py-3 w-full text-white border border-white mt-8 text-lg font-semibold rounded-full"
                  >
                    Je telecharge le programme
                  </Link>
                </div>
              </div>

              <div
                id="formation-panel"
                className="w-[300px] rounded-md shadow-2xl fixed top-[200px] z-50 sm:left-[70%] 2xl:left-[65%] bg-white"
              >
                <div className="py-4 space-y-3 px-8 bg-secondary text-white rounded-md rounded-b-none">
                  <div className="sm:text-4xl font-bold mt-4">
                    {data?.data.data.price_ht}&euro; HT
                  </div>
                  <h3 className="mt-2 font-semibold text-lg">
                    Les sessions disponibles
                  </h3>
                  {[
                    { start_date: "01/01/2022", end_date: "01/02/2022" },
                    { start_date: "01/02/2021", end_date: "01/03/2022" },
                  ].map((item, index) => (
                    <div key={`session${index}`}>
                      Du {item.start_date} au {item.end_date}
                    </div>
                  ))}
                </div>
                <ul className="mt-4  px-8 pb-8">
                  {[
                    { label: "Financements", target: "#financements" },
                    { label: "Pré-requis", target: "#pre-requis" },
                    { label: "Programme", target: "#programme" },
                    { label: "Notre equipe", target: "#notre-equipe" },
                  ].map((item, index) => (
                    <li
                      key={`item${index}`}
                      className="border-b py-3 font-medium"
                    >
                      <Link href={item.target}>{item.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-7xl mx-auto sm:pb-20">
          <article className="mt-12 max-w-4xl px-3" id="financements">
            <h3 className="text-2xl font-semibold">
              Comment financer votre formation ?
              <span className="bg-secondary block h-1 w-36 my-2"></span>
            </h3>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: data?.data.data.description,
              }}
            ></p>
          </article>

          <article className="mt-12 max-w-4xl px-3">
            <h3 className="text-2xl font-semibold">
              Programme de la formation
              <span className="bg-secondary block h-1 w-36 my-2"></span>
            </h3>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: data?.data.data.description,
              }}
            ></p>
          </article>

          <article className="mt-12 max-w-4xl px-3">
            <h3 className="text-2xl font-semibold">
              Pré-requis{" "}
              <span className="bg-secondary block h-1 w-36 my-2"></span>
            </h3>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: data?.data.data.description,
              }}
            ></p>
          </article>

          <article className="mt-12 max-w-4xl px-3" id="equipe">
            <h3 className="text-2xl font-semibold">
              Equipe <span className="bg-secondary block h-1 w-36 my-2"></span>
            </h3>
            <p
              className="mt-4"
              dangerouslySetInnerHTML={{
                __html: data?.data.data.teachers_description,
              }}
            ></p>
          </article>
        </section>
      </main>
    </OpenedLayout>
  );
}

export async function getServerSideProps(context: any) {
  const { params } = context;
  return { props: { ...params, id: params["training-slug"] } };
}
export default Training;

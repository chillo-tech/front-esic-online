import OpenedLayout from "containers/opened";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsBarChart } from "react-icons/bs";
import { BiCoinStack } from "react-icons/bi";
import { GiPositionMarker } from "react-icons/gi";
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
        id,
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
        <title>{`${data?.data.data.libelle}`} </title>
        <meta name="description" content={`${data?.data.data.description}`} />
      </Head>
      <main>
        <section
          className="w-full bg-cover bg-center"
          style={{ backgroundImage: `url()` }}
        >
          <div className="bg-gradient-to-r from-sky-900 bg-black/50 h-full px-4">
            <div className="container mx-auto flex relative">
              <div className="max-w-4xl md:py-16 md:pt-24 text-white">
                <h2 className="text-4xl mt-10 md:text-5xl font-extrabold">
                  {data?.data.data.libelle}
                </h2>
                <div className="flex">
                

                  
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.short_description,
                  }}
                  className="my-10"
                ></div>
                <ul className="mt-8 items-start flex flex-col md:flex-row">
                  {
                   data?.data.data.niveau ? 
                    <li className="flex items-end py-2 mr-3">
                      <BsBarChart className="mr-2 text-green-600 text-3xl"/> 
                      <span className="text-xl">{data?.data.data.niveau === "BEGINNER" ? 'Débutant': null}</span>
                      <span className="text-xl">{data?.data.data.niveau === "INTERMEDIARY" ? 'Intermediaire': null}</span>
                      <span className="text-xl">{data?.data.data.niveau === "ADVANCED" ? 'Avancé': null}</span>
                    </li> 
                    : 
                    null
                  }
                  {
                   data?.data.data.duree ? 
                    <li className="flex items-center py-2 pr-3">
                      <AiOutlineClockCircle className="mr-2 text-green-600 text-3xl" />
                      <span>{data?.data.data.duree }</span>
                    </li>
                    : 
                    null
                  }
                   {
                   (data?.data.data.distanciel || data?.data.data.presentiel) ? 
                    <li className="flex items-center py-2 pr-3">
                      <GiPositionMarker className="text-red-400 text-3xl"/> 
                      {data?.data.data.distanciel ? 
                        <span className="flex items-center mr-2">
                          En ligne
                        </span> 
                        : 
                        null
                      }
                      {
                        data?.data.data.presentiel ? 
                        <span className="flex items-center">
                          dans nos locaux
                        </span> 
                        : 
                        null
                      }
                    </li>
                    : 
                    null
                  }
                  {
                   (data?.data.data.prix && data?.data.data.cpf ) ? 
                    <li className="flex items-center py-2 pr-3">
                      <BiCoinStack className="mr-2 text-yellow-600 text-3xl"/> 
                      Eligible au CPF
                    </li> 
                    : 
                    null
                  }
                </ul>

                <div className="text-md grid gap-3 justify-center items-center py-4 md:grid-cols-3 md:gap">
                  <Link
                    href="/contactez-nous"
                    className="p-3 text-white text-center bg-secondary rounded-full"
                  >
                    Je candidate
                  </Link>
                  <Link
                    href="/contactez-nous"
                    className="p-3 text-white text-center border border-white rounded-full"
                  >
                    Je télécharge le programme
                  </Link>
                </div>
              </div>

              <div
                id="formation-panel"
                className="xs:hidden md:block w-[300px] rounded-md shadow-2xl fixed top-[200px] z-50 sm:left-[70%] 2xl:left-[65%] bg-white"
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
        <section className="container mx-auto py-6 px-4 md:py-12">
          <article className="max-w-4xl" id="financements">
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

          <article className="mt-12 max-w-4xl">
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

          <article className="mt-12 max-w-4xl">
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

          <article className="mt-12 max-w-4xl" id="equipe">
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

export default Training;

export async function getServerSideProps(context: any) {
  const { params } = context;
  const id = params['training-slug'].substring(params['training-slug'].lastIndexOf("-") + 1);
  return { props: { ...params, id } };
}
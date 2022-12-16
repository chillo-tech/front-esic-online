import OpenedLayout from "containers/opened";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
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
import Image from "next/image";
import { cn, loaderProp } from "utils/image-loader";
import Debug from "components/Debug";
import { getDisplayedDate } from "utils/DateFormat";

function Training({ id }: { id: string }) {
  const [isImageLoading, setLoading] = useState(true);
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
        <title>{data?.data.data.libelle} </title>
        <meta name="description" content={`${data?.data.data.description}`} />
      </Head>
      <main>
        <section className="w-full bg-cover bg-cente relative">
          <div className="bg-gradient-to-r from-sky-900 bg-black/50 h-full px-4">
          {
            data?.data.data.image ? (
              <>
                <div className="bg-black/10 bg-gradient-to-r from-black/80 w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20" />
                <Image
                  fill={true}
                  src={`${process.env.API_URL}/assets/${data?.data.data.image.filename_disk}`}
                  alt={data?.data.data.libelle}
                  loader={loaderProp}
                  unoptimized
                  className={cn(
                    'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                    isImageLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </>
            ): 
            null 
          }
            <div className="container mx-auto flex relative z-20">
              <div className="max-w-4xl md:py-16 md:pt-24 text-white">
                <h2 className="text-4xl mt-10 md:text-5xl font-extrabold">
                  {data?.data.data.libelle}
                </h2>
                <div className="flex">
                  {data?.data.data.souslibelle}
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
                  {
                   (data?.data.data.programmepdf ) ? 
                      <Link
                        href={`${process.env.API_URL}/assets/${data?.data.data.programmepdf}?download`}
                        className="p-3 text-white text-center border border-white rounded-full"
                      >
                        Je télécharge le programme
                      </Link>
                    : 
                    null
                  }
                 
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container mx-auto py-6 px-4 grid md:py-12 md:grid-cols-10">
          <section className="md:col-span-6">
            {
              data?.data.data.contenu ? 
                (<article className="mb-7" dangerouslySetInnerHTML={{__html: data?.data.data.contenu}}/>)
              : null
            }
            {
              data?.data.data.objectifs ? 
              (
                <article className="mt-5" id="objectifs">
                <h3 className="text-2xl font-semibold">
                  Objectifs de la formation
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.objectifs,
                  }}
                ></div>
              </article>
              )
              : null
            }
            {
              data?.data.data.programme ? 
              (
                <article className="mt-5" id="programme">
                <h3 className="text-2xl font-semibold">
                  Programme de la formation
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.programme,
                  }}
                ></div>
              </article>
              )
              : null
            }
            {
              data?.data.data.etudiants ? 
              (
                <article className="mt-5" id="pre-requis">
                <h3 className="text-2xl font-semibold">
                  Pré requis
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.etudiants,
                  }}
                ></div>
              </article>
              )
              : null
            }
            {
              data?.data.data.ressources ? 
              (
                <article className="mt-5" id="ressources">
                <h3 className="text-2xl font-semibold">
                  Ressources utilisées pour cette formation
                  <span className="bg-secondary block h-1 w-36 my-2"></span>
                </h3>
                <div
                  className="mt-4"
                  dangerouslySetInnerHTML={{
                    __html: data?.data.data.ressources,
                  }}
                ></div>
              </article>
              )
              : null
            }
          </section>
          <aside className="md:col-span-4">
            
          <div
                id="formation-panel"
                className="font-sans xs:hidden md:block w-[300px] rounded-md shadow-2xl fixed top-[200px] z-30 sm:left-[70%] 2xl:left-[65%] bg-white"
              >
                <div className="py-4 space-y-3 px-8 bg-secondary text-white rounded-md rounded-b-none">
                  <div className="sm:text-4xl font-bold mt-4">
                    {data?.data.data.prix}
                  </div>
                  {
                    data?.data.data.sessions ? 
                      (
                        <div className="sessions py-4">
                          <h3 className="mt-2 font-semibold text-2xl mb-2">
                            Nos prochaines
                          </h3>
                          {data?.data.data.sessions.map((item: any, index: number) => (
                            <div key={`session-${id}-${index}`} className="bg-slate-50 text-slate-600 mb-3 rounded-md p-2">
                              <p className="mb-0">Du {getDisplayedDate(item.sessions_id.debut)}</p>
                              <p className="mb-0">Au {getDisplayedDate(item.sessions_id.fin)}</p> 
                            </div>
                          ))}
                        </div>
                      )
                    : null 
                  }
                </div>
                <ul className="mt-4  px-8 pb-8">
                  {[
                    { label: "Financements", target: "/financements" },
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
          </aside>
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
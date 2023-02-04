import React, {useState} from "react";
import { useQuery } from "react-query";
import { fetchData } from "services";
import OpenedLayout from 'containers/opened';
import Metadata from 'components/metadata';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import DisplayImage from 'components/shared/DisplayImage';
import {
  capitalize,
  CERTICATION_KEYS, PAGE_PARAMS,
  slugify,
} from 'utils';
import AllTrainings from 'components/shared/AllTrainings';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {BsArrowRightCircle} from 'react-icons/bs';
import classNames from 'classnames';

function Certification({
  id, slug
}: {
  id: string;
  slug: string;
  link: string;
}) {
  const router = useRouter();
  const [data, setData] = useState<any>(null);

  const { isSuccess } = useQuery<any>({
    queryKey: ['certifications', slug, id],
    queryFn: () =>
    fetchData({
      path: `pages/${id}`,
      fields: PAGE_PARAMS
    }),
    onSuccess: (data: any) => {
      setData(data.data.data);
    },
    onError: () => {
      router.push("/page-inconnue", undefined, {shallow: false});
    }
  });
  
  return (
    <>
      {
        isSuccess ? (
          <OpenedLayout>
            <Metadata entry={data} />
            <header className="grid bg-app-blue items-center text-white">
              <div className={`container md:px-0 py-10 ${data?.image ? 'md:py-14': ''} relative`}>
                <div className="grid md:grid-cols-2">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white">
                      {data?.libelle}
                    </h1>
                    {data?.abstrait ? (
                        <RenderHtmlContent
                            content={data?.abstrait}
                            classes="text-white font-light text-lg py-2"
                        />
                    ) : null}

                    <p className="text-md font-extralight flex flex-col md:flex-row">
                      <span className={`mr-1`}>{data?.alias}</span>
                        {
                          data?.CODE_RS ? (
                              <span>
                                CODE RS
                                <b className="ml-1">{data?.CODE_RS}</b>
                              </span>
                          ) : null
                        }
                        {
                          data?.CODE_RNCP ? (
                              <span>
                                CODE RNCP
                                <b className="ml-1">{ data?.CODE_RNCP}</b>
                              </span>
                          ) : null
                        }
                    </p>

                  </div>
                  <span />
                </div>
                {
                  data?.image ? (
                      <div className="hidden md:block absolute right-0 bottom-0 image-wrapper rounded-lg w-[300px] h-[300px]">
                        <DisplayImage
                            image={data?.image}
                            imageClasses="object-cover"
                            libelle={`${data?.nom}`}
                            classes="rounded-2xl !overflow-hidden"
                        />
                      </div>
                  ): null }
              </div>
            </header>
            {
              (data?.certifications && data?.certifications.length ) ? (
                  <section className="bg-white py-5">
                    <div
                        className="mx-auto pb-6 md:pt-6"
                    >
                        <h2 className="font-bold text-3xl md:text-5xl md:mb-12 text-center flex flex-col justify-center items-center">
                        <span className='px-10 py-3'>
                          Nos certifications
                        </span>
                        <span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>
                      </h2>
                    </div>
                    <div className="md:px-0 container">
                      <ul className="grid md:grid-cols-3 gap-4">
                        {
                          data?.certifications.map(({certifications_id: certification}: any) => (
                              <li key={certification.id} className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] rounded-lg">
                                <Link
                                    href={`/nos-certifications/${slugify(certification.nom)}-${certification.id}`}
                                    className={
                                        classNames(
                                            {"grid grid-cols-8": certification.image},
                                            "w-full relative text-md font-extralight grid justify-between h-full"
                                        )
                                    }
                                >
                                  {certification.image ? (
                                      <div className="w-full col-span-2">
                                        <DisplayImage positionRelative={true} image={certification.image} libelle={certification.nom} />
                                      </div>
                                  ): null}
                                  <div className={classNames(
                                      {"px-6": !certification.image},
                                      {"col-span-6": certification.image},
                                      'flex flex-col justify-between w-full pl-6 pr-6 py-4'
                                  )}>
                                      <div className="">
                                        <h2 className="title font-extrabold text-2xl text-app-light-gray">
                                          {capitalize(certification.nom)}
                                        </h2>
                                          {
                                            (!certification?.CODE_RS && !certification?.CODE_RNCP )
                                                ? (<span className={`mr-1`}>{certification?.alias}</span> )
                                                : null
                                          }
                                          {
                                            certification?.CODE_RS ? (
                                                <span>
                                              Certification RS <b className="ml-1">{certification?.CODE_RS}</b>
                                            </span>
                                            ) : null
                                          }
                                          {
                                            certification?.CODE_RNCP ? (
                                                <span>
                                              CODE RNCP <b className="ml-1">{ certification?.CODE_RNCP}</b>
                                            </span>
                                            ) : null
                                          }
                                      </div>
                                      <span className={"flex items-center  text-app-blue text-lg mt-3"} >
                                      <BsArrowRightCircle className={"mr-2"} />
                                      Savoir plus
                                    </span>
                                  </div>

                                </Link>
                              </li>
                          ))
                        }</ul>
                    </div>
                  </section>

              ): null
            }
            <section className="bg-white py-5">
              <div className="md:px-0 container">
                <div>
                  {CERTICATION_KEYS.filter((item: any) => data[item.key]).map(
                    (item) => (
                      <article
                        key={`${id}-${item.key}-${slugify(item.label)}`}
                        className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg mb-10 detail-formation">
                        <h2 className="text-xl md:text-3xl font-bold mb-0 pb-0'">
                          {item.label}
                        </h2>
                        <RenderHtmlContent
                          content={data[item.key]}
                          classes={`text-gray-600 font-light text-lg py-4 description`}
                        />
                      </article>
                    )
                  )}
                  <article
                      className="bg-white shadow-[0_5px_45px_-20px_rgba(0,0,0,0.3)] p-4 md:p-10 rounded-lg flex items-center justify-center">
                    {
                      (data.Statut === "VALIDEE" && data.reference)
                        ? (
                              <AllTrainings
                                  link={data.reference}
                                  blank={true}
                                  text={"Plus d'informations sur cette certification"}
                                  classes={`blue-button mr-5`}
                              />
                          ): null
                    }
                    <AllTrainings
                        link={'/contactez-nous'}
                        text={'Contactez nous'}
                        classes={`outline-blue-button`}
                    />
                  </article>
                </div>
              </div>
            </section>
          </OpenedLayout>
        ) : null
      }
    </>
  )
}

export default Certification;

export async function getServerSideProps(context: any) {
  const { query } = context;
  let params: any = {};
  if (!query) {
    return {
      notFound: true,
    }
  }

  if (query['certification']) {
    const id = query['certification'].substring(query['certification'].lastIndexOf('-') + 1);
    if (isNaN(id)) {
      return {
        notFound: true,
      }
    }
    params = {
      id,
      slug: query['certification'],
      type: 'certification',
    };
  }
  return { props: { ...params }}
};

import Link from 'next/link';
import Image from 'next/image';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import {
  ENTREPRISE_PARAMS,
  cn,
  loaderProp,
  slugify,
  capitalize,
} from 'utils/index';
import { BsArrowUpCircle, BsPhone } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';
import { useState, useContext } from 'react';
import { ApplicationContext } from 'context/ApplicationContext';
import classNames from 'classnames';
import { BiMapPin } from 'react-icons/bi';
import AllTrainings from 'components/shared/AllTrainings';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import DisplayImage from 'components/shared/DisplayImage';

function Footer() {
  const { state, updateCompany } = useContext(ApplicationContext);
  const [isImageLoading, setLoading] = useState(true);

  const training = state?.displayInscriptionButton;

  const { isSuccess, data } = useQuery<any>({
    queryKey: ['Entreprise-data-ddd'],
    queryFn: () =>
      fetchData({
        path: 'Entreprise',
        fields: ENTREPRISE_PARAMS,
      }),
    onSuccess: (data: any) => {
      updateCompany(data.data.data);
    },
  });
  return (
    <>
      <footer className="text-left md:text-center relative shadow-xl w-full bg-gradient-to-b via-app-stone from-app-light-gray to-app-stone text-white font-sans font-extralight">
        {isSuccess ? (
          <>
            <div className="container md:px-0 relative md:pt-10 md:pb-10 pb-20 z-20 bg-no-repeat bg-top bg-contain bg-[url('/images/pages/footer-arc.svg')]">
              <div className="container md:!px-0">
                <article className="md:col-span-2 text-xl">
                 
                  {data?.data.data.description ? (
                      <RenderHtmlContent
                          content={data.data.data.description}
                          classes="py-3 leading-10 md:w-2/3 mx-auto text-white"
                      />
                  ) : null}
                  <p className="py-4 flex items-center justify-center relative">
                    <AllTrainings
                        link="/contactez-nous"
                        text="Contactez nous"
                        classes='blue-button'
                    />
                  </p>
                </article>
              </div>
              <div className="container md:mb-10 grid md:grid-cols-4 md:!px-4 md:!max-w-full">
                <article>
                  <h3 className="text-app-white text-left mb-6 text-xl font-bold  text-white">
                    Nous contacter
                  </h3>
                  {data?.data.data.telephone ? (
                      <Link
                          href={`tel:${data?.data.data.telephone}`}
                          className="text-app-white flex items-center text-xl font-light pr-3 mb-2">
                        <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                          <BsPhone className="text-xl text-app-blue" />
                        </span>
                        {data?.data.data.telephone}
                      </Link>
                  ) : null}
                  {data?.data.data.email ? (
                      <Link
                          href={`mailto:${data?.data.data.email}`}
                          className="text-app-white flex items-center text-xl font-light py-2 pr-3 mb-2">
                        <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                          <HiOutlineMail className="text-xl text-app-blue" />
                        </span>
                        {data?.data.data.email}
                      </Link>
                  ) : null}
                  {data?.data.data.adresses ? (
                      <article className="flex text-app-white font-light">
                        <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                          <BiMapPin className="text-xl text-app-blue" />
                        </span>
                        <p className="flex flex-col text-left text-xl">
                          {data?.data.data.adresses[0].rue}
                          <span className="uppercase ml-1">
                            {data?.data.data.adresses[0].codepostal}{' '}
                            {data?.data.data.adresses[0].ville}
                          </span>
                        </p>
                      </article>
                  ) : null}
                </article>
                <article className="flex flex-col text-left my-2 md:my-0 md:px-5 text-white">
                  <h3 className="text-app-white text-left md:mb-6 text-xl font-bold">
                    Nous connaitre
                  </h3>
                  {data?.data.data.pages.map((item: any) => (
                      <Link
                          href={`/${slugify(item.libelle)}-${item.id}`}
                          key={`pages-${item.id}`}
                          className="text-app-white flex items-center text-xl font-light py-2 pr-3">
                        {item.libelle}
                      </Link>
                  ))}
                </article>
                <article className="flex flex-col justify-center text-left my-2 md:my-0 md:px-5">
                  {data?.data.data.fichiers.map((item: any) => (
                      <Link
                          href={`${process.env.API_URL}/assets/${item.directus_files_id.id}?download`}
                          key={`pages-${item.directus_files_id.id}`}
                          target="_blank"
                          className="text-app-white flex items-center text-xl font-light py-2 pr-3">
                        {capitalize(item.directus_files_id.title)}
                      </Link>
                  ))}
                </article>
                <article className="flex flex-col justify-center items-center">
                  {data?.data.data.certifications ? (
                      <>
                        {data?.data.data.certifications.map((item: any) => (
                            <DisplayImage
                                key={`certifications-${item.certifications_id.id}`}
                                image={item.certifications_id.image}
                                imageClasses="object-contain"
                                libelle={`${item.certifications_id.title}`}
                                classes="rounded-2xl !overflow-hidden"
                            />
                        ))}
                      </>
                  ) : null}
                </article>
              </div>
              <div className="container text-center text-app-light-gray">
                <p>En aucun cas, les données recueillies sur le site esic-online.com ne seront cédées ou vendues à des tiers.</p>
                <p>Aucune adresse email ne sera transmise à des tiers sauf avec l’accord express des intéressés.</p>
              </div>
              <div className="container flex flex-col md:flex-row items-center md:px-0">
                {data?.data.data.liens ? (
                    <p className="flex py-4 items-center justify-center md:justify-start">
                      {data?.data.data.liens.map((item: any, index: number) => (
                          <Link
                              href={item.lien}
                              target="_blank"
                              className={classNames(
                                  `inline-block mr-5 items-center py-2 w-8 h-8 relative`
                              )}
                              key={`liens-${index}-${data?.data.data.libelle}`}>
                            <Image
                                fill={true}
                                src={`${process.env.API_URL}/assets/${item.image.filename_disk}`}
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
                          </Link>
                      ))}
                    </p>
                ) : null}
                <div className="container text-app-light-gray">
                  Copyright &copy; {new Date().getFullYear()} ESIC. Tous droits
                  reservés.
                </div>
                <div className="icons">
                  <Link href={`#accueil`} scroll={false}>
                    <BsArrowUpCircle className="text-6xl text-app-blue" />
                  </Link>
                </div>
              </div>
            </div>
        </>
      ) : null}
      {training ? (
        <Link
          href={`/nos-formations/votre-candidature?formation=${slugify(
            training.libelle
          )}-${training.id}`}
          className={classNames(
            'md:hidden flex justify-center items-center bg-app-blue w-full uppercase px-8 py-4 relative'
          )}>
          <span
            className={classNames(
              'text-app-blue bg-white rounded-lg px-20 py-3 text-lg font-semibold'
            )}>
            {capitalize("S'INSCRIRE")}
          </span>
        </Link>
      ): null}
      </footer>
    </>
  );
}

export default Footer;

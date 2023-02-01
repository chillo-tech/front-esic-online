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
import { BsArrowRightShort, BsArrowUpCircle, BsPhone } from 'react-icons/bs';
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
      <footer className="text-center relative shadow-xl pb-20 w-full bg-gradient-to-b via-app-stone from-app-light-gray to-app-stone text-white font-sans font-extralight">
        {isSuccess ? (
          <>
            <div className="container md:px-0 relative py-10 z-20 bg-no-repeat bg-top bg-contain bg-[url('/images/pages/footer-arc.svg')]">
              <div className="container md:!px-0">
                <article className="py-5 md:col-span-2 text-3xl">
                  <Link href={'/'} className="font-extrabold text-6xl mb-2">
                    {data.data.data.libelle}
                  </Link>
                  {data?.data.data.description ? (
                    <RenderHtmlContent
                      content={data.data.data.description}
                      classes="py-3 leading-10"
                    />
                  ) : null}
                  <p className="py-12 flex items-center justify-center relative">
                    <AllTrainings
                      link="/contactez-nous"
                      text="Contactez nous"
                      classes={`
                      flex justify-center items-center px-8
                      py-3 rounded-lg !text-xl md:!text-2xl
                      border border-app-blue bg-app-blue text-white
                      hover:bg-transparent hover:text-app-blue hover:border-app-blue uppercase`}
                    />
                  </p>
                </article>
              </div>
              <div className="container my-10 grid md:grid-cols-3 md:!px-4 md:!max-w-full">
                <article>
                  <h3 className="text-app-white text-left mb-6 text-4xl font-bold">
                    Nous contacter
                  </h3>
                  {data?.data.data.telephone ? (
                    <Link
                      href={`tel:${data?.data.data.telephone}`}
                      className="text-app-light-gray flex items-center text-3xl font-light pr-3">
                      <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                        <BsPhone className="text-4xl text-app-blue" />
                      </span>
                      {data?.data.data.telephone}
                    </Link>
                  ) : null}
                  {data?.data.data.email ? (
                    <Link
                      href={`mailto:${data?.data.data.email}`}
                      className="text-app-light-gray flex items-center text-3xl font-light py-2 pr-3">
                      <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                        <HiOutlineMail className="text-4xl text-app-blue" />
                      </span>
                      {data?.data.data.email}
                    </Link>
                  ) : null}
                  {data?.data.data.adresses ? (
                    <article className="flex text-app-light-gray font-light">
                      <span className="border-2 border-app-blue rounded-full grid items-center justify-center mr-5 w-16 h-16">
                        <BiMapPin className="text-4xl text-app-blue" />
                      </span>
                      <p className="flex flex-col text-left text-3xl">
                        {data?.data.data.adresses[0].rue}
                        <span className="uppercase ml-1">
                          {data?.data.data.adresses[0].codepostal}{' '}
                          {data?.data.data.adresses[0].ville}
                        </span>
                      </p>
                    </article>
                  ) : null}
                </article>
                <article className="flex flex-col text-left my-10 md:my-0 md:px-10">
                  <h3 className="text-app-white text-left mb-6 text-4xl font-bold">
                    Nous connaitre
                  </h3>
                  {data?.data.data.pages.map((item: any) => (
                    <Link
                      href={`/${slugify(item.libelle)}-${item.id}`}
                      key={`pages-${item.id}`}
                      className="text-app-light-gray flex items-center text-3xl font-light py-2 pr-3">
                      {item.libelle}
                    </Link>
                  ))}
                </article>
                <article className="flex flex-col justify-center items-center">
                  {data?.data.data.certifications ? (
                    <>
                      {data?.data?.data?.certifications.map((item: any) => (
                        <DisplayImage
                          key={`certifications-${item?.id}`}
                          image={item?.directus_files_id}
                          imageClasses="object-contain"
                          libelle={`${item?.directus_files_id?.title}`}
                          classes="rounded-2xl !overflow-hidden"
                        />
                      ))}
                    </>
                  ) : null}
                </article>
              </div>
              <div className="container flex flex-col md:flex-row items-center md:px-0">
                {data?.data.data.liens ? (
                  <p className="flex py-4 items-center justify-center md:justify-start">
                    {data?.data.data.liens.map((item: any, index: number) => (
                      <Link
                        href={item.lien}
                        className={classNames(
                          `inline-block mr-5 items-center py-2 w-14 h-14 relative`
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
                <div className="container">
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
      </footer>
      {training && (
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
      )}
    </>
  );
}

export default Footer;

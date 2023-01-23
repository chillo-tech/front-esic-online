import classNames from 'classnames';
import Search from 'components/trainings/search';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from 'context/ApplicationContext'
import { cn, loaderProp } from 'utils/image-loader';
import RenderHtmlContent from "components/shared/RenderHtmlContent";
import DisplayImage from "components/shared/DisplayImage";

function Hero() {
  const [isImageLoading, setLoading] = useState(true);
  const [searchBarEnabled, setSearchBarEnabled] = useState(false);

  const {state} = useContext(ApplicationContext);
  useEffect(() => {
    //To give the focus another time if loose
    setSearchBarEnabled(false);
  }, [searchBarEnabled]);

  return (
    <>
      {state && state.company ? (
        <header className="bg-white">
        <div
            className={classNames(
              'container relative !px-0',
              `bg-[url('/images/pages/footer-arc.svg')]`
            )}>
            <Image
              fill={true}
              src={`${process.env.API_URL}/assets/${state.company.couverture.filename_disk}?w=2000&h=1000fill=true`}
              alt={state.company.description}
              loader={loaderProp}
              unoptimized
              className={cn(
                ' absolute object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-xl',
                isImageLoading
                  ? 'scale-110 blur-2xl grayscale'
                  : 'scale-100 blur-0 grayscale-0'
              )}
              onLoadingComplete={() => setLoading(false)}
            />
            <div
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.8)' }}
              className="relative pt-20 flex flex-col justify-center items-center text-white !rounded-xl text-center">
              <div className="flex justify-center items-center">
                <p className="relative">
                  <Image
                    width={70}
                    height={70}
                    src={`/images/pages/hero-book.svg`}
                    alt={`${state.company.libelle} ${state.company.souslibelle}`}
                    loader={loaderProp}
                    unoptimized
                    className={cn(
                      'rounded-lg relative object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                      isImageLoading
                        ? 'scale-110 blur-2xl grayscale'
                        : 'scale-100 blur-0 grayscale-0'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold pt-5">
                {state.company.libelle}, {state.company.souslibelle}
              </h1>
              <div className="py-12 px-2 md:px-0 md:w-4/5 mx-auto">
                <Search isFocused={searchBarEnabled} />
              </div>
              <RenderHtmlContent content={state.company.description} classes="ext-xl md:text-2xl text-white hidden md:block" />
              <div className="md:w-3/5 my-5 bg-no-repeat bg-[left-top]  bg-[length:110px_8-60px] bg-[url('/images/pages/hero-blue-arc.svg')]">
                <div className="py-12 bg-[length:110px_8-60px] bg-no-repeat bg-[right_bottom] bg-[url('/images/pages/hero-green-arc.svg')]">
                  {/* <AllTrainings 
                      icon= {false}
                      link='/nos-formations/votre-candidature' 
                      text="S'INSCRIRE À UNE FORMATION"
                      classes='bg-white text-app-blue font-semibold px-10 py-4 hover:bg-transparent hover:text-white hover:border hover:border-white'
                    /> */}
                  <button
                    onClick={() => setSearchBarEnabled(true)}
                    className="uppercase px-8 py-3 rounded-lg relative bg-white text-app-blue font-semibold px-10 py-4 hover:bg-transparent hover:text-white hover:border hover:border-white"
                  >
                    S&apos;INSCRIRE À UNE FORMATION
                  </button>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Link href={`#formations`} scroll={false} className="relative">
                  <Image
                    width={80}
                    height={80}
                    src={`/images/pages/hero-scroll.svg`}
                    alt={`${state.company.libelle} ${state.company.souslibelle}`}
                    loader={loaderProp}
                    unoptimized
                    className={cn(
                      'rounded-lg relative object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                      isImageLoading
                        ? 'scale-110 blur-2xl grayscale'
                        : 'scale-100 blur-0 grayscale-0'
                    )}
                    onLoadingComplete={() => setLoading(false)}
                  />
                </Link>
              </div>
            </div>
          </div>


          {/*
        <header className='relative hero'>
        <div className="absolute z-20 bg-gray-900 opacity-40 top-0 bottom-0 left-0 right-0" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-30">
        <aside className="container absolute top-0 bottom-0 right-0 left-0 z-40 flex flex-col justify-center">
            <div className="text-4xl md:text-6xl font-extrabold text-center md:text-left md:w-3/4 flex flex-col">
              <h1 className="text-green-400 inline">{state.company.libelle}</h1>
              <h1 className="inline">{state.company.souslibelle}</h1>
            </div>
            <div className="py-10 md:w-3/5">
              <Search />
            </div>
            <div className="text-xl md:text-2xl text-white text-center md:text-left md:w-1/2 hidden md:block"
              dangerouslySetInnerHTML={{__html: state.company.description}}
            />
            <p className='text-blue-600'>
              <ContactUsText text='Une question ? contactez nous' classes='text-green-500 text-2xl'/>
            </p>
        </aside>
        </div>
        
        </header>*/}
        </header>
      ) : null}
    </>
  );
}

export default Hero;

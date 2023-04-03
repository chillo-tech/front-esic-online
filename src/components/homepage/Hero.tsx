import classNames from 'classnames';
import Search from 'components/trainings/search';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import { ApplicationContext } from 'context/ApplicationContext'
import { cn, loaderProp } from 'utils/image-loader';
import RenderHtmlContent from "components/shared/RenderHtmlContent";
import DisplayImage from "components/shared/DisplayImage";
import {useRouter} from 'next/router';

function Hero() {
  const router = useRouter();
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
              src={`${process.env.API_URL}/assets/${state?.company?.couverture?.filename_disk}?w=2000&h=1000fill=true`}
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
              <div className="py-12 px-2 md:px-0 md:w-4/5 w-full mx-auto">
                <Search isFocused={searchBarEnabled} />
              </div>
              <RenderHtmlContent content={state.company.description} classes="text-white mx-auto md:w-3/5 text-xl md:text-2xl text-white hidden md:block" />
              <div className="md:w-3/5 my-5 bg-no-repeat bg-[left-top]  bg-[length:110px_8-60px] bg-[url('/images/pages/hero-blue-arc.svg')]">
                <div className="py-12 bg-[length:110px_8-60px] bg-no-repeat bg-[right_bottom] bg-[url('/images/pages/hero-green-arc.svg')]">

                  <button
                    onClick={() => router.push("/nos-formations")}
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
        </header>
      ) : null}
    </>
  );
}

export default Hero;

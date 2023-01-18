import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import Navigation from './Navigation';
import { HiOutlineMenu } from 'react-icons/hi';
import classNames from 'classnames';
import { GiCancel } from 'react-icons/gi';
import { useRouter } from 'next/router';
import { MENU } from 'utils';

function Header() {
  const router = useRouter();
  const [showMenu, setshowMenu] = useState(false);

  const closeManu = () => {
    setshowMenu(false);
  };

  useEffect(() => {
      router.events.on('routeChangeStart', closeManu);
      return () => router.events.off('routeChangeStart', closeManu);
  }, [router.events]);

  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["menus"],
    queryFn: () =>
      fetchData({
        path: "menus",
        fields: MENU
      })  
   });
  return (
    <>
      <header className='bg-white w-full top-0 relative z-40 pb-2 pt-3'>
        <div className="container !px-0 hidden md:flex items-center justify-between w-full md:w-auto py-4 md:py-0 md:px-10 px-2">
            <Link href={"/"} className="">
              <Image
                src={"/images/logo.png"}
                width={150}
                height={50}
                priority={true}
                alt="Logo Esic"
              />
            </Link>
            <div className='flex items-center'>
              {isSuccess && data?.data?.data ? <Navigation items={data.data.data}/>: null}
              <Link
                className="px-8 py-2 text-app-blue rounded-lg border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue"
                href='/contactez-nous'
              >
                Contactez nous
              </Link>
            </div>
        </div>
        <div className="items-center justify-between w-full md:w-auto py-4 md:py-0 md:px-10 px-2 md:hidden">
            <div className="flex justify-between items-center">
              <Link href={"/"} className="">
                <Image
                  src={"/images/logo.png"}
                  width={150}
                  height={50}
                  alt="Logo Esic"
                />
              </Link>
              <button type="button" onClick={() => setshowMenu(!showMenu)}
                className=""
              >
                <HiOutlineMenu className='text-4xl'/>
              </button>
            </div>
        </div>
      </header>

      <div className={classNames({ 'fixed flex flex-col': showMenu, 'hidden': !showMenu },`h-screen overflow-hidden bg-white w-full fixed left-0 top-0 right-0 bottom-0 z-50 font-sans justify-between`)}>
         <div className="flex justify-between items-center py-4 pr-2">
            <Link href={"/"} className="">
              <Image
                src={"/images/logo.png"}
                width={150}
                height={50}
                alt="Logo Esic"
              />
            </Link>
            <button type="button" onClick={() => setshowMenu(!showMenu)}
              className=""
            >
              <GiCancel className='text-4xl'/>
            </button>
          </div>
         <div className="container mx-auto flex flex-col">
            {isSuccess && data?.data?.data ? <Navigation items={data.data.data}/>: null}
         </div>
         <p className='py-4 flex items-center justify-center'>
          <Link
            className="px-8 py-3 text-white bg-green-600 rounded-full  hover:bg-secondary/90 transition-colors"
            href='/contactez-nous'
          >
            Contactez nous
          </Link>
         </p>
      </div>
    </>
  )
}

export default Header
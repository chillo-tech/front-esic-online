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
import NavigationMobile from "containers/components/NavigationMobile";
import AllTrainings from "components/shared/AllTrainings";

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
      <header className='bg-white w-full top-0 relative z-40 pb-2 pt-3 font-normal'>
        <div className="!px-0 container hidden lg:flex items-center justify-between w-full md:w-auto py-4 md:py-0 md:px-10 px-2">
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
                className="font-extralight px-8 py-2 rounded-lg outline-blue-button"
                href='/contactez-nous'
              >
                Contactez nous
              </Link>
            </div>
        </div>
        <div className="md:container items-center justify-between w-full md:w-auto py-4 md:py-0 md:px-0 px-2 lg:hidden">
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
         <div className="w-full h-full px-4 flex flex-col bg-app-light-blue">
            {isSuccess && data?.data?.data ? <NavigationMobile items={data.data.data}/>: null}
             <p className='py-16 flex items-center justify-center bg-app-light-blue'>
                 <AllTrainings
                     text={"Contactez nous"}
                     link="/contactez-nous"
                     classes='border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue'
                 />
             </p>
         </div>
      </div>
    </>
  )
}

export default Header

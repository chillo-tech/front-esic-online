import ContactUsText from 'components/shared/ContactUsText';
import Search from 'components/trainings/search';
import Image from 'next/image'
import Contact from 'pages/contactez-nous';
import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader'

function Hero() {
  const [isImageLoading, setLoading] = useState(true);

  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["Entreprise","homepage"],
    queryFn: () =>
      fetchData({
        path: "pages?search=esic",
        fields: "*"
      })  
   });
  return (
    <>
     {
      isSuccess ? (
        <header className='relative hero'>
        <div className="absolute z-20 bg-gray-900 opacity-40 top-0 bottom-0 left-0 right-0" />
        <div className="absolute top-0 bottom-0 left-0 right-0 z-30">
        <aside className="container absolute top-0 bottom-0 right-0 left-0 z-40 flex flex-col justify-center">
            <div className="text-4xl md:text-6xl font-extrabold text-center md:text-left md:w-3/4 flex flex-col">
              <h1 className="text-green-400 inline">{data.data.data[0].libelle}</h1>
              <h1 className="inline">{data.data.data[0].souslibelle}</h1>
            </div>
            <div className="py-10 md:w-3/5">
              <Search />
            </div>
            <div className="text-xl md:text-2xl text-white text-center md:text-left md:w-1/2 hidden md:block"
              dangerouslySetInnerHTML={{__html: data.data.data[0].description}}
            />
            <p className='text-blue-600'>
              <ContactUsText text='Une question ? contactez nous' classes='text-green-500 text-2xl'/>
            </p>
        </aside>
        </div>
         <Image
            fill={true}
            src={`${process.env.API_URL}/assets/${data.data.data[0].image}?w=2000&h=1000fill=true`}
            alt={data.data.data[0].description}
            loader={loaderProp}
            unoptimized
            className={cn(
              'z-10 relative object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
              isImageLoading
                ? 'scale-110 blur-2xl grayscale'
                : 'scale-100 blur-0 grayscale-0'
            )}
            onLoadingComplete={() => setLoading(false)}
          />
        </header>
      ) : null
     }
    </>
  )
}

export default Hero
import Debug from 'components/Debug';
import AllTrainings from 'components/shared/AllTrainings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineClockCircle } from 'react-icons/ai';
import { BiCoinStack } from 'react-icons/bi';
import { BsArrowRightCircle, BsBarChart } from 'react-icons/bs';
import { GiPositionMarker } from 'react-icons/gi';
import { useQuery } from 'react-query';
import { getTopTrainings } from 'services/index';
import { top_formations } from 'utils/data'
import { cn, loaderProp } from 'utils/image-loader';

function TopTrainings() {
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["top-trainings"],
    queryFn: () => getTopTrainings({limit: 4})
  });
  return (
    <>
    {isSuccess ? (
      <section className='py-16 bg-green-800 bg-opacity-10'>
        <div className="container mx-auto px-2">
          <h2 className="text-2xl md:text-4xl font-extrabold mb-4">{top_formations.title}</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {data?.data.data.map((training:any)=> (
                <article className='bg-slate-50 border border-gray-300 rounded-sm' key={training.id}>
                  {
                    training.image ? (
                      <div className='relative w-full h-52 !rounded-t-sm'>
                        <div className="bg-black bg-opacity-50 w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm" />
                        <Image
                          fill={true}
                          src={`${process.env.API_URL}/assets/${training.image}?w=300&h=200fill=true`}
                          alt={training.libelle}
                          loader={loaderProp}
                          unoptimized
                          className={cn(
                            'relative object-cover duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                            isImageLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </div>
                    ): 
                    null 
                  }
                  <div className="description p-4">
                      <h3 className="title font-extrabold text-xl mb-3 h-16">{training.libelle}</h3>
                      <ul className="items-start flex flex-col !text-md">
                          {
                          training.niveau ? 
                            <li className="flex py-1 mr-3">
                              <BsBarChart className="mr-2 text-green-600 text-xl"/> 
                              <span>{training.niveau === "BEGINNER" ? 'Débutant': null}</span>
                              <span>{training.niveau === "INTERMEDIARY" ? 'Intermediaire': null}</span>
                              <span>{training.niveau === "ADVANCED" ? 'Avancé': null}</span>
                            </li> 
                            : 
                            null
                          }
                          {
                          training.duree ? 
                            <li className="flex items-center py-1 pr-3">
                              <AiOutlineClockCircle className="mr-2 text-green-600 text-xl" />
                              <span>{training.duree }</span>
                            </li>
                            : 
                            null
                          }

                          {
                          training.prix ? 
                            <li className="flex items-center py-1 pr-3">
                              <BiCoinStack className="mr-2 text-green-600 text-xl" />
                              <span>{training.prix }</span>
                            </li>
                            : 
                            null
                          }
                          {
                          (training.distanciel || training.presentiel) ? 
                            <li className="flex items-center py-1 pr-3">
                              <GiPositionMarker className="mr-2 text-red-400 text-xl"/> 
                              {training.distanciel ? 
                                <span className="flex items-center mr-2">
                                  En ligne
                                </span> 
                                : 
                                null
                              }
                              {
                                training.presentiel ? 
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
                          (training.prix && training.cpf ) ? 
                            <li className="flex items-center py-1 pr-3">
                              <BiCoinStack className="mr-2 text-yellow-600 text-xl"/> 
                              Eligible au CPF
                            </li> 
                            : 
                            null
                          }
                      </ul>
                  </div>
                </article>
            ))}
          </div>
          <AllTrainings />
        </div>
      </section>
    ): null }
    </>
  )
}

export default TopTrainings

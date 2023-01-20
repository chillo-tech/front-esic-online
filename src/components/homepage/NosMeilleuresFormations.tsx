import AllTrainings from '../shared/AllTrainings';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { GiPositionMarker } from 'react-icons/gi';
import { useQuery } from 'react-query';
import { getTopTrainings } from 'services/index';
import { cn, loaderProp, slugify  } from 'utils';

function NosMeilleuresFormations() {
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
      <section className='pt-20 pb-20 bg-white' id='formations'>
        <div className="container mx-auto px-2">
          <div className="w-3/5 mx-auto py-12 bg-no-repeat bg-[right_center] bg-[url('/images/pages/trainings-light.svg')]">
            <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
              <span className='px-10 py-3'>
                Nos meilleures formations
              </span>
              <span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>
            </h2>
          </div>
          <div className="grid gap-8 pb-10 md:grid-cols-3">
            {data?.data.data
            .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
            .slice(0,3)
            .map((training:any)=> (
                <Link 
                  href={`/nos-formations/${slugify(training.libelle)}-${training.id}`}
                 className='bg-slate-50 rounded-lg shadow-md' key={training.id}>
                  {
                    training.image ? (
                      <div className='relative w-full h-72 !rounded-t-lg overflow-hidden'>
                        <div className="rounded-lg bg-black bg-opacity-30 w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm" />
                        <Image
                          fill={true}
                          src={`${process.env.API_URL}/assets/${training.image}?w=300&h=200fill=true`}
                          alt={training.libelle}
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
                      </div>
                    ): 
                    null 
                  }
                  <div className="description p-4">
                      <div className='flex justify-between mb-4 text-xl text-app-light-gray'>
                        {
                          training.niveau ? 
                            <span style={{backgroundColor: 'rgba(0, 129, 0, 0.15)'}} className="flex py-1 mr-3 pl-3 pr-5 items-center rounded-lg">
                              <span className='mr-3 bg-app-green w-4 h-4 rounded-full'></span>
                              <span>{training.niveau === "BEGINNER" ? 'Débutant': null}</span>
                              <span>{training.niveau === "INTERMEDIARY" ? 'Intermediaire': null}</span>
                              <span>{training.niveau === "ADVANCED" ? 'Avancé': null}</span>
                            </span> 
                            : 
                            null
                        }
                        {
                          training.prix ? 
                            <span className="flex items-center py-1 pr-3 text-app-blue font-bold">
                              <span>{training.prix }</span>
                            </span>
                            : 
                            null
                        }
                      </div>
                      <h3 className="my-10 title font-extrabold text-3xl h-16 text-app-light-gray">{training.libelle}</h3>
                      <ul className="items-start flex text-xl text-app-gray opacity-50">
                          {
                            data?.data.data.duree_en_jours || data?.data.data.duree_en_heures  ? 
                              <li className="flex items-center py-2 pr-3">
                                {
                                  data?.data.data.duree_en_jours ? 
                                  <span className="flex items-center pr-3">
                                    <span>{data?.data.data.duree_en_jours} Jours</span>
                                  </span>
                                  : 
                                  null
                                }{
                                  data?.data.data.duree_en_heures ? 
                                  <span className="flex items-center pr-3">
                                    <span>{data?.data.data.duree_en_heures} Heures</span>
                                  </span>
                                  : 
                                  null
                                }
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
                              Eligible au CPF
                            </li> 
                            : 
                            null
                          }
                      </ul>
                  </div>
                </Link>
            ))}
          </div>
          <AllTrainings
              text={"Contactez nous"}
              classes='border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue'
          />
        </div>
      </section>
    ): null }
    </>
  )
}

export default NosMeilleuresFormations

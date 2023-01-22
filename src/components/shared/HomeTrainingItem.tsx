import classNames from 'classnames';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { GiPositionMarker } from 'react-icons/gi';
import { capitalize, cn, loaderProp, slugify  } from 'utils';

function HomeTrainingItem({training, classes, link = "#",displayTitle=true}: any) {
  const [isImageLoading, setLoading] = useState(true);

  return (
    <>
      <Link
        href={link}
        className={classNames('block flex flex-col justify-between', classes)}
        key={training.id}
      >
        <div>
          {
            training.image ? (
              <div className='relative w-full h-72 !rounded-t-lg overflow-hidden'>
                <div className="rounded-lg bg-black bg-opacity-30 w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm" />
                <Image
                  fill={true}
                  src={`${process.env.API_URL}/assets/${(training.image && training?.image.filename_disk) ? training?.image.filename_disk : training?.image}?w=300&h=200fill=true`}
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
          <div className='flex justify-between mb-4 text-xl text-app-light-gray p-4'>
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
          {displayTitle ? (
            <h2 className="my-10 px-4 title font-extrabold text-2xl min-h-16 text-app-light-gray">
              {capitalize(training.libelle)}
            </h2>) 
            : 
          null } 
        </div>
          
        <ul className="items-start grid text-xl text-app-gray opacity-50 px-4">
            {
              training.duree_en_jours || training.duree_en_heures  ? 
                <li className="flex items-center py-2 pr-3">
                  {
                    training.duree_en_jours ? 
                    <span className="flex items-center pr-3">
                      <span>{training.duree_en_jours} Jours</span>
                    </span>
                    : 
                    null
                  }{
                    training.duree_en_heures ? 
                    <span className="flex items-center pr-3">
                      <span>{training.duree_en_heures} Heures</span>
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
                {/*<GiPositionMarker className="mr-2 text-red-400 text-xl"/> */}
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
      </Link>
    </>
  )
}

export default HomeTrainingItem

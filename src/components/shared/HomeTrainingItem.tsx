import classNames from 'classnames';
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { capitalize, cn, loaderProp } from 'utils';
import Localisation from './Localisation';

function HomeTrainingItem({ training, classes, link = "#", displayTitle = true, displayInfos = true }: any) {
  const [isImageLoading, setLoading] = useState(true);
  return (
    <>
      <Link
        href={link}
        className={classNames('md:block flex items-center md:items-stretch md:flex-col md:bg-gray-white p-1.5 md:p-0', classes)}
        key={training.id}
      >
          {
            training.image ? (
              <div className='relative w-1/3 md:w-full md:basis-full grow-0 shrink-0 h-28 md:h-60 !rounded-t-lg overflow-hidden'>
                {
                  (training?.cpf && training?.cpf.length) ?
                    <p className="absolute right-0 bottom-0 z-40 md:w-14 md:h-14 w-8 h-8">
                      <Image
                        fill={true}
                        src={`/images/logo-cpf.png`}
                        alt={training.libelle}
                      />
                    </p>
                    :
                    null
                }
                <div className="rounded-lg w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm" />
                <Image
                  fill={true}
                  src={`${process.env.API_URL}/assets/${(training.image && training?.image.filename_disk) ? training?.image.filename_disk : training?.image}?w=300&h=200fill=true`}
                  alt={training.libelle}
                  loader={loaderProp}
                  unoptimized
                  className={cn(
                    'rounded-lg relative object-fill duration-700 ease-in-out !rounded-t-sm',
                    isImageLoading
                      ? 'scale-110 blur-2xl grayscale'
                      : 'scale-100 blur-0 grayscale-0'
                  )}
                  onLoadingComplete={() => setLoading(false)}
                />
              </div>
            ) :
              null
          }
          <div className='w-2/3 md:w-full description md:px-4 ml-2 md:ml-0 pl-2'>
            {(training.niveau || training.prix) ? (
              <div className='flex items-center justify-between text-xs	md:text-xl text-app-light-gray mt-2 md:pt-0'>
                {
                  training.niveau ?
                    <span style={{ backgroundColor: 'rgba(0, 129, 0, 0.15)' }} className="flex py-1 md:py-2 mr-3 pl-3 pr-3 md:pr-5 items-center rounded-lg text-sm">
                      <span className='mr-2 bg-app-green w-4 h-4 rounded-full' />
                      <span>{training.niveau === "BEGINNER" ? 'Débutant' : null}</span>
                      <span>{training.niveau === "INTERMEDIARY" ? 'Intermediaire' : null}</span>
                      <span>{training.niveau === "ADVANCED" ? 'Avancé' : null}</span>
                    </span>
                    :
                    null
                }
                {
                  training.prix ?
                    <span className="flex flex-col items-end justify-center py-1 pr-3 text-app-blue font-bold">
                      <span className="text-xs">A partir de</span>
                      <span>{training.prix}</span>
                    </span>
                    :
                    null
                }
              </div>
            ) : null}
            {displayTitle ? (
                <h2 className="my-1 py 1 title font-bold  text-md md:text-xl text-app-light-gray">
                  {capitalize(training.libelle)}
                </h2>
              )
            :
            null}
            
              <Localisation localisation={training.localisation} classes="hidden md:block text-sm text-app-gray"/>
              {
                (training?.cpf || training?.jours || training?.heures)
                  ? (
                    <ul className={classNames("items-start text-app-gray opacity-50 py-2", { 'hidden': !displayInfos })}>
                      {
                        training.jours || training.heures ?
                          <li className="flex items-center font-light text-sm">
                            {
                              training.jours ?
                                <span className="flex items-center pr-3">
                                  <span>{training.jours} Jours({training.jours * 7} Heures)</span>
                                </span>
                                :
                                null
                            }
                          </li>
                          :
                          null
                      }
                      {
                        (training?.cpf && training?.cpf.length) ?
                          <li className="flex items-center text-sm font-light">
                            {capitalize("Eligible au CPF")}
                          </li>
                          :
                          null
                      }
                    </ul>)
                  : null
              }
          </div>
      </Link>
    </>
  )
}

export default HomeTrainingItem

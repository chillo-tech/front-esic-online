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
        className={classNames('flex flex-col justify-between bg-gray-white', classes)}
        key={training.id}
      >
        <div>
          {
            training.image ? (
              <div className='relative w-full h-40 md:h-60 !rounded-t-lg overflow-hidden'>
                {
                  (training?.cpf && training?.cpf.length) ?
                    <p className="absolute right-0 bottom-0 z-40 w-14 h-14">
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
          <>
            {(training.niveau || training.prix) ? (
              <div className='flex justify-between text-xl text-app-light-gray pt-4 px-4'>
                {
                  training.niveau ?
                    <span style={{ backgroundColor: 'rgba(0, 129, 0, 0.15)' }} className="flex py-1 mr-3 pl-3 pr-5 items-center rounded-lg text-sm">
                      <span className='mr-3 bg-app-green w-4 h-4 rounded-full' />
                      <span>{training.niveau === "BEGINNER" ? 'Débutant' : null}</span>
                      <span>{training.niveau === "INTERMEDIARY" ? 'Intermediaire' : null}</span>
                      <span>{training.niveau === "ADVANCED" ? 'Avancé' : null}</span>
                    </span>
                    :
                    null
                }
                {
                  training.prix ?
                    <span className="flex items-center py-1 pr-3 text-app-blue font-bold">
                      <span>{training.prix}</span>
                    </span>
                    :
                    null
                }
              </div>
            ) : null}
          </>
          {displayTitle ? (
            <h2 className="my-1 px-4 py 1 title font-bold text-xl text-app-light-gray">
              {capitalize(training.libelle)}
            </h2>
          )
            :
            null}
        </div>
        {
          (training?.cpf || training?.jours || training?.heures)
            ? (
              <ul className={classNames("items-start text-app-gray opacity-50 px-4 py-2", { 'hidden': !displayInfos })}>
                {
                  (training?.cpf && training?.cpf.length) ?
                    <li className="flex items-center text-sm font-light">
                      {capitalize("Eligible au CPF")}
                    </li>
                    :
                    null
                }
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
              </ul>)
            : null
        }
        <Localisation localisation={training.localisation} classes="pl-3 pb-2 text-sm text-app-gray"/>
      </Link>
    </>
  )
}

export default HomeTrainingItem

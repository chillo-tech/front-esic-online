import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { capitalize, cn, loaderProp, LOCATION_MAPPING } from 'utils';

function HomeTrainingItemMobile({
  training,
  classes,
  link = '#',
  displayTitle = true,
}: any) {
  const [isImageLoading, setLoading] = useState(true);
  return (
    <>
      <Link
        href={link}
        className={classNames('flex flex-col justify-between', classes)}
        key={training.id}>
        <div className="grid mt-4 grid-flow-col">
          {training.image ? (
            <div className="!rounded-t-lg h-24 md:h-64 overflow-hidden relative w-24">
              <div className="rounded-lg w-full h-full absolute left-0 top-0 bottom-0 right-0 z-20 !rounded-t-sm" />
              <Image
                fill={true}
                src={`${process.env.API_URL}/assets/${
                  training.image && training?.image.filename_disk
                    ? training?.image.filename_disk
                    : training?.image
                }?w=300&h=200fill=true`}
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
          ) : null}
          <>
            {training.niveau || training.prix ? (
              <div className="col-span-7 flex flex-col justify-between pt-4 px-2 text-app-light-gray text-sm">
                {displayTitle ? (
                  <h2 className="mb-2 title font-extrabold text-md text-app-light-gray">
                    {capitalize(training.libelle)}
                  </h2>
                ) : null}
                <div className='flex items-center justify-between w-full'>
                  {training.niveau ? (
                    <span
                      style={{ backgroundColor: 'rgba(0, 129, 0, 0.15)' }}
                      className="flex py-1 mr-3 pl-3 pr-5 items-center rounded-lg">
                      <span className="mr-3 bg-app-green w-4 h-4 rounded-full"></span>
                      <span>
                        {training.niveau === 'BEGINNER' ? 'Débutant' : null}
                      </span>
                      <span>
                        {training.niveau === 'INTERMEDIARY'
                          ? 'Intermediaire'
                          : null}
                      </span>
                      <span>
                        {training.niveau === 'ADVANCED' ? 'Avancé' : null}
                      </span>
                    </span>
                  ) : null}
                  {training.prix ? (
                    <span className="flex items-center pl-1 text-app-blue font-bold">
                      <span>{training.prix}</span>
                    </span>
                  ) : null}
                </div>
              </div>
            ) : null}
          </>
        </div>
      </Link>
    </>
  );
}

export default HomeTrainingItemMobile;

import AllTrainings from 'components/shared/AllTrainings';
import CPFLink from 'components/shared/CPFLink';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { capitalize, cn, loaderProp, slugify } from 'utils';

function Header({ training, toogleDownloadForm }: any) {
  console.log(training);
  const [isImageLoading, setLoading] = useState(true);

  return (
    <>
      {training ? (
        <header className="bg-app-blue py-2 md:py-12">
          <div className="md:px-0 container grid md:grid-cols-2">
            <div className="title">
              <div className="w-full mb-4">
                <h1 className="text-gray-300 text-sm md:text-3xl font-bold mb-2">
                  Formations {'>'}{' '}
                  {training?.souscategories &&
                    training?.souscategories[0]?.souscategories_id?.libelle}
                </h1>
                <div className="md:hidden w-full">
                  <div>
                    {training.image ? (
                      <div className="relative w-full h-44 !rounded-t-lg overflow-hidden">
                        <div className="rounded-lg w-full h-44" />
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
                            'rounded-lg absolute object-fill duration-700 ease-in-out !rounded-t-sm',
                            isImageLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
              <h1 className="text-white text-2xl md:text-5xl font-bold mb-0 pb-0">
                {training?.libelle}
              </h1>
              {training?.contenu ? (
                <RenderHtmlContent
                  content={training?.contenu}
                  classes="text-white font-light text-lg py-8"
                />
              ) : null}
              <div className="flex mb-4 items-center">
                <span className="font-semibold mr-2 text-xs md:text-lg">
                  4.7
                </span>
                <div className="flex items-center">
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-5`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-5`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-5`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    values={'4'}
                    key={`moyenne-5`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-5`}
                  />
                </div>
                <span className="font-semibold ml-2 text-xs md:text-lg">
                  (622 notes) 5 661 participants
                </span>
              </div>
              <div>
                {training.niveau || training.prix ? (
                  <div className="flex justify-between mb-4 text-xl">
                    {training.niveau ? (
                      <span className="flex bg-app-green mr-3 pr-5 text-white items-center rounded-lg">
                        <span className="ml-3 mr-3 bg-white w-2 h-2 rounded-full"></span>
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
                      <span className="flex items-center text-2xl py-1 pr-3 text-white font-bold">
                        <span>{training.prix}</span>
                      </span>
                    ) : null}
                  </div>
                ) : null}
              </div>
              <div className="flex items-center flex-row gap-2 md:items-end">
                <AllTrainings
                  training={training}
                  icon={false}
                  link={`/nos-formations/votre-candidature?formation=${slugify(
                    training.libelle
                  )}-${training.id}`}
                  text="Je m'inscris"
                  classes=" bg-white w-full text-app-blue font-light md:px-20 py-3 border hover:bg-transparent hover:text-white hover:border hover:border-white"
                />
                {training.programmepdf ? (
                  <button
                    type="button"
                    onClick={toogleDownloadForm}
                    className="text-white w-full mr-2 md:mr-0 md:mt-0 md:px-4 text-xs md:text-sm justify-center items-center uppercase py-3 rounded-lg relative border border-app-white hover:bg-white hover:text-app-blue">
                    Je télécharge le programme
                  </button>
                ) : null}
              </div>

              <CPFLink data={training.cpf} />

              <div className="text-white mt-4 text-xs md:text-lg font-semibold flex items-center justify-evenly w-full">
                <span className="block border-b-2 border-white">
                  Nos prochaines sessions
                </span>
                <span className="block border-b-2 border-white">
                  <Link href={'/contactez-nous'}>
                    <span>Comment financer la formation ?</span>
                  </Link>
                </span>
              </div>
            </div>
            <span />
          </div>
        </header>
      ) : null}
    </>
  );
}

export default Header;

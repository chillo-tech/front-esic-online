import AllTrainings from 'components/shared/AllTrainings';
import CPFLink from 'components/shared/CPFLink';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import { Accordion } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { capitalize, cn, getDisplayedDate, loaderProp, slugify } from 'utils';

function Header({ training, toogleDownloadForm }: any) {
  console.log(training);
  const [hideSessions, setHideSessions] = useState(true)
  const [isImageLoading, setLoading] = useState(true);

  return (
    <>
      {training ? (
        <header className="bg-app-blue py-2 pb-0 md:py-12">
          <div className="md:px-0 container grid md:grid-cols-2">
            <div className="title">
              <div className="w-full mb-4">
                <h1 className="text-gray-300 text-sm md:text-2xl font-extralight mb-2">
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
                    key={`moyenne-1`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-2`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-3`}
                  />
                  <AiFillStar
                    className="text-2xl text-yellow-400"
                    key={`moyenne-4`}
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
                  classes="flex-1 bg-white w-full text-app-blue font-light md:px-20 py-3 border hover:bg-transparent hover:text-white hover:border hover:border-white"
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

              <div className="md:hidden relative text-white mt-4 text-lg font-semibold flex items-center justify-center w-full">
                <span className="block border-b-2 border-white">
                  <Link href={'/contactez-nous'}>
                    <span>Comment financer la formation ?</span>
                  </Link>
                </span>
              </div>
            </div>
            <span />
          </div>
          <div className="md:hidden h-full mb-0 w-full mx-auto mt-4">
            <Accordion
              arrowIcon={() => null}
              alwaysOpen={true}
              className="bg-transparent border-none focus:border-none outline-none">
              <Accordion.Panel isOpen={false} className="bg-transparent px-0 border-none focus:border-none">
                <Accordion.Title
                onClick={() => setHideSessions(!hideSessions)}
                  color="white"
                  className="px-0 focus:ring-transparent focus:ring-0 focus:border-none text-center"
                  style={{
                    height: '1rem',
                    border: 'none',
                    borderBottom: 'none',
                    borderRadius: 0,
                    backgroundColor: 'transparent',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem',
                  }}>
                  <span className="block border-b-2 border-white mx-0 px-0 h-full w-full justify-center text-white text-lg">
                    Nos prochaines sessions
                  </span>
                </Accordion.Title>
                <Accordion.Content
                hidden={hideSessions}
                  style={{
                    borderRadius: 0,
                    border: 'none',
                  }}
                  className="px-2 h-full focus:ring-transparent focus:ring-0 focus:border-none bg-white">
                  {training?.sessions?.map((item: any, index: number) =>
                    Date.parse(item?.sessions_id.debut) >= Date.now() ? (
                      <div
                        className="bg-white py-2 w-full shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-[rgba(1,129,0)]"
                        key={`session-${index}`}>
                        <p className="mb-0">
                          Du {getDisplayedDate(item.sessions_id.debut)}
                        </p>
                        <p className="mb-0">
                          Au {getDisplayedDate(item.sessions_id.fin)}
                        </p>
                      </div>
                    ) : null
                  )}
                </Accordion.Content>
              </Accordion.Panel>
            </Accordion>
          </div>
        </header>
      ) : null}
    </>
  );
}

export default Header;

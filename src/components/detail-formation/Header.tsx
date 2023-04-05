import AllTrainings from 'components/shared/AllTrainings';
import CPFLink from 'components/shared/CPFLink';
import Rating from 'components/shared/Rating';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import React, { useState } from 'react';
import { capitalize, EMPTY_SESSION, getDisplayedDate, slugify } from 'utils';
import AppBreadcrumb from 'components/shared/AppBreadcrumb';
import DisplayImage from 'components/shared/DisplayImage';
import TrainingLevel from 'components/shared/TrainingLevel';
import TrainingPrice from 'components/shared/TrainingPrice';
import classNames from 'classnames';
import Link from 'next/link';
import TrainingLocalisation from 'components/shared/TrainingLocalisation';
import ContactUsText from 'components/shared/ContactUsText';

function Header({ training, toogleDownloadForm }: any) {
  const [displaySessions, setDisplaySessions] = useState(false)
  return (
    <>
    <header className="bg-app-blue py-4 md:py-2 text-white text-sm !md:text-lg">
      <AppBreadcrumb />
      <div className="container grid md:grid-cols-7">
          <div className="md:col-span-4">
            <DisplayImage
                image={training.image}
                libelle={training.libelle}
                wrapperClasses='h-52 mt-2 rounded-lg md:hidden'
                imageClasses = 'object-contain'
            />
            <h1 className="text-2xl md:text-5xl mb-0 pb-0 font-normal leading-7 mt-2">
              {capitalize(training?.libelle)}
            </h1>
            <RenderHtmlContent
                content={training?.contenu}
                classes="leading-6 py-2 md:text-lg"
            />
              <p className='text-xs md:text-lg grid grid-cols-5 items-center font-semibold'>
                  {
                      training.jours?
                          <span className="col-span-2">{training.jours} Jours({training.jours * 7} Heures)</span>
                          :
                          null
                  }
                <Rating
                    classes="col-span-3 items-end justify-end text-right"
                    rate="4.7"
                    label="(622 notes)"
                    displayRate={true}
                    displayLabel={true}
                    isDecimal={4.7 % 1 != 0}
                />
              </p>
            <div className="flex justify-between items-center my-2 md:hidden">
              <TrainingLevel level={training.niveau}/>
              <TrainingPrice price={training.prix}/>
            </div>
            <CPFLink data={training.cpf} classes="bg-app-green"/>
            <div className={
                classNames(
                    'grid grid-cols-2 my-4 items-center',
                    { 'gap-2' : training.programmepdf}
                )
            }>
              <AllTrainings
                  text="Je m'inscris"
                  classes="white-button !px-0 text-center h-9 md:py-2 md:h-auto"
                  icon={false}
                  link={`/nos-formations/votre-candidature?formation=${slugify(
                      training.libelle
                  )}-${training.id}`}
                  containerClasses={
                    classNames(
                        '!px-0 block',
                        { 'w-full' : training.programmepdf}
                    )
                  }

              />
              { training.programmepdf ? (
                  <button
                      type="button"
                      onClick={toogleDownloadForm}
                      className="outline-white-button text-[10px] !px-0 h-9 md:py-2 h-full items-center justify-center text-center text-lg">
                    Je télécharge le programme
                  </button>
              ) : null}

            </div>
            <div className="grid grid-cols-2 gap-2 items-center justify-center md:hidden">
              <button
                onClick={() => setDisplaySessions(!displaySessions)}
                  type="button"
                  className={classNames(
                      'block flex justify-center items-center text-xs md:text-lg py-2 md:py-0'
                  )}>
                <span className="underline">Nos prochaines sessions</span>
              </button>
              <Link
                  href="/financements"
                  type="button"
                  className={classNames(
                      'flex justify-center items-center text-xs md:text-lg py-2 md:py-0'
                  )}>
                <span className="underline text-center">Comment financer cette formation ? </span>
              </Link>
            </div>
              <TrainingLocalisation localisations={training.localisation} classes="md:hidden"/>
            </div>
          </div>
      </header>
       { displaySessions ? (
        <>
          { training.sessions && training.sessions.length ? (
            <div className="md:hidden px-5 pt-5">
              <div className="sessions">
                {training?.sessions
                .filter((session: any) => session.sessions_id !=null)
                .slice(0,6)
                .sort((a: any, b: any) => new Date(a.sessions_id.debut).getTime() - new Date(b.sessions_id.debut).getTime())
                .map((item: any, index: number) =>
                  Date.parse(item?.sessions_id.debut) >=
                  Date.now() ? (
                    <div
                      className="shadow-md bg-white mb-2 py-2 shadow-xs text-slate-600 mb-3 px-2 border-l-8 border-app-green"
                      key={`mobile-session-${training.slug}-${index}`}>
                      <p className="mb-0">
                        Du {getDisplayedDate(item.sessions_id.debut)}
                      </p>
                      <p className="mb-0">
                        Au {getDisplayedDate(item.sessions_id.fin)}
                      </p>
                    </div>
                  ) : null
                )}
              </div>
            </div>
          ) : (
            <div className="bg-app-light-green px-5">
              <p className="text-center">{EMPTY_SESSION}</p>
              <ContactUsText classes="justify-center" />
            </div>
          )}
        </>
       ) : null }
      
      </>
  );
}

export default Header;

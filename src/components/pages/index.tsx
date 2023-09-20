import AllTrainings from 'components/shared/AllTrainings';
import Articles from 'components/shared/Articles';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import Trainings from 'components/trainings';
import PageItem from './PageItem';
import OpenedLayout from 'containers/opened';
import React from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { getDisplayedDate } from 'utils/DateFormat';
import Certifications from 'components/pages/Certifications';
import FormulaireEntreprise from 'components/formulaires/FormulaireEntreprise';
import Participants from 'components/indicateurs/Participants';
import Satisfactions from 'components/indicateurs/Satisfactions';
import { Tab } from '@headlessui/react';
import classNames from 'classnames';

function Page({ data, sessions, displayTrainings = false }: any) {
  return (
    <OpenedLayout>
      <section className="bg-white">
        <PageHeader data={data} />
        <h2 className="font-bold text-3xl md:text-5xl text-center flex flex-col justify-center items-center">
          <span className="px-10 pt-10">{data.libelle}</span>
          <span className="border-b-2 border-app-blue px-10 w-64 mt-2" />
        </h2>
        {data.description ? (
          <div className="container pb-12">
            <RenderHtmlContent classes="text-lg my-3" content={data.description} />
            {data.formulaire ? null : (
              <AllTrainings
                text={'Contactez nous'}
                link="/contactez-nous"
                classes="outline-blue-button"
              />
            )}
          </div>
        ) : null}
        {data.pages && data.pages.length ? (
          <>
            {data.pages.map((page: any, index: number) => (
              <PageItem data={page} key={`${page.id}-${index}`} index={index} />
            ))}
          </>
        ) : null}
        {data.certifications && data.certifications.length ? (
          <Certifications data={data.certifications} />
        ) : null}
        {data.articles && data.articles.length ? (
          <section className="grid bg-slate-100 ">
            <div className="container">
              <Articles data={data.articles} />
            </div>
          </section>
        ) : null}
        {displayTrainings ? (
          <section className="bg-white">
            <Trainings title="Formations éligibles au CPF" />
            <div className="container pb-5">
              <AllTrainings classes="outline-blue-button" />
            </div>
          </section>
        ) : null}
        {sessions && sessions.length ? (
          <>
            <section className="px-2 mx-auto py-10 bg-app-blue">
              <div className="container">
                <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
                  <span className="px-10 py-3 text-white">Toutes nos sessions</span>
                  <span className="border-b-2 border-white px-10 w-64 mt-2" />
                </h2>
                {sessions.map((session: any) => (
                  <article
                    key={session.id}
                    className=" md:py-5 py-10 text-lg grid items-center mb-3 bg-white px-6 md:grid-cols-7 rounded-lg text-gray-700"
                  >
                    <h2 className="py-2 text-green-700 md:col-span-4 font-extrabold text-center md:text-left">
                      {session.libelle}
                    </h2>
                    <div className="py-2 dates md:col-span-2 items-center md:items-start flex flex-col">
                      <p className="flex items-center">
                        <AiOutlineCalendar className="mr-1" />
                        Du {getDisplayedDate(session.debut)}
                      </p>
                      <p className="flex items-center">
                        <AiOutlineCalendar className="mr-1" />
                        Au {getDisplayedDate(session.fin)}
                      </p>
                    </div>
                    <p className="py-2 items-center justify-center flex">
                      <AllTrainings
                        text={'Je suis intéressé(e)'}
                        link={
                          data?.formulaire === 'candidat' || data?.formulaire === 'entreprise'
                            ? '#section-formulaire'
                            : '/contactez-nous'
                        }
                        icon={false}
                        classes="!text-center !text-xs outline-blue-button"
                      />
                    </p>
                  </article>
                ))}
                <AllTrainings
                  text={'Contactez nous'}
                  link={'/contactez-nous'}
                  classes="outline-white-button"
                />
              </div>
            </section>
          </>
        ) : null}
      </section>
      {(data?.formulaire === 'candidat' || data?.formulaire === 'entreprise') && (
        <FormulaireEntreprise formulaire={data.formulaire} />
      )}
      {data?.indicateurs ? (
        <div className="container">
          <div className="w-full px-2 py-16">
            <Tab.Group>
              <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-xl font-light leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  Participants
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames(
                      'w-full rounded-lg py-2.5 text-xl font-light leading-5 text-blue-700',
                      'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                      selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                  }
                >
                  Satisfactions
                </Tab>
              </Tab.List>
              <Tab.Panels className="mt-2">
                <Tab.Panel
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <Participants />
                </Tab.Panel>
                <Tab.Panel
                  className={classNames(
                    'rounded-xl bg-white p-3',
                    'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
                  )}
                >
                  <Satisfactions />
                </Tab.Panel>
              </Tab.Panels>
            </Tab.Group>
          </div>
        </div>
      ) : null}
    </OpenedLayout>
  );
}

export default Page;

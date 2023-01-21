import AllTrainings from 'components/shared/AllTrainings'
import Articles from 'components/shared/Articles'
import PageHeader from 'components/shared/PageHeader'
import RenderHtmlContent from 'components/shared/RenderHtmlContent'
import Trainings from 'components/trainings'
import OpenedLayout from 'containers/opened/index.back'
import Link from 'next/link'
import React from 'react'
import { AiOutlineCalendar } from 'react-icons/ai'
import { getDisplayedDate } from 'utils/DateFormat'

function Page({data,sessions, displayTrainings = false}: any) {
  return (
    <OpenedLayout>
      <section className="bg-green-800 bg-opacity-10">
        <PageHeader data={data}/>
        {
          (data.description)? (
            <div className='container'>
              <RenderHtmlContent classes='text-xl mb-4 py-14' content={data.description}/>
            </div>
          )
          : null 
        }
        {
          (data.articles && data.articles.length)? (
            <section className='grid bg-slate-100 '>
              <div className='container'>
                <Articles data={data.articles}/>
              </div>
            </section>
          )
          : null 
        }
        {
          displayTrainings ? (
            <section className="bg-white">
              <Trainings title = "Formations éligibles au CPF"/>
              <div className="container pb-5">
                <AllTrainings classes='border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue'/>
              </div>
            </section>
          ): null
        }
        {
          sessions && sessions.length
          ? (
            <>
              <section className='px-2 mx-auto container py-10'>
                <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                    Toutes nos sessions
                </h2>
                {
                  sessions.map((session: any) => (
                    <article key={session.id} className=" md:py-5 py-10 text-lg grid items-center mb-3 bg-white px-6 md:grid-cols-7 rounded-lg text-gray-700">
                      <h2 className='py-2 text-green-700 md:col-span-4 font-extrabold text-center md:text-left'>{session.libelle}</h2>
                      <div className="py-2 dates md:col-span-2 items-center md:items-start flex flex-col">
                        <p className='flex items-center'><AiOutlineCalendar className="mr-1" />Du {getDisplayedDate(session.debut)}</p>
                        <p className='flex items-center'><AiOutlineCalendar className="mr-1" />Au {getDisplayedDate(session.fin)}</p>
                      </div>
                      <p className='py-2 items-center justify-center flex'>
                        <Link
                            href="/contactez-nous"
                            className="py-3 px-2 text-white text-center bg-secondary rounded-full"
                          >
                            Je suis intéressé(e)
                        </Link>
                      </p>
                    </article>
                  ))
                }
                <AllTrainings
                    text={"Contactez nous"}
                    link="/contactez-nous"
                    classes='border border-app-blue text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue'
                />
              </section>
            </>
          ): null
        }
      </section>
    </OpenedLayout>
  )
}

export default Page

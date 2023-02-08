import ContactUsText from 'components/shared/ContactUsText';
import PageHeader from 'components/shared/PageHeader';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { getDisplayedDate } from 'utils/DateFormat';

function POE({id}: {id: string}) {
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait,*,*.*';
  const categories = 'categories.categories_id.id,categories.categories_id.libelle';
  const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
  //const pagesSessions = 'pages.pages_id.sessions.*';
  const pagesSessions = 'sessions.*';
  const fields=`${base}`
  const [sessions, setSessions] = useState([]);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["POE=", id],
    queryFn: () => fetchData({path: `menus/${id}`, fields}), 
    onSuccess: ({data}: any) => {
      const pages = data?.data.pages;
      if(pages && pages.length) {
        if(pages[0].pages_id.sessions && pages[0].pages_id.sessions.length){
          setSessions(pages[0].pages_id.sessions);
        }
      }
    }
  });
  return (
    <OpenedLayout>
     
      {
        isSuccess ? (
          <section className="px-2">
           <PageHeader data={data?.data.data}/>

            {
              sessions && sessions.length
              ? (
                <>
               
                <section className='px-2 mx-auto container pt-10'>
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
                </section>
                </>
              ): null
            }
            <div className="flex items-end justify-end px-2 py-3 mb-4 mx-auto container !text-blue-900">
              <ContactUsText />
            </div>
          </section>
        ) : null
      }
    </OpenedLayout>
  )
}

export default POE
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}

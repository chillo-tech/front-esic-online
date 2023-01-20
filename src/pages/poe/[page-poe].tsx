import ContactUsText from 'components/shared/ContactUsText';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { getDisplayedDate } from 'utils/DateFormat';

function POE({id}: {id: string}) {
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait,*';
  const categories = 'categories.*';
  const pages = 'pages.*';
  const articles = 'articles.*';
  const pagesSessions = 'sessions.*';
  const fields=`${base},${categories},${pages},${pagesSessions},${articles}`
  const [sessions, setSessions] = useState([]);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["POE==", id],
    queryFn: () => fetchData({path: `pages/${id}`, fields}), 
    onSuccess: ({data}: any) => {
      const pages = data?.data;
      if(pages) {
        if(pages.sessions && pages.sessions.length){
          setSessions(pages.sessions);
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
           {data?.data.data.description ? (
             <section className="bg-green-800 bg-opacity-10">
              <div className='container'>
                <RenderHtmlContent classes='text-xl mb-4 py-14' content={data?.data.data.description}/>
              </div>
             </section>
            ) : null }
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
  const { params } = context;
  const id = params['page-poe'].substring(params['page-poe'].lastIndexOf("-") + 1);
  const libelle = params['page-poe'].substring(
    0,
    params['page-poe'].lastIndexOf("-")
  );
  return { props: { ...params, id, libelle, link: params['page-poe'] } };
}

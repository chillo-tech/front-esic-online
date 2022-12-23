import Debug from 'components/Debug';
import AllTrainings from 'components/shared/AllTrainings';
import ContactUsText from 'components/shared/ContactUsText';
import Trainings from 'components/trainings';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import Image from 'next/image';
import Link from 'next/link';
import React, { useContext, useState } from 'react'
import { AiOutlineCalendar } from 'react-icons/ai';
import { useQuery } from 'react-query';
import { read } from 'services/index';
import { getDisplayedDate } from 'utils/DateFormat';
import { cn, loaderProp } from 'utils/image-loader';

function CompteFormationCpf({id}: {id: string}) {
  const {updateSearchPrams} = useContext(ApplicationContext);
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data,
  } = useQuery<any>({
    queryKey: ["CompteFormationCpf", id],
    queryFn: () =>
      read({
        path: `page/${id}`,
        fields: '*, sessions.*'
      }),
      onSuccess: () => updateSearchPrams({path: 'formations', title: "Formations éligibles au CPF"})
  });
  return (
    <OpenedLayout>
     
      {
        isSuccess ? (
          <section className="px-2">
            <header className="grid bg-red-50 md:grid-cols-2 items-center text-gray-700">
              <article className='px-5 md:px-24 py-10 md:py-0'>
                  <div className="flex text-xl font-extralight">
                    {data?.data.data.souslibelle}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold">
                    {data?.data.data.libelle}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.data.data.description,
                    }}
                    className="my-5 text-xl font-extralight " />
              </article>
              <div className="relative hidden md:block" style={{height: '500px'}}>
              <div className="bg-black opacity-30 w-full absolute left-0 top-0 bottom-0 right-0 z-20" />
                      <Image
                        fill={true}
                        src={`${process.env.API_URL}/assets/${data?.data.data.image}`}
                        alt={data?.data.data.libelle}
                        loader={loaderProp}
                        unoptimized
                        className={cn(
                          'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                          isImageLoading
                            ? 'scale-110 blur-2xl grayscale'
                            : 'scale-100 blur-0 grayscale-0'
                        )}
                        onLoadingComplete={() => setLoading(false)}
                      />
              </div>
            </header>
            {
              data.data.data.sessions && data.data.data.sessions.length
              ? (
                <>
               
                <section className='px-2 mx-auto container pt-10'>
                  <h2 className="text-2xl md:text-4xl font-extrabold mb-4">
                      Toutes nos sessions
                  </h2>
                  {
                    data.data.data.sessions.map((session: any) => (
                      <article key={session.id} className=" md:py-5 py-10 text-lg grid items-center mb-3 bg-slate-100 px-6 md:grid-cols-7 rounded-lg text-gray-700">
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
            <div className="flex items-end justify-end px-2 mx-auto container !text-blue-900">
              <ContactUsText />
            </div>
          </section>
        ) : null
      }
    </OpenedLayout>
  )
}

export default CompteFormationCpf
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}

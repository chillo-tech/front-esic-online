import Debug from 'components/Debug';
import AllTrainings from 'components/shared/AllTrainings';
import Trainings from 'components/trainings';
import OpenedLayout from 'containers/opened'
import { ApplicationContext } from 'context/ApplicationContext';
import Image from 'next/image';
import React, { useContext, useState } from 'react'
import { useQuery } from 'react-query';
import { read } from 'services/index';
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
        fields: '*'
      }),
      onSuccess: () => updateSearchPrams({path: 'formations', title: "Formations éligibles au CPF"})
  });
  return (
    <OpenedLayout>
     
      {
        isSuccess ? (
          <section className="px-2">
            <header className="grid bg-slate-100 md:grid-cols-2 items-center text-gray-700">
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
              <div className="relative hidden md:block" style={{height: '450px'}}>
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
            <Trainings title = "Formations éligibles au CPF"/>
            <AllTrainings />
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

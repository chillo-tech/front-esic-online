import React, {useState} from 'react'
import {BsFillSquareFill} from 'react-icons/bs';
import {useQuery} from 'react-query';
import {fetchData} from 'services/index';
import SectionTitle from 'components/shared/SectionTitle';

function Statistiques() {
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["our-statistics"],
    queryFn: () => fetchData({
      path: 'statistiques',
      fields: 'libelle,articles.*'
    })
  });
  
  return (
    <>
        {(isSuccess && data?.data.data.articles)? (
          <section className='py-16 bg-app-light-green'>
            <SectionTitle text= {data?.data.data.libelle} />
            <div className="container">
              <div className="flex justify-center">
                <div className={`grid gap-8 md:grid-cols-3 items-center`}>
                  {data?.data.data.articles
                  .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
                  .map((item:any)=> (
                      <article className='py-4 px-0 text-right' key={item.id}>
                        <h3 className="font-semibold my-4 flex items-center justify-end">
                          <BsFillSquareFill className="text-white text-4xl text-app-blue mr-2"/>
                          <span className='text-4xl lg:text-6xl ml-5'>{item.libelle}</span>
                        </h3>
                        {/* <h4>{item.subtitle}</h4> */}
                        <div
                            className="mt-4 !font-extralight text-2xl lg:text-4xl text-right"
                            dangerouslySetInnerHTML={{__html: item.description}}
                        >
                        </div>
                      </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ): null }
    </>
  )
}

export default Statistiques

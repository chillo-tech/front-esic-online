import classNames from 'classnames';
import PageHeader from 'components/shared/PageHeader';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import OpenedLayout from 'containers/opened'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { BsArrowRightCircle } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { fetchData } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';
import { slugify } from 'utils/slugify';

function Financements({id}: any) { 
  const base = 'id,libelle,souslibelle,ordre,image,description,abstrait';
  const categories = 'categories.categories_id.id,categories.categories_id.libelle';
  const pages = 'pages.pages_id.id,pages.pages_id.libelle,pages.pages_id.image,pages.pages_id.description,pages.pages_id.abstrait';
  const fields=`${base},${categories},${pages}`
  const [isLoading, setLoading] = useState(true);

const {
  isSuccess,
  data,
} = useQuery<any>({
  queryKey: ["menus", "certifications", id],
  queryFn: () =>
    fetchData({
      path: `menus/${id}`,
      fields
    })  
  });
  return (
    <OpenedLayout>
      {
        isSuccess ? (
          <section className='bg-green-800 bg-opacity-10'>
            <PageHeader data={data?.data.data}/>
            <section className='container py-10'>
              <RenderHtmlContent classes='text-xl mb-4 py-4' content={data?.data.data.description}/>
              <div className="grid gap-2">
                {data.data.data.pages.map((page: any, index: number) => (
                    <Link key={`page-${index}-${page.id}`} className="md:items-center grid md:grid-cols-2 hover:bg-pink-800/5 bg-white relative p-5" href={`financements-cpf/${slugify(page.pages_id.libelle)}-${page.pages_id.id}`}>
                      <div className="relative w-hull h-72">
                        <Image 
                          fill={true}
                          src={`${process.env.API_URL}/assets/${page.pages_id.image}`}
                          alt={`${page.pages_id.description}`}
                          loader={loaderProp}
                          unoptimized
                          className={cn(
                            'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                            isLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                        </div>
                        <div className="image-text md:px-10">
                          <h2 className="font-extrabold text-2xl mt-4 text-blue-800">{page.pages_id.libelle}</h2>
                          <RenderHtmlContent classes='text-md py-2' content={page.pages_id.abstrait}/>

                          <p className={classNames("flex pt-5 text-blue-800")}>
                            <Link href="/contactez-nous" className='flex items-center'> 
                              <BsArrowRightCircle className='mr-2' /> 
                              En savoir plus
                            </Link>
                          </p> 
                        </div>   
                    </Link>
                  ))}
              </div>
            </section>
          </section>

        ) : null
      }
    </OpenedLayout>
  )
}

export default Financements;
export async function getServerSideProps(context: any) {
  const { query: {id} } = context;
  return { props: { id } };
}

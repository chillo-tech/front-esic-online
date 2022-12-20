import Image from 'next/image';import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { read } from 'services/index';
import { cn, loaderProp } from 'utils/image-loader';

function OurCustomers() {
  const [isImageLoading, setLoading] = useState(true);
  const {
    isSuccess,
    data
  } = useQuery<any>({
    queryKey: ["our-customers"],
    queryFn: () => read({
      path: 'nosclients',
      fields: 'libelle,articles.article_id.id,articles.article_id.libelle,articles.article_id.ordre,articles.article_id.description,articles.article_id.image'
    }),
    refetchOnWindowFocus: false,
    staleTime: 3600000, //1jour
    cacheTime: 3600000, //1jour
  });
  return (
    <>
    {(isSuccess && data?.data.data[0].articles)? (
      <section className='py-16 bg-white'>
        <div className="px-2">
          <div className={`grid gap-4 md:grid-cols-${data?.data.data[0].articles.length}`}>
            {data?.data.data[0].articles.map((training:any)=> (
                <article className='' key={training.id}>
                  {
                    training.article_id.image ? (
                      <div className='relative w-full h-52 !rounded-t-sm'>
                        <Image
                          fill={true}
                          src={`${process.env.API_URL}/assets/${training.article_id.image}?w=300&h=200fill=true`}
                          alt={training.article_id.libelle}
                          loader={loaderProp}
                          unoptimized
                          className={cn(
                            'relative object-contain duration-700 ease-in-out group-hover:opacity-75 !rounded-t-sm',
                            isImageLoading
                              ? 'scale-110 blur-2xl grayscale'
                              : 'scale-100 blur-0 grayscale-0'
                          )}
                          onLoadingComplete={() => setLoading(false)}
                        />
                      </div>
                    ): 
                    null 
                  }
                </article>
            ))}
          </div>
        </div>
      </section>
    ): null }
    </>
  )
}

export default OurCustomers

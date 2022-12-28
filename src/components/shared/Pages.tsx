import Image from 'next/image';
import Link from 'next/link';
import { cn, loaderProp } from 'utils/image-loader';
import { slugify } from 'utils/slugify';
import { BsArrowRightCircle } from 'react-icons/bs';
import classNames from 'classnames';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import React, { useState } from 'react';

function Pages({data}: any) {
  const [isLoading, setLoading] = useState(true);
  return (
    <>
    {data && data.length ? (
      <div className="grid gap-2">
        {data.map((page: any, index: number) => (
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
      ): null}
    </>
  )
}

export default Pages
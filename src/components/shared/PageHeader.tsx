import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react'
import { cn, loaderProp } from 'utils/image-loader';
import RenderHtmlContent from './RenderHtmlContent';

function PageHeader({data}: any) {
  const [isImageLoading, setLoading] = useState(true);
  return (
    <header className="grid bg-slate-100 md:grid-cols-2 items-center text-gray-700">
      <article className={ classNames(`px-5 md:px-24 py-10`, {
        'md:py-10': !data.image,
        'md:py-0': data.image
      })}>
          <div className="flex text-md font-extralight">
            {data.souslibelle}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {data.libelle}
          </h2>
          <RenderHtmlContent 
            classes="my-5 text-xl font-extralight"
            content={data.abstrait ? data.abstrait : data.description}
          />
      </article>
      {
        data.image ? (
          <div className="relative hidden md:block" style={{minHeight: '350px'}}>
          <div className="bg-black opacity-30 w-full absolute left-0 top-0 bottom-0 right-0 z-20" />
              <Image
                fill={true}
                src={`${process.env.API_URL}/assets/${data.image}?w=300&h=200fill=true`}
                alt={data.libelle}
                loader={loaderProp}
                unoptimized
                priority={true}
                className={cn(
                  'relative object-cover duration-700 ease-in-out group-hover:opacity-75',
                  isImageLoading
                    ? 'scale-110 blur-2xl grayscale'
                    : 'scale-100 blur-0 grayscale-0'
                )}
                onLoadingComplete={() => setLoading(false)}
              />
          </div>
        ) : null
      }
  </header>
  )
}

export default PageHeader
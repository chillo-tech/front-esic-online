import classNames from 'classnames';
import Image from 'next/image';
import React, { useState } from 'react'
import { cn, loaderProp } from 'utils/image-loader';

function PageHeader({data}: any) {
  const [isImageLoading, setLoading] = useState(true);
  return (
    <header className="grid bg-slate-100 md:grid-cols-2 items-center text-gray-700">
      <article className={ classNames(`px-5 md:px-24 py-10`, {
        'md:py-10': !data.image,
        'md:py-0': data.image
      })}>
          <div className="flex text-xl font-extralight">
            {data.souslibelle}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            {data.libelle}
          </h2>
          <div
            dangerouslySetInnerHTML={{
              __html: data.description,
            }}
            className="my-5 text-xl font-extralight " />
      </article>
      {
        data.image ? (
          <div className="relative hidden md:block" style={{height: '350px'}}>
          <div className="bg-black opacity-30 w-full absolute left-0 top-0 bottom-0 right-0 z-20" />
              <Image
                fill={true}
                src={`${process.env.API_URL}/assets/${data.image}?w=2000&h=1000fill=true`}
                alt={data.libelle}
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
        ) : null
      }
  </header>
  )
}

export default PageHeader
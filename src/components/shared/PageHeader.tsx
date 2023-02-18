import React from 'react'
import RenderHtmlContent from './RenderHtmlContent';
import DisplayImage from 'components/shared/DisplayImage';
import Metadata from 'components/metadata';
import CPFLink from 'components/shared/CPFLink';
import Link from 'next/link';
import { capitalize } from 'utils/index';
import {AiOutlineFilePdf} from 'react-icons/ai';
import AppBreadcrumb from 'components/shared/AppBreadcrumb';
import classNames from 'classnames';

function PageHeader({data}: any) {
  return (
    <>
    <Metadata entry={data} />
    <header className="grid bg-app-blue items-center text-white">
      <div className={classNames(
          `container md:px-0 py-10 relative`,
          {'md:min-h-[300px]': !data.abstrait && data.image},
          {'md:py-10': data.image && !data.abstrait}
      )}>          
        <AppBreadcrumb />
        <div className="grid md:grid-cols-2">
          <div>
            <p className="text-md font-extralight">
              {data.souslibelle}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white">
              {data?.libelle} {data?.nom}
            </h1>
            {
              data.abstrait ? (
                <RenderHtmlContent 
                  classes="my-5 text-xl font-extralight"
                  content={data.abstrait}
                />
              ) : null
            }
            {data.niveau || data.prix ? (
                <div className="flex justify-between mb-4 text-xl md:w-8/12">
                  {data.duree ? (
                      <span className="flex items-center text-2xl py-1 pr-3 text-white font-bold">
                        <span>{data.duree}</span>
                      </span>
                  ) : null}
                  {data.prix ? (
                      <span className="flex items-center text-2xl py-1 pr-3 text-white font-bold">
                        <span>{data.prix}</span>
                      </span>
                  ) : null}
                </div>
            ) : null}
            {(data?.cpf && data?.cpf.length) ? <CPFLink data={data.cpf} /> : null}

            {data?.fichiers && data?.fichiers.length ? (
              <article className="flex flex-col text-left my-10 md:my-0 md:w-3/5 text-center">
                {data?.fichiers.map((item: any) => (
                    <Link
                        href={`${process.env.API_URL}/assets/${item.directus_files_id.id}?download`}
                        key={`pages-${item.directus_files_id.id}`}
                        target="_blank"
                        className=" flex text-white w-full mr-2 md:mr-0 md:mt-0 md:px-4 text-xs md:text-sm justify-center items-center uppercase py-3 rounded-lg relative border border-app-white hover:bg-white hover:text-app-blue">
                      <AiOutlineFilePdf className="mr-1 text-2xl" />
                      {capitalize(item.directus_files_id.title)}
                    </Link>
                ))}
              </article>
            ): null}
          
          </div>
          <span />
        </div>
        {
          data.image ? (
            <div className="hidden md:block absolute right-0 bottom-0 image-wrapper rounded-lg w-[400px] h-[260px]">
              <DisplayImage
                  image={data.image}
                  imageClasses="object-contain"
                  libelle={`${data.libelle}`}
                  classes="rounded-2xl !overflow-hidden"
              />
            </div>
        ): null }
      </div>
    </header>
    </>
  )
}

export default PageHeader

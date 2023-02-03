import React from 'react'
import RenderHtmlContent from './RenderHtmlContent';
import DisplayImage from 'components/shared/DisplayImage';
import Metadata from 'components/metadata';

function PageHeader({data}: any) {
  return (
    <>
    <Metadata entry={data} />
    <header className="grid bg-app-blue items-center text-white">
      <div className={`container md:px-0 py-10 ${data.image ? 'md:py-16': ''} relative`}>
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
            
          </div>
          <span />
        </div>
        {
          data.image ? (
            <div className="hidden md:block absolute right-0 bottom-0 image-wrapper rounded-lg w-[300px] h-[300px]">
              <DisplayImage
                  image={data.image}
                  imageClasses="object-cover"
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

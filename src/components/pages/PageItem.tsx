import React from 'react'
import {capitalize, slugify} from 'utils';
import DisplayImage from 'components/shared/DisplayImage';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import AllTrainings from 'components/shared/AllTrainings';
function PageItem({data, index}: any) {
  return (

      <section className={`py-14 ${index%2 ===0 ? 'bg-app-light-blue': 'bg-white'}`}>
          <div className="container mx-auto flex flex-col">
              <article className="wrapper relative">
                <span className={`square bg-app-blue w-[200px] h-[200px] rounded-xl absolute bottom-0 ${index%2 ===1 ? 'right-0': 'left-0 '}`}>
                </span>
                <div className={`content grid md:grid-cols-${data.image ? 2: 1} relative mb-6  ${index%2 ===1 ? 'mr-6 justify-end': 'ml-6'}`}>
                    {
                    data.image ? (
                        <div className={`indecx-${index%2} ${index%2 === 1 ? 'order-last items-end justify-end': ''}  md:flex hidden`}>
                            <div className={`image-wrapper rounded-lg w-[400px] h-[300px] bg-white shadow-2xl`}>
                            <DisplayImage
                                image={data.image}
                                imageClasses="object-contain"
                                libelle={`${data.libelle}`}
                                classes="rounded-2xl !overflow-hidden object-corver"
                            />
                            </div>
                        </div>
                    ): null }
                  <div className={`description justify-center flex flex-col bg-white p-10 rounded-lg`}>
                      <span className={`h-1 bg-app-green w-32`} />
                      <h2 className="title font-extrabold text-3xl text-app-light-gray mt-3">
                          {capitalize(data.libelle)}
                      </h2>
                      {
                        data.souslibelle ? (
                          <h3 className="title font-semibold my-1 text-lg text-app-light-gray">
                              {capitalize(data.souslibelle)}
                          </h3>
                        ): null
                      }

                      <RenderHtmlContent
                          classes="text-lg mt-3 mb-6 line-clamp-3"
                          content={data.description}
                      />
                      <p className="py-3 flex items-center relative">
                          <AllTrainings
                              link={`/contactez-nous`}
                              text="En savoir plus"
                              classes="outline-blue-button"
                          />
                      </p>

                  </div>
                </div>
              </article>
          </div>
      </section>
  )
}

export default PageItem

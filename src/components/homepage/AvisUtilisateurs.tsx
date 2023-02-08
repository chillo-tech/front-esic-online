import Rating from 'components/shared/Rating';
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import SectionTitle from 'components/shared/SectionTitle';

function AvisUtilisateurs() {
  const {state} = useContext(ApplicationContext);
  return (  
    <>
      {
        state?.company?.avis ?(
          <section className="bg-white px-5">
            <section className="pt-20 pb-20 bg-no-repeat bg-left bg-contain bg-[url('/images/pages/offers-left-arc.svg')]">
              <SectionTitle text="Ils ont dit ..." />
              <div className="grid md:grid-cols-4 gap-6">
                {
                    state?.company?.avis
                    .sort((a: any, b:any) => a.moyenne > b.moyenne ? -1 : 1)
                    .slice(0, 4).map((avis: any, index: number) => (
                        <article
                            key={`adresse-${avis.id}-${index}`}
                            className="flex flex-col mb-3 text-xl shadow-md justify-between rounded-xl p-5 border border-gray-200"
                        >
                          <RenderHtmlContent content={avis.message} classes="text-lg"/>
                          <div className="flex flex-col mt-3">
                            <Rating rate={avis.moyenne} />
                            <div className='text-left py-2'>{avis?.formation?.libelle}</div>
                            <div className='text-left font-bold '>{avis?.etudiant}</div>
                          </div> 
                        </article>
                    ))
                }
              </div>
            </section>
          </section>
        ) : null
      }
    </>    
  )
}

export default AvisUtilisateurs
import RenderHtmlContent from 'components/shared/RenderHtmlContent';
import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';

function AvisUtilisateurs() {
  const {state} = useContext(ApplicationContext);
  return (  
    <>
      {
        state?.company?.avis ?(
          <section className="bg-white px-5">
            <section className="pt-20 pb-20 bg-no-repeat bg-left bg-contain bg-[url('/images/pages/offers-left-arc.svg')]">
            <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
              <span className='px-10 py-3'>
                Avis de nos stagiaires
              </span>
              <span className='border-b-2 border-app-blue px-10 w-64 mt-2'/>
            </h2>
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
                            <div className='text-left flex'>
                              {Array.from(Array(1*avis.moyenne).keys()).map((entry: number) => <AiFillStar className='text-2xl text-yellow-400' key={`moyenne-${entry}`} />)}
                              {Array.from(Array(5 - (1*avis.moyenne)).keys()).map((entry: number) => <AiOutlineStar key={`moyenne-${entry}`} />)}
                            </div>
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
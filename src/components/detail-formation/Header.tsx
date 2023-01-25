import AllTrainings from 'components/shared/AllTrainings'
import CPFLink from 'components/shared/CPFLink'
import RenderHtmlContent from 'components/shared/RenderHtmlContent'
import Link from 'next/link'
import React from 'react'
import { capitalize, slugify } from 'utils'

function Header({training, toogleDownloadForm}: any) {
  return (
    <>
    {
      (training) ? (
        <header className='bg-app-blue py-2 md:py-12'>
          <div className="md:px-0 container grid md:grid-cols-2">
            <div className="title">
              <h1 className='text-white text-2xl md:text-5xl font-bold mb-0 pb-0'>{training?.libelle}</h1>
              {
                training?.contenu ? (
                  <RenderHtmlContent content={training?.contenu} classes='text-white font-light text-lg py-8'/>
                ) : null
              }
              <div className="flex flex-col md:flex-row md:items-end">
                <AllTrainings 
                  training={training}
                  icon= {false}
                  link={`/nos-formations/votre-candidature?formation=${slugify(training.libelle)}-${training.id}`}
                  text="Je m'inscris"
                  classes='mr-5 bg-white flex-1 text-app-blue font-light px-20 py-3 border hover:bg-transparent hover:text-white hover:border hover:border-white'
                />
                {
                   (training.programmepdf ) ? 
                      <button type="button" onClick={toogleDownloadForm}
                        className="text-white mt-4 md:mt-0 px-4 justify-center items-center uppercase py-3 rounded-lg relative border border-app-white hover:bg-white hover:text-app-blue"
                      >
                        Je télécharge le programme
                      </button>
                    : 
                    null
                  }
              </div>

             <CPFLink data={training.cpf}/>
            </div>
            <span />
          </div>
        </header>
      ): null
    }
    </>
  )
}

export default Header

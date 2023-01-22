import AllTrainings from 'components/shared/AllTrainings'
import RenderHtmlContent from 'components/shared/RenderHtmlContent'
import React from 'react'
import { slugify } from 'utils'

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
              <div className="flex">
                <AllTrainings 
                  icon= {false}
                  link={`/nos-formations/votre-candidature?formation=${slugify(training.libelle)}-${training.id}`}
                  text="Je m'inscris"
                  classes='mr-5 bg-white text-app-blue font-light px-20 py-4 hover:bg-transparent hover:text-white hover:border hover:border-white'
                />
                {
                   (training.programmepdf ) ? 
                      <button type="button" onClick={toogleDownloadForm}
                        className="text-white flex justify-center items-center uppercase px-8 py-3 rounded-lg relative border border-app-white hover:bg-white hover:text-app-blue"
                      >
                        Je télécharge le programme
                      </button>
                    : 
                    null
                  }
              </div>
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

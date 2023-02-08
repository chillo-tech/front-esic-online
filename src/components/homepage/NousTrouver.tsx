import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import Carte from "components/homepage/Carte";
import AllTrainings from "components/shared/AllTrainings";
import { BsFillRecordFill } from 'react-icons/bs';
import SectionTitle from 'components/shared/SectionTitle';

function NousTrouver() {
  const {state} = useContext(ApplicationContext);
  return (
    <>
    {(state?.company?.adresses)? (
      <section className="bg-white overflow-hidden md:py-20 relative">
          <SectionTitle text="Où nous trouver ?" />
          <div className="lg:container">
              <div className="flex justify-center grid gap-2 lg:grid-cols-2 relative">
                  <Carte adresses={state?.company?.adresses}/>
                  <div className="p-8 z-1 hidden lg:block bg-white rounded-3xl shadow-lg shadow-indigo mx-20" style={{zIndex: 1}}>
                      <div className="capitalize">
                          <h2 className="font-bold text-3xl mb-8">Nos adresses</h2>
                      </div>
                      <ul className="list-none">
                          {
                              state?.company?.adresses.map((adresse: any, index: number) => (
                                  <li
                                      key={`adresse-${adresse.id}-${index}`}
                                      className="flex items-center mb-3 text-xl"
                                  >
                                      <BsFillRecordFill className="text-app-blue text-xl mr-4"/>
                                      {`${adresse.rue}, ${adresse.ville}`}
                                  </li>
                              ))
                          }
                      </ul>
                      <AllTrainings
                          text="Contactez nous"
                          link="/contactez-nous"
                          classes='mt-10 border border-app-blue text-sm text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue px-5 py-1'/>
                  </div>
              </div>
              <span className="z-0 hidden lg:block absolute h-96 w-96 top-3/4 left-3/4 bg-app-blue rounded-full"/>
          </div>
      </section>)
      : null
    }
    </>
  )
}

export default NousTrouver

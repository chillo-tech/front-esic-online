import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import Carte from "components/homepage/Carte";
import AllTrainings from "components/shared/AllTrainings";
import { BiCircle } from 'react-icons/bi';

function NousTrouver() {
  const {state} = useContext(ApplicationContext);
  console.log(state)

  return (
    <section className="bg-white overflow-hidden py-20 relative">
        <div className="container">
            <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
                <span className='px-10 py-3'>
                  Où nous trouver ?
                </span>
                <span className='border-b-2 border-app-blue px-10 w-64 mt-2'>

                </span>
            </h2>
        </div>
        <div className="md:container">
            <div className="flex justify-center grid gap-2 md:grid-cols-2">
                <Carte />
                <div className="z-1 hidden md:block bg-white rounded-3xl shadow-lg shadow-indigo mx-20" style={{zIndex: 1}}>
                    <div className="p-8">
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
                                        <BiCircle className="text-app-blue text-xl mr-4"/>
                                        {`${adresse.rue}, ${adresse.ville}`}
                                    </li>
                                ))
                            }
                        </ul>
                      </div>
                    <AllTrainings
                        text="Contactez nous"
                        link="/contactez-nous"
                        classes='border border-app-blue text-sm text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue px-5 py-1'/>
                </div>
            </div>
            <span className="z-0 hidden md:block absolute h-96 w-96 top-3/4 left-3/4 bg-app-blue rounded-full"/>
        </div>
    </section>
  )
}

export default NousTrouver

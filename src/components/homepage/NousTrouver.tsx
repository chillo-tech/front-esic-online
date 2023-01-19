import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'
import Carte from "components/homepage/Carte";
import AllTrainings from "components/shared/AllTrainings";

function NousTrouver() {
  const {state} = useContext(ApplicationContext);
  console.log(state);
  
  return (
    <section className='bg-white overflow-hidden py-20 relative'>
        <div className="container">
            <h2 className="font-bold text-3xl md:text-5xl mb-12 text-center flex flex-col justify-center items-center">
                <span className='px-10 py-3'>
                  Où nous trouver ?
                </span>
                <span className='border-b-2 border-app-blue px-10 w-64 mt-2'>

                </span>
            </h2>
            <div className="flex justify-center grid gap-2 md:grid-cols-2">
                <Carte />
                <div className="z-1 bg-white rounded-3xl shadow-lg shadow-indigo mx-20" style={{zIndex: 1}}>
                    <div className="p-8">
                        <div className="capitalize">
                            <h2 className="font-bold text-3xl mb-8">Company retreats</h2>
                        </div>
                        <ul className="list-none">
                            <li className="flex items-center mb-3">
                                <span className="mr-3 bg-app-blue w-2 h-2 rounded-full"></span>Nom dela ville</li>
                            <li className="flex items-center mb-3"> <span className="mr-2 bg-app-blue w-2 h-2 rounded-full"></span> Nom dela ville</li>
                            <li className="flex items-center mb-3"> <span className="mr-2 bg-app-blue w-2 h-2 rounded-full"></span> Nom dela ville</li>
                            <li className="flex items-center mb-3"> <span className="mr-2 bg-app-blue w-2 h-2 rounded-full"></span> Nom dela ville</li>
                            <li className="flex items-center mb-3"> <span className="mr-2 bg-app-blue w-2 h-2 rounded-full"></span> Nom dela ville</li>
                            <li className="flex items-center mb-3"> <span className="mr-2 bg-app-blue w-2 h-2 rounded-full"></span> Nom dela ville</li>
                        </ul>
                      </div>
                    <AllTrainings
                        text="Contactez nous"
                        classes='border border-app-blue text-sm text-app-blue hover:bg-transparent hover:bg-app-blue hover:text-white hover:border hover:border-app-blue px-5 py-1'/>
                </div>
            </div>
            <div className="z-0 absolute h-96 w-96 top-3/4 left-3/4 bg-app-blue rounded-full"></div>
        </div>
    </section>
  )
}

export default NousTrouver

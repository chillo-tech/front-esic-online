import OpenedLayout from 'containers/opened'
import React from 'react'
import Trainings from 'components/trainings'
import Search from 'components/trainings/search'

function NosFormations() {
  return (
    <OpenedLayout>
      <header className='py-20 bg-gradient-to-r from-blue-700 to-green-500'>      
        <div className="container text-white">
          <h3 className="text-extralight md:text-xl">Bienvenue chez le leader de la formation IT, Digital et Management</h3>
          <h2 className="font-extrabold text-2xl  md:text-5xl mb-6 text-white">
            Trouvez la formation qui vous convient
          </h2>
          <Search />
        </div>                
      </header>
      <Trainings title='Nos formations' />
    </OpenedLayout>
  )
}

export default NosFormations
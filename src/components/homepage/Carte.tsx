import { ApplicationContext } from 'context/ApplicationContext'
import React, { useContext } from 'react'

function Carte() {
  const {state} = useContext(ApplicationContext);
  console.log(state);
  
  return (
    <section className='bg-app-white overflow-hidden'>
     <div className="mapouter !w-screen">
        <div className="gmap_canvas !w-screen">
          <iframe width="2000" height="458" id="gmap_canvas" src="https://maps.google.com/maps?q=36%20Av.%20Pierre%20Brossolette,%2092240%20Malakoff&t=&z=11&ie=UTF8&iwloc=&output=embed" frameBorder="0" ></iframe>
          <a href="https://123movies-to.org">123movies</a><br />
          <a href="https://www.embedgooglemap.net">embed custom google map</a>
          </div>  
        </div>
    </section>
  )
}

export default Carte

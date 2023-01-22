import React from 'react'
import MenuItem from './MenuItem'
import Accordion from "containers/components/Accordion";

type Params = {
  items: any[]
}
function NavigationMobile({items}: Params) {
  console.log({navigationItem:items});
  return (

    <>
    {
      items.length ? (
        // <nav className='navigation uppercase md:mr-10 relative z-50'>
          <div className="pt-2">
             {items
              .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
              .map((item: any, index: any) => <Accordion item={item} key={`memu-${index}-${item.id}`}/>)}
          </div>
        // </nav>
      ) : null
    }
    </>
  )
}

export default NavigationMobile
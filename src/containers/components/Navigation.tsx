import React from 'react'
import MenuItem from './MenuItem'

type Params = {
  items: any[]
}
function Navigation({items}: Params) {
  return (

    <>
    {
      items.length ? (
        <nav className='navigation uppercase md:mr-2 relative z-50'>
          <ul className='md:flex'>
             {items
              .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
              .map((item: any, index: any) => <MenuItem item={item} key={`memu-${index}-${item.id}`}/>)}
          </ul>
        </nav>
      ) : null
    }
    </>
  )
}

export default Navigation
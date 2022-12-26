import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/slugify'
type Params = {
  items: any[]
}
function Navigation({items}: Params) {
  return (

    <>
    {
      items.length ? (
        <nav className='navigation'>
          <ul className='md:flex'>
             {items
              .sort((a: any, b:any) => a.ordre > b.ordre ? 1 : -1)
              .map((item: any, index: any) => (
                <li key={`md-${index}-${item.id}`}>
                  <Link href={`/${slugify(item.libelle)}-${item.id}`}
                        title={item.libelle}
                        className="block py-6 px-4 text-gray-700 text-xl text-center md:text-left hover:bg-green-600/10">
                     {item.libelle}
                  </Link> 
                </li>
              ))}
          </ul>
        </nav>
      ) : null
    }
    </>
  )
}

export default Navigation
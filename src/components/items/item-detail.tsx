import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/helpers'

function ItemDetail({path, data, subfield='souscategories', subFieldWrapper='sousCategories_id'}: any) {
  return (
    <article className=''>
      <h2 className='text-3xl font-extrabold text-gray-500 flex items-center justify-between w-full py-2 text-left border-b  border-green-700 focus:ring-4 focus:ring-gray-200'>
        {data.libelle}
      </h2>
      {
         data[subfield].length ? (
            <ul className='grid gap-2 py-2'>
              {
                data[subfield]
                  .map((sub: any)=>(
                    <li key={sub[subFieldWrapper].id}>
                      <Link 
                          href={`/${path}/${slugify(data.libelle)}/${slugify(sub[subFieldWrapper].libelle)}/${sub[subFieldWrapper].id}`}
                          className='hover:bg-slate-100 text-xl block py-2 px-4'
                        >
                        {sub[subFieldWrapper].libelle}
                      </Link>
                    </li>
                ))
              }
            
            </ul>
         ) : null 
      }
    </article>
  )
}

export default ItemDetail
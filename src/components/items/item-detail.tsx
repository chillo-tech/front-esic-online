import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/helpers'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

function ItemDetail({path, data, subfield='souscategories', subFieldWrapper='sousCategories_id'}: any) {
  return (
    <details className='mb-4 md:p-0'>
      <summary className='focus:ring-0 focus:ring-offset-0 hover:shadow-none focus:shadow-none cursor-pointer text-lg md:text-3xl font-extrabold text-gray-500 flex items-center justify-between w-full py-1 text-left border-b  border-green-700 focus:ring-gray-200'>
        <span>{data.libelle}</span>
        <span>
          <AiOutlinePlusCircle className="caret caret-down"/>
          <AiOutlineMinusCircle className="caret caret-up"/>
        </span>
      </summary>
      {
         data[subfield].length ? (
            <ul className='grid gap-2 py-2'>
              {
                data[subfield]
                  .map((sub: any)=>(
                    <li key={sub[subFieldWrapper].id}>
                      <Link 
                          href={`/${path}/${slugify(data.libelle)}-${data.id}/${slugify(sub[subFieldWrapper].libelle)}-${sub[subFieldWrapper].id}`}
                          className='hover:bg-slate-100 text-lg block py-1 px-4 font-sans font-extralight'
                        >
                        {sub[subFieldWrapper].libelle}
                      </Link>
                    </li>
                ))
              }
            
            </ul>
         ) : null 
      }
    </details>
  )
}

export default ItemDetail

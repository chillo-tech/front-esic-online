import Link from 'next/link'
import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi';
import { slugify } from 'utils/slugify'
import DropDown from './DropDown';

function MenuItem({item}: any) {
  console.log({item});
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className='relative border border-red-10'>
      {(item.categories.length || (item.pages.length && item.pages.length > 1)) ? (
        <>
          <button type="button" aria-haspopup="menu" 
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            className={`flex justify-between items-center uppercase block py-6 px-2 text-sm text-center ${dropdown ? 'text-app-blue': 'text-gray-700'}`}>
            <span className='mr-1'>{item.libelle}</span>
            <BiChevronDown className='text-xl'/>
          </button>
          <DropDown dropdown={dropdown} parent={item.libelle} pages={item.pages} categories={item.categories} />
        </>
      ) : (
        <Link href={`/${slugify(item.libelle)}-${item.id}`}
          title={item.libelle}
              className="block py-6 px-4 text-gray-700 text-sm text-center">
            {item.libelle}
        </Link> 
      )}
        
    </li>
  )
}

export default MenuItem

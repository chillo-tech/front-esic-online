import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/slugify'

function DropDown({dropdown, parent, categories, pages}: any) {
  console.log({categories, pages});
  return (
    <div className={`${dropdown ? "rounded-md shadow-2xl absolute z-50 -ml-20 left-1/2 bg-white" : "hidden"}`}>
      {
        (categories.length) ? (
          <ul className="dropdown">
            {categories.map((categorie: any, index: number) => (
              <li key={`menu-categorie-${index}`} className="menu-items">
                <Link
                  href={`/${slugify(parent)}/${slugify(
                    categorie.categories_id.libelle
                  )}-${categorie.categories_id.id}`}
                  className="py-2 block text-sm whitespace-nowrap px-3"
                  title={categorie.libelle}>
                    {categorie.categories_id.libelle}
                </Link> 
              </li>
            ))}
          </ul>
        ): null 
      }
      {
        (pages.length) ? (
          <ul className="dropdown">
            {pages.map((page: any, index: number) => (
              <li key={`menu-page-${index}`} className="menu-items">
                <Link
                  href={`/${slugify(parent)}/${slugify(
                    page.pages_id.libelle
                  )}-${page.pages_id.id}`}
                  className="py-2 block text-sm whitespace-nowrap px-3"
                  title={page.libelle}>
                    {page.pages_id.libelle}
                </Link> 
              </li>
            ))}
          </ul>
        ): null 
      }
    </div>
  )
}

export default DropDown

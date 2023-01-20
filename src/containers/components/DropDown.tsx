import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/slugify'

function DropDown({dropdown, parent, categories, pages}: any) {
  return (
    <div className={`${dropdown ? "rounded-full shadow-2xl absolute z-50 bg-white flex" : "hidden"}`}>
      {/*{*/}
      {/*  (categories.length) ? (*/}
      {/*    <ul className="dropdown">*/}
      {/*      {categories.map((categorie: any, index: number) => (*/}
      {/*        <li key={`menu-categorie-${index}`} className="menu-items">*/}
      {/*          <Link*/}
      {/*            href={`/${slugify(parent)}/${slugify(*/}
      {/*              categorie.categories_id.libelle*/}
      {/*            )}-${categorie.categories_id.id}`}*/}
      {/*            className="py-2 block text-sm whitespace-nowrap px-3"*/}
      {/*            title={categorie.libelle}>*/}
      {/*              {categorie.categories_id.libelle}*/}
      {/*          </Link> */}
      {/*        </li>*/}
      {/*      ))}*/}
      {/*    </ul>*/}
      {/*  ): null */}
      {/*}*/}
      <div className="grid gap-6 md:grid-cols-2 shadow-indigo bg-white">
          <div>Nos meilleures formations</div>
          <div>Nos meilleures formations</div>
          <div>Nos meilleures formations</div>
          <div>Nos meilleures formations</div>
          <div>Nos meilleures formations</div>
          <div>Nos meilleures formations</div>
      </div>
        <div className="flex-cols shadow-indigo bg-app-blue">
            <div>Nos meilleures formations</div>
            <div>Nos meilleures formations</div>
            <div>Nos meilleures formations</div>
            <div>04</div>
            <div>05</div>
            <div>06</div>
        </div>

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

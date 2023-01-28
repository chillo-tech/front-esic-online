import Link from 'next/link'
import React from 'react'
import {slugify} from 'utils/slugify'
import SubMenuItem from "containers/components/SubMenuItem";

function DropDown({dropdown, parent, categories, pages, parentWidth}: any) {
  console.log(parentWidth)
  return (
      <div className={`${dropdown ? "rounded-md shadow-2xl absolute z-50 -ml-20 left-1/2 bg-white" : "hidden"}`}>
        {
          (categories.length) ? (
              <ul className="dropdown relative caret-up-before">
                <div style={{width: 20, height: 20, background: '#fff', top: -11, left: `${parentWidth-8}px`, position: 'absolute', transform: 'rotate(45deg)', boxShadow: '-1px -1px #e5e7eb'}}/>
                {categories.map((categorie: any, index: number) => (
                    <SubMenuItem
                        grandparent={parent}
                        parent={slugify(`${categorie.categories_id.libelle}-${categorie.categories_id.id}`)}
                        item={categorie.categories_id}
                        key={`menu-categorie-${index}-${categorie.categories_id.id}`}
                    />
                ))}
              </ul>
        ): null
      }
      {
        (pages.length) ? (
            <ul className="dropdown relative caret-up-before">
              <div style={{width: 20, height: 20, background: '#fff', top: -11, left: `${parentWidth-15}px`, position: 'absolute', transform: 'rotate(45deg)', boxShadow: '-1px -1px #e5e7eb'}}/>
              {pages
                  .filter((a: any) => {
                    return (a !== null && a.pages_id !== null)
                  })
                  .map((page: any, index: number) => (
                      <li key={`menu-page-${index}`} className="menu-items">
                        <Link
                            href={`/${slugify(parent)}/${slugify(
                                page.pages_id.libelle
                            )}-${page.pages_id.id}`}
                            className="py-2 block text-sm whitespace-nowrap px-4"
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

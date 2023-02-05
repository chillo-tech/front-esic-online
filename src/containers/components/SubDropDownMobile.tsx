import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/slugify'

function SubDropDownMobile({isShowing, parent, grandparent, souscategories, certifications, cols}: any) {

  return (
      <div
          className={`border-t border-gray-400 pt-4 mt-4 font-normal uppercase text-gray-700 ${isShowing ? 'block' : 'hidden'}`}>
          {/*className={`${dropdown ? "rounded-md shadow-2xl absolute z-50 top-2.5 left-full bg-white" : "hidden"}`}>*/}
        {
          (souscategories && souscategories.length > 0) ? (
              <ul className={`dropdown`}>
                {souscategories
                    .filter((a: any) => { return (a !== null && a.souscategories_id !== null) } )
                    .sort((a: any, b: any) => { return a.souscategories_id.libelle.toLowerCase().localeCompare(b.souscategories_id.libelle.toLowerCase()) })
                    .map((souscategorie: any, index: number) => (
                    <li key={`menu-categorie-${index}`} className="menu-items">
                      <Link
                          href={`/${grandparent}/${parent}/${slugify(
                              souscategorie?.souscategories_id?.libelle
                          )}-${souscategorie.souscategories_id?.id}`}
                          className="py-2 block text-md whitespace-nowrap px-4"
                          title={souscategorie?.souscategories_id?.libelle}>
                        {souscategorie?.souscategories_id?.libelle}
                      </Link>
                    </li>
                ))}
              </ul>
          ): null
        }
          {
              (certifications && certifications.length > 0) ? (
                  <ul className={`dropdown`}>
                      {certifications
                          .filter((a: any) => { return (a !== null && a.certifications_id !== null) } )
                          .sort((a: any, b: any) => { return a.certifications_id.nom.toLowerCase().localeCompare(b.certifications_id.nom.toLowerCase()) })
                          .map((souscategorie: any, index: number) => (
                              <li key={`menu-categorie-${index}`} className="menu-items">
                                  <Link
                                      href={`/certifications/${slugify(
                                          souscategorie?.certifications_id?.nom
                                      )}-${souscategorie.certifications_id?.id}`}
                                      className="py-2 block text-md whitespace-nowrap px-4"
                                      title={souscategorie?.certifications_id?.nom}>
                                      {souscategorie?.certifications_id?.nom}
                                  </Link>
                              </li>
                          ))}
                  </ul>
              ): null
          }

      </div>
  )
}

export default SubDropDownMobile

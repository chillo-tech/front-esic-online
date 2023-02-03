import Link from 'next/link'
import React from 'react'
import { slugify } from 'utils/slugify'

function SubDropDown({dropdown, parent, grandparent, souscategories, certifications, cols}: any) {

  return (
      <div
          className={`${dropdown ? "rounded-md shadow-2xl absolute z-50 top-2.5 left-full bg-white" : "hidden"}`}>
        {
          (souscategories && souscategories.length > 0) ? (
              <ul className={`dropdown ${cols > 8 ? ' grid grid-rows-9  grid-flow-col gap-1' : ''}`}>
                {souscategories
                    .filter((a: any) => { return (a !== null && a.souscategories_id !== null) } )
                    .sort((a: any, b: any) => { return a.souscategories_id.libelle.toLowerCase().localeCompare(b.souscategories_id.libelle.toLowerCase()) })
                    .map((souscategorie: any, index: number) => (
                    <li key={`menu-categorie-${index}`} className="menu-items">
                      <Link
                          href={`/${grandparent}/${parent}/${slugify(
                              souscategorie?.souscategories_id?.libelle
                          )}-${souscategorie.souscategories_id?.id}`}
                          className="py-2 block text-sm whitespace-nowrap px-4"
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
              <ul className={`dropdown ${cols > 8 ? ' grid grid-rows-8  grid-flow-col gap-1' : ''}`}>
                {certifications
                    .filter((a: any) => { return (a !== null && a.certifications_id !== null) } )
                    .sort((a: any, b: any) => { return a.certifications_id.nom.toLowerCase().localeCompare(b.certifications_id.nom.toLowerCase()) })
                    .map((certification: any, index: number) => (
                    <li key={`menu-categorie-${index}`} className="menu-items">
                      <Link
                          href={`/certifications/${slugify(
                              certification?.certifications_id?.nom
                          )}-${certification.certifications_id?.id}`}
                          className="py-2 block text-sm whitespace-nowrap px-4"
                          title={certification?.certifications_id?.nom}>
                        {certification?.certifications_id?.nom}
                      </Link>
                    </li>
                ))}
              </ul>
          ): null
        }
      </div>
  )
}

export default SubDropDown

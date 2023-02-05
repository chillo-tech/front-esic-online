import Link from 'next/link'
import React from 'react'
import {slugify} from 'utils/slugify'
import SubAccordionItem from "containers/components/SubAccordionItem";

function DropdownMobile({isShowing, parent, categories, pages}: any) {

    return (
        <div
            className={`border-t border-gray-400 pt-4 mt-4 font-normal uppercase text-gray-700 ${isShowing ? 'block' : 'hidden'}`}>
            {
                (categories.length) ? (
                    <ul className="dropdown">
                        {categories.map((categorie: any, index: number) => (
                            <SubAccordionItem
                                grandparent={parent}
                                parent={slugify(`${categorie.categories_id.libelle}-${categorie.categories_id.id}`)}
                                item={categorie.categories_id}
                                key={`menu-categorie-${index}-${categorie.categories_id.id}`}
                            />
                        ))}
                    </ul>
                ) : null
            }
            {
                (pages.length) ? (
                    <ul className="dropdown">
                        {pages
                        .filter((a: any) => { return (a !== null && a.pages_id !== null) } )
                        .map((page: any, index: number) => (
                            <li key={`menu-page-${index}`} className="menu-items">
                                <Link
                                    href={`/${slugify(parent)}/${slugify(
                                        page.pages_id.libelle
                                    )}-${page.pages_id.id}`}
                                    className="block mt-4 text-xl font-normal uppercase text-gray-700"
                                    title={page.libelle}>
                                    {page.pages_id.libelle}
                                </Link>
                            </li>
                        ))}
                    </ul>
                ) : null
            }
        </div>
    )
}

export default DropdownMobile

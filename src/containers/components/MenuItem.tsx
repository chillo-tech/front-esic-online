import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import {BiChevronDown} from 'react-icons/bi';
import {slugify} from 'utils/slugify'
import DropDown from './DropDown';

function MenuItem({item}: any) {
    // console.log({item});
    const [dropdown, setDropdown] = useState(false);

    let ref = useRef<HTMLLIElement>(null)

    useEffect(() => {
        const handler = (event: any) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);

    if ((item.categories.length && item.categories.length > 1) || (item.pages.length && item.pages.length > 1)) {
        return (
            <li className='relative border-red-10' ref={ref}>
                <button type="button" aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                        className={`flex justify-between items-center uppercase block py-6 px-2 text-sm text-center ${dropdown ? 'text-app-blue' : 'text-gray-700'}`}>
                    <span className='mr-1'>{item.libelle}</span>
                    <BiChevronDown className='text-xl'/>
                </button>
                <DropDown dropdown={dropdown} parent={slugify(`${item.libelle}`)} pages={item.pages}
                          categories={item.categories}/>
            </li>
        )
    }
    if ((item.categories.length && item.categories.length === 1) || (item.pages.length && item.pages.length === 1)) {
        return (
            <>
                {item.pages.length === 1 ?
                    (<li className='relative border-red-10' ref={ref}>
                        <Link href={`/${slugify(item.pages[0].pages_id.libelle)}-${item.pages[0].pages_id.id}`}
                              title={item.pages[0].pages_id.libelle}
                              className="block py-6 px-4 text-gray-700 text-sm text-center">
                            {item.libelle}
                        </Link>
                    </li>) : null}
                {item.categories.length === 1 ?
                    (<li className='relative border-red-10' ref={ref}>
                        <Link
                            href={`/${slugify(item.categories[0].categories_id.libelle)}-${item.categories[0].categories_id.id}`}
                            title={item.categories[0].categories_id.libelle}
                            className="block py-6 px-4 text-gray-700 text-sm text-center">
                            {item.libelle}
                        </Link>
                    </li>) : null}
            </>
        )
    }
    return (
        <li className='relative border-red-10' ref={ref}>
            <Link href={`/${slugify(item.libelle)}-${item.id}`}
                  title={item.libelle}
                  className="block py-6 px-4 text-gray-700 text-sm text-center">
                {item.libelle}
            </Link>
        </li>
    )
}

export default MenuItem

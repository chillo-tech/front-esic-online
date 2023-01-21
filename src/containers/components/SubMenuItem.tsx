import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import {BiChevronRight} from 'react-icons/bi';
import {slugify} from 'utils/slugify'
import SubDropDown from "containers/components/SubDropDown";

function SubMenuItem({item, grandparent, parent}: any) {
  console.log({item, parent, grandparent});
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

  return (
    <li className='relative border-red-10' ref={ref}>
      {(item.souscategories && item.souscategories.length > 0) ? (
          <div className="">
            <button type="button" aria-haspopup="menu"
                    aria-expanded={dropdown ? "true" : "false"}
                    onClick={() => setDropdown((prev) => !prev)}
                    className={`whitespace-nowrap flex w-56 justify-between items-center uppercase block py-2 px-4 text-sm ${dropdown ? 'text-app-blue': 'text-gray-700'}`}>
              <span className='mr-1'>{item.libelle}</span>
              <BiChevronRight className='text-xl'/>
            </button>
            <SubDropDown
                dropdown={dropdown}
                grandparent={grandparent}
                parent={parent}
                souscategories={item.souscategories}
            />
          </div>
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

export default SubMenuItem

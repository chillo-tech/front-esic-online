import Link from 'next/link'
import React, {useEffect, useRef, useState} from 'react'
import {BiChevronDown, BiChevronRight, BiChevronUp} from 'react-icons/bi';
import {slugify} from 'utils/slugify'
import SubDropDown from "containers/components/SubDropDown";
import SubDropDownMobile from "containers/components/SubDropDownMobile";

function SubAccordionItem({item, grandparent, parent}: any) {
  console.log({item, parent, grandparent});
  const [isShowing, setIsShowing] = useState(false);

  let ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    const handler = (event: any) => {
      if (isShowing && ref.current && !ref.current.contains(event.target)) {
        setIsShowing(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [isShowing]);

  return (
    <li className='relative text-left w-full pt-4' ref={ref}>
      {(item.souscategories && item.souscategories.length > 0) ? (
          <div className="whitespace-nowrap">
            <button type="button" aria-haspopup="menu"
                    aria-expanded={isShowing ? "true" : "false"}
                    onClick={() => setIsShowing((prev) => !prev)}
                    className={`flex w-full justify-between whitespace-nowrap uppercase block text-2xl ${isShowing ? 'text-app-blue': 'text-gray-700'}`}>
              <span className=''>{item.libelle}</span>
              {
                isShowing ? <BiChevronUp className='text-2xl'/> : <BiChevronDown className='text-2xl'/>
              }
            </button>
            <SubDropDownMobile
                isShowing={isShowing}
                grandparent={grandparent}
                parent={parent}
                souscategories={item.souscategories}
                cols={item.souscategories.length}
            />
          </div>
      ) : (
          <Link href={`/${slugify(item.libelle)}-${item.id}`}
                title={item.libelle}
                className="block text-2xl font-medium uppercase text-gray-700">
            {item.libelle}
          </Link>
      )}
    </li>
  )
}

export default SubAccordionItem

import React, {useEffect, useRef, useState} from "react";
import {BiChevronDown, BiChevronUp} from "react-icons/bi";
import {slugify} from 'utils/slugify'
import Link from "next/link";
import DropdownMobile from "containers/components/DropdownMobile";

function Accordion({item}: any) {
    const [isShowing, setIsShowing] = useState(false);

    const toggle = () => {
        setIsShowing(!isShowing);
    };

    let ref = useRef<HTMLDivElement>(null)

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

    if (
        (item.categories.length && item.categories.length > 1)
        || (item.pages.length && item.pages.length > 1)
    ) {
        return (
            <div className="w-full pt-4" ref={ref}>
                <button
                    className={`w-full relative flex justify-between whitespace-nowrap text-2xl font-medium uppercase ${isShowing ? 'text-app-blue' : 'text-gray-700'}`}
                    onClick={toggle}
                    type="button"
                >
                    <span className=''>{item.libelle}</span>
                    {
                        isShowing ? <BiChevronUp className='text-4xl'/> : <BiChevronDown className='text-4xl'/>
                    }
                </button>
                <DropdownMobile
                    isShowing={isShowing}
                    parent={slugify(`${item.libelle}`)}
                    pages={item.pages}
                    categories={item.categories}
                />
                {/*<div*/}
                {/*    className={`border-t border-gray-400 pt-4 mt-4 text-2xl font-normal uppercase text-gray-700 ${isShowing ? 'block' : 'hidden'}`}*/}
                {/*    dangerouslySetInnerHTML={{*/}
                {/*        __html: item.libelle*/}
                {/*    }}*/}
                {/*/>*/}
            </div>
        )
    }

    if ((item.categories.length && item.categories.length === 1) || (item.pages.length && item.pages.length === 1)) {
        return (
            <>
                {item.pages.length === 1 ?
                    (<div className='text-left relative w-full pt-4' ref={ref}>
                        <Link href={`/${slugify(item.pages[0].pages_id.libelle)}-${item.pages[0].pages_id.id}`}
                              title={item.pages[0].pages_id.libelle}
                              className="block text-2xl font-medium uppercase text-gray-700">
                            {item.libelle}
                        </Link>
                    </div>) : null}
                {item.categories.length === 1 ?
                    (<div className='text-left relative w-full pt-4' ref={ref}>
                        <Link
                            href={`/${slugify(item.categories[0].categories_id.libelle)}-${item.categories[0].categories_id.id}`}
                            title={item.categories[0].categories_id.libelle}
                            className="block text-2xl font-medium uppercase text-gray-700">
                            {item.libelle}
                        </Link>
                    </div>) : null}
            </>
        )
    }

    return (
        <div className='text-left relative w-full pt-4' ref={ref}>
            <Link href={`/${slugify(item.libelle)}-${item.id}`}
                  title={item.libelle}
                  className="block text-2xl font-medium uppercase text-gray-700">
                {item.libelle}
            </Link>
        </div>
    )
}

export default Accordion;

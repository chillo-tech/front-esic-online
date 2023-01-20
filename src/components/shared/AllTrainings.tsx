import classNames from 'classnames';
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle, BsArrowRightShort } from 'react-icons/bs'
interface Params {
  text?: string;
  link?: string;
  icon?: boolean;
  classes?:string
}
function AllTrainings({
  icon= true,
  link="/nos-formations",
  text="Voir toutes nos formations", 
  classes
}: Params) {
  
  return (
    <span className={classNames('flex justify-center items-center')}>
      <Link href={link} className={
          classNames(
            'flex justify-center items-center px-8 py-3 rounded-lg relative uppercase', classes)
        }>
        <span>{text}</span>                    
        {icon && <BsArrowRightShort className="text-4xl ml-5"/> }
      </Link>  
    </span>
  )
}

export default AllTrainings

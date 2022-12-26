import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
interface Params {
  text?: string;
  classes?:string
}
function AllTrainings({text="Voir toutes nos formations", classes}: Params) {
  return (
    <div className='flex justify-end items-center text-blue-700 pt-3'>
      <Link href="/nos-formations" className='flex items-center'> 
        <BsArrowRightCircle className='mr-2' /> 
        {text}
      </Link>
    </div>
  )
}

export default AllTrainings

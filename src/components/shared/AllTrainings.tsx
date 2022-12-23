import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

function AllTrainings() {
  return (
    <div className='flex justify-end items-center text-blue-700 text-xl py-3'>
      <Link href="/formations" className='flex items-center'> 
        <BsArrowRightCircle className='mr-2' /> Voir toutes nos formations</Link>
    </div>
  )
}

export default AllTrainings

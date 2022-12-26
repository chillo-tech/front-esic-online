import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'

function ContactUsText() {
  return (
    <p className='py-3'>
      <Link href="/contactez-nous" className='flex items-center text-blue-900'> 
        <BsArrowRightCircle className='mr-2 text-blue-900' /> 
        Contactez nous pour en savoir plus
      </Link>
    </p>
  )
}

export default ContactUsText

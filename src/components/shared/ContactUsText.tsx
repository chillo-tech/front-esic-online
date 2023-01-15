import classNames from 'classnames';
import Link from 'next/link'
import React from 'react'
import { BsArrowRightCircle } from 'react-icons/bs'
interface Params {
  text?: string;
  link?: string;
  classes?:string
}
function ContactUsText({
  link = "/contactez-nous",
  text = "Contactez nous pour en savoir plus", 
  classes
}: Params) {
  return (
    <p className={classNames("flex pt-5", {[`${classes}`]:true})}>
      <Link href="/contactez-nous" className='flex items-center'> 
        <BsArrowRightCircle className='mr-2' /> 
        {text}
      </Link>
    </p>
  )
}

export default ContactUsText

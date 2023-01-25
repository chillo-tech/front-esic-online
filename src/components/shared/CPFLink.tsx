import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { capitalize } from 'utils/capitalize'

function CPFLink({data}: any) {
  return (
   <>
     {(data && data.length) ? (
      <Link 
          href={data[0].lien} target="_blank"
          className={classNames(
              "hover:bg-white hover:text-app-blue text-white pl-2 py-2 md:w-2/3",
              "border border-white rounded-xl flex flex-col items-center my-3 justify-center",
              "bg-[length:100px_100px] bg-no-repeat bg-[right_center] bg-[url('/images/logo-cpf.png')]"
            )}>
            <span className="font-bold text-left w-full items-center text-2xl">
              {capitalize('Cliquez ici')}
            </span>
            <span className="text-left w-full items-center text-xl">
              {capitalize('Inscrivez-vous à cette formation')}
            </span>
            <span className="text-left w-full items-center text-xl">
              {capitalize('en 2 minutes et avec votre CPF')}
            </span>
        </Link>
      ) : null}
   </>
  )
}

export default CPFLink
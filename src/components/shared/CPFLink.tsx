import classNames from 'classnames'
import Link from 'next/link'
import React from 'react'
import { capitalize } from 'utils/capitalize'

function CPFLink({data, classes}: any) {
  return (
   <>
     {(data && data.length) ? (
      <Link 
          href={data[0].lien} target="_blank"
          className={classNames(
              classes,
              "hover:bg-white hover:text-app-blue text-white pl-2 py-1 -pr-3",
              "border border-white rounded-xl flex flex-col items-center justify-center",
              "bg-[length:70px_70px] bg-no-repeat bg-[right_center] bg-[url('/images/logo-cpf.png')]"
            )}>
            <span className="font-bold text-left w-full items-center text-md">
              {capitalize('Cliquez ici')}
            </span>
            <span className="text-left w-full items-center text-xs">
              {capitalize('Inscrivez-vous à cette formation')}
            </span>
            <span className="text-left w-full items-center text-xs">
              {capitalize('en 2 minutes et avec votre CPF')}
            </span>
        </Link>
      ) : null}
   </>
  )
}

export default CPFLink

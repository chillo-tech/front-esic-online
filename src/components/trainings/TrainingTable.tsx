import React from 'react'
import { BiCoinStack } from 'react-icons/bi'
import { BsBarChart } from 'react-icons/bs';
import { AiOutlineClockCircle } from 'react-icons/ai';
import Link from 'next/link';

function TrainingTable({data, link}: any) {
  return (
    <Link href={`${link}`} title={data.libelle}>
      <article className="items-center my-2 bg-gray-white px-6 py-2 grid md:grid-cols-7 rounded-lg text-gray-700">
        <div className='md:col-span-4 md:py-2 flex flex-col'>
          <h2 className="text-2xl font-extrabold pb-2 md:pr-10">{data.libelle}</h2>
          <p className="flex justify-between md:justify-start">
          {
              data.jours ? 
              <span className="flex items-center py-2 pr-3">
                <AiOutlineClockCircle className="mr-2 text-green-600 text-xl" />
                <span>{data.jours} Jours</span>
              </span>
              : 
              null
            }{
              data.heures ? 
              <span className="flex items-center py-2 pr-3">
                <AiOutlineClockCircle className="mr-2 text-green-600 text-xl" />
                <span>{data.heures} Heures</span>
              </span>
              : 
              null
            }
          </p>
        </div>
        <div className='md:col-span-2'>
        {
          (data.cpf) ? 
          <p className="flex items-center pr-3">
            <BiCoinStack className="mr-2 text-yellow-600 text-xl"/> 
            Eligible au CPF
          </p> 
          : 
          null
        }
        <p className="flex items-center my-1">
          <BsBarChart className="mr-2 text-green-600 text-xl"/> 
          <span>
            {data.niveau === "BEGINNER" ? 'Débutant': null}
            {data.niveau === "INTERMEDIARY" ? 'Intermediaire': null}
            {data.niveau === "ADVANCED" ? 'Avancé': null}
          </span>
        </p> 
        </div>
        <div className='md:flex-col flex justify-between text-center'>
          <div className='md:flex-col flex'>
            <p className='mr-3 md:mr-0'>{data.presentiel ? 'Présentiel': null}</p>
            <p>{data.distanciel ? 'Classe à distance': null}</p>
          </div>
          {data.prix ?(<p className='font-extrabold text-center'> {data.prix} </p>): null}
        </div>
      </article>
    </Link>
  )
}

export default TrainingTable
